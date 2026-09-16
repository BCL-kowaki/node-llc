// デモ用フォームは外部へ送信せず、入力値も保存しない。
const menu = document.querySelector('.menu-panel');
const trigger = document.querySelector('.menu-toggle');
const close = document.querySelector('.menu-close');
function setMenu(open) {
  menu.hidden = !open;
  trigger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) close.focus(); else trigger.focus();
}
trigger.addEventListener('click', () => setMenu(true));
close.addEventListener('click', () => setMenu(false));
menu.addEventListener('keydown', event => {
  if (event.key === 'Escape') setMenu(false);
  if (event.key === 'Tab') {
    const items = [...menu.querySelectorAll('button,a')];
    if (event.shiftKey && document.activeElement === items[0]) { event.preventDefault(); items.at(-1).focus(); }
    else if (!event.shiftKey && document.activeElement === items.at(-1)) { event.preventDefault(); items[0].focus(); }
  }
});
if ('IntersectionObserver' in window) {
  document.documentElement.classList.add('js');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
document.querySelectorAll('[data-slide]').forEach(button => button.addEventListener('click', () => {
  const track = document.querySelector('.work-slider');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  track.scrollBy({left: Number(button.dataset.slide) * (track.firstElementChild.clientWidth + 30), behavior: reduced ? 'instant' : 'smooth'});
}));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.querySelectorAll('[data-category]').forEach(item => { item.hidden = button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter; });
}));
document.querySelector('.form')?.addEventListener('submit', event => {
  event.preventDefault();
  const result = document.querySelector('.form-result');
  result.textContent = '入力内容を確認しました。このサイトはデモのため、送信・保存は行われていません。';
  result.focus();
});
