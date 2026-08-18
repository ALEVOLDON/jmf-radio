import * as THREE from 'three';

export class SoundSystem {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.speakers = [];
    this.subCones = [];
    this.tweeters = [];
    this.eqLedBars = [];
    this.hornMaterials = [];
    this.init();
    this.scene.add(this.group);
  }

  init() {
    // 1. Left & Right massive Club Monitor Towers
    this.createSpeakerTower(-3.4, 0, -2.6, Math.PI / 8);
    this.createSpeakerTower(3.4, 0, -2.6, -Math.PI / 8);

    // 2. Extra Dancefloor Sub-bass Kick Bins (under the stage corners)
    this.createSubBassBin(-4.8, 0, 0.2, Math.PI / 6);
    this.createSubBassBin(4.8, 0, 0.2, -Math.PI / 6);
  }

  createSpeakerTower(x, y, z, rotY) {
    const towerGroup = new THREE.Group();
    towerGroup.position.set(x, y, z);
    towerGroup.rotation.y = rotY;

    // Main Heavy Wooden / Carbon Fiber Cabinet (1.3m x 3.6m x 1.1m)
    const cabinetMat = new THREE.MeshStandardMaterial({
      color: 0x0c0d14,
      roughness: 0.35,
      metalness: 0.5
    });
    const cabinet = new THREE.Mesh(new THREE.BoxGeometry(1.3, 3.6, 1.1), cabinetMat);
    cabinet.position.y = 1.8;
    cabinet.castShadow = true;
    cabinet.receiveShadow = true;
    towerGroup.add(cabinet);

    // Front Baffle Bevel
    const baffleMat = new THREE.MeshStandardMaterial({
      color: 0x161824,
      roughness: 0.2,
      metalness: 0.7
    });
    const baffle = new THREE.Mesh(new THREE.BoxGeometry(1.16, 3.48, 0.08), baffleMat);
    baffle.position.set(0, 1.8, 0.55);
    towerGroup.add(baffle);

    // Subwoofer 1 (Bottom 18-inch High-Excursion Cone)
    const cone1 = this.createWooferCone(0, 0.95, 0.59, 0.44);
    towerGroup.add(cone1.group);
    this.subCones.push(cone1);

    // Subwoofer 2 (Middle 15-inch Punch Cone)
    const cone2 = this.createWooferCone(0, 2.05, 0.59, 0.38);
    towerGroup.add(cone2.group);
    this.subCones.push(cone2);

    // Funktion-One Style Flared Horn Array (Top)
    const hornMat = new THREE.MeshStandardMaterial({
      color: 0x9d4edd,
      emissive: 0x9d4edd,
      emissiveIntensity: 0.4,
      roughness: 0.15,
      metalness: 0.85
    });
    this.hornMaterials.push(hornMat);

    const hornGeo = new THREE.ConeGeometry(0.34, 0.45, 16, 1, true);
    const hornMesh = new THREE.Mesh(hornGeo, hornMat);
    hornMesh.rotation.x = -Math.PI / 2;
    hornMesh.position.set(0, 3.0, 0.62);
    towerGroup.add(hornMesh);

    // Central Tweeter Bullet inside Horn
    const tweeterGeo = new THREE.CylinderGeometry(0.12, 0.08, 0.2, 16);
    const tweeterMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.9
    });
    const tweeter = new THREE.Mesh(tweeterGeo, tweeterMat);
    tweeter.rotation.x = Math.PI / 2;
    tweeter.position.set(0, 3.0, 0.68);
    towerGroup.add(tweeter);
    this.tweeters.push(tweeter);

    // Side LED EQ Level Meter (12 segments)
    const ledMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    for (let i = 0; i < 12; i++) {
      const led = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 0.02), ledMat.clone());
      led.position.set(0.61, 0.8 + i * 0.18, 0.52);
      towerGroup.add(led);
      this.eqLedBars.push(led);
    }

    // Glowing JMF PRO AUDIO badge plate on side
    const badgeMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const badge = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.35, 0.7), badgeMat);
    badge.position.set(0.66, 3.2, 0);
    towerGroup.add(badge);

    this.group.add(towerGroup);
    this.speakers.push(towerGroup);
  }

  createSubBassBin(x, y, z, rotY) {
    const binGroup = new THREE.Group();
    binGroup.position.set(x, y, z);
    binGroup.rotation.y = rotY;

    // Heavy Double 21-inch Subwoofer Bin (1.6m x 0.9m x 1.2m)
    const binMat = new THREE.MeshStandardMaterial({
      color: 0x0a0b10,
      roughness: 0.4,
      metalness: 0.4
    });
    const bin = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.9, 1.2), binMat);
    bin.position.y = 0.45;
    bin.castShadow = true;
    bin.receiveShadow = true;
    binGroup.add(bin);

    // 2 Subwoofer Drivers in Front
    const cone1 = this.createWooferCone(-0.42, 0.45, 0.61, 0.34);
    const cone2 = this.createWooferCone(0.42, 0.45, 0.61, 0.34);
    binGroup.add(cone1.group, cone2.group);
    this.subCones.push(cone1, cone2);

    // Front Bass Reflex Port Tube (Center)
    const portGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.15, 16);
    const portMat = new THREE.MeshStandardMaterial({ color: 0x00f0ff, emissive: 0x00f0ff, emissiveIntensity: 0.3 });
    const port = new THREE.Mesh(portGeo, portMat);
    port.rotation.x = Math.PI / 2;
    port.position.set(0, 0.45, 0.6);
    binGroup.add(port);

    this.group.add(binGroup);
  }

  createWooferCone(x, y, z, radius) {
    const group = new THREE.Group();
    group.position.set(x, y, z);

    // Outer Rubber Surround Ring
    const surroundGeo = new THREE.TorusGeometry(radius, 0.035, 16, 32);
    const surroundMat = new THREE.MeshStandardMaterial({
      color: 0x111115,
      roughness: 0.9
    });
    const surround = new THREE.Mesh(surroundGeo, surroundMat);
    group.add(surround);

    // Inverted Woofer Cone
    const coneGeo = new THREE.ConeGeometry(radius, 0.14, 32, 1, true);
    const coneMat = new THREE.MeshStandardMaterial({
      color: 0x222430,
      roughness: 0.3,
      metalness: 0.4
    });
    const coneMesh = new THREE.Mesh(coneGeo, coneMat);
    coneMesh.rotation.x = -Math.PI / 2;
    group.add(coneMesh);

    // Center Dust Cap
    const capGeo = new THREE.SphereGeometry(radius * 0.38, 16, 16);
    const capMat = new THREE.MeshStandardMaterial({
      color: 0x0a0b10,
      roughness: 0.2,
      metalness: 0.8
    });
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.scale.z = 0.5;
    group.add(cap);

    return { group, coneMesh, cap, baseRadius: radius };
  }

  update(audioAnalysis, themeColors) {
    const bass = audioAnalysis ? audioAnalysis.bass : 0;
    const beat = audioAnalysis ? audioAnalysis.beat : 0;
    const treble = audioAnalysis ? audioAnalysis.treble : 0;
    const rawFreq = (audioAnalysis && audioAnalysis.rawArray) ? audioAnalysis.rawArray : [];

    // Subwoofer cone physically pulses outward with low-end bass kick
    const punch = 1.0 + bass * 0.45 + beat * 0.6;
    const zOffset = (bass * 0.09 + beat * 0.14);

    for (let cone of this.subCones) {
      cone.group.scale.set(punch, punch, 1.0 + bass * 0.9);
      cone.cap.position.z = zOffset;
    }

    // Horn flare & Tweeter glow intensity reacts to treble & theme
    const tweeterGlow = 0.4 + treble * 3.0;
    for (let tw of this.tweeters) {
      tw.material.emissiveIntensity = Math.min(3.5, tweeterGlow);
      if (themeColors && themeColors.primary) {
        tw.material.emissive.setHex(themeColors.primary);
      }
    }

    for (let hMat of this.hornMaterials) {
      hMat.emissiveIntensity = 0.3 + bass * 0.8 + beat * 0.5;
      if (themeColors && themeColors.accent) {
        hMat.emissive.setHex(themeColors.accent);
      }
    }

    // LED EQ meters on speaker sides
    for (let i = 0; i < this.eqLedBars.length; i++) {
      const led = this.eqLedBars[i];
      const levelIndex = i % 12;
      const freqVal = rawFreq[levelIndex * 2] || 0;
      const isLit = (levelIndex / 12) <= (freqVal * 1.3);

      if (isLit) {
        if (levelIndex > 9) {
          led.material.color.setHex(0xff0044);
        } else if (levelIndex > 6) {
          led.material.color.setHex(0xffaa00);
        } else {
          led.material.color.setHex(themeColors ? themeColors.primary : 0x00f0ff);
        }
      } else {
        led.material.color.setHex(0x151620);
      }
    }
  }
}
