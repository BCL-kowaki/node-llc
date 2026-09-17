# -*- coding: utf-8 -*-
"""架空の警備会社「株式会社ガーディア東北」デモサイトのHTMLを生成する。

python3 scripts/generate-guardia.py
CSS・JS・画像は public/services/web-production/demo/guardia/ を直接編集する。
"""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public/services/web-production/demo/guardia"
BASE = "/services/web-production/demo/guardia"
A = f"{BASE}/assets"
DEMOS = "/services/web-production/demos"

NAV = [
    ("TOP", "トップ", f"{BASE}/index.html", "top"),
    ("SERVICES", "事業案内", f"{BASE}/service/index.html", "service"),
    ("RECRUIT", "採用情報", f"{BASE}/recruit/index.html", "recruit"),
    ("COMPANY", "企業情報", f"{BASE}/company/index.html", "company"),
    ("NEWS", "お知らせ", f"{BASE}/news/index.html", "news"),
]

ICONS = {
    "building": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/></svg>',
    "train": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 10h14M9 21l1.5-3M15 21l-1.5-3M9 14h.01M15 14h.01"/></svg>',
    "flame": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3c1 3 4 5 4 9a4 4 0 0 1-8 0c0-1.5.6-2.6 1.4-3.4C9.8 10 10 11 11 11.5 11 9 11.5 6 12 3z"/><path d="M6 14a6 6 0 0 0 12 0"/></svg>',
    "wrench": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.5 5.5a4 4 0 0 0 5 5L9 21l-4-4L15.5 6.5z"/><path d="M14.5 5.5l4 4"/></svg>',
    "shield": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
    "helmet": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 15a8 8 0 0 1 16 0"/><path d="M2 15h20M12 7v8M6 19h12"/></svg>',
    "people": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M2 20c0-3 3-5 6-5s6 2 6 5M12 20c0-3 2-5 4-5s6 2 6 5"/></svg>',
    "paw": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="7" cy="8" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="17" cy="8" r="2"/><path d="M12 11c3 0 6 3 6 6 0 2-1.5 3-3 3-1.2 0-1.8-.8-3-.8s-1.8.8-3 .8c-1.5 0-3-1-3-3 0-3 3-6 6-6z"/></svg>',
}

SERVICES = [
    ("s1", "01", "building", "常駐警備業務", "svc-facility.jpg",
     "オフィスビル、工場、商業施設、公共施設に警備員が常駐し、出入管理・巡回・監視を行います。施設の特性に合わせた警備計画を立て、日常の安全と万一の初動対応を担います。",
     ["出入管理・受付対応", "施設内外の定期巡回", "監視カメラ・センサーのモニタリング", "緊急時の初動対応と関係機関への連絡"]),
    ("s2", "02", "train", "駅係員業務", "svc-station.jpg",
     "鉄道事業者から委託を受け、駅の改札・ホームでの案内やお客さま対応を行います。安全なご利用を支えるとともに、駅を訪れるすべての方に安心と快適をお届けします。",
     ["改札・案内所でのお客さま対応", "ホームでの安全確認と乗降補助", "遺失物・お問い合わせ対応", "異常時の避難誘導"]),
    ("s3", "03", "flame", "消防・防災業務", "svc-fire.jpg",
     "石油・化学プラントや空港などの大規模施設で、自衛消防隊として火災予防と初期消火にあたります。定期的な訓練で高い対応力を維持し、地域の安全にも貢献します。",
     ["自衛消防隊の運営・訓練", "消防設備の点検補助", "火災・災害発生時の初期対応", "防災計画の立案支援"]),
    ("s4", "04", "wrench", "総合管理業務", "svc-management.jpg",
     "設備管理、清掃、受付など、施設運営に必要な業務をワンストップで担います。警備と管理を一体で提供することで、コストの最適化と品質の安定を実現します。",
     ["建物設備の運転・保守", "受付・案内・清掃", "テナント対応・各種手配", "施設運営コストの見直し提案"]),
    ("s5", "05", "shield", "防犯ソリューション", "svc-management.jpg",
     "防犯カメラ、入退室管理、侵入検知などの機器を組み合わせ、人による警備と連携させたシステムを構築します。現地調査から設計、保守までを一貫して対応します。",
     ["防犯カメラ・録画システムの導入", "入退室管理システム", "侵入検知・機械警備との連携", "設置後の保守・運用サポート"]),
    ("s6", "06", "helmet", "防災ソリューション", "svc-fire.jpg",
     "備蓄品、非常用設備、避難計画、安否確認まで、企業と施設のBCP(事業継続計画)を支援します。訓練の企画と実施も含め、実際に機能する防災体制をつくります。",
     ["防災用品・備蓄品の提案", "避難計画・BCP策定支援", "防災訓練の企画・実施", "安否確認システムの導入"]),
    ("s7", "07", "people", "イベント客列整理・雑踏警備", "svc-event.jpg",
     "コンサート、スポーツ大会、祭りなど、多くの人が集まる場所で来場者の安全を守ります。動線設計から当日の誘導まで、事故のないイベント運営を支えます。",
     ["会場動線・警備計画の立案", "入場・退場の客列整理", "雑踏事故防止のための誘導", "緊急時の避難誘導"]),
    ("s8", "08", "paw", "鳥獣対策サービス", "svc-facility.jpg",
     "クマ・イノシシ・シカなどによる農作物や施設への被害に対し、監視カメラの設置、追い払い、侵入防止柵の設置などを行います。地域の生活と産業を守るための取り組みです。",
     ["出没状況の調査・監視カメラ設置", "追い払い・侵入防止柵の設置", "自治体・農業団体との連携", "被害状況の報告と対策提案"]),
]

