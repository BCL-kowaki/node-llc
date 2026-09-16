// 静的ページのナビゲーションとデモ操作。個人情報は送信・保存しない。
const menu = document.querySelector('#mobile-menu');
const toggle = document.querySelector('.menu-toggle');
toggle?.addEventListener('click', () => {
  menu.showModal();
  toggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
});
document.querySelector('.menu-close')?.addEventListener('click', () => menu.close());
menu?.addEventListener('close', () => {
  toggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  toggle.focus();
});
const slider = document.querySelector('.people-slider');
if (slider) {
  const controls = [...document.querySelectorAll('[data-slide]')];
  const update = () => {
    controls[0].disabled = slider.scrollLeft < 3;
    controls[1].disabled = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 3;
  };
  controls.forEach(btn => btn.addEventListener('click', () => {
    const distance = slider.querySelector('.person-card').getBoundingClientRect().width + parseFloat(getComputedStyle(slider).gap);
    slider.scrollBy({left: distance * Number(btn.dataset.slide), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  }));
  slider.addEventListener('scroll', update, {passive:true});
  window.addEventListener('resize', update);
  update();
}
const filters = [...document.querySelectorAll('[data-filter]')];
if (filters.length) {
  const filter = value => {
    if (!['all','career','graduate'].includes(value)) value = 'all';
    filters.forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.filter === value)));
    let count = 0;
    document.querySelectorAll('[data-type]').forEach(row => {
      row.hidden = value !== 'all' && row.dataset.type !== value;
      if (!row.hidden) count++;
    });
    document.querySelector('#job-count').textContent = `${count}件の募集職種`;
  };
  filters.forEach(btn => btn.addEventListener('click', () => {
    filter(btn.dataset.filter);
    const current = new URL(location.href);
    current.searchParams.set('type', btn.dataset.filter);
    history.replaceState(null, '', current);
  }));
  filter(new URLSearchParams(location.search).get('type'));
}
const form = document.querySelector('#entry-form');
if (form) {
  const role = new URLSearchParams(location.search).get('role');
  if ([...form.elements.role.options].some(option => option.value === role)) form.elements.role.value = role;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    form.reset();
    form.hidden = true;
    const success = document.querySelector('#entry-success');
    success.hidden = false;
    success.focus();
  });
}
