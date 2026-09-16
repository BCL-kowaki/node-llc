// モバイルナビゲーション
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#navigation');
function closeNavigation() {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'ナビゲーションを開く');
  nav.classList.remove('is-open');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'ナビゲーションを閉じる' : 'ナビゲーションを開く');
  nav.classList.toggle('is-open', open);
});
nav.addEventListener('click', event => { if (event.target.closest('a')) closeNavigation(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeNavigation(); toggle.focus();
  }
});
// 商品カテゴリーを絞り込み、件数を読み上げる
for (const filter of document.querySelectorAll('[data-filter]')) {
  filter.addEventListener('click', () => {
    let count = 0;
    document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button === filter)));
    document.querySelectorAll('[data-category]').forEach(product => {
      product.hidden = filter.dataset.filter !== 'all' && product.dataset.category !== filter.dataset.filter;
      if (!product.hidden) count += 1;
    });
    document.querySelector('.filter-status').textContent = `${count}件の商品を表示しています。`;
  });
}
// デモ専用。入力内容を通信・永続保存せず、確認画面だけを表示する
const form = document.querySelector('#contact-form');
if (form) {
  const fields = document.querySelector('#form-fields');
  const confirmation = document.querySelector('#confirmation');
  const completed = document.querySelector('#form-complete');
  const data = document.querySelector('#confirmation-data');
  const confirmButton = document.querySelector('#confirm-button');
  confirmButton.disabled = false;
  function showConfirmation() {
    if (!form.reportValidity()) return;
    data.replaceChildren();
    for (const [name, label] of [['name','お名前'],['email','メール'],['kind','ご相談内容'],['message','お問い合わせ']]) {
      const row = document.createElement('div');
      const term = document.createElement('dt');
      const value = document.createElement('dd');
      term.textContent = label;
      value.textContent = form.elements[name].value;
      row.append(term, value); data.append(row);
    }
    fields.hidden = true; confirmation.hidden = false; confirmation.focus();
  }
  form.addEventListener('submit', event => { event.preventDefault(); showConfirmation(); });
  confirmButton.addEventListener('click', showConfirmation);
  document.querySelector('#edit-button').addEventListener('click', () => {
    confirmation.hidden = true; fields.hidden = false; document.querySelector('#name').focus();
  });
  document.querySelector('#complete-button').addEventListener('click', () => {
    form.reset(); data.replaceChildren(); confirmation.hidden = true;
    completed.hidden = false; completed.focus();
  });
  document.querySelector('#reset-button').addEventListener('click', () => {
    completed.hidden = true; fields.hidden = false; document.querySelector('#name').focus();
  });
}

// 写真や文章は隠さず、画面に入ったときだけ一度ふわっと動かす。
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionRoot = document.documentElement;
const motionButton = document.createElement('button');
motionButton.type = 'button';
motionButton.className = 'motion-toggle';
motionButton.setAttribute('aria-label', 'アニメーションを停止');
document.querySelector('.demo-bar').append(motionButton);
let motionPaused = motionPreference.matches;
try {
  motionPaused = motionPaused || sessionStorage.getItem('hoobaru-motion-paused') === 'true';
} catch { /* 保存できない環境でも画面内での切り替えは利用できる。 */ }
function updateMotion() {
  motionRoot.classList.toggle('motion-enabled', !motionPaused);
  motionButton.textContent = motionPaused ? '動きを再生' : '動きを止める';
  motionButton.setAttribute('aria-label', motionPaused ? 'アニメーションを再生' : 'アニメーションを停止');
  motionButton.setAttribute('aria-pressed', String(motionPaused));
}
motionButton.addEventListener('click', () => {
  motionPaused = !motionPaused;
  try { sessionStorage.setItem('hoobaru-motion-paused', String(motionPaused)); } catch { /* 保存は任意。 */ }
  updateMotion();
});
motionPreference.addEventListener('change', event => { motionPaused = event.matches; updateMotion(); });

// 下層ページでは、小さなシュークリームがごあいさつ。
const pageTitle = document.querySelector('.page-title');
if (pageTitle) {
  const greeting = document.createElement('div');
  greeting.className = 'puff-greeting';
  greeting.setAttribute('aria-hidden', 'true');
  const puff = document.querySelector('.brand .choux-mark').cloneNode(true);
  for (const x of [38, 52]) {
    const eye = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    eye.setAttribute('cx', String(x)); eye.setAttribute('cy', '34'); eye.setAttribute('r', '1.6');
    eye.setAttribute('fill', 'currentColor'); puff.append(eye);
  }
  const smile = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  smile.setAttribute('d', 'M42 37q3 4 6 0');
  smile.setAttribute('stroke', 'currentColor'); smile.setAttribute('stroke-width', '1.5'); puff.append(smile);
  const note = document.createElement('span'); note.textContent = 'こんにちは。';
  greeting.append(puff, note); pageTitle.append(greeting);
}
if ('IntersectionObserver' in window) {
  const reveal = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-revealing');
      reveal.unobserve(entry.target);
    }
  }, { threshold: 0.12 });
  document.querySelectorAll('.story-art, .story-copy, .section-heading, .product, .gift-visual, .concept-intro > *, .principle-grid article, .social-grid img, .visit > div').forEach((element, index) => {
    element.style.setProperty('--reveal-delay', `${(index % 3) * 75}ms`);
    reveal.observe(element);
  });
}
updateMotion();
