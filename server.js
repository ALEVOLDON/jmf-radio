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
const CACHE_FILE = path.join(__dirname, 'genre_library_cache.json');

// Genre Knowledge Base & Smart Categorization
const GENRE_RULES = [
  {
    id: 'techno',
    name: '⚡ TECHNO & ACID',
    icon: '⚡',
    color: '#00f0ff',
    defaultBpm: 128,
    keywords: [
      'techno', 'acid', 'tolkachev', 'mork', 'mörk', 'tresor', 'berghain', 'semantica',
      'token', 'killekill', 'blawan', 'surgeon', 'detach', 'cravo', 'dvs1', 'rodhad', 'rødhåd',
      'ostgut', 'modular', 'industrial', 'dark', 'pole', 'recondite', 'avalon', 'shift',
      'matrix', 'hardwax', 'krz', 'phase', 'clique', 'stomp', 'dystopia', 'concrete',
      'scifi', 'pessimist', 'die orakel', 'crf007', 'antigone'
    ]
  },
  {
    id: 'house',
    name: '🌴 HOUSE & DEEP',
    icon: '🌴',
    color: '#ff6b35',
    defaultBpm: 124,
    keywords: [
      'house', 'deep', 'lehult', 'lobster theremin', 'giegling', 'smallville', 'disco',
      'funk', 'groove', 'garage', 'afro', 'chicago', 'detroit', 'kerri', 'moodymann',
      'parrish', 'mall grab', 'peggy', 'ross from friends', 'boring', 'four tet', 'floating points',
      'bicep', 'dusky', 'keinemusik', 'soul', 'vocal', 'summer', 'beach', 'sunset', 'filter',
      'qc records', 'qnete', 'carmel', 'fur coat', 'parallel'
    ]
  },
  {
    id: 'bass',
    name: '🛸 UK BASS & BREAKS',
    icon: '🛸',
    color: '#a855f7',
    defaultBpm: 168,
    keywords: [
      'overmono', 'jungle', 'dnb', 'drum & bass', 'drum and bass', 'breakbeat', 'breaks',
      'dubstep', 'ukg', '2-step', 'laksa', 'bastakiya', 'boddika', 'joy orbison', 'skee mask',
      'djrum', 'special request', 'calibre', 'goldie', 'bukem', 'sherelle', 'sulley', 'rave',
      'bass', 'sub', 'grime', 'dubplate', 'tapes', 'amen', 'roller', 'human pitch', 'bjika'
    ]
  },
  {
    id: 'lofi',
    name: '☕ LO-FI & CHILL',
    icon: '☕',
    color: '#ffd000',
    defaultBpm: 84,
    keywords: [
      'lo-fi', 'lofi', 'ambient', 'chill', 'downtempo', 'trip-hop', 'beats', 'relax',
      'drone', 'tape', 'sleep', 'snow', 'forest', 'space', 'calm', 'dream', 'piano',
      'acoustic', 'nostalgia', 'meditation', 'morning', 'night', 'rain', 'slow', 'htrk'
    ]
  },
  {
    id: 'electro',
    name: '🔮 ELECTRO & SYNTH',
    icon: '🔮',
    color: '#00ff88',
    defaultBpm: 132,
    keywords: [
      'electro', 'synth', 'synthwave', 'retrowave', 'cyberpunk', '214', 'helios',
      'drexciya', 'aux 88', 'dopplereffekt', 'gesloten cirkel', 'vocoder', '808', 'analog',
      'robotic', 'sci-fi', 'future', 'neon', 'wave', 'cyber', 'uncanny valley'
    ]
  }
];

let playlist = [];
let genreCache = {};
let activeGenreFilter = 'all';
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

// Smart Genre Classifier
function classifyGenre(title, artist, filename, album) {
  const combinedText = `${title} ${artist} ${filename} ${album}`.toLowerCase();
  
  for (const genre of GENRE_RULES) {
    for (const kw of genre.keywords) {
      if (combinedText.includes(kw)) {
        return {
          id: genre.id,
          name: genre.name,
          icon: genre.icon,
          color: genre.color,
          bpm: genre.defaultBpm + Math.floor((Math.random() - 0.5) * 6)
        };
      }
    }
  }

  // Fallback deterministic distribution based on string hash
  let hash = 0;
  for (let i = 0; i < combinedText.length; i++) {
    hash = ((hash << 5) - hash) + combinedText.charCodeAt(i);
    hash |= 0;
  }
  const fallbackGenres = ['techno', 'house', 'bass', 'lofi', 'electro'];
  const chosenId = fallbackGenres[Math.abs(hash) % fallbackGenres.length];
  const g = GENRE_RULES.find(x => x.id === chosenId);
  return {
    id: g.id,
    name: g.name,
    icon: g.icon,
    color: g.color,
    bpm: g.defaultBpm + Math.floor((Math.random() - 0.5) * 6)
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

// Load / Save Genre Cache
function loadGenreCache() {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const raw = fs.readFileSync(CACHE_FILE, 'utf8');
      genreCache = JSON.parse(raw);
    }
  } catch (e) {
    genreCache = {};
  }
}

