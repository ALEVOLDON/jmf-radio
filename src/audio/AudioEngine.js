export class AudioEngine {
  constructor(onTrackChange, onTransition) {
    this.onTrackChange = onTrackChange;
    this.onTransition = onTransition;

    // Dual Virtual Decks for seamless DJ mixing
    this.audioA = new Audio();
    this.audioB = new Audio();
    this.audioA.crossOrigin = "anonymous";
    this.audioB.crossOrigin = "anonymous";

    this.activeDeck = 'A'; // 'A' or 'B'
    this.mixMode = 'dj';   // 'dj' (8s seamless club crossfade) or 'radio' (standard full play)
    this.crossfadeDuration = 8.0; // 8 seconds transition
    this.isCrossfading = false;
    this.crossfadeProgress = 0; // 0 (Deck A) to 1 (Deck B)
    this.crossfadeStartTime = 0;

    this.audioContext = null;
    this.analyser = null;
    this.gainA = null;
    this.gainB = null;
    this.filterA = null;
    this.filterB = null;
    this.masterGain = null;

    this.dataArray = null;
    this.freqData = null;
    
    this.isPlaying = false;
    this.isMuted = false;
    this.volume = 0.8;

    // Track State
    this.currentTrack = null;
    this.nextTrack = null;
    this.elapsedTime = 0;
    this.duration = 180;
    this.queue = [];
    this.history = [];
    this.totalTracks = 0;

    // Audio Analysis Values
    this.analysis = {
      bass: 0,
      mids: 0,
      treble: 0,
      volume: 0,
      rawArray: [],
      beat: 0,
      activeDeck: 'A',
      crossfadeProgress: 0,
      isCrossfading: false
    };

    this.prevBass = 0;
    this.statusInterval = null;
    this.isTransitionTriggered = false;

    // Deck end handlers
    this.audioA.addEventListener('ended', () => this.handleTrackEnd('A'));
    this.audioB.addEventListener('ended', () => this.handleTrackEnd('B'));
  }

  // Initialize Web Audio API graph with Dual Decks, Filters & Crossfader
  async initAudioContext() {
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioContext = new AudioCtx();
      
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 512;
      this.analyser.smoothingTimeConstant = 0.85;

      this.masterGain = this.audioContext.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.audioContext.currentTime);

      // Deck A Chain: AudioA -> GainA -> FilterA -> MasterGain
      const sourceA = this.audioContext.createMediaElementSource(this.audioA);
      this.gainA = this.audioContext.createGain();
      this.filterA = this.audioContext.createBiquadFilter();
      this.filterA.type = 'lowpass';
      this.filterA.frequency.value = 22000;

      sourceA.connect(this.filterA);
      this.filterA.connect(this.gainA);
      this.gainA.connect(this.masterGain);

      // Deck B Chain: AudioB -> GainB -> FilterB -> MasterGain
      const sourceB = this.audioContext.createMediaElementSource(this.audioB);
      this.gainB = this.audioContext.createGain();
      this.filterB = this.audioContext.createBiquadFilter();
      this.filterB.type = 'lowpass';
      this.filterB.frequency.value = 22000;

      sourceB.connect(this.filterB);
      this.filterB.connect(this.gainB);
      this.gainB.connect(this.masterGain);

      // Master -> Analyser -> Destination
      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.audioContext.destination);

      // Set initial deck gains (Deck A active = 1.0, Deck B = 0.0)
      this.gainA.gain.value = 1.0;
      this.gainB.gain.value = 0.0;

      const bufferLength = this.analyser.frequencyBinCount;
      this.freqData = new Uint8Array(bufferLength);
      this.dataArray = new Uint8Array(bufferLength);
    }

    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }
  }

  setMixMode(mode) {
    this.mixMode = mode === 'dj' ? 'dj' : 'radio';
    console.log(`🎛️ Mix Mode set to: ${this.mixMode.toUpperCase()}`);
    return this.mixMode;
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
        
        const activeAudio = this.getActiveAudio();
        activeAudio.src = `/api/track/${this.currentTrack.id}/audio`;
        activeAudio.currentTime = data.elapsedTime || 0;
        
        try {
          await activeAudio.play();
          this.isPlaying = true;
        } catch (err) {
          console.warn('Autoplay blocked, waiting for user click:', err);
        }

        this.resetDeckLevels();

        if (this.onTrackChange) {
          this.onTrackChange(this.currentTrack, this.queue, this.totalTracks);
        }
      }
    } catch (err) {
      console.error('Error fetching radio status:', err);
    }
  }

  getActiveAudio() {
    return this.activeDeck === 'A' ? this.audioA : this.audioB;
  }

  getInactiveAudio() {
    return this.activeDeck === 'A' ? this.audioB : this.audioA;
  }

  resetDeckLevels() {
    if (!this.gainA || !this.gainB) return;
    if (this.activeDeck === 'A') {
      this.gainA.gain.value = 1.0;
      this.gainB.gain.value = 0.0;
      this.crossfadeProgress = 0.0;
    } else {
      this.gainA.gain.value = 0.0;
      this.gainB.gain.value = 1.0;
      this.crossfadeProgress = 1.0;
    }
    this.filterA.frequency.value = 22000;
    this.filterB.frequency.value = 22000;
  }

  // Trigger smooth seamless DJ crossfade transition to next track
  async triggerDJCrossfade() {
    if (this.isCrossfading || !this.nextTrack) return;
    this.isCrossfading = true;
    this.crossfadeStartTime = performance.now();

    const fromDeck = this.activeDeck;
    const toDeck = fromDeck === 'A' ? 'B' : 'A';
    const incomingAudio = toDeck === 'A' ? this.audioA : this.audioB;

    console.log(`🎛️ [DJ MIXING] Starting ${this.crossfadeDuration}s crossfade: Deck ${fromDeck} ➔ Deck ${toDeck} (${this.nextTrack.title})`);

    incomingAudio.src = `/api/track/${this.nextTrack.id}/audio`;
    incomingAudio.currentTime = 0;

    try {
      await incomingAudio.play();
    } catch (e) {
      console.warn('Error starting incoming deck:', e);
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
    this.getActiveAudio().play();
    this.isPlaying = true;
  }

  pause() {
    this.audioA.pause();
    this.audioB.pause();
    this.isPlaying = false;
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
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

  // Animation frame update (audio analysis + DJ crossfade curve execution)
  update() {
    if (!this.analyser || !this.isPlaying) {
      this.analysis.bass *= 0.9;
      this.analysis.mids *= 0.9;
      this.analysis.treble *= 0.9;
      this.analysis.volume *= 0.9;
      this.analysis.beat *= 0.85;
      return this.analysis;
    }

    const activeAudio = this.getActiveAudio();
    if (activeAudio.currentTime) {
      this.elapsedTime = activeAudio.currentTime;
      if (activeAudio.duration && !isNaN(activeAudio.duration)) {
        this.duration = activeAudio.duration;
      }
    }

    const remaining = this.duration - this.elapsedTime;

    // --- DJ Mix Mode Automatic Crossfade Trigger ---
    if (this.mixMode === 'dj' && remaining <= this.crossfadeDuration && !this.isTransitionTriggered && this.elapsedTime > 5) {
      this.isTransitionTriggered = true;
      this.triggerDJCrossfade();
    }

    // --- Perform Equal-Power DJ Crossfade & Bass Swap ---
    if (this.isCrossfading && this.audioContext) {
      const now = performance.now();
      const elapsedCrossfade = (now - this.crossfadeStartTime) / 1000;
      const progress = Math.min(1.0, elapsedCrossfade / this.crossfadeDuration);

      // Equal power curve (cos & sin blend)
      const gainOut = Math.cos(progress * 0.5 * Math.PI);
      const gainIn = Math.sin(progress * 0.5 * Math.PI);

      if (this.activeDeck === 'A') {
        this.gainA.gain.value = gainOut;
        this.gainB.gain.value = gainIn;
        this.crossfadeProgress = progress; // 0.0 -> 1.0 (towards Deck B)
        // Bass Swap: filter out lows from Deck A, open up Deck B
        this.filterA.frequency.value = Math.max(250, 22000 * (1.0 - progress));
        this.filterB.frequency.value = Math.min(22000, 250 + 21750 * progress);
      } else {
        this.gainB.gain.value = gainOut;
        this.gainA.gain.value = gainIn;
        this.crossfadeProgress = 1.0 - progress; // 1.0 -> 0.0 (towards Deck A)
        this.filterB.frequency.value = Math.max(250, 22000 * (1.0 - progress));
        this.filterA.frequency.value = Math.min(22000, 250 + 21750 * progress);
      }

      if (progress >= 1.0) {
        // Crossfade complete: swap active deck!
        this.isCrossfading = false;
        const oldAudio = this.getActiveAudio();
        oldAudio.pause();
        oldAudio.currentTime = 0;

        this.activeDeck = this.activeDeck === 'A' ? 'B' : 'A';
        this.currentTrack = this.nextTrack;
        this.isTransitionTriggered = false;
        this.resetDeckLevels();

        console.log(`✅ [DJ MIX COMPLETE] Now active on Deck ${this.activeDeck}: ${this.currentTrack?.title}`);

        if (this.onTrackChange) {
          this.onTrackChange(this.currentTrack, this.queue, this.totalTracks);
        }
        if (this.onTransition) {
          this.onTransition(false, this.activeDeck, this.activeDeck, null);
        }
      }
    }

    // Real-time Frequency Analysis
    this.analyser.getByteFrequencyData(this.freqData);
    this.analyser.getByteTimeDomainData(this.dataArray);

    const binCount = this.freqData.length;
    
    // Bass (20 - 150 Hz)
    let bassSum = 0;
    for (let i = 1; i <= 10; i++) bassSum += this.freqData[i];
    const currentBass = bassSum / (10 * 255);
    this.analysis.bass = currentBass;

    // Mids (150 - 2500 Hz)
    let midSum = 0;
    for (let i = 11; i <= 60; i++) midSum += this.freqData[i];
    this.analysis.mids = midSum / (50 * 255);

    // Treble (2500 - 10000 Hz)
    let trebleSum = 0;
    for (let i = 61; i <= 180; i++) trebleSum += this.freqData[i];
    this.analysis.treble = trebleSum / (120 * 255);

    // Overall energy
    let totalSum = 0;
    for (let i = 0; i < binCount; i++) totalSum += this.freqData[i];
    this.analysis.volume = totalSum / (binCount * 255);

    // Beat detection
    const bassDelta = currentBass - this.prevBass;
    if (bassDelta > 0.15 && currentBass > 0.4) {
      this.analysis.beat = 1.0;
    } else {
      this.analysis.beat *= 0.88;
    }
    this.prevBass = currentBass;

    // 32 Frequency buckets
    this.analysis.rawArray = [];
    const step = Math.floor(binCount / 32);
    for (let i = 0; i < 32; i++) {
      this.analysis.rawArray.push(this.freqData[i * step] / 255);
    }

    this.analysis.activeDeck = this.activeDeck;
    this.analysis.crossfadeProgress = this.crossfadeProgress;
    this.analysis.isCrossfading = this.isCrossfading;

    return this.analysis;
  }
}
