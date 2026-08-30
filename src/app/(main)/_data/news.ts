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
    slug: "website-renewal-2026",
    date: "2026.08.14",
    dateISO: "2026-08-14",
    category: "お知らせ",
    title: "ホームページをリニューアルしました",
    body: [
      "合同会社nodeのホームページをリニューアルしました。",
      "今回のリニューアルでは、私たちが提供するサービスの範囲と進め方を明確にすることを最大の目的としました。FDE伴走パートナー、システム開発、WEBサイト制作、広告運用代行、LINEハーネス構築、動画制作／編集、AI活用支援という7つのサービスについて、それぞれ何ができるのか、どのような課題を解決できるのかを個別のページで詳しくご紹介しています。",
      "「nodeは結局、何をしてくれる会社なのか」がひと目で伝わるサイトを目指し、事例や進め方、料金の考え方まで整理しました。ご相談の入り口としてご活用いただければ幸いです。",
    ],
  },
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
