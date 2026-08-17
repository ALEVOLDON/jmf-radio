# 🎧 JMF Radio — Детальный Анализ Проекта

## TL;DR Оценка
> **8.5 / 10** — Технически сложный, амбициозный проект с превосходным продуктовым видением, живой 3D-атмосферой и глубокой аудио-инженерией. Несколько системных узких мест и архитектурных долгов, которые можно исправить.

---

## 📁 Структура Проекта

```
jmf-radio/
├── server.js          # Node.js Express backend (612 строк)
├── index.html         # Monolithic SPA HTML (~55kb!)
├── src/
│   ├── main.js        # App entrypoint + render loop (65 строк — чисто)
│   ├── style.css      # CSS (3444 строки, 70kb)
│   ├── audio/
│   │   └── AudioEngine.js   # Dual-deck audio (808 строк)
│   ├── scene/
│   │   ├── DJScene.js       # Three.js orchestrator (183 строки)
│   │   ├── Room.js          # Club architecture (832 строки)
│   │   ├── DJCharacter.js   # Pioneer decks + DJ avatar (483 строки)
│   │   ├── BarArea.js       # Bar counter + bottles (333 строки)
│   │   ├── DanceFloor.js    # LED grid + 12 dancers (260 строк)
│   │   ├── SoundSystem.js   # Speaker towers (170 строк)
│   │   └── Lighting.js      # Lights + lasers (~270 строк)
│   └── ui/
│       └── UIController.js  # UI logic (1482 строки — монолит)
├── blender/
│   ├── jmf_club_scene.blend
│   ├── JMF_Nightclub_Full_Scene.blend
│   └── renders/             # PNG рендеры всех ракурсов
└── public/                  # Static assets
```

**Итог:** Проект хорошо структурирован на уровне папок. Разделение на `audio/`, `scene/`, `ui/` правильное.

---

## ⚙️ Backend: `server.js` — **9 / 10**

### Сильные стороны
- ✅ **HTTP 206 Partial Content** для стриминга — профессиональная реализация с полной поддержкой Range-запросов, работает в Safari и iOS.
- ✅ **Умная классификация жанров** по 5 категориям с keyword-matching и детерминированным hash-fallback для неизвестных треков — оригинальное решение.
- ✅ **Многоуровневый кэш метаданных** (`genre_library_cache.json`) — парсинг ID3 только один раз, мгновенная загрузка при следующем запуске.
- ✅ **Promise.race() с таймаутом 400ms** при парсинге метаданных — защита от зависания на повреждённых файлах. Хорошо продумано.
- ✅ **Рекурсивный сканер** с поддержкой 8 форматов: MP3, WAV, OGG, FLAC, M4A, AAC, WMA, OPUS.
- ✅ **Fisher-Yates shuffle** для перемешивания плейлиста.

### Проблемы
- ⚠️ **Дублированный `/api/skip`** — маршрут определён дважды (строки 473 и 576). Второй переопределяет первый, первый имеет лучшую логику (genre-aware). Нужно удалить дубль.
- ⚠️ **`genre_library_cache.json` в корне** — файл коммитится в Git и содержит абсолютные пути файловой системы (`D:\\Soundcloud\\...`). Его нужно добавить в `.gitignore`.
- ⚠️ **`albumArt` без кэша** — `/api/cover/:id` парсит файл заново каждый запрос, без кэширования обложек в памяти.
- ⚠️ **Глобальные переменные состояния** (`playlist`, `currentIndex`, `trackStartTime`) — потокобезопасно для Node.js (однопоточный), но хрупко. При масштабировании нужен стейт-менеджмент.

---

## 🎵 AudioEngine: `src/audio/AudioEngine.js` — **9.5 / 10**

> Это безусловно **самый сильный модуль** проекта. Очень профессиональная реализация Web Audio API.

