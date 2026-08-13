const CHARACTERS = [
  { id: "lin", name: "林雾", title: "雨巷的观测者", mark: "雾", color: "#ff6f91", trait: "克制而敏锐", quote: "有些答案，只有雨停之后才看得清。" },
  { id: "yao", name: "沈遥", title: "失重乐队主唱", mark: "遥", color: "#64d8cb", trait: "自由而坦率", quote: "别预演告别。今晚的副歌还没唱完。" },
  { id: "ning", name: "顾宁", title: "旧书修复师", mark: "宁", color: "#d5a6ff", trait: "温柔而坚定", quote: "纸会留下折痕，人也一样。但故事还能继续。" },
  { id: "xia", name: "夏澄", title: "天台气象员", mark: "澄", color: "#ffb657", trait: "明亮而勇敢", quote: "云层上面一直是晴天，我带你去看。" },
  { id: "rei", name: "黎音", title: "第七码头代理人", mark: "音", color: "#6ba8ff", trait: "冷静而可靠", quote: "约定不需要见证人。我记得，就足够。" },
  { id: "su", name: "苏绯", title: "午夜电台主持", mark: "绯", color: "#f06969", trait: "神秘而真诚", quote: "这里是零点十七分。说出那个不敢承认的名字吧。" }
];

const MEMORIES = [
  { id: "m1", char: "lin", rarity: "SSR", name: "雨幕之外", text: "她合上伞，把半边天空让给你。" },
  { id: "m2", char: "yao", rarity: "SSR", name: "未完副歌", text: "万人散场后，最后一句只唱给你。" },
  { id: "m3", char: "ning", rarity: "SSR", name: "纸页余温", text: "修复完成的扉页，多了一行你的名字。" },
  { id: "m4", char: "xia", rarity: "SSR", name: "晴空航线", text: "风越过天台，她在云影里向你伸手。" },
  { id: "m5", char: "rei", rarity: "SSR", name: "潮汐密约", text: "港灯熄灭前，她交给你唯一的坐标。" },
  { id: "m6", char: "su", rarity: "SSR", name: "零点来信", text: "电波穿过长夜，你听见她真实的心跳。" },
  { id: "m7", char: "lin", rarity: "SR", name: "共伞", text: "雨水落在伞沿，距离刚好缩短一半。" },
  { id: "m8", char: "yao", rarity: "SR", name: "后台通行证", text: "她把你的名字写进今晚的嘉宾名单。" },
  { id: "m9", char: "ning", rarity: "SR", name: "夹页花", text: "褪色的花瓣仍保留那个下午。" },
  { id: "m10", char: "xia", rarity: "SR", name: "风向标", text: "指针偏转时，她笑着说是因为你。" },
  { id: "m11", char: "rei", rarity: "SR", name: "夜航", text: "无人码头上，两杯咖啡仍然温热。" },
  { id: "m12", char: "su", rarity: "SR", name: "点歌单", text: "匿名听众点了一首你们都懂的歌。" },
  { id: "m13", char: "lin", rarity: "R", name: "玻璃水痕", text: "窗上的雨写下一句未完成的话。" },
  { id: "m14", char: "yao", rarity: "R", name: "旧拨片", text: "边缘磨损，却仍能弹出清亮和弦。" },
  { id: "m15", char: "ning", rarity: "R", name: "书店收据", text: "日期被圈起，像一个小小纪念日。" },
  { id: "m16", char: "xia", rarity: "R", name: "积云照片", text: "照片背面写着：下次一起。" },
  { id: "m17", char: "rei", rarity: "R", name: "船票存根", text: "终点站空白，出发时间清晰。" },
  { id: "m18", char: "su", rarity: "R", name: "电台贴纸", text: "荧光墨迹在夜色中微微发亮。" }
];

