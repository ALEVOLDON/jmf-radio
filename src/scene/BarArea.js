import * as THREE from 'three';

export class BarArea {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    
    this.bartender = null;
    this.bottles = [];
    this.barLights = [];
    this.shaker = null;

    this.init();
    this.scene.add(this.group);
  }

  init() {
    this.group.position.set(6.8, 0, 3.5);
    this.group.rotation.y = -Math.PI / 2; // Facing towards the dance floor

    this.createBarCounter();
    this.createBackShelvesAndBottles();
    this.createBarStools();
    this.createBartender();
  }

  createBarCounter() {
    const counterMat = new THREE.MeshStandardMaterial({
      color: 0x12131e,
      roughness: 0.2,
      metalness: 0.8
    });

    // Main Counter Top (length 5.2m, height 1.15m, depth 0.8m)
    const topGeo = new THREE.BoxGeometry(5.2, 0.12, 0.8);
    const counterTop = new THREE.Mesh(topGeo, counterMat);
    counterTop.position.set(0, 1.15, 0);
    counterTop.castShadow = true;
    counterTop.receiveShadow = true;
    this.group.add(counterTop);

    // Illuminated LED glow strip under the counter lip
    const ledMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const ledStrip = new THREE.Mesh(new THREE.BoxGeometry(5.22, 0.04, 0.04), ledMat);
    ledStrip.position.set(0, 1.1, 0.4);
    this.group.add(ledStrip);
    this.barLights.push(ledMat);

    // Front Bar Face Panel (Dark wood / vertical slats)
    const faceMat = new THREE.MeshStandardMaterial({
      color: 0x0b0c12,
      roughness: 0.8,
      metalness: 0.1
    });
    const face = new THREE.Mesh(new THREE.BoxGeometry(5.0, 1.05, 0.6), faceMat);
    face.position.set(0, 0.55, 0);
    face.castShadow = true;
    this.group.add(face);

    // Chrome Footrest Rail
    const railMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, metalness: 0.95, roughness: 0.1 });
    const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 5.0, 16), railMat);
    rail.rotation.z = Math.PI / 2;
    rail.position.set(0, 0.2, 0.45);
    this.group.add(rail);

    // Glasses and cocktail mats on counter
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.8,
      ior: 1.5
    });

    for (let i = 0; i < 4; i++) {
      const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.03, 0.12, 16), glassMat);
      glass.position.set(-1.8 + i * 1.2, 1.25, 0.1);
      this.group.add(glass);
    }
  }

  createBackShelvesAndBottles() {
    // Back Bar Wall Unit
    const shelfBack = new THREE.Mesh(
      new THREE.BoxGeometry(5.0, 3.2, 0.2),
      new THREE.MeshStandardMaterial({ color: 0x080910, roughness: 0.9 })
    );
    shelfBack.position.set(0, 2.0, -1.2);
    this.group.add(shelfBack);

    // 3 Glass Shelves
    const shelfMat = new THREE.MeshPhysicalMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.4,
      roughness: 0.1,
      metalness: 0.2,
      transmission: 0.6
    });

    const bottleColors = [0xff0055, 0x00f0ff, 0xffd700, 0x00ff88, 0x9d4edd, 0xff8800, 0x3a86ff, 0xff00aa];

    for (let s = 0; s < 3; s++) {
      const y = 1.2 + s * 0.7;
      const shelf = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.04, 0.35), shelfMat);
      shelf.position.set(0, y, -1.05);
      this.group.add(shelf);

      // Backlight under each shelf
      const shelfLed = new THREE.Mesh(
        new THREE.BoxGeometry(4.8, 0.02, 0.02),
        new THREE.MeshBasicMaterial({ color: s % 2 === 0 ? 0x00f0ff : 0xff007f })
      );
      shelfLed.position.set(0, y - 0.03, -1.0);
      this.group.add(shelfLed);
      this.barLights.push(shelfLed.material);

      // Bottles on shelf
      for (let b = 0; b < 14; b++) {
        const bottleColor = bottleColors[(s * 5 + b) % bottleColors.length];
        const bMat = new THREE.MeshStandardMaterial({
          color: bottleColor,
          emissive: bottleColor,
          emissiveIntensity: 0.4,
          roughness: 0.1,
          metalness: 0.6,
          transparent: true,
          opacity: 0.85
        });

        // Bottle body
        const bottleGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.25, 12);
        const bottle = new THREE.Mesh(bottleGeo, bMat);
        bottle.position.set(-2.1 + b * 0.32, y + 0.14, -1.05);
        this.group.add(bottle);
        this.bottles.push(bottle);
      }
    }

    // Neon "BAR LOUNGE" Sign above shelves
    const signCanvas = document.createElement('canvas');
    signCanvas.width = 512;
    signCanvas.height = 128;
    const ctx = signCanvas.getContext('2d');
    ctx.fillStyle = '#05060a';
    ctx.fillRect(0, 0, 512, 128);
    ctx.font = '900 48px Orbitron, sans-serif';
    ctx.fillStyle = '#ff007f';
    ctx.shadowColor = '#ff007f';
    ctx.shadowBlur = 16;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🍸 JMF BAR 🍸', 256, 64);

    const signTexture = new THREE.CanvasTexture(signCanvas);
    const signMat = new THREE.MeshBasicMaterial({ map: signTexture });
    const signMesh = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.6), signMat);
    signMesh.position.set(0, 3.4, -1.08);
    this.group.add(signMesh);
  }

  createBarStools() {
    const stoolMat = new THREE.MeshStandardMaterial({ color: 0x181928, roughness: 0.4, metalness: 0.5 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, metalness: 0.95, roughness: 0.1 });
    const cushionMat = new THREE.MeshStandardMaterial({ color: 0xff0055, roughness: 0.6 });

    for (let i = 0; i < 4; i++) {
      const stool = new THREE.Group();
      const x = -1.6 + i * 1.1;
      stool.position.set(x, 0, 0.85);

      // Base
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.03, 24), chromeMat);
      base.position.y = 0.015;
      stool.add(base);

      // Pole
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.75, 16), chromeMat);
      pole.position.y = 0.4;
      stool.add(pole);

      // Foot ring
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.015, 8, 24), chromeMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.25;
      stool.add(ring);

      // Seat Cushion
      const seat = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.08, 24), cushionMat);
      seat.position.y = 0.78;
      seat.castShadow = true;
      stool.add(seat);

      this.group.add(stool);
    }
  }

  createBartender() {
    // 3D Bartender Character behind the bar
    const btGroup = new THREE.Group();
    btGroup.position.set(0, 0, -0.6); // Standing between counter and shelves

    const vestMat = new THREE.MeshStandardMaterial({ color: 0x111118, roughness: 0.6 });
    const shirtMat = new THREE.MeshStandardMaterial({ color: 0xefefef, roughness: 0.5 });
    const bowTieMat = new THREE.MeshStandardMaterial({ color: 0xff0055 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xd69d78, roughness: 0.5 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: 0x0a0a10, roughness: 0.8 });
    const shakerMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.95, roughness: 0.1 });

    // Legs
    const legL = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.08, 0.9, 12), pantsMat);
    legL.position.set(-0.16, 0.45, 0);
    const legR = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.08, 0.9, 12), pantsMat);
    legR.position.set(0.16, 0.45, 0);
    btGroup.add(legL, legR);

    // Torso (Shirt + Vest)
    const torso = new THREE.Group();
    torso.position.set(0, 0.9, 0);

    const torsoMesh = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.72, 0.32), shirtMat);
    torsoMesh.position.y = 0.36;
    torso.add(torsoMesh);

    // Black Vest on top
    const vest = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.68, 0.33), vestMat);
    vest.position.y = 0.34;
    torso.add(vest);

    // Bowtie
    const bowTie = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.06, 0.04), bowTieMat);
    bowTie.position.set(0, 0.68, 0.18);
    torso.add(bowTie);

    // Head
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.78, 0);

    const head = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.34, 0.3), skinMat);
    head.position.y = 0.18;
    headGroup.add(head);

    // Sleek Hair
    const hair = new THREE.Mesh(
      new THREE.BoxGeometry(0.32, 0.12, 0.32),
      new THREE.MeshStandardMaterial({ color: 0x1f1510, roughness: 0.8 })
    );
    hair.position.y = 0.32;
    headGroup.add(hair);

    torso.add(headGroup);

    // Left & Right Arms holding Cocktail Shaker
    const armL = new THREE.Group();
    armL.position.set(-0.3, 0.6, 0);
    const upperArmL = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.06, 0.35, 12), shirtMat);
    upperArmL.position.set(0.1, -0.1, 0.15);
    upperArmL.rotation.set(Math.PI / 4, 0, -Math.PI / 6);
    armL.add(upperArmL);
    torso.add(armL);

    const armR = new THREE.Group();
    armR.position.set(0.3, 0.6, 0);
    const upperArmR = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.06, 0.35, 12), shirtMat);
    upperArmR.position.set(-0.1, -0.1, 0.15);
    upperArmR.rotation.set(Math.PI / 4, 0, Math.PI / 6);
    armR.add(upperArmR);
    torso.add(armR);

    // Stainless Steel Cocktail Shaker
    const shakerGroup = new THREE.Group();
    shakerGroup.position.set(0, 0.52, 0.32);
    
    const shakerBody = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.045, 0.24, 16), shakerMat);
    const shakerCap = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.06, 0.08, 16), shakerMat);
    shakerCap.position.y = 0.14;
    shakerGroup.add(shakerBody, shakerCap);
    shakerGroup.rotation.z = Math.PI / 8;
    torso.add(shakerGroup);

    btGroup.add(torso);
    this.group.add(btGroup);

    this.bartender = {
      group: btGroup,
      torso,
      head: headGroup,
      shaker: shakerGroup,
      armL,
      armR
    };
  }

  update(audioAnalysis, isPlaying, themeColors) {
    const time = performance.now() * 0.001;
    const bass = audioAnalysis.bass;
    const beat = audioAnalysis.beat;

    // 1. Bartender shaking cocktail to the rhythm
    if (this.bartender) {
      const shakeSpeed = isPlaying ? 8.0 : 2.0;
      const shakeAmount = isPlaying ? (0.08 + bass * 0.12) : 0.02;

      this.bartender.shaker.position.y = 0.52 + Math.sin(time * shakeSpeed) * shakeAmount;
      this.bartender.shaker.rotation.z = Math.PI / 8 + Math.cos(time * shakeSpeed) * 0.3;
      
      // Arms follow shaker
      this.bartender.armL.position.y = 0.6 + Math.sin(time * shakeSpeed) * (shakeAmount * 0.5);
      this.bartender.armR.position.y = 0.6 + Math.sin(time * shakeSpeed) * (shakeAmount * 0.5);

      // Head bobs in rhythm
      this.bartender.head.rotation.x = Math.sin(time * 4) * (0.08 + bass * 0.1);
      this.bartender.torso.rotation.y = Math.sin(time * 1.5) * 0.15;
    }

    // 2. Pulse shelf bottles with audio energy
    const glow = 0.3 + (isPlaying ? bass * 1.2 + beat * 0.8 : 0.1);
    for (let b of this.bottles) {
      b.material.emissiveIntensity = glow;
    }

    // 3. Theme updates
    if (themeColors) {
      for (let lightMat of this.barLights) {
        lightMat.color.setHex(themeColors.secondary || 0xff007f);
      }
    }
  }
}
