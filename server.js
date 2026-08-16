import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as musicMetadata from 'music-metadata';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const MUSIC_DIR = process.env.MUSIC_DIR || 'D:\\Soundcloud';

app.use(cors());
app.use(express.json());

// Serve static frontend
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// Supported audio formats
const AUDIO_EXTENSIONS = new Set(['.mp3', '.wav', '.ogg', '.flac', '.m4a', '.aac', '.wma', '.opus']);

let playlist = [];
let currentIndex = 0;
let trackStartTime = Date.now();
let trackDuration = 180;
let isRadioRunning = false;
let history = [];

// Helper: Format fallback title/artist from filename
function parseFilename(filename) {
  const nameWithoutExt = path.parse(filename).name;
  let cleanName = nameWithoutExt.replace(/^[0-9\s._\-()]+/, '').trim();
  if (cleanName.includes(' - ')) {
    const parts = cleanName.split(' - ');
    return {
      artist: parts[0].trim(),
      title: parts.slice(1).join(' - ').trim()
    };
  }
  return {
    artist: 'JMF Radio',
    title: cleanName || nameWithoutExt
  };
}

// Recursive file scanner
async function scanDirectory(dir) {
  const results = [];
  try {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        const subFiles = await scanDirectory(fullPath);
        results.push(...subFiles);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (AUDIO_EXTENSIONS.has(ext)) {
          results.push(fullPath);
        }
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err.message);
  }
  return results;
}

// Fisher-Yates Shuffle
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Extract metadata with strict timeout and fallback
async function getTrackMetadata(filePath, id) {
  const fallback = parseFilename(path.basename(filePath));
  let statSize = 0;
  try {
    const st = fs.statSync(filePath);
    statSize = st.size;
  } catch (e) {}

  // Estimated duration from filesize (assuming ~192kbps)
  const estimatedDuration = statSize > 0 ? Math.round(statSize / (24 * 1024)) : 180;

  let meta = {
    id,
    path: filePath,
    filename: path.basename(filePath),
    title: fallback.title,
    artist: fallback.artist,
    album: 'SoundCloud Collection',
    duration: Math.max(60, Math.min(3600, estimatedDuration)),
    year: null,
    bitrate: 192,
    bpm: null,
    hasCover: false
  };

  // Parse header only (duration: false, skipCovers: true for super-fast non-blocking parse)
  const parsePromise = musicMetadata.parseFile(filePath, { duration: false, skipCovers: true });
  const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 500));

  try {
    const mm = await Promise.race([parsePromise, timeoutPromise]);
    if (mm.common.title) meta.title = mm.common.title;
    if (mm.common.artist) meta.artist = mm.common.artist;
    if (mm.common.album) meta.album = mm.common.album;
    if (mm.common.year) meta.year = mm.common.year;
    if (mm.common.bpm) meta.bpm = Math.round(mm.common.bpm * 10) / 10;
    if (mm.format.duration) meta.duration = Math.round(mm.format.duration * 10) / 10;
    if (mm.format.bitrate) meta.bitrate = Math.round(mm.format.bitrate / 1000);
  } catch (err) {
    // Timeout or format warning, safely use fallback
  }

  return meta;
}

// Initialize playlist
async function initRadio() {
  console.log(`\n🎧 [JMF Radio] Scanning music library at: ${MUSIC_DIR}`);
  const files = await scanDirectory(MUSIC_DIR);
  console.log(`📁 Found ${files.length} audio tracks in directory.`);

  if (files.length === 0) {
    console.warn('⚠️ No audio files found in the specified folder.');
    return;
  }

  const shuffledPaths = shuffleArray(files);
  playlist = [];

  for (let i = 0; i < shuffledPaths.length; i++) {
    const fn = path.basename(shuffledPaths[i]);
    const parsed = parseFilename(fn);
    playlist.push({
      id: i,
      path: shuffledPaths[i],
      filename: fn,
      title: parsed.title,
      artist: parsed.artist,
      duration: 180,
      loaded: false
    });
  }

  currentIndex = 0;
  await playTrack(currentIndex);
  isRadioRunning = true;

  // Auto-advance check
  setInterval(checkTrackAdvancement, 1000);
}

async function playTrack(index) {
  if (playlist.length === 0) return;
  if (index >= playlist.length) {
    playlist = shuffleArray(playlist);
    currentIndex = 0;
    index = 0;
  }

  currentIndex = index;
  const current = playlist[currentIndex];

  if (!current.loaded) {
    const fullMeta = await getTrackMetadata(current.path, current.id);
    Object.assign(current, fullMeta, { loaded: true });
  }

  trackDuration = current.duration || 180;
  trackStartTime = Date.now();

  console.log(`\n▶️ [NOW PLAYING ON JMF RADIO] (#${currentIndex + 1}/${playlist.length})`);
  console.log(`   🎵 ${current.artist} - ${current.title}`);
  console.log(`   ⏱️ Duration: ${Math.floor(trackDuration / 60)}:${Math.floor(trackDuration % 60).toString().padStart(2, '0')}`);

  history.unshift({
    title: current.title,
    artist: current.artist,
    time: new Date().toLocaleTimeString()
  });
  if (history.length > 10) history.pop();
}

function checkTrackAdvancement() {
  if (!isRadioRunning || playlist.length === 0) return;
  const elapsed = (Date.now() - trackStartTime) / 1000;
  if (elapsed >= trackDuration) {
    playTrack((currentIndex + 1) % playlist.length);
  }
}

// --- API ENDPOINTS ---