const STORY = {
  lin: [
    { speaker: "林雾", line: "你也在等这场雨停？", choices: [["把伞递给她", 12], ["陪她继续等", 8]] },
    { speaker: "林雾", line: "我在记录城市里消失的声音。你愿意成为例外吗？", choices: [["说出自己的故事", 16], ["先听她的故事", 12]] },
    { speaker: "林雾", line: "雨停了。但我似乎不急着离开。", choices: [["约定下一场雨", 22], ["邀请她去看晴空", 18]] }
  ],
  yao: [
    { speaker: "沈遥", line: "彩排缺一个听众。你站第一排，敢吗？", choices: [["走到舞台中央", 14], ["留在灯光之外", 9]] },
    { speaker: "沈遥", line: "他们都想听成名曲。你想听什么？", choices: [["你没唱过的那首", 18], ["你最喜欢的那首", 13]] },
    { speaker: "沈遥", line: "副歌还缺一句。要不要一起写完？", choices: [["写下我们的名字", 22], ["把答案交给旋律", 17]] }
  ],
  ning: [
    { speaker: "顾宁", line: "这本书缺了最后一页，你觉得结局是什么？", choices: [["重逢", 14], ["新的旅程", 11]] },
    { speaker: "顾宁", line: "修复不是抹去痕迹，而是让它们被温柔看见。", choices: [["触碰那道折痕", 17], ["替她调亮台灯", 12]] },
    { speaker: "顾宁", line: "我留了一页空白。你愿意写吗？", choices: [["写下此刻", 22], ["写下未来", 19]] }
  ],
  xia: [
    { speaker: "夏澄", line: "警报说有暴风雨，可我的直觉说你会来。", choices: [["相信她的直觉", 14], ["检查气象数据", 10]] },
    { speaker: "夏澄", line: "如果风能带走一句话，你想让它带去哪？", choices: [["带到她身边", 18], ["带到很远的未来", 13]] },
    { speaker: "夏澄", line: "观测结束。接下来是私人航线。", choices: [["握住她的手", 22], ["并肩迎风", 18]] }
  ],
  rei: [
    { speaker: "黎音", line: "这张船票没有终点。你还会上船吗？", choices: [["先上船再决定", 14], ["问她是否同行", 17]] },
    { speaker: "黎音", line: "代理人不该留下私人坐标。今天破例。", choices: [["郑重收下", 17], ["交换自己的坐标", 20]] },
    { speaker: "黎音", line: "潮水会改写航道，但不会改写约定。", choices: [["许下约定", 22], ["记录这一刻", 18]] }
  ],
  su: [
    { speaker: "苏绯", line: "匿名听众，你在零点之后还醒着吗？", choices: [["按下通话键", 15], ["发去一段留言", 10]] },
    { speaker: "苏绯", line: "主持人擅长听秘密，却不擅长说自己的。", choices: [["耐心等她开口", 18], ["先分享自己的秘密", 20]] },
    { speaker: "苏绯", line: "节目要结束了。现实里的见面，算特别篇吗？", choices: [["现在就去见她", 22], ["约在明天零点", 18]] }
  ]
};

const SAVE_KEY = "scarlet-echoes-save-v1";
const defaults = () => ({ active: "lin", gems: 3200, gold: 5000, level: 1, xp: 0, affection: Object.fromEntries(CHARACTERS.map(c => [c.id, 0])), story: Object.fromEntries(CHARACTERS.map(c => [c.id, 0])), owned: {}, pulls: 0, codes: [], achievements: [] });
let state = load();
let scene = "home";
const view = document.querySelector("#view");
const modal = document.querySelector("#modal");

function load() {
  try { return { ...defaults(), ...JSON.parse(localStorage.getItem(SAVE_KEY) || "{}") }; }
  catch { return defaults(); }
}
function save() { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); syncHud(); }
function activeChar() { return CHARACTERS.find(c => c.id === state.active) || CHARACTERS[0]; }
function esc(value) { const d = document.createElement("div"); d.textContent = String(value); return d.innerHTML; }
function syncHud() {
  document.querySelector("#level").textContent = state.level;
  document.querySelector("#gems").textContent = state.gems;
  document.querySelector("#gold").textContent = state.gold;
  document.querySelector(".app").style.setProperty("--accent", activeChar().color);
}
function toast(text) {
  const el = document.createElement("div"); el.className = "toast"; el.textContent = text;
  document.querySelector("#toast").append(el); setTimeout(() => el.remove(), 2600);
}
function addProgress(amount) {
  state.xp += amount;
  while (state.xp >= state.level * 100) { state.xp -= state.level * 100; state.level += 1; state.gems += 160; toast(`等级提升至 ${state.level}，获得 160 晶石`); }
}
function unlock(id) { if (!state.achievements.includes(id)) { state.achievements.push(id); toast("成就解锁"); } }
function setScene(next) {
  scene = next;
  document.querySelectorAll("[data-nav]").forEach(b => b.classList.toggle("active", b.dataset.nav === next));
  document.querySelector("#app").dataset.scene = next;
  render(); view.focus({ preventScroll: true });
}
function selectCharacter(id) { state.active = id; save(); render(); }

