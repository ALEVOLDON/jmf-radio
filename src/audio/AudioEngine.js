export class AudioEngine {
  constructor(onTrackChange, onTransition) {
    this.onTrackChange = onTrackChange;
    this.onTransition = onTransition;

    // Dual Hardware-Style Decks
    this.audioA = new Audio();
    this.audioB = new Audio();
    this.audioA.crossOrigin = "anonymous";
    this.audioB.crossOrigin = "anonymous";

    this.activeDeck = 'A'; // 'A' or 'B'
    this.mixMode = 'dj';   // 'dj' or 'radio'
    this.crossfadeDuration = 8.0;
    this.isCrossfading = false;
    this.crossfadeProgress = 0; // 0 (Deck A) to 1 (Deck B)
    this.crossfadeStartTime = 0;

    // Web Audio Graph
    this.audioContext = null;
    this.analyser = null;
    this.masterGain = null;

    // Deck A Audio Nodes
    this.chGainA = null;
    this.xFaderGainA = null;
    this.eqLowA = null;
    this.eqMidA = null;
    this.eqHighA = null;
    this.filterSweepA = null;

    // Deck B Audio Nodes
    this.chGainB = null;
    this.xFaderGainB = null;
    this.eqLowB = null;
    this.eqMidB = null;
    this.eqHighB = null;
    this.filterSweepB = null;

    // Deck Control States
    this.deckStates = {
      A: { isPlaying: false, cueTime: 0, pitch: 1.0, loopActive: false, loopBeats: 0, loopStart: 0, loopEnd: 0 },
      B: { isPlaying: false, cueTime: 0, pitch: 1.0, loopActive: false, loopBeats: 0, loopStart: 0, loopEnd: 0 }
    };

    this.isPlaying = false;
    this.isMuted = false;
    this.volume = 0.8;

    this.currentTrack = null;
    this.nextTrack = null;
    this.elapsedTime = 0;
    this.duration = 180;
    this.queue = [];
    this.history = [];
    this.totalTracks = 0;

    this.dataArray = null;
    this.freqData = null;

    this.analysis = {
      bass: 0,
      mids: 0,
      treble: 0,
      volume: 0,
      rawArray: [],
      beat: 0,
      activeDeck: 'A',
      crossfadeProgress: 0,
      isCrossfading: false,
      deckALevel: 0,
      deckBLevel: 0
    };

    this.prevBass = 0;
    this.statusInterval = null;
    this.isTransitionTriggered = false;

    this.audioA.addEventListener('ended', () => this.handleTrackEnd('A'));
    this.audioB.addEventListener('ended', () => this.handleTrackEnd('B'));
  }

  async initAudioContext() {
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioContext = new AudioCtx();

      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 512;
      this.analyser.smoothingTimeConstant = 0.85;

      this.masterGain = this.audioContext.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.audioContext.currentTime);

      // --- Build DECK A Audio Processing Chain ---
      const sourceA = this.audioContext.createMediaElementSource(this.audioA);
      this.eqLowA = this.audioContext.createBiquadFilter();
      this.eqLowA.type = 'lowshelf';
      this.eqLowA.frequency.value = 120;

      this.eqMidA = this.audioContext.createBiquadFilter();
      this.eqMidA.type = 'peaking';
      this.eqMidA.frequency.value = 1000;
      this.eqMidA.Q.value = 1.0;

      this.eqHighA = this.audioContext.createBiquadFilter();
      this.eqHighA.type = 'highshelf';
      this.eqHighA.frequency.value = 8000;

      this.filterSweepA = this.audioContext.createBiquadFilter();
      this.filterSweepA.type = 'lowpass';
      this.filterSweepA.frequency.value = 22000;

      this.chGainA = this.audioContext.createGain();
      this.chGainA.gain.value = 1.0; // Channel 1 Fader

      this.xFaderGainA = this.audioContext.createGain();
      this.xFaderGainA.gain.value = 1.0; // Crossfader A

      sourceA.connect(this.eqLowA);
      this.eqLowA.connect(this.eqMidA);
      this.eqMidA.connect(this.eqHighA);
      this.eqHighA.connect(this.filterSweepA);
      this.filterSweepA.connect(this.chGainA);
      this.chGainA.connect(this.xFaderGainA);
      this.xFaderGainA.connect(this.masterGain);

      // --- Build DECK B Audio Processing Chain ---
      const sourceB = this.audioContext.createMediaElementSource(this.audioB);
      this.eqLowB = this.audioContext.createBiquadFilter();
      this.eqLowB.type = 'lowshelf';
      this.eqLowB.frequency.value = 120;

      this.eqMidB = this.audioContext.createBiquadFilter();
      this.eqMidB.type = 'peaking';
      this.eqMidB.frequency.value = 1000;
      this.eqMidB.Q.value = 1.0;

      this.eqHighB = this.audioContext.createBiquadFilter();
      this.eqHighB.type = 'highshelf';
      this.eqHighB.frequency.value = 8000;

      this.filterSweepB = this.audioContext.createBiquadFilter();
      this.filterSweepB.type = 'lowpass';
      this.filterSweepB.frequency.value = 22000;

      this.chGainB = this.audioContext.createGain();
      this.chGainB.gain.value = 1.0; // Channel 2 Fader

      this.xFaderGainB = this.audioContext.createGain();
      this.xFaderGainB.gain.value = 0.0; // Crossfader B

      sourceB.connect(this.eqLowB);
      this.eqLowB.connect(this.eqMidB);
      this.eqMidB.connect(this.eqHighB);
      this.eqHighB.connect(this.filterSweepB);
      this.filterSweepB.connect(this.chGainB);
      this.chGainB.connect(this.xFaderGainB);
      this.xFaderGainB.connect(this.masterGain);

      // Master Chain -> Analyser -> Output
      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.audioContext.destination);

      const bufferLength = this.analyser.frequencyBinCount;
      this.freqData = new Uint8Array(bufferLength);
      this.dataArray = new Uint8Array(bufferLength);
    }

    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }
  }

  // --- Real-time DJ Hardware Controls ---

  // 3-Band Equalizer (band: 'low' | 'mid' | 'high', gainDb: -26 to +6)
  setEQ(deck, band, gainDb) {
    if (!this.audioContext) return;
    const now = this.audioContext.currentTime;
    const target = deck === 'A' ? (band === 'low' ? this.eqLowA : band === 'mid' ? this.eqMidA : this.eqHighA)
                                : (band === 'low' ? this.eqLowB : band === 'mid' ? this.eqMidB : this.eqHighB);
    if (target) target.gain.setTargetAtTime(gainDb, now, 0.05);
  }

  // Color Filter Sweep (val: 0.0 [Full LPF] to 0.5 [Neutral] to 1.0 [Full HPF])
  setFilterSweep(deck, val) {
    if (!this.audioContext) return;
    const now = this.audioContext.currentTime;
    const filter = deck === 'A' ? this.filterSweepA : this.filterSweepB;
    if (!filter) return;

    if (val < 0.48) {
      filter.type = 'lowpass';
      const freq = Math.max(100, Math.pow(val / 0.5, 2) * 20000);
      filter.frequency.setTargetAtTime(freq, now, 0.05);
    } else if (val > 0.52) {
      filter.type = 'highpass';
      const freq = Math.pow((val - 0.5) / 0.5, 2) * 8000;
      filter.frequency.setTargetAtTime(freq, now, 0.05);
    } else {
      filter.type = 'lowpass';
      filter.frequency.setTargetAtTime(22000, now, 0.05);
    }
  }

  // Channel Volume Fader (0.0 to 1.0)
  setChannelGain(deck, val) {
    if (!this.audioContext) return;
    const gainNode = deck === 'A' ? this.chGainA : this.chGainB;
    if (gainNode) gainNode.gain.setValueAtTime(Math.max(0, Math.min(1, val)), this.audioContext.currentTime);
  }

  // Crossfader Position (0.0 = Deck A, 1.0 = Deck B)
  setCrossfader(val) {
    this.crossfadeProgress = Math.max(0, Math.min(1, val));
    if (!this.audioContext || !this.xFaderGainA || !this.xFaderGainB) return;
    
    // Equal-power curve
    const gainA = Math.cos(this.crossfadeProgress * 0.5 * Math.PI);
    const gainB = Math.sin(this.crossfadeProgress * 0.5 * Math.PI);
    this.xFaderGainA.gain.setValueAtTime(gainA, this.audioContext.currentTime);
    this.xFaderGainB.gain.setValueAtTime(gainB, this.audioContext.currentTime);
  }

  // Transport: CUE button
  cueDeck(deck) {
    const audio = deck === 'A' ? this.audioA : this.audioB;
    audio.pause();
    audio.currentTime = this.deckStates[deck].cueTime || 0;
    this.deckStates[deck].isPlaying = false;
  }

  // Transport: Play / Pause for specific deck
  togglePlayDeck(deck) {
    const audio = deck === 'A' ? this.audioA : this.audioB;
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }

    if (audio.paused) {
      audio.play();
      this.deckStates[deck].isPlaying = true;
      this.isPlaying = true;
    } else {
      audio.pause();
      this.deckStates[deck].isPlaying = false;
    }
    return this.deckStates[deck].isPlaying;
  }

  // Transport: Pitch / Tempo Slider (-8% to +8%)
  setPitch(deck, percent) {
    const rate = 1.0 + (percent / 100);
    const audio = deck === 'A' ? this.audioA : this.audioB;
    audio.playbackRate = Math.max(0.5, Math.min(2.0, rate));
    this.deckStates[deck].pitch = rate;
  }

  // Transport: Loop (beats: 4 or 8)
  toggleLoop(deck, beats) {
    const state = this.deckStates[deck];
    const audio = deck === 'A' ? this.audioA : this.audioB;
    if (state.loopActive && state.loopBeats === beats) {
      state.loopActive = false;
    } else {
      state.loopActive = true;
      state.loopBeats = beats;
      const bpm = 128.0;
      const beatDuration = 60 / bpm;
      state.loopStart = audio.currentTime;
      state.loopEnd = state.loopStart + (beats * beatDuration);
    }
    return state.loopActive;
  }

  // Start Radio Stream
  async start() {
    await this.initAudioContext();
    await this.fetchStatus(true);
    
    if (!this.statusInterval) {
      this.statusInterval = setInterval(() => this.pollSync(), 3000);
    }
  }

  async fetchStatus(forcePlay = false) {
    try {
      const res = await fetch('/api/status');
      const data = await res.json();
      if (!data.isPlaying) return;

      this.totalTracks = data.totalTracks || 0;
      this.queue = data.queue || [];
      this.history = data.history || [];

      const isNewTrack = !this.currentTrack || this.currentTrack.id !== data.currentTrack.id;
      this.currentTrack = data.currentTrack;
      this.nextTrack = this.queue[0] || null;
      this.duration = data.currentTrack.duration || 180;

      if (isNewTrack || forcePlay) {
        this.isTransitionTriggered = false;
        this.isCrossfading = false;
        
        const activeAudio = this.activeDeck === 'A' ? this.audioA : this.audioB;
        activeAudio.src = `/api/track/${this.currentTrack.id}/audio`;
        activeAudio.currentTime = data.elapsedTime || 0;
        
        try {
          await activeAudio.play();
          this.isPlaying = true;
          this.deckStates[this.activeDeck].isPlaying = true;
        } catch (err) {
          console.warn('Autoplay waiting for click:', err);
        }

        // Preload upcoming track into inactive deck
        if (this.nextTrack) {
          const inactiveAudio = this.activeDeck === 'A' ? this.audioB : this.audioA;
          inactiveAudio.src = `/api/track/${this.nextTrack.id}/audio`;
          inactiveAudio.load();
        }

        this.setCrossfader(this.activeDeck === 'A' ? 0.0 : 1.0);

        if (this.onTrackChange) {
          this.onTrackChange(this.currentTrack, this.queue, this.totalTracks);
        }
      }
    } catch (err) {
      console.error('Error fetching radio status:', err);
    }
  }

  // Trigger DJ Crossfade transition to next deck
  async triggerDJCrossfade() {
    if (this.isCrossfading || !this.nextTrack) return;
    this.isCrossfading = true;
    this.crossfadeStartTime = performance.now();

    const fromDeck = this.activeDeck;
    const toDeck = fromDeck === 'A' ? 'B' : 'A';
    const incomingAudio = toDeck === 'A' ? this.audioA : this.audioB;

    incomingAudio.currentTime = 0;
    try {
      await incomingAudio.play();
      this.deckStates[toDeck].isPlaying = true;
    } catch (e) {
      console.warn('Error starting deck:', e);
    }

    if (this.onTransition) {
      this.onTransition(true, fromDeck, toDeck, this.nextTrack);
    }
  }

  handleTrackEnd(deck) {
    if (deck === this.activeDeck && !this.isCrossfading) {
      this.skipNext();
    }
  }

  pollSync() {
    if (!this.isCrossfading) {
      this.fetchStatus(false);
    }
  }

  play() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
    const active = this.activeDeck === 'A' ? this.audioA : this.audioB;
    active.play();
    this.isPlaying = true;
    this.deckStates[this.activeDeck].isPlaying = true;
  }

  pause() {
    this.audioA.pause();
    this.audioB.pause();
    this.isPlaying = false;
    this.deckStates.A.isPlaying = false;
    this.deckStates.B.isPlaying = false;
  }

  togglePlay() {
    if (this.isPlaying) this.pause();
    else this.play();
    return this.isPlaying;
  }

  async skipNext() {
    try {
      this.isCrossfading = false;
      await fetch('/api/skip', { method: 'POST' });
      await this.fetchStatus(true);
    } catch (err) {
      console.error('Error skipping track:', err);
    }
  }

  async skipPrev() {
    try {
      this.isCrossfading = false;
      await fetch('/api/prev', { method: 'POST' });
      await this.fetchStatus(true);
    } catch (err) {
      console.error('Error previous track:', err);
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.audioContext) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.audioContext.currentTime);
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.audioContext) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.audioContext.currentTime);
    }
    return this.isMuted;
  }

  setMixMode(mode) {
    this.mixMode = mode === 'dj' ? 'dj' : 'radio';
    return this.mixMode;
  }

  update() {
    if (!this.analyser || !this.isPlaying) {
      this.analysis.bass *= 0.9;
      this.analysis.mids *= 0.9;
      this.analysis.treble *= 0.9;
      this.analysis.volume *= 0.9;
      this.analysis.beat *= 0.85;
      return this.analysis;
    }

    // Check Loop handlers
    for (let deck of ['A', 'B']) {
      const state = this.deckStates[deck];
      const audio = deck === 'A' ? this.audioA : this.audioB;
      if (state.loopActive && audio.currentTime >= state.loopEnd) {
        audio.currentTime = state.loopStart;
      }
    }

    const activeAudio = this.activeDeck === 'A' ? this.audioA : this.audioB;
    if (activeAudio.currentTime) {
      this.elapsedTime = activeAudio.currentTime;
      if (activeAudio.duration && !isNaN(activeAudio.duration)) {
        this.duration = activeAudio.duration;
      }
    }

    const remaining = this.duration - this.elapsedTime;

    // Auto DJ Crossfade Trigger
    if (this.mixMode === 'dj' && remaining <= this.crossfadeDuration && !this.isTransitionTriggered && this.elapsedTime > 5) {
      this.isTransitionTriggered = true;
      this.triggerDJCrossfade();
    }

    // Crossfade Curve
    if (this.isCrossfading && this.audioContext) {
      const now = performance.now();
      const elapsedCrossfade = (now - this.crossfadeStartTime) / 1000;
      const progress = Math.min(1.0, elapsedCrossfade / this.crossfadeDuration);

      if (this.activeDeck === 'A') {
        this.setCrossfader(progress);
        this.setFilterSweep('A', 0.5 - 0.4 * progress); // Low-pass filter out Deck A
      } else {
        this.setCrossfader(1.0 - progress);
        this.setFilterSweep('B', 0.5 - 0.4 * progress);
      }

      if (progress >= 1.0) {
        this.isCrossfading = false;
        const oldAudio = this.activeDeck === 'A' ? this.audioA : this.audioB;
        oldAudio.pause();
        oldAudio.currentTime = 0;

        this.activeDeck = this.activeDeck === 'A' ? 'B' : 'A';
        this.currentTrack = this.nextTrack;
        this.isTransitionTriggered = false;
        this.setFilterSweep('A', 0.5);
        this.setFilterSweep('B', 0.5);

        if (this.onTrackChange) {
          this.onTrackChange(this.currentTrack, this.queue, this.totalTracks);
        }
        if (this.onTransition) {
          this.onTransition(false, this.activeDeck, this.activeDeck, null);
        }
      }
    }

    // Audio Analysis
    this.analyser.getByteFrequencyData(this.freqData);
    this.analyser.getByteTimeDomainData(this.dataArray);
    const binCount = this.freqData.length;

    let bassSum = 0;
    for (let i = 1; i <= 10; i++) bassSum += this.freqData[i];
    const currentBass = bassSum / (10 * 255);
    this.analysis.bass = currentBass;

    let midSum = 0;
    for (let i = 11; i <= 60; i++) midSum += this.freqData[i];
    this.analysis.mids = midSum / (50 * 255);

    let trebleSum = 0;
    for (let i = 61; i <= 180; i++) trebleSum += this.freqData[i];
    this.analysis.treble = trebleSum / (120 * 255);

    let totalSum = 0;
    for (let i = 0; i < binCount; i++) totalSum += this.freqData[i];
    this.analysis.volume = totalSum / (binCount * 255);

    const bassDelta = currentBass - this.prevBass;
    if (bassDelta > 0.15 && currentBass > 0.4) {
      this.analysis.beat = 1.0;
    } else {
      this.analysis.beat *= 0.88;
    }
    this.prevBass = currentBass;

    this.analysis.rawArray = [];
    const step = Math.floor(binCount / 32);
    for (let i = 0; i < 32; i++) {
      this.analysis.rawArray.push(this.freqData[i * step] / 255);
    }

    this.analysis.activeDeck = this.activeDeck;
    this.analysis.crossfadeProgress = this.crossfadeProgress;
    this.analysis.isCrossfading = this.isCrossfading;
    this.analysis.deckALevel = this.activeDeck === 'A' ? this.analysis.volume * 1.4 : (this.isCrossfading ? (1 - this.crossfadeProgress) * this.analysis.volume : 0.02);
    this.analysis.deckBLevel = this.activeDeck === 'B' ? this.analysis.volume * 1.4 : (this.isCrossfading ? this.crossfadeProgress * this.analysis.volume : 0.02);

    return this.analysis;
  }
}
