// 演出（オープニング・スムーススクロール・スクロール連動の表示）をまとめたモジュール。
// GSAP / ScrollTrigger / Lenis が読み込めない場合や「視差効果を減らす」設定では、演出なしで表示する。
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasGsap = () => typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
const html = document.documentElement;
let lenis = null;

export function initMotion() {
  if (hasGsap()) gsap.registerPlugin(ScrollTrigger);
  startSmoothScroll();
  playOpening();
  if (hasGsap() && !reduce) {
    setupHero();
    setupPanel();
    setupPanorama();
    setupHeaderState();
    reveal(document);
    refreshOnImageLoad();
  } else {
    document.querySelectorAll('[data-clip]').forEach(el => el.classList.add('is-visible'));
  }
}

// 再描画した領域（作品一覧の絞り込み後など）に演出を付け直す
export function reveal(scope) {
  if (!hasGsap() || reduce) { scope.querySelectorAll('[data-clip]').forEach(el => el.classList.add('is-visible')); return; }
  ScrollTrigger.getAll().forEach(t => { if (t.trigger && !document.contains(t.trigger)) t.kill(); });
  scope.querySelectorAll('[data-reveal]').forEach(el => {
    if (el.dataset.motionDone) return; el.dataset.motionDone = '1';
    gsap.from(el, { y: 48, opacity: 0, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } });
  });
  scope.querySelectorAll('[data-clip]').forEach(el => {
    if (el.dataset.motionDone) return; el.dataset.motionDone = '1';
    const img = el.querySelector('img');
    gsap.set(el, { clipPath: 'inset(100% 0 0 0)' });
    if (img) gsap.set(img, { scale: 1.15 });
    ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: () => {
      gsap.to(el, { clipPath: 'inset(0% 0 0 0)', duration: 1.6, ease: 'expo.out' });
      if (img) gsap.to(img, { scale: 1, duration: 2.2, ease: 'expo.out' });
    } });
  });
  scope.querySelectorAll('.v-letters').forEach(el => {
    if (el.dataset.motionDone) return; el.dataset.motionDone = '1';
    gsap.from(el.children, { yPercent: 120, opacity: 0, duration: 1.1, stagger: 0.07, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
  });
  ScrollTrigger.refresh();
}

// 拡大表示や全画面メニューの間は、背後のスムーススクロールを止める
export function setScrollLock(locked) {
  if (!lenis) return;
  if (locked) lenis.stop(); else lenis.start();
}

export function scrollTo(target) {
  if (lenis) lenis.scrollTo(target, { offset: 0 });
  else target.scrollIntoView({ behavior: reduce ? 'instant' : 'smooth' });
}

function startSmoothScroll() {
  if (reduce || typeof window.Lenis === 'undefined') return;
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  if (hasGsap()) {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  } else {
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }
  html.classList.add('lenis-on');
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); lenis.scrollTo(target); }
  });
}

function playOpening() {
  const opening = document.querySelector('.opening');
  let seen = false;
  try { seen = sessionStorage.getItem('opening-seen') === '1'; sessionStorage.setItem('opening-seen', '1'); } catch {}
  const finish = () => {
    html.classList.add('is-loaded');
    if (!opening) return;
    opening.classList.add('is-done');
    setTimeout(() => opening.remove(), 1900);
  };
  if (!opening || reduce) { finish(); return; }
  if (seen) { opening.classList.add('is-quick'); setTimeout(finish, 350); return; }
  if (!hasGsap()) { setTimeout(finish, 2400); return; }
  const tl = gsap.timeline({ onComplete: finish });
  tl.from('.opening-copy span', { yPercent: 110, duration: 1, stagger: 0.14, ease: 'power3.out' }, 0.25)
    .fromTo('.opening-circle circle', { strokeDashoffset: 320 }, { strokeDashoffset: 0, duration: 2, ease: 'power2.inOut' }, 0.3)
    .to('.opening-copy span', { yPercent: -110, duration: 0.6, stagger: 0.08, ease: 'power3.in' }, 2.2)
    .to('.opening-circle', { scale: 1.12, opacity: 0, duration: 0.7, ease: 'power2.in' }, 2.2);
}

function setupHero() {
  const img = document.querySelector('.hero-img');
  if (!img) return;
  // 動画の代わりに、作品をゆっくり寄せる（ケン・バーンズ効果）
  gsap.to(img, { scale: 1.08, duration: 22, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 2.5 });
  gsap.to('.hero-content', { yPercent: 25, opacity: 0, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: '80% top', scrub: true } });
  gsap.to('.hero-media', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
}

// 用途カードを横に流す（参考サイトの pin されたパネル）。スマホでは縦に並べる。
function setupPanel() {
  const track = document.querySelector('.panel-track');
  if (!track) return;
  ScrollTrigger.matchMedia({
    '(min-width: 900px)': () => {
      const amount = () => track.scrollWidth - window.innerWidth;
      gsap.to(track, { x: () => -amount(), ease: 'none', scrollTrigger: { trigger: '.panel', start: 'top top', end: () => '+=' + amount(), pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1 } });
    }
  });
}

function setupPanorama() {
  const img = document.querySelector('.panorama-img');
  if (!img) return;
  gsap.fromTo(img, { xPercent: 0 }, { xPercent: -24, ease: 'none', scrollTrigger: { trigger: '.panorama', start: 'top bottom', end: 'bottom top', scrub: true } });
}

// 遅延読み込みの画像で高さが変わったら、スクロール位置の計算をやり直す
function refreshOnImageLoad() {
  let timer;
  const schedule = () => { clearTimeout(timer); timer = setTimeout(() => ScrollTrigger.refresh(), 200); };
  document.querySelectorAll('img').forEach(img => { if (!img.complete) img.addEventListener('load', schedule, { once: true }); });
  if (document.fonts?.ready) document.fonts.ready.then(schedule);
}

function setupHeaderState() {
  ScrollTrigger.create({ start: 'top -60', end: 999999, toggleClass: { targets: html, className: 'is-scrolled' } });
}
