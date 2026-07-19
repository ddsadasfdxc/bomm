/**
 * 我的笔记系统 — OC 手记
 */

const notes = [
  {
    id: 'qingxin',
    icon: '🌿',
    title: '清心咒',
    summary: '心如止水，万念俱寂。一篇关于静心冥想的修行手记。',
    date: '2026-07-18',
    content: `
      <p>清心如水，清水即心。微风无起，波澜不惊。</p>
      <p>幽篁独坐，长啸鸣琴。禅寂入定，毒龙遁形。</p>
      <p>我心无窍，天道酬勤。我义凛然，鬼魅皆惊。</p>
      <p>我情豪溢，天地归心。我志扬迈，水起风生。</p>
      <p>天高地阔，流水行云。清新治本，直道谋身。</p>
      <p>至性至善，大道天成。</p>
      <div class="note-sep">✦</div>
      <p>清心咒，又名"清心诀"，是道家修心养性的经典口诀。</p>
      <p>修习此法，需择一静室，焚香默坐。闭目凝神，调息入定。先观想一泓清水自天灵灌入，涤荡周身浊气；再默诵咒文，以心印心。</p>
      <p>初习者每日三遍，七日为一轮。持之以恒，则心渐澄明，气渐沉稳，神渐凝聚。外扰不侵，内魔不生。</p>
      <p>温若记于静室 · 盛夏午后</p>
    `
  }
];

export function initNotes() {
  const grid = document.getElementById('notesGrid');
  if (!grid) return;

  grid.innerHTML = notes.map(note => `
    <div class="note-card" data-note="${note.id}">
      <div class="note-card-icon">${note.icon}</div>
      <h3>${note.title}</h3>
      <p>${note.summary}</p>
      <div class="note-card-brush"></div>
    </div>
  `).join('');

  grid.querySelectorAll('.note-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.note;
      const note = notes.find(n => n.id === id);
      if (note) openNote(note);
    });
  });
}

function openNote(note) {
  const overlay = document.createElement('div');
  overlay.className = 'note-overlay';
  overlay.innerHTML = `
    <div class="note-modal">
      <button class="note-modal-close">&times;</button>
      <div class="note-modal-title">${note.icon} ${note.title}</div>
      <div class="note-modal-meta">${note.date}</div>
      <div class="note-modal-body">${note.content}</div>
    </div>`;
  document.body.appendChild(overlay);

  const close = () => overlay.remove();
  overlay.querySelector('.note-modal-close').addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', escHandler); }
  });
}