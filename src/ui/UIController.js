export class UIController {
  constructor(audioEngine, djScene) {
    this.audioEngine = audioEngine;
    this.djScene = djScene;

    // Overlay & Transport
    this.overlay = document.getElementById('start-overlay');
    this.btnStart = document.getElementById('btn-start-stream');
    this.btnPlayPause = document.getElementById('btn-play-pause');
    this.iconPlay = document.getElementById('icon-play');
    this.iconPause = document.getElementById('icon-pause');
    this.btnNext = document.getElementById('btn-next');
    this.btnPrev = document.getElementById('btn-prev');
    this.btnMute = document.getElementById('btn-mute');
    this.iconVol = document.getElementById('icon-vol');
    this.iconMute = document.getElementById('icon-mute');
    this.volSlider = document.getElementById('volume-slider');
    this.btnFullscreen = document.getElementById('btn-fullscreen');
    this.waveIndicator = document.getElementById('wave-indicator');

    // Queue & Mode Switchers
    this.queueDrawer = document.getElementById('queue-drawer');
    this.btnQueueToggle = document.getElementById('btn-queue-toggle');
    this.queueCloseBtn = document.getElementById('queue-close-btn');
    this.queueList = document.getElementById('queue-list');
    this.btnModeDj = document.getElementById('btn-mode-dj');
    this.btnModeRadio = document.getElementById('btn-mode-radio');
    this.transitionBanner = document.getElementById('transition-banner');
    this.transitionText = document.getElementById('transition-text');
    this.btnMixNow = document.getElementById('btn-mix-now');

    // Deck A Elements
    this.deckAPanel = document.getElementById('deck-a-panel');
    this.deckATitle = document.getElementById('deck-a-title');
    this.deckAArtist = document.getElementById('deck-a-artist');
    this.deckAStatus = document.getElementById('deck-a-status');
    this.deckABpm = document.getElementById('deck-a-bpm');
    this.deckAProgress = document.getElementById('deck-a-progress');
    this.deckATimeCur = document.getElementById('deck-a-time-cur');
    this.deckATimeRem = document.getElementById('deck-a-time-rem');
    this.deckAJog = document.getElementById('deck-a-jog');

    // Deck B Elements
    this.deckBPanel = document.getElementById('deck-b-panel');
    this.deckBTitle = document.getElementById('deck-b-title');
    this.deckBArtist = document.getElementById('deck-b-artist');
    this.deckBStatus = document.getElementById('deck-b-status');
    this.deckBBpm = document.getElementById('deck-b-bpm');
    this.deckBProgress = document.getElementById('deck-b-progress');
    this.deckBTimeCur = document.getElementById('deck-b-time-cur');
    this.deckBTimeRem = document.getElementById('deck-b-time-rem');
    this.deckBJog = document.getElementById('deck-b-jog');

    // Mixer Elements
    this.crossfaderCap = document.getElementById('crossfader-cap');
    this.crossfaderTrack = document.getElementById('crossfader-track');
    this.vuLedsA = document.querySelectorAll('#vu-meter-a .vu-led');
    this.vuLedsB = document.querySelectorAll('#vu-meter-b .vu-led');

    // Toolbars
    this.camButtons = document.querySelectorAll('.cam-btn');
    this.themeButtons = document.querySelectorAll('.theme-btn');

    // Jog wheel rotation angles
    this.jogAngleA = 0;
    this.jogAngleB = 0;

    this.initEvents();
  }

  initEvents() {
    if (this.btnStart) {
      this.btnStart.addEventListener('click', async () => {
        if (this.overlay) this.overlay.classList.add('hidden');
        await this.audioEngine.start();
        this.updatePlayState(true);
      });
    }

    if (this.btnPlayPause) {
      this.btnPlayPause.addEventListener('click', () => {
        const isPlaying = this.audioEngine.togglePlay();
        this.updatePlayState(isPlaying);
      });
    }

    if (this.btnNext) {
      this.btnNext.addEventListener('click', () => this.audioEngine.skipNext());
    }
    if (this.btnPrev) {
      this.btnPrev.addEventListener('click', () => this.audioEngine.skipPrev());
    }

    // Instant Mix Now Button
    if (this.btnMixNow) {
      this.btnMixNow.addEventListener('click', () => {
        this.audioEngine.triggerDJCrossfade();
      });
    }

    // Interactive Crossfader Click / Drag
    if (this.crossfaderTrack) {
      this.crossfaderTrack.addEventListener('click', (e) => {
        const rect = this.crossfaderTrack.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const pct = Math.max(0, Math.min(1, clickX / rect.width));
        if (pct > 0.5 && this.audioEngine.activeDeck === 'A') {
          this.audioEngine.triggerDJCrossfade();
        } else if (pct <= 0.5 && this.audioEngine.activeDeck === 'B') {
          this.audioEngine.triggerDJCrossfade();
        }
      });
    }

    // Volume & Mute
    if (this.volSlider) {
      this.volSlider.addEventListener('input', (e) => {
        this.audioEngine.setVolume(parseFloat(e.target.value));
        this.updateVolumeIcons(false);
      });
    }

    if (this.btnMute) {
      this.btnMute.addEventListener('click', () => {
        const isMuted = this.audioEngine.toggleMute();
        this.updateVolumeIcons(isMuted);
      });
    }

    // Fullscreen
    if (this.btnFullscreen) {
      this.btnFullscreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });
    }

    // Mode Switcher
    if (this.btnModeDj && this.btnModeRadio) {
      this.btnModeDj.addEventListener('click', () => {
        this.audioEngine.setMixMode('dj');
        this.btnModeDj.classList.add('active');
        this.btnModeRadio.classList.remove('active');
      });

      this.btnModeRadio.addEventListener('click', () => {
        this.audioEngine.setMixMode('radio');
        this.btnModeRadio.classList.add('active');
        this.btnModeDj.classList.remove('active');
        if (this.transitionBanner) this.transitionBanner.classList.add('hidden');
      });
    }

    // Camera Switchers
    this.camButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.camButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cam = btn.getAttribute('data-cam');
        this.djScene.setCameraPreset(cam);
      });
    });

    // Theme Switchers
    this.themeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.themeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const theme = btn.getAttribute('data-theme');
        this.djScene.setTheme(theme);
      });
    });

    // Queue Toggle
    if (this.btnQueueToggle && this.queueDrawer) {
      this.btnQueueToggle.addEventListener('click', () => {
        this.queueDrawer.classList.toggle('hidden');
      });
    }
    if (this.queueCloseBtn && this.queueDrawer) {
      this.queueCloseBtn.addEventListener('click', () => {
        this.queueDrawer.classList.add('hidden');
      });
    }
  }

  updatePlayState(isPlaying) {
    if (isPlaying) {
      if (this.iconPlay) this.iconPlay.classList.add('hidden');
      if (this.iconPause) this.iconPause.classList.remove('hidden');
      if (this.waveIndicator) this.waveIndicator.classList.add('wave-playing');
    } else {
      if (this.iconPlay) this.iconPlay.classList.remove('hidden');
      if (this.iconPause) this.iconPause.classList.add('hidden');
      if (this.waveIndicator) this.waveIndicator.classList.remove('wave-playing');
    }
  }

  updateVolumeIcons(isMuted) {
    if (isMuted) {
      if (this.iconVol) this.iconVol.classList.add('hidden');
      if (this.iconMute) this.iconMute.classList.remove('hidden');
    } else {
      if (this.iconVol) this.iconVol.classList.remove('hidden');
      if (this.iconMute) this.iconMute.classList.add('hidden');
    }
  }

  formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  onTrackChanged(track, queue, totalTracks) {
    if (!track) return;

    const nextTrack = queue && queue.length > 0 ? queue[0] : null;
    const activeDeck = this.audioEngine.activeDeck;

    // Update Active Deck & Standby Deck Info
    if (activeDeck === 'A') {
      if (this.deckATitle) this.deckATitle.textContent = track.title || 'Unknown Track';
      if (this.deckAArtist) this.deckAArtist.textContent = track.artist || 'JMF Radio';
      if (this.deckAStatus) {
        this.deckAStatus.textContent = 'ON AIR';
        this.deckAStatus.className = 'deck-status status-on-air';
      }

      if (nextTrack) {
        if (this.deckBTitle) this.deckBTitle.textContent = nextTrack.title || 'Upcoming Track';
        if (this.deckBArtist) this.deckBArtist.textContent = nextTrack.artist || 'Next on Deck';
        if (this.deckBStatus) {
          this.deckBStatus.textContent = 'CUE / NEXT';
          this.deckBStatus.className = 'deck-status status-standby';
        }
      }
    } else {
      if (this.deckBTitle) this.deckBTitle.textContent = track.title || 'Unknown Track';
      if (this.deckBArtist) this.deckBArtist.textContent = track.artist || 'JMF Radio';
      if (this.deckBStatus) {
        this.deckBStatus.textContent = 'ON AIR';
        this.deckBStatus.className = 'deck-status status-on-air';
      }

      if (nextTrack) {
        if (this.deckATitle) this.deckATitle.textContent = nextTrack.title || 'Upcoming Track';
        if (this.deckAArtist) this.deckAArtist.textContent = nextTrack.artist || 'Next on Deck';
        if (this.deckAStatus) {
          this.deckAStatus.textContent = 'CUE / NEXT';
          this.deckAStatus.className = 'deck-status status-standby';
        }
      }
    }

    // Populate Queue Drawer
    if (queue && queue.length > 0 && this.queueList) {
      this.queueList.innerHTML = queue.map((item, idx) => `
        <div class="queue-item">
          <div class="queue-item-title">${idx + 1}. ${item.title}</div>
          <div class="queue-item-artist">${item.artist}</div>
        </div>
      `).join('');
    }

    if (this.transitionBanner) {
      this.transitionBanner.classList.add('hidden');
    }
  }

  onTransition(isTransitioning, fromDeck, toDeck, nextTrack) {
    if (isTransitioning && nextTrack) {
      if (this.transitionText) {
        this.transitionText.textContent = `🎛️ DJ MIXING: DECK ${fromDeck} ➔ DECK ${toDeck} ("${nextTrack.title.substring(0, 24)}...")`;
      }
      if (this.transitionBanner) this.transitionBanner.classList.remove('hidden');

      if (toDeck === 'B' && this.deckBStatus) {
        this.deckBStatus.textContent = 'MIXING IN';
        this.deckBStatus.className = 'deck-status status-mixing';
      } else if (toDeck === 'A' && this.deckAStatus) {
        this.deckAStatus.textContent = 'MIXING IN';
        this.deckAStatus.className = 'deck-status status-mixing';
      }
    } else {
      if (this.transitionBanner) this.transitionBanner.classList.add('hidden');
    }
  }

  updateProgress(elapsedTime, duration, audioAnalysis) {
    const activeDeck = this.audioEngine.activeDeck;
    const isPlaying = this.audioEngine.isPlaying;
    const rem = Math.max(0, duration - elapsedTime);
    const pct = duration > 0 ? Math.min(100, (elapsedTime / duration) * 100) : 0;

    // 1. Update Active Deck progress bar & times
    if (activeDeck === 'A') {
      if (this.deckAProgress) this.deckAProgress.style.width = `${pct}%`;
      if (this.deckATimeCur) this.deckATimeCur.textContent = this.formatTime(elapsedTime);
      if (this.deckATimeRem) this.deckATimeRem.textContent = `-${this.formatTime(rem)}`;
      
      // Standby Deck B
      if (this.deckBTimeCur && !this.audioEngine.isCrossfading) {
        this.deckBProgress.style.width = '0%';
        this.deckBTimeCur.textContent = '0:00';
        this.deckBTimeRem.textContent = 'READY';
      }
    } else {
      if (this.deckBProgress) this.deckBProgress.style.width = `${pct}%`;
      if (this.deckBTimeCur) this.deckBTimeCur.textContent = this.formatTime(elapsedTime);
      if (this.deckBTimeRem) this.deckBTimeRem.textContent = `-${this.formatTime(rem)}`;

      // Standby Deck A
      if (this.deckATimeCur && !this.audioEngine.isCrossfading) {
        this.deckAProgress.style.width = '0%';
        this.deckATimeCur.textContent = '0:00';
        this.deckATimeRem.textContent = 'READY';
      }
    }

    // 2. Spin Jog Wheels
    if (isPlaying) {
      if (activeDeck === 'A' || this.audioEngine.isCrossfading) {
        this.jogAngleA = (this.jogAngleA + 2.5) % 360;
        if (this.deckAJog) this.deckAJog.style.transform = `rotate(${this.jogAngleA}deg)`;
      }
      if (activeDeck === 'B' || this.audioEngine.isCrossfading) {
        this.jogAngleB = (this.jogAngleB + 2.5) % 360;
        if (this.deckBJog) this.deckBJog.style.transform = `rotate(${this.deckBJog}deg)`;
      }
    }

    // 3. Update Crossfader Position Slider (0% Deck A -> 100% Deck B)
    if (this.crossfaderCap && audioAnalysis) {
      const faderPct = audioAnalysis.crossfadeProgress * 100;
      this.crossfaderCap.style.left = `${faderPct}%`;
    }

    // 4. Update Live Stereo VU Meters
    if (audioAnalysis && isPlaying) {
      const bass = audioAnalysis.bass;
      const volume = audioAnalysis.volume;
      const levelA = activeDeck === 'A' ? volume * 1.5 + bass * 0.4 : (this.audioEngine.isCrossfading ? (1 - audioAnalysis.crossfadeProgress) * volume : 0.05);
      const levelB = activeDeck === 'B' ? volume * 1.5 + bass * 0.4 : (this.audioEngine.isCrossfading ? audioAnalysis.crossfadeProgress * volume : 0.05);

      this.updateVUMeter(this.vuLedsA, levelA);
      this.updateVUMeter(this.vuLedsB, levelB);
    } else {
      this.updateVUMeter(this.vuLedsA, 0);
      this.updateVUMeter(this.vuLedsB, 0);
    }
  }

  updateVUMeter(leds, level) {
    if (!leds) return;
    const total = leds.length;
    for (let i = 0; i < total; i++) {
      const threshold = (total - 1 - i) / total;
      const isLit = level >= threshold;
      leds[i].className = 'vu-led ' + (isLit ? (i === 0 ? 'lit-red' : i === 1 ? 'lit-orange' : i === 2 ? 'lit-yellow' : 'lit-green') : '');
    }
  }
}
