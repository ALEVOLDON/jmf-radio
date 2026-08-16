export class AudioEngine {
  constructor(onTrackChange) {
    this.onTrackChange = onTrackChange;
    this.audio = new Audio();
    this.audio.crossOrigin = "anonymous";
    this.audioContext = null;
    this.analyser = null;
    this.source = null;
    this.dataArray = null;
    this.freqData = null;
    
    this.isPlaying = false;
    this.isMuted = false;
    this.volume = 0.8;
    this.audio.volume = this.volume;

    // Track state
    this.currentTrack = null;
    this.elapsedTime = 0;
    this.duration = 180;
    this.queue = [];
    this.history = [];
    this.totalTracks = 0;

    // Audio Analysis Values
    this.analysis = {
      bass: 0,       // 20 - 150 Hz
      mids: 0,       // 150 - 2500 Hz
      treble: 0,     // 2500 - 10000 Hz
      volume: 0,     // Overall RMS energy
      rawArray: [],  // Array of 64 bars for visualizer
      beat: 0        // Dynamic kick/snare beat hit (0.0 to 1.0)
    };

    this.prevBass = 0;
    this.statusInterval = null;

    // Track ended handler
    this.audio.addEventListener('ended', () => {
      this.fetchStatus();
    });

    this.audio.addEventListener('error', (e) => {
      console.warn('Audio stream error / reconnecting...', e);
      setTimeout(() => this.reconnect(), 2000);
    });
  }

  // Initialize Web Audio API on user interaction
  async initAudioContext() {
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioContext = new AudioCtx();
      
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 512;
      this.analyser.smoothingTimeConstant = 0.85;

      this.source = this.audioContext.createMediaElementSource(this.audio);
      this.source.connect(this.analyser);
      this.analyser.connect(this.audioContext.destination);

      const bufferLength = this.analyser.frequencyBinCount;
      this.freqData = new Uint8Array(bufferLength);
      this.dataArray = new Uint8Array(bufferLength);
    }

    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }
  }

  // Start Radio Stream
  async start() {
    await this.initAudioContext();
    await this.fetchStatus(true);
    
    // Start Polling Status for sync
    if (!this.statusInterval) {
      this.statusInterval = setInterval(() => this.fetchStatus(false), 2000);
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
      this.elapsedTime = data.elapsedTime || 0;
      this.duration = data.currentTrack.duration || 180;

      if (isNewTrack || forcePlay) {
        // Stream the current audio
        this.audio.src = `/api/track/${this.currentTrack.id}/audio`;
        this.audio.currentTime = this.elapsedTime;
        
        try {
          await this.audio.play();
          this.isPlaying = true;
        } catch (err) {
          console.warn('Autoplay blocked, waiting for user click:', err);
        }

        if (this.onTrackChange) {
          this.onTrackChange(this.currentTrack, this.queue, this.totalTracks);
        }
      }
    } catch (err) {
      console.error('Error fetching radio status:', err);
    }
  }

  reconnect() {
    if (this.currentTrack) {
      this.audio.src = `/api/track/${this.currentTrack.id}/audio`;
      this.audio.play().catch(() => {});
    }
  }

  play() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
    this.audio.play();
    this.isPlaying = true;
  }

  pause() {
    this.audio.pause();
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
      await fetch('/api/skip', { method: 'POST' });
      await this.fetchStatus(true);
    } catch (err) {
      console.error('Error skipping track:', err);
    }
  }

  async skipPrev() {
    try {
      await fetch('/api/prev', { method: 'POST' });
      await this.fetchStatus(true);
    } catch (err) {
      console.error('Error previous track:', err);
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    this.audio.volume = this.volume;
    if (this.volume > 0 && this.isMuted) {
      this.isMuted = false;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.audio.muted = this.isMuted;
    return this.isMuted;
  }

  // Called in requestAnimationFrame loop to analyze real-time audio
  update() {
    if (!this.analyser || !this.isPlaying) {
      // Decay analysis values smoothly to zero when paused
      this.analysis.bass *= 0.9;
      this.analysis.mids *= 0.9;
      this.analysis.treble *= 0.9;
      this.analysis.volume *= 0.9;
      this.analysis.beat *= 0.85;
      return this.analysis;
    }

    this.analyser.getByteFrequencyData(this.freqData);
    this.analyser.getByteTimeDomainData(this.dataArray);

    const binCount = this.freqData.length; // 256 bins (0 to ~22kHz)
    
    // Bass (bins 1 to 10 -> ~20 to ~200 Hz)
    let bassSum = 0;
    for (let i = 1; i <= 10; i++) {
      bassSum += this.freqData[i];
    }
    const currentBass = bassSum / (10 * 255);
    this.analysis.bass = currentBass;

    // Mids (bins 11 to 60 -> ~200 to ~2500 Hz)
    let midSum = 0;
    for (let i = 11; i <= 60; i++) {
      midSum += this.freqData[i];
    }
    this.analysis.mids = midSum / (50 * 255);

    // Treble (bins 61 to 180 -> ~2500 to ~10000 Hz)
    let trebleSum = 0;
    for (let i = 61; i <= 180; i++) {
      trebleSum += this.freqData[i];
    }
    this.analysis.treble = trebleSum / (120 * 255);

    // Overall volume / energy
    let totalSum = 0;
    for (let i = 0; i < binCount; i++) {
      totalSum += this.freqData[i];
    }
    this.analysis.volume = totalSum / (binCount * 255);

    // Beat detection (kick drum transient threshold)
    const bassDelta = currentBass - this.prevBass;
    if (bassDelta > 0.15 && currentBass > 0.4) {
      this.analysis.beat = 1.0;
    } else {
      this.analysis.beat *= 0.88; // Fast decay
    }
    this.prevBass = currentBass;

    // Sample 32 frequency buckets for UI / mixer equalizer meters
    this.analysis.rawArray = [];
    const step = Math.floor(binCount / 32);
    for (let i = 0; i < 32; i++) {
      this.analysis.rawArray.push(this.freqData[i * step] / 255);
    }

    // Update track local progress
    if (this.audio.currentTime) {
      this.elapsedTime = this.audio.currentTime;
    }

    return this.analysis;
  }
}