NEWS = [
    ("2026.09.10", "recruit", "採用関連", "10月の会社説明会を開催します", "harassment-notice",
     "10月に仙台本社にて会社説明会を開催します。警備の仕事内容、教育制度、働く環境について、現場の社員が直接ご説明します。参加をご希望の方は採用ページの応募フォームからお申し込みください。"),
    ("2026.08.28", "info", "お知らせ", "コーポレートサイトをリニューアルしました", "site-renewal",
     "このたび、コーポレートサイトをリニューアルしました。事業内容や採用情報を分かりやすく整理し、スマートフォンからも快適にご覧いただけるようになりました。今後も皆さまに役立つ情報を発信してまいります。"),
    ("2026.08.05", "service", "サービス", "鳥獣対策サービスの対応エリアを拡大しました", "wildlife-area",
     "県北エリアからのご要望を受け、鳥獣対策サービスの対応エリアを拡大しました。監視カメラの設置や追い払い、侵入防止柵の設置まで、地域の状況に応じてご提案します。"),
    ("2026.07.18", "contest", "大会・コンテスト", "警備技能競技会で総合2位を獲得しました", "contest-result",
     "グループ各社が参加する警備技能競技会に出場し、総合2位を獲得しました。日頃の訓練の成果を発揮できたと同時に、さらに高い水準を目指す課題も見つかりました。"),
    ("2026.06.02", "info", "お知らせ", "令和8年度 入社式を行いました", "entrance-ceremony",
     "本社にて令和8年度の入社式を行い、新入社員12名を迎えました。研修を経て、それぞれの現場で活躍を始めています。"),
    ("2026.04.15", "other", "その他", "健康経営優良法人に認定されました", "health-management",
     "従業員の健康づくりへの取り組みが評価され、健康経営優良法人に認定されました。今後も安心して長く働ける職場づくりを進めます。"),
]

CATS = [("all", "すべて"), ("info", "お知らせ"), ("service", "サービス"), ("recruit", "採用関連"), ("contest", "大会・コンテスト"), ("other", "その他")]


def head(title, desc, depth_dummy=None):
    return f"""<!doctype html>
<html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow,noarchive"><meta name="theme-color" content="#d81f26"><title>{title} | 株式会社ガーディア東北 — デモサイト</title><meta name="description" content="{desc}"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Akshar:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet"><link rel="stylesheet" href="{BASE}/style.css"><script src="{BASE}/app.js" defer></script></head><body id="top"><a class="skip" href="#main">本文へ移動</a><div class="demo-notice">FICTIONAL COMPANY / DEMO WEBSITE — 架空の警備会社を題材にしたデモサイト　<a href="{DEMOS}" style="text-decoration:underline">デモ一覧へ ↗</a></div>"""


def header(current):
    cur = ' aria-current="page"'
    nav = "".join(
        f'<a href="{href}"{cur if key == current else ""}><small>{en}</small><b>{jp}</b></a>' for en, jp, href, key in NAV
    )
    svc = "".join(f'<li><a href="{BASE}/service/index.html#{sid}"><span class="n">{num}</span>{name}</a></li>' for sid, num, _, name, *_ in SERVICES)
    return f"""<header class="site-header"><div class="header-bar"><a class="brand" href="{BASE}/index.html"><span class="brand-mark" aria-hidden="true"></span><span class="brand-en">GUARDIA</span><span class="brand-jp">株式会社ガーディア東北</span></a><nav class="gnav" aria-label="メインナビゲーション">{nav}</nav><button class="menu-btn" type="button" aria-controls="menu-panel" aria-expanded="false" aria-label="メニューを開く"><span></span></button></div></header>
<div class="menu-panel" id="menu-panel"><div class="menu-grid"><div><h3>SERVICES<small>事業・サービス内容</small></h3><ul><li><a href="{BASE}/service/index.html">事業・サービスTOPへ</a></li><li><a href="{BASE}/service_flow/index.html">警備導入までの流れ</a></li>{svc}</ul></div><div><h3>RECRUIT<small>採用について</small></h3><ul><li><a href="{BASE}/recruit/index.html">採用情報TOP</a></li><li><a href="{BASE}/recruit/index.html#entry">採用エントリー</a></li><li><a href="{BASE}/recruit/index.html#flow">採用の流れ・募集要項</a></li><li><a href="{BASE}/recruit/index.html#welfare">福利厚生・働く環境・教育制度</a></li><li><a href="{BASE}/recruit/index.html#voice">先輩社員の声</a></li><li><a href="{BASE}/recruit/index.html#oneday">社員の1日</a></li></ul></div><div><h3>COMPANY<small>企業情報</small></h3><ul><li><a href="{BASE}/company/index.html">企業情報</a></li><li><a href="{BASE}/company/index.html#message">代表挨拶</a></li><li><a href="{BASE}/company/index.html#overview">会社概要</a></li><li><a href="{BASE}/news/index.html">お知らせ</a></li><li><a href="{BASE}/contact/index.html">お問い合わせ</a></li><li><a href="{BASE}/privacy/index.html">個人情報保護方針</a></li></ul></div></div></div>"""


