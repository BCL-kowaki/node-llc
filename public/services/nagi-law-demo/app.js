// 架空の事務所の操作デモです。通信・個人情報の取得・永続保存は行いません。
const menuButton = document.querySelector('.menu-button');
const menu = document.getElementById('site-menu');
function closeMenu() {
  menu.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'メニューを開く');
}
menuButton.addEventListener('click', () => {
  const opening = menu.hidden;
  menu.hidden = !opening;
  menuButton.setAttribute('aria-expanded', String(opening));
  menuButton.setAttribute('aria-label', opening ? 'メニューを閉じる' : 'メニューを開く');
});
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('click', (event) => {
  if (!menu.hidden && !menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !menu.hidden) { closeMenu(); menuButton.focus(); }
});

const articles = {
  craft: { category: 'STORY / FICTIONAL PERSON', title: '手から手へ、想いをつなぐ。', paragraphs: ['土をこね、形をつくり、窯の扉を開ける。青山紗季さんの工房には、急がずに待つ時間が流れています。毎日使ってもらえる器をつくること。それが、仕事を始めたころから変わらない想いです。', 'ものをつくることと、それを仕事として続けること。そのあいだには、人との約束や、これからの選択があります。大切にしているものを言葉にしながら、次の一歩を考えていく。そんな時間に寄り添う事務所を、私たちは目指しています。', 'この物語と人物は制作デモ用の創作です。実際のお客さまの声や相談実績を示すものではありません。'] },
  walk: { category: 'INTERMISSION / 2026.09.12', title: 'いつもと違う、帰り道。', paragraphs: ['いつもの角を、ひとつ通り過ぎてみる。並木の隙間から差す光や、小さな庭の草花に、ふと足が止まります。毎日歩いている街にも、まだ見ていない景色がありました。', '考えごとをしていると、視線も同じところに留まりがちです。少しだけ道を変えてみることは、気持ちをほどく、小さなきっかけになるのかもしれません。'] },
  books: { category: 'INTERMISSION / 2026.08.08', title: '本棚の、片隅から。', paragraphs: ['探していた本の隣に、何年も開いていなかった一冊がありました。ぱらぱらとページをめくると、昔の自分が引いた線が目に入ります。', '同じ文章でも、読むときによって受け取り方は変わるもの。かつて読み飛ばした一節に、今日は長く立ち止まりました。日々の経験が、言葉との出会い方も少しずつ変えているのだと思います。'] },
  water: { category: 'THOUGHTS / 2026.07.24', title: '凪ぐ、ということ。', paragraphs: ['風がやみ、水面が静かになる。けれど、水は止まってしまうのではなく、その下で穏やかに流れ続けています。', '私たちが「凪」という名前に込めたのも、そんな日々への想いです。何も起きない毎日ではなく、自分の歩幅で進んでいける毎日。そのための静かな支えでありたいと考えています。'] },
  access: { category: 'ACCESS / DEMO INFORMATION', title: 'アクセス・ご相談方法', paragraphs: ['所在地：東京都内を想定した架空の法律事務所です。実在の所在地・電話番号・地図は掲載していません。', '受付時間：平日 9:30〜18:00（デモ用の設定例）。ご来所とオンラインでの事前予約によるご相談を想定しています。', 'このデモでは予約や法律相談を受け付けていません。ページ下部の「ご相談の予約を体験」から、分野と方法を選ぶ画面をお試しいただけます。'] },
  profile: { category: 'OUR PEOPLE / FICTIONAL PROFILE', title: '水野 悠一 — プロフィール', paragraphs: ['「相談してよかった」と思える時間を。そのために、相談者の言葉を遮らずに聴き、わかりやすい言葉で対話する弁護士像を設定しています。', '個人の暮らしに関するご相談と、企業の日常的な法務の両方に向き合う、総合法律事務所の代表という架空の設定です。', '本デモには、実在する弁護士の登録情報・経歴・所属弁護士会・実績は掲載していません。写真の人物もAIによる架空のイメージです。'] },
  listen: { category: 'ESSAY / 2026.09.01', title: '「話すこと」から、見えてくるもの。', paragraphs: ['頭のなかでは、いくつもの出来事が重なり合っています。いつから気になっていたのか。誰のどんな言葉が心に残っているのか。順番に話そうと思っても、うまく並べられないことがあります。', 'そんなときは、いちばん気になっていることからでいい。言葉にしてみると、出来事と気持ちが少しずつ分かれて見えてきます。話す人と、聴く人がいて、そのあいだで初めて整理されることもあるのです。', '私たちが大切にしたいのは、結論までの速さだけではありません。あなたが、あなた自身の言葉で話せる時間をつくること。その時間が、次の一歩につながると考えています。'] },
  time: { category: 'OUR DAYS / 2026.08.20', title: '一杯のお茶と、考えるための時間。', paragraphs: ['窓の外の木々を眺めながら、お茶をいれる。忙しい日にも、ほんの少し手を止めると、それまで見落としていたものに気づくことがあります。', 'ものごとを考えるとき、情報を増やすだけでは足りないのかもしれません。大切なのは、ひと呼吸おいて、何を大事にしたかったのかを振り返ること。', '相談の場にも、そんな余白があってほしい。すぐに言葉が出てこなくても、沈黙を急いで埋めなくてもいい。落ち着いて考えられる場所をつくることも、私たちの仕事の一つだと思っています。'] },
  tomorrow: { category: 'PHILOSOPHY / 2026.08.05', title: '目の前の解決と、その先の暮らし。', paragraphs: ['目の前の問題が片づいたら、どんな日々を送りたいでしょうか。いつもの仕事に集中したい。家族との時間を大切にしたい。新しいことを始めたい。', '問題への向き合い方は、その先に望む暮らしによっても変わります。だから私たちは、いま起きていることと同じくらい、これからのことも伺いたいと考えています。', '選択肢を一緒に整理し、納得できる道を探す。解決という一つの区切りの先にも、あなたの毎日は続いていく。そのことを忘れない事務所でありたいと思います。'] },
  privacy: { category: 'ABOUT THIS DEMO', title: 'プライバシーについて', paragraphs: ['このページは制作サンプルです。相談デモで選択した内容は、この画面の表示にのみ使用し、サーバーへ送信したり、ブラウザに永続保存したりしません。', '本デモのHTML・JavaScriptにはアクセス解析や外部フォームを組み込んでいません。ページ配信時のサーバーログなどは、設置先の運用によります。', '本公開にあたっては、運営者・情報の利用目的・保管方針・お問い合わせ先などを、実際の運用に合わせて定める必要があります。'] }
};
const articleDialog = document.getElementById('article-dialog');
const consultDialog = document.getElementById('consult-dialog');
function openDialog(dialog) {
  closeMenu();
  // 詳細から相談画面へ移る場合も、ダイアログを重ねずに切り替えます。
  document.querySelectorAll('dialog[open]').forEach((opened) => opened.close());
  dialog.showModal();
  document.body.style.overflow = 'hidden';
}
document.querySelectorAll('[data-dialog]').forEach((button) => button.addEventListener('click', () => {
  openDialog(document.getElementById(button.dataset.dialog));
}));
document.querySelectorAll('[data-article]').forEach((button) => button.addEventListener('click', () => {
  const article = articles[button.dataset.article];
  document.getElementById('article-category').textContent = article.category;
  document.getElementById('article-title').textContent = article.title;
  const body = document.getElementById('article-body');
  body.replaceChildren(...article.paragraphs.map((text) => { const paragraph = document.createElement('p'); paragraph.textContent = text; return paragraph; }));
  openDialog(articleDialog);
}));
const form = document.getElementById('consult-form');
const area = document.getElementById('consult-area');
const result = document.getElementById('consult-result');
function resetConsult() { form.hidden = false; result.hidden = true; }
document.querySelectorAll('[data-consult]').forEach((button) => button.addEventListener('click', () => {
  form.reset(); resetConsult(); area.value = button.dataset.consult;
  openDialog(consultDialog);
}));
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const method = new FormData(form).get('method');
  document.getElementById('selection-summary').textContent = `ご相談の分野：${area.value} ／ 相談方法：${method}`;
  form.hidden = true; result.hidden = false; result.focus();
});
document.getElementById('consult-reset').addEventListener('click', () => { resetConsult(); area.focus(); });
document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { document.body.style.overflow = document.querySelector('dialog[open]') ? 'hidden' : ''; });
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
});

