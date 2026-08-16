export class UIController {
  constructor(audioEngine, djScene) {
    this.audioEngine = audioEngine;
    this.djScene = djScene;

    // DOM Elements
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

    this.trackTitle = document.getElementById('track-title');
    this.trackArtist = document.getElementById('track-artist');
    this.trackCover = document.getElementById('track-cover');
    this.timeCurrent = document.getElementById('time-current');
    this.timeTotal = document.getElementById('time-total');
    this.progressFill = document.getElementById('progress-fill');
    this.waveIndicator = document.getElementById('wave-indicator');

    this.queueDrawer = document.getElementById('queue-drawer');
    this.btnQueueToggle = document.getElementById('btn-queue-toggle');
    this.queueCloseBtn = document.getElementById('queue-close-btn');
    this.queueList = document.getElementById('queue-list');

    // Mode Switcher & Transition Banner
    this.btnModeDj = document.getElementById('btn-mode-dj');
    this.btnModeRadio = document.getElementById('btn-mode-radio');
    this.transitionBanner = document.getElementById('transition-banner');
    this.transitionText = document.getElementById('transition-text');

    this.camButtons = document.querySelectorAll('.cam-btn');
    this.themeButtons = document.querySelectorAll('.theme-btn');

    this.initEvents();
  }

  initEvents() {
    // Start button on overlay
    if (this.btnStart) {
      this.btnStart.addEventListener('click', async () => {
        if (this.overlay) this.overlay.classList.add('hidden');
        await this.audioEngine.start();
        this.updatePlayState(true);
      });
    }

    // Play / Pause
    if (this.btnPlayPause) {
      this.btnPlayPause.addEventListener('click', () => {
        const isPlaying = this.audioEngine.togglePlay();
        this.updatePlayState(isPlaying);
      });
    }

    // Next / Prev
    if (this.btnNext) {
      this.btnNext.addEventListener('click', () => {
        this.audioEngine.skipNext();
      });
    }
    if (this.btnPrev) {
      this.btnPrev.addEventListener('click', () => {
        this.audioEngine.skipPrev();
      });
    }

    // Volume
    if (this.volSlider) {
      this.volSlider.addEventListener('input', (e) => {
        this.audioEngine.setVolume(parseFloat(e.target.value));
        this.updateVolumeIcons(false);
      });
    }

    // Mute
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

    // Mode Switcher (DJ MIX vs RADIO)
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

    if (this.trackTitle) this.trackTitle.textContent = track.title || 'Unknown Track';
    if (this.trackArtist) this.trackArtist.textContent = track.artist || 'JMF Radio';
    if (this.timeTotal) this.timeTotal.textContent = this.formatTime(track.duration || 180);

    // Cover art
    if (this.trackCover) {
      if (track.hasCover) {
        this.trackCover.src = `/api/cover/${track.id}`;
      } else {
        this.trackCover.src = '/cover-placeholder.svg';
      }
    }

    // Populate Queue
    if (queue && queue.length > 0 && this.queueList) {
      this.queueList.innerHTML = queue.map((item, idx) => `
        <div class="queue-item">
          <div class="queue-item-title">${idx + 1}. ${item.title}</div>
          <div class="queue-item-artist">${item.artist}</div>
        </div>
      `).join('');
    }

    // Hide transition banner on track swap
    if (this.transitionBanner) {
      this.transitionBanner.classList.add('hidden');
    }
  }

  onTransition(isTransitioning, fromDeck, toDeck, nextTrack) {
    if (!this.transitionBanner) return;

    if (isTransitioning && nextTrack) {
      if (this.transitionText) {
        this.transitionText.textContent = `🎛️ DJ MIXING: CROSSFADING TO "${nextTrack.title.substring(0, 30)}..."`;
      }
      this.transitionBanner.classList.remove('hidden');
    } else {
      this.transitionBanner.classList.add('hidden');
    }
  }

  updateProgress(elapsedTime, duration) {
    if (this.timeCurrent) this.timeCurrent.textContent = this.formatTime(elapsedTime);
    if (duration > 0 && this.progressFill) {
      const pct = Math.min(100, (elapsedTime / duration) * 100);
      this.progressFill.style.width = `${pct}%`;
    }
  }
}
