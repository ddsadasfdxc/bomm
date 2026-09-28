/* alchemy.js — 超爽炼丹炉
   六品丹药 · 单抽 / 十连 · localStorage 持久化 · 轻量高性能特效
   特效策略：只用 transform / opacity 动画，粒子动画结束后立即移除，
   不使用 backdrop-filter，避免滚动与抽卡时的合成开销。
*/
(() => {
  const root = document.getElementById('alchemy');
  if (!root) return;

  const STORAGE_KEY = 'wenruo_alchemy_v1';
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
  };

  let state = loadState();
  let busy = false;
  let flashEl = null;

  /* ── 工具 ── */
  function rankIndex(id) {
    for (let i = 0; i < RARITIES.length; i += 1) {
      if (RARITIES[i].id === id) return i;
    }
    return 0;
  }

  /* ── 状态读写 ── */
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
    } catch (err) {
      /* 隐私模式或容量不足时静默失败，不影响本次抽卡 */
    }
  }

  /* ── 抽卡核心 ── */
  function rollRarity() {
    const r = Math.random();
    let acc = 0;
    for (let i = 0; i < RARITIES.length; i += 1) {
      acc += RARITIES[i].rate;
      if (r < acc) return RARITIES[i];
    }
    return RARITIES[0];
  }

  /* 执行 count 次抽卡并按序推进保底；返回品级对象数组 */
  function performDraw(count) {
    const results = [];
    for (let i = 0; i < count; i += 1) {
      const isLast = (i === count - 1);
      const isHardPity = (state.pity + 1) >= PITY_MAX;
      let item;
      if (isHardPity) {
        item = RARITY_BY_ID.r6; // 90 抽仙品硬保底
      } else if (count === 10 && isLast && !results.some((r) => rankIndex(r.id) >= rankIndex(GUARANTEE_ID))) {
        item = RARITY_BY_ID[GUARANTEE_ID]; // 十连保底至少中品
      } else {
        item = rollRarity();
      }
      results.push(item);
      state.total += 1;
      state.counts[item.id] += 1;
      state.pity = item.id === 'r6' ? 0 : state.pity + 1;
      state.history.unshift({ id: item.id, ts: Date.now() });
    }
    if (state.history.length > HISTORY_LIMIT) state.history.length = HISTORY_LIMIT;
    return results;
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
    if (!els.result) return;
    els.result.innerHTML = '';
    const best = results.reduce((a, b) => (rankIndex(b.id) > rankIndex(a.id) ? b : a), results[0]);

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

    if (results.some((r) => r.id === 'r6')) {
      window.setTimeout(() => fireFlash(), isTen ? 380 : 120);
    }
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
    const n = intensity === 'ten' ? 22 : 12;
    for (let i = 0; i < n; i += 1) {
      const s = document.createElement('span');
      s.className = 'furnace-spark';
      const dist = 60 + Math.random() * 150;
      s.style.setProperty('--spark-x', (Math.cos(-Math.PI / 2) * dist + (Math.random() - 0.5) * 60).toFixed(1) + 'px');
      s.style.setProperty('--spark-y', (-dist).toFixed(1) + 'px');
      s.style.left = (44 + Math.random() * 12).toFixed(1) + '%';
      s.style.animationDuration = (0.8 + Math.random() * 0.6).toFixed(2) + 's';
      s.style.animationDelay = (Math.random() * 0.18).toFixed(2) + 's';
      box.appendChild(s);
      s.addEventListener('animationend', () => s.remove(), { once: true });
    }
    window.setTimeout(() => { box.innerHTML = ''; }, 2000);
  }

  function fireFlash() {
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

  function handleDraw(count) {
    if (busy) return;
    setBusy(true);
    const isTen = count === 10;
    playCasting(isTen ? 1250 : 950);
    spawnSparks(isTen ? 'ten' : 'single');
    if (isTen) fireFlash();

    window.setTimeout(() => {
      const results = performDraw(count);
      saveState();
      renderResult(results, isTen);
      renderStats();
      renderLegend();
      renderHistory();
      setBusy(false);
    }, isTen ? 880 : 680);
  }

  if (els.single) els.single.addEventListener('click', () => handleDraw(1));
  if (els.ten) els.ten.addEventListener('click', () => handleDraw(10));

  if (els.clear) {
    els.clear.addEventListener('click', () => {
      if (!state.total && !state.history.length) return;
      if (!window.confirm('确定清空丹录与全部统计数据？此操作不可撤销。')) return;
      state = blankState();
      saveState();
      if (els.result) els.result.innerHTML = '';
      renderAll();
    });
  }

  renderAll();
})();
