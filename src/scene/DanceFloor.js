import * as THREE from 'three';

export class DanceFloor {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.tiles = [];
    this.dancers = [];
    
    this.init();
    this.scene.add(this.group);
  }

  init() {
    this.createLEDFloor();
    this.createDancers();
  }

  createLEDFloor() {
    // 6x6 LED Dance Floor Grid in front of the DJ booth
    const floorSize = 6;
    const tileSize = 0.95;
    const gap = 0.05;
    const startX = -(floorSize * (tileSize + gap)) / 2 + tileSize / 2;
    const startZ = 2.4; // Located in front of DJ booth

    const tileGeo = new THREE.BoxGeometry(tileSize, 0.04, tileSize);

    for (let r = 0; r < floorSize; r++) {
      for (let c = 0; c < floorSize; c++) {
        const mat = new THREE.MeshStandardMaterial({
          color: 0x11111a,
          emissive: 0x00f0ff,
          emissiveIntensity: 0.2,
          roughness: 0.2,
          metalness: 0.8
        });

        const tile = new THREE.Mesh(tileGeo, mat);
        tile.position.set(
          startX + c * (tileSize + gap),
          0.02,
          startZ + r * (tileSize + gap)
        );
        tile.receiveShadow = true;
        this.group.add(tile);
        this.tiles.push({ mesh: tile, row: r, col: c });
      }
    }

    // Outer border trim with neon glow
    const borderMat = new THREE.MeshBasicMaterial({ color: 0xff007f });
    const borderThickness = 0.06;
    const totalW = floorSize * (tileSize + gap) + 0.1;
    const totalH = floorSize * (tileSize + gap) + 0.1;

    const bTop = new THREE.Mesh(new THREE.BoxGeometry(totalW, 0.06, borderThickness), borderMat);
    bTop.position.set(0, 0.03, startZ - tileSize / 2 - gap);
    const bBottom = new THREE.Mesh(new THREE.BoxGeometry(totalW, 0.06, borderThickness), borderMat);
    bBottom.position.set(0, 0.03, startZ + totalH - tileSize / 2 - gap);
    const bLeft = new THREE.Mesh(new THREE.BoxGeometry(borderThickness, 0.06, totalH), borderMat);
    bLeft.position.set(startX - tileSize / 2, 0.03, startZ + totalH / 2 - tileSize / 2);
    const bRight = new THREE.Mesh(new THREE.BoxGeometry(borderThickness, 0.06, totalH), borderMat);
    bRight.position.set(-startX + tileSize / 2, 0.03, startZ + totalH / 2 - tileSize / 2);

    this.group.add(bTop, bBottom, bLeft, bRight);
  }

  createDancers() {
    // Spawn a crowd of 12 distinct stylish 3D characters dancing on the floor
    const crowdPositions = [
      { x: -1.8, z: 3.2, style: 0, speed: 1.0 },
      { x: -0.6, z: 3.0, style: 1, speed: 1.2 },
      { x: 0.7, z: 3.1, style: 2, speed: 0.9 },
      { x: 1.9, z: 3.3, style: 3, speed: 1.1 },
      { x: -2.2, z: 4.5, style: 1, speed: 1.15 },
      { x: -1.0, z: 4.4, style: 3, speed: 0.95 },
      { x: 0.2, z: 4.6, style: 0, speed: 1.05 },
      { x: 1.4, z: 4.3, style: 2, speed: 1.25 },
      { x: 2.3, z: 4.7, style: 1, speed: 1.0 },
      { x: -1.5, z: 5.8, style: 2, speed: 1.1 },
      { x: 0.0, z: 6.0, style: 0, speed: 0.9 },
      { x: 1.6, z: 5.9, style: 3, speed: 1.15 },
    ];

    const outfitColors = [0xff0055, 0x00f0ff, 0xffd700, 0x9d4edd, 0x00ff88, 0xff6600, 0xff00aa, 0x3a86ff];
    const skinTones = [0xdfb190, 0x8d5524, 0xc68642, 0xe0ac69, 0xf1c27d];

    crowdPositions.forEach((pos, idx) => {
      const outfitColor = outfitColors[idx % outfitColors.length];
      const skinColor = skinTones[idx % skinTones.length];
      const dancer = this.buildDancerMesh(pos.x, pos.z, outfitColor, skinColor, pos.style, pos.speed, idx);
      this.dancers.push(dancer);
      this.group.add(dancer.group);
    });
  }

  buildDancerMesh(x, z, outfitColor, skinColor, style, speed, seed) {
    const dancerGroup = new THREE.Group();
    dancerGroup.position.set(x, 0, z);

    // Random slight facing rotation towards DJ or dance partners
    dancerGroup.rotation.y = (Math.PI) + (Math.random() - 0.5) * 1.2;

    const clothesMat = new THREE.MeshStandardMaterial({ color: outfitColor, roughness: 0.5, metalness: 0.2 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: 0x0c0d14, roughness: 0.8 });
    const skinMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.6 });
    const glowMat = new THREE.MeshBasicMaterial({ color: outfitColor });

    // Legs / Pants
    const legL = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.07, 0.85, 12), pantsMat);
    legL.position.set(-0.16, 0.42, 0);
    const legR = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.07, 0.85, 12), pantsMat);
    legR.position.set(0.16, 0.42, 0);
    dancerGroup.add(legL, legR);

    // Torso Group
    const torsoGroup = new THREE.Group();
    torsoGroup.position.set(0, 0.85, 0);

    const torsoMesh = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.65, 0.28), clothesMat);
    torsoMesh.position.y = 0.32;
    torsoMesh.castShadow = true;
    torsoGroup.add(torsoMesh);

    // Glowing wristbands or necklace
    const accessory = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.02, 8, 16), glowMat);
    accessory.position.set(0, 0.58, 0.05);
    accessory.rotation.x = Math.PI / 3;
    torsoGroup.add(accessory);

    // Head Group
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.7, 0);

    const headMesh = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.32, 0.28), skinMat);
    headMesh.position.y = 0.16;
    headGroup.add(headMesh);

    // Hair / Cap
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x111118, roughness: 0.9 });
    const hair = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, 0.3), hairMat);
    hair.position.y = 0.3;
    headGroup.add(hair);

    torsoGroup.add(headGroup);

    // Left Arm
    const armL = new THREE.Group();
    armL.position.set(-0.28, 0.55, 0);
    const upperL = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.35, 12), clothesMat);
    upperL.position.set(-0.1, -0.12, 0);
    upperL.rotation.z = Math.PI / 6;
    const foreL = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.35, 12), skinMat);
    foreL.position.set(-0.22, -0.32, 0.1);
    foreL.rotation.x = Math.PI / 4;
    armL.add(upperL, foreL);
    torsoGroup.add(armL);

    // Right Arm
    const armR = new THREE.Group();
    armR.position.set(0.28, 0.55, 0);
    const upperR = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.35, 12), clothesMat);
    upperR.position.set(0.1, -0.12, 0);
    upperR.rotation.z = -Math.PI / 6;
    const foreR = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.35, 12), skinMat);
    foreR.position.set(0.22, -0.32, 0.1);
    foreR.rotation.x = Math.PI / 4;
    armR.add(upperR, foreR);
    torsoGroup.add(armR);

    dancerGroup.add(torsoGroup);

    return {
      group: dancerGroup,
      torso: torsoGroup,
      head: headGroup,
      armL,
      armR,
      style,
      speed,
      seed,
      baseY: 0
    };
  }

  update(audioAnalysis, isPlaying, themeColors) {
    const time = performance.now() * 0.001;
    const bass = audioAnalysis.bass;
    const beat = audioAnalysis.beat;
    const rawFreq = audioAnalysis.rawArray || [];

    // 1. Animate LED Floor Tiles
    for (let i = 0; i < this.tiles.length; i++) {
      const tile = this.tiles[i];
      const freqVal = rawFreq[(tile.row * 5 + tile.col) % rawFreq.length] || 0;
      const wave = Math.sin(time * 3 + tile.row * 0.8 + tile.col * 0.8);
      
      const intensity = isPlaying
        ? Math.min(2.5, 0.2 + bass * 1.8 + freqVal * 1.5 + wave * 0.4)
        : 0.15 + 0.1 * wave;

      tile.mesh.material.emissiveIntensity = intensity;

      // Cycle colors smoothly across the floor
      if (themeColors) {
        if ((tile.row + tile.col) % 2 === 0) {
          tile.mesh.material.emissive.setHex(themeColors.primary);
        } else {
          tile.mesh.material.emissive.setHex(themeColors.secondary);
        }
      }
    }

    // 2. Animate Dancers based on dance styles and audio energy
    for (let d of this.dancers) {
      const spd = (isPlaying ? 4.5 : 1.2) * d.speed;
      const phase = time * spd + d.seed;
      const bounceIntensity = isPlaying ? (0.08 + bass * 0.16 + beat * 0.2) : 0.02;

      // Bounce up and down
      d.group.position.y = Math.abs(Math.sin(phase)) * bounceIntensity;

      // Head bobbing
      d.head.rotation.x = Math.sin(phase * 2) * (0.15 + bass * 0.2);
      d.head.rotation.y = Math.cos(phase * 0.8) * 0.2;

      // Torso groove sway
      d.torso.rotation.z = Math.sin(phase) * (0.08 + bass * 0.12);
      d.torso.rotation.y = Math.cos(phase * 0.5) * 0.15;

      // Style-specific arm movements
      switch (d.style) {
        case 0: // Hands in the air jumping
          d.armL.rotation.x = -Math.PI / 1.5 + Math.sin(phase * 2) * 0.4;
          d.armR.rotation.x = -Math.PI / 1.5 + Math.cos(phase * 2) * 0.4;
          d.armL.rotation.z = -0.4 + Math.sin(phase) * 0.3;
          d.armR.rotation.z = 0.4 - Math.sin(phase) * 0.3;
          break;
        case 1: // Hip-hop rhythm groove
          d.armL.rotation.x = Math.sin(phase) * 0.6;
          d.armR.rotation.x = -Math.sin(phase) * 0.6;
          d.armL.rotation.y = Math.PI / 4 + Math.cos(phase) * 0.3;
          d.armR.rotation.y = -Math.PI / 4 - Math.cos(phase) * 0.3;
          break;
        case 2: // Side-to-side wave & point
          d.armL.rotation.z = -Math.PI / 3 + Math.sin(phase) * 0.5;
          d.armR.rotation.x = -Math.PI / 2.5 + Math.sin(phase * 2) * 0.3;
          d.group.rotation.y += Math.sin(phase * 0.5) * 0.005;
          break;
        case 3: // Upbeat shuffle bounce
          d.armL.rotation.x = -Math.PI / 3 + Math.cos(phase * 2) * 0.5;
          d.armR.rotation.x = -Math.PI / 3 + Math.sin(phase * 2) * 0.5;
          d.group.position.x += Math.sin(phase * 0.5) * 0.002;
          break;
      }
    }
  }
}
