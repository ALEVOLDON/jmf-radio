import * as THREE from 'three';

export class Room {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.neonElements = [];
    this.cityBuildings = [];
    this.vipLights = [];
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

    for (let i = 0; i < 45; i++) {
      const width = 0.8 + Math.random() * 1.6;
      const height = 4 + Math.random() * 9;
      const depth = 0.8 + Math.random() * 1.6;
      const x = -18 + i * 0.8 + (Math.random() - 0.5) * 0.5;
      const z = (Math.random() - 0.5) * 4;

      const building = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), buildingMat);
      building.position.set(x, height / 2 - 1, z);
      skylineGroup.add(building);

      // Glowing beacon points on rooftops
      const beaconGeo = new THREE.SphereGeometry(0.06, 8, 8);
      const beaconCol = windowColors[Math.floor(Math.random() * windowColors.length)];
      const beaconMat = new THREE.MeshBasicMaterial({ color: beaconCol });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.set(x, height - 0.9, z);
      skylineGroup.add(beacon);
      this.cityBuildings.push(beacon);
    }

    // Window Glass Frame
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x1a1b26,
      metalness: 0.9,
      roughness: 0.2
    });
    
    for (let x of [-4.5, -1.5, 1.5, 4.5]) {
      const mullion = new THREE.Mesh(new THREE.BoxGeometry(0.14, 7, 0.2), frameMat);
      mullion.position.set(x, 4.7, -9.8);
      this.group.add(mullion);
    }
    const hMullion = new THREE.Mesh(new THREE.BoxGeometry(12, 0.14, 0.2), frameMat);
    hMullion.position.set(0, 5.0, -9.8);
    this.group.add(hMullion);

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

    // Decorative wall neon equalizer arches on left wall
    const eqNeonMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    for (let i = 0; i < 9; i++) {
      const height = 0.6 + Math.sin(i * 0.7) * 0.9;
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.08, height, 0.05), eqNeonMat);
      bar.position.set(-11.7, 6.0, -3 + i * 0.45);
      this.group.add(bar);
      this.neonElements.push(eqNeonMat);
    }
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
  }
}
