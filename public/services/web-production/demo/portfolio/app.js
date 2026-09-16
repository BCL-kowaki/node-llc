import { works, categories, tags } from './works-data.js';
import { initMotion, reveal, scrollTo, setScrollLock } from './motion.js';
import { renderApp, pageTitle, routeToPage, escape, pad, workCard } from './render.js';

// このデモは /services/web-production/demo/portfolio/ 配下に配置されているため、
// ルート判定の前にベースパスを取り除いてから元のルーティングロジックに渡す。
const BASE_PATH = '/services/web-production/demo/portfolio';
const pathWithoutBase = location.pathname.startsWith(BASE_PATH) ? location.pathname.slice(BASE_PATH.length) : location.pathname;
const route = pathWithoutBase.replace(/\/$/, '') || '/';
const page = routeToPage(route);

// サーバー側（scripts/server.mjs・scripts/build.mjs）で既に同じ内容が描画済みのことがあるが、
// 挙動を単純に保つため、ここでもrender.jsの同じ関数で再描画する（絞り込み等の初期状態はこの後applyFiltersが揃える）。
document.querySelector('#app').innerHTML = renderApp(page);
document.title = pageTitle(page);

// 全画面メニュー
const trigger = document.querySelector('.trigger');
const globalMenu = document.querySelector('#global-menu');
const setMenu = open => {
  document.documentElement.classList.toggle('is-menu-open', open);
  trigger.setAttribute('aria-expanded', String(open));
  trigger.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  if (open) globalMenu.removeAttribute('inert'); else globalMenu.setAttribute('inert', '');
  setScrollLock(open);
  if (open) globalMenu.querySelector('a').focus(); else trigger.focus();
};
trigger.addEventListener('click', () => setMenu(trigger.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && trigger.getAttribute('aria-expanded') === 'true') setMenu(false); });

// 作品の拡大表示
let currentWorks = [...works];
let currentIndex = 0;
let returnFocus;
const modal = document.querySelector('#art-dialog');
function showArt(id) {
  currentIndex = currentWorks.findIndex(w=>w.id===id);
  if(currentIndex < 0){currentWorks=[...works];currentIndex=currentWorks.findIndex(w=>w.id===id);}
  const w = currentWorks[currentIndex];
  if(!w)return;
  const img=document.querySelector('#dialog-image');img.src=w.image;img.alt=w.fullTitle||w.title;
  document.querySelector('.dialog-image-wrap').classList.toggle('plate', !!w.contain);
  for(const [key,value] of Object.entries({title:w.fullTitle||w.title,category:`${w.category} — ${w.year}`,latin:w.latin,description:w.description,counter:`/ ${pad(currentIndex+1)} — ${pad(currentWorks.length)}`}))document.querySelector(`#dialog-${key}`).textContent=value;
  document.querySelector('#dialog-details').innerHTML=`<div><dt>制作年</dt><dd>${escape(w.year)}</dd></div><div><dt>画材・制作</dt><dd>${escape(w.medium)}</dd></div><div><dt>題材</dt><dd>${w.tags.map(escape).join(' / ')}</dd></div>${w.client?`<div><dt>掲載・展示</dt><dd>${escape(w.client)}</dd></div>`:''}`;
  document.querySelector('#dialog-contact').href=`${BASE_PATH}/contact/?work=${encodeURIComponent(w.fullTitle||w.title)}`;
  document.querySelector('#previous-art').disabled=currentWorks.length<2;
  document.querySelector('#next-art').disabled=currentWorks.length<2;
  if(!modal.open){returnFocus=document.activeElement;modal.showModal();document.body.classList.add('modal-open');setScrollLock(true);}else{modal.scrollTop=0;}
}
document.addEventListener('click',e=>{const target=e.target.closest('[data-work]');if(target)showArt(target.dataset.work);});
document.querySelector('.dialog-close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)modal.close();}});
modal.addEventListener('close',()=>{document.body.classList.remove('modal-open');setScrollLock(false);returnFocus?.focus();});
function stepArt(delta){showArt(currentWorks[(currentIndex+delta+currentWorks.length)%currentWorks.length].id);}
document.querySelector('#previous-art').addEventListener('click',()=>stepArt(-1));
document.querySelector('#next-art').addEventListener('click',()=>stepArt(1));
modal.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();stepArt(1);}if(e.key==='ArrowLeft'){e.preventDefault();stepArt(-1);}});

// 作品一覧の絞り込み・表示切替
const grid = document.querySelector('#gallery-grid');
if(grid){
  const params = new URLSearchParams(location.search);
  let categoryFilter = categories.includes(params.get('filter')) ? params.get('filter') : 'すべて';
  let tagFilter = tags.includes(params.get('tag')) ? params.get('tag') : 'すべて';
  const applyFilters = () => {
    currentWorks = works.filter(w=>(categoryFilter==='すべて'||w.category===categoryFilter)&&(tagFilter==='すべて'||w.tags.includes(tagFilter)));
    document.querySelectorAll('[data-filter]').forEach(b=>{const on=b.dataset.filter===categoryFilter;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
    document.querySelectorAll('[data-tag]').forEach(b=>{const on=b.dataset.tag===tagFilter;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
    grid.innerHTML = currentWorks.length ? currentWorks.map((w,i)=>workCard(w,i,'gallery-card')).join('') : '<p class="empty">この組み合わせに該当する作品はありません。</p>';
    document.querySelector('#work-count').textContent = `${currentWorks.length} WORK${currentWorks.length===1?'':'S'}`;
    const q = new URLSearchParams();
    if(categoryFilter!=='すべて')q.set('filter',categoryFilter);
    if(tagFilter!=='すべて')q.set('tag',tagFilter);
    const query = q.toString();
    history.replaceState(null,'',location.pathname+(query?`?${query}`:''));
    reveal(grid);
  };
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{categoryFilter=b.dataset.filter;applyFilters();}));
  document.querySelectorAll('[data-tag]').forEach(b=>b.addEventListener('click',()=>{tagFilter=b.dataset.tag;applyFilters();}));
  document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{
    grid.classList.toggle('mosaic',b.dataset.view==='mosaic');
    document.querySelectorAll('[data-view]').forEach(v=>{const on=v===b;v.classList.toggle('active',on);v.setAttribute('aria-pressed',String(on));});
  }));
  applyFilters();
}

// お問い合わせ（デモ）
const form=document.querySelector('#contact-form');
if(form){
  const selectedWork=new URLSearchParams(location.search).get('work');
  if(selectedWork)form.elements.message.value=`「${selectedWork.slice(0,200)}」のような作品について相談したいです。\n`;
  form.addEventListener('submit',e=>{e.preventDefault();const result=document.querySelector('#form-result');result.hidden=false;result.textContent='入力内容を確認しました。このフォームはデモのため、送信・保存は行っていません。';scrollTo(result);});
}

initMotion();
