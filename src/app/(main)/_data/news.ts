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
    slug: "company-established-2026",
    date: "2026.03.18",
    dateISO: "2026-03-18",
    category: "お知らせ",
    title: "合同会社nodeを設立しました",
    body: [
      "2026年3月18日、福岡市にて合同会社nodeを設立しました。あわせて、コーポレートサイトを開設しています。",
      "nodeは、Web制作、広告運用、動画制作、システム開発、AI活用といった手段を分断せず、事業のゴールから逆算してひとつの流れに束ねることを強みとしています。現場に入り込み、課題の発見から実装、運用、改善まで伴走するFDE(Forward Deployed Engineering)型の支援を軸に据えています。",
      "つくって納品して終わりではなく、数字が動くところまでご一緒する。そんなパートナーでありたいと考えています。今後ともよろしくお願いいたします。",
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
