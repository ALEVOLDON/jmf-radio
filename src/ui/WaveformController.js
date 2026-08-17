export class WaveformController {
  constructor(audioEngine, deckAWaveWrap, deckBWaveWrap, deckACanvas, deckBCanvas, radioWaveformCanvas, radioWaveformWrap) {
    this.audioEngine = audioEngine;
    this.deckAWaveWrap = deckAWaveWrap;
    this.deckBWaveWrap = deckBWaveWrap;
    this.deckACanvas = deckACanvas;
    this.deckBCanvas = deckBCanvas;
    this.radioWaveformCanvas = radioWaveformCanvas;
    this.radioWaveformWrap = radioWaveformWrap;

    this.waveformProfileA = this.generateWaveformProfile('seed-a');
    this.waveformProfileB = this.generateWaveformProfile('seed-b');

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
}