### Сильные стороны
- ✅ **Настоящий dual-deck микшер** с полной цепочкой аудио-нод для каждой деки: `EqLow → EqMid → EqHigh → FilterSweep → XFaderGain → ChGain → MasterGain → Analyser → Destination`.
- ✅ **FFT анализатор** (fftSize: 512) с отдельными полосами bass/mids/treble и beat detection с калибровкой threshold.
- ✅ **Кроссфейд 8 секунд** с плавным нарастанием/затуханием через `AudioParam.setValueAtTime()`.
- ✅ **Vinyl scratching** с поддержкой мышиного drag, изменением `playbackRate` в реальном времени и аудио-скраббингом.
- ✅ **3-полосный эквалайзер** (Low/Mid/High) через `BiquadFilter` и 5 пресетов (FLAT, BASS BOOST, CLUB, VOCAL, ELECTRONIC).
- ✅ **Корректная обработка AudioContext Autoplay Policy** — контекст создаётся только после пользовательского взаимодействия.

### Проблемы
- ⚠️ **Один огромный класс в 808 строк** — можно вынести DeckController, CrossfadeEngine, BeatDetector в отдельные классы.
- ⚠️ **BPM detection** через интервалы между пиками — алгоритм неточен для сложных жанров (Lo-Fi, DnB). Было бы лучше использовать FFT onset detection.

---

## 🎬 3D Сцена: `src/scene/` — **8 / 10**

### `DJScene.js` (183 строки) — **10 / 10**
- ✅ **Идеальный оркестратор** — минимальный, чистый, делегирует всё подсистемам.
- ✅ **ACESFilmic tonemapping** с `exposure: 1.15` — кинематографическая цветовая гамма.
- ✅ **Exponential fog** `FogExp2(0x07070b, 0.035)` для атмосферы.
- ✅ **8 camera presets** с плавным `lerp`-переходом (factor 0.07) и отдельным cinematic orbit режимом.
- ✅ **Safe fallback** для `audioAnalysis` объекта — не упадёт при отсутствии аудио.

### `Room.js` (832 строки) — **7 / 10**
- ✅ 45 небоскрёбов за окном с рандомизированными маяками.
- ✅ VIP лаунж, акустические панели, неоновые вывески, LED-экран сцены.
- ⚠️ Файл слишком большой — часть функций (Skyline, VIP, Neons) можно вынести в отдельные файлы.
- ⚠️ Создание материалов и геометрий внутри конструктора без переиспользования — риск утечек памяти GPU при хотрелоаде.

### `DJCharacter.js` (483 строки) — **8.5 / 10**
- ✅ Очень детальный Pioneer CDJ-3000 с джог-вилами, пэдами, LCD экранами.
- ✅ Анимация аватара DJ синхронизирована с bass/beat.
- ⚠️ Геометрии всех деталей пульта не объединены (`BufferGeometryUtils.mergeBufferGeometries`) — каждый болтик это отдельный draw call. Это ~40-60 лишних draw calls.

### `Lighting.js` (~270 строк) — **8 / 10**
- ✅ Новые 6 лазерных лучей с анимацией веера через bass/beat.
- ✅ Strobe flash при пиках баса.
- ✅ Floating particle system (450 частиц) с восходящей анимацией.
- ⚠️ 4 SpotLight + 1 AreaLight — много shadow-casting источников. На мобильных это дорого.

---

## 🎨 CSS & Дизайн: `src/style.css` — **7.5 / 10**

### Сильные стороны
- ✅ **CSS Custom Properties** (`--deck-a-cyan`, `--panel-bg` и др.) — правильный дизайн-токен подход.
- ✅ **Cyberpunk палитра** — Orbitron + Space Grotesk, правильная типографика для продукта.
- ✅ **backdrop-filter: blur(20px)** на панелях — стеклянный эффект без JavaScript.
- ✅ **Responsive breakpoints** на 820px, 480px и landscape — хорошее покрытие устройств.
- ✅ **Additive blending** через CSS для светящихся элементов.

