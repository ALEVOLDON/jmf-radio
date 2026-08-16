# 🎧 JMF Radio (3D Virtual DJ & Nightclub Radio Stream)

An interactive, audio-reactive 3D web radio station and nightclub experience streaming your local music library 24/7 with zero cloud dependencies.

![JMF Radio Cover](/public/cover-placeholder.svg)

---

## 🚀 Quick Start

### Option 1: 1-Click Desktop Launcher (Windows)
Double-click the **`start-radio.bat`** file or the **`JMF Radio`** desktop shortcut.  
It automatically boots the local streaming server and opens the 3D venue in your default browser.

### Option 2: Command Line
```bash
# Navigate to the project directory
cd "C:\Users\alevo\Desktop\JMF radio"

# Start the radio station
npm start
```
Then open your browser at: **`http://localhost:3000`**

---

## 🎛️ Architecture & Features

```
┌────────────────────────────────────────────────────────┐
│               Local PC Backend (Node.js)               │
│  - Scans music directory (D:\Soundcloud)               │
│  - Instant metadata & ID3 tag parser                   │
│  - AutoDJ 24/7 infinite shuffle engine                 │
│  - HTTP Audio Stream with Range header support         │
└──────────────────────────┬─────────────────────────────┘
                           │ Stream & Status APIs
                           ▼
┌────────────────────────────────────────────────────────┐
│            3D Frontend (Three.js + Web Audio)          │
│  - Real-time Frequency Analyser (Bass / Mids / Treble) │
│  - 3D DJ Character with beat-synced mixing animations  │
│  - Interactive LED Dance Floor with 12 3D dancers      │
│  - JMF Bar Lounge with cocktail-shaking bartender      │
│  - VIP Lounge corner sofas & illuminated coffee table  │
│  - Audio-reactive subwoofers & strobe lighting         │
│  - Multi-camera director presets + OrbitControls       │
└────────────────────────────────────────────────────────┘
```

### 1. 🎵 Streaming Backend (`server.js`)
* **Music Library**: Scans local audio files (`.mp3`, `.wav`, `.flac`, `.ogg`, `.m4a`, `.aac`, `.opus`).
* **Ultra-Resilient Metadata Engine**: Reads track title, artist, duration, bitrate, and embedded album art with sub-second non-blocking fallbacks.
* **Continuous AutoDJ**: Synchronized time advancement, live queue, track history, and next-track prefetching.
* **REST Endpoints**:
  - `GET /api/status`: Current track state, progress, queue, and playback timestamps.
  - `GET /api/stream`: Live audio stream with HTTP 206 Partial Content support.
  - `GET /api/track/:id/audio`: Direct stream by track ID.
  - `GET /api/cover/:id`: Embedded album art extracted from ID3 tags.
  - `POST /api/skip`: Skip to next track.
  - `POST /api/prev`: Return to previous track.

### 2. 🪩 3D Nightclub & Virtual DJ (`Three.js`)
* **3D Virtual DJ**:
  - Head bobs and grooves to the real-time audio BPM and bass energy.
  - Left arm scratches the spinning vinyl turntable back and forth.
  - Right arm tweaks mixer EQ knobs and filter sweeps.
* **Sound System**:
  - Dual club subwoofer towers with physically vibrating woofer cones responding to kick drums.
  - Tweeter rings glowing with high frequencies.
* **🕺 Interactive Dance Floor**:
  - 6×6 LED grid floor pulsing with audio spectrum colors.
  - Crowd of 12 distinct 3D dancers grooving with different dance styles (hands in the air, hip-hop rhythm, shuffle bounce, side-to-side waves).
* **🍸 JMF Bar Lounge**:
  - Illuminated bar counter with chrome footrest rail.
  - 3-tier glass shelves with glowing bottles and neon bar sign.
  - Animated 3D bartender shaking cocktails in rhythm.
* **👑 VIP Lounge**:
  - Sectional leather corner sofas with colorful cushions.
  - Low glass coffee table with glowing neon centerpiece.
* **Night Cityscape**:
  - Panoramic floor-to-ceiling studio window overlooking a nighttime skyscraper skyline with twinkling beacon lights.

### 3. 🎥 Camera Director Presets
Switch angles seamlessly using the top toolbar:
* 🎧 **DJ Focus**: Dynamic close-up of the DJ performing at the decks.
* 🕺 **Dance Floor**: Immersive view of the dance floor and crowd.
* 🍸 **Bar Lounge**: Close-up of the bar and bartender.
* 👑 **VIP Lounge**: Cozy perspective of the VIP sofa seating area.
* 🎛️ **Decks**: Overhead view of the spinning vinyl records and mixer console.
* 🛋️ **Full Club**: Wide panoramic overview of the entire venue.
* 🛸 **Cinema Cam**: Continuous cinematic 360° orbital camera path.

### 4. 🎨 Neon Lighting Themes
* 🟣 **Cyberpunk Neon**: Cyan / Magenta / Purple
* 🌅 **Sunset Lo-Fi**: Warm Amber / Sunset Orange / Rose
* 🟢 **Emerald Matrix**: Matrix Green / Neon Lime
* ⚡ **Electric Blue**: Royal Blue / Neon Violet / Hot Pink

---

## 🛠️ Tech Stack

* **Frontend**: Three.js (r170), Vite, Web Audio API, Vanilla CSS (Glassmorphism design system).
* **Backend**: Node.js, Express, `music-metadata`, CORS.
* **Typography**: Space Grotesk & Orbitron (Google Fonts).

---

## 📄 License
MIT License. Created with Antigravity for JMF Radio.
