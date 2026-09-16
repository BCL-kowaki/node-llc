import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// 採用デモの内部リンクと画像参照をファイル単位で検証する。
const publicRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../public');
const siteRoot = path.join(publicRoot, 'services/web-production/demo/creative-orbit-recruit');
async function walk(dir) {
  const files = await readdir(dir, {withFileTypes:true});
  return (await Promise.all(files.map(f => f.isDirectory() ? walk(path.join(dir,f.name)) : path.join(dir,f.name)))).flat();
}
const pages = (await walk(siteRoot)).filter(f=>f.endsWith('.html'));
const failures = [];
let references = 0;
for (const file of pages) {
  const html = await readFile(file,'utf8');
  if ((html.match(/<h1[ >]/g)||[]).length !== 1) failures.push(`${file}: h1が1つではありません`);
  if (!html.includes('noindex,nofollow')) failures.push(`${file}: 検索除外設定がありません`);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const reference = match[1];
    if (!reference.startsWith('/')) continue;
    const target = reference.split(/[?#]/)[0];
    references++;
    try { if (!(await stat(path.join(publicRoot,target))).isFile()) failures.push(`${file}: ${target} はファイルではありません`); }
    catch { failures.push(`${file}: ${target} が存在しません`); }
  }
}
if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
else console.log(`${pages.length}ページ、${references}件のリンク・素材参照、見出しと検索除外設定を確認しました。`);