def contact_band():
    return f"""<section class="contact-band"><span class="deco tri-tl" aria-hidden="true"></span><span class="deco tri-br" aria-hidden="true"></span><div class="wrap reveal"><div class="sec-title center light"><span class="en">CONTACT US</span><span class="jp">お問い合わせ</span></div><p>警備・防災・施設管理に関するご相談、お見積りのご依頼を受け付けております。<br>お気軽にご連絡ください。</p><a class="btn" href="{BASE}/contact/index.html">お問い合わせフォームへ</a></div></section>"""


def footer():
    svc = "".join(f'<li><a href="{BASE}/service/index.html#{sid}">{name}</a></li>' for sid, _, _, name, *_ in SERVICES)
    return f"""<footer class="site-footer"><div class="wrap"><div class="f-top"><div><a class="brand" href="{BASE}/index.html"><span class="brand-mark" aria-hidden="true"></span><span class="brand-en">GUARDIA</span></a><p style="margin-top:8px;font-weight:700">株式会社ガーディア東北</p><div class="f-info"><div><h4>ACCESS</h4><p>〒983-0000<br>宮城県仙台市宮城野区榴岡2-8-1(架空)<br><a href="#" onclick="return false">Googleマップ</a></p></div><div><h4>CONTACT</h4><p>お電話でのお問い合わせ<br><b style="font-family:var(--display);font-size:22px;letter-spacing:.04em">TEL 022-000-0000</b><br>営業時間 09:00〜18:00(平日)</p></div></div></div><div class="f-links"><div><h4>SERVICES</h4><ul><li><a class="lead-link" href="{BASE}/service/index.html">事業・サービスTOPへ</a></li>{svc}</ul></div><div><h4>RECRUIT</h4><ul><li><a class="lead-link" href="{BASE}/recruit/index.html">採用情報TOP</a></li><li><a href="{BASE}/recruit/index.html#flow">採用の流れ・募集要項</a></li><li><a href="{BASE}/recruit/index.html#welfare">福利厚生・働く環境・教育制度</a></li><li><a href="{BASE}/recruit/index.html#voice">先輩社員の声</a></li><li><a href="{BASE}/recruit/index.html#oneday">社員の1日</a></li></ul></div><div><h4>SERVICE FLOW</h4><ul><li><a class="lead-link" href="{BASE}/service_flow/index.html">警備導入までの流れ</a></li></ul><h4 style="margin-top:20px">COMPANY</h4><ul><li><a class="lead-link" href="{BASE}/company/index.html">企業情報</a></li><li><a href="{BASE}/company/index.html#message">代表挨拶</a></li><li><a href="{BASE}/company/index.html#overview">会社概要</a></li></ul></div><div><h4>CONTACT</h4><ul><li><a class="lead-link" href="{BASE}/contact/index.html">お問い合わせ</a></li></ul><h4 style="margin-top:20px">NEWS</h4><ul><li><a class="lead-link" href="{BASE}/news/index.html">お知らせ</a></li></ul></div></div></div><div class="f-bottom"><a href="{BASE}/privacy/index.html">個人情報保護方針</a><a href="{BASE}/privacy/index.html#security">情報セキュリティ基本方針</a><a href="{BASE}/privacy/index.html#site">サイトポリシー</a><a href="{BASE}/privacy/index.html#antisocial">反社会的勢力排除宣言</a><a href="{DEMOS}">デモ一覧へ ↗</a></div><p class="copyright">© 2026 GUARDIA TOHOKU Co., Ltd. All rights reserved. — 会社・人物・数値はすべて架空です。写真はAIで制作したイメージです。</p></div></footer><button class="pagetop" type="button" aria-label="ページの先頭へ">↑</button></body></html>"""


def page_hero(en, jp, crumbs, photo, tag="h1"):
    # 記事ページなど本文側に h1 を持つ場合は tag="div" にして h1 の重複を避ける
    crumb = "".join(f'<a href="{h}">{t}</a><span>/</span>' if h else f"<b>{t}</b>" for t, h in crumbs)
    return f"""<main id="main"><div class="page-hero"><div class="ph"><img src="{A}/{photo}" alt=""><div class="blocks" aria-hidden="true"><span></span><span></span></div><span class="deco tri-br" aria-hidden="true"></span></div></div><div class="wrap"><nav class="breadcrumb" aria-label="パンくず">{crumb}</nav><{tag} class="page-title"><span class="en">{en}</span><span class="jp">{jp}</span></{tag}></div>"""


def write(path, html):
    p = OUT / path
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(html, encoding="utf-8")


