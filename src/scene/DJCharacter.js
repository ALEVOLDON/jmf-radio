import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export class DJCharacter {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    
    // Components
    this.turntables = [];
    this.mixerKnobs = [];
    this.vuLeds = [];
    this.djMesh = null;
    this.djHead = null;
    this.djLeftArm = null;
    this.djRightArm = null;
    this.djTorso = null;
    this.laptopCanvas = null;
    this.laptopTexture = null;
    this.laptopCtx = null;

    this.init();
    this.scene.add(this.group);
  }

  init() {
    this.createDJBooth();
    this.createTurntablesAndMixer();
    this.createLaptop();
    this.createDJAvatar();
  }

  createDJBooth() {
    // Modern ergonomic curved DJ Table
    const tableMat = new THREE.MeshStandardMaterial({
      color: 0x14151f,
      roughness: 0.3,
      metalness: 0.7
    });

    // Tabletop
    const topGeo = new THREE.BoxGeometry(3.6, 0.12, 1.4);
    const tableTop = new THREE.Mesh(topGeo, tableMat);
    tableTop.position.set(0, 1.05, 0);
    tableTop.receiveShadow = true;
    tableTop.castShadow = true;
    this.group.add(tableTop);

    // Front illuminated LED glow trim
    const ledTrimMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const ledTrim = new THREE.Mesh(new THREE.BoxGeometry(3.62, 0.04, 0.04), ledTrimMat);
    ledTrim.position.set(0, 1.05, 0.7);
    this.group.add(ledTrim);

    // Sturdy metal legs — merged into 1 draw call
    const legMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0f, metalness: 0.9, roughness: 0.2 });
    const legPositions = [[-1.6, -0.5], [-1.6, 0.5], [1.6, -0.5], [1.6, 0.5]];
    const legGeos = legPositions.map(([x, z]) => {
      const g = new THREE.CylinderGeometry(0.05, 0.05, 1.05, 12);
      g.applyMatrix4(new THREE.Matrix4().makeTranslation(x, 0.525, z));
      return g;
    });
    const mergedLegs = mergeGeometries(legGeos);
    legGeos.forEach(g => g.dispose());
    const legsMesh = new THREE.Mesh(mergedLegs, legMat);
    legsMesh.castShadow = true;
    this.group.add(legsMesh);

    // Front facade panel with DJ Logo
    const facade = new THREE.Mesh(
      new THREE.BoxGeometry(3.4, 0.9, 0.04),
      new THREE.MeshStandardMaterial({ color: 0x0d0e16, roughness: 0.5 })
    );
    facade.position.set(0, 0.525, 0.65);
    this.group.add(facade);
  }

  createTurntablesAndMixer() {
    const deckMat = new THREE.MeshStandardMaterial({
      color: 0x1c1d29,
      roughness: 0.3,
      metalness: 0.6
    });

    // Helper: Create Turntable Deck (Left & Right)
    const createDeck = (x) => {
      const deckGroup = new THREE.Group();
      deckGroup.position.set(x, 1.12, 0);

      // Deck Body
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.06, 0.9), deckMat);
      deckGroup.add(body);

      // Vinyl Platter (Spinning disc)
      const vinylGroup = new THREE.Group();
      vinylGroup.position.set(0, 0.04, 0);

      const platterGeo = new THREE.CylinderGeometry(0.36, 0.36, 0.02, 32);
      const vinylMat = new THREE.MeshStandardMaterial({
        color: 0x08080c,
        roughness: 0.2,
        metalness: 0.8
      });
      const platter = new THREE.Mesh(platterGeo, vinylMat);
      vinylGroup.add(platter);

      // Center Vinyl Label (Glowing neon ring)
      const labelGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.025, 32);
      const labelMat = new THREE.MeshStandardMaterial({
        color: x < 0 ? 0x00f0ff : 0xff007f,
        emissive: x < 0 ? 0x00f0ff : 0xff007f,
        emissiveIntensity: 0.4
      });
      const label = new THREE.Mesh(labelGeo, labelMat);
      vinylGroup.add(label);

      deckGroup.add(vinylGroup);

      // Tone Arm
      const armMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.9, roughness: 0.1 });
      const armBase = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.04, 16), armMat);
      armBase.position.set(0.34, 0.06, -0.32);
      deckGroup.add(armBase);

      const armRod = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.42, 8), armMat);
      armRod.rotation.z = Math.PI / 2;
      armRod.rotation.y = -Math.PI / 4;
      armRod.position.set(0.2, 0.08, -0.18);
      deckGroup.add(armRod);

      // Pitch fader & Cue buttons
      const cueButton = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03, 0.03, 0.02, 16),
        new THREE.MeshBasicMaterial({ color: 0x00ff88 })
      );
      cueButton.position.set(-0.32, 0.04, 0.32);
      deckGroup.add(cueButton);

      this.group.add(deckGroup);
      this.turntables.push({ group: deckGroup, vinyl: vinylGroup });
    };

    createDeck(-1.0); // Left Turntable
    createDeck(1.0);  // Right Turntable

    // Central DJ Mixer (Pioneer DJM style)
    const mixerGroup = new THREE.Group();
    mixerGroup.position.set(0, 1.12, 0);

    const mixerBody = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 0.06, 0.9),
      new THREE.MeshStandardMaterial({ color: 0x151620, roughness: 0.4, metalness: 0.5 })
    );
    mixerGroup.add(mixerBody);

    // Crossfader Slot & Knob
    this.xFader = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.03, 0.04),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 })
    );
    this.xFader.position.set(0, 0.04, 0.28);
    mixerGroup.add(this.xFader);

    // EQ Knobs — merged into 1 draw call per channel group
    const knobGeo = new THREE.CylinderGeometry(0.02, 0.022, 0.03, 12);
    const knobMat = new THREE.MeshStandardMaterial({ color: 0x33354a, roughness: 0.3, metalness: 0.6 });
    const knobGeos = [];
    for (let ch of [-0.18, 0.18]) {
      for (let row = 0; row < 4; row++) {
        const g = knobGeo.clone();
        g.applyMatrix4(new THREE.Matrix4().makeTranslation(ch, 0.045, -0.28 + row * 0.12));
        knobGeos.push(g);
      }
    }
    const mergedKnobs = mergeGeometries(knobGeos);
    knobGeos.forEach(g => g.dispose());
    knobGeo.dispose();
    const knobsMesh = new THREE.Mesh(mergedKnobs, knobMat);
    mixerGroup.add(knobsMesh);
    // Keep individual refs for animation (use the merged mesh instead)
    this.mixerKnobsMesh = knobsMesh;

    // Mixer VU Meter Bars — merged into 1 draw call
    const vuGeo = new THREE.BoxGeometry(0.03, 0.015, 0.015);
    const vuMat = new THREE.MeshBasicMaterial({ color: 0x112211 });
    const vuGeos = [];
    for (let ch of [-0.05, 0.05]) {
      for (let i = 0; i < 8; i++) {
        const g = vuGeo.clone();
        g.applyMatrix4(new THREE.Matrix4().makeTranslation(ch, 0.035, -0.25 + i * 0.05));
        vuGeos.push(g);
      }
    }
    const mergedVu = mergeGeometries(vuGeos);
    vuGeos.forEach(g => g.dispose());
    vuGeo.dispose();
    const vuMesh = new THREE.Mesh(mergedVu, vuMat);
    mixerGroup.add(vuMesh);
    this.vuLedsMesh = vuMesh;

    this.group.add(mixerGroup);
  }

  createLaptop() {
    // Laptop on ergonomic angled DJ stand (Right corner)
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(1.45, 1.25, -0.3);
    laptopGroup.rotation.y = -Math.PI / 6;

    // Laptop Stand
    const standMat = new THREE.MeshStandardMaterial({ color: 0x222233, metalness: 0.8 });
    const standPole = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.3, 16), standMat);
    standPole.position.y = -0.1;
    laptopGroup.add(standPole);

    // Laptop Base
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x333544, metalness: 0.7, roughness: 0.3 });
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.02, 0.38), baseMat);
    laptopGroup.add(base);

    // Laptop Screen with Dynamic Live Waveform Canvas
    this.laptopCanvas = document.createElement('canvas');
    this.laptopCanvas.width = 512;
    this.laptopCanvas.height = 256;
    this.laptopCtx = this.laptopCanvas.getContext('2d');

    this.laptopTexture = new THREE.CanvasTexture(this.laptopCanvas);
    const screenMat = new THREE.MeshBasicMaterial({ map: this.laptopTexture });

    const screenHousing = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.35, 0.02), baseMat);
    screenHousing.position.set(0, 0.17, -0.18);
    screenHousing.rotation.x = -Math.PI / 10;
    laptopGroup.add(screenHousing);

    const screenDisplay = new THREE.Mesh(new THREE.PlaneGeometry(0.52, 0.32), screenMat);
    screenDisplay.position.set(0, 0.17, -0.168);
    screenDisplay.rotation.x = -Math.PI / 10;
    laptopGroup.add(screenDisplay);

    this.group.add(laptopGroup);
  }

  createDJAvatar() {
    // Stylized Cyber / Lo-Fi DJ Character standing behind the booth
    const djGroup = new THREE.Group();
    djGroup.position.set(0, 0, -0.4);

    // Materials
    const hoodieMat = new THREE.MeshStandardMaterial({
      color: 0x181928,
      roughness: 0.65,
      metalness: 0.2
    });
    const pantsMat = new THREE.MeshStandardMaterial({
      color: 0x0c0d16,
      roughness: 0.75,
      metalness: 0.2
    });
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xdfb190,
      roughness: 0.5
    });
    const headphoneMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.7,
      metalness: 0.8
    });
    const shoeMat = new THREE.MeshStandardMaterial({
      color: 0x141520,
      roughness: 0.4,
      metalness: 0.6
    });
    const cyanGlowMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });

    // ==========================================
    // 1. PELVIS, LEGS & HIGH-TOP SNEAKERS
    // ==========================================
    const pelvis = new THREE.Group();
    pelvis.position.set(0, 0.9, 0);

    const pelvisMesh = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.22, 0.32), pantsMat);
    pelvisMesh.position.y = -0.06;
    pelvis.add(pelvisMesh);

    // Techwear Belt & Side Straps
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.05, 0.34), cyanGlowMat);
    belt.position.y = 0.02;
    pelvis.add(belt);

    const buildDJLeg = (isLeft) => {
      const side = isLeft ? -1 : 1;
      const hip = new THREE.Group();
      hip.position.set(side * 0.16, -0.12, 0);

      // Thigh with Cargo Pocket
      const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.38, 14), pantsMat);
      thigh.position.y = -0.18;
      hip.add(thigh);

      const cargoPocket = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.1), pantsMat);
      cargoPocket.position.set(side * 0.09, -0.18, 0);
      hip.add(cargoPocket);

      // Knee Joint
      const knee = new THREE.Group();
      knee.position.set(0, -0.38, 0);

      const kneeBall = new THREE.Mesh(new THREE.SphereGeometry(0.075, 12, 12), pantsMat);
      knee.add(kneeBall);

      // Shin / Calf
      const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.065, 0.34, 14), pantsMat);
      shin.position.y = -0.16;
      knee.add(shin);

      // High-Top DJ Kicks
      const shoeGroup = new THREE.Group();
      shoeGroup.position.set(0, -0.34, 0);

      const shoeUpper = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.12, 0.25), shoeMat);
      shoeUpper.position.set(0, 0.06, 0.04);

      const shoeSole = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.035, 0.27), cyanGlowMat);
      shoeSole.position.set(0, 0.018, 0.04);

      shoeGroup.add(shoeUpper, shoeSole);
      knee.add(shoeGroup);

      hip.add(knee);
      pelvis.add(hip);
      return { hip, knee };
    };

    this.djLegL = buildDJLeg(true);
    this.djLegR = buildDJLeg(false);
    djGroup.add(pelvis);

    // ==========================================
    // 2. TORSO & OVERSIZED HOODIE
    // ==========================================
    this.djTorso = new THREE.Group();
    this.djTorso.position.set(0, 0.9, 0);

    const torsoMesh = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.78, 0.44), hoodieMat);
    torsoMesh.position.y = 0.4;
    torsoMesh.castShadow = true;
    this.djTorso.add(torsoMesh);

    // Kangaroo Pouch Pocket
    const pouch = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.22, 0.06), hoodieMat);
    pouch.position.set(0, 0.26, 0.23);
    this.djTorso.add(pouch);

    // 3D Draped Hood Collar around neck
    const hoodCollar = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.06, 12, 24), hoodieMat);
    hoodCollar.position.set(0, 0.76, -0.04);
    hoodCollar.rotation.x = Math.PI / 4;
    this.djTorso.add(hoodCollar);

    // Glowing DJ Waveform on chest
    const logoMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(0.3, 0.2),
      new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.9 })
    );
    logoMesh.position.set(0, 0.52, 0.23);
    this.djTorso.add(logoMesh);

    // ==========================================
    // 3. HEAD, JAWLINE, SNAPBACK & VISOR
    // ==========================================
    this.djHead = new THREE.Group();
    this.djHead.position.set(0, 0.82, 0);

    // Neck
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 0.16, 16), skinMat);
    neck.position.y = 0.06;
    this.djHead.add(neck);

    // Cranium & Jaw
    const cranium = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.32, 0.32), skinMat);
    cranium.position.y = 0.26;

    const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.16, 0.26), skinMat);
    jaw.position.set(0, 0.14, 0.04);

    const nose = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.07, 0.06), skinMat);
    nose.position.set(0, 0.24, 0.18);

    this.djHead.add(cranium, jaw, nose);

    // DJ Snapback Cap (Turned backwards)
    const capMat = new THREE.MeshStandardMaterial({ color: 0x00f0ff, roughness: 0.4 });
    const capDome = new THREE.Mesh(new THREE.SphereGeometry(0.21, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2), capMat);
    capDome.position.y = 0.41;
    const capBrim = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.03, 0.22), capMat);
    capBrim.position.set(0, 0.41, -0.23);
    capBrim.rotation.x = -Math.PI / 16;
    this.djHead.add(capDome, capBrim);

    // DJ Studio Monitoring Headphones
    const hpBand = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.025, 16, 32, Math.PI), headphoneMat);
    hpBand.position.set(0, 0.4, 0);
    hpBand.rotation.z = Math.PI;
    this.djHead.add(hpBand);

    const earCupL = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.05, 16), headphoneMat);
    earCupL.rotation.z = Math.PI / 2;
    earCupL.position.set(-0.21, 0.26, 0);
    const earCupR = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.05, 16), headphoneMat);
    earCupR.rotation.z = Math.PI / 2;
    earCupR.position.set(0.21, 0.26, 0);
    this.djHead.add(earCupL, earCupR);

    // Cyberpunk Visor Shades
    const djGlassesGroup = new THREE.Group();
    djGlassesGroup.position.set(0, 0.27, 0.19);

    const visorMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.9,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.92
    });
    const visorLens = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.09, 0.03), visorMat);
    djGlassesGroup.add(visorLens);

    const frameMat = new THREE.MeshStandardMaterial({ color: 0x080910, roughness: 0.2, metalness: 0.95 });
    const frameTop = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.025, 0.04), frameMat);
    frameTop.position.set(0, 0.05, 0);
    const templeL = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.2), frameMat);
    templeL.position.set(-0.18, 0.02, -0.09);
    const templeR = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.2), frameMat);
    templeR.position.set(0.18, 0.02, -0.09);
    djGlassesGroup.add(frameTop, templeL, templeR);

    this.djHead.add(djGlassesGroup);
    this.djTorso.add(this.djHead);

    // 5. Left Arm (Scratching vinyl deck with articulated joints and DJ Glove)
    this.djLeftArm = new THREE.Group();
    this.djLeftArm.position.set(-0.34, 0.65, 0);

    const shoulderCapL = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 16), hoodieMat);
    this.djLeftArm.add(shoulderCapL);

    const upperArmL = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.32, 16), hoodieMat);
    upperArmL.position.set(-0.12, -0.14, 0.12);
    upperArmL.rotation.set(Math.PI / 4, 0, Math.PI / 6);
    this.djLeftArm.add(upperArmL);

    const elbowL = new THREE.Group();
    elbowL.position.set(-0.24, -0.26, 0.24);

    const elbowJointL = new THREE.Mesh(new THREE.SphereGeometry(0.065, 16, 16), skinMat);
    elbowL.add(elbowJointL);

    const foreArmL = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.34, 16), skinMat);
    foreArmL.position.set(-0.12, -0.12, 0.16);
    foreArmL.rotation.set(Math.PI / 3, 0, Math.PI / 6);
    elbowL.add(foreArmL);

    // Glowing DJ Wristband
    const djWristbandL = new THREE.Mesh(
      new THREE.TorusGeometry(0.06, 0.018, 8, 16),
      new THREE.MeshBasicMaterial({ color: 0x00f0ff })
    );
    djWristbandL.position.set(-0.2, -0.22, 0.28);
    djWristbandL.rotation.x = Math.PI / 3;
    elbowL.add(djWristbandL);

    // DJ Cyber Glove & Palm resting flat on vinyl
    const gloveMat = new THREE.MeshStandardMaterial({ color: 0x111218, roughness: 0.3, metalness: 0.8 });
    const handL = new THREE.Group();
    handL.position.set(-0.22, -0.25, 0.32);

    const palmL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.035, 0.12), gloveMat);
    palmL.rotation.x = -Math.PI / 10;
    const thumbL = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.025, 0.05), gloveMat);
    thumbL.position.set(0.055, -0.01, 0.02);
    handL.add(palmL, thumbL);
    elbowL.add(handL);

    this.djLeftArm.add(elbowL);
    this.djTorso.add(this.djLeftArm);

    // 6. Right Arm (Reaching for mixer / faders with articulated joints)
    this.djRightArm = new THREE.Group();
    this.djRightArm.position.set(0.34, 0.65, 0);

    const shoulderCapR = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 16), hoodieMat);
    this.djRightArm.add(shoulderCapR);

    const upperArmR = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.32, 16), hoodieMat);
    upperArmR.position.set(0.12, -0.14, 0.12);
    upperArmR.rotation.set(Math.PI / 4, 0, -Math.PI / 8);
    this.djRightArm.add(upperArmR);

    const elbowR = new THREE.Group();
    elbowR.position.set(0.22, -0.26, 0.22);

    const elbowJointR = new THREE.Mesh(new THREE.SphereGeometry(0.065, 16, 16), skinMat);
    elbowR.add(elbowJointR);

    const foreArmR = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.34, 16), skinMat);
    foreArmR.position.set(-0.06, -0.12, 0.16);
    foreArmR.rotation.set(Math.PI / 3, 0, -Math.PI / 8);
    elbowR.add(foreArmR);

    // Glowing DJ Wristband
    const djWristbandR = new THREE.Mesh(
      new THREE.TorusGeometry(0.06, 0.018, 8, 16),
      new THREE.MeshBasicMaterial({ color: 0xff007f })
    );
    djWristbandR.position.set(-0.12, -0.22, 0.28);
    djWristbandR.rotation.x = Math.PI / 3;
    elbowR.add(djWristbandR);

    // DJ Right Hand (Tweaking knobs with finger posture)
    const handR = new THREE.Group();
    handR.position.set(-0.14, -0.25, 0.32);

    const palmR = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.04, 0.1), gloveMat);
    palmR.rotation.x = -Math.PI / 8;
    const fingersR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.025, 0.05), gloveMat);
    fingersR.position.set(0, -0.01, 0.06);
    handR.add(palmR, fingersR);
    elbowR.add(handR);

    this.djRightArm.add(elbowR);
    this.djTorso.add(this.djRightArm);

    djGroup.add(this.djTorso);
    this.djMesh = djGroup;
    this.group.add(djGroup);
  }

  update(audioAnalysis, isPlaying, themeColors) {
    const time = performance.now() * 0.001;
    const bass = audioAnalysis.bass;
    const beat = audioAnalysis.beat;
    const rawFreq = audioAnalysis.rawArray || [];

    // 1. Spin Vinyl records when music is playing
    if (isPlaying && this.turntables.length > 0) {
      this.turntables.forEach(t => {
        if (t.mesh) t.mesh.rotation.y += 0.04;
        else if (t.vinyl) t.vinyl.rotation.y += 0.04;
      });
    }

    // 2. Animate Mixer Crossfader position
    if (this.xFader && audioAnalysis.crossfadeProgress !== undefined) {
      // Moves from -0.15 (Deck A) to +0.15 (Deck B)
      const targetX = (audioAnalysis.crossfadeProgress - 0.5) * 0.3;
      this.xFader.position.x = THREE.MathUtils.lerp(this.xFader.position.x, targetX, 0.1);
    }

    // 3. DJ Head Bobbing (BPM & Bass dynamic response)
    if (this.djHead) {
      const bobFreq = isPlaying ? 5.0 : 1.5;
      const bobAmount = isPlaying ? (0.08 + bass * 0.12 + beat * 0.15) : 0.02;
      this.djHead.position.y = 0.82 - Math.abs(Math.sin(time * bobFreq)) * bobAmount;
      this.djHead.rotation.x = Math.sin(time * bobFreq) * (0.08 + bass * 0.15);
      this.djHead.rotation.y = Math.sin(time * 1.5) * 0.1;
    }

    // 4. DJ Torso Groove / Body Sway
    if (this.djTorso) {
      const swayFreq = isPlaying ? 2.5 : 0.8;
      this.djTorso.rotation.z = Math.sin(time * swayFreq) * (0.03 + bass * 0.06);
      this.djTorso.position.y = 0.9 + Math.cos(time * swayFreq * 2) * (0.01 + bass * 0.03);
    }

    // 5. DJ Arms Scratching & Tweaking (Focusing on active deck or crossfading)
    if (this.djLeftArm && isPlaying) {
      this.djLeftArm.rotation.y = Math.sin(time * 6.0) * (0.15 + bass * 0.2);
      this.djLeftArm.position.z = Math.cos(time * 6.0) * 0.05;
    }

    if (this.djRightArm && isPlaying) {
      if (audioAnalysis.isCrossfading) {
        // Hand directly on crossfader & EQ tweaking
        this.djRightArm.rotation.x = Math.PI / 4 + Math.sin(time * 8.0) * 0.15;
        this.djRightArm.position.x = 0.3 + (audioAnalysis.crossfadeProgress - 0.5) * 0.2;
      } else {
        this.djRightArm.rotation.x = Math.sin(time * 3.0) * (0.1 + bass * 0.15);
        this.djRightArm.rotation.y = Math.cos(time * 2.0) * 0.12;
      }
    }

    // 6. Mixer VU-Meter LEDs animation
    for (let i = 0; i < this.vuLeds.length; i++) {
      const led = this.vuLeds[i];
      const level = (i % 8) / 8;
      const freqVal = rawFreq[i * 2] || 0;
      const isLit = isPlaying && level <= (freqVal * 1.4);

      if (isLit) {
        if (level > 0.7) {
          led.material.color.setHex(0xff0044);
        } else if (level > 0.5) {
          led.material.color.setHex(0xffcc00);
        } else {
          led.material.color.setHex(0x00ff88);
        }
      } else {
        led.material.color.setHex(0x0a140a);
      }
    }

    // 7. Laptop Screen Waveform Live Drawing
    if (this.laptopCtx) {
      this.drawLaptopScreen(audioAnalysis, isPlaying);
    }
  }

  drawLaptopScreen(audioAnalysis, isPlaying) {
    const ctx = this.laptopCtx;
    const w = this.laptopCanvas.width;
    const h = this.laptopCanvas.height;

    ctx.fillStyle = '#0e101a';
    ctx.fillRect(0, 0, w, h);

    // Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.lineWidth = 1;
    for (let y = 0; y < h; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Draw Live Audio Spectrum Waveform
    const raw = audioAnalysis.rawArray || [];
    const barW = w / 32;

    for (let i = 0; i < 32; i++) {
      const val = isPlaying ? (raw[i] || 0) : 0.05 + 0.05 * Math.sin(i * 0.5 + performance.now() * 0.003);
      const barH = val * (h * 0.7);

      const grad = ctx.createLinearGradient(0, h - barH, 0, h);
      grad.addColorStop(0, '#00f0ff');
      grad.addColorStop(0.6, '#9d4edd');
      grad.addColorStop(1, '#ff007f');

      ctx.fillStyle = grad;
      ctx.fillRect(i * barW + 2, h - barH - 20, barW - 4, barH);
    }

    // Header info text & Deck indicator
    ctx.font = 'bold 18px sans-serif';
    ctx.fillStyle = audioAnalysis.isCrossfading ? '#ff007f' : '#00f0ff';
    const deckInfo = audioAnalysis.isCrossfading 
      ? `MIXING: DECK ${audioAnalysis.activeDeck} ➔ DECK ${audioAnalysis.activeDeck === 'A' ? 'B' : 'A'} (${Math.round(audioAnalysis.crossfadeProgress * 100)}%)`
      : `DECK ${audioAnalysis.activeDeck || 'A'} ACTIVE // ON AIR`;
    ctx.fillText(deckInfo, 16, 30);

    ctx.font = '14px monospace';
    ctx.fillStyle = '#8a8d9b';
    ctx.fillText(`BPM: 128.0   VOL: ${Math.round(audioAnalysis.volume * 100)}%   EQ: BASS SWAP ON`, 16, 52);

    this.laptopTexture.needsUpdate = true;
  }
}
