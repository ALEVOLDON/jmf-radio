import * as THREE from 'three';

export const THEMES = {
  cyber: {
    name: 'Cyberpunk Neon',
    primary: 0x00f0ff,
    secondary: 0xff007f,
    accent: 0x9d4edd,
    ambient: 0x22264a,
    sky: 0x00d2ff,
    ground: 0x7928ca,
    spotlight: 0x00f0ff
  },
  sunset: {
    name: 'Sunset Lo-Fi',
    primary: 0xff6b35,
    secondary: 0xf7c59f,
    accent: 0xef233c,
    ambient: 0x382228,
    sky: 0xff9e00,
    ground: 0x7b2cbf,
    spotlight: 0xffa500
  },
  matrix: {
    name: 'Emerald Matrix',
    primary: 0x00ff88,
    secondary: 0x00bb55,
    accent: 0x88ff00,
    ambient: 0x143422,
    sky: 0x00ff88,
    ground: 0x084c28,
    spotlight: 0x00ff88
  },
  acid: {
    name: 'Electric Blue',
    primary: 0x3a86ff,
    secondary: 0x8338ec,
    accent: 0xff006e,
    ambient: 0x222a55,
    sky: 0x3a86ff,
    ground: 0x8338ec,
    spotlight: 0x3a86ff
  }
};

export class Lighting {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.currentTheme = THEMES.cyber;

    this.ambientLight = null;
    this.hemiLight = null;
    this.djSpotlight = null;
    this.danceFloorSpot = null;
    this.barLight = null;
    this.vipLight = null;
    this.leftFillPoint = null;
    this.rightFillPoint = null;
    this.strobeLight = null;
    this.particles = null;

    this.intensityMultiplier = 1.0;
    this.strobeEnabled = true;
    this.lasersEnabled = true;
    this.fogEnabled = true;
    this.laserSpeed = 1.0;

