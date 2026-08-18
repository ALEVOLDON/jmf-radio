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
    // 12 distinct stylish 3D characters dancing on the floor
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
      const dancer = this.buildFullDancer(pos.x, pos.z, outfitColor, skinColor, pos.style, pos.speed, idx);
      this.dancers.push(dancer);
      this.group.add(dancer.group);
    });
  }

  buildFullDancer(x, z, outfitColor, skinColor, style, speed, seed) {
    const dancerGroup = new THREE.Group();
    dancerGroup.position.set(x, 0, z);
    dancerGroup.rotation.y = Math.PI + (Math.random() - 0.5) * 1.1;

    // Materials
    const clothesMat = new THREE.MeshStandardMaterial({ color: outfitColor, roughness: 0.45, metalness: 0.3 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: 0x0c0d16, roughness: 0.7, metalness: 0.2 });
    const skinMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.5 });
    const glowMat = new THREE.MeshBasicMaterial({ color: outfitColor });
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x181924, roughness: 0.4, metalness: 0.6 });
    const darkShadeMat = new THREE.MeshStandardMaterial({ color: 0x05060a, roughness: 0.15, metalness: 0.95, emissive: 0x100518, emissiveIntensity: 0.3 });
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x11121a, roughness: 0.3, metalness: 0.9 });

    // ==========================================
    // 1. PELVIS & ARTICULATED LEGS (WITH SNEAKERS)
    // ==========================================
    const pelvisGroup = new THREE.Group();
    pelvisGroup.position.set(0, 0.88, 0);

    // Waist / Pelvis mesh
    const pelvisMesh = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.2, 0.26), pantsMat);
    pelvisMesh.position.y = -0.05;
    pelvisGroup.add(pelvisMesh);

    // Glowing cyber belt / harness
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.05, 0.28), glowMat);
    belt.position.y = 0.02;
    pelvisGroup.add(belt);

    // Helper: Build articulated leg (Hip -> Thigh -> Knee -> Shin -> Rave Sneaker)
    const buildLeg = (isLeft) => {
      const side = isLeft ? -1 : 1;
      const hip = new THREE.Group();
      hip.position.set(side * 0.14, -0.1, 0);

      // Hip ball joint
      const hipBall = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), pantsMat);
      hip.add(hipBall);

      // Thigh (Upper Leg)
      const thighGeo = new THREE.CylinderGeometry(0.08, 0.065, 0.36, 14);
      thighGeo.translate(0, -0.18, 0);
      const thigh = new THREE.Mesh(thighGeo, pantsMat);
      thigh.castShadow = true;
      hip.add(thigh);

      // Knee Joint with Flexion
      const knee = new THREE.Group();
      knee.position.set(0, -0.36, 0);

      const kneeBall = new THREE.Mesh(new THREE.SphereGeometry(0.065, 12, 12), pantsMat);
      knee.add(kneeBall);

      // Shin (Lower Leg)
      const shinGeo = new THREE.CylinderGeometry(0.065, 0.055, 0.34, 14);
      shinGeo.translate(0, -0.17, 0);
      const shin = new THREE.Mesh(shinGeo, pantsMat);
      shin.castShadow = true;
      knee.add(shin);

      // Chunky Cyber Rave Sneaker at foot base
      const footGroup = new THREE.Group();
      footGroup.position.set(0, -0.34, 0);

      // Sneaker Upper
      const shoeUpper = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.09, 0.22), shoeMat);
      shoeUpper.position.set(0, 0.045, 0.04);
      shoeUpper.castShadow = true;

      // Glowing Neon Light-up Sole
      const shoeSole = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.03, 0.24), glowMat);
      shoeSole.position.set(0, 0.015, 0.04);

      // Sneaker Toe Cap
      const toeCap = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 8), shoeMat);
      toeCap.scale.set(1.0, 0.7, 1.2);
      toeCap.position.set(0, 0.04, 0.12);

      footGroup.add(shoeUpper, shoeSole, toeCap);
      knee.add(footGroup);

      hip.add(knee);
      pelvisGroup.add(hip);

      return { hip, knee, foot: footGroup };
    };

    const legL = buildLeg(true);
    const legR = buildLeg(false);
    dancerGroup.add(pelvisGroup);

    // ==========================================
    // 2. TORSO & CLOTHING (CONTOURED V-TAPER)
    // ==========================================
    const torsoGroup = new THREE.Group();
    torsoGroup.position.set(0, 0.88, 0);

    // Lower Midriff / Waist
    const waistMesh = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.25, 0.24), clothesMat);
    waistMesh.position.y = 0.12;
    torsoGroup.add(waistMesh);

    // Upper Chest / Ribcage
    const chestMesh = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.42, 0.3), clothesMat);
    chestMesh.position.y = 0.42;
    chestMesh.castShadow = true;
    torsoGroup.add(chestMesh);

    // Cross-body chest harness / Rave tactical strap
    const strapGeo = new THREE.BoxGeometry(0.54, 0.04, 0.32);
    const strap = new THREE.Mesh(strapGeo, pantsMat);
    strap.position.y = 0.42;
    strap.rotation.z = Math.PI / 6;
    torsoGroup.add(strap);

    // Glowing cyber rave pendant / necklace
    const necklace = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.018, 8, 16), glowMat);
    necklace.position.set(0, 0.58, 0.08);
    necklace.rotation.x = Math.PI / 3;
    torsoGroup.add(necklace);

    // ==========================================
    // 3. HEAD, JAWLINE, HAIRSTYLES & GLASSES
    // ==========================================
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.7, 0);

    // Anatomical Head (Face & Jaw)
    const cranium = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.28, 0.26), skinMat);
    cranium.position.y = 0.18;

    const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.14, 0.22), skinMat);
    jaw.position.set(0, 0.07, 0.02);

    const nose = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.06, 0.05), skinMat);
    nose.position.set(0, 0.16, 0.15);

    // Left & Right Ears
    const earL = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.07, 0.04), skinMat);
    earL.position.set(-0.15, 0.18, 0);
    const earR = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.07, 0.04), skinMat);
    earR.position.set(0.15, 0.18, 0);

    headGroup.add(cranium, jaw, nose, earL, earR);

    // Diverse 3D Hairstyles based on seed
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x111116, roughness: 0.85 });
    const hairStyle = seed % 6;

    if (hairStyle === 0) {
      // 1. Cyber Dreads (Neon highlighted dreadlocks)
      const dreadBase = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 12), hairMat);
      dreadBase.position.set(0, 0.26, -0.02);
      headGroup.add(dreadBase);

      for (let d = 0; d < 6; d++) {
        const strand = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.02, 0.28, 8), d % 2 === 0 ? glowMat : hairMat);
        strand.position.set((d - 2.5) * 0.05, 0.2 - d * 0.02, -0.12);
        strand.rotation.x = -Math.PI / 6;
        headGroup.add(strand);
      }
    } else if (hairStyle === 1) {
      // 2. High Fade / Textured Crop with neon tips
      const crop = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, 0.28), hairMat);
      crop.position.set(0, 0.34, 0);
      const tips = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.04, 0.24), glowMat);
      tips.position.set(0, 0.39, 0);
      headGroup.add(crop, tips);
    } else if (hairStyle === 2) {
      // 3. Cyber Double Buns with glowing rings
      const bunL = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), hairMat);
      bunL.position.set(-0.13, 0.38, -0.04);
      const ringL = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.015, 8, 16), glowMat);
      ringL.position.set(-0.13, 0.38, -0.04);

      const bunR = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), hairMat);
      bunR.position.set(0.13, 0.38, -0.04);
      const ringR = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.015, 8, 16), glowMat);
      ringR.position.set(0.13, 0.38, -0.04);

      headGroup.add(bunL, ringL, bunR, ringR);
    } else if (hairStyle === 3) {
      // 4. Asymmetrical Bob / Cyberpunk Sidecut
      const bob = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.22, 0.3), hairMat);
      bob.position.set(0.04, 0.26, -0.02);
      headGroup.add(bob);
    } else if (hairStyle === 4) {
      // 5. Spiky Rave Mohawk
      const mohawk = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.18, 0.32), glowMat);
      mohawk.position.set(0, 0.36, 0);
      headGroup.add(mohawk);
    } else {
      // 6. Streetwear Beanie
      const beanie = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.17, 0.22, 16), clothesMat);
      beanie.position.set(0, 0.32, -0.02);
      beanie.rotation.x = -Math.PI / 16;
      headGroup.add(beanie);
    }

    // Glasses / Cyber Visors
    const dancerGlasses = new THREE.Group();
    dancerGlasses.position.set(0, 0.18, 0.15);

    const glassesStyle = seed % 4;
    if (glassesStyle === 0) {
      // Cyberpunk Narrow Blade Shades (Matrix)
      const bladeL = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.045, 0.02), darkShadeMat);
      bladeL.position.x = -0.055;
      const bladeR = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.045, 0.02), darkShadeMat);
      bladeR.position.x = 0.055;
      const topBar = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.015, 0.03), frameMat);
      topBar.position.y = 0.025;
      const templeL = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.015, 0.16), frameMat);
      templeL.position.set(-0.13, 0.015, -0.07);
      const templeR = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.015, 0.16), frameMat);
      templeR.position.set(0.13, 0.015, -0.07);
      dancerGlasses.add(bladeL, bladeR, topBar, templeL, templeR);
    } else if (glassesStyle === 1) {
      // Full Glowing Visor Shield (Rave Visor)
      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.27, 0.075, 0.025), glowMat);
      const visorFrame = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.018, 0.035), frameMat);
      visorFrame.position.y = 0.04;
      const templeL = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.015, 0.16), frameMat);
      templeL.position.set(-0.14, 0.02, -0.07);
      const templeR = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.015, 0.16), frameMat);
      templeR.position.set(0.14, 0.02, -0.07);
      dancerGlasses.add(visor, visorFrame, templeL, templeR);
    } else if (glassesStyle === 2) {
      // Classic Dark Club Sunglasses
      const lensL = new THREE.Mesh(new THREE.BoxGeometry(0.085, 0.065, 0.02), darkShadeMat);
      lensL.position.x = -0.055;
      const lensR = new THREE.Mesh(new THREE.BoxGeometry(0.085, 0.065, 0.02), darkShadeMat);
      lensR.position.x = 0.055;
      const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.23, 0.02, 0.03), frameMat);
      bridge.position.y = 0.035;
      const templeL = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.015, 0.16), frameMat);
      templeL.position.set(-0.125, 0.02, -0.07);
      const templeR = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.015, 0.16), frameMat);
      templeR.position.set(0.125, 0.02, -0.07);
      dancerGlasses.add(lensL, lensR, bridge, templeL, templeR);
    } else {
      // Futuristic Sport Wraparound
      const wrapLens = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.055, 16, 1, true, 0, Math.PI), glowMat);
      wrapLens.rotation.x = Math.PI / 2;
      wrapLens.rotation.z = Math.PI / 2;
      wrapLens.scale.set(0.9, 1.1, 0.5);
      const browBar = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.018, 0.03), frameMat);
      browBar.position.y = 0.03;
      dancerGlasses.add(wrapLens, browBar);
    }

    headGroup.add(dancerGlasses);
    torsoGroup.add(headGroup);

    // ==========================================
    // 4. ARTICULATED ARMS & HANDS
    // ==========================================
    const buildArm = (isLeft) => {
      const side = isLeft ? -1 : 1;
      const arm = new THREE.Group();
      arm.position.set(side * 0.29, 0.58, 0);

      // Shoulder Cap
      const shoulderCap = new THREE.Mesh(new THREE.SphereGeometry(0.075, 12, 12), clothesMat);
      arm.add(shoulderCap);

      // Bicep / Upper Arm
      const bicepGeo = new THREE.CylinderGeometry(0.065, 0.055, 0.28, 12);
      bicepGeo.translate(0, -0.14, 0);
      const bicep = new THREE.Mesh(bicepGeo, clothesMat);
      arm.add(bicep);

      // Elbow joint
      const elbow = new THREE.Group();
      elbow.position.set(0, -0.28, 0);

      const elbowJoint = new THREE.Mesh(new THREE.SphereGeometry(0.055, 12, 12), skinMat);
      elbow.add(elbowJoint);

      // Forearm
      const forearmGeo = new THREE.CylinderGeometry(0.052, 0.042, 0.26, 12);
      forearmGeo.translate(0, -0.13, 0);
      const forearm = new THREE.Mesh(forearmGeo, skinMat);
      elbow.add(forearm);

      // Glowing wristband
      const wristband = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.015, 8, 16), glowMat);
      wristband.position.set(0, -0.24, 0);
      wristband.rotation.x = Math.PI / 2;
      elbow.add(wristband);

      // Stylized hand
      const handGroup = new THREE.Group();
      handGroup.position.set(0, -0.27, 0);
      const palm = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.09, 0.035), skinMat);
      palm.position.set(0, -0.04, 0);
      const thumb = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.04, 0.025), skinMat);
      thumb.position.set(side * -0.045, -0.02, 0.01);
      handGroup.add(palm, thumb);
      elbow.add(handGroup);

      arm.add(elbow);
      torsoGroup.add(arm);

      return { arm, elbow };
    };

    const armL = buildArm(true);
    const armR = buildArm(false);

    dancerGroup.add(torsoGroup);

    return {
      group: dancerGroup,
      pelvis: pelvisGroup,
      torso: torsoGroup,
      head: headGroup,
      legL,
      legR,
      armL: armL.arm,
      elbowL: armL.elbow,
      armR: armR.arm,
      elbowR: armR.elbow,
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

    // 2. Animate Full-Body Kinematics (Legs, Hips, Spine, Knees, Arms)
    for (let d of this.dancers) {
      const spd = (isPlaying ? 4.5 : 1.2) * d.speed;
      const phase = time * spd + d.seed;
      const bounceIntensity = isPlaying ? (0.08 + bass * 0.16 + beat * 0.2) : 0.02;

      // Vertical Bounce & Jump
      const verticalHop = Math.abs(Math.sin(phase)) * bounceIntensity;
      d.group.position.y = verticalHop;

      // Hip Dip & Knee Flexion (Knees bend as body dips)
      const kneeBend = (1.0 - Math.abs(Math.sin(phase))) * (0.2 + bass * 0.4);
      d.legL.knee.rotation.x = Math.max(0, kneeBend + Math.sin(phase) * 0.15);
      d.legR.knee.rotation.x = Math.max(0, kneeBend - Math.sin(phase) * 0.15);

      // Leg step swing
      d.legL.hip.rotation.x = Math.sin(phase) * (0.15 + bass * 0.2);
      d.legR.hip.rotation.x = -Math.sin(phase) * (0.15 + bass * 0.2);
      d.legL.hip.rotation.z = -0.06;
      d.legR.hip.rotation.z = 0.06;

      // Head bobbing & groove
      d.head.rotation.x = Math.sin(phase * 2) * (0.15 + bass * 0.2);
      d.head.rotation.y = Math.cos(phase * 0.8) * 0.2;

      // Torso & Pelvis groove sway
      d.torso.rotation.z = Math.sin(phase) * (0.08 + bass * 0.12);
      d.torso.rotation.y = Math.cos(phase * 0.5) * 0.15;
      d.pelvis.rotation.y = Math.sin(phase * 0.5) * 0.12;

      // Style-specific Arm Kinematics
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
          d.armL.rotation.y = 0.3 + Math.cos(phase * 0.2);
          d.armR.rotation.y = -0.3 - Math.cos(phase * 0.2);
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
