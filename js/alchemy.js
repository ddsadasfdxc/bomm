/* alchemy.js — 超爽炼丹炉（V2：特效增强 + Web Audio 合成音效）
   六品丹药 · 单抽 / 十连 · localStorage 持久化 · 零音频资源依赖
   特效策略：只用 transform / opacity / 渐变，无 backdrop-filter。
   音效策略：Web Audio 实时合成（振荡器 + 噪声），无需下载任何音频文件。
*/
(() => {
  const root = document.getElementById('alchemy');
  if (!root) return;

  const STORAGE_KEY = 'wenruo_alchemy_v1';
  const SFX_KEY = 'wenruo_alchemy_sfx';
  const PITY_MAX = 90;
  const HISTORY_LIMIT = 60;

  /* 六品丹药：概率合计 1.000 */
  const RARITIES = [
    { id: 'r1', rank: '凡品', name: '凝气丹', rate: 0.42, color: '#7e9c8e', glow: 'rgba(126, 156, 142, 0.16)' },
    { id: 'r2', rank: '下品', name: '培元丹', rate: 0.28, color: '#4f9c92', glow: 'rgba(79, 156, 146, 0.18)' },
    { id: 'r3', rank: '中品', name: '洗髓丹', rate: 0.17, color: '#5a8bb0', glow: 'rgba(90, 139, 176, 0.2)' },
    { id: 'r4', rank: '上品', name: '筑基丹', rate: 0.09, color: '#8a6cae', glow: 'rgba(138, 108, 174, 0.24)' },
    { id: 'r5', rank: '极品', name: '金丹', rate: 0.032, color: '#c9a227', glow: 'rgba(201, 162, 39, 0.3)' },
    { id: 'r6', rank: '仙品', name: '太乙仙丹', rate: 0.008, color: '#d4553f', glow: 'rgba(212, 85, 63, 0.36)' },
  ];
  const RARITY_BY_ID = RARITIES.reduce((map, item) => { map[item.id] = item; return map; }, {});
  const GUARANTEE_ID = 'r3'; // 十连保底：至少中品

  const els = {
    total: document.getElementById('alchemyTotal'),
    best: document.getElementById('alchemyBest'),
    pity: document.getElementById('alchemyPity'),
    pityFill: document.getElementById('alchemyPityFill'),
    pityText: document.getElementById('alchemyPityText'),
    single: document.getElementById('alchemySingle'),
    ten: document.getElementById('alchemyTen'),
    result: document.getElementById('alchemyResult'),
    legend: document.getElementById('alchemyLegend'),
    historyList: document.getElementById('alchemyHistoryList'),
    clear: document.getElementById('alchemyClear'),
    sparks: document.getElementById('furnaceSparks'),
    sfx: document.getElementById('alchemySfx'),
  };

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let state = loadState();
  let busy = false;
  let flashEl = null;

  /* ============= 音效（Web Audio 实时合成） ============= */
  let sfxOn = true;
  try { sfxOn = localStorage.getItem(SFX_KEY) !== 'off'; } catch (err) { sfxOn = true; }
  let audioCtx = null;

  function ac() {
    if (!sfxOn) return null;
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try { audioCtx = new AC(); } catch (err) { return null; }
    }
    if (audioCtx.state === 'suspended') { audioCtx.resume().catch(() => {}); }
    return audioCtx;
  }

  /* 单音 */
  function note(freq, delay, dur, type, vol, sweepTo) {
    const c = ac();
    if (!c) return;
    const t0 = c.currentTime + delay;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, t0);
    if (sweepTo) osc.frequency.exponentialRampToValueAtTime(Math.max(1, sweepTo), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(vol, t0 + 0.014);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g);
    g.connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }

  /* 带通噪声 */
  function noise(delay, dur, vol, freq, sweepTo) {
    const c = ac();
    if (!c) return;
    const t0 = c.currentTime + delay;
    const len = Math.max(1, Math.floor(c.sampleRate * dur));
    const buf = c.createBuffer(1, len, c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i += 1) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = c.createBufferSource();
    src.buffer = buf;
    const bq = c.createBiquadFilter();
    bq.type = 'bandpass';
    bq.Q.value = 0.9;
    bq.frequency.setValueAtTime(freq, t0);
    if (sweepTo) bq.frequency.exponentialRampToValueAtTime(sweepTo, t0 + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(vol, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(bq);
    bq.connect(g);
    g.connect(c.destination);
    src.start(t0);
    src.stop(t0 + dur + 0.05);
  }

  /* 开鼎之声 */
  function sfxOpen(isTen) {
    note(78, 0, 0.62, 'sine', 0.24, 44);
    noise(0, 0.58, 0.16, 320, 2800);
    note(320, 0.05, 0.34, 'triangle', 0.11, 150);
    if (isTen) {
      noise(0.14, 0.5, 0.12, 500, 3400);
      note(110, 0.1, 0.5, 'sine', 0.14, 60);
    }
  }

  /* 丹成之声 */
  const CHIME = {
    r1: { seq: [523.25], dur: 0.38, type: 'sine', vol: 0.13 },
    r2: { seq: [523.25, 659.25], dur: 0.42, type: 'sine', vol: 0.14 },
    r3: { seq: [587.33, 783.99, 987.77], dur: 0.5, type: 'triangle', vol: 0.14 },
    r4: { seq: [659.25, 830.61, 987.77, 1318.51], dur: 0.62, type: 'triangle', vol: 0.15, shimmer: true },
    r5: { seq: [659.25, 830.61, 987.77, 1318.51, 1567.98], dur: 0.78, type: 'triangle', vol: 0.16, shimmer: true, bell: 261.63 },
    r6: { seq: [523.25, 659.25, 783.99, 1046.5, 1318.51, 1567.98, 2093.0], dur: 1.15, type: 'triangle', vol: 0.17, shimmer: true, bell: 196.0 },
  };

  function sfxResult(id) {
    const cfg = CHIME[id] || CHIME.r1;
    const step = cfg.seq.length > 4 ? 0.075 : 0.065;
    cfg.seq.forEach((f, i) => note(f, i * step, cfg.dur, cfg.type, cfg.vol));
    if (cfg.bell) note(cfg.bell, 0, 1.6, 'sine', 0.16, cfg.bell * 0.6);
    if (cfg.shimmer) {
      noise(0.04, 0.7, 0.06, 5200, 9000);
      noise(0.22, 0.5, 0.05, 6800, 11000);
    }
    if (id === 'r5' || id === 'r6') {
      note(cfg.seq[cfg.seq.length - 1] * 2, 0.5, 0.9, 'sine', 0.1);
    }
  }

  /* 十连扫弦 */
  function sfxTenSweep(bestId) {
    const base = [523.25, 587.33, 659.25, 783.99, 880.0, 987.77, 1046.5, 1174.66, 1318.51, 1567.98];
    base.forEach((f, i) => note(f, i * 0.045, 0.26, 'triangle', 0.09));
    note(261.63, 0.5, 1.2, 'sine', 0.15, 196);
    if (bestId === 'r5' || bestId === 'r6') { noise(0.5, 0.8, 0.07, 5000, 9500); }
  }

  function sfxClick() { note(1180, 0, 0.05, 'square', 0.045); }

  function setSfx(on, playTick) {
    sfxOn = on;
    try { localStorage.setItem(SFX_KEY, on ? 'on' : 'off'); } catch (err) { }
    if (els.sfx) {
      els.sfx.setAttribute('aria-pressed', String(on));
      els.sfx.textContent = on ? '\u{1F50A}' : '\u{1F507}';
    }
    if (on && playTick) { ac(); sfxClick(); }
  }

  /* 工具 */
  function rankIndex(id) {
    for (let i = 0; i < RARITIES.length; i += 1) {
      if (RARITIES[i].id === id) return i;
    }
    return 0;
  }

  /* 状态读写 */
  function blankState() {
    return {
      total: 0,
      counts: { r1: 0, r2: 0, r3: 0, r4: 0, r5: 0, r6: 0 },
      pity: 0,
      history: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
  }

  function loadState() {
    const base = blankState();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return base;
      const data = JSON.parse(raw);
      if (!data || typeof data !== 'object') return base;
      base.total = Math.max(0, Number(data.total) || 0);
      base.pity = Math.max(0, Number(data.pity) || 0);
      Object.keys(base.counts).forEach((id) => {
        base.counts[id] = Math.max(0, Number(data.counts && data.counts[id]) || 0);
      });
      if (Array.isArray(data.history)) {
        base.history = data.history
          .filter((h) => h && RARITY_BY_ID[h.id])
          .map((h) => ({ id: h.id, ts: Number(h.ts) || Date.now() }))
          .slice(0, HISTORY_LIMIT);
      }
      base.createdAt = Number(data.createdAt) || base.createdAt;
      base.updatedAt = Number(data.updatedAt) || base.updatedAt;
      return base;
    } catch (err) {
      return base;
    }
  }
  function saveState() {
    state.updatedAt = Date.now();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) { }
  }

  /* ── 渲染 ── */
  function bestRarity() {
    for (let i = RARITIES.length - 1; i >= 0; i -= 1) {
      if (state.counts[RARITIES[i].id] > 0) return RARITIES[i];
    }
    return null;
  }

  function renderStats() {
    if (els.total) els.total.textContent = String(state.total);
    const best = bestRarity();
    if (els.best) els.best.textContent = best ? best.rank : '—';
    if (els.pity) els.pity.textContent = String(state.pity);
    const pct = Math.min(100, (state.pity / PITY_MAX) * 100);
    if (els.pityFill) els.pityFill.style.width = pct.toFixed(1) + '%';
    if (els.pityText) els.pityText.textContent = '仙品保底进度 ' + state.pity + ' / ' + PITY_MAX;
  }

  function renderLegend() {
    if (!els.legend) return;
    els.legend.innerHTML = '';
    RARITIES.forEach((item) => {
      const div = document.createElement('div');
      div.className = 'alchemy-legend-item';
      div.style.setProperty('--al-color', item.color);
      div.innerHTML = '<span class="alchemy-legend-name">' + item.rank + ' · ' + item.name + '</span>'
        + '<span class="alchemy-legend-rate">出率 ' + (item.rate * 100).toFixed(1) + '%</span>'
        + '<span class="alchemy-legend-count">已得 ' + state.counts[item.id] + '</span>';
      els.legend.appendChild(div);
    });
  }

  function formatTime(ts) {
    const d = new Date(ts);
    const pad = (n) => String(n).padStart(2, '0');
    return pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
  }

  function renderHistory() {
    if (!els.historyList) return;
    els.historyList.innerHTML = '';
    if (!state.history.length) {
      const li = document.createElement('li');
      li.className = 'alchemy-history-empty';
      li.textContent = '炉中尚无一物，去炼一炉？';
      els.historyList.appendChild(li);
      return;
    }
    state.history.slice(0, 30).forEach((h) => {
      const item = RARITY_BY_ID[h.id];
      if (!item) return;
      const li = document.createElement('li');
      li.className = 'alchemy-history-item';
      li.style.setProperty('--al-color', item.color);
      li.innerHTML = '<span class="alchemy-history-name">' + item.rank + ' · ' + item.name + '</span>'
        + '<span class="alchemy-history-time">' + formatTime(h.ts) + '</span>';
      els.historyList.appendChild(li);
    });
  }

  function renderResult(results, isTen) {
    if (!els.result) return null;
    els.result.innerHTML = '';
    const best = results.reduce((a, b) => (rankIndex(b.id) > rankIndex(a.id) ? b : a), results[0]);

    els.result.dataset.best = best.id;
    els.result.style.setProperty('--al-glow', best.glow);

    const head = document.createElement('div');
    head.className = 'alchemy-result-head';
    head.innerHTML = '<span class="alchemy-result-title">' + (isTen ? '十连 · 开鼎' : '一炉 · 丹成') + '</span>'
      + '<span class="alchemy-result-sub">本次最高 · ' + best.rank + ' ' + best.name + '</span>';
    els.result.appendChild(head);

    const grid = document.createElement('div');
    grid.className = 'alchemy-cards ' + (isTen ? 'alchemy-cards-ten' : 'alchemy-cards-single');
    results.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'alchemy-card alchemy-card--' + item.id;
      card.style.setProperty('--al-color', item.color);
      card.style.setProperty('--al-glow', item.glow);
      card.style.animationDelay = (i * 0.07).toFixed(2) + 's';
      card.innerHTML = '<span class="alchemy-card-glow"></span>'
        + '<span class="alchemy-card-rank">' + item.rank + '</span>'
        + '<span class="alchemy-card-name">' + item.name + '</span>';
      grid.appendChild(card);
    });
    els.result.appendChild(grid);
    return best;
  }

  function renderAll() {
    renderStats();
    renderLegend();
    renderHistory();
  }

  /* ── 特效 ── */
  function spawnSparks(intensity) {
    const box = els.sparks;
    if (!box) return;
    const n = intensity === 'ten' ? 26 : 14;
    for (let i = 0; i < n; i += 1) {
      const s = document.createElement('span');
      s.className = 'furnace-spark' + (Math.random() < 0.45 ? ' furnace-spark--ember' : '');
      const dist = 60 + Math.random() * 150;
      s.style.setProperty('--spark-x', ((Math.random() - 0.5) * 70).toFixed(1) + 'px');
      s.style.setProperty('--spark-y', (-dist).toFixed(1) + 'px');
      s.style.left = (44 + Math.random() * 12).toFixed(1) + '%';
      s.style.animationDuration = (0.8 + Math.random() * 0.6).toFixed(2) + 's';
      s.style.animationDelay = (Math.random() * 0.18).toFixed(2) + 's';
      box.appendChild(s);
      s.addEventListener('animationend', () => s.remove(), { once: true });
    }
    window.setTimeout(() => { box.innerHTML = ''; }, 2000);
  }

  function spawnShockwave() {
    if (reduceMotion) return;
    const wave = document.createElement('span');
    wave.className = 'alchemy-shockwave';
    root.appendChild(wave);
    wave.addEventListener('animationend', () => wave.remove(), { once: true });
    window.setTimeout(() => { if (wave.parentNode) wave.remove(); }, 1400);
  }

  function goldRing() {
    if (reduceMotion) return;
    const ring = document.createElement('div');
    ring.className = 'alchemy-ring--gold';
    ring.setAttribute('aria-hidden', 'true');
    document.body.appendChild(ring);
    ring.addEventListener('animationend', () => ring.remove(), { once: true });
    window.setTimeout(() => { if (ring.parentNode) ring.remove(); }, 1600);
  }

  function fireFlash() {
    if (reduceMotion) return;
    if (!flashEl) {
      flashEl = document.createElement('div');
      flashEl.className = 'alchemy-flash';
      flashEl.setAttribute('aria-hidden', 'true');
      document.body.appendChild(flashEl);
    }
    flashEl.classList.remove('fire');
    void flashEl.offsetWidth;
    flashEl.classList.add('fire');
  }

  function playCasting(duration) {
    root.classList.add('casting', 'shake');
    window.setTimeout(() => root.classList.remove('casting', 'shake'), duration);
  }

  /* ── 交互 ── */
  function setBusy(flag) {
    busy = flag;
    if (els.single) els.single.disabled = flag;
    if (els.ten) els.ten.disabled = flag;
  }

  function rollRarity() {
    if (state.pity >= PITY_MAX) return RARITY_BY_ID.r6;
    const r = Math.random();
    let acc = 0;
    for (let i = 0; i < RARITIES.length; i += 1) {
      acc += RARITIES[i].rate;
      if (r < acc) return RARITIES[i];
    }
    return RARITIES[0];
  }
  function performDraw(count) {
    const results = [];
    for (let i = 0; i < count; i += 1) {
      results.push(rollRarity());
    }
    if (count > 1) {
      const minRank = rankIndex(GUARANTEE_ID);
      const hasGood = results.some((item) => rankIndex(item.id) >= minRank);
      if (!hasGood) results[count - 1] = RARITY_BY_ID[GUARANTEE_ID];
    }
    const now = Date.now();
    results.forEach((item) => {
      state.total += 1;
      state.counts[item.id] = (state.counts[item.id] || 0) + 1;
      state.history.unshift({ id: item.id, ts: now });
      if (item.id === 'r6') state.pity = 0;
      else state.pity = Math.min(PITY_MAX, state.pity + 1);
    });
    if (state.history.length > HISTORY_LIMIT) state.history.length = HISTORY_LIMIT;
    return results;
  }
  function handleDraw(count) {
    if (busy) return;
    setBusy(true);
    const isTen = count === 10;
    const btn = isTen ? els.ten : els.single;

    sfxOpen(isTen);
    playCasting(isTen ? 1250 : 950);
    spawnShockwave();
    spawnSparks(isTen ? 'ten' : 'single');
    if (btn) {
      btn.classList.add('is-casting');
      window.setTimeout(() => btn.classList.remove('is-casting'), 1100);
    }

    window.setTimeout(() => {
      const results = performDraw(count);
      saveState();
      const best = renderResult(results, isTen);
      renderStats();
      renderLegend();
      renderHistory();

      if (best) {
        sfxResult(best.id);
        if (best.id === 'r5') fireFlash();
        if (best.id === 'r6') { fireFlash(); goldRing(); spawnSparks('ten'); }
      }
      setBusy(false);
    }, isTen ? 900 : 700);
  }

  if (els.single) els.single.addEventListener('click', () => handleDraw(1));
  if (els.ten) els.ten.addEventListener('click', () => handleDraw(10));

  if (els.sfx) {
    els.sfx.addEventListener('click', () => setSfx(!sfxOn, true));
  }

  if (els.clear) {
    els.clear.addEventListener('click', () => {
      if (!state.total && !state.history.length) return;
      if (!window.confirm('确定清空丹录与全部统计数据？此操作不可撤销。')) return;
      state = blankState();
      saveState();
      if (els.result) {
        els.result.innerHTML = '';
        delete els.result.dataset.best;
      }
      renderAll();
    });
  }

  setSfx(sfxOn, false);
  renderAll();
})();