function render() {
  syncHud();
  if (scene === "home") renderHome();
  if (scene === "story") renderStory();
  if (scene === "gacha") renderGacha();
  if (scene === "gallery") renderGallery();
  if (scene === "meta") renderMeta();
}
function renderHome() {
  const c = activeChar(); const love = state.affection[c.id] || 0;
  view.innerHTML = `<section class="home"><div class="hero-copy"><small>CHAPTER ${String((state.story[c.id] || 0) + 1).padStart(2, "0")} · ${esc(c.trait)}</small><h1>${esc(c.name)}<span>${esc(c.title)}</span></h1><p>“${esc(c.quote)}”</p><div class="affection"><span>羁绊 ${love}</span><span class="meter"><i style="width:${Math.min(love, 100)}%"></i></span><b>${Math.min(love, 100)}%</b></div><button class="primary" data-go="story">继续她的故事</button></div><div class="portrait"><div class="portrait-shape" data-mark="${esc(c.mark)}"></div><div class="selector">${CHARACTERS.map(x => `<button class="avatar ${x.id === c.id ? "active" : ""}" style="--c:${x.color}" data-char="${x.id}" title="${esc(x.name)}">${esc(x.mark)}</button>`).join("")}</div></div></section>`;
}
function renderStory() {
  const c = activeChar(); const index = state.story[c.id] || 0; const chapters = STORY[c.id];
  if (index >= chapters.length) {
    view.innerHTML = `<section class="story-stage"><div class="story-bg"></div><div class="dialogue"><b class="speaker">${esc(c.name)} · 已完成</b><p class="line">这段相遇已经抵达结局。你可以重温章节，或选择另一条命运线。</p><div class="choices"><button class="choice" data-replay>从第一章重温</button><button class="choice" data-go="home">返回角色主页</button></div></div></section>`; return;
  }
  const chapter = chapters[index];
  view.innerHTML = `<section class="story-stage"><div class="story-bg"></div><div class="dialogue"><b class="speaker">${esc(chapter.speaker)} · ${index + 1}/${chapters.length}</b><p class="line">${esc(chapter.line)}</p><div class="choices">${chapter.choices.map((choice, i) => `<button class="choice" data-choice="${i}">${esc(choice[0])}<span> +${choice[1]} 羁绊</span></button>`).join("")}</div></div></section>`;
}
function choose(index) {
  const c = activeChar(); const chapterIndex = state.story[c.id] || 0; const chapter = STORY[c.id][chapterIndex];
  if (!chapter) return;
  const gain = chapter.choices[index][1]; state.affection[c.id] += gain; state.story[c.id] += 1; state.gold += 180; addProgress(35);
  if (state.story[c.id] >= 3) unlock(`ending-${c.id}`);
  save(); toast(`羁绊 +${gain} · 金币 +180`); renderStory();
}
function renderGacha() {
  view.innerHTML = `<section class="gacha-stage"><div class="banner"><small>LIMITED MEMORY SYNTHESIS</small><h2>心迹共鸣</h2><p>SSR 基础概率 3%，十次合成必得 SR 或以上。重复记忆将转化为金币。</p></div><p class="rates">SSR 3% · SR 17% · R 80%　累计合成 ${state.pulls} 次</p><div class="pull-actions"><button class="ghost" data-pull="1">合成 1 次 · 160 ◇</button><button class="primary" data-pull="10">合成 10 次 · 1440 ◇</button></div></section>`;
}
function draw(forceHigh = false) {
  const roll = Math.random(); let rarity = forceHigh ? (roll < .15 ? "SSR" : "SR") : (roll < .03 ? "SSR" : roll < .2 ? "SR" : "R");
  const pool = MEMORIES.filter(m => m.rarity === rarity); return pool[Math.floor(Math.random() * pool.length)];
}
function pull(count) {
  const cost = count === 10 ? 1440 : 160;
  if (state.gems < cost) { view.classList.add("shake"); setTimeout(() => view.classList.remove("shake"), 500); toast("晶石不足，可在剧情和兑换码中获取"); return; }
  state.gems -= cost; const results = [];
  for (let i = 0; i < count; i++) results.push(draw(count === 10 && i === 9 && !results.some(x => x.rarity !== "R")));
  results.forEach(item => { if (state.owned[item.id]) state.gold += item.rarity === "SSR" ? 900 : item.rarity === "SR" ? 360 : 100; state.owned[item.id] = (state.owned[item.id] || 0) + 1; });
  state.pulls += count; addProgress(count * 8); if (Object.keys(state.owned).length >= 6) unlock("collector"); save(); showReveal(results);
}
function showReveal(items) {
  const best = [...items].sort((a,b) => ["R","SR","SSR"].indexOf(b.rarity) - ["R","SR","SSR"].indexOf(a.rarity))[0]; const c = CHARACTERS.find(x => x.id === best.char);
  modal.innerHTML = `<div class="reveal"><div class="memory" style="--glow:${c.color}"><small>${best.rarity} MEMORY</small><h2>${esc(best.name)}</h2><p>${esc(best.text)}</p>${items.length > 1 ? `<span>本次获得 ${items.length} 枚记忆 · ${items.filter(x=>x.rarity === "SSR").length} SSR</span>` : ""}</div><button class="primary close" data-close>收下记忆</button></div>`; modal.hidden = false;
}
function renderGallery() {
  view.innerHTML = `<section class="gallery"><header class="section-head"><div><small>MEMORY ARCHIVE</small><h2>记忆图鉴</h2></div><p>${Object.keys(state.owned).length} / ${MEMORIES.length} 已解锁</p></header><div class="grid">${MEMORIES.map(m => { const c = CHARACTERS.find(x => x.id === m.char); const owned = state.owned[m.id]; return `<article class="card ${owned ? "" : "locked"}" style="--c:${c.color}"><b class="rarity ${m.rarity}">${m.rarity}</b><div class="symbol">${owned ? esc(c.mark) : "?"}</div><h3>${owned ? esc(m.name) : "未解锁记忆"}</h3><p>${owned ? esc(m.text) : "在心迹合成中与这段记忆相遇。"}</p><footer><span>${esc(c.name)}</span><span class="badge">${owned ? `持有 ${owned}` : "LOCKED"}</span></footer></article>`; }).join("")}</div></section>`;
}
function renderMeta() {
  const endings = CHARACTERS.filter(c => (state.story[c.id] || 0) >= 3).length;
  view.innerHTML = `<section><header class="section-head"><div><small>SYSTEM TERMINAL</small><h2>旅程终端</h2></div></header><div class="meta-grid"><article class="panel"><h3>兑换码</h3><p>兑换码仅在本机生效，每个代码限用一次。</p><div class="code-row"><input id="code" maxlength="24" placeholder="输入兑换码"><button class="primary" data-redeem>兑换</button></div></article><article class="panel"><h3>成就</h3><div class="achievement ${state.pulls >= 1 ? "done" : ""}">初次共鸣 · 完成一次记忆合成</div><div class="achievement ${endings >= 1 ? "done" : ""}">命运落款 · 完成一名角色结局</div><div class="achievement ${Object.keys(state.owned).length >= 6 ? "done" : ""}">记忆收藏家 · 解锁六枚不同记忆</div></article><article class="panel"><h3>存档管理</h3><p>游戏自动保存在当前浏览器。清除站点数据会同时删除存档。</p><button class="ghost" data-reset>重置全部进度</button></article><article class="panel"><h3>旅程统计</h3><p>角色结局 ${endings}/6<br>不同记忆 ${Object.keys(state.owned).length}/${MEMORIES.length}<br>累计合成 ${state.pulls} 次<br>当前经验 ${state.xp}/${state.level * 100}</p></article></div></section>`;
}
function redeem() {
  const input = document.querySelector("#code"); const code = input.value.trim().toUpperCase();
  const rewards = { "SCARLET2026": [1200, 2000], "WENRUO": [600, 3600] };
  if (!rewards[code]) return toast("兑换码无效");
  if (state.codes.includes(code)) return toast("该兑换码已使用");
  state.codes.push(code); state.gems += rewards[code][0]; state.gold += rewards[code][1]; save(); toast(`获得 ${rewards[code][0]} 晶石与 ${rewards[code][1]} 金币`); renderMeta();
}

document.querySelector(".dock").addEventListener("click", e => { const b = e.target.closest("[data-nav]"); if (b) setScene(b.dataset.nav); });
view.addEventListener("click", e => {
  const char = e.target.closest("[data-char]"); const go = e.target.closest("[data-go]"); const choice = e.target.closest("[data-choice]"); const pullBtn = e.target.closest("[data-pull]");
  if (char) selectCharacter(char.dataset.char);
  if (go) setScene(go.dataset.go);
  if (choice) choose(Number(choice.dataset.choice));
  if (pullBtn) pull(Number(pullBtn.dataset.pull));
  if (e.target.closest("[data-replay]")) { state.story[state.active] = 0; save(); renderStory(); }
  if (e.target.closest("[data-redeem]")) redeem();
  if (e.target.closest("[data-reset]") && confirm("确定重置全部剧情、资源与图鉴进度？此操作无法撤销。")) { state = defaults(); save(); setScene("home"); toast("存档已重置"); }
});
modal.addEventListener("click", e => { if (e.target === modal || e.target.closest("[data-close]")) { modal.hidden = true; render(); } });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) modal.hidden = true; });

syncHud(); render();