# ---------------- トップ ----------------
def build_top():
    cards = "".join(
        f'<a class="svc-card reveal" href="{BASE}/service/index.html#{sid}"><span class="ico" aria-hidden="true">{ICONS[ico]}</span><span class="n">{num}</span><b>{name}</b></a>'
        for sid, num, ico, name, *_ in SERVICES
    )
    tabs = "".join(f'<button type="button" data-cat="{k}" aria-pressed="{"true" if k == "all" else "false"}">{v}</button>' for k, v in CATS)
    news = "".join(
        f'<li data-cat="{cat}"><a href="{BASE}/news/{slug}/index.html"><time>{d}</time><span class="cat">{cl}</span><span class="t">{t}</span><span class="ar">↗</span></a></li>'
        for d, cat, cl, t, slug, _ in NEWS
    )
    html = head("東北の警備・施設管理・防災", "株式会社ガーディア東北は、東北エリアの企業と暮らしを24時間365日見守る架空の警備会社です。常駐警備、駅係員、消防・防災、施設管理、防犯・防災ソリューションを紹介するデモサイト。")
    html += header("top")
    html += f"""<main id="main">
<section class="mv"><span class="deco tri-tl" aria-hidden="true"></span><div class="mv-inner"><img src="{A}/hero.jpg" alt="都市を見渡しながら敬礼する警備員" fetchpriority="high"><span class="deco tri-br" aria-hidden="true"></span><div class="mv-copy"><h1>SAFE &amp; <em>SOUND</em><br>HERE FOR TOHOKU.</h1><p>東北をまもる、支える、これからもずっと</p></div></div><div class="scroll-cue" aria-hidden="true">SCROLL</div></section>

<section class="top-company"><span class="deco tri-br" aria-hidden="true"></span><span class="deco lines" aria-hidden="true"></span><div class="wrap"><div class="grid"><div class="reveal"><h2>「地域に根ざした<br>セキュリティソリューションを」</h2><p>日本の治安悪化が叫ばれている昨今。<br>私たちガーディア東北は地域に根ざした警備会社として、東北に暮らす皆さまが快適に過ごせますよう、地元企業の財産と、皆さまのご家庭を24時間365日見守り続けていきます。</p><p>「お客さまの困っているときには迅速に駆けつけ、サービスを提供する」。<br>私たちは、最高の安心をお届けする強い使命感のもと、皆さまの信頼にお応えしていきます。</p><a class="btn" href="{BASE}/company/index.html">企業情報へ</a></div><div class="illust reveal"><img src="{A}/illust-city.png" alt="街を見守る警備員と施設のイラスト" loading="lazy"></div></div></div></section>

<section class="top-service"><span class="deco tri-tl" aria-hidden="true"></span><div class="wrap"><div class="head reveal"><div class="sec-title"><span class="en">OUR SERVICES</span><span class="jp">事業・サービス内容</span></div><p>警備・防犯防災など、多岐にわたる危機管理。<br>ガーディア東北で対応可能なサービスをこちらで紹介しています。</p><a class="btn" href="{BASE}/service/index.html">事業・サービス案内へ</a></div></div><div class="illust reveal"><img src="{A}/illust-city.png" alt="" loading="lazy" style="max-width:1100px;margin:0 auto"></div>
<div class="svc-list"><div class="wrap"><div class="svc-grid">{cards}</div></div></div></section>

<section class="top-plus"><span class="deco tri-tl" aria-hidden="true"></span><span class="deco tri-br" aria-hidden="true"></span><div class="wrap reveal"><h2>Security<em>+One</em></h2><p class="sub">警備に、もうひとつの価値を。</p><div class="plus-grid"><article><h3>まもる、を超えて支える</h3><p>警備員は施設の顔でもあります。挨拶、案内、気配り。安全だけでなく、そこで過ごす人の快適さまで含めて仕事と考えています。</p></article><article><h3>人と技術をひとつに</h3><p>カメラやセンサー、入退室管理。機器の導入で終わらせず、人による警備と組み合わせて運用まで設計します。</p></article><article><h3>地域とともに</h3><p>防災訓練の協力、鳥獣対策、イベント警備。地域の暮らしを支える活動に、東北の会社として取り組みます。</p></article></div></div></section>

<section class="top-recruit"><div class="photo"><img src="{A}/recruit.jpg" alt="笑顔で並ぶ3名の社員" loading="lazy"><span class="deco tri-br" aria-hidden="true"></span></div><div class="band"><div class="wrap reveal"><div class="sec-title light"><span class="en">RECRUIT</span><span class="jp">採用情報</span></div><h3>東北の明日を<br>見守る人になれ</h3><p>実は警備だけじゃないんです。<br>東北の未来を支える仕事、一緒にやりませんか？</p><a class="btn" href="{BASE}/recruit/index.html">採用情報ページ</a></div></div></section>

<section class="top-news"><div class="wrap"><div class="sec-title reveal"><span class="en">NEWS</span><span class="jp">お知らせ</span></div><div class="cols"><div class="reveal"><div class="news-tabs" role="group" aria-label="カテゴリで絞り込む">{tabs}</div><ul class="news-list">{news}</ul><a class="btn dark more" href="{BASE}/news/index.html">新着情報一覧へ</a></div><aside class="pickup reveal"><h3>PICK UP<small>ピックアップ</small></h3><a href="{BASE}/news/harassment-notice/index.html"><time>2026.09.10</time><b>10月の会社説明会を開催します</b></a><a href="{BASE}/service_flow/index.html"><time>SERVICE FLOW</time><b>警備導入までの流れをご紹介</b></a></aside></div></div></section>
{contact_band()}</main>"""
    html += footer()
    write("index.html", html)


