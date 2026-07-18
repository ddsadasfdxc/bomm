/**
 * 温若 · 水墨音乐播放器
 * 连接自部署的 NeteaseCloudMusicApi (Vercel)
 */

const API_BASE = 'https://ncm-api-ochre.vercel.app';
const PLAYLIST_ID = '12675557343';

let songs = [];
let currentIndex = -1;
let audio = null;
let isPlaying = false;
let panelOpen = false;

// ── DOM refs ──
let musicBtn, musicPanel, musicList, playerBar, playBtn;
let prevBtn, nextBtn, progressFill, progressBar, timeCurrent, timeTotal;
let playlistName, songCount, musicCover, trackInfo, trackArtist;

export function initMusicPlayer() {
  createWidget();
  bindEvents();
}

function createWidget() {
  const widget = document.createElement('div');
  widget.className = 'music-widget';
  widget.innerHTML = `
    <div class="music-panel" id="musicPanel">
      <div class="music-panel-inner">
        <div class="music-header">
          <img class="music-cover" id="musicCover" src="" alt="cover">
          <div class="music-header-info">
            <div class="music-playlist-name" id="playlistName">加载中…</div>
            <div class="music-song-count" id="songCount"></div>
          </div>
        </div>
        <div class="music-list-container">
          <div class="music-list" id="musicList"></div>
        </div>
        <div class="music-player-bar" id="playerBar">
          <div class="music-track-info">
            <div class="music-track-name" id="trackInfo">—</div>
            <div class="music-track-artist" id="trackArtist"></div>
          </div>
          <div class="music-progress">
            <span class="music-time" id="timeCurrent">0:00</span>
            <div class="music-progress-bar" id="progressBar">
              <div class="music-progress-fill" id="progressFill"></div>
            </div>
            <span class="music-time" id="timeTotal">0:00</span>
          </div>
          <div class="music-controls">
            <button class="mc-btn" id="prevBtn" title="上一首">
              <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
            </button>
            <button class="mc-btn mc-play" id="playBtn" title="播放">
              <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>
            </button>
            <button class="mc-btn" id="nextBtn" title="下一首">
              <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M16 6h2v12h-2zm-10 6l8.5 6V6z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <button class="music-btn" id="musicBtn" title="音乐播放器">
      <svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
    </button>`;
  document.body.appendChild(widget);

  musicBtn = document.getElementById('musicBtn');
  musicPanel = document.getElementById('musicPanel');
  musicList = document.getElementById('musicList');
  playerBar = document.getElementById('playerBar');
  playBtn = document.getElementById('playBtn');
  prevBtn = document.getElementById('prevBtn');
  nextBtn = document.getElementById('nextBtn');
  progressFill = document.getElementById('progressFill');
  progressBar = document.getElementById('progressBar');
  timeCurrent = document.getElementById('timeCurrent');
  timeTotal = document.getElementById('timeTotal');
  playlistName = document.getElementById('playlistName');
  songCount = document.getElementById('songCount');
  musicCover = document.getElementById('musicCover');
  trackInfo = document.getElementById('trackInfo');
  trackArtist = document.getElementById('trackArtist');
}

function bindEvents() {
  musicBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePanel();
  });

  document.addEventListener('click', (e) => {
    if (!musicPanel.contains(e.target) && e.target !== musicBtn && !musicBtn.contains(e.target)) {
      closePanel();
    }
  });

  playBtn.addEventListener('click', (e) => { e.stopPropagation(); togglePlay(); });
  prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevSong(); });
  nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextSong(); });

  progressBar.addEventListener('click', (e) => {
    if (!audio || !audio.duration) return;
    const rect = progressBar.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = pct * audio.duration;
  });

  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === ' ' && panelOpen) {
      e.preventDefault();
      togglePlay();
    }
  });
}

function togglePanel() {
  panelOpen = !panelOpen;
  musicPanel.classList.toggle('show', panelOpen);
  musicBtn.classList.toggle('active', panelOpen);
  if (panelOpen && songs.length === 0) {
    loadPlaylist();
  }
}

function closePanel() {
  panelOpen = false;
  musicPanel.classList.remove('show');
  musicBtn.classList.remove('active');
}

// ── API Calls ──

