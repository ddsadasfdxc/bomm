const deck = document.getElementById('exploreGrid');
if (deck) {
  deck.classList.add('poker-deck');
  const cards = [...deck.querySelectorAll('.note-card')];
  const toolbar = document.createElement('div');
  toolbar.className = 'deck-toolbar';
  toolbar.innerHTML = '<span>万象牌匣 · 横滑选牌，点按抽出</span><button type="button" aria-expanded="false">铺开全部</button>';
  deck.before(toolbar);
  const toggle = toolbar.querySelector('button');
  let selected = null;
  cards.forEach((card, i) => {
    card.style.setProperty('--card-index', i);
    card.style.setProperty('--card-angle', `${(i % 3 - 1) * 2}deg`);
    card.dataset.suit = ['◇','♧','♤','♡'][i % 4];
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-expanded', 'false');
    const title = card.querySelector('h3').textContent;
    card.setAttribute('aria-label', `${title}，点击展开，再次点击进入`);
    const label = document.createElement('span');
    label.className = 'deck-spine'; label.textContent = title;
    const hint = document.createElement('span');
    hint.className = 'deck-enter'; hint.textContent = '进入此境 ↗';
    card.append(label, hint);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopImmediatePropagation(); card.click(); }
      if (e.key === 'Escape') { collapse(); }
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault(); cards[(i + (e.key === 'ArrowRight' ? 1 : cards.length - 1)) % cards.length].focus();
      }
    }, true);
  });
  function collapse() {
    selected?.classList.remove('is-drawn'); selected?.setAttribute('aria-expanded','false'); selected = null;
  }
  deck.addEventListener('click', e => {
    const card = e.target.closest('.note-card');
    if (!card || selected === card) return;
    e.preventDefault(); e.stopImmediatePropagation();
    collapse(); selected = card; card.classList.add('is-drawn'); card.setAttribute('aria-expanded','true');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    deck.scrollTo({left: Math.max(0, card.offsetLeft - deck.offsetLeft - 40), behavior:reduce ? 'instant':'smooth'});
  }, true);
  toggle.addEventListener('click', () => {
    const open = deck.classList.toggle('is-spread');
    toggle.setAttribute('aria-expanded', String(open)); toggle.textContent = open ? '收回牌匣' : '铺开全部';
    collapse();
  });
}