# ---------------- 事業案内 ----------------
def build_service():
    blocks = "".join(
        f"""<article class="svc-detail reveal" id="{sid}"><div class="pic"><img src="{A}/{img}" alt="{name}のイメージ" loading="lazy"></div><div><span class="num">{num}</span><h2>{name}</h2><p>{desc}</p><ul>{''.join(f'<li>{x}</li>' for x in items)}</ul></div></article>"""
        for sid, num, ico, name, img, desc, items in SERVICES
    )
    cards = "".join(
        f'<a class="svc-card" href="#{sid}"><span class="ico" aria-hidden="true">{ICONS[ico]}</span><span class="n">{num}</span><b>{name}</b></a>'
        for sid, num, ico, name, *_ in SERVICES
    )
    html = head("事業・サービス案内", "常駐警備、駅係員、消防・防災、総合管理、防犯・防災ソリューション、イベント警備、鳥獣対策。ガーディア東北の8つの事業をご紹介します。")
    html += header("service")
    html += page_hero("OUR SERVICES", "事業・サービス案内", [("TOP", f"{BASE}/index.html"), ("事業・サービス案内", None)], "svc-facility.jpg")
    html += f"""<section class="section" style="padding-top:0"><div class="wrap"><p class="lead" style="text-align:center;margin-bottom:34px">警備・防犯防災・施設管理など、多岐にわたる危機管理をワンストップで。<br>お客さまの施設と地域の安全を、人と技術の両面から支えます。</p><div class="svc-grid">{cards}</div><p style="text-align:center;margin-top:30px"><a class="btn ghost" href="{BASE}/service_flow/index.html">警備導入までの流れ</a></p></div></section>
<section class="section alt"><div class="wrap">{blocks}</div></section>{contact_band()}</main>"""
    html += footer()
    write("service/index.html", html)


def build_flow():
    steps = [
        ("お問い合わせ", "フォームまたはお電話でご連絡ください。ご相談内容と施設の概要をお聞かせいただきます。"),
        ("現地調査・ヒアリング", "担当者が現地を訪問し、施設の構造、利用状況、リスクを確認します。ご要望や予算感も丁寧に伺います。"),
        ("警備計画のご提案・お見積り", "調査結果をもとに、人員配置、機器の導入、運用ルールを含む警備計画とお見積りをご提示します。"),
        ("ご契約", "内容にご納得いただけましたら契約を締結します。必要な届出や関係機関への手続きも当社がサポートします。"),
        ("警備開始", "配置する警備員への施設固有の教育を行ったうえで、警備を開始します。開始後も定期的に運用を見直します。"),
    ]
    lis = "".join(f"<li><div><h3>{t}</h3><p>{d}</p></div></li>" for t, d in steps)
    html = head("警備導入までの流れ", "お問い合わせから警備開始までの流れをご紹介します。")
    html += header("service")
    html += page_hero("SERVICE FLOW", "警備導入までの流れ", [("TOP", f"{BASE}/index.html"), ("事業・サービス案内", f"{BASE}/service/index.html"), ("警備導入までの流れ", None)], "svc-management.jpg")
    html += f"""<section class="section" style="padding-top:0"><div class="wrap" style="max-width:860px"><p class="lead" style="margin-bottom:20px">はじめての警備導入でもご安心ください。ご相談から警備開始まで、担当者が一貫して対応します。</p><ol class="flow">{lis}</ol><p style="margin-top:30px;text-align:center"><a class="btn" href="{BASE}/contact/index.html">まずは相談する</a></p></div></section>{contact_band()}</main>"""
    html += footer()
    write("service_flow/index.html", html)


