export class JogWheelController {
  constructor(audioEngine, deckAJog, deckBJog, deckAJogBpm, deckBJogBpm, deckAJogPitch, deckBJogPitch, deckAPitch, deckBPitch, deckAPitchVal, deckBPitchVal, deckAPitchReset, deckBPitchReset, deckATempoPlus, deckATempoMinus, deckBTempoPlus, deckBTempoMinus) {
    this.audioEngine = audioEngine;
    this.deckAJog = deckAJog;
    this.deckBJog = deckBJog;
    this.deckAJogBpm = deckAJogBpm;
    this.deckBJogBpm = deckBJogBpm;
    this.deckAJogPitch = deckAJogPitch;
    this.deckBJogPitch = deckBJogPitch;
    this.deckAPitch = deckAPitch;
    this.deckBPitch = deckBPitch;
    this.deckAPitchVal = deckAPitchVal;
    this.deckBPitchVal = deckBPitchVal;
    this.deckAPitchReset = deckAPitchReset;
    this.deckBPitchReset = deckBPitchReset;
    this.deckATempoPlus = deckATempoPlus;
    this.deckATempoMinus = deckATempoMinus;
    this.deckBTempoPlus = deckBTempoPlus;
    this.deckBTempoMinus = deckBTempoMinus;

    this.jogAngleA = 0;
    this.jogAngleB = 0;

    this.initJogWheelMouseControl();
    this.initRotaryKnobs();
  }

  getJogAngleA() {
    return this.jogAngleA;
  }

  getJogAngleB() {
    return this.jogAngleB;
  }

  updateJogAngles(audioAnalysis, isPlaying, deckStates) {
    if (isPlaying) {
      const activeDeck = this.audioEngine.activeDeck;
      const isDeckAPlaying = activeDeck === 'A' || this.audioEngine.isCrossfading || deckStates?.A?.isPlaying;
      const isDeckBPlaying = activeDeck === 'B' || this.audioEngine.isCrossfading || deckStates?.B?.isPlaying;

      if (isDeckAPlaying) {
        this.jogAngleA += 2.2;
        if (this.deckAJog) this.deckAJog.style.transform = `rotate(${this.jogAngleA}deg)`;
      }
      if (isDeckBPlaying) {
        this.jogAngleB += 2.2;
        if (this.deckBJog) this.deckBJog.style.transform = `rotate(${this.jogAngleB}deg)`;
      }
    }
  }

  // Real Vinyl Scratching, Jog Wheel Mouse Drag & Nudge
  initJogWheelMouseControl() {
    const setupJog = (jogEl, deck) => {
      if (!jogEl) return;

      let isDragging = false;
      let prevAngle = 0;
      let wasPlayingBeforeDrag = false;

      const getCenter = () => {
        const rect = jogEl.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        };
      };

      const getMouseAngle = (e) => {
        const center = getCenter();
        const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
        const clientY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
        return Math.atan2(clientY - center.y, clientX - center.x);
      };

      const onMouseDown = (e) => {
        e.preventDefault();
        isDragging = true;
        prevAngle = getMouseAngle(e);

        jogEl.classList.add('is-scratching');
        const audio = deck === 'A' ? this.audioEngine.audioA : this.audioEngine.audioB;
        wasPlayingBeforeDrag = audio && !audio.paused;

        if (wasPlayingBeforeDrag) {
          audio.pause();
        }

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('touchmove', onMouseMove, { passive: false });
        window.addEventListener('touchend', onMouseUp);
      };

      const onMouseMove = (e) => {
        if (!isDragging) return;
        if (e.preventDefault) e.preventDefault();

        const currentAngle = getMouseAngle(e);
        let delta = currentAngle - prevAngle;

        // Handle wrap-around across -PI / +PI boundary
        if (delta > Math.PI) delta -= 2 * Math.PI;
        if (delta < -Math.PI) delta += 2 * Math.PI;

        prevAngle = currentAngle;

        const deltaDeg = delta * (180 / Math.PI);
        if (deck === 'A') {
          this.jogAngleA += deltaDeg;
          jogEl.style.transform = `rotate(${this.jogAngleA}deg)`;
        } else {
          this.jogAngleB += deltaDeg;
          jogEl.style.transform = `rotate(${this.jogAngleB}deg)`;
        }

        // Real Vinyl Scratch Scrub: 1 full rotation = 1.8s audio
        const audio = deck === 'A' ? this.audioEngine.audioA : this.audioEngine.audioB;
        if (audio && audio.duration) {
          const deltaSec = (delta / (2 * Math.PI)) * 1.8;
          audio.currentTime = Math.max(0, Math.min(audio.duration, audio.currentTime + deltaSec));
        }
      };

      const onMouseUp = () => {
        if (isDragging) {
          isDragging = false;
          jogEl.classList.remove('is-scratching');

          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('mouseup', onMouseUp);
          window.removeEventListener('touchmove', onMouseMove);
          window.removeEventListener('touchend', onMouseUp);

          const audio = deck === 'A' ? this.audioEngine.audioA : this.audioEngine.audioB;
          if (wasPlayingBeforeDrag && audio) {
            audio.play().catch(err => console.warn('Resume error after jog scratch:', err));
          }
        }
      };

      jogEl.addEventListener('mousedown', onMouseDown);
      jogEl.addEventListener('touchstart', onMouseDown, { passive: false });

      // Mouse Wheel Nudge / Pitch Bend
      jogEl.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 1 : -1;
        const nudgeSec = delta * 0.35;
        const nudgeDeg = delta * 12;

        if (deck === 'A') {
          this.jogAngleA += nudgeDeg;
          jogEl.style.transform = `rotate(${this.jogAngleA}deg)`;
        } else {
          this.jogAngleB += nudgeDeg;
          jogEl.style.transform = `rotate(${this.jogAngleB}deg)`;
        }

        const audio = deck === 'A' ? this.audioEngine.audioA : this.audioEngine.audioB;
        if (audio && audio.duration) {
          audio.currentTime = Math.max(0, Math.min(audio.duration, audio.currentTime + nudgeSec));
        }
      });
    };

    setupJog(this.deckAJog, 'A');
    setupJog(this.deckBJog, 'B');
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
          case 'fx-a-lpf': this.audioEngine.setFXParam('A', 'lpf', val); break;
          case 'fx-a-res': this.audioEngine.setFXParam('A', 'res', val); break;
          case 'fx-a-drywet': this.audioEngine.setFXParam('A', 'drywet', val); break;

          case 'trim-B': this.audioEngine.setChannelGain('B', val); break;
          case 'eq-B-high': this.audioEngine.setEQ('B', 'high', val); break;
          case 'eq-B-mid': this.audioEngine.setEQ('B', 'mid', val); break;
          case 'eq-B-low': this.audioEngine.setEQ('B', 'low', val); break;
          case 'filter-B': this.audioEngine.setFilterSweep('B', val); break;
          case 'fx-b-lpf': this.audioEngine.setFXParam('B', 'lpf', val); break;
          case 'fx-b-res': this.audioEngine.setFXParam('B', 'res', val); break;
          case 'fx-b-drywet': this.audioEngine.setFXParam('B', 'drywet', val); break;

          case 'master-vol': this.audioEngine.setVolume(val); break;
          case 'hp-vol': this.audioEngine.setVolume(val); break;
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
}
