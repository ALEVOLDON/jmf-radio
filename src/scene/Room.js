import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export class Room {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.neonElements = [];
    this.cityBuildings = [];
    this.vipLights = [];
    this.stageCanvas = null;
    this.stageTexture = null;
    this.stageCtx = null;
    this.stagePhase = 0;

    this.init();
    this.scene.add(this.group);
  }

  init() {
    this.createFloor();
    this.createWalls();
    this.createWindowAndSkyline();
    this.createAcousticPanels();
    this.createNeonSigns();
    this.createVIPLounge();
    this.createStageScreen();
  }

  createFloor() {
    // Large polished dark reflective club floor (24m x 22m)
    const floorGeo = new THREE.PlaneGeometry(26, 24);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x0a0b12,
      roughness: 0.15,
      metalness: 0.85,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.group.add(floor);

    // Floor grid accent lines
    const gridHelper = new THREE.GridHelper(24, 48, 0x00f0ff, 0x181a28);
    gridHelper.position.y = 0.005;
    this.group.add(gridHelper);
  }

  createWalls() {
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x10111a,
      roughness: 0.85,
      metalness: 0.1,
    });

    // Back Wall (behind DJ, with big window cut-out)
    const backLeftPillar = new THREE.Mesh(new THREE.BoxGeometry(7, 9, 0.4), wallMat);
    backLeftPillar.position.set(-8.5, 4.5, -9.8);
    backLeftPillar.receiveShadow = true;
    this.group.add(backLeftPillar);

    const backRightPillar = new THREE.Mesh(new THREE.BoxGeometry(7, 9, 0.4), wallMat);
    backRightPillar.position.set(8.5, 4.5, -9.8);
    backRightPillar.receiveShadow = true;
    this.group.add(backRightPillar);

    // Top window lintel
    const backTopLintel = new THREE.Mesh(new THREE.BoxGeometry(24, 1.8, 0.4), wallMat);
    backTopLintel.position.set(0, 8.1, -9.8);
    this.group.add(backTopLintel);

    // Bottom window sill
    const backBottomSill = new THREE.Mesh(new THREE.BoxGeometry(24, 1.2, 0.4), wallMat);
    backBottomSill.position.set(0, 0.6, -9.8);
    this.group.add(backBottomSill);

    // Left Wall
    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.4, 9, 24), wallMat);
    leftWall.position.set(-12, 4.5, 2);
    leftWall.receiveShadow = true;
    this.group.add(leftWall);

    // Right Wall
    const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.4, 9, 24), wallMat);
    rightWall.position.set(12, 4.5, 2);
    rightWall.receiveShadow = true;
    this.group.add(rightWall);

    // Ceiling
    const ceilingMat = new THREE.MeshStandardMaterial({
      color: 0x06070c,
      roughness: 0.9,
    });
    const ceiling = new THREE.Mesh(new THREE.BoxGeometry(26, 0.4, 24), ceilingMat);
    ceiling.position.set(0, 9, 2);
    this.group.add(ceiling);
  }

  createWindowAndSkyline() {
    const skylineGroup = new THREE.Group();
    skylineGroup.position.set(0, 0, -14);

    const buildingMat = new THREE.MeshBasicMaterial({ color: 0x040508 });
    const windowColors = [0x00f0ff, 0xff007f, 0xffd000, 0x9d4edd, 0xffffff];

    // Merge all 45 buildings into 1 draw call
    const buildingGeos = [];
    for (let i = 0; i < 45; i++) {
      const width = 0.8 + Math.random() * 1.6;
      const height = 4 + Math.random() * 9;
      const depth = 0.8 + Math.random() * 1.6;
      const x = -18 + i * 0.8 + (Math.random() - 0.5) * 0.5;
      const z = (Math.random() - 0.5) * 4;

      const g = new THREE.BoxGeometry(width, height, depth);
      g.applyMatrix4(new THREE.Matrix4().makeTranslation(x, height / 2 - 1, z));
      buildingGeos.push(g);

      // Glowing beacon points on rooftops (still individual — they animate)
      const beaconGeo = new THREE.SphereGeometry(0.06, 6, 6);
      const beaconCol = windowColors[Math.floor(Math.random() * windowColors.length)];
      const beaconMat = new THREE.MeshBasicMaterial({ color: beaconCol });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.set(x, height - 0.9, z);
      skylineGroup.add(beacon);
      this.cityBuildings.push(beacon);
    }
    const mergedBuildings = mergeGeometries(buildingGeos);
    buildingGeos.forEach(g => g.dispose());
    skylineGroup.add(new THREE.Mesh(mergedBuildings, buildingMat));

    // Window Glass Frame — merge 4 mullions into 1 draw call
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x1a1b26,
      metalness: 0.9,
      roughness: 0.2
    });
    const mullionGeos = [-4.5, -1.5, 1.5, 4.5].map(x => {
      const g = new THREE.BoxGeometry(0.14, 7, 0.2);
      g.applyMatrix4(new THREE.Matrix4().makeTranslation(x, 4.7, -9.8));
      return g;
    });
    const hGeo = new THREE.BoxGeometry(12, 0.14, 0.2);
    hGeo.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 5.0, -9.8));
    mullionGeos.push(hGeo);
    const mergedMullions = mergeGeometries(mullionGeos);
    mullionGeos.forEach(g => g.dispose());
    this.group.add(new THREE.Mesh(mergedMullions, frameMat));


    // Glass pane
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x112233,
      transparent: true,
      opacity: 0.25,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.6,
      ior: 1.5,
    });
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(12, 7), glassMat);
    glass.position.set(0, 4.7, -9.75);
    this.group.add(glass);

    this.group.add(skylineGroup);
  }

  createAcousticPanels() {
    const foamMat = new THREE.MeshStandardMaterial({
      color: 0x181824,
      roughness: 0.95,
      metalness: 0.05
    });

    const createPanelGrid = (wallX, rotY) => {
      const panelGroup = new THREE.Group();
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 6; col++) {
          const panel = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.12), foamMat);
          panel.position.set((col - 2.5) * 1.2, 3.0 + row * 1.2, 0);
          panel.rotation.z = (row + col) % 2 === 0 ? 0 : Math.PI / 4;
          panelGroup.add(panel);
        }
      }
      panelGroup.position.set(wallX, 0, 1);
      panelGroup.rotation.y = rotY;
      this.group.add(panelGroup);
    };

    createPanelGrid(-11.75, Math.PI / 2);
    createPanelGrid(11.75, -Math.PI / 2);
  }

  createNeonSigns() {
    // "JMF RADIO - ON AIR" glowing sign above the window
    const signBacking = new THREE.Mesh(
      new THREE.BoxGeometry(5.2, 1.4, 0.1),
      new THREE.MeshStandardMaterial({ color: 0x050508, roughness: 0.5 })
    );
    signBacking.position.set(0, 8.0, -9.5);
    this.group.add(signBacking);

    // Neon tubes border
    const borderMat = new THREE.MeshBasicMaterial({ color: 0xff0044 });
    const borderTop = new THREE.Mesh(new THREE.BoxGeometry(5.0, 0.05, 0.04), borderMat);
    borderTop.position.set(0, 8.6, -9.42);
    const borderBottom = new THREE.Mesh(new THREE.BoxGeometry(5.0, 0.05, 0.04), borderMat);
    borderBottom.position.set(0, 7.4, -9.42);
    this.group.add(borderTop, borderBottom);

    // Glowing JMF RADIO canvas texture
    const signCanvas = document.createElement('canvas');
    signCanvas.width = 1024;
    signCanvas.height = 256;
    const ctx = signCanvas.getContext('2d');
    
    ctx.fillStyle = '#050508';
    ctx.fillRect(0, 0, 1024, 256);
    
    ctx.font = '900 80px Orbitron, sans-serif';
    ctx.fillStyle = '#00f0ff';
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 24;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('JMF RADIO', 512, 90);
    
    ctx.font = '800 36px Orbitron, sans-serif';
    ctx.fillStyle = '#ff0044';
    ctx.shadowColor = '#ff0044';
    ctx.shadowBlur = 18;
    ctx.fillText('● 24/7 LIVE ON AIR ●', 512, 180);

    const signTexture = new THREE.CanvasTexture(signCanvas);
    const signTextMat = new THREE.MeshBasicMaterial({ map: signTexture, transparent: true });
    const signMesh = new THREE.Mesh(new THREE.PlaneGeometry(4.8, 1.15), signTextMat);
    signMesh.position.set(0, 8.0, -9.42);
    this.group.add(signMesh);

    // Decorative wall neon equalizer arches on left wall — merged into 1 draw call
    const eqNeonMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const eqGeos = [];
    for (let i = 0; i < 9; i++) {
      const height = 0.6 + Math.sin(i * 0.7) * 0.9;
      const g = new THREE.BoxGeometry(0.08, height, 0.05);
      g.applyMatrix4(new THREE.Matrix4().makeTranslation(-11.7, 6.0, -3 + i * 0.45));
      eqGeos.push(g);
    }
    const mergedEqBars = mergeGeometries(eqGeos);
    eqGeos.forEach(g => g.dispose());
    this.group.add(new THREE.Mesh(mergedEqBars, eqNeonMat));
    this.neonElements.push(eqNeonMat);
  }

  createVIPLounge() {
    // VIP Section located on the left side (x = -7.5, z = 3.5)
    const vipGroup = new THREE.Group();
    vipGroup.position.set(-7.5, 0, 3.5);
    vipGroup.rotation.y = Math.PI / 2; // Facing towards the dance floor

    const leatherMat = new THREE.MeshStandardMaterial({
      color: 0x16121f,
      roughness: 0.5,
      metalness: 0.2
    });
    const cushionMat = new THREE.MeshStandardMaterial({
      color: 0x9d4edd,
      roughness: 0.6
    });

    // 1. Large L-shaped Modular Sectional Sofa
    // Main Long Bench
    const bench1 = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.45, 1.1), leatherMat);
    bench1.position.set(0, 0.225, 0);
    bench1.castShadow = true;
    bench1.receiveShadow = true;
    vipGroup.add(bench1);

    // Backrest
    const back1 = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.9, 0.35), leatherMat);
    back1.position.set(0, 0.8, -0.4);
    vipGroup.add(back1);

    // Side Corner Armrest
    const arm1 = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.7, 1.1), leatherMat);
    arm1.position.set(-2.0, 0.6, 0);
    vipGroup.add(arm1);

    // Colorful VIP cushions
    for (let c = 0; c < 4; c++) {
      const cushion = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.45, 0.18), cushionMat);
      cushion.position.set(-1.4 + c * 0.9, 0.55, -0.25);
      cushion.rotation.x = -Math.PI / 16;
      vipGroup.add(cushion);
    }

    // 2. Second Facing Sofa
    const bench2 = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.45, 1.1), leatherMat);
    bench2.position.set(0, 0.225, 2.4);
    bench2.castShadow = true;
    vipGroup.add(bench2);

    const back2 = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.9, 0.35), leatherMat);
    back2.position.set(0, 0.8, 2.8);
    vipGroup.add(back2);

    // 3. Sleek VIP Glass Coffee Table (between sofas)
    const tableMat = new THREE.MeshPhysicalMaterial({
      color: 0x111122,
      transparent: true,
      opacity: 0.6,
      roughness: 0.1,
      metalness: 0.3,
      transmission: 0.7
    });
    const tableTop = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.05, 1.0), tableMat);
    tableTop.position.set(0, 0.45, 1.2);
    vipGroup.add(tableTop);

    const tableBase = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 0.4, 0.8),
      new THREE.MeshStandardMaterial({ color: 0x0a0b12, roughness: 0.3, metalness: 0.8 })
    );
    tableBase.position.set(0, 0.2, 1.2);
    vipGroup.add(tableBase);

    // Glowing Neon Table Light on coffee table
    const tableLampGeo = new THREE.CylinderGeometry(0.08, 0.1, 0.2, 16);
    const tableLampMat = new THREE.MeshStandardMaterial({
      color: 0xff007f,
      emissive: 0xff007f,
      emissiveIntensity: 0.8,
      roughness: 0.1
    });
    const tableLamp = new THREE.Mesh(tableLampGeo, tableLampMat);
    tableLamp.position.set(0, 0.58, 1.2);
    vipGroup.add(tableLamp);
    this.vipLights.push(tableLampMat);

    // VIP Neon Sign on left wall
    const vipCanvas = document.createElement('canvas');
    vipCanvas.width = 512;
    vipCanvas.height = 128;
    const vctx = vipCanvas.getContext('2d');
    vctx.fillStyle = '#05060a';
    vctx.fillRect(0, 0, 512, 128);
    vctx.font = '900 48px Orbitron, sans-serif';
    vctx.fillStyle = '#ffd000';
    vctx.shadowColor = '#ffd000';
    vctx.shadowBlur = 16;
    vctx.textAlign = 'center';
    vctx.textBaseline = 'middle';
    vctx.fillText('👑 VIP LOUNGE 👑', 256, 64);

    const vipTexture = new THREE.CanvasTexture(vipCanvas);
    const vipSignMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2.4, 0.6),
      new THREE.MeshBasicMaterial({ map: vipTexture })
    );
    vipSignMesh.position.set(0, 3.2, -0.6);
    vipGroup.add(vipSignMesh);

    this.group.add(vipGroup);
  }

  createStageScreen() {
    const stageGroup = new THREE.Group();
    stageGroup.position.set(0, 0, 11.2);

    // 1. Massive LED Stage Backdrop Screen (1024x512 Canvas)
    this.stageCanvas = document.createElement('canvas');
    this.stageCanvas.width = 1024;
    this.stageCanvas.height = 512;
    this.stageCtx = this.stageCanvas.getContext('2d');

    this.stageTexture = new THREE.CanvasTexture(this.stageCanvas);
    this.stageTexture.minFilter = THREE.LinearFilter;
    this.stageTexture.magFilter = THREE.LinearFilter;

    const screenGeo = new THREE.PlaneGeometry(10.5, 5.2);
    const screenMat = new THREE.MeshBasicMaterial({
      map: this.stageTexture,
      side: THREE.FrontSide
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 4.4, -0.1);
    screenMesh.rotation.y = Math.PI; // Face towards DJ booth and dance floor
    stageGroup.add(screenMesh);

    // 2. Heavy Stage Screen Frame / Bezel
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x07080f,
      metalness: 0.9,
      roughness: 0.2
    });
    const frameTop = new THREE.Mesh(new THREE.BoxGeometry(11.0, 0.2, 0.3), frameMat);
    frameTop.position.set(0, 7.1, 0);
    const frameBottom = new THREE.Mesh(new THREE.BoxGeometry(11.0, 0.3, 0.3), frameMat);
    frameBottom.position.set(0, 1.7, 0);
    const frameLeft = new THREE.Mesh(new THREE.BoxGeometry(0.3, 5.6, 0.3), frameMat);
    frameLeft.position.set(-5.35, 4.4, 0);
    const frameRight = new THREE.Mesh(new THREE.BoxGeometry(0.3, 5.6, 0.3), frameMat);
    frameRight.position.set(5.35, 4.4, 0);
    stageGroup.add(frameTop, frameBottom, frameLeft, frameRight);

    // 3. Neon Outline Trim
    const trimMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const trim = new THREE.Mesh(new THREE.BoxGeometry(10.7, 0.04, 0.04), trimMat);
    trim.position.set(0, 7.0, -0.15);
    stageGroup.add(trim);

    // 4. Elevated Club Stage Platform at base
    const stageRiser = new THREE.Mesh(
      new THREE.BoxGeometry(12.0, 0.5, 2.5),
      new THREE.MeshStandardMaterial({ color: 0x0d0e18, metalness: 0.7, roughness: 0.3 })
    );
    stageRiser.position.set(0, 0.25, -1.0);
    stageGroup.add(stageRiser);

    // 5. Left & Right Neon Wall Banners ("VIP LOUNGE" & "COCKTAIL BAR")
    const createNeonBanner = (text, xPos, colorHex) => {
      const bannerCanvas = document.createElement('canvas');
      bannerCanvas.width = 512;
      bannerCanvas.height = 128;
      const bCtx = bannerCanvas.getContext('2d');
      bCtx.fillStyle = '#05060d';
      bCtx.fillRect(0, 0, 512, 128);
      bCtx.font = '900 44px Orbitron, sans-serif';
      bCtx.fillStyle = colorHex;
      bCtx.shadowColor = colorHex;
      bCtx.shadowBlur = 18;
      bCtx.textAlign = 'center';
      bCtx.textBaseline = 'middle';
      bCtx.fillText(text, 256, 64);

      const bannerTex = new THREE.CanvasTexture(bannerCanvas);
      const bannerMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(3.6, 0.9),
        new THREE.MeshBasicMaterial({ map: bannerTex })
      );
      bannerMesh.position.set(xPos, 6.2, 3.5);
      bannerMesh.rotation.y = xPos < 0 ? Math.PI / 2 : -Math.PI / 2;
      this.group.add(bannerMesh);
    };

    createNeonBanner('VIP LOUNGE', -11.75, '#ff007f');
    createNeonBanner('COCKTAIL BAR', 11.75, '#00f0ff');

    this.group.add(stageGroup);
    this.drawInitialStageScreen();
  }

  setTrackInfo(currentTrack, nextTrack, elapsedTime, duration) {
    this.currentTrack = currentTrack;
    this.nextTrack = nextTrack;
    this.elapsedTime = elapsedTime || 0;
    this.duration = duration || 180;
  }

  drawInitialStageScreen() {
    if (!this.stageCtx) return;
    const ctx = this.stageCtx;
    ctx.fillStyle = '#05060c';
    ctx.fillRect(0, 0, 1024, 512);

    ctx.font = '900 76px Orbitron, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 24;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('JMF RADIO', 512, 180);

    ctx.font = '700 22px "Space Grotesk", sans-serif';
    ctx.fillStyle = '#00f0ff';
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 12;
    ctx.fillText('● 24/7 PRO VIRTUAL DJ ● ON AIR ●', 512, 240);

    if (this.stageTexture) this.stageTexture.needsUpdate = true;
  }

  updateStageScreen(audioAnalysis, themeColors) {
    if (!this.stageCtx) return;
    const ctx = this.stageCtx;
    const w = 1024;
    const h = 512;
    const now = performance.now();

    // Initialize VJ state if not present
    if (this.vjMode === undefined) {
      this.vjMode = 0;
      this.lastVJSwitch = now;
      this.spectrumPeaks = new Float32Array(48);
      this.scrollTickerX = 0;
      this.radialAngle = 0;
    }

    // Auto-switch VJ mode every 18 seconds or on massive bass drops
    if (now - this.lastVJSwitch > 18000 || (audioAnalysis.bass > 0.88 && Math.random() < 0.03 && now - this.lastVJSwitch > 5000)) {
      this.vjMode = (this.vjMode + 1 + Math.floor(Math.random() * 2)) % 5;
      this.lastVJSwitch = now;
    }

    this.stagePhase += 0.04 + (audioAnalysis.bass || 0) * 0.06;
    this.radialAngle += 0.02 + (audioAnalysis.treble || 0) * 0.04;

    const accentHex = (themeColors && themeColors.primary) ? `#${themeColors.primary.toString(16).padStart(6, '0')}` : '#00f0ff';
    const subHex = (themeColors && themeColors.accent) ? `#${themeColors.accent.toString(16).padStart(6, '0')}` : '#ff007f';

    // 1. Clear with motion trail
    ctx.fillStyle = 'rgba(4, 5, 10, 0.38)';
    ctx.fillRect(0, 0, w, h);

    // ==========================================
    // 🎨 VJ VISUALIZER MODES (Background / Midground)
    // ==========================================
    const raw = audioAnalysis.rawArray || [];
    const len = raw.length || 64;

    if (this.vjMode === 0) {
      // --- MODE 0: 🌊 Multi-Layer Cyber Sine Waves ---
      const waves = [
        { color: accentHex, blur: 16, amp: 65 * (0.4 + audioAnalysis.bass * 1.3), speed: 1.0, width: 3.5, yOff: 380 },
        { color: subHex, blur: 14, amp: 50 * (0.3 + audioAnalysis.mids * 1.0), speed: 1.4, width: 2.5, yOff: 380 },
        { color: '#a855f7', blur: 12, amp: 35 * (0.3 + audioAnalysis.treble * 1.0), speed: 1.8, width: 2.0, yOff: 380 }
      ];

      waves.forEach(wave => {
        ctx.strokeStyle = wave.color;
        ctx.shadowColor = wave.color;
        ctx.shadowBlur = wave.blur;
        ctx.lineWidth = wave.width;
        ctx.beginPath();
        for (let x = 0; x <= w; x += 10) {
          const i = Math.floor((x / w) * (len - 1));
          const val = (raw[i] || 0) / 255;
          const sinPart = Math.sin(x * 0.012 + this.stagePhase * wave.speed) * Math.cos(x * 0.007);
          const y = wave.yOff + sinPart * wave.amp + (val - 0.5) * wave.amp * 1.4;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
    } else if (this.vjMode === 1) {
      // --- MODE 1: 📊 48-Band Mirrored Equalizer Spectrum Bars ---
      const numBars = 44;
      const barWidth = (w - 120) / numBars - 4;
      const baseY = 420;

      for (let i = 0; i < numBars; i++) {
        const rawIdx = Math.floor((i / numBars) * (len - 1));
        const val = ((raw[rawIdx] || 0) / 255) * (0.5 + audioAnalysis.bass * 0.7);
        const barH = Math.max(6, val * 160);

        if (barH > this.spectrumPeaks[i]) {
          this.spectrumPeaks[i] = barH;
        } else {
          this.spectrumPeaks[i] = Math.max(0, this.spectrumPeaks[i] - 2.5);
        }

        const x = 60 + i * (barWidth + 4);
        const y = baseY - barH;

        // Gradient Bar
        const grad = ctx.createLinearGradient(0, y, 0, baseY);
        grad.addColorStop(0, subHex);
        grad.addColorStop(0.5, accentHex);
        grad.addColorStop(1, '#1e293b');

        ctx.fillStyle = grad;
        ctx.shadowColor = accentHex;
        ctx.shadowBlur = 8;
        ctx.fillRect(x, y, barWidth, barH);

        // Mirrored Reflection below base
        ctx.fillStyle = 'rgba(0, 240, 255, 0.15)';
        ctx.fillRect(x, baseY + 2, barWidth, barH * 0.35);

        // Floating Peak Cap
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 6;
        ctx.fillRect(x, baseY - this.spectrumPeaks[i] - 3, barWidth, 2.5);
      }
    } else if (this.vjMode === 2) {
      // --- MODE 2: 🌌 Cyber Hyperspace Grid & Neon Horizon ---
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.18)';
      ctx.lineWidth = 1.5;
      const horizonY = 320;
      const fovCenter = 512;

      // Perspective Grid Lines
      for (let x = -400; x <= w + 400; x += 100) {
        ctx.beginPath();
        ctx.moveTo(fovCenter, horizonY);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // Moving Horizontal Distance Lines
      const gridSpeed = (this.stagePhase * 40) % 35;
      for (let d = 0; d < 180; d += 25) {
        const y = horizonY + Math.pow((d + gridSpeed) / 180, 2) * (h - horizonY);
        if (y <= h) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }
      }

      // Glowing Sun / Halo at horizon
      ctx.save();
      const sunRad = 55 + (audioAnalysis.bass || 0) * 30;
      ctx.shadowColor = subHex;
      ctx.shadowBlur = 30;
      ctx.strokeStyle = subHex;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(512, horizonY, sunRad, Math.PI, 0);
      ctx.stroke();
      ctx.restore();
    } else if (this.vjMode === 3) {
      // --- MODE 3: 🌀 Radial Audio Orbit & Geometric Star ---
      const cx = 512;
      const cy = 370;
      const baseRad = 70 + (audioAnalysis.bass || 0) * 35;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(this.radialAngle);

      // Radial Spectrum Spikes
      const spokes = 36;
      for (let i = 0; i < spokes; i++) {
        const ang = (i / spokes) * Math.PI * 2;
        const rIdx = Math.floor((i / spokes) * (len - 1));
        const mag = ((raw[rIdx] || 0) / 255) * 60 * (0.6 + audioAnalysis.mids);

        const x1 = Math.cos(ang) * baseRad;
        const y1 = Math.sin(ang) * baseRad;
        const x2 = Math.cos(ang) * (baseRad + mag);
        const y2 = Math.sin(ang) * (baseRad + mag);

        ctx.strokeStyle = i % 2 === 0 ? accentHex : subHex;
        ctx.shadowColor = ctx.strokeStyle;
        ctx.shadowBlur = 10;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Inner Rotating Hexagon
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 - this.radialAngle * 2;
        const hx = Math.cos(a) * (baseRad * 0.55);
        const hy = Math.sin(a) * (baseRad * 0.55);
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    } else if (this.vjMode === 4) {
      // --- MODE 4: ⚡ Lissajous Oscilloscope Matrix ---
      ctx.save();
      ctx.translate(512, 380);
      ctx.strokeStyle = accentHex;
      ctx.shadowColor = accentHex;
      ctx.shadowBlur = 18;
      ctx.lineWidth = 3;
      ctx.beginPath();

      const aParam = 3;
      const bParam = 2;
      const delta = this.stagePhase * 1.5;
      const scaleX = 220 * (0.6 + audioAnalysis.bass * 0.6);
      const scaleY = 70 * (0.6 + audioAnalysis.mids * 0.6);

      for (let t = 0; t <= Math.PI * 2; t += 0.05) {
        const lx = Math.sin(aParam * t + delta) * scaleX;
        const ly = Math.sin(bParam * t) * scaleY;
        if (t === 0) ctx.moveTo(lx, ly);
        else ctx.lineTo(lx, ly);
      }
      ctx.stroke();
      ctx.restore();
    }

    // ==========================================
    // 🎧 TOP STATUS BAR (Live Status, Genre & Time)
    // ==========================================
    // Subtle Top Bar Background Strip
    ctx.fillStyle = 'rgba(10, 14, 24, 0.75)';
    ctx.fillRect(0, 0, w, 52);
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, 52);
    ctx.lineTo(w, 52);
    ctx.stroke();

    // 1. Pulsing "● ON AIR" Indicator
    const livePulse = Math.sin(now * 0.005) > 0;
    ctx.fillStyle = livePulse ? '#ff0055' : '#880022';
    ctx.shadowColor = '#ff0055';
    ctx.shadowBlur = livePulse ? 14 : 4;
    ctx.beginPath();
    ctx.arc(36, 26, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.font = '900 15px Orbitron, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 6;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText('ON AIR  |  JMF RADIO 24/7', 52, 26);

    // 2. Genre / Style Pill Badge
    const genre = this.currentTrack?.genre;
    const genreText = genre ? `${genre.icon} ${genre.name}` : '🔥 ALL STYLES';
    const genreColor = genre?.color || '#00f0ff';

    ctx.font = '900 13px Orbitron, sans-serif';
    const gWidth = ctx.measureText(genreText).width + 24;
    const gX = 512 - gWidth / 2;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.strokeStyle = genreColor;
    ctx.lineWidth = 1.5;
    ctx.shadowColor = genreColor;
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.roundRect(gX, 12, gWidth, 28, 14);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText(genreText, 512, 26);

    // 3. Time Counter & BPM
    const bpm = this.currentTrack?.bpm || 128;
    const curMin = Math.floor(this.elapsedTime / 60);
    const curSec = Math.floor(this.elapsedTime % 60).toString().padStart(2, '0');
    const totMin = Math.floor(this.duration / 60);
    const totSec = Math.floor(this.duration % 60).toString().padStart(2, '0');
    const timeStr = `${curMin}:${curSec} / ${totMin}:${totSec}  •  ${bpm} BPM`;

    ctx.font = '700 14px "Space Grotesk", monospace';
    ctx.fillStyle = '#94a3b8';
    ctx.shadowBlur = 0;
    ctx.textAlign = 'right';
    ctx.fillText(timeStr, w - 36, 26);

    // Track Progress Micro Line
    const pct = this.duration > 0 ? Math.min(1.0, this.elapsedTime / this.duration) : 0;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fillRect(0, 52, w, 2.5);
    ctx.fillStyle = accentHex;
    ctx.shadowColor = accentHex;
    ctx.shadowBlur = 8;
    ctx.fillRect(0, 52, w * pct, 2.5);

    // ==========================================
    // 🎵 NOW PLAYING TRACK DISPLAY (Center of Screen)
    // ==========================================
    const track = this.currentTrack;
    const artistName = (track?.artist || 'JMF RADIO').toUpperCase();
    const trackTitle = (track?.title || 'THE FUTURE OF SOUND').toUpperCase();

    // Bass-reactive scaling on text
    const bassScale = 1.0 + (audioAnalysis.bass || 0) * 0.08;

    // 1. ARTIST NAME (Large, Powerful)
    ctx.save();
    ctx.translate(512, 135);
    ctx.scale(bassScale, bassScale);
    ctx.font = '900 52px Orbitron, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = (audioAnalysis.bass || 0) > 0.65 ? subHex : accentHex;
    ctx.shadowBlur = 20 + (audioAnalysis.bass || 0) * 20;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(artistName.length > 28 ? artistName.substring(0, 26) + '...' : artistName, 0, 0);
    ctx.restore();

    // 2. TRACK TITLE (Glowing with smooth ticker scroll if long)
    ctx.save();
    ctx.font = '700 26px "Space Grotesk", sans-serif';
    ctx.fillStyle = accentHex;
    ctx.shadowColor = accentHex;
    ctx.shadowBlur = 14;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const titleWidth = ctx.measureText(trackTitle).width;
    if (titleWidth > 800) {
      this.scrollTickerX = (this.scrollTickerX - 1.2) % (titleWidth + 200);
      ctx.fillText(trackTitle, 512 + this.scrollTickerX, 195);
      ctx.fillText(trackTitle, 512 + this.scrollTickerX + titleWidth + 200, 195);
    } else {
      ctx.fillText(trackTitle, 512, 195);
    }
    ctx.restore();

    // 3. Mini VJ Mode Watermark in bottom corner
    const vjModeNames = ['🌊 CYBER WAVES', '📊 SPECTRUM PEAKS', '🌌 HYPERSPACE GRID', '🌀 RADIAL ORBIT', '⚡ VECTOR SCOPE'];
    ctx.font = '700 11px Orbitron, sans-serif';
    ctx.fillStyle = 'rgba(148, 163, 184, 0.4)';
    ctx.shadowBlur = 0;
    ctx.textAlign = 'left';
    ctx.fillText(`[ VJ: ${vjModeNames[this.vjMode]} ]`, 24, h - 18);

    if (this.stageTexture) this.stageTexture.needsUpdate = true;
  }

  update(audioAnalysis, themeColors) {
    const time = performance.now() * 0.002;
    for (let i = 0; i < this.cityBuildings.length; i++) {
      const beacon = this.cityBuildings[i];
      beacon.scale.setScalar(0.8 + 0.4 * Math.sin(time * 2 + i));
    }

    if (themeColors) {
      const bass = audioAnalysis.bass;
      for (let lamp of this.vipLights) {
        lamp.emissive.setHex(themeColors.accent || 0xff007f);
        lamp.emissiveIntensity = 0.5 + bass * 1.5;
      }
    }

    this.updateStageScreen(audioAnalysis, themeColors);
  }
}