app.get(['/api/status', '/api/track'], (req, res) => {
  if (playlist.length === 0) {
    return res.json({ isPlaying: false, totalTracks: 0, track: null, queue: [] });
  }

  const current = playlist[currentIndex];
  const elapsed = Math.min(trackDuration, (Date.now() - trackStartTime) / 1000);

  const queue = [];
  for (let i = 1; i <= 5; i++) {
    const nextIdx = (currentIndex + i) % playlist.length;
    queue.push({
      id: playlist[nextIdx].id,
      title: playlist[nextIdx].title,
      artist: playlist[nextIdx].artist,
      duration: playlist[nextIdx].duration || 180,
      bpm: playlist[nextIdx].bpm || null
    });
  }

  const trackObj = {
    id: current.id,
    title: current.title,
    artist: current.artist,
    album: current.album || 'SoundCloud Collection',
    duration: current.duration || 180,
    bpm: current.bpm || null,
    year: current.year,
    bitrate: current.bitrate || 192,
    hasCover: !!current.hasCover
  };

  res.json({
    isPlaying: true,
    currentIndex,
    totalTracks: playlist.length,
    elapsedTime: elapsed,
    serverProgress: elapsed,
    serverTime: Date.now(),
    track: trackObj,
    currentTrack: trackObj,
    queue,
    history
  });
});

app.post(['/api/skip', '/api/next'], async (req, res) => {
  if (playlist.length === 0) return res.json({ success: false });
  await playTrack((currentIndex + 1) % playlist.length);
  const current = playlist[currentIndex];
  const queue = [];
  for (let i = 1; i <= 5; i++) {
    const nextIdx = (currentIndex + i) % playlist.length;
    queue.push({
      id: playlist[nextIdx].id,
      title: playlist[nextIdx].title,
      artist: playlist[nextIdx].artist,
      duration: playlist[nextIdx].duration || 180,
      bpm: playlist[nextIdx].bpm || null
    });
  }
  res.json({
    success: true,
    currentIndex,
    totalTracks: playlist.length,
    track: current,
    currentTrack: current,
    queue
  });
});

app.get('/api/stream', (req, res) => {
  if (playlist.length === 0) {
    return res.status(404).send('No tracks in playlist');
  }

  const current = playlist[currentIndex];
  const filePath = current.path;

  if (!fs.existsSync(filePath)) {
    return res.status(404).send('File not found');
  }

  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.range;

  const ext = path.extname(filePath).toLowerCase();
  const contentTypeMap = {
    '.mp3': 'audio/mpeg',
    '.ogg': 'audio/ogg',
    '.wav': 'audio/wav',
    '.flac': 'audio/flac',
    '.m4a': 'audio/mp4',
    '.aac': 'audio/aac'
  };
  const contentType = contentTypeMap[ext] || 'audio/mpeg';

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunksize = (end - start) + 1;
    const file = fs.createReadStream(filePath, { start, end });
    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': contentType,
    });
    file.pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Length': fileSize,
      'Content-Type': contentType,
      'Accept-Ranges': 'bytes'
    });
    fs.createReadStream(filePath).pipe(res);
  }
});

app.get('/api/track/:id/audio', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const track = playlist.find(t => t.id === id);
  if (!track || !fs.existsSync(track.path)) {
    return res.status(404).send('Track not found');
  }

  const stat = fs.statSync(track.path);
  const fileSize = stat.size;
  const range = req.headers.range;
  const ext = path.extname(track.path).toLowerCase();
  const contentType = ext === '.flac' ? 'audio/flac' : ext === '.ogg' ? 'audio/ogg' : ext === '.wav' ? 'audio/wav' : 'audio/mpeg';

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunksize = (end - start) + 1;
    const file = fs.createReadStream(track.path, { start, end });
    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': contentType,
    });
    file.pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Length': fileSize,
      'Content-Type': contentType,
      'Accept-Ranges': 'bytes'
    });
    fs.createReadStream(track.path).pipe(res);
  }
});

app.get('/api/cover/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const track = playlist.find(t => t.id === id);
  if (!track || !fs.existsSync(track.path)) {
    return res.status(404).send('Not found');
  }

  try {
    const parsePromise = musicMetadata.parseFile(track.path);
    const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 1000));
    const mm = await Promise.race([parsePromise, timeoutPromise]);
    
    if (mm.common.picture && mm.common.picture.length > 0) {
      const picture = mm.common.picture[0];
      res.set('Content-Type', picture.format);
      return res.send(picture.data);
    }
  } catch (err) {}

  res.status(404).send('No cover art found');
});

app.post('/api/skip', async (req, res) => {
  if (playlist.length === 0) return res.json({ success: false });
  await playTrack((currentIndex + 1) % playlist.length);
  res.json({ success: true, currentIndex, currentTrack: playlist[currentIndex] });
});

app.post('/api/prev', async (req, res) => {
  if (playlist.length === 0) return res.json({ success: false });
  const prevIdx = (currentIndex - 1 + playlist.length) % playlist.length;
  await playTrack(prevIdx);
  res.json({ success: true, currentIndex, currentTrack: playlist[currentIndex] });
});

app.post('/api/rescan', async (req, res) => {
  await initRadio();
  res.json({ success: true, totalTracks: playlist.length });
});

// Fallback SPA routing
app.get('*', (req, res) => {
  const distIndex = path.join(__dirname, 'dist', 'index.html');
  if (fs.existsSync(distIndex)) {
    res.sendFile(distIndex);
  } else {
    res.sendFile(path.join(__dirname, 'index.html'));
  }
});

app.listen(PORT, async () => {
  console.log(`\n======================================================`);
  console.log(`🚀 [JMF Radio Server] running on http://localhost:${PORT}`);
  console.log(`🎧 Web 3D Interface: http://localhost:${PORT}`);
  console.log(`📡 Stream URL:       http://localhost:${PORT}/api/stream`);
  console.log(`======================================================\n`);
  await initRadio();
});
