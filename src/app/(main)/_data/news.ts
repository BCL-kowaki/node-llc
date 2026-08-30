import autoNewsJson from "./auto-news.json";

// 公式お知らせの記事データ。
// - 手動の記事: このファイルの manualPosts に追加する
// - 自動生成の記事(AIニュース): auto-news.json に追記される(週次ルーチンが更新)
export type NewsPost = {
  slug: string;
  /** 表示用日付(例: 2026.08.30) */
  date: string;
  /** ソート・datetime属性用(YYYY-MM-DD) */
  dateISO: string;
  category: "お知らせ" | "プレスリリース" | "メディア掲載" | "イベント" | "AIニュース";
  title: string;
  /** 段落ごとの本文 */
  body: string[];
  /** 出典(自動生成のAIニュース記事用) */
  sourceName?: string;
  sourceUrl?: string;
};

const manualPosts: NewsPost[] = [
  {
    slug: "corporate-site-launch",
    date: "2026.08.30",
    dateISO: "2026-08-30",
    category: "お知らせ",
    title: "コーポレートサイトを公開しました",
    body: [
      "合同会社nodeのコーポレートサイトを公開しました。",
      "nodeは、FDE(Forward Deployed Engineering)型の伴走支援を軸に、システム開発、Webサイト制作、広告運用、LINE構築、動画制作、AI活用支援まで、事業の成果に必要な実行力をひとつのチームで提供しています。",
      "本サイトでは、各サービスの詳細や進め方、会社情報をご覧いただけます。今後はこちらのお知らせページで、事例やイベント情報なども発信していく予定です。どうぞよろしくお願いいたします。",
    ],
  },
];

const autoPosts = autoNewsJson as NewsPost[];

// 手動・自動の記事を統合し、日付の新しい順に並べる
export const newsPosts: NewsPost[] = [...manualPosts, ...autoPosts].sort((a, b) =>
  b.dateISO.localeCompare(a.dateISO),
);

const newsMap = new Map(newsPosts.map((post) => [post.slug, post]));

export function getNewsPost(slug: string) {
  return newsMap.get(slug);
}
