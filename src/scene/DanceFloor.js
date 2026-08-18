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

    // Facing rotation towards DJ or dance partners
    dancerGroup.rotation.y = (Math.PI) + (Math.random() - 0.5) * 1.2;

    const clothesMat = new THREE.MeshStandardMaterial({ color: outfitColor, roughness: 0.5, metalness: 0.2 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: 0x0c0d14, roughness: 0.8 });
    const skinMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.55 });
    const glowMat = new THREE.MeshBasicMaterial({ color: outfitColor });

    // 1. Legs / Pants
    const legL = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.07, 0.85, 12), pantsMat);
    legL.position.set(-0.16, 0.42, 0);
    const legR = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.07, 0.85, 12), pantsMat);
    legR.position.set(0.16, 0.42, 0);
    dancerGroup.add(legL, legR);

    // 2. Torso Group
    const torsoGroup = new THREE.Group();
    torsoGroup.position.set(0, 0.85, 0);

    const torsoMesh = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.65, 0.28), clothesMat);
    torsoMesh.position.y = 0.32;
    torsoMesh.castShadow = true;
    torsoGroup.add(torsoMesh);

    // Glowing necklace
    const accessory = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.02, 8, 16), glowMat);
    accessory.position.set(0, 0.58, 0.05);
    accessory.rotation.x = Math.PI / 3;
    torsoGroup.add(accessory);

    // 3. Head Group
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

    // 4. Stylish Club Sunglasses / Cyber Visors on every dancer
    const dancerGlasses = new THREE.Group();
    dancerGlasses.position.set(0, 0.18, 0.15);

    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x05060a,
      roughness: 0.15,
      metalness: 0.9,
      emissive: 0x100518,
      emissiveIntensity: 0.3
    });
    const neonLensMat = new THREE.MeshStandardMaterial({
      color: outfitColor,
      emissive: outfitColor,
      emissiveIntensity: 0.85,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.9
    });
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x11121a, roughness: 0.3, metalness: 0.9 });

    const glassesStyle = seed % 4;

    if (glassesStyle === 0) {
      // Cyberpunk Narrow Blade Shades (Matrix style)
      const bladeL = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.045, 0.02), darkMat);
      bladeL.position.x = -0.055;
      const bladeR = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.045, 0.02), darkMat);
      bladeR.position.x = 0.055;
      const topBar = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.015, 0.03), frameMat);
      topBar.position.y = 0.025;
      const templeL = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.015, 0.16), frameMat);
      templeL.position.set(-0.13, 0.015, -0.07);
      const templeR = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.015, 0.16), frameMat);
      templeR.position.set(0.13, 0.015, -0.07);
      dancerGlasses.add(bladeL, bladeR, topBar, templeL, templeR);
    } else if (glassesStyle === 1) {
      // Full Cyberpunk Glowing Visor Shield (Rave Visor)
      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.27, 0.075, 0.025), neonLensMat);
      const visorFrame = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.018, 0.035), frameMat);
      visorFrame.position.y = 0.04;
      const templeL = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.015, 0.16), frameMat);
      templeL.position.set(-0.14, 0.02, -0.07);
      const templeR = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.015, 0.16), frameMat);
      templeR.position.set(0.14, 0.02, -0.07);
      dancerGlasses.add(visor, visorFrame, templeL, templeR);
    } else if (glassesStyle === 2) {
      // Classic Dark Club Sunglasses (Wayfarer style)
      const lensL = new THREE.Mesh(new THREE.BoxGeometry(0.085, 0.065, 0.02), darkMat);
      lensL.position.x = -0.055;
      const lensR = new THREE.Mesh(new THREE.BoxGeometry(0.085, 0.065, 0.02), darkMat);
      lensR.position.x = 0.055;
      const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.23, 0.02, 0.03), frameMat);
      bridge.position.y = 0.035;
      const templeL = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.015, 0.16), frameMat);
      templeL.position.set(-0.125, 0.02, -0.07);
      const templeR = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.015, 0.16), frameMat);
      templeR.position.set(0.125, 0.02, -0.07);
      dancerGlasses.add(lensL, lensR, bridge, templeL, templeR);
    } else {
      // Futuristic Sport Wrap-around Sunglasses (90s Rave)
      const wrapLens = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.055, 16, 1, true, 0, Math.PI), neonLensMat);
      wrapLens.rotation.x = Math.PI / 2;
      wrapLens.rotation.z = Math.PI / 2;
      wrapLens.scale.set(0.9, 1.1, 0.5);
      const browBar = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.018, 0.03), frameMat);
      browBar.position.y = 0.03;
      dancerGlasses.add(wrapLens, browBar);
    }

    headGroup.add(dancerGlasses);
    torsoGroup.add(headGroup);

    // 5. Anatomical Articulated Left Arm (Shoulder -> Bicep -> Elbow -> Forearm -> Glowing Wristband -> Hand)
    const armL = new THREE.Group();
    armL.position.set(-0.28, 0.58, 0);

    const shoulderCapL = new THREE.Mesh(new THREE.SphereGeometry(0.075, 12, 12), clothesMat);
    armL.add(shoulderCapL);

    const bicepGeo = new THREE.CylinderGeometry(0.065, 0.055, 0.28, 12);
    bicepGeo.translate(0, -0.14, 0);
    const bicepL = new THREE.Mesh(bicepGeo, clothesMat);
    armL.add(bicepL);

    const elbowL = new THREE.Group();
    elbowL.position.set(0, -0.28, 0);

    const elbowJointL = new THREE.Mesh(new THREE.SphereGeometry(0.055, 12, 12), skinMat);
    elbowL.add(elbowJointL);

    const forearmGeo = new THREE.CylinderGeometry(0.052, 0.042, 0.26, 12);
    forearmGeo.translate(0, -0.13, 0);
    const forearmL = new THREE.Mesh(forearmGeo, skinMat);
    elbowL.add(forearmL);

    // Glowing rave wristband
    const wristbandGeo = new THREE.TorusGeometry(0.05, 0.015, 8, 16);
    const wristbandL = new THREE.Mesh(wristbandGeo, glowMat);
    wristbandL.position.set(0, -0.24, 0);
    wristbandL.rotation.x = Math.PI / 2;
    elbowL.add(wristbandL);

    // Stylized Rave Hand with fingers
    const handGroupL = new THREE.Group();
    handGroupL.position.set(0, -0.27, 0);
    const palmL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.09, 0.035), skinMat);
    palmL.position.set(0, -0.04, 0);
    const thumbL = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.04, 0.025), skinMat);
    thumbL.position.set(0.045, -0.02, 0.01);
    handGroupL.add(palmL, thumbL);
    elbowL.add(handGroupL);

    armL.add(elbowL);
    torsoGroup.add(armL);

    // 6. Anatomical Articulated Right Arm
    const armR = new THREE.Group();
    armR.position.set(0.28, 0.58, 0);

    const shoulderCapR = new THREE.Mesh(new THREE.SphereGeometry(0.075, 12, 12), clothesMat);
    armR.add(shoulderCapR);

    const bicepGeoR = new THREE.CylinderGeometry(0.065, 0.055, 0.28, 12);
    bicepGeoR.translate(0, -0.14, 0);
    const bicepR = new THREE.Mesh(bicepGeoR, clothesMat);
    armR.add(bicepR);

    const elbowR = new THREE.Group();
    elbowR.position.set(0, -0.28, 0);

    const elbowJointR = new THREE.Mesh(new THREE.SphereGeometry(0.055, 12, 12), skinMat);
    elbowR.add(elbowJointR);

    const forearmGeoR = new THREE.CylinderGeometry(0.052, 0.042, 0.26, 12);
    forearmGeoR.translate(0, -0.13, 0);
    const forearmR = new THREE.Mesh(forearmGeoR, skinMat);
    elbowR.add(forearmR);

    // Glowing rave wristband
    const wristbandR = new THREE.Mesh(wristbandGeo, glowMat);
    wristbandR.position.set(0, -0.24, 0);
    wristbandR.rotation.x = Math.PI / 2;
    elbowR.add(wristbandR);

    // Stylized Rave Hand
    const handGroupR = new THREE.Group();
    handGroupR.position.set(0, -0.27, 0);
    const palmR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.09, 0.035), skinMat);
    palmR.position.set(0, -0.04, 0);
    const thumbR = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.04, 0.025), skinMat);
    thumbR.position.set(-0.045, -0.02, 0.01);
    handGroupR.add(palmR, thumbR);
    elbowR.add(handGroupR);

    armR.add(elbowR);
    torsoGroup.add(armR);

    dancerGroup.add(torsoGroup);

    return {
      group: dancerGroup,
      torso: torsoGroup,
      head: headGroup,
      armL,
      elbowL,
      armR,
      elbowR,
      style,
      speed,
      seed,
      baseY: 0
    };
  }

  update(audioAnalysis, isPlaying, themeColors) {
    const time = performance.now() * 0.001;
    const bass = audioAnalysis ? audioAnalysis.bass : 0;
    const beat = audioAnalysis ? audioAnalysis.beat : 0;
    const rawFreq = (audioAnalysis && audioAnalysis.rawArray) ? audioAnalysis.rawArray : [];

    // 1. Animate LED Floor Tiles
    for (let i = 0; i < this.tiles.length; i++) {
      const tile = this.tiles[i];
      const freqVal = rawFreq[(tile.row * 5 + tile.col) % rawFreq.length] || 0;
      const wave = Math.sin(time * 3 + tile.row * 0.8 + tile.col * 0.8);
      
      const intensity = isPlaying
        ? Math.min(2.5, 0.2 + bass * 1.8 + freqVal * 1.5 + wave * 0.4)
        : 0.15 + 0.1 * wave;

      tile.mesh.material.emissiveIntensity = intensity;

      if (themeColors) {
        if ((tile.row + tile.col) % 2 === 0) {
          tile.mesh.material.emissive.setHex(themeColors.primary);
        } else {
          tile.mesh.material.emissive.setHex(themeColors.secondary);
        }
      }
    }

    // 2. Animate Dancers with Fluid Anatomical Limb Kinematics
    for (let d of this.dancers) {
      const spd = (isPlaying ? 4.5 : 1.2) * d.speed;
      const phase = time * spd + d.seed;
      const bounceIntensity = isPlaying ? (0.08 + bass * 0.16 + beat * 0.2) : 0.02;

      // Bounce up and down
      d.group.position.y = Math.abs(Math.sin(phase)) * bounceIntensity;

      // Head bobbing & groove
      d.head.rotation.x = Math.sin(phase * 2) * (0.15 + bass * 0.2);
      d.head.rotation.y = Math.cos(phase * 0.8) * 0.2;

      // Torso groove sway
      d.torso.rotation.z = Math.sin(phase) * (0.08 + bass * 0.12);
      d.torso.rotation.y = Math.cos(phase * 0.5) * 0.15;

      // Style-specific natural 2-joint arm kinematics
      switch (d.style) {
        case 0: // Hands in the air / Rave jump & fist pump
          d.armL.rotation.x = -Math.PI / 1.35 + Math.sin(phase * 2) * 0.35;
          d.armR.rotation.x = -Math.PI / 1.35 + Math.cos(phase * 2) * 0.35;
          d.armL.rotation.z = -0.35 + Math.sin(phase) * 0.2;
          d.armR.rotation.z = 0.35 - Math.sin(phase) * 0.2;
          d.elbowL.rotation.x = 0.6 + Math.sin(phase * 2) * 0.3;
          d.elbowR.rotation.x = 0.6 + Math.cos(phase * 2) * 0.3;
          break;

        case 1: // Hip-hop / Techno rhythm bounce
          d.armL.rotation.x = 0.2 + Math.sin(phase) * 0.6;
          d.armR.rotation.x = 0.2 - Math.sin(phase) * 0.6;
          d.armL.rotation.y = 0.3 + Math.cos(phase) * 0.2;
          d.armR.rotation.y = -0.3 - Math.cos(phase) * 0.2;
          d.elbowL.rotation.x = 1.1 + Math.cos(phase * 2) * 0.25;
          d.elbowR.rotation.x = 1.1 + Math.sin(phase * 2) * 0.25;
          break;

        case 2: // Side-to-side wave & point towards DJ booth
          d.armL.rotation.z = -0.7 + Math.sin(phase) * 0.35;
          d.armR.rotation.x = -Math.PI / 2.2 + Math.sin(phase * 2) * 0.3;
          d.armR.rotation.y = -0.3;
          d.elbowL.rotation.x = 0.4 + Math.sin(phase) * 0.3;
          d.elbowR.rotation.x = 0.5 + Math.cos(phase * 2) * 0.2;
          d.group.rotation.y += Math.sin(phase * 0.5) * 0.004;
          break;

        case 3: // Upbeat shuffle / electronic groove
          d.armL.rotation.x = -0.35 + Math.cos(phase * 2) * 0.45;
          d.armR.rotation.x = -0.35 + Math.sin(phase * 2) * 0.45;
          d.armL.rotation.z = -0.25;
          d.armR.rotation.z = 0.25;
          d.elbowL.rotation.x = 0.9 + Math.sin(phase * 2) * 0.3;
          d.elbowR.rotation.x = 0.9 + Math.cos(phase * 2) * 0.3;
          d.group.position.x += Math.sin(phase * 0.5) * 0.002;
          break;
      }
    }
  }
}