// 横送り・全件表示は自動再生せず、利用者の操作だけで切り替えます。
const journalTrack = document.getElementById('journal-track');
const slideButtons = [...document.querySelectorAll('[data-slide]')];
const viewAllButton = document.getElementById('journal-view-all');
const carouselStatus = document.querySelector('.carousel-status');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function updateCarousel() {
  const expanded = journalTrack.classList.contains('expanded');
  const maximum = journalTrack.scrollWidth - journalTrack.clientWidth;
  slideButtons[0].disabled = expanded || journalTrack.scrollLeft < 3;
  slideButtons[1].disabled = expanded || journalTrack.scrollLeft >= maximum - 3;
  const items = [...journalTrack.children];
  const firstOffset = items[0].offsetLeft;
  const index = items.reduce((nearest, item, i) => item.offsetLeft - firstOffset <= journalTrack.scrollLeft + 5 ? i : nearest, 0);
  carouselStatus.textContent = expanded ? `全 ${items.length} 件` : `${String(index + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`;
}
slideButtons.forEach((button) => button.addEventListener('click', () => {
  const item = journalTrack.querySelector('.small-story');
  const gap = parseFloat(getComputedStyle(journalTrack).columnGap) || 0;
  journalTrack.scrollBy({left: Number(button.dataset.slide) * (item.getBoundingClientRect().width + gap), behavior: reducedMotion.matches ? 'instant' : 'smooth'});
}));
viewAllButton.addEventListener('click', () => {
  const expanded = journalTrack.classList.toggle('expanded');
  viewAllButton.setAttribute('aria-expanded', String(expanded));
  viewAllButton.innerHTML = expanded ? 'Close <span aria-hidden="true">⟶</span>' : 'View More <span aria-hidden="true">⟶</span>';
  journalTrack.scrollLeft = 0;
  updateCarousel();
});
journalTrack.addEventListener('scroll', updateCarousel, {passive: true});
window.addEventListener('resize', updateCarousel);
updateCarousel();
