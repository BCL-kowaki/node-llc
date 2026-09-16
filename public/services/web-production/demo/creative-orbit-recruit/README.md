# Creative Orbit 採用サイトデモ

架空のマーケティング会社「Creative Orbit」の採用サイト。TVer採用サイトの情報構成と大きな文字を用いた表現を参考にし、本文・ロゴ・配色・画像は独自に制作。

- トップ / 会社紹介 / 仕事紹介 / 社員一覧・3名のインタビュー
- カルチャー / 募集一覧・4職種の要項 / FAQ / エントリー体験
- 応募フォームは送信・保存をしない。実際の個人情報は入力しない。
- コーポレートサイトの採用リンクと相互接続。

## 再生成

`node scripts/generate-creative-orbit-recruit.mjs`

`node scripts/check-creative-orbit-recruit.mjs`

HTMLの原本は上記生成スクリプト。CSS・JavaScriptはこのディレクトリを直接編集する。

## 設定について

【要確認】人物・インタビュー・制度・募集条件は、デモ制作にあわせて設定した架空の内容。実在企業へ転用する際は、正式な原稿に差し替えること。

## 画像制作

内蔵画像生成ツールで4点を新規生成。画像は `assets/marketer.webp`、`assets/designer.webp`、`assets/director.webp`、`assets/studio.webp` に保存。PNGからWebPに変換して軽量化。参考企業の写真は使用していない。

### 使用プロンプト

- marketer: Photorealistic editorial recruitment portrait, fictional Japanese female digital marketing strategist age 29, shoulder-length dark hair, pale sage shirt, candid confident warm expression, seated in bright Japanese creative studio with blurred plants and whiteboard, waist-up portrait, natural daylight, premium authentic corporate photography, green and warm neutral palette, landscape 3:2, subject on right half, no text no logos no watermark.
- designer: Photorealistic editorial recruitment portrait, fictional Japanese male art director age 32, short slightly wavy black hair and subtle glasses, navy knit top, relaxed smile at a light oak creative worktable, design prints and daylight blurred in background, waist-up portrait, warm natural premium magazine photography, landscape 3:2, subject centered, no text no logos no watermark.
- director: Photorealistic editorial recruitment portrait, fictional Japanese female project director age 35, short dark bob hair, cream blazer over black shirt, warm candid smile standing near window in contemporary creative agency studio, soft natural light, waist-up, understated teal and cream interior, premium magazine photography, landscape 3:2, subject on left half, no text no logos no watermark.
- studio: Photorealistic wide editorial photograph for fictional creative agency recruitment website, modern Tokyo design studio with large windows, central oak worktable, colorful printed moodboards and notebooks, mint green chairs, indoor plants, two distant out-of-focus adults collaborating near a wall, bright candid daylight, soft film photography, optimistic spacious premium workplace, landscape 3:2, no readable text no logos no watermark.
