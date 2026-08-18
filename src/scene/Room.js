import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export class Room {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.neonElements = [];
    this.cityBuildings = [];
    this.vipLights = [];
    this.wallWashNeonMats = [];
    this.columnLedMats = [];
    this.billboardNeonMats = [];
    this.skywayTrails = [];
    this.artLightboxMats = [];
    this.stageCanvas = null;
    this.stageTexture = null;
    this.stageCtx = null;
    this.stagePhase = 0;

    // Generative Wall Panels
    this.leftWallCanvas = null;
    this.leftWallCtx = null;
    this.leftWallTex = null;
    this.rightWallCanvas = null;
    this.rightWallCtx = null;
    this.rightWallTex = null;
    this.wallParticles = [];
    this.wallGenMode = 0;
    this.lastWallGenSwitch = 0;

    // Overhead Kinetic Ceiling LED Light Tubes (Mega-club array)
    this.ceilingTubes = [];
    this.ceilingTubeMats = [];

    this.init();
    this.scene.add(this.group);
  }

  init() {
    this.createFloor();
    this.createWalls();
    this.createGenerativeWallPanels();
    this.createCeilingTrusses();
    this.createCeilingLightTubes();
    this.createWindowAndSkyline();
    this.createAcousticPanels();
    this.createNeonSigns();
    this.createClubArtAndPosters();
    this.createVIPLounge();
    this.createStageScreen();
  }

  createFloor() {
    // 1. Polished reflective nightclub floor (26m x 24m) with cyber metallic finish
    const floorGeo = new THREE.PlaneGeometry(26, 24);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x16182c,
      roughness: 0.16,
      metalness: 0.85,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.group.add(floor);

    // 2. Architectural Floor Line Insets (Separating Stage, Dancefloor, and Lounge)
    const lineMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.65 });
    this.wallWashNeonMats.push(lineMat);

    // Stage border line
    const stageLine = new THREE.Mesh(new THREE.PlaneGeometry(16, 0.06), lineMat);
    stageLine.rotation.x = -Math.PI / 2;
    stageLine.position.set(0, 0.006, -1.2);
    this.group.add(stageLine);

    // Central circular glow ring around the DJ & dancefloor
    const ringGeo = new THREE.RingGeometry(4.2, 4.28, 64);
    const ringMesh = new THREE.Mesh(ringGeo, lineMat);
    ringMesh.rotation.x = -Math.PI / 2;
    ringMesh.position.set(0, 0.006, 3.5);
    this.group.add(ringMesh);

    // Outer dancefloor runway neon lines
    const leftRunway = new THREE.Mesh(new THREE.PlaneGeometry(0.06, 14), lineMat);
    leftRunway.rotation.x = -Math.PI / 2;
    leftRunway.position.set(-5.8, 0.006, 4.0);
    const rightRunway = new THREE.Mesh(new THREE.PlaneGeometry(0.06, 14), lineMat);
    rightRunway.rotation.x = -Math.PI / 2;
    rightRunway.position.set(5.8, 0.006, 4.0);
    this.group.add(leftRunway, rightRunway);

    // Cross-grid neon lines across the dancefloor perimeter
    for (let gz = -0.5; gz <= 8.5; gz += 1.8) {
      const gridLine = new THREE.Mesh(new THREE.PlaneGeometry(11.6, 0.02), lineMat);
      gridLine.rotation.x = -Math.PI / 2;
      gridLine.position.set(0, 0.005, gz);
      this.group.add(gridLine);
    }
  }

  createWalls() {
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x20243c,
      roughness: 0.65,
      metalness: 0.35,
    });

    // 1. Back Wall (behind DJ, with big window opening)
    const backLeftPillar = new THREE.Mesh(new THREE.BoxGeometry(7, 9, 0.4), wallMat);
    backLeftPillar.position.set(-8.5, 4.5, -9.8);
    backLeftPillar.receiveShadow = true;
    this.group.add(backLeftPillar);

    const backRightPillar = new THREE.Mesh(new THREE.BoxGeometry(7, 9, 0.4), wallMat);
    backRightPillar.position.set(8.5, 4.5, -9.8);
    backRightPillar.receiveShadow = true;
    this.group.add(backRightPillar);

    // Glowing vertical LED light battens on the window pillars
    const windowLedMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.85 });
    this.wallWashNeonMats.push(windowLedMat);

    const leftWindowLed = new THREE.Mesh(new THREE.BoxGeometry(0.06, 8.2, 0.06), windowLedMat);
    leftWindowLed.position.set(-5.0, 4.5, -9.6);
    const rightWindowLed = new THREE.Mesh(new THREE.BoxGeometry(0.06, 8.2, 0.06), windowLedMat);
    rightWindowLed.position.set(5.0, 4.5, -9.6);
    this.group.add(leftWindowLed, rightWindowLed);

    // Top window lintel
    const backTopLintel = new THREE.Mesh(new THREE.BoxGeometry(24, 1.8, 0.4), wallMat);
    backTopLintel.position.set(0, 8.1, -9.8);
    this.group.add(backTopLintel);

    // Bottom window sill
    const backBottomSill = new THREE.Mesh(new THREE.BoxGeometry(24, 1.2, 0.4), wallMat);
    backBottomSill.position.set(0, 0.6, -9.8);
    this.group.add(backBottomSill);

    // 2. Left Wall & Right Wall
    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.4, 9, 24), wallMat);
    leftWall.position.set(-12, 4.5, 2);
    leftWall.receiveShadow = true;
    this.group.add(leftWall);

    const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.4, 9, 24), wallMat);
    rightWall.position.set(12, 4.5, 2);
    rightWall.receiveShadow = true;
    this.group.add(rightWall);

    // 3. Ceiling with concrete beams
    const ceilingMat = new THREE.MeshStandardMaterial({
      color: 0x181c2e,
      roughness: 0.8,
      metalness: 0.25
    });
    const ceiling = new THREE.Mesh(new THREE.BoxGeometry(26, 0.4, 24), ceilingMat);
    ceiling.position.set(0, 9, 2);
    this.group.add(ceiling);

    // 4. Heavy Architectural Structural Columns (2 on Left, 2 on Right)
    const columnPositions = [
      { x: -11.7, z: -1.5 },
      { x: -11.7, z: 6.5 },
      { x: 11.7, z: -1.5 },
      { x: 11.7, z: 6.5 }
    ];

    const columnMat = new THREE.MeshStandardMaterial({
      color: 0x262b44,
      roughness: 0.55,
      metalness: 0.45
    });

    const columnLedMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    this.columnLedMats.push(columnLedMat);

    columnPositions.forEach(pos => {
      // Main concrete pillar (1.2m wide, 9m tall, 0.8m deep)
      const colMesh = new THREE.Mesh(new THREE.BoxGeometry(0.8, 9, 1.2), columnMat);
      colMesh.position.set(pos.x, 4.5, pos.z);
      colMesh.castShadow = true;
      colMesh.receiveShadow = true;
      this.group.add(colMesh);

      // Recessed vertical RGB LED light slot running up the column
      const slotX = pos.x < 0 ? pos.x + 0.38 : pos.x - 0.38;
      const ledSlot = new THREE.Mesh(new THREE.BoxGeometry(0.04, 8.8, 0.08), columnLedMat);
      ledSlot.position.set(slotX, 4.5, pos.z);
      this.group.add(ledSlot);
    });

    // 5. Continuous Floor and Ceiling LED Cove Washers (Скрытая подсветка стен)
    const coveLedMat = new THREE.MeshBasicMaterial({ color: 0xff007f, transparent: true, opacity: 0.85 });
    this.wallWashNeonMats.push(coveLedMat);

    // Bottom baseboard cove strips
    const baseLeft = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 23.6), coveLedMat);
    baseLeft.position.set(-11.75, 0.04, 2);
    const baseRight = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 23.6), coveLedMat);
    baseRight.position.set(11.75, 0.04, 2);
    const baseBack = new THREE.Mesh(new THREE.BoxGeometry(23.6, 0.06, 0.06), coveLedMat);
    baseBack.position.set(0, 0.04, -9.75);
    this.group.add(baseLeft, baseRight, baseBack);

    // Ceiling cornice cove strips
    const topLeft = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 23.6), coveLedMat);
    topLeft.position.set(-11.75, 8.75, 2);
    const topRight = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 23.6), coveLedMat);
    topRight.position.set(11.75, 8.75, 2);
    const topBack = new THREE.Mesh(new THREE.BoxGeometry(23.6, 0.06, 0.06), coveLedMat);
    topBack.position.set(0, 8.75, -9.75);
    this.group.add(topLeft, topRight, topBack);
  }

  createCeilingTrusses() {
    // Stage Lighting Aluminum Triangular Truss System (Y = 8.25)
    const trussMat = new THREE.MeshStandardMaterial({
      color: 0x242738,
      metalness: 0.95,
      roughness: 0.2
    });

    const trussGeos = [];

    // Helper to build a triangular truss segment
    const addTrussBeam = (x1, y, z1, x2, z2) => {
      const length = Math.hypot(x2 - x1, z2 - z1);
      const angle = Math.atan2(x2 - x1, z2 - z1);

      // 3 main tubular rails
      const r = 0.03;
      const railGeo = new THREE.CylinderGeometry(r, r, length, 8);

      // Top rail
      const g1 = railGeo.clone();
      g1.rotateX(Math.PI / 2);
      g1.rotateY(angle);
      g1.translate((x1 + x2) / 2, y + 0.18, (z1 + z2) / 2);
      trussGeos.push(g1);

      // Bottom left rail
      const g2 = railGeo.clone();
      g2.rotateX(Math.PI / 2);
      g2.rotateY(angle);
      g2.translate((x1 + x2) / 2 - 0.15 * Math.cos(angle), y - 0.12, (z1 + z2) / 2 + 0.15 * Math.sin(angle));
      trussGeos.push(g2);

      // Bottom right rail
      const g3 = railGeo.clone();
      g3.rotateX(Math.PI / 2);
      g3.rotateY(angle);
      g3.translate((x1 + x2) / 2 + 0.15 * Math.cos(angle), y - 0.12, (z1 + z2) / 2 - 0.15 * Math.sin(angle));
      trussGeos.push(g3);

      railGeo.dispose();
    };

    // 2 Longitudinal Main Trusses (along Z)
    addTrussBeam(-5.5, 8.25, -9.2, -5.5, 11.0);
    addTrussBeam(5.5, 8.25, -9.2, 5.5, 11.0);

    // 3 Cross-Stage Trusses (along X)
    addTrussBeam(-11.5, 8.25, -2.0, 11.5, -2.0); // Stage front
    addTrussBeam(-11.5, 8.25, 4.5, 11.5, 4.5);   // Dancefloor center
    addTrussBeam(-11.5, 8.25, 9.8, 11.5, 9.8);   // Rear stage

    const mergedTrusses = mergeGeometries(trussGeos);
    trussGeos.forEach(g => g.dispose());
    const trussMesh = new THREE.Mesh(mergedTrusses, trussMat);
    trussMesh.castShadow = true;
    this.group.add(trussMesh);

    // Add Suspended PAR Stage Cans with Glowing Lens rings
    const parMat = new THREE.MeshStandardMaterial({ color: 0x11121a, metalness: 0.9, roughness: 0.3 });
    const lensMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    this.wallWashNeonMats.push(lensMat);

    const parPositions = [
      { x: -4.0, z: -2.0, rotX: Math.PI / 4, rotY: Math.PI / 6 },
      { x: 4.0, z: -2.0, rotX: Math.PI / 4, rotY: -Math.PI / 6 },
      { x: -3.0, z: 4.5, rotX: Math.PI / 6, rotY: Math.PI / 4 },
      { x: 3.0, z: 4.5, rotX: Math.PI / 6, rotY: -Math.PI / 4 },
      { x: 0.0, z: 4.5, rotX: 0, rotY: 0 }
    ];

    parPositions.forEach(p => {
      const parGroup = new THREE.Group();
      parGroup.position.set(p.x, 8.0, p.z);
      parGroup.rotation.set(p.rotX, p.rotY, 0);

      // Clamp & Body
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 0.45, 16), parMat);
      body.rotation.x = Math.PI / 2;
      parGroup.add(body);

      // Lens
      const lens = new THREE.Mesh(new THREE.CircleGeometry(0.13, 16), lensMat);
      lens.position.z = 0.23;
      parGroup.add(lens);

      this.group.add(parGroup);
    });
  }

  createWindowAndSkyline() {
    const skylineGroup = new THREE.Group();
    skylineGroup.position.set(0, 0, -14);

    // 1. Deep Cyberpunk Night Horizon Gradient Backdrop
    const skyCanvas = document.createElement('canvas');
    skyCanvas.width = 1024;
    skyCanvas.height = 512;
    const sctx = skyCanvas.getContext('2d');

    const skyGrad = sctx.createLinearGradient(0, 0, 0, 512);
    skyGrad.addColorStop(0.0, '#03040a');
    skyGrad.addColorStop(0.4, '#0e081e');
    skyGrad.addColorStop(0.75, '#1e0836');
    skyGrad.addColorStop(0.92, '#ff0055');
    skyGrad.addColorStop(1.0, '#ffaa00');
    sctx.fillStyle = skyGrad;
    sctx.fillRect(0, 0, 1024, 512);

    // Add distant neon atmospheric glow & haze
    sctx.fillStyle = 'rgba(0, 240, 255, 0.12)';
    sctx.beginPath();
    sctx.arc(512, 450, 280, 0, Math.PI * 2);
    sctx.fill();

    const skyTex = new THREE.CanvasTexture(skyCanvas);
    const skyBackdrop = new THREE.Mesh(
      new THREE.PlaneGeometry(54, 26),
      new THREE.MeshBasicMaterial({ map: skyTex })
    );
    skyBackdrop.position.set(0, 7.5, -4.5);
    skylineGroup.add(skyBackdrop);

    // 2. Procedural Glowing Cyberpunk Skyscraper Window Texture
    const winCanvas = document.createElement('canvas');
    winCanvas.width = 512;
    winCanvas.height = 512;
    const wctx = winCanvas.getContext('2d');
    wctx.fillStyle = '#06070d';
    wctx.fillRect(0, 0, 512, 512);

    const winPalette = ['#00f0ff', '#ff007f', '#ffd700', '#00ff88', '#ffffff', '#ff6600'];
    for (let wy = 12; wy < 500; wy += 20) {
      for (let wx = 12; wx < 500; wx += 16) {
        if (Math.random() < 0.42) {
          wctx.fillStyle = winPalette[Math.floor(Math.random() * winPalette.length)];
          wctx.shadowColor = wctx.fillStyle;
          wctx.shadowBlur = 6;
          wctx.fillRect(wx, wy, 8, 12);
        }
      }
    }
    const winTexture = new THREE.CanvasTexture(winCanvas);
    winTexture.wrapS = THREE.RepeatWrapping;
    winTexture.wrapT = THREE.RepeatWrapping;
    winTexture.repeat.set(1.5, 3.0);

    const buildingMat = new THREE.MeshStandardMaterial({
      color: 0x11131f,
      map: winTexture,
      roughness: 0.3,
      metalness: 0.7,
      emissive: 0x11131f,
      emissiveIntensity: 0.6
    });

    const windowColors = [0x00f0ff, 0xff007f, 0xffd000, 0x00ff88, 0xffffff];

    // 60 Skyscraper Towers with Varied Architecture
    const buildingGeos = [];
    for (let i = 0; i < 55; i++) {
      const width = 0.9 + Math.random() * 1.8;
      const height = 4.5 + Math.random() * 9.5;
      const depth = 0.9 + Math.random() * 1.8;
      const x = -22 + i * 0.8 + (Math.random() - 0.5) * 0.4;
      const z = (Math.random() - 0.5) * 4.0;

      const g = new THREE.BoxGeometry(width, height, depth);
      g.applyMatrix4(new THREE.Matrix4().makeTranslation(x, height / 2 - 1, z));
      buildingGeos.push(g);

      // Blinking rooftop aviation red beacons
      const beaconGeo = new THREE.SphereGeometry(0.08, 8, 8);
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

    // 3. Glowing Holographic Rooftop Billboards Outside
    const createSkylineBillboard = (text, x, y, z, colorHex) => {
      const bCanvas = document.createElement('canvas');
      bCanvas.width = 512;
      bCanvas.height = 128;
      const bctx = bCanvas.getContext('2d');
      bctx.fillStyle = '#060812';
      bctx.fillRect(0, 0, 512, 128);
      bctx.font = '900 48px Orbitron, sans-serif';
      bctx.fillStyle = colorHex;
      bctx.shadowColor = colorHex;
      bctx.shadowBlur = 20;
      bctx.textAlign = 'center';
      bctx.textBaseline = 'middle';
      bctx.fillText(text, 256, 64);

      const bTex = new THREE.CanvasTexture(bCanvas);
      const bMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(3.6, 0.9),
        new THREE.MeshBasicMaterial({ map: bTex, transparent: true, opacity: 0.9 })
      );
      bMesh.position.set(x, y, z);
      skylineGroup.add(bMesh);
    };

    createSkylineBillboard('⚡ JMF 24/7 ⚡', -6.0, 9.5, -2.0, '#00f0ff');
    createSkylineBillboard('● CYBER RADIO ●', 5.5, 10.2, -1.5, '#ff007f');
    createSkylineBillboard('NEO TOKYO', 0.0, 11.5, -3.0, '#00ff88');

    // 4. Moving Aerial Vehicle Traffic / Light Trails outside
    const trailMat1 = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.8 });
    const trailMat2 = new THREE.MeshBasicMaterial({ color: 0xff0055, transparent: true, opacity: 0.8 });

    for (let t = 0; t < 6; t++) {
      const tMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 3.2, 8), t % 2 === 0 ? trailMat1 : trailMat2);
      tMesh.rotation.z = Math.PI / 2;
      const initialY = 3.5 + t * 1.1;
      const initialX = -18 + t * 6;
      tMesh.position.set(initialX, initialY, -1.0 + (t % 3) * 0.8);
      skylineGroup.add(tMesh);
      this.skywayTrails.push({ mesh: tMesh, speed: 0.08 + (t % 3) * 0.04, dir: t % 2 === 0 ? 1 : -1 });
    }

    // 5. Heavy Club Window Frame & Glass
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

  createClubArtAndPosters() {
    // 4 Framed Backlit Rave Art Lightboxes (2 on left wall, 2 on right wall)
    const createLightbox = (title, sub, x, y, z, rotY, color1, color2) => {
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 512;
      pCanvas.height = 768;
      const pctx = pCanvas.getContext('2d');

      // Dark metallic poster background
      const grad = pctx.createLinearGradient(0, 0, 512, 768);
      grad.addColorStop(0, '#06070e');
      grad.addColorStop(1, '#12081f');
      pctx.fillStyle = grad;
      pctx.fillRect(0, 0, 512, 768);

      // Cyber geometric graphics
      pctx.strokeStyle = color1;
      pctx.lineWidth = 4;
      pctx.shadowColor = color1;
      pctx.shadowBlur = 15;
      pctx.beginPath();
      pctx.arc(256, 340, 160, 0, Math.PI * 2);
      pctx.stroke();

      pctx.strokeStyle = color2;
      pctx.lineWidth = 2;
      pctx.beginPath();
      for (let i = 0; i < 12; i++) {
        pctx.moveTo(96, 440 + i * 16);
        pctx.lineTo(416, 440 + i * 16);
      }
      pctx.stroke();

      // Poster Typography
      pctx.font = '900 36px Orbitron, sans-serif';
      pctx.fillStyle = '#ffffff';
      pctx.textAlign = 'center';
      pctx.fillText(title, 256, 120);

      pctx.font = '700 20px "Space Grotesk", sans-serif';
      pctx.fillStyle = color1;
      pctx.fillText(sub, 256, 170);

      pctx.font = '800 16px Orbitron, sans-serif';
      pctx.fillStyle = color2;
      pctx.fillText('JMF 24/7 SOUND SYSTEM', 256, 710);

      const pTex = new THREE.CanvasTexture(pCanvas);
      const pMat = new THREE.MeshStandardMaterial({
        map: pTex,
        emissive: 0x111122,
        emissiveIntensity: 0.6,
        roughness: 0.2,
        metalness: 0.8
      });
      this.artLightboxMats.push(pMat);

      // Poster Mesh
      const poster = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 3.0), pMat);
      poster.position.set(x, y, z);
      poster.rotation.y = rotY;
      this.group.add(poster);

      // Outer illuminated neon frame
      const frameMat = new THREE.MeshBasicMaterial({ color: color1 });
      this.wallWashNeonMats.push(frameMat);

      const frameBox = new THREE.Mesh(new THREE.BoxGeometry(2.08, 3.08, 0.06), new THREE.MeshStandardMaterial({ color: 0x06070c }));
      frameBox.position.set(x + (rotY > 0 ? -0.04 : 0.04), y, z);
      frameBox.rotation.y = rotY;
      this.group.add(frameBox);
    };

    // Left Wall Posters
    createLightbox('UNDERGROUND', 'LIVE ELECTRONIC SETS', -11.72, 4.8, -4.5, Math.PI / 2, '#00f0ff', '#ff007f');
    createLightbox('ACID MATRIX', 'ANALOG MODULAR SYNTH', -11.72, 4.8, 1.2, Math.PI / 2, '#00ff88', '#ffd700');

    // Right Wall Posters
    createLightbox('CYBER SESSIONS', 'TOKYO NIGHTS & BASS', 11.72, 4.8, -4.5, -Math.PI / 2, '#ff007f', '#00f0ff');
    createLightbox('DEEP SUB', 'PRO HARDWARE BROADCAST', 11.72, 4.8, 1.2, -Math.PI / 2, '#9d4edd', '#00f0ff');
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

    // Decorative wall neon equalizer arches on left wall
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
    const bench1 = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.45, 1.1), leatherMat);
    bench1.position.set(0, 0.225, 0);
    bench1.castShadow = true;
    bench1.receiveShadow = true;
    vipGroup.add(bench1);

    const back1 = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.9, 0.35), leatherMat);
    back1.position.set(0, 0.8, -0.4);
    vipGroup.add(back1);

    const arm1 = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.7, 1.1), leatherMat);
    arm1.position.set(-2.0, 0.6, 0);
    vipGroup.add(arm1);

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
    vctx.fillText('VIP LOUNGE', 256, 64);

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

    // 5. Left & Right Neon Wall Banners
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

    if (this.vjMode === undefined) {
      this.vjMode = 0;
      this.lastVJSwitch = now;
      this.spectrumPeaks = new Float32Array(48);
      this.scrollTickerX = 0;
      this.radialAngle = 0;
    }

    if (now - this.lastVJSwitch > 18000 || (audioAnalysis.bass > 0.88 && Math.random() < 0.03 && now - this.lastVJSwitch > 5000)) {
      this.vjMode = (this.vjMode + 1) % 5;
      this.lastVJSwitch = now;
    }

    const primaryHex = themeColors ? '#' + themeColors.primary.toString(16).padStart(6, '0') : '#00f0ff';
    const subHex = themeColors ? '#' + themeColors.secondary.toString(16).padStart(6, '0') : '#ff007f';
    const accentHex = themeColors ? '#' + themeColors.accent.toString(16).padStart(6, '0') : '#9d4edd';

    // Dark motion blur trails
    ctx.fillStyle = 'rgba(5, 6, 14, 0.28)';
    ctx.fillRect(0, 0, w, h);

    const bass = audioAnalysis.bass || 0;
    const beat = audioAnalysis.beat || 0;
    const treble = audioAnalysis.treble || 0;
    const raw = audioAnalysis.rawArray || [];
    const time = now * 0.002;

    // VJ BACKGROUNDS
    if (this.vjMode === 0) {
      // 1. Cyber Waves
      ctx.lineWidth = 3 + bass * 4;
      for (let wave = 0; wave < 4; wave++) {
        ctx.beginPath();
        ctx.strokeStyle = wave % 2 === 0 ? primaryHex : subHex;
        ctx.shadowColor = ctx.strokeStyle;
        ctx.shadowBlur = 14 + bass * 16;
        for (let x = 0; x < w; x += 16) {
          const freqVal = raw[(x / w * 32) | 0] || 0;
          const y = h / 2 + Math.sin(x * 0.015 + time * 2 + wave) * (40 + bass * 70) + (freqVal / 255) * 50;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    } else if (this.vjMode === 1) {
      // 2. High-Density EQ Spectrum Bars
      const numBars = 40;
      const barW = (w - 120) / numBars;
      for (let i = 0; i < numBars; i++) {
        const rawVal = raw[i % raw.length] || 0;
        const targetH = (rawVal / 255) * 260 * (1.0 + bass * 0.5);
        this.spectrumPeaks[i] = Math.max(targetH, (this.spectrumPeaks[i] || 0) * 0.92);

        const bx = 60 + i * barW;
        const by = h - 60 - this.spectrumPeaks[i];

        const barGrad = ctx.createLinearGradient(0, by, 0, h - 60);
        barGrad.addColorStop(0, subHex);
        barGrad.addColorStop(0.5, primaryHex);
        barGrad.addColorStop(1, 'rgba(0, 240, 255, 0.1)');

        ctx.fillStyle = barGrad;
        ctx.shadowColor = primaryHex;
        ctx.shadowBlur = 10;
        ctx.fillRect(bx + 2, by, barW - 4, this.spectrumPeaks[i]);
      }
    } else if (this.vjMode === 2) {
      // 3. Hyperspace Cyber Grid
      ctx.strokeStyle = primaryHex;
      ctx.shadowColor = primaryHex;
      ctx.shadowBlur = 12;
      ctx.lineWidth = 1.5;
      const horizonY = h * 0.45;

      for (let x = -w; x < w * 2; x += 64) {
        ctx.beginPath();
        ctx.moveTo(w / 2, horizonY);
        ctx.lineTo(x + Math.sin(time) * 40, h);
        ctx.stroke();
      }
      for (let y = horizonY; y < h; y += 24 + bass * 12) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
    } else if (this.vjMode === 3) {
      // 4. Radial Pulse Rings
      this.radialAngle += 0.02 + bass * 0.04;
      const cx = w / 2;
      const cy = h / 2;
      for (let r = 0; r < 5; r++) {
        const radius = (r * 50 + (time * 80) % 250) * (1.0 + bass * 0.3);
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = r % 2 === 0 ? primaryHex : subHex;
        ctx.shadowColor = ctx.strokeStyle;
        ctx.shadowBlur = 16;
        ctx.lineWidth = 2 + beat * 4;
        ctx.stroke();
      }
    } else {
      // 5. Lissajous Vector Scope
      ctx.lineWidth = 3;
      ctx.strokeStyle = accentHex;
      ctx.shadowColor = accentHex;
      ctx.shadowBlur = 20;
      ctx.beginPath();
      for (let t = 0; t < Math.PI * 2; t += 0.05) {
        const x = w / 2 + Math.sin(t * 3 + time * 3) * (180 + bass * 60);
        const y = h / 2 + Math.cos(t * 2 + time * 2) * (120 + treble * 50);
        if (t === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    }

    // TOP STATUS BAR (Live Status, Genre & Time)
    ctx.fillStyle = 'rgba(5, 6, 12, 0.75)';
    ctx.fillRect(0, 0, w, 52);

    ctx.fillStyle = '#ff0055';
    ctx.shadowColor = '#ff0055';
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(32, 26, 7 + beat * 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.font = '800 14px Orbitron, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.shadowBlur = 0;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText('ON AIR  |  JMF RADIO 24/7', 52, 26);

    const genre = this.currentTrack?.genre;
    const genreText = genre ? (genre.name || 'ALL STYLES').replace(/^[\p{Emoji}\p{Extended_Pictographic}\uFE0F\s]+/u, '').trim() : 'ALL STYLES';
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

    const bpm = this.currentTrack?.bpm || 128;
    const curMin = Math.floor(this.elapsedTime / 60);
    const curSec = Math.floor(this.elapsedTime % 60).toString().padStart(2, '0');
    const totMin = Math.floor(this.duration / 60);
    const totSec = Math.floor(this.duration % 60).toString().padStart(2, '0');

    ctx.font = '700 13px Orbitron, sans-serif';
    ctx.fillStyle = '#00f0ff';
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 8;
    ctx.textAlign = 'right';
    ctx.fillText(`BPM: ${bpm}  |  ${curMin}:${curSec} / ${totMin}:${totSec}`, w - 24, 26);

    // CENTER METADATA (Artist & Track Title)
    const artistName = this.currentTrack?.artist ? this.currentTrack.artist.toUpperCase() : 'JMF RESIDENT DJ';
    const trackTitle = this.currentTrack?.title ? this.currentTrack.title.toUpperCase() : 'LIVE AUDIO BROADCAST';

    ctx.save();
    ctx.translate(512, 135);
    const scale = 1.0 + (audioAnalysis.bass || 0) * 0.08;
    ctx.scale(scale, scale);

    ctx.font = '900 42px Orbitron, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = (audioAnalysis.bass || 0) > 0.65 ? subHex : accentHex;
    ctx.shadowBlur = 20 + (audioAnalysis.bass || 0) * 20;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(artistName.length > 28 ? artistName.substring(0, 26) + '...' : artistName, 0, 0);
    ctx.restore();

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

    const vjModeNames = ['CYBER WAVES', 'SPECTRUM PEAKS', 'HYPERSPACE GRID', 'RADIAL ORBIT', 'VECTOR SCOPE'];
    ctx.font = '700 11px Orbitron, sans-serif';
    ctx.fillStyle = 'rgba(148, 163, 184, 0.4)';
    ctx.shadowBlur = 0;
    ctx.textAlign = 'left';
    ctx.fillText(`[ VJ: ${vjModeNames[this.vjMode]} ]`, 24, h - 18);

    if (this.stageTexture) this.stageTexture.needsUpdate = true;
  }

  update(audioAnalysis, themeColors) {
    const time = performance.now() * 0.002;
    const bass = audioAnalysis ? audioAnalysis.bass : 0;
    const beat = audioAnalysis ? audioAnalysis.beat : 0;

    // 1. Animate rooftop beacons
    for (let i = 0; i < this.cityBuildings.length; i++) {
      const beacon = this.cityBuildings[i];
      beacon.scale.setScalar(0.8 + 0.4 * Math.sin(time * 2 + i));
    }

    // 2. Animate skyway aerial vehicle traffic outside window
    for (let trail of this.skywayTrails) {
      trail.mesh.position.x += trail.speed * trail.dir;
      if (trail.dir > 0 && trail.mesh.position.x > 22) {
        trail.mesh.position.x = -22;
      } else if (trail.dir < 0 && trail.mesh.position.x < -22) {
        trail.mesh.position.x = 22;
      }
    }

    // 3. Theme & Audio Reactivity for Wall Cove Washers & Structural Columns
    if (themeColors) {
      for (let lamp of this.vipLights) {
        lamp.emissive.setHex(themeColors.accent || 0xff007f);
        lamp.emissiveIntensity = 0.5 + bass * 1.5;
      }

      for (let mat of this.columnLedMats) {
        mat.color.setHex(themeColors.primary || 0x00f0ff);
      }

      for (let mat of this.wallWashNeonMats) {
        mat.opacity = 0.45 + bass * 0.45 + beat * 0.2;
        if (mat.color && themeColors.primary) {
          mat.color.setHex(themeColors.primary);
        }
      }

      for (let mat of this.artLightboxMats) {
        mat.emissiveIntensity = 0.4 + bass * 0.6 + beat * 0.4;
      }
    }

    // 4. Animate Kinetic Overhead Ceiling LED Light Tubes (Mega-club wave)
    if (this.ceilingTubes.length > 0) {
      const primaryHex = themeColors ? themeColors.primary : 0x00f0ff;
      const secHex = themeColors ? themeColors.secondary : 0xff007f;
      const accentHex = themeColors ? themeColors.accent : 0x9d4edd;

      for (let i = 0; i < this.ceilingTubes.length; i++) {
        const tube = this.ceilingTubes[i];
        const wave = Math.sin(time * 3.5 + tube.gridX * 0.6 + tube.gridZ * 0.6);
        const waveY = Math.cos(time * 2.0 + tube.gridX * 0.4) * 0.15;
        tube.mesh.position.y = tube.baseY + waveY + (bass * 0.2);

        const intensity = 0.45 + wave * 0.35 + bass * 0.4 + beat * 0.3;
        tube.mat.opacity = Math.min(1.0, intensity);

        if (wave > 0.4) {
          tube.mat.color.setHex(primaryHex);
        } else if (wave < -0.4) {
          tube.mat.color.setHex(secHex);
        } else {
          tube.mat.color.setHex(accentHex);
        }
      }
    }

    this.updateGenerativeWallPanels(audioAnalysis, themeColors);
    this.updateStageScreen(audioAnalysis, themeColors);
  }

  createCeilingLightTubes() {
    // Array of 36 suspended kinetic LED tubes arranged across the club ceiling
    const tubeGeo = new THREE.CylinderGeometry(0.025, 0.025, 1.8, 12);
    const cableGeo = new THREE.CylinderGeometry(0.004, 0.004, 1.2, 6);
    const cableMat = new THREE.MeshStandardMaterial({ color: 0x11121a, metalness: 0.9, roughness: 0.3 });

    const rows = 6;
    const cols = 6;
    const startX = -5.0;
    const endX = 5.0;
    const startZ = -3.5;
    const endZ = 7.5;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = startX + (c / (cols - 1)) * (endX - startX);
        const z = startZ + (r / (rows - 1)) * (endZ - startZ);
        const baseY = 6.8 + ((r + c) % 2) * 0.35;

        const tubeGroup = new THREE.Group();
        tubeGroup.position.set(x, baseY, z);

        // Suspension cable from ceiling down to tube
        const cable = new THREE.Mesh(cableGeo, cableMat);
        cable.position.y = 1.5;
        tubeGroup.add(cable);

        // Glowing LED Pixel Tube
        const tubeMat = new THREE.MeshBasicMaterial({
          color: (r + c) % 2 === 0 ? 0x00f0ff : 0xff007f,
          transparent: true,
          opacity: 0.8
        });
        this.ceilingTubeMats.push(tubeMat);

        const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
        tubeGroup.add(tubeMesh);

        // Chrome end caps
        const capMat = new THREE.MeshStandardMaterial({ color: 0x333646, metalness: 0.95, roughness: 0.2 });
        const topCap = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.04, 12), capMat);
        topCap.position.y = 0.9;
        const btmCap = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.04, 12), capMat);
        btmCap.position.y = -0.9;
        tubeGroup.add(topCap, btmCap);

        this.group.add(tubeGroup);
        this.ceilingTubes.push({
          mesh: tubeGroup,
          mat: tubeMat,
          baseY: baseY,
          gridX: c,
          gridZ: r
        });
      }
    }
  }

  createGenerativeWallPanels() {
    // 1. Left Wall Generative LED Screen (1024x512 Canvas)
    this.leftWallCanvas = document.createElement('canvas');
    this.leftWallCanvas.width = 1024;
    this.leftWallCanvas.height = 512;
    this.leftWallCtx = this.leftWallCanvas.getContext('2d');
    this.leftWallTex = new THREE.CanvasTexture(this.leftWallCanvas);
    this.leftWallTex.minFilter = THREE.LinearFilter;
    this.leftWallTex.magFilter = THREE.LinearFilter;

    const screenGeo = new THREE.PlaneGeometry(5.8, 3.2);
    const leftScreenMat = new THREE.MeshBasicMaterial({ map: this.leftWallTex });
    const leftScreen = new THREE.Mesh(screenGeo, leftScreenMat);
    leftScreen.position.set(-11.72, 5.0, 2.0);
    leftScreen.rotation.y = Math.PI / 2;
    this.group.add(leftScreen);

    // Frame & Backlight for Left Screen
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x0a0b12, metalness: 0.9, roughness: 0.2 });
    const leftFrame = new THREE.Mesh(new THREE.BoxGeometry(0.08, 3.32, 5.92), frameMat);
    leftFrame.position.set(-11.76, 5.0, 2.0);
    this.group.add(leftFrame);

    // 2. Right Wall Generative LED Screen (1024x512 Canvas)
    this.rightWallCanvas = document.createElement('canvas');
    this.rightWallCanvas.width = 1024;
    this.rightWallCanvas.height = 512;
    this.rightWallCtx = this.rightWallCanvas.getContext('2d');
    this.rightWallTex = new THREE.CanvasTexture(this.rightWallCanvas);
    this.rightWallTex.minFilter = THREE.LinearFilter;
    this.rightWallTex.magFilter = THREE.LinearFilter;

    const rightScreenMat = new THREE.MeshBasicMaterial({ map: this.rightWallTex });
    const rightScreen = new THREE.Mesh(screenGeo, rightScreenMat);
    rightScreen.position.set(11.72, 5.0, 2.0);
    rightScreen.rotation.y = -Math.PI / 2;
    this.group.add(rightScreen);

    // Frame & Backlight for Right Screen
    const rightFrame = new THREE.Mesh(new THREE.BoxGeometry(0.08, 3.32, 5.92), frameMat);
    rightFrame.position.set(11.76, 5.0, 2.0);
    this.group.add(rightFrame);

    // Initialize Wall Flow Particles
    this.wallParticles = [];
    for (let i = 0; i < 70; i++) {
      this.wallParticles.push({
        x: Math.random() * 1024,
        y: Math.random() * 512,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        rad: 1.5 + Math.random() * 3.5,
        colorIdx: i % 4
      });
    }
    this.wallGenMode = 0;
    this.lastWallGenSwitch = performance.now();
  }

  updateGenerativeWallPanels(audioAnalysis, themeColors) {
    if (!this.leftWallCtx || !this.rightWallCtx) return;
    const now = performance.now();
    const time = now * 0.002;
    const bass = audioAnalysis ? audioAnalysis.bass : 0;
    const beat = audioAnalysis ? audioAnalysis.beat : 0;
    const treble = audioAnalysis ? audioAnalysis.treble : 0;
    const raw = (audioAnalysis && audioAnalysis.rawArray) ? audioAnalysis.rawArray : [];

    // Switch generative modes every 15 seconds or on intense drops
    if (now - this.lastWallGenSwitch > 15000 || (bass > 0.9 && Math.random() < 0.02 && now - this.lastWallGenSwitch > 6000)) {
      this.wallGenMode = (this.wallGenMode + 1) % 4;
      this.lastWallGenSwitch = now;
    }

    const primaryHex = themeColors ? '#' + themeColors.primary.toString(16).padStart(6, '0') : '#00f0ff';
    const subHex = themeColors ? '#' + themeColors.secondary.toString(16).padStart(6, '0') : '#ff007f';
    const accentHex = themeColors ? '#' + themeColors.accent.toString(16).padStart(6, '0') : '#9d4edd';
    const colorPalette = [primaryHex, subHex, accentHex, '#ffffff'];

    const ctxL = this.leftWallCtx;
    const ctxR = this.rightWallCtx;
    const w = 1024;
    const h = 512;

    // Dark motion blur trails
    ctxL.fillStyle = 'rgba(6, 7, 14, 0.25)';
    ctxL.fillRect(0, 0, w, h);
    ctxR.fillStyle = 'rgba(6, 7, 14, 0.25)';
    ctxR.fillRect(0, 0, w, h);

    if (this.wallGenMode === 0) {
      // Mode 0: Cyber Voronoi Flow Field & Bioluminescent Particles
      for (let p of this.wallParticles) {
        const angle = Math.sin(p.x * 0.006 + time) * Math.cos(p.y * 0.006 + time) * Math.PI * 2;
        const speed = 2.0 + bass * 6.0 + beat * 4.0;
        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed;
        p.x = (p.x + p.vx + w) % w;
        p.y = (p.y + p.vy + h) % h;

        const col = colorPalette[p.colorIdx % colorPalette.length];
        
        ctxL.fillStyle = col;
        ctxL.shadowColor = col;
        ctxL.shadowBlur = 12;
        ctxL.beginPath();
        ctxL.arc(p.x, p.y, p.rad * (1.0 + bass * 0.8), 0, Math.PI * 2);
        ctxL.fill();

        ctxR.fillStyle = col;
        ctxR.shadowColor = col;
        ctxR.shadowBlur = 12;
        ctxR.beginPath();
        ctxR.arc(w - p.x, p.y, p.rad * (1.0 + treble * 0.8), 0, Math.PI * 2);
        ctxR.fill();
      }

      ctxL.strokeStyle = 'rgba(0, 240, 255, 0.15)';
      ctxL.beginPath();
      for (let i = 0; i < this.wallParticles.length - 1; i += 2) {
        ctxL.moveTo(this.wallParticles[i].x, this.wallParticles[i].y);
        ctxL.lineTo(this.wallParticles[i + 1].x, this.wallParticles[i + 1].y);
      }
      ctxL.stroke();

    } else if (this.wallGenMode === 1) {
      // Mode 1: Hyperspace Concentric Polyhedra & Tunnel Warp
      const cx = w / 2;
      const cy = h / 2;

      for (let ring = 1; ring <= 8; ring++) {
        const rad = (ring * 48 + (time * 120) % 350) * (1.0 + bass * 0.25);
        const col = ring % 2 === 0 ? primaryHex : subHex;
        
        ctxL.strokeStyle = col;
        ctxL.shadowColor = col;
        ctxL.shadowBlur = 14;
        ctxL.lineWidth = 2 + (ring % 2 === 0 ? beat * 4 : 1);

        ctxL.save();
        ctxL.translate(cx, cy);
        ctxL.rotate(time * 0.8 + ring * 0.4);
        ctxL.strokeRect(-rad / 2, -rad / 2, rad, rad);
        ctxL.restore();

        ctxR.strokeStyle = col;
        ctxR.shadowColor = col;
        ctxR.shadowBlur = 14;
        ctxR.lineWidth = 2 + (ring % 2 === 0 ? treble * 4 : 1);

        ctxR.save();
        ctxR.translate(cx, cy);
        ctxR.rotate(-time * 0.8 - ring * 0.4);
        ctxR.beginPath();
        for (let side = 0; side < 6; side++) {
          const a = (side / 6) * Math.PI * 2;
          const hx = Math.cos(a) * rad;
          const hy = Math.sin(a) * rad;
          if (side === 0) ctxR.moveTo(hx, hy);
          else ctxR.lineTo(hx, hy);
        }
        ctxR.closePath();
        ctxR.stroke();
        ctxR.restore();
      }

    } else if (this.wallGenMode === 2) {
      // Mode 2: Matrix Digital Code Stream & Audio Spectrum Pillars
      ctxL.font = '700 16px monospace';
      ctxR.font = '700 16px monospace';
      const cols = 32;
      const colWidth = w / cols;

      for (let c = 0; c < cols; c++) {
        const freq = raw[c % raw.length] || 0;
        const charY = (Math.sin(time * 3 + c * 0.5) * 200 + 256 + (time * 80) % 512) % 512;
        const charCode = String.fromCharCode(0x30A0 + ((c + (time * 10) | 0) % 96));
        
        const col = (freq > 140) ? '#ffffff' : ((c % 2 === 0) ? primaryHex : subHex);
        ctxL.fillStyle = col;
        ctxL.shadowColor = col;
        ctxL.shadowBlur = freq > 160 ? 16 : 6;
        ctxL.fillText(charCode, c * colWidth + 8, charY);

        ctxR.fillStyle = col;
        ctxR.shadowColor = col;
        ctxR.shadowBlur = freq > 160 ? 16 : 6;
        ctxR.fillText(charCode, w - (c * colWidth + 8), charY);
      }

      ctxL.strokeStyle = accentHex;
      ctxL.lineWidth = 3;
      ctxL.beginPath();
      for (let x = 0; x < w; x += 16) {
        const v = (raw[(x / w * 32) | 0] || 0) / 255;
        const y = h - 60 - v * 140 * (1.0 + bass * 0.5);
        if (x === 0) ctxL.moveTo(x, y);
        else ctxL.lineTo(x, y);
      }
      ctxL.stroke();

    } else {
      // Mode 3: Retro 3D Synthwave Horizon & Neon Sun
      const cx = w / 2;
      const horizonY = h * 0.55;

      const sunRad = 110 * (1.0 + bass * 0.15);
      const sunGrad = ctxL.createLinearGradient(0, horizonY - sunRad, 0, horizonY + sunRad);
      sunGrad.addColorStop(0, '#ffd700');
      sunGrad.addColorStop(0.5, '#ff007f');
      sunGrad.addColorStop(1, '#9d4edd');
      
      ctxL.fillStyle = sunGrad;
      ctxL.shadowColor = '#ff007f';
      ctxL.shadowBlur = 24;
      ctxL.beginPath();
      ctxL.arc(cx, horizonY, sunRad, Math.PI, Math.PI * 2);
      ctxL.fill();

      ctxR.fillStyle = sunGrad;
      ctxR.shadowColor = '#ff007f';
      ctxR.shadowBlur = 24;
      ctxR.beginPath();
      ctxR.arc(cx, horizonY, sunRad, Math.PI, Math.PI * 2);
      ctxR.fill();

      ctxL.strokeStyle = primaryHex;
      ctxL.shadowColor = primaryHex;
      ctxL.shadowBlur = 10;
      ctxL.lineWidth = 1.5;

      for (let x = -w; x < w * 2; x += 48) {
        ctxL.beginPath();
        ctxL.moveTo(cx, horizonY);
        ctxL.lineTo(x + Math.sin(time) * 30, h);
        ctxL.stroke();
      }
      for (let y = horizonY; y < h; y += 18 + bass * 12) {
        ctxL.beginPath();
        ctxL.moveTo(0, y);
        ctxL.lineTo(w, y);
        ctxL.stroke();
      }

      ctxR.strokeStyle = primaryHex;
      ctxR.shadowColor = primaryHex;
      ctxR.shadowBlur = 10;
      ctxR.lineWidth = 1.5;

      for (let x = -w; x < w * 2; x += 48) {
        ctxR.beginPath();
        ctxR.moveTo(cx, horizonY);
        ctxR.lineTo(x - Math.sin(time) * 30, h);
        ctxR.stroke();
      }
      for (let y = horizonY; y < h; y += 18 + bass * 12) {
        ctxR.beginPath();
        ctxR.moveTo(0, y);
        ctxR.lineTo(w, y);
        ctxR.stroke();
      }
    }

    if (this.leftWallTex) this.leftWallTex.needsUpdate = true;
    if (this.rightWallTex) this.rightWallTex.needsUpdate = true;
  }
}
