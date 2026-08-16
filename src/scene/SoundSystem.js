import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class SoundSystem {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.speakers = [];
    this.subCones = [];
    this.tweeters = [];
    this.eqLedBars = [];
    this.discoBall = null;
    this.init();
    this.scene.add(this.group);
  }

  init() {
    const loader = new GLTFLoader();
    loader.load(
      '/models/club_sound_lighting.glb',
      (gltf) => {
        const soundRig = gltf.scene;
        soundRig.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            if (node.name.includes('Disco_Mirror_Ball') || node.name.includes('Icosphere')) {
              this.discoBall = node;
            }
          }
        });
        this.group.add(soundRig);
      },
      undefined,
      (err) => {
        console.warn('Fallback to procedural sound system:', err);
        this.createSpeakerTower(-3.2, 0, -2.8, Math.PI / 8);
        this.createSpeakerTower(3.2, 0, -2.8, -Math.PI / 8);
      }
    );
  }

  createSpeakerTower(x, y, z, rotY) {
    const towerGroup = new THREE.Group();
    towerGroup.position.set(x, y, z);
    towerGroup.rotation.y = rotY;

    // Main Wooden / Carbon Cabinet
    const cabinetMat = new THREE.MeshStandardMaterial({
      color: 0x0f1017,
      roughness: 0.4,
      metalness: 0.3
    });
    const cabinet = new THREE.Mesh(new THREE.BoxGeometry(1.2, 3.2, 1.0), cabinetMat);
    cabinet.position.y = 1.6;
    cabinet.castShadow = true;
    cabinet.receiveShadow = true;
    towerGroup.add(cabinet);

    // Front Baffle Bevel
    const baffleMat = new THREE.MeshStandardMaterial({
      color: 0x181924,
      roughness: 0.2,
      metalness: 0.5
    });
    const baffle = new THREE.Mesh(new THREE.BoxGeometry(1.08, 3.08, 0.08), baffleMat);
    baffle.position.set(0, 1.6, 0.5);
    towerGroup.add(baffle);

    // Subwoofer 1 (Bottom 15-inch Cone)
    const cone1 = this.createWooferCone(0, 0.9, 0.54, 0.38);
    towerGroup.add(cone1.group);
    this.subCones.push(cone1);

    // Subwoofer 2 (Middle 12-inch Cone)
    const cone2 = this.createWooferCone(0, 1.85, 0.54, 0.32);
    towerGroup.add(cone2.group);
    this.subCones.push(cone2);

    // High Frequency Horn / Tweeter (Top)
    const tweeterGeo = new THREE.CylinderGeometry(0.16, 0.12, 0.08, 32);
    const tweeterMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.5,
      roughness: 0.1,
      metalness: 0.9
    });
    const tweeter = new THREE.Mesh(tweeterGeo, tweeterMat);
    tweeter.rotation.x = Math.PI / 2;
    tweeter.position.set(0, 2.65, 0.54);
    towerGroup.add(tweeter);
    this.tweeters.push(tweeter);

    // LED EQ Level Strip on speaker side
    const ledMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    for (let i = 0; i < 10; i++) {
      const led = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 0.02), ledMat.clone());
      led.position.set(0.56, 0.8 + i * 0.18, 0.48);
      towerGroup.add(led);
      this.eqLedBars.push(led);
    }

    this.group.add(towerGroup);
    this.speakers.push(towerGroup);
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
    const bass = audioAnalysis.bass;
    const beat = audioAnalysis.beat;
    const treble = audioAnalysis.treble;
    const rawFreq = audioAnalysis.rawArray || [];

    // Subwoofer cone physically pulses outward with low-end bass kick
    const punch = 1.0 + bass * 0.4 + beat * 0.5;
    const zOffset = (bass * 0.08 + beat * 0.12);

    for (let cone of this.subCones) {
      cone.group.scale.set(punch, punch, 1.0 + bass * 0.8);
      cone.cap.position.z = zOffset;
    }

    // Tweeter glow intensity reacts to treble frequencies
    const tweeterGlow = 0.3 + treble * 2.5;
    for (let tw of this.tweeters) {
      tw.material.emissiveIntensity = Math.min(3.0, tweeterGlow);
      if (themeColors && themeColors.primary) {
        tw.material.emissive.setHex(themeColors.primary);
      }
    }

    // LED EQ meters on speaker sides
    for (let i = 0; i < this.eqLedBars.length; i++) {
      const led = this.eqLedBars[i];
      const levelIndex = i % 10;
      const freqVal = rawFreq[levelIndex * 2] || 0;
      const isLit = (levelIndex / 10) <= (freqVal * 1.3);

      if (isLit) {
        // Green -> Yellow -> Red gradient
        if (levelIndex > 7) {
          led.material.color.setHex(0xff0044);
        } else if (levelIndex > 5) {
          led.material.color.setHex(0xffaa00);
        } else {
          led.material.color.setHex(themeColors ? themeColors.primary : 0x00f0ff);
        }
      } else {
        led.material.color.setHex(0x1a1a24);
      }
    }
  }
}
