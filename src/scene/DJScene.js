import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Room } from './Room.js';
import { SoundSystem } from './SoundSystem.js';
import { DJCharacter } from './DJCharacter.js';
import { Lighting } from './Lighting.js';
import { DanceFloor } from './DanceFloor.js';
import { BarArea } from './BarArea.js';

export const CAMERA_PRESETS = {
  pov: {
    position: new THREE.Vector3(0, 1.38, -0.65),
    target: new THREE.Vector3(0, 1.15, 6.0)
  },
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
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Cap at 1.5x — avoids 4x pixel count on HiDPI
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

    // In 1st-person POV mode, hide DJ upper body so view over decks is 100% unobstructed
    if (this.dj && this.dj.djTorso) {
      this.dj.djTorso.visible = (presetName !== 'pov');
    }

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

  setTrackInfo(currentTrack, nextTrack, elapsedTime, duration) {
    if (this.room && this.room.setTrackInfo) {
      this.room.setTrackInfo(currentTrack, nextTrack, elapsedTime, duration);
    }
  }

  update(audioAnalysis, isPlaying) {
    const safeAnalysis = audioAnalysis || {
      bass: 0,
      mids: 0,
      treble: 0,
      volume: 0,
      rawArray: [],
      beat: 0,
      activeDeck: 'A',
      crossfadeProgress: 0,
      isCrossfading: false,
      deckALevel: 0,
      deckBLevel: 0,
      bpmA: 128,
      bpmB: 126
    };

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

    // 2. Update Subsystems with Safe Guards
    const theme = this.lighting ? this.lighting.currentTheme : null;
    try { if (this.room) this.room.update(safeAnalysis, theme); } catch (e) { console.warn('[DJScene] room update error:', e); }
    try { if (this.soundSystem) this.soundSystem.update(safeAnalysis, theme); } catch (e) { console.warn('[DJScene] soundSystem update error:', e); }
    try { if (this.dj) this.dj.update(safeAnalysis, isPlaying, theme); } catch (e) { console.warn('[DJScene] dj update error:', e); }
    try { if (this.danceFloor) this.danceFloor.update(safeAnalysis, isPlaying, theme); } catch (e) { console.warn('[DJScene] danceFloor update error:', e); }
    try { if (this.barArea) this.barArea.update(safeAnalysis, isPlaying, theme); } catch (e) { console.warn('[DJScene] barArea update error:', e); }
    try { if (this.lighting) this.lighting.update(safeAnalysis); } catch (e) { console.warn('[DJScene] lighting update error:', e); }

    // 3. Render
    this.renderer.render(this.scene, this.camera);
  }
}
