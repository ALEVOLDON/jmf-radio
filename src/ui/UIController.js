export class UIController {
  constructor(audioEngine, djScene) {
    this.audioEngine = audioEngine;
    this.djScene = djScene;

    // Overlay
    this.overlay = document.getElementById('start-overlay');
    this.btnStart = document.getElementById('btn-start-stream');

    // Header tools
    this.waveIndicator = document.getElementById('wave-indicator');
    this.queueDrawer = document.getElementById('queue-drawer');
    this.btnQueueToggle = document.getElementById('btn-queue-toggle');
    this.queueCloseBtn = document.getElementById('queue-close-btn');
    this.queueList = document.getElementById('queue-list');
    this.btnModeDj = document.getElementById('btn-mode-dj');
    this.btnModeRadio = document.getElementById('btn-mode-radio');
    this.transitionBanner = document.getElementById('transition-banner');
    this.transitionText = document.getElementById('transition-text');

    // Toolbars
    this.camButtons = document.querySelectorAll('.cam-btn');

    // --- DECK A CONTROLS ---
    this.deckAUnit = document.getElementById('deck-a-unit');
    this.deckATitle = document.getElementById('deck-a-title');
    this.deckAArtist = document.getElementById('deck-a-artist');
    this.deckAState = document.getElementById('deck-a-state');
    this.deckABpm = document.getElementById('deck-a-bpm');
    this.deckAPitchVal = document.getElementById('deck-a-pitch-val');
    this.deckAPitch = document.getElementById('deck-a-pitch');
    this.deckAPitchReset = document.getElementById('deck-a-pitch-reset');
    this.deckATempoPlus = document.getElementById('deck-a-tempo-plus');
    this.deckATempoMinus = document.getElementById('deck-a-tempo-minus');
    this.deckACanvas = document.getElementById('deck-a-canvas');
    this.deckAWaveWrap = document.getElementById('deck-a-waveform-wrap');
    this.deckATimeCur = document.getElementById('deck-a-time-cur');
    this.deckATimeRem = document.getElementById('deck-a-time-rem');
    this.deckAJog = document.getElementById('deck-a-jog');
    this.deckAJogBpm = document.getElementById('deck-a-jog-bpm');
    this.deckAJogPitch = document.getElementById('deck-a-jog-pitch');
    this.deckACue = document.getElementById('deck-a-cue');
    this.deckAPlay = document.getElementById('deck-a-play');
    this.deckASync = document.getElementById('deck-a-sync');
    this.deckALoop4 = document.getElementById('deck-a-loop-4');
    this.deckALoop8 = document.getElementById('deck-a-loop-8');
    this.deckAFxToggle = document.getElementById('deck-a-fx-toggle');

    // --- DECK B CONTROLS ---
    this.deckBUnit = document.getElementById('deck-b-unit');
    this.deckBTitle = document.getElementById('deck-b-title');
    this.deckBArtist = document.getElementById('deck-b-artist');
    this.deckBState = document.getElementById('deck-b-state');
    this.deckBBpm = document.getElementById('deck-b-bpm');
    this.deckBPitchVal = document.getElementById('deck-b-pitch-val');
    this.deckBPitch = document.getElementById('deck-b-pitch');
    this.deckBPitchReset = document.getElementById('deck-b-pitch-reset');
    this.deckBTempoPlus = document.getElementById('deck-b-tempo-plus');
    this.deckBTempoMinus = document.getElementById('deck-b-tempo-minus');
    this.deckBCanvas = document.getElementById('deck-b-canvas');
    this.deckBWaveWrap = document.getElementById('deck-b-waveform-wrap');
    this.deckBTimeCur = document.getElementById('deck-b-time-cur');
    this.deckBTimeRem = document.getElementById('deck-b-time-rem');
    this.deckBJog = document.getElementById('deck-b-jog');
    this.deckBJogBpm = document.getElementById('deck-b-jog-bpm');
    this.deckBJogPitch = document.getElementById('deck-b-jog-pitch');
    this.deckBCue = document.getElementById('deck-b-cue');
    this.deckBPlay = document.getElementById('deck-b-play');
    this.deckBSync = document.getElementById('deck-b-sync');
    this.deckBLoop4 = document.getElementById('deck-b-loop-4');
    this.deckBLoop8 = document.getElementById('deck-b-loop-8');
    this.deckBFxToggle = document.getElementById('deck-b-fx-toggle');

    // --- PIONEER DJM MIXER CONTROLS ---
    this.faderCh1 = document.getElementById('fader-ch1');
    this.vuMeterCh1Leds = document.querySelectorAll('#vu-meter-ch1 .led');
    this.faderCh2 = document.getElementById('fader-ch2');
    this.vuMeterCh2Leds = document.querySelectorAll('#vu-meter-ch2 .led');

    this.masterVuL = document.querySelectorAll('#master-vu-l .led');
    this.masterVuR = document.querySelectorAll('#master-vu-r .led');
    this.btnMixNow = document.getElementById('btn-mix-now');
    this.btnPrev = document.getElementById('btn-prev');
    this.btnNext = document.getElementById('btn-next');
    this.btnMixerPlay = document.getElementById('btn-mixer-play');
    this.btnMute = document.getElementById('btn-mute');
    this.iconVol = document.getElementById('icon-vol');
    this.iconMute = document.getElementById('icon-mute');
    this.btnFullscreen = document.getElementById('btn-fullscreen');

    this.crossfaderTrack = document.getElementById('crossfader-track');
    this.crossfaderCap = document.getElementById('crossfader-cap');

    // Bottom Utility Bar
    this.btnAutoDj = document.getElementById('btn-auto-dj');
    this.btnRecord = document.getElementById('btn-record');
    this.btnSplit = document.getElementById('btn-split');
    this.horizVuBars = document.querySelectorAll('.horiz-vu-bar');

    this.jogAngleA = 0;
    this.jogAngleB = 0;

    // Generated Waveform Profiles
    this.waveformProfileA = this.generateWaveformProfile('seed-a');
    this.waveformProfileB = this.generateWaveformProfile('seed-b');

    this.initHardwareEvents();
    this.initRotaryKnobs();
    this.initWaveformSeeking();
  }

  // Generate 120-slice realistic song waveform structure
  generateWaveformProfile(seedStr) {
    let hash = 0;
    for (let i = 0; i < seedStr.length; i++) {
      hash = ((hash << 5) - hash) + seedStr.charCodeAt(i);
      hash |= 0;
    }

    const pseudoRand = (idx) => {
      const x = Math.sin(hash + idx * 12.9898) * 43758.5453;
      return x - Math.floor(x);
    };

    const slices = [];
    const count = 120;

    for (let i = 0; i < count; i++) {
      const progress = i / count;
      let baseEnergy = 0.5;

      if (progress < 0.12) {
        baseEnergy = 0.3 + 0.35 * (progress / 0.12);
      } else if (progress < 0.35) {
        baseEnergy = 0.75 + 0.2 * Math.sin(progress * 40);
      } else if (progress < 0.45) {
        baseEnergy = 0.35 + 0.15 * Math.sin(progress * 20);
      } else if (progress < 0.75) {
        baseEnergy = 0.88 + 0.12 * Math.sin(progress * 50);
      } else if (progress < 0.85) {
        baseEnergy = 0.45 + 0.2 * Math.sin(progress * 30);
      } else {
        baseEnergy = 0.7 * (1.0 - (progress - 0.85) / 0.15);
      }

      const noise = pseudoRand(i);
      const isKickBeat = (i % 4 === 0) || (i % 6 === 0);
      const spike = isKickBeat ? 0.25 * noise : 0.12 * noise;
      const height = Math.max(0.18, Math.min(1.0, baseEnergy + spike));

      slices.push(height);
    }
    return slices;
  }

  // Draw Pioneer Waveform on HTML5 Canvas
  drawWaveform(canvas, profile, progressPct, deckType, liveAnalysis) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const centerY = h / 2;

    ctx.clearRect(0, 0, w, h);

    const count = profile.length;
    const barWidth = w / count;
    const playheadX = progressPct * w;
    const bassPulse = liveAnalysis ? liveAnalysis.bass * 4 : 0;

    for (let i = 0; i < count; i++) {
      const x = i * barWidth;
      const isPlayed = x <= playheadX;
      const distToPlayhead = Math.abs(x - playheadX);
      const localBounce = (distToPlayhead < 16 && isPlayed) ? bassPulse : 0;

      const rawH = (profile[i] * (h * 0.84)) + localBounce;
      const barH = Math.max(3, Math.min(h - 2, rawH));
      const topY = centerY - (barH / 2);

      if (isPlayed) {
        if (deckType === 'A') {
          const grad = ctx.createLinearGradient(0, topY, 0, topY + barH);
          grad.addColorStop(0, '#ffffff');
          grad.addColorStop(0.3, '#00f0ff');
          grad.addColorStop(0.7, '#7928ca');
          grad.addColorStop(1, '#00f0ff');
          ctx.fillStyle = grad;
        } else {
          const grad = ctx.createLinearGradient(0, topY, 0, topY + barH);
          grad.addColorStop(0, '#ffffff');
          grad.addColorStop(0.3, '#ff007f');
          grad.addColorStop(0.7, '#ffd000');
          grad.addColorStop(1, '#ff007f');
          ctx.fillStyle = grad;
        }
      } else {
        ctx.fillStyle = 'rgba(90, 105, 140, 0.32)';
      }

      ctx.fillRect(x + 0.5, topY, Math.max(1.8, barWidth - 1), barH);
    }

    // Playhead Line
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = deckType === 'A' ? '#00f0ff' : '#ff007f';
    ctx.shadowBlur = 8;
    ctx.fillRect(playheadX - 1, 0, 2, h);
    ctx.shadowBlur = 0;
  }

  initWaveformSeeking() {
    const handleSeek = (wrap, deck) => {
      if (!wrap) return;
      wrap.addEventListener('click', (e) => {
        const rect = wrap.getBoundingClientRect();
        const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const audio = deck === 'A' ? this.audioEngine.audioA : this.audioEngine.audioB;
        if (audio && audio.duration) {
          audio.currentTime = pct * audio.duration;
        }
      });
    };
    handleSeek(this.deckAWaveWrap, 'A');
    handleSeek(this.deckBWaveWrap, 'B');
  }

  // Real Circular Rotary Knobs Handler
  initRotaryKnobs() {
    const knobElements = document.querySelectorAll('.rotary-knob-component');

    knobElements.forEach(knobEl => {
      const param = knobEl.getAttribute('data-param');
      const min = parseFloat(knobEl.getAttribute('data-min'));
      const max = parseFloat(knobEl.getAttribute('data-max'));
      const defaultVal = parseFloat(knobEl.getAttribute('data-default'));
      let currentVal = parseFloat(knobEl.getAttribute('data-val'));
      const capEl = knobEl.querySelector('.knob-cap');

      const updateKnobVisual = (val) => {
        const pct = (val - min) / (max - min);
        const deg = -135 + (pct * 270);
        if (capEl) capEl.style.transform = `rotate(${deg}deg)`;
        knobEl.setAttribute('data-val', val);
      };

      const dispatchParam = (val) => {
        if (!this.audioEngine) return;
        switch (param) {
          case 'trim-A': this.audioEngine.setChannelGain('A', val); break;
          case 'eq-A-high': this.audioEngine.setEQ('A', 'high', val); break;
          case 'eq-A-mid': this.audioEngine.setEQ('A', 'mid', val); break;
          case 'eq-A-low': this.audioEngine.setEQ('A', 'low', val); break;
          case 'filter-A': this.audioEngine.setFilterSweep('A', val); break;

          case 'trim-B': this.audioEngine.setChannelGain('B', val); break;
          case 'eq-B-high': this.audioEngine.setEQ('B', 'high', val); break;
          case 'eq-B-mid': this.audioEngine.setEQ('B', 'mid', val); break;
          case 'eq-B-low': this.audioEngine.setEQ('B', 'low', val); break;
          case 'filter-B': this.audioEngine.setFilterSweep('B', val); break;

          case 'master-vol': this.audioEngine.setVolume(val); break;
        }
      };

      updateKnobVisual(currentVal);

      let isDragging = false;
      let startY = 0;
      let startVal = currentVal;

      const onPointerDown = (e) => {
        isDragging = true;
        startY = e.clientY || (e.touches && e.touches[0].clientY);
        startVal = currentVal;
        knobEl.classList.add('is-dragging');
        window.addEventListener('mousemove', onPointerMove);
        window.addEventListener('mouseup', onPointerUp);
        window.addEventListener('touchmove', onPointerMove, { passive: false });
        window.addEventListener('touchend', onPointerUp);
      };

      const onPointerMove = (e) => {
        if (!isDragging) return;
        if (e.preventDefault) e.preventDefault();
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        const deltaY = startY - clientY;
        const range = max - min;
        const sensitivity = range / 140;

        currentVal = Math.max(min, Math.min(max, startVal + (deltaY * sensitivity)));
        updateKnobVisual(currentVal);
        dispatchParam(currentVal);
      };

      const onPointerUp = () => {
        if (isDragging) {
          isDragging = false;
          knobEl.classList.remove('is-dragging');
          window.removeEventListener('mousemove', onPointerMove);
          window.removeEventListener('mouseup', onPointerUp);
          window.removeEventListener('touchmove', onPointerMove);
          window.removeEventListener('touchend', onPointerUp);
        }
      };

      knobEl.addEventListener('mousedown', onPointerDown);
      knobEl.addEventListener('touchstart', onPointerDown, { passive: false });

      knobEl.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 1 : -1;
        const step = (max - min) / 30;
        currentVal = Math.max(min, Math.min(max, currentVal + (delta * step)));
        updateKnobVisual(currentVal);
        dispatchParam(currentVal);
      });

      knobEl.addEventListener('dblclick', () => {
        currentVal = defaultVal;
        updateKnobVisual(currentVal);
        dispatchParam(currentVal);
      });
    });
  }

  initHardwareEvents() {
    if (this.btnStart) {
      this.btnStart.addEventListener('click', async () => {
        if (this.overlay) this.overlay.classList.add('hidden');
        await this.audioEngine.start();
        this.updatePlayState(true);
      });
    }

    // --- DECK A Hardware Events ---
    if (this.deckAPlay) {
      this.deckAPlay.addEventListener('click', () => {
        const isPlaying = this.audioEngine.togglePlayDeck('A');
        this.deckAPlay.classList.toggle('active-play', isPlaying);
        this.updatePlayState(isPlaying);
      });
    }
    if (this.deckACue) {
      this.deckACue.addEventListener('click', () => {
        this.audioEngine.cueDeck('A');
        if (this.deckAPlay) this.deckAPlay.classList.remove('active-play');
        this.updatePlayState(false);
      });
    }
    if (this.deckAPitch) {
      this.deckAPitch.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        this.audioEngine.setPitch('A', val);
        const pitchText = `${val >= 0 ? '+' : ''}${val.toFixed(1)}%`;
        if (this.deckAPitchVal) this.deckAPitchVal.textContent = pitchText;
        if (this.deckAJogPitch) this.deckAJogPitch.textContent = pitchText;
      });
    }
    if (this.deckAPitchReset) {
      this.deckAPitchReset.addEventListener('click', () => {
        if (this.deckAPitch) this.deckAPitch.value = 0;
        this.audioEngine.setPitch('A', 0);
        if (this.deckAPitchVal) this.deckAPitchVal.textContent = '+0.0%';
        if (this.deckAJogPitch) this.deckAJogPitch.textContent = '0.0%';
      });
    }
    if (this.deckATempoPlus) {
      this.deckATempoPlus.addEventListener('click', () => {
        if (this.deckAPitch) {
          this.deckAPitch.value = Math.min(8, parseFloat(this.deckAPitch.value) + 0.5);
          this.deckAPitch.dispatchEvent(new Event('input'));
        }
      });
    }
    if (this.deckATempoMinus) {
      this.deckATempoMinus.addEventListener('click', () => {
        if (this.deckAPitch) {
          this.deckAPitch.value = Math.max(-8, parseFloat(this.deckAPitch.value) - 0.5);
          this.deckAPitch.dispatchEvent(new Event('input'));
        }
      });
    }
    if (this.deckALoop4) {
      this.deckALoop4.addEventListener('click', () => {
        const active = this.audioEngine.toggleLoop('A', 4);
        this.deckALoop4.classList.toggle('active', active);
        if (this.deckALoop8) this.deckALoop8.classList.remove('active');
      });
    }
    if (this.deckALoop8) {
      this.deckALoop8.addEventListener('click', () => {
        const active = this.audioEngine.toggleLoop('A', 8);
        this.deckALoop8.classList.toggle('active', active);
        if (this.deckALoop4) this.deckALoop4.classList.remove('active');
      });
    }
    if (this.deckAFxToggle) {
      this.deckAFxToggle.addEventListener('click', () => this.deckAFxToggle.classList.toggle('active'));
    }

    // --- DECK B Hardware Events ---
    if (this.deckBPlay) {
      this.deckBPlay.addEventListener('click', () => {
        const isPlaying = this.audioEngine.togglePlayDeck('B');
        this.deckBPlay.classList.toggle('active-play', isPlaying);
        this.updatePlayState(isPlaying);
      });
    }
    if (this.deckBCue) {
      this.deckBCue.addEventListener('click', () => {
        this.audioEngine.cueDeck('B');
        if (this.deckBPlay) this.deckBPlay.classList.remove('active-play');
        this.updatePlayState(false);
      });
    }
    if (this.deckBPitch) {
      this.deckBPitch.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        this.audioEngine.setPitch('B', val);
        const pitchText = `${val >= 0 ? '+' : ''}${val.toFixed(1)}%`;
        if (this.deckBPitchVal) this.deckBPitchVal.textContent = pitchText;
        if (this.deckBJogPitch) this.deckBJogPitch.textContent = pitchText;
      });
    }
    if (this.deckBPitchReset) {
      this.deckBPitchReset.addEventListener('click', () => {
        if (this.deckBPitch) this.deckBPitch.value = 0;
        this.audioEngine.setPitch('B', 0);
        if (this.deckBPitchVal) this.deckBPitchVal.textContent = '+0.0%';
        if (this.deckBJogPitch) this.deckBJogPitch.textContent = '0.0%';
      });
    }
    if (this.deckBTempoPlus) {
      this.deckBTempoPlus.addEventListener('click', () => {
        if (this.deckBPitch) {
          this.deckBPitch.value = Math.min(8, parseFloat(this.deckBPitch.value) + 0.5);
          this.deckBPitch.dispatchEvent(new Event('input'));
        }
      });
    }
    if (this.deckBTempoMinus) {
      this.deckBTempoMinus.addEventListener('click', () => {
        if (this.deckBPitch) {
          this.deckBPitch.value = Math.max(-8, parseFloat(this.deckBPitch.value) - 0.5);
          this.deckBPitch.dispatchEvent(new Event('input'));
        }
      });
    }
    if (this.deckBLoop4) {
      this.deckBLoop4.addEventListener('click', () => {
        const active = this.audioEngine.toggleLoop('B', 4);
        this.deckBLoop4.classList.toggle('active', active);
        if (this.deckBLoop8) this.deckBLoop8.classList.remove('active');
      });
    }
    if (this.deckBLoop8) {
      this.deckBLoop8.addEventListener('click', () => {
        const active = this.audioEngine.toggleLoop('B', 8);
        this.deckBLoop8.classList.toggle('active', active);
        if (this.deckBLoop4) this.deckBLoop4.classList.remove('active');
      });
    }
    if (this.deckBFxToggle) {
      this.deckBFxToggle.addEventListener('click', () => this.deckBFxToggle.classList.toggle('active'));
    }

    // --- Faders ---
    if (this.faderCh1) {
      this.faderCh1.addEventListener('input', (e) => this.audioEngine.setChannelGain('A', parseFloat(e.target.value)));
    }
    if (this.faderCh2) {
      this.faderCh2.addEventListener('input', (e) => this.audioEngine.setChannelGain('B', parseFloat(e.target.value)));
    }

    // Master Controls
    if (this.btnMixNow) {
      this.btnMixNow.addEventListener('click', () => this.audioEngine.triggerDJCrossfade());
    }
    if (this.btnNext) {
      this.btnNext.addEventListener('click', () => this.audioEngine.skipNext());
    }
    if (this.btnPrev) {
      this.btnPrev.addEventListener('click', () => this.audioEngine.skipPrev());
    }
    if (this.btnMixerPlay) {
      this.btnMixerPlay.addEventListener('click', () => {
        const isPlaying = this.audioEngine.togglePlay();
        this.updatePlayState(isPlaying);
      });
    }
    if (this.btnMute) {
      this.btnMute.addEventListener('click', () => {
        const isMuted = this.audioEngine.toggleMute();
        this.updateVolumeIcons(isMuted);
      });
    }
    if (this.btnFullscreen) {
      this.btnFullscreen.addEventListener('click', () => {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
        else document.exitFullscreen().catch(() => {});
      });
    }

    // Crossfader Click / Drag & CH 1 / CH 2 Smooth Transition Buttons
    const btnCfCh1 = document.getElementById('btn-cf-ch1');
    const btnCfCh2 = document.getElementById('btn-cf-ch2');
    if (btnCfCh1) {
      btnCfCh1.addEventListener('click', () => {
        this.audioEngine.crossfadeToDeck('A', 5.0);
      });
    }
    if (btnCfCh2) {
      btnCfCh2.addEventListener('click', () => {
        this.audioEngine.crossfadeToDeck('B', 5.0);
      });
    }

    if (this.crossfaderTrack) {
      this.crossfaderTrack.addEventListener('click', (e) => {
        const rect = this.crossfaderTrack.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const pct = Math.max(0, Math.min(1, clickX / rect.width));
        if (pct < 0.35) {
          this.audioEngine.crossfadeToDeck('A', 4.0);
        } else if (pct > 0.65) {
          this.audioEngine.crossfadeToDeck('B', 4.0);
        } else {
          this.audioEngine.setCrossfader(pct);
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

    // Cameras
    this.camButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.camButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.djScene.setCameraPreset(btn.getAttribute('data-cam'));
      });
    });

    // Queue Toggle
    if (this.btnQueueToggle && this.queueDrawer) {
      this.btnQueueToggle.addEventListener('click', () => this.queueDrawer.classList.toggle('hidden'));
    }
    if (this.queueCloseBtn && this.queueDrawer) {
      this.queueCloseBtn.addEventListener('click', () => this.queueDrawer.classList.add('hidden'));
    }
  }

  updatePlayState(isPlaying) {
    if (isPlaying) {
      if (this.waveIndicator) this.waveIndicator.classList.add('wave-playing');
    } else {
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

    if (activeDeck === 'A') {
      if (this.deckATitle) this.deckATitle.textContent = track.title || 'Unknown Track';
      if (this.deckAArtist) this.deckAArtist.textContent = track.artist || 'JMF Radio';
      if (this.deckAState) this.deckAState.textContent = 'ON AIR';
      if (this.deckAPlay) this.deckAPlay.classList.add('active-play');

      this.waveformProfileA = this.generateWaveformProfile(track.title + (track.id || 'a'));

      if (nextTrack) {
        if (this.deckBTitle) this.deckBTitle.textContent = nextTrack.title || 'Upcoming Track';
        if (this.deckBArtist) this.deckBArtist.textContent = nextTrack.artist || 'Next on Deck';
        if (this.deckBState) this.deckBState.textContent = 'CUE / NEXT';
        if (this.deckBPlay) this.deckBPlay.classList.remove('active-play');
        this.waveformProfileB = this.generateWaveformProfile(nextTrack.title + (nextTrack.id || 'b'));
      }
    } else {
      if (this.deckBTitle) this.deckBTitle.textContent = track.title || 'Unknown Track';
      if (this.deckBArtist) this.deckBArtist.textContent = track.artist || 'JMF Radio';
      if (this.deckBState) this.deckBState.textContent = 'ON AIR';
      if (this.deckBPlay) this.deckBPlay.classList.add('active-play');

      this.waveformProfileB = this.generateWaveformProfile(track.title + (track.id || 'b'));

      if (nextTrack) {
        if (this.deckATitle) this.deckATitle.textContent = nextTrack.title || 'Upcoming Track';
        if (this.deckAArtist) this.deckAArtist.textContent = nextTrack.artist || 'Next on Deck';
        if (this.deckAState) this.deckAState.textContent = 'CUE / NEXT';
        if (this.deckAPlay) this.deckAPlay.classList.remove('active-play');
        this.waveformProfileA = this.generateWaveformProfile(nextTrack.title + (nextTrack.id || 'a'));
      }
    }

    if (queue && queue.length > 0 && this.queueList) {
      this.queueList.innerHTML = queue.map((item, idx) => `
        <div class="queue-item">
          <div class="queue-item-title">${idx + 1}. ${item.title}</div>
          <div class="queue-item-artist">${item.artist}</div>
        </div>
      `).join('');
    }

    if (this.transitionBanner) this.transitionBanner.classList.add('hidden');
  }

  onTransition(isTransitioning, fromDeck, toDeck, nextTrack) {
    if (isTransitioning && nextTrack) {
      if (this.transitionText) {
        this.transitionText.textContent = `🎛️ DJ MIXING: DECK ${fromDeck} ➔ DECK ${toDeck} ("${nextTrack.title.substring(0, 24)}...")`;
      }
      if (this.transitionBanner) this.transitionBanner.classList.remove('hidden');

      if (toDeck === 'B') {
        if (this.deckBState) this.deckBState.textContent = 'MIXING IN';
        if (this.deckBPlay) this.deckBPlay.classList.add('active-play');
      } else if (toDeck === 'A') {
        if (this.deckAState) this.deckAState.textContent = 'MIXING IN';
        if (this.deckAPlay) this.deckAPlay.classList.add('active-play');
      }
    } else {
      if (this.transitionBanner) this.transitionBanner.classList.add('hidden');
    }
  }

  updateProgress(elapsedTime, duration, audioAnalysis) {
    const activeDeck = this.audioEngine.activeDeck;
    const isPlaying = this.audioEngine.isPlaying;
    const isCrossfading = this.audioEngine.isCrossfading;
    const rem = Math.max(0, duration - elapsedTime);
    const pct = duration > 0 ? Math.min(1.0, elapsedTime / duration) : 0;

    // 1. Draw Waveforms on HTML5 Canvas & Update Time Displays
    if (activeDeck === 'A') {
      this.drawWaveform(this.deckACanvas, this.waveformProfileA, pct, 'A', audioAnalysis);
      if (this.deckATimeCur) this.deckATimeCur.textContent = this.formatTime(elapsedTime);
      if (this.deckATimeRem) this.deckATimeRem.textContent = `-${this.formatTime(rem)}`;

      if (!isCrossfading) {
        this.drawWaveform(this.deckBCanvas, this.waveformProfileB, 0, 'B', null);
        if (this.deckBTimeCur) this.deckBTimeCur.textContent = '0:00';
        if (this.deckBTimeRem) this.deckBTimeRem.textContent = 'READY';
      } else {
        const incomingAudio = this.audioEngine.audioB;
        const inElapsed = incomingAudio.currentTime || 0;
        const inDur = incomingAudio.duration || 180;
        const inPct = inDur > 0 ? Math.min(1.0, inElapsed / inDur) : 0;
        this.drawWaveform(this.deckBCanvas, this.waveformProfileB, inPct, 'B', audioAnalysis);
        if (this.deckBTimeCur) this.deckBTimeCur.textContent = this.formatTime(inElapsed);
        if (this.deckBTimeRem) this.deckBTimeRem.textContent = `-${this.formatTime(Math.max(0, inDur - inElapsed))}`;
      }
    } else {
      this.drawWaveform(this.deckBCanvas, this.waveformProfileB, pct, 'B', audioAnalysis);
      if (this.deckBTimeCur) this.deckBTimeCur.textContent = this.formatTime(elapsedTime);
      if (this.deckBTimeRem) this.deckBTimeRem.textContent = `-${this.formatTime(rem)}`;

      if (!isCrossfading) {
        this.drawWaveform(this.deckACanvas, this.waveformProfileA, 0, 'A', null);
        if (this.deckATimeCur) this.deckATimeCur.textContent = '0:00';
        if (this.deckATimeRem) this.deckATimeRem.textContent = 'READY';
      } else {
        const incomingAudio = this.audioEngine.audioA;
        const inElapsed = incomingAudio.currentTime || 0;
        const inDur = incomingAudio.duration || 180;
        const inPct = inDur > 0 ? Math.min(1.0, inElapsed / inDur) : 0;
        this.drawWaveform(this.deckACanvas, this.waveformProfileA, inPct, 'A', audioAnalysis);
        if (this.deckATimeCur) this.deckATimeCur.textContent = this.formatTime(inElapsed);
        if (this.deckATimeRem) this.deckATimeRem.textContent = `-${this.formatTime(Math.max(0, inDur - inElapsed))}`;
      }
    }

    // 2. Real Live Analyzed BPM Displays & Jog Wheel LCDs
    if (audioAnalysis) {
      const bpmAStr = `${audioAnalysis.bpmA.toFixed(1)}`;
      const bpmBStr = `${audioAnalysis.bpmB.toFixed(1)}`;
      if (this.deckABpm) this.deckABpm.textContent = bpmAStr;
      if (this.deckBBpm) this.deckBBpm.textContent = bpmBStr;
      if (this.deckAJogBpm) this.deckAJogBpm.textContent = bpmAStr;
      if (this.deckBJogBpm) this.deckBJogBpm.textContent = bpmBStr;
    }

    // 3. Spin CDJ Jog Platters Continuously Forward
    if (isPlaying) {
      const isDeckAPlaying = activeDeck === 'A' || this.audioEngine.isCrossfading || this.audioEngine.deckStates?.A?.isPlaying;
      const isDeckBPlaying = activeDeck === 'B' || this.audioEngine.isCrossfading || this.audioEngine.deckStates?.B?.isPlaying;

      if (isDeckAPlaying) {
        this.jogAngleA += 2.2;
        if (this.deckAJog) this.deckAJog.style.transform = `rotate(${this.jogAngleA}deg)`;
      }
      if (isDeckBPlaying) {
        this.jogAngleB += 2.2;
        if (this.deckBJog) this.deckBJog.style.transform = `rotate(${this.jogAngleB}deg)`;
      }
    }

    // 4. Crossfader Position Slider
    if (this.crossfaderCap && audioAnalysis) {
      const faderPct = audioAnalysis.crossfadeProgress * 100;
      this.crossfaderCap.style.left = `${faderPct}%`;
    }

    // 5. Multi-Segment VU-Meters
    if (audioAnalysis && isPlaying) {
      this.updateLEDs(this.vuMeterCh1Leds, audioAnalysis.deckALevel);
      this.updateLEDs(this.vuMeterCh2Leds, audioAnalysis.deckBLevel);
      this.updateLEDs(this.masterVuL, audioAnalysis.volume * 1.3 + audioAnalysis.bass * 0.3);
      this.updateLEDs(this.masterVuR, audioAnalysis.volume * 1.3 + audioAnalysis.treble * 0.3);

      this.horizVuBars.forEach(bar => {
        bar.style.width = `${Math.min(100, audioAnalysis.volume * 120)}%`;
      });
    } else {
      this.updateLEDs(this.vuMeterCh1Leds, 0);
      this.updateLEDs(this.vuMeterCh2Leds, 0);
      this.updateLEDs(this.masterVuL, 0);
      this.updateLEDs(this.masterVuR, 0);
      this.horizVuBars.forEach(bar => { bar.style.width = '10%'; });
    }
  }

  updateLEDs(leds, level) {
    if (!leds) return;
    const total = leds.length;
    for (let i = 0; i < total; i++) {
      const threshold = (total - 1 - i) / total;
      const isLit = level >= threshold;
      leds[i].className = 'led ' + (isLit ? (i <= 1 ? 'lit-red' : i <= 2 ? 'lit-orange' : i <= 3 ? 'lit-yellow' : 'lit-green') : '');
    }
  }
}