    this.init();
    this.scene.add(this.group);
  }

  init() {
    // 1. Dual-Tone Hemisphere Ambient Light (Eliminates dead black shadows across all surfaces)
    this.hemiLight = new THREE.HemisphereLight(
      this.currentTheme.sky || 0x00d2ff,
      this.currentTheme.ground || 0x7928ca,
      2.4
    );
    this.group.add(this.hemiLight);

    // 2. Ambient Lighting Fill
    this.ambientLight = new THREE.AmbientLight(this.currentTheme.ambient, 2.6);
    this.group.add(this.ambientLight);

    // 3. Focused Spotlight on DJ Booth
    this.djSpotlight = new THREE.SpotLight(this.currentTheme.spotlight, 7.0, 18, Math.PI / 3.5, 0.4, 1.4);
    this.djSpotlight.position.set(0, 8.5, 1.2);
    this.djSpotlight.target.position.set(0, 1.0, 0);
    this.djSpotlight.castShadow = true;
    this.djSpotlight.shadow.mapSize.width = 1024;
    this.djSpotlight.shadow.mapSize.height = 1024;
    this.djSpotlight.shadow.camera.near = 1.0;
    this.djSpotlight.shadow.camera.far = 18;
    this.group.add(this.djSpotlight);
    this.group.add(this.djSpotlight.target);

    // 4. Dynamic Dance Floor Overhead Spotlight
    this.danceFloorSpot = new THREE.SpotLight(this.currentTheme.secondary, 6.0, 18, Math.PI / 3, 0.5, 1.2);
    this.danceFloorSpot.position.set(0, 8.5, 4.5);
    this.danceFloorSpot.target.position.set(0, 0, 4.5);
    this.group.add(this.danceFloorSpot);
    this.group.add(this.danceFloorSpot.target);

    // 5. Bar Counter Overhead Light
    this.barLight = new THREE.PointLight(this.currentTheme.secondary, 4.5, 12, 2);
    this.barLight.position.set(6.8, 4.2, 3.5);
    this.group.add(this.barLight);

    // 6. VIP Lounge Light
    this.vipLight = new THREE.PointLight(this.currentTheme.accent, 4.0, 12, 2);
    this.vipLight.position.set(-7.5, 4.0, 3.5);
    this.group.add(this.vipLight);

    // 7. Left & Right Fill Point Lights
    this.leftFillPoint = new THREE.PointLight(this.currentTheme.primary, 4.5, 14, 2);
    this.leftFillPoint.position.set(-4.5, 4.0, -1.5);
    this.group.add(this.leftFillPoint);

    this.rightFillPoint = new THREE.PointLight(this.currentTheme.secondary, 4.5, 14, 2);
    this.rightFillPoint.position.set(4.5, 4.0, -1.5);
    this.group.add(this.rightFillPoint);

    // 8. Architectural Wall-Wash Uplights (Gives depth and illuminates club walls)
    this.wallWashLeft = new THREE.PointLight(this.currentTheme.primary, 5.5, 18, 2);
    this.wallWashLeft.position.set(-11.0, 5.2, 2.0);
    this.group.add(this.wallWashLeft);

    this.wallWashRight = new THREE.PointLight(this.currentTheme.secondary, 5.5, 18, 2);
    this.wallWashRight.position.set(11.0, 5.2, 2.0);
    this.group.add(this.wallWashRight);

    this.wallWashBack = new THREE.PointLight(this.currentTheme.accent, 6.0, 16, 2);
    this.wallWashBack.position.set(0.0, 6.8, -8.5);
    this.group.add(this.wallWashBack);

    // 9. Strobe Flash Light
    this.strobeLight = new THREE.PointLight(0xffffff, 0, 20, 2);
    this.strobeLight.position.set(0, 7.5, 4.0);
    this.group.add(this.strobeLight);

    // 10. 3D Scanning Laser Beams
    this.laserBeams = [];
    this.createLaserBeams();

    // 11. Floating Atmosphere Dust / Haze Particles
    this.createAtmosphereParticles();
  }

  createLaserBeams() {
    this.laserGroup = new THREE.Group();
    this.laserGroup.position.set(0, 7.5, -2.0);

    const laserColors = [0x00f0ff, 0xff007f, 0x00ff88, 0x9d4edd, 0xff0055, 0x00f0ff];
    const laserMatTemplate = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    const beamGeo = new THREE.CylinderGeometry(0.015, 0.06, 18, 8);
    beamGeo.translate(0, 9, 0);
    beamGeo.rotateX(Math.PI / 2);

    for (let i = 0; i < 6; i++) {
      const mat = laserMatTemplate.clone();
      mat.color.setHex(laserColors[i % laserColors.length]);
      const beam = new THREE.Mesh(beamGeo, mat);
      beam.position.set((i - 2.5) * 1.4, 0, 0);
      this.laserBeams.push(beam);
      this.laserGroup.add(beam);
    }

    this.group.add(this.laserGroup);
  }

  setIntensityMultiplier(val) {
    this.intensityMultiplier = Math.max(0.1, Math.min(3.0, val));
  }

  setLaserSpeed(val) {
    this.laserSpeed = Math.max(0.2, Math.min(4.0, val));
  }

  setStrobeEnabled(enabled) {
    this.strobeEnabled = enabled;
  }

  setLasersEnabled(enabled) {
    this.lasersEnabled = enabled;
    if (this.laserGroup) {
      this.laserGroup.visible = enabled;
    }
  }

  setFogEnabled(enabled) {
    this.fogEnabled = enabled;
    if (this.particles) {
      this.particles.visible = enabled;
    }
  }

  createAtmosphereParticles() {
    const count = 450;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = Math.random() * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.05,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(geometry, material);
    this.group.add(this.particles);
  }

  setTheme(themeKey) {
    if (!THEMES[themeKey]) return;
    this.currentTheme = THEMES[themeKey];

    if (this.ambientLight) this.ambientLight.color.setHex(this.currentTheme.ambient);
    if (this.hemiLight) {
      if (this.currentTheme.sky) this.hemiLight.color.setHex(this.currentTheme.sky);
      if (this.currentTheme.ground) this.hemiLight.groundColor.setHex(this.currentTheme.ground);
    }
    if (this.djSpotlight) this.djSpotlight.color.setHex(this.currentTheme.spotlight);
    if (this.danceFloorSpot) this.danceFloorSpot.color.setHex(this.currentTheme.secondary);
    if (this.barLight) this.barLight.color.setHex(this.currentTheme.secondary);
    if (this.vipLight) this.vipLight.color.setHex(this.currentTheme.accent);
    if (this.leftFillPoint) this.leftFillPoint.color.setHex(this.currentTheme.primary);
    if (this.rightFillPoint) this.rightFillPoint.color.setHex(this.currentTheme.secondary);
    if (this.wallWashLeft) this.wallWashLeft.color.setHex(this.currentTheme.primary);
    if (this.wallWashRight) this.wallWashRight.color.setHex(this.currentTheme.secondary);
    if (this.wallWashBack) this.wallWashBack.color.setHex(this.currentTheme.accent);
    if (this.particles) this.particles.material.color.setHex(this.currentTheme.primary);
  }

  update(audioAnalysis) {
    const bass = audioAnalysis.bass;
    const beat = audioAnalysis.beat;
    const treble = audioAnalysis.treble;
    const time = performance.now() * 0.001 * this.laserSpeed;
    const mult = this.intensityMultiplier;

    // Pulse spotlights with audio
    if (this.djSpotlight) {
      this.djSpotlight.intensity = (4.0 + bass * 6.0 + beat * 4.0) * mult;
    }

    if (this.danceFloorSpot && this.lasersEnabled) {
      this.danceFloorSpot.intensity = (3.0 + bass * 5.0 + beat * 5.0) * mult;
      this.danceFloorSpot.position.x = Math.sin(time * 1.5) * 2.5; // Moving club scanner beam
    }

    // 3D Laser Fan Scanning Animation
    if (this.laserBeams && this.lasersEnabled) {
      const laserSpread = 0.35 + bass * 0.25;
      for (let i = 0; i < this.laserBeams.length; i++) {
        const beam = this.laserBeams[i];
        const angleOffset = (i - 2.5) * laserSpread;
        const wave = Math.sin(time * 2.2 + i * 0.6) * 0.28;
        beam.rotation.x = Math.PI / 4 + Math.sin(time * 1.8) * 0.22 + wave;
        beam.rotation.y = angleOffset + Math.cos(time * 1.2 + i * 0.4) * 0.15;
        beam.material.opacity = (0.35 + bass * 0.45 + beat * 0.3) * mult;
      }
    }

    if (this.leftFillPoint) this.leftFillPoint.intensity = (2.0 + bass * 4.0) * mult;
    if (this.rightFillPoint) this.rightFillPoint.intensity = (2.0 + treble * 4.0) * mult;
    if (this.wallWashLeft) this.wallWashLeft.intensity = (3.0 + bass * 3.5) * mult;
    if (this.wallWashRight) this.wallWashRight.intensity = (3.0 + treble * 3.5) * mult;
    if (this.wallWashBack) this.wallWashBack.intensity = (3.5 + beat * 4.0) * mult;
    if (this.barLight) this.barLight.intensity = (2.5 + bass * 2.0) * mult;
    if (this.vipLight) this.vipLight.intensity = (2.0 + beat * 2.0) * mult;

    // Strobe flash on heavy beat hits
    if (this.strobeLight) {
      if (this.strobeEnabled && beat > 0.8 && bass > 0.55) {
        this.strobeLight.intensity = 9.0 * mult;
      } else {
        this.strobeLight.intensity *= 0.7; // Fast decay
      }
    }

    // Animate floating dust particles
    if (this.particles && this.fogEnabled) {
      const positions = this.particles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += 0.003 + bass * 0.008;
        if (positions[i + 1] > 8.0) {
          positions[i + 1] = 0.2;
        }
      }
      this.particles.geometry.attributes.position.needsUpdate = true;
    }
  }
}