function saveGenreCache() {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(genreCache, null, 2), 'utf8');
  } catch (e) {
    console.error('Error saving genre cache:', e.message);
  }
}

// Extract metadata with strict timeout and fallback
async function getTrackMetadata(filePath, id) {
  const fallback = parseFilename(path.basename(filePath));
  let statSize = 0;
  try {
    const st = fs.statSync(filePath);
    statSize = st.size;
  } catch (e) {}

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
    hasCover: false,
    genre: null
  };

  // Check cache first for instant load
  if (genreCache[filePath]) {
    Object.assign(meta, genreCache[filePath]);
    return meta;
  }

  const parsePromise = musicMetadata.parseFile(filePath, { duration: false, skipCovers: true });
  const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 400));

  try {
    const mm = await Promise.race([parsePromise, timeoutPromise]);
    if (mm.common.title) meta.title = mm.common.title;
    if (mm.common.artist) meta.artist = mm.common.artist;
    if (mm.common.album) meta.album = mm.common.album;
    if (mm.common.year) meta.year = mm.common.year;
    if (mm.common.bpm) meta.bpm = Math.round(mm.common.bpm * 10) / 10;
    if (mm.format.duration) meta.duration = Math.round(mm.format.duration * 10) / 10;
    if (mm.format.bitrate) meta.bitrate = Math.round(mm.format.bitrate / 1000);
  } catch (err) {}

  // Smart Genre Assignment
  const g = classifyGenre(meta.title, meta.artist, meta.filename, meta.album);
  meta.genre = g;
  if (!meta.bpm) meta.bpm = g.bpm;

  genreCache[filePath] = {
    title: meta.title,
    artist: meta.artist,
    album: meta.album,
    duration: meta.duration,
    bpm: meta.bpm,
    genre: meta.genre
  };

  return meta;
}

// Initialize playlist & analyze library
async function initRadio() {
  console.log(`\n🎧 [JMF Radio] Scanning music library at: ${MUSIC_DIR}`);
  loadGenreCache();
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
    const cached = genreCache[shuffledPaths[i]];
    const g = cached?.genre || classifyGenre(parsed.title, parsed.artist, fn, '');

    playlist.push({
      id: i,
      path: shuffledPaths[i],
      filename: fn,
      title: cached?.title || parsed.title,
      artist: cached?.artist || parsed.artist,
      duration: cached?.duration || 180,
      bpm: cached?.bpm || g.bpm,
      genre: g,
      loaded: !!cached
    });
  }

  // Save cache asynchronously
  setTimeout(saveGenreCache, 2000);

  currentIndex = 0;
  await playTrack(currentIndex);
  isRadioRunning = true;

  // Auto-advance check
  setInterval(checkTrackAdvancement, 1000);
}

// Filter playlist by active genre
function getFilteredIndices(genreId = activeGenreFilter) {
  if (genreId === 'all') {
    return playlist.map((_, idx) => idx);
  }
  const indices = [];
  for (let i = 0; i < playlist.length; i++) {
    if (playlist[i].genre && playlist[i].genre.id === genreId) {
      indices.push(i);
    }
  }
  return indices.length > 0 ? indices : playlist.map((_, idx) => idx);
}

function getNextFilteredIndex() {
  const filtered = getFilteredIndices(activeGenreFilter);
  const currentPos = filtered.indexOf(currentIndex);
  if (currentPos !== -1 && currentPos < filtered.length - 1) {
    return filtered[currentPos + 1];
  }
  return filtered[Math.floor(Math.random() * filtered.length)];
}