# ---------------- 企業情報 ----------------
def build_company():
    html = head("企業情報", "株式会社ガーディア東北の代表挨拶、会社概要、沿革をご紹介します。")
    html += header("company")
    html += page_hero("COMPANY", "企業情報", [("TOP", f"{BASE}/index.html"), ("企業情報", None)], "office.jpg")
    html += f"""<section class="section" id="message" style="padding-top:0"><div class="wrap"><div class="page-title" style="padding-top:0"><span class="en">TOP MESSAGE</span><span class="jp">代表挨拶</span></div><div class="msg reveal"><div class="pic"><img src="{A}/message.jpg" alt="代表取締役社長" loading="lazy" style="aspect-ratio:4/5"></div><div><p>当社は、東北の警備会社として、業界トップクラスの品質とサービスを追求しながら、県内の主要なお客さま(各種工場、金融機関、教育施設、商業施設など)に対し、IT技術とマンパワーを融合させた警備サービスを提供しております。</p><p>日本の治安悪化が叫ばれている昨今、生成AIの発達による産業構造や社会の変化も相まって、「セキュリティ」という分野も様々な角度からの見直しが必要な時代に突入しております。</p><p>そんな激動の時代の中でも、私たちは「SAFE &amp; SOUND」のスローガンのもと、お客さまの困っているときには迅速に駆けつけ、最高の安心をお届けする。この使命を一人ひとりの社員が胸に刻み、東北の皆さまの信頼にお応えしてまいります。</p><p class="name">代表取締役社長　東 一馬<small>GUARDIA TOHOKU Co., Ltd.</small></p></div></div></div></section>
<section class="section alt" id="overview"><div class="wrap"><div class="page-title" style="padding-top:0"><span class="en">COMPANY PROFILE</span><span class="jp">会社概要</span></div><table class="spec reveal"><tr><th>商号</th><td>株式会社ガーディア東北(GUARDIA TOHOKU Co., Ltd.)</td></tr><tr><th>所在地</th><td>〒983-0000 宮城県仙台市宮城野区榴岡2-8-1(架空の住所です)</td></tr><tr><th>設立</th><td>1978年4月</td></tr><tr><th>資本金</th><td>1億円</td></tr><tr><th>代表者</th><td>代表取締役社長　東 一馬</td></tr><tr><th>従業員数</th><td>1,240名(2026年4月現在)</td></tr><tr><th>事業内容</th><td>常駐警備業務、駅係員業務、消防・防災業務、総合管理業務、防犯・防災ソリューション、イベント警備、鳥獣対策サービス</td></tr><tr><th>認定・資格</th><td>警備業認定(宮城県公安委員会)、ISO 9001、健康経営優良法人</td></tr><tr><th>主要取引先</th><td>製造業、金融機関、鉄道事業者、教育機関、商業施設、自治体 ほか</td></tr></table></div></section>
<section class="section"><div class="wrap"><div class="page-title" style="padding-top:0"><span class="en">HISTORY</span><span class="jp">沿革</span></div><table class="spec reveal"><tr><th>1978年</th><td>仙台市に東北ガード保障株式会社として設立。施設警備を開始</td></tr><tr><th>1992年</th><td>消防・防災業務を開始。県内プラントの自衛消防を受託</td></tr><tr><th>2004年</th><td>駅係員業務を開始。総合管理業務部門を新設</td></tr><tr><th>2015年</th><td>防犯・防災ソリューション事業を開始</td></tr><tr><th>2021年</th><td>鳥獣対策サービスを開始</td></tr><tr><th>2025年</th><td>社名を株式会社ガーディア東北に変更</td></tr></table></div></section>{contact_band()}</main>"""
    html += footer()
    write("company/index.html", html)


