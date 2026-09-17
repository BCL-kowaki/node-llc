# 凪総合法律事務所 — 士業サイト制作デモ

静的HTML・CSS・JavaScriptで構成した独立デモです。依存パッケージはありません。

- Next.jsでのURL: `/services/web-production/demo/nagi-law/index.html`
- ローカル確認URL: `http://127.0.0.1:4187/services/web-production/demo/nagi-law/index.html`
- 参考サイト: https://hayakawa-lawoffice.com/ 、 https://www.hanazawa-co.com/
- 参考にした点: 大きな写真、縦書きの言葉、明朝体、事務所の考え方と読み物を中心に据える構成。
- 文章・名称・ロゴ・写真は新規制作。参考サイトの写真・文章・弁護士情報は転載していません。

## 操作

メニュー、Our Firm内の取扱分野6項目の開閉、プロフィール・ストーリー・記事・アクセス案内・プライバシー説明のダイアログ、相談分野と相談方法の選択・確認・選び直しが可能です。ダイアログはEscでも閉じられます。Journalには左右の横送りとView Moreによる全件表示があり、自動再生は行いません。

## 写真中心の構成と、凪らしい色の調整

メインビジュアルのHTML・既存CSS・画像を維持し、下部を `editorial.css` で調整しています。

- Concept: 温かみのある白を背景に、文章と2枚の写真の重なりを維持。
- Our Approach: 淡い青緑の新セクション。01「聴く」→02「ほどく」→03「選ぶ」で相談への姿勢を紹介。取扱分野のダイアログへ接続。
- People & Stories: 輪郭の英字・写真の切り欠きを外し、明朝体の見出しと高さをずらした矩形写真に変更。
- Journal: 横組みの英字見出しと、手動で送れる写真記事。View Moreで全件表示。
- Nagi Notes: 深い紺緑と水面の背景、細い緑のアクセントで構成。
- Our Firm / Access: 写真帯と細線の案内リンクは維持し、淡いグレーグリーンの背景で区切る。
- Hanazawaの理念・事業紹介で見られる番号付けと小さな色のアクセントを、架空の法律事務所向けに再構成。ロゴ・写真・文章は転載していません。
- スマートフォンでは相談への姿勢・ストーリーを1列にし、写真の重なりは維持。

追加した写真6点の保存先・生成プロンプトは [assets/GENERATED.md](assets/GENERATED.md) に記録しています。組み込みimagegenで生成した架空のイメージで、参照サイトの写真や人物情報は転載していません。

フォームの選択は画面内だけで扱い、送信・予約・保存は行いません。人物・所在地・受付時間・記事日付は架空の設定です。実在の弁護士の所属・実績・資格情報は掲載していません。

## 素材

`assets/office-hero.jpg` は組み込みimagegenで生成した写真をJPEGに変換したものです。トップと人物紹介で同じ素材を異なるトリミングで使っています。人物・空間はAI生成のイメージであることをサイト内にも表示しています。

生成プロンプト:

> Use case: photorealistic-natural. Create a premium editorial landscape photograph for a fictional Japanese law office website, 1536x1024 or landscape ratio. An elegant sunlit Japanese office with tall windows, dark warm walnut vertical walls and a quiet courtyard of lush green Japanese maple trees visible outside. On far right a fictional Japanese male lawyer about 45 years old in charcoal suit stands looking thoughtfully out the window, photographed in rear three-quarter profile, not at camera, distant medium-wide shot. Large negative space on left and center, softly lit dark timber and deep muted teal shadow suitable for white vertical Japanese headline overlay that will be added in HTML. Natural understated photographic realism, film grain, soft morning light through leaves, human and reassuring rather than corporate stock. Architectural editorial photography, subtle cinematic atmosphere, muted evergreen and warm ivory tones, no text, no logos, no scales of justice, no gavel, no watermark. Realistic hands hidden, no visible documents. Standalone image, no UI.

## 組み込みの未確認事項

【要確認】既存の `src/app/(main)/_data/services.ts` がiCloudの `dataless` 状態で読み取りできないため、既存デモ一覧への登録は未実施。ダウンロード後に `web-production` の `demos` 配列へURLと紹介画像を追加してください。

本デモからデモ一覧へのリンクはNext.jsの既存ルートを参照しています。静的ファイルのみのローカルプレビューでは一覧ページは提供されません。
