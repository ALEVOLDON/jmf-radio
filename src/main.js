import { DJScene } from './scene/DJScene.js';
import { AudioEngine } from './audio/AudioEngine.js';
import { UIController } from './ui/UIController.js';

function initApp() {
  const container = document.getElementById('canvas-container');
  if (!container) {
    console.error('Canvas container not found');
    return;
  }
  
  // 1. Initialize 3D Scene
  const djScene = new DJScene(container);

  // 2. Initialize Audio Engine & UI Controller
  let uiController = null;

  const audioEngine = new AudioEngine((track, queue, totalTracks) => {
    if (uiController) {
      uiController.onTrackChanged(track, queue, totalTracks);
    }
  });

  uiController = new UIController(audioEngine, djScene);

  // 3. Main Animation & Audio-Reactivity Render Loop
  function animate() {
    requestAnimationFrame(animate);

    // Analyze current audio frequencies & beats
    const audioAnalysis = audioEngine.update();

    // Update UI track progress
    if (audioEngine.isPlaying) {
      uiController.updateProgress(audioEngine.elapsedTime, audioEngine.duration);
    }

    // Update 3D Scene elements (DJ movements, speakers, neons, lights)
    djScene.update(audioAnalysis, audioEngine.isPlaying);
  }

  animate();
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
