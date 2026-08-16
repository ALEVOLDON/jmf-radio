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
    this.totalTracksDisplay = document.getElementById('total-tracks-display');
    this.waveIndicator = document.getElementById('wave-indicator');

    this.queueDrawer = document.getElementById('queue-drawer');
    this.btnQueueToggle = document.getElementById('btn-queue-toggle');
    this.queueCloseBtn = document.getElementById('queue-close-btn');
    this.queueList = document.getElementById('queue-list');

    this.camButtons = document.querySelectorAll('.cam-btn');
    this.themeButtons = document.querySelectorAll('.theme-btn');

    this.initEvents();
  }

  initEvents() {
    // Start button on overlay
    this.btnStart.addEventListener('click', async () => {
      this.overlay.classList.add('hidden');
      await this.audioEngine.start();
      this.updatePlayState(true);
    });

    // Play / Pause
    this.btnPlayPause.addEventListener('click', () => {
      const isPlaying = this.audioEngine.togglePlay();
      this.updatePlayState(isPlaying);
    });

    // Next / Prev
    this.btnNext.addEventListener('click', () => {
      this.audioEngine.skipNext();
    });
    this.btnPrev.addEventListener('click', () => {
      this.audioEngine.skipPrev();
    });

    // Volume
    this.volSlider.addEventListener('input', (e) => {
      this.audioEngine.setVolume(parseFloat(e.target.value));
      this.updateVolumeIcons(false);
    });

    // Mute
    this.btnMute.addEventListener('click', () => {
      const isMuted = this.audioEngine.toggleMute();
      this.updateVolumeIcons(isMuted);
    });

    // Fullscreen
    this.btnFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

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
    this.btnQueueToggle.addEventListener('click', () => {
      this.queueDrawer.classList.toggle('hidden');
    });
    this.queueCloseBtn.addEventListener('click', () => {
      this.queueDrawer.classList.add('hidden');
    });
  }

  updatePlayState(isPlaying) {
    if (isPlaying) {
      this.iconPlay.classList.add('hidden');
      this.iconPause.classList.remove('hidden');
      this.waveIndicator.classList.add('wave-playing');
    } else {
      this.iconPlay.classList.remove('hidden');
      this.iconPause.classList.add('hidden');
      this.waveIndicator.classList.remove('wave-playing');
    }
  }

  updateVolumeIcons(isMuted) {
    if (isMuted) {
      this.iconVol.classList.add('hidden');
      this.iconMute.classList.remove('hidden');
    } else {
      this.iconVol.classList.remove('hidden');
      this.iconMute.classList.add('hidden');
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

    this.trackTitle.textContent = track.title || 'Unknown Track';
    this.trackArtist.textContent = track.artist || 'JMF Radio';
    this.timeTotal.textContent = this.formatTime(track.duration || 180);

    if (totalTracks && this.totalTracksDisplay) {
      this.totalTracksDisplay.textContent = `${totalTracks} Tracks on Air`;
    }

    // Cover art
    if (track.hasCover) {
      this.trackCover.src = `/api/cover/${track.id}`;
    } else {
      this.trackCover.src = '/cover-placeholder.svg';
    }

    // Populate Queue
    if (queue && queue.length > 0) {
      this.queueList.innerHTML = queue.map((item, idx) => `
        <div class="queue-item">
          <div class="queue-item-title">${idx + 1}. ${item.title}</div>
          <div class="queue-item-artist">${item.artist}</div>
        </div>
      `).join('');
    }
  }

  updateProgress(elapsedTime, duration) {
    this.timeCurrent.textContent = this.formatTime(elapsedTime);
    if (duration > 0) {
      const pct = Math.min(100, (elapsedTime / duration) * 100);
      this.progressFill.style.width = `${pct}%`;
    }
  }
}