async function loadPlaylist() {
  musicList.innerHTML = '<div class="music-loading"><div class="ink-spinner"></div><span>墨滴晕开中…</span></div>';
  try {
    const res = await fetch(`${API_BASE}/playlist/detail?id=${PLAYLIST_ID}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.code !== 200 || !data.playlist) throw new Error('API error');

    const pl = data.playlist;
    playlistName.textContent = pl.name || '未知歌单';
    songCount.textContent = `${pl.trackCount || 0} 首`;
    if (pl.coverImgUrl) {
      musicCover.src = pl.coverImgUrl + '?param=100y100';
      musicCover.style.display = '';
    }

    songs = pl.tracks || [];
    renderSongList();
    updatePlayerBar();

    // 尝试加载更多曲目（API 可能只返回部分）
    if (pl.trackIds && pl.trackIds.length > songs.length) {
      loadRemainingTracks(pl.trackIds);
    }
  } catch (err) {
    musicList.innerHTML = '<div class="music-error">✦ 加载失败，点击重试</div>';
    musicList.querySelector('.music-error')?.addEventListener('click', loadPlaylist);
  }
}

async function loadRemainingTracks(trackIds) {
  try {
    const ids = trackIds.map(t => t.id);
    const batchSize = 50;
    const fetched = [];

    for (let i = 0; i < ids.length; i += batchSize) {
      const batch = ids.slice(i, i + batchSize);
      const res = await fetch(`${API_BASE}/song/detail?ids=${batch.join(',')}`);
      const data = await res.json();
      if (data.code === 200 && data.songs) {
        fetched.push(...data.songs);
      }
    }

    if (fetched.length > 0) {
      const existingIds = new Set(songs.map(s => s.id));
      fetched.forEach(s => { if (!existingIds.has(s.id)) { songs.push(s); existingIds.add(s.id); } });

      const idOrder = {};
      ids.forEach((id, i) => { idOrder[id] = i; });
      songs.sort((a, b) => (idOrder[a.id] ?? 9999) - (idOrder[b.id] ?? 9999));

      renderSongList();
      songCount.textContent = `${songs.length} 首`;
      updatePlayerBar();
    }
  } catch (e) { /* silent fail */ }
}

async function fetchSongUrl(id) {
  const res = await fetch(`${API_BASE}/song/url?id=${id}`);
  const data = await res.json();
  if (data.code === 200 && data.data?.[0]?.url) {
    return data.data[0].url;
  }
  throw new Error('URL not available');
}

// ── Rendering ──

function renderSongList() {
  musicList.innerHTML = songs.map((song, i) => {
    const artists = song.ar ? song.ar.map(a => a.name).join(' / ') : '';
    const dur = formatTime((song.dt || 0) / 1000);
    return `
      <div class="music-list-item${i === currentIndex ? ' active' : ''}" data-index="${i}">
        <span class="music-item-num">${i + 1}</span>
        <div class="music-item-info">
          <div class="music-item-name">${escapeHtml(song.name || '未知')}</div>
          <div class="music-item-artist">${escapeHtml(artists)}</div>
        </div>
        <span class="music-item-dur">${dur}</span>
      </div>`;
  }).join('');

  musicList.querySelectorAll('.music-list-item').forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.index);
      if (songs[idx]) playSong(idx);
    });
  });
}

function updateUI() {
  const items = musicList.querySelectorAll('.music-list-item');
  items.forEach((el, i) => {
    el.classList.toggle('active', i === currentIndex);
    const numEl = el.querySelector('.music-item-num');
    if (i === currentIndex && isPlaying) {
      numEl.innerHTML = '<span class="music-eq"><span></span><span></span><span></span></span>';
    } else {
      numEl.textContent = i + 1;
    }
  });
  playBtn.innerHTML = isPlaying
    ? '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>'
    : '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>';
  updatePlayerBar();
}

function updatePlayerBar() {
  playerBar.style.display = songs.length > 0 ? '' : 'none';
  if (currentIndex >= 0 && songs[currentIndex]) {
    const s = songs[currentIndex];
    trackInfo.textContent = s.name || '—';
    trackArtist.textContent = s.ar ? s.ar.map(a => a.name).join(' / ') : '';
  } else {
    trackInfo.textContent = '—';
    trackArtist.textContent = '';
  }
}

function updateTrackInfo(song) {
  trackInfo.textContent = song.name || '—';
  trackArtist.textContent = song.ar ? song.ar.map(a => a.name).join(' / ') : '';
}

// ── Playback ──

async function playSong(index) {
  if (index < 0 || index >= songs.length) return;

  if (audio) { audio.pause(); audio.src = ''; }

  currentIndex = index;
  isPlaying = false;
  updateUI();

  const song = songs[index];
  updateTrackInfo(song);

  const item = musicList.querySelector(`[data-index="${index}"]`);
  if (item) item.classList.add('loading');

  let url;
  try {
    url = await fetchSongUrl(song.id);
  } catch {
    if (item) item.classList.remove('loading');
    showTrackError();
    return;
  }

  if (item) item.classList.remove('loading');

  audio = new Audio(url);
  audio.addEventListener('canplay', () => {
    isPlaying = true;
    audio.play().catch(() => {});
    updateUI();
  });

  audio.addEventListener('ended', () => nextSong());

  audio.addEventListener('timeupdate', () => {
    if (audio && audio.duration) {
      const pct = (audio.currentTime / audio.duration) * 100;
      progressFill.style.width = pct + '%';
      timeCurrent.textContent = formatTime(audio.currentTime);
    }
  });

  audio.addEventListener('loadedmetadata', () => {
    timeTotal.textContent = formatTime(audio.duration);
  });

  audio.addEventListener('error', () => {
    isPlaying = false;
    updateUI();
    showTrackError();
  });

  audio.load();
}

function togglePlay() {
  if (!audio && songs.length > 0) { playSong(0); return; }
  if (!audio) return;
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play().catch(() => {});
    isPlaying = true;
  }
  updateUI();
}

function nextSong() {
  if (songs.length === 0) return;
  playSong((currentIndex + 1) % songs.length);
}

function prevSong() {
  if (songs.length === 0) return;
  if (audio && audio.currentTime > 2) { audio.currentTime = 0; return; }
  playSong((currentIndex - 1 + songs.length) % songs.length);
}

function showTrackError() {
  const item = musicList.querySelector(`[data-index="${currentIndex}"]`);
  if (item) {
    item.classList.add('unavailable');
    setTimeout(() => item.classList.remove('unavailable'), 2000);
  }
}

// ── Utils ──

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
