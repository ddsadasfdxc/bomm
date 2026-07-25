/* 灵签 —— 温若的剑意签筒 */
const FORTUNES = [
  { name: '上签 · 破云', text: '剑出鞘时云自开，今日所困，明日皆成踏脚石。' },
  { name: '上签 · 听松', text: '松下听风，不争而胜。慢下来，答案自己会走过来。' },
  { name: '中签 · 渡溪', text: '溪水虽浅，湿鞋难免。小心细节，便可稳渡。' },
  { name: '中签 · 磨刀', text: '工欲善其事，先磨三日刀。眼下蛰伏，是在攒锋。' },
  { name: '上签 · 拾叶', text: '落叶非无情物，化作春泥更护花。放下即是得到。' },
  { name: '下签 · 雾岭', text: '岭上雾重，宜守不宜进。今日多思少动，养精蓄锐。' },
  { name: '上签 · 惊鸿', text: '惊鸿一瞥，机遇转瞬即逝。看到就出手，别犹豫。' },
  { name: '中签 · 归舟', text: '行到水穷处，坐看云起时。此路不通时，换个码头。' },
  { name: '上签 · 藏锋', text: '大巧若拙，大辩若讷。真正的高手，从不亮剑两次。' },
  { name: '下签 · 逆水', text: '逆水行舟，不进则退。今日宜复盘旧账，清理负累。' },
];

export function initFortune() {
  const box = document.getElementById('fortuneBox');
  if (!box) return;
  const btn = document.getElementById('fortuneBtn');
  const result = document.getElementById('fortuneResult');
  let drawing = false;

  btn.addEventListener('click', () => {
    if (drawing) return;
    drawing = true;
    btn.disabled = true;
    result.classList.remove('show');
    box.classList.add('shaking');

    setTimeout(() => {
      box.classList.remove('shaking');
      const f = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
      result.innerHTML =
        '<span class="fortune-name">' + f.name + '</span>' + f.text;
      result.classList.add('show');
      btn.disabled = false;
      drawing = false;
    }, 1600);
  });
}
