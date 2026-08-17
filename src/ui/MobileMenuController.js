export class MobileMenuController {
  constructor(audioEngine, djScene) {
    this.audioEngine = audioEngine;
    this.djScene = djScene;
    
    // Add references that the mobile menu needs but were originally on UIController
    this.camButtons = document.querySelectorAll('.cam-btn');
    this.genreModal = document.getElementById('genre-modal');
    this.lightingModal = document.getElementById('lighting-modal');
    this.queueDrawer = document.getElementById('queue-drawer');
    this.setMode = (mode) => {
      if (mode === 'dj') {
        const btn = document.getElementById('btn-mode-dj');
        if (btn) btn.click();
      } else {
        const btn = document.getElementById('btn-mode-radio');
        if (btn) btn.click();
      }
    };
    
    // Attempt to access currentTrack from UIController if available, otherwise just use what is in DOM
    // The exact code uses `this.currentTrack`. Since we don't have it directly, we can define a getter
    // that fetches it from a global or we just assume it's set later. For safety, we will let it be undefined.
    this.currentTrack = null;

    this.initMobileMenu();
  }

  initMobileMenu() {
    this.btnMobileMenu = document.getElementById('btn-mobile-menu');
    this.btnMobileMenuClose = document.getElementById('btn-mobile-menu-close');
    this.mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
    this.mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');

    const openDrawer = () => {
      if (this.mobileMenuDrawer) this.mobileMenuDrawer.classList.remove('hidden');
      if (this.mobileMenuBackdrop) this.mobileMenuBackdrop.classList.remove('hidden');

      // Update current track info in mobile drawer
      if (this.currentTrack) {
        const mTrackTitle = document.getElementById('m-menu-track-title');
        const mTrackArtist = document.getElementById('m-menu-track-artist');
        if (mTrackTitle) mTrackTitle.textContent = this.currentTrack.title || 'Unknown Track';
        if (mTrackArtist) {
          const gBadge = this.currentTrack.genre ? ` • ${this.currentTrack.genre.name}` : '';
          mTrackArtist.textContent = (this.currentTrack.artist || 'JMF Live Station') + gBadge;
        }
      }
    };

    const closeDrawer = () => {
      if (this.mobileMenuDrawer) this.mobileMenuDrawer.classList.add('hidden');
      if (this.mobileMenuBackdrop) this.mobileMenuBackdrop.classList.add('hidden');
    };

    if (this.btnMobileMenu) this.btnMobileMenu.addEventListener('click', openDrawer);
    if (this.btnMobileMenuClose) this.btnMobileMenuClose.addEventListener('click', closeDrawer);
    if (this.mobileMenuBackdrop) this.mobileMenuBackdrop.addEventListener('click', closeDrawer);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDrawer();
    });

    // 1. Playback Modes in Mobile Menu
    const mBtnModeDj = document.getElementById('m-btn-mode-dj');
    const mBtnModeRadio = document.getElementById('m-btn-mode-radio');
    if (mBtnModeDj) {
      mBtnModeDj.addEventListener('click', () => {
        this.setMode('dj');
      });
    }
    if (mBtnModeRadio) {
      mBtnModeRadio.addEventListener('click', () => {
        this.setMode('radio');
      });
    }

    // 2. 3D Club Cameras
    const mCamItems = document.querySelectorAll('.m-cam-item');
    mCamItems.forEach(item => {
      item.addEventListener('click', () => {
        const camPreset = item.getAttribute('data-cam');
        mCamItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // Sync with desktop camera toolbar
        this.camButtons.forEach(btn => {
          if (btn.getAttribute('data-cam') === camPreset) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });

        this.djScene.setCameraPreset(camPreset);
      });
    });

    // 3. Open All Genres Modal
    const mBtnOpenAllGenres = document.getElementById('m-btn-open-all-genres');
    if (mBtnOpenAllGenres) {
      mBtnOpenAllGenres.addEventListener('click', () => {
        closeDrawer();
        if (this.genreModal) this.genreModal.classList.remove('hidden');
      });
    }

    // 4. Open Lighting Modal
    const mBtnOpenLightingModal = document.getElementById('m-btn-open-lighting-modal');
    if (mBtnOpenLightingModal) {
      mBtnOpenLightingModal.addEventListener('click', () => {
        closeDrawer();
        if (this.lightingModal) this.lightingModal.classList.remove('hidden');
      });
    }

    // 5. Lighting Themes in Mobile Menu
    const mThemePills = document.querySelectorAll('.m-theme-pill');
    mThemePills.forEach(pill => {
      pill.addEventListener('click', () => {
        mThemePills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const theme = pill.getAttribute('data-theme');

        // Sync with modal theme buttons
        const modalThemeButtons = document.querySelectorAll('.l-theme-btn');
        modalThemeButtons.forEach(b => {
          if (b.getAttribute('data-theme') === theme) b.classList.add('active');
          else b.classList.remove('active');
        });

        this.djScene.setTheme(theme);
      });
    });

    // 6. Lighting Toggles
    const mToggleStrobe = document.getElementById('m-toggle-strobe');
    const mToggleLasers = document.getElementById('m-toggle-lasers');
    const mToggleFog = document.getElementById('m-toggle-fog');
    const toggleStrobe = document.getElementById('toggle-strobe');
    const toggleLasers = document.getElementById('toggle-lasers');
    const toggleFog = document.getElementById('toggle-fog');

    if (mToggleStrobe) {
      mToggleStrobe.addEventListener('change', (e) => {
        if (toggleStrobe) toggleStrobe.checked = e.target.checked;
        this.djScene.lighting.setStrobeEnabled(e.target.checked);
      });
    }
    if (mToggleLasers) {
      mToggleLasers.addEventListener('change', (e) => {
        if (toggleLasers) toggleLasers.checked = e.target.checked;
        this.djScene.lighting.setLasersEnabled(e.target.checked);
      });
    }
    if (mToggleFog) {
      mToggleFog.addEventListener('change', (e) => {
        if (toggleFog) toggleFog.checked = e.target.checked;
        this.djScene.lighting.setFogEnabled(e.target.checked);
      });
    }

    // 7. Light Intensity Slider
    const mSliderIntensity = document.getElementById('m-slider-light-intensity');
    const mValIntensity = document.getElementById('m-val-light-intensity');
    const sliderIntensity = document.getElementById('slider-light-intensity');
    const valIntensity = document.getElementById('val-light-intensity');

    if (mSliderIntensity && mValIntensity) {
      mSliderIntensity.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        const text = `${Math.round(val * 100)}%`;
        mValIntensity.textContent = text;
        if (sliderIntensity) sliderIntensity.value = val;
        if (valIntensity) valIntensity.textContent = text;
        this.djScene.lighting.setIntensityMultiplier(val);
      });
    }

    // 8. Sound & EQ Preset
    const mRadioEqPreset = document.getElementById('m-radio-eq-preset');
    if (mRadioEqPreset) {
      mRadioEqPreset.addEventListener('change', (e) => {
        const val = e.target.value;
        if (this.radioEqPreset) this.radioEqPreset.value = val;
        this.audioEngine.setEQPreset(val);
      });
    }

    // 9. Quick Actions
    const mBtnOpenQueue = document.getElementById('m-btn-open-queue');
    if (mBtnOpenQueue) {
      mBtnOpenQueue.addEventListener('click', () => {
        closeDrawer();
        if (this.queueDrawer) this.queueDrawer.classList.remove('hidden');
      });
    }

    const mBtnFullscreen = document.getElementById('m-btn-fullscreen');
    if (mBtnFullscreen) {
      mBtnFullscreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });
    }
  }
}
