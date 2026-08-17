import * as THREE from 'three';

export const THEMES = {
  cyber: {
    name: 'Cyberpunk Neon',
    primary: 0x00f0ff,
    secondary: 0xff007f,
    accent: 0x9d4edd,
    ambient: 0x141528,
    spotlight: 0x00f0ff
  },
  sunset: {
    name: 'Sunset Lo-Fi',
    primary: 0xff6b35,
    secondary: 0xf7c59f,
    accent: 0xef233c,
    ambient: 0x24151a,
    spotlight: 0xffa500
  },
  matrix: {
    name: 'Emerald Matrix',
    primary: 0x00ff88,
    secondary: 0x00bb55,
    accent: 0x88ff00,
    ambient: 0x0a1a12,
    spotlight: 0x00ff88
  },
  acid: {
    name: 'Electric Blue',
    primary: 0x3a86ff,
    secondary: 0x8338ec,
    accent: 0xff006e,
    ambient: 0x101426,
    spotlight: 0x3a86ff
  }
};

export class Lighting {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.currentTheme = THEMES.cyber;

    this.ambientLight = null;
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
    // 1. Ambient Lighting (Low mood fill)
    this.ambientLight = new THREE.AmbientLight(this.currentTheme.ambient, 1.4);
    this.group.add(this.ambientLight);

    // 2. Focused Spotlight on DJ Booth
    this.djSpotlight = new THREE.SpotLight(this.currentTheme.spotlight, 6.0, 16, Math.PI / 4, 0.4, 1.5);
    this.djSpotlight.position.set(0, 8.5, 1.2);
    this.djSpotlight.target.position.set(0, 1.0, 0);
    this.djSpotlight.castShadow = true;
    this.group.add(this.djSpotlight);
    this.group.add(this.djSpotlight.target);

    // 3. Dynamic Dance Floor Overhead Spotlight
    this.danceFloorSpot = new THREE.SpotLight(this.currentTheme.secondary, 5.0, 16, Math.PI / 3, 0.5, 1.2);
    this.danceFloorSpot.position.set(0, 8.5, 4.5);
    this.danceFloorSpot.target.position.set(0, 0, 4.5);
    this.group.add(this.danceFloorSpot);
    this.group.add(this.danceFloorSpot.target);

    // 4. Bar Counter Overhead Light
    this.barLight = new THREE.PointLight(this.currentTheme.secondary, 3.5, 10, 2);
    this.barLight.position.set(6.8, 4.0, 3.5);
    this.group.add(this.barLight);

    // 5. VIP Lounge Light
    this.vipLight = new THREE.PointLight(this.currentTheme.accent, 3.0, 10, 2);
    this.vipLight.position.set(-7.5, 3.8, 3.5);
    this.group.add(this.vipLight);

    // 6. Left & Right Fill Point Lights
    this.leftFillPoint = new THREE.PointLight(this.currentTheme.primary, 3.0, 12, 2);
    this.leftFillPoint.position.set(-4.5, 3.5, -2.0);
    this.group.add(this.leftFillPoint);

    this.rightFillPoint = new THREE.PointLight(this.currentTheme.secondary, 3.0, 12, 2);
    this.rightFillPoint.position.set(4.5, 3.5, -2.0);
    this.group.add(this.rightFillPoint);

    // 7. Strobe Flash Light (Pulses on heavy bass / kick drops)
    this.strobeLight = new THREE.PointLight(0xffffff, 0, 18, 2);
    this.strobeLight.position.set(0, 7.5, 4.0);
    this.group.add(this.strobeLight);

    // 8. 3D Scanning Laser Beams (Multi-beam fan from stage truss)
    this.laserBeams = [];
    this.createLaserBeams();

    // 9. Floating Atmosphere Dust / Haze Particles
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
    if (this.danceFloorSpot) {
      this.danceFloorSpot.visible = enabled;
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
    if (this.djSpotlight) this.djSpotlight.color.setHex(this.currentTheme.spotlight);
    if (this.danceFloorSpot) this.danceFloorSpot.color.setHex(this.currentTheme.secondary);
    if (this.barLight) this.barLight.color.setHex(this.currentTheme.secondary);
    if (this.vipLight) this.vipLight.color.setHex(this.currentTheme.accent);
    if (this.leftFillPoint) this.leftFillPoint.color.setHex(this.currentTheme.primary);
    if (this.rightFillPoint) this.rightFillPoint.color.setHex(this.currentTheme.secondary);
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
