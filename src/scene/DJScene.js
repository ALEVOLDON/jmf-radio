import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Room } from './Room.js';
import { SoundSystem } from './SoundSystem.js';
import { DJCharacter } from './DJCharacter.js';
import { Lighting } from './Lighting.js';
import { DanceFloor } from './DanceFloor.js';
import { BarArea } from './BarArea.js';

export const CAMERA_PRESETS = {
  booth: {
    position: new THREE.Vector3(0, 1.8, 2.6),
    target: new THREE.Vector3(0, 1.4, 0)
  },
  dance: {
    position: new THREE.Vector3(0, 2.8, 8.6),
    target: new THREE.Vector3(0, 1.1, 4.0)
  },
  bar: {
    position: new THREE.Vector3(4.0, 2.3, 5.2),
    target: new THREE.Vector3(6.8, 1.4, 3.5)
  },
  lounge: {
    position: new THREE.Vector3(-4.2, 2.3, 5.2),
    target: new THREE.Vector3(-7.5, 1.2, 3.5)
  },
  decks: {
    position: new THREE.Vector3(0, 2.6, 1.0),
    target: new THREE.Vector3(0, 1.1, -0.2)
  },
  room: {
    position: new THREE.Vector3(7.5, 4.8, 9.5),
    target: new THREE.Vector3(0, 1.5, 2.5)
  },
  cinematic: {
    position: new THREE.Vector3(-6.5, 3.2, 7.5),
    target: new THREE.Vector3(0, 1.4, 2.0)
  }
};

export class DJScene {
  constructor(container) {
    this.container = container;
    this.width = container.clientWidth || window.innerWidth || 1280;
    this.height = container.clientHeight || window.innerHeight || 720;

    // Core Three.js components
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x07070b);
    this.scene.fog = new THREE.FogExp2(0x07070b, 0.035);

    this.camera = new THREE.PerspectiveCamera(50, this.width / this.height, 0.1, 80);
    this.camera.position.copy(CAMERA_PRESETS.booth.position);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);

    // Orbit Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.02;
    this.controls.minDistance = 1.5;
    this.controls.maxDistance = 16.0;
    this.controls.target.copy(CAMERA_PRESETS.booth.target);

    // Scene Subsystems
    this.room = new Room(this.scene);
    this.soundSystem = new SoundSystem(this.scene);
    this.dj = new DJCharacter(this.scene);
    this.danceFloor = new DanceFloor(this.scene);
    this.barArea = new BarArea(this.scene);
    this.lighting = new Lighting(this.scene);

    // Camera preset transition state
    this.activePreset = 'booth';
    this.targetCamPos = new THREE.Vector3().copy(CAMERA_PRESETS.booth.position);
    this.targetCamLook = new THREE.Vector3().copy(CAMERA_PRESETS.booth.target);
    this.isTransitioningCam = false;
    this.isCinematicOrbit = false;
    this.cinematicAngle = 0;

    // Resize Handler
    window.addEventListener('resize', () => this.onResize());
  }

  setCameraPreset(presetName) {
    if (!CAMERA_PRESETS[presetName]) return;
    this.activePreset = presetName;

    if (presetName === 'cinematic') {
      this.isCinematicOrbit = true;
    } else {
      this.isCinematicOrbit = false;
      this.targetCamPos.copy(CAMERA_PRESETS[presetName].position);
      this.targetCamLook.copy(CAMERA_PRESETS[presetName].target);
      this.isTransitioningCam = true;
    }
  }

  setTheme(themeName) {
    this.lighting.setTheme(themeName);
  }

  onResize() {
    this.width = this.container.clientWidth || window.innerWidth;
    this.height = this.container.clientHeight || window.innerHeight;
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }

  update(audioAnalysis, isPlaying) {
    // 1. Camera interpolation or cinematic orbit
    if (this.isCinematicOrbit) {
      this.cinematicAngle += 0.0025;
      const radius = 8.5;
      const camY = 3.5 + Math.sin(this.cinematicAngle * 1.2) * 0.8;
      this.camera.position.x = Math.cos(this.cinematicAngle) * radius;
      this.camera.position.z = 2.5 + Math.sin(this.cinematicAngle) * radius;
      this.camera.position.y = camY;
      this.controls.target.set(0, 1.3, 2.5);
    } else if (this.isTransitioningCam) {
      this.camera.position.lerp(this.targetCamPos, 0.07);
      this.controls.target.lerp(this.targetCamLook, 0.07);

      if (this.camera.position.distanceTo(this.targetCamPos) < 0.02) {
        this.isTransitioningCam = false;
      }
    }

    this.controls.update();

    // 2. Update Subsystems
    this.room.update(audioAnalysis, this.lighting.currentTheme);
    this.soundSystem.update(audioAnalysis, this.lighting.currentTheme);
    this.dj.update(audioAnalysis, isPlaying, this.lighting.currentTheme);
    this.danceFloor.update(audioAnalysis, isPlaying, this.lighting.currentTheme);
    this.barArea.update(audioAnalysis, isPlaying, this.lighting.currentTheme);
    this.lighting.update(audioAnalysis);

    // 3. Render
    this.renderer.render(this.scene, this.camera);
  }
}