# ---------------- 採用 ----------------
def build_recruit():
    html = head("採用情報", "東北の明日を見守る人になれ。ガーディア東北の採用情報、募集要項、福利厚生、先輩社員の声をご紹介します。")
    html += header("recruit")
    html += page_hero("RECRUIT", "採用情報", [("TOP", f"{BASE}/index.html"), ("採用情報", None)], "recruit.jpg")
    html += f"""<section class="section" style="padding-top:0"><div class="wrap"><div class="two reveal"><div><h2 class="h2s">東北の明日を<br>見守る人になれ</h2><p class="lead">実は警備だけじゃないんです。</p><p>施設の安全を守る仕事、駅でお客さまを案内する仕事、火災や災害に備える仕事、鳥獣から地域を守る仕事。ガーディア東北の仕事は、東北の暮らしのあらゆる場面につながっています。</p><p>資格や経験がなくても大丈夫。入社後の研修で、必要な知識と技術を一から身につけられます。</p><a class="btn" href="#entry">採用エントリー</a></div><div class="pic"><img src="{A}/svc-station.jpg" alt="" loading="lazy"></div></div></div></section>
<section class="section alt"><div class="wrap"><div class="stats reveal"><div><b>1,240<small>名</small></b><span>従業員数</span></div><div><b>38<small>歳</small></b><span>平均年齢</span></div><div><b>12.4<small>年</small></b><span>平均勤続年数</span></div><div><b>92<small>%</small></b><span>研修修了率</span></div></div></div></section>
<section class="section" id="flow"><div class="wrap"><div class="page-title" style="padding-top:0"><span class="en">RECRUIT FLOW</span><span class="jp">採用の流れ・募集要項</span></div><div class="two"><ol class="flow reveal"><li><div><h3>エントリー</h3><p>採用フォームからお申し込みください。会社説明会への参加も歓迎します。</p></div></li><li><div><h3>面接(1〜2回)</h3><p>これまでの経験より、人柄と意欲を大切にしています。希望する勤務地や職種もお聞かせください。</p></div></li><li><div><h3>内定・入社前研修</h3><p>警備業法に基づく新任研修を実施。配属先の施設に合わせた教育も行います。</p></div></li><li><div><h3>配属</h3><p>先輩社員がついて、現場での仕事を一つずつ覚えていきます。</p></div></li></ol><table class="spec reveal"><tr><th>募集職種</th><td>施設警備員／駅係員／消防・防災要員／設備管理スタッフ／営業・事務</td></tr><tr><th>雇用形態</th><td>正社員・契約社員・パート</td></tr><tr><th>勤務地</th><td>宮城県内各事業所(仙台・石巻・大崎 ほか)</td></tr><tr><th>給与</th><td>月給 21万円〜(施設警備員・正社員の場合)。経験・資格により優遇</td></tr><tr><th>勤務時間</th><td>シフト制(配属先により異なる)</td></tr><tr><th>休日</th><td>年間休日 110日、有給休暇、慶弔休暇</td></tr></table></div></div></section>
<section class="section alt" id="welfare"><div class="wrap"><div class="page-title" style="padding-top:0"><span class="en">WELFARE</span><span class="jp">福利厚生・働く環境・教育制度</span></div><div class="cards3 reveal"><article><h3>資格取得支援</h3><p>施設警備業務検定、防災センター要員、消防設備士など、業務に関わる資格の受験費用を会社が負担します。</p></article><article><h3>充実の研修</h3><p>入社時の新任研修に加え、年2回の現任研修、施設ごとの実地訓練を実施。技能競技会にも参加しています。</p></article><article><h3>安心して長く働ける</h3><p>各種社会保険、退職金制度、家族手当、健康診断とストレスチェック。健康経営優良法人の認定を受けています。</p></article></div></div></section>
<section class="section" id="voice"><div class="wrap"><div class="page-title" style="padding-top:0"><span class="en">VOICE</span><span class="jp">先輩社員の声</span></div><div class="cards3 reveal"><article><h3>「守っている」実感がある</h3><p>工場の常駐警備を担当しています。異常がないのが当たり前の毎日ですが、その当たり前を自分がつくっている実感があります。<br><small>施設警備／入社5年目</small></p></article><article><h3>お客さまの「ありがとう」が力に</h3><p>駅係員として、道案内から乗降のお手伝いまで。直接感謝の言葉をいただける仕事です。<br><small>駅係員／入社3年目</small></p></article><article><h3>未経験から防災のプロへ</h3><p>前職は飲食業。研修と訓練を重ね、今では自衛消防隊の班長を任されています。<br><small>消防・防災／入社8年目</small></p></article></div></div></section>
<section class="section alt" id="oneday"><div class="wrap"><div class="page-title" style="padding-top:0"><span class="en">ONE DAY</span><span class="jp">社員の1日(施設警備・日勤)</span></div><table class="spec reveal"><tr><th>8:30</th><td>出勤・引き継ぎ。夜勤者から施設の状況を確認します</td></tr><tr><th>9:00</th><td>出入管理・受付。来訪者の対応と入館手続き</td></tr><tr><th>11:00</th><td>施設内の巡回。設備や扉の施錠状態、不審物の有無を確認</td></tr><tr><th>12:00</th><td>交代で休憩</td></tr><tr><th>14:00</th><td>監視室で防犯カメラのモニタリング。定期報告書の作成</td></tr><tr><th>16:00</th><td>屋外巡回。駐車場と敷地境界の確認</td></tr><tr><th>17:30</th><td>夜勤者への引き継ぎ・退勤</td></tr></table></div></section>
<section class="section" id="entry"><div class="wrap"><div class="page-title" style="padding-top:0"><span class="en">ENTRY</span><span class="jp">採用エントリー</span></div><form class="form reveal" id="contact-form" novalidate><p style="text-align:center;font-weight:700;color:var(--red)">こちらはデモフォームです。入力内容は送信・保存されません。実際の個人情報は入力しないでください。</p><label>お名前<i>必須</i><input type="text" name="name" required placeholder="山田 太郎" maxlength="100"></label><label>メールアドレス<i>必須</i><input type="email" name="email" required placeholder="name@example.com" maxlength="254"></label><label>希望職種<i>必須</i><select name="job" required><option value="">選択してください</option><option>施設警備員</option><option>駅係員</option><option>消防・防災要員</option><option>設備管理スタッフ</option><option>営業・事務</option></select></label><label>メッセージ<textarea name="message" placeholder="志望動機や質問などがあればご記入ください" maxlength="2000"></textarea></label><button class="btn" type="submit">エントリーする(デモ)</button><div class="form-result" id="form-result" role="status" aria-live="polite" hidden></div></form></div></section>{contact_band()}</main>"""
    html += footer()
    write("recruit/index.html", html)


# ---------------- お知らせ ----------------
def build_news():
    tabs = "".join(f'<button type="button" data-cat="{k}" aria-pressed="{"true" if k == "all" else "false"}">{v}</button>' for k, v in CATS)
    lis = "".join(
        f'<li data-cat="{cat}"><a href="{BASE}/news/{slug}/index.html"><time>{d}</time><span class="cat">{cl}</span><span class="t">{t}</span><span class="ar">↗</span></a></li>'
        for d, cat, cl, t, slug, _ in NEWS
    )
    html = head("お知らせ", "株式会社ガーディア東北からのお知らせ一覧です。")
    html += header("news")
    html += page_hero("NEWS", "お知らせ", [("TOP", f"{BASE}/index.html"), ("お知らせ", None)], "office.jpg")
    html += f"""<section class="section" style="padding-top:0"><div class="wrap" style="max-width:960px"><div class="news-tabs" role="group" aria-label="カテゴリで絞り込む">{tabs}</div><ul class="news-list reveal">{lis}</ul></div></section>{contact_band()}</main>"""
    html += footer()
    write("news/index.html", html)
    for d, cat, cl, t, slug, body in NEWS:
        html = head(t, f"{t} — 株式会社ガーディア東北のお知らせ")
        html += header("news")
        html += page_hero("NEWS", "お知らせ", [("TOP", f"{BASE}/index.html"), ("お知らせ", f"{BASE}/news/index.html"), (t, None)], "office.jpg", tag="div")
        html += f"""<section class="section" style="padding-top:0"><div class="wrap news-article" style="max-width:820px"><time>{d}</time>　<span class="cat" style="font-size:11px;font-weight:700;color:var(--red);border:1px solid var(--red);padding:2px 8px">{cl}</span><h1>{t}</h1><p>{body}</p><p>本記事は架空の会社によるデモコンテンツです。記載の日付・内容は実在の出来事ではありません。</p><p style="margin-top:34px"><a class="btn dark" href="{BASE}/news/index.html">お知らせ一覧へ</a></p></div></section>{contact_band()}</main>"""
        html += footer()
        write(f"news/{slug}/index.html", html)


