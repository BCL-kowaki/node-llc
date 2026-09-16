// スマートフォン用ナビゲーションの開閉
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#navigation');
const header = document.querySelector('.header');
function updateHeaderTone() {
  header.classList.toggle('is-scrolled', window.scrollY > 80);
}
updateHeaderTone();
window.addEventListener('scroll', updateHeaderTone, { passive: true });
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

// トップのヒーロー写真を5秒ごとにフェードで切り替える（動きを減らす設定の環境では固定表示のまま）
const slides = document.querySelectorAll('.hero-slide');
if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('is-active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('is-active');
  }, 5000);
}

// メニューのカテゴリ絞り込み（絞り込みボタンがある範囲だけを対象にする）
for (const filter of document.querySelectorAll('[data-filter]')) {
  filter.addEventListener('click', () => {
    const scope = filter.closest('.page-panel') || document;
    let count = 0;
    scope.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button === filter)));
    scope.querySelectorAll('[data-category]').forEach(item => {
      item.hidden = filter.dataset.filter !== 'all' && item.dataset.category !== filter.dataset.filter;
      if (!item.hidden) count += 1;
    });
    scope.querySelector('.filter-status').textContent = `${count}件のメニューを表示しています。`;
  });
}

// デモ専用のお問い合わせフォーム。入力内容を通信・保存せず、確認画面だけを表示する
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
    for (const [name, label] of [['name', 'お名前'], ['email', 'メール'], ['kind', 'ご用件'], ['message', '内容']]) {
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