async function playTrack(index) {
  if (playlist.length === 0) return;
  if (index >= playlist.length || index < 0) {
    index = getNextFilteredIndex();
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
  console.log(`   🎵 ${current.artist} - ${current.title} [${current.genre?.name || 'MUSIC'}]`);
  console.log(`   ⏱️ Duration: ${Math.floor(trackDuration / 60)}:${Math.floor(trackDuration % 60).toString().padStart(2, '0')} | ${current.bpm || 128} BPM`);

  history.unshift({
    title: current.title,
    artist: current.artist,
    genre: current.genre,
    bpm: current.bpm,
    time: new Date().toLocaleTimeString()
  });
  if (history.length > 10) history.pop();
}

function checkTrackAdvancement() {
  if (!isRadioRunning || playlist.length === 0) return;
  const elapsed = (Date.now() - trackStartTime) / 1000;
  if (elapsed >= trackDuration) {
    playTrack(getNextFilteredIndex());
  }
}

// --- API ENDPOINTS ---

// 1. Get available genre filters with track counts
app.get('/api/genres', (req, res) => {
  const counts = { all: playlist.length, techno: 0, house: 0, bass: 0, lofi: 0, electro: 0 };
  for (const track of playlist) {
    if (track.genre?.id && counts[track.genre.id] !== undefined) {
      counts[track.genre.id]++;
    }
  }

  const list = [
    { id: 'all', name: '🔥 ALL STYLES', icon: '🔥', count: counts.all, color: '#00f0ff' },
    ...GENRE_RULES.map(g => ({
      id: g.id,
      name: g.name,
      icon: g.icon,
      count: counts[g.id] || 0,
      color: g.color
    }))
  ];

  res.json({ genres: list, activeGenre: activeGenreFilter });
});

// 2. Select active radio stream genre filter
app.post('/api/genre/select', async (req, res) => {
  const { genre } = req.body;
  if (genre && (genre === 'all' || GENRE_RULES.some(g => g.id === genre))) {
    activeGenreFilter = genre;
    // Advance to a track from this genre
    const nextIdx = getNextFilteredIndex();
    await playTrack(nextIdx);
    return res.json({ success: true, activeGenre: activeGenreFilter, currentTrack: playlist[currentIndex] });
  }
  res.status(400).json({ error: 'Invalid genre' });
});

app.get(['/api/status', '/api/track'], (req, res) => {
  if (playlist.length === 0) {
    return res.json({ isPlaying: false, totalTracks: 0, track: null, queue: [] });
  }

  const current = playlist[currentIndex];
  const elapsed = Math.min(trackDuration, (Date.now() - trackStartTime) / 1000);

  const filtered = getFilteredIndices(activeGenreFilter);
  const curPos = filtered.indexOf(currentIndex);
  const queue = [];

  for (let i = 1; i <= 6; i++) {
    const qIdx = filtered[(curPos + i) % filtered.length];
    if (playlist[qIdx]) {
      queue.push({
        id: playlist[qIdx].id,
        title: playlist[qIdx].title,
        artist: playlist[qIdx].artist,
        duration: playlist[qIdx].duration || 180,
        bpm: playlist[qIdx].bpm || 128,
        genre: playlist[qIdx].genre || null
      });
    }
  }

  const trackObj = {
    id: current.id,
    title: current.title,
    artist: current.artist,
    album: current.album || 'SoundCloud Collection',
    duration: current.duration || 180,
    bpm: current.bpm || 128,
    year: current.year,
    bitrate: current.bitrate || 192,
    hasCover: !!current.hasCover,
    genre: current.genre || null
  };

  res.json({
    isPlaying: true,
    currentIndex,
    totalTracks: playlist.length,
    activeGenre: activeGenreFilter,
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
  await playTrack(getNextFilteredIndex());
  const current = playlist[currentIndex];
  res.json({
    success: true,
    currentIndex,
    totalTracks: playlist.length,
    activeGenre: activeGenreFilter,
    track: current,
    currentTrack: current
  });
});

// Audio streaming helper
function streamAudioFile(filePath, req, res) {
  if (!filePath || !fs.existsSync(filePath)) {
    return res.status(404).send('Audio file not found');
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
    '.aac': 'audio/aac',
    '.wma': 'audio/x-ms-wma',
    '.opus': 'audio/opus'
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
      'Access-Control-Allow-Origin': '*'
    });
    file.pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Length': fileSize,
      'Content-Type': contentType,
      'Accept-Ranges': 'bytes',
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(filePath).pipe(res);
  }
}

// Stream specific track by ID
app.get(['/api/stream/:id', '/api/track/:id/audio'], (req, res) => {
  const id = parseInt(req.params.id, 10);
  const track = playlist.find(t => t.id === id);
  if (!track) {
    return res.status(404).send('Track ID not found');
  }
  streamAudioFile(track.path, req, res);
});

// Stream current live radio track
app.get('/api/stream', (req, res) => {
  if (playlist.length === 0) {
    return res.status(404).send('No tracks in playlist');
  }
  const current = playlist[currentIndex];
  streamAudioFile(current.path, req, res);
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