### Проблемы
- ⚠️ **3444 строки в одном файле** — критический размер. Нужно разбить на модули: `_variables.css`, `_deck.css`, `_mixer.css`, `_scene.css`, `_mobile.css`.
- ⚠️ **Дублирование стилей** — `.led`, `.jog`, `.deck-panel` определены несколько раз с незначительными вариациями.
- ⚠️ **Magic numbers без комментариев** — `height: 36px`, `margin-top: -2px` и т.п. без объяснения.
- ⚠️ **`overflow: hidden` на body + `position: fixed`** — агрессивная блокировка скролла ломает некоторые пользовательские сценарии на мобильных браузерах.

---

## 📋 `index.html` — **6 / 10**

- ⚠️ **55kb HTML — монолит!** Вся разметка для DJ-пульта, микшера, VIP-меню, мобильного заголовка в одном файле. Это трудно поддерживать.
- ✅ Google Fonts подключены через `preconnect` — правильная оптимизация загрузки.
- ✅ Semantically верная структура (`header`, `main`, `section`).
- ⚠️ Много inline стилей и `display:none` вместо CSS-классов.

---

## 🏗️ Архитектура в целом

```
                     ┌─────────────────────┐
                     │   main.js (65 LOC)  │  ← Идеальная точка входа
                     └──────┬──────────────┘
                     ┌──────▼──────────────┐
         ┌───────────┤  AudioEngine (808)  │  ← Лучший модуль
         │           └─────────────────────┘
         │           ┌─────────────────────┐
         └──────────►│  UIController(1482) │  ← Монолит, нужно разбить
                     └──────┬──────────────┘
                            │
                     ┌──────▼──────────────┐
                     │   DJScene (183)     │  ← Идеальный оркестратор
                     └──────┬──────────────┘
         ┌───────────┬──────┼───────────┬──────────┬──────────┐
         ▼           ▼      ▼           ▼          ▼          ▼
       Room      DJChar  Lighting  DanceFloor  BarArea  SoundSystem
      (832)      (483)   (270)      (260)       (333)    (170)
```

---

## 🔴 Топ-5 Проблем (Критических)

| # | Проблема | Файл | Приоритет |
|---|----------|------|-----------|
| 1 | `UIController.js` — 1482 строки, класс-бог | `src/ui/UIController.js` | 🔴 Высокий |
| 2 | `index.html` — 55kb монолитный HTML | `index.html` | 🔴 Высокий |
| 3 | `genre_library_cache.json` попадает в git | `.gitignore` | 🟡 Средний |
| 4 | Дублированный маршрут `/api/skip` | `server.js:576` | 🟡 Средний |
| 5 | CSS — 3444 строки в одном файле | `src/style.css` | 🟡 Средний |

---

## 🟢 Топ-5 Сильных Сторон

| # | Достижение |
|---|-----------|
| 1 | **AudioEngine** — профессиональная Web Audio API архитектура уровня реальных DJ-приложений |
| 2 | **DJScene.js** — идеальный оркестратор, чистая архитектура подсистем |
| 3 | **HTTP 206 streaming** с поддержкой Range requests — работает на всех браузерах включая Safari |
| 4 | **Smart genre classifier** с keyword-matching + hash-based deterministic fallback |
| 5 | **8 Camera presets** с плавными `lerp` переходами и cinematic orbit режимом |

---

## 💡 Рекомендации для Следующих Шагов

### Быстрые улучшения (1-2 часа)
1. Добавить `genre_library_cache.json` в `.gitignore`.
2. Удалить дублированный `/api/skip` в `server.js`.
3. Объединить `cover.jpg` и `cover.png` — оставить один.

### Средние улучшения (1-2 дня)
4. Разбить `UIController.js` на `DeckController.js`, `MixerController.js`, `SceneController.js`.
5. Разбить `style.css` на модульные файлы и собрать через Vite CSS imports.
6. Добавить `BufferGeometryUtils.mergeGeometries()` для DJ-пульта (снизит draw calls с ~60 до ~5).

### Долгосрочные улучшения
7. TypeScript — проект достаточно большой, что типизация будет ощутимо помогать.
8. WebGL instancing для небоскрёбов и бутылок (сейчас 45 + 42 = 87 отдельных mesh-объектов).
9. Добавить PWA-манифест для установки на iOS/Android.
10. Unit тесты для AudioEngine и server.js (Jest/Vitest).
