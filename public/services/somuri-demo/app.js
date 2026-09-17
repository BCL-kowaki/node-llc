// 表示に使う人物・所属・状況はすべて架空のサンプルです。
const features = {
  evaluation: { label: 'PERFORMANCE MANAGEMENT', title: '評価を、次の成長に<br>つながる対話へ。', description: '目標設定から自己評価、上長のフィードバックまで。ひとりひとりの頑張りと成長を、チームで共有できます。', points: ['組織に合わせた評価シート', '提出状況を一覧で確認', '面談・1on1の記録を蓄積'], heading: '2026年度 下期 人事評価', badge: '評価進行中', rows: [['山', '山田 はるか', '営業部 / 目標設定', '提出済み'], ['佐', '佐藤 みどり', '開発部 / 自己評価', '確認待ち'], ['鈴', '鈴木 健太', '管理部 / 上長評価', '完了']] },
  labor: { label: 'LABOR MANAGEMENT', title: '毎日の手続きを、<br>迷わず、スムーズに。', description: '入退社や住所変更の情報をまとめて、申請から承認までを見える化。担当者と従業員、双方の手間を減らします。', points: ['入退社の手続きを一覧管理', '住所・扶養情報の変更申請', '申請と承認の進捗を共有'], heading: '労務手続き一覧', badge: '今月の手続き', rows: [['山', '山田 はるか', '入社手続き / 10月1日入社', '確認待ち'], ['鈴', '鈴木 健太', '住所変更 / 9月17日申請', '確認待ち'], ['佐', '佐藤 みどり', '扶養情報変更 / 9月15日申請', '完了']] },
  people: { label: 'EMPLOYEE DATABASE', title: 'ひとりひとりの情報を、<br>組織の力に。', description: '従業員の基本情報と所属、スキル、評価履歴をひとつに。必要な情報に、必要な担当者がアクセスできる設計です。', points: ['従業員情報を一か所に集約', '所属とスキルを見える化', '役割に合わせた閲覧権限'], heading: '従業員データベース', badge: 'サンプル名簿', rows: [['山', '山田 はるか', '営業部 / カスタマーサクセス', '在籍'], ['佐', '佐藤 みどり', '開発部 / プロダクトデザイン', '在籍'], ['鈴', '鈴木 健太', '管理部 / バックオフィス', '在籍']] }
};
const tabs = [...document.querySelectorAll('[data-tab]')];
const panel = document.getElementById('product-panel');
function selectTab(tab) {
  const feature = features[tab.dataset.tab];
  tabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  panel.setAttribute('aria-labelledby', tab.id);
  // 固定の表示データのみを描画し、ユーザー入力はHTMLに埋め込みません。
  panel.innerHTML = `<div class="feature-copy"><span class="feature-tag">${feature.label}</span><h3>${feature.title}</h3><p>${feature.description}</p><ul>${feature.points.map((point) => `<li>${point}</li>`).join('')}</ul></div><div class="feature-screen"><div class="screen-heading">${feature.heading}<span>${feature.badge}</span></div>${feature.rows.map(([initial, name, team, status]) => `<div class="feature-row"><span class="avatar">${initial}</span><div><b>${name}</b><small>${team}</small></div><span class="status ${status === '確認待ち' ? 'pending' : ''}">${status}</span></div>`).join('')}<p class="screen-footer">製品画面イメージ / サンプルデータ</p></div>`;
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (event) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); tabs[next].focus(); selectTab(tabs[next]); }
  });
});
selectTab(tabs[0]);
const employees = document.getElementById('employees');
employees.addEventListener('input', () => {
  const count = Number(employees.value);
  document.getElementById('employee-output').textContent = `${count}名`;
  document.getElementById('monthly-price').textContent = (count * 600).toLocaleString('ja-JP');
  employees.setAttribute('aria-valuetext', `${count}名、月額${(count * 600).toLocaleString('ja-JP')}円、税別の仮価格`);
});
const toggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
function closeMenu() { navigation.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'メニューを開く'); }
toggle.addEventListener('click', () => { const open = navigation.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く'); });
navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); toggle.focus(); } });
const dialog = document.getElementById('demo-dialog');
const approve = document.getElementById('approve-demo');
document.querySelectorAll('[data-open]').forEach((button) => button.addEventListener('click', () => {
  closeMenu();
  const type = button.dataset.open;
  document.getElementById('dialog-title').textContent = type === '製品体験' ? 'そむりを体験する' : type === '料金相談デモ' ? `${employees.value}名での導入相談デモ` : '導入相談のデモ';
  document.querySelector('.dialog-intro').textContent = type === '製品体験' ? '架空の従業員データで、手続きの確認を体験できます。入力・操作内容は保存・送信されません。' : 'この制作デモでは相談の送信は行いません。代わりに、製品の手続き確認を体験できます。';
  approve.disabled = false;
  approve.innerHTML = '内容を確認して完了にする <span>✓</span>';
  document.getElementById('demo-result').textContent = '';
  document.querySelector('.request-label').textContent = '確認待ち / 入社手続き';
  dialog.showModal();
  document.body.style.overflow = 'hidden';
}));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { document.body.style.overflow = ''; });
dialog.addEventListener('click', (event) => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
approve.addEventListener('click', () => { approve.disabled = true; approve.textContent = '確認完了 ✓'; document.querySelector('.request-label').textContent = '完了 / 入社手続き'; document.getElementById('demo-result').textContent = '確認が完了しました。この操作は画面内だけのデモです。'; });