# ---------------- お問い合わせ・方針 ----------------
def build_contact():
    html = head("お問い合わせ", "警備・防災・施設管理に関するご相談、お見積りのご依頼はこちらから。")
    html += header("")
    html += page_hero("CONTACT US", "お問い合わせ", [("TOP", f"{BASE}/index.html"), ("お問い合わせ", None)], "svc-management.jpg")
    html += f"""<section class="section" style="padding-top:0"><div class="wrap"><div class="stats reveal" style="grid-template-columns:1fr 1fr;max-width:760px;margin:0 auto 40px"><div><span>お電話でのお問い合わせ</span><b style="font-size:34px">022-000-0000</b><span>営業時間 09:00〜18:00(平日)</span></div><div><span>フォームでのお問い合わせ</span><b style="font-size:34px">24H</b><span>2営業日以内にご返信します</span></div></div><form class="form reveal" id="contact-form" novalidate><p style="text-align:center;font-weight:700;color:var(--red)">こちらはデモフォームです。入力内容は送信・保存されません。実際の個人情報は入力しないでください。</p><label>お問い合わせ種別<i>必須</i><select name="type" required><option value="">選択してください</option><option>警備の導入・見積り相談</option><option>防犯・防災機器について</option><option>施設管理について</option><option>採用について</option><option>その他</option></select></label><label>会社名・団体名<input type="text" name="org" placeholder="○○株式会社" maxlength="150"></label><label>お名前<i>必須</i><input type="text" name="name" required placeholder="山田 太郎" maxlength="100"></label><label>メールアドレス<i>必須</i><input type="email" name="email" required placeholder="name@example.com" maxlength="254"></label><label>電話番号<input type="tel" name="tel" placeholder="022-000-0000" maxlength="20"></label><label>お問い合わせ内容<i>必須</i><textarea name="message" required placeholder="施設の種類、所在地、ご希望の警備内容などをご記入ください" maxlength="5000"></textarea></label><p class="note">ご入力いただいた内容は、<a href="{BASE}/privacy/index.html" style="text-decoration:underline">個人情報保護方針</a>に基づき取り扱います(デモのため実際には送信されません)。</p><button class="btn" type="submit">送信する(デモ)</button><div class="form-result" id="form-result" role="status" aria-live="polite" hidden></div></form></div></section></main>"""
    html += footer()
    write("contact/index.html", html)

    html = head("個人情報保護方針", "株式会社ガーディア東北の各種方針(デモ)。")
    html += header("")
    html += page_hero("POLICY", "各種方針", [("TOP", f"{BASE}/index.html"), ("各種方針", None)], "office.jpg")
    html += f"""<section class="section policy" style="padding-top:0"><div class="wrap" style="max-width:820px"><p>以下はデモサイト用のサンプル文書です。実在の企業の方針ではありません。</p><h2 id="privacy">個人情報保護方針</h2><p>当社は、警備業務を通じてお預かりする個人情報の重要性を認識し、関係法令およびガイドラインを遵守し、適切に取得・利用・管理します。利用目的の範囲内でのみ取り扱い、本人の同意なく第三者に提供しません。</p><h2 id="security">情報セキュリティ基本方針</h2><p>当社は、お客さまの施設・情報資産を守る立場として、自社の情報セキュリティ体制を整備し、継続的に改善します。全従業員に対して定期的な教育を実施します。</p><h2 id="site">サイトポリシー</h2><p>本サイトに掲載する文章・画像の著作権は当社に帰属します。本サイトは架空の企業を題材にした制作デモであり、掲載内容は実在の出来事・人物・数値ではありません。</p><h2 id="antisocial">反社会的勢力排除宣言</h2><p>当社は、反社会的勢力とは一切の関係を持たず、不当な要求には毅然として対応します。</p></div></section>{contact_band()}</main>"""
    html += footer()
    write("privacy/index.html", html)


if __name__ == "__main__":
    build_top(); build_service(); build_flow(); build_company(); build_recruit(); build_news(); build_contact()
    pages = sorted(p.relative_to(OUT) for p in OUT.rglob("*.html"))
    print(f"生成: {len(pages)} ページ")
    for p in pages: print("  ", p)
