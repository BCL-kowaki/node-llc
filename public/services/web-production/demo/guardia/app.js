// 株式会社ガーディア東北 デモ — 画面演出と操作
(() => {
  const body = document.body;

  // 全画面メニュー
  const menuBtn = document.querySelector('.menu-btn');
  const panel = document.querySelector('.menu-panel');
  if (menuBtn && panel) {
    const setOpen = (open) => {
      body.classList.toggle('menu-open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
      panel.toggleAttribute('inert', !open);
    };
    setOpen(false);
    menuBtn.addEventListener('click', () => setOpen(!body.classList.contains('menu-open')));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
    panel.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  }

  // スクロール連動の表示
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -12% 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }

  // ページトップ
  const top = document.querySelector('.pagetop');
  if (top) {
    const onScroll = () => top.classList.toggle('is-show', window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // お知らせのカテゴリ絞り込み
  const tabs = document.querySelectorAll('.news-tabs button');
  const items = document.querySelectorAll('.news-list li');
  tabs.forEach((btn) => btn.addEventListener('click', () => {
    tabs.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    const cat = btn.dataset.cat;
    items.forEach((li) => { li.hidden = cat !== 'all' && li.dataset.cat !== cat; });
  }));

  // お問い合わせ(デモ: 送信・保存しない)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const r = document.querySelector('#form-result');
      r.hidden = false;
      r.textContent = '入力内容を確認しました。このフォームはデモのため、送信・保存は行っていません。';
      r.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
})();
