// 実績(Work)ページの掲載データ。
// 追加はこの配列にオブジェクトを足すだけでよい(一覧に自動反映)。
export type Work = {
  slug: string;
  title: string;
  /** 英字の小ラベル */
  englishTitle: string;
  /** 関わり方のタグ */
  tags: string[];
  /** 紹介文(段落ごと) */
  description: string[];
  /** 外部サイトURL(ない場合は省略) */
  url?: string;
  /** スマホモックアップに入れる画像(左から順に表示) */
  images: { src: string; width: number; height: number; contain?: boolean }[];
  /** モックアップ背景のアクセント色(点描スウォッシュに使用) */
  soft: string;
  /** 点描の濃い色 */
  accent: string;
};

export const works: Work[] = [
  {
    slug: "jelly",
    title: "Jelly",
    englishTitle: "BRAND & COMMUNITY",
    tags: ["ブランドデザイン", "ECサイト", "PR活動"],
    description: [
      "バスケットボール業界に恩返しがしたい。その想いから立ち上がった、福岡を中心とするコミュニティ構築を目的としたブランド「Jelly」です。「Minimal Wear. Fluid Identity.」を掲げ、水中をたゆたうクラゲをモチーフにしたシンボルとオリジナルの字形で、しなやかで自由なブランドの世界観をかたちにしました。",
      "独自ECショップを開設してオリジナルブランドの販売を行うほか、地元・福岡でのイベント開催を通じて、バスケットボールを愛する人たちが集まる場をつくるPR活動を進めています。ブランド設計から買い物体験の設計までを一貫して担当しました。",
    ],
    images: [
      { src: "/work/jelly.png", width: 370, height: 802 },
      { src: "/work/jelly-ec-top.png", width: 370, height: 802 },
    ],
    soft: "#e7ecf2",
    accent: "#5f7d9c",
  },
  {
    slug: "yell-basketball",
    title: "YeLL Basketball",
    englishTitle: "COMMUNITY PLATFORM",
    tags: ["サービス開発", "コミュニティ"],
    description: [
      "「すべてのバスケファンに、ワクワクを。」を掲げ、少年バスケットボールの活動に貢献するプロジェクト「YeLL」。バスケの指導者チームが立ち上げた、現場の課題を知る人たちによる取り組みです。",
      "U18以下のカテゴリは、教員を含むボランティア指導者に運営の負担が集中しているという課題があります。YeLLは大会情報と試合結果を保護者一人ひとりへ最短で届ける仕組みで指導者の連絡負担をなくし、頑張る選手へのメダル贈呈や大会運営のペーパーレス化まで、民間企業の強みを活かして少年バスケの環境を整えています。",
    ],
    url: "https://yell-basketball.com/reyell/",
    images: [
      { src: "/work/yell-basketball.png", width: 370, height: 802 },
      { src: "/work/yell-sns.png", width: 370, height: 802 },
    ],
    soft: "#ffe2d8",
    accent: "#f4713c",
  },
  {
    slug: "fukuoka-christmas-festa",
    title: "FUKU OKA Christmas Festa",
    englishTitle: "SOCIAL EVENT",
    tags: ["Webサイト制作", "イベント支援"],
    description: [
      "「子どもたちに忘れられないクリスマスプレゼントを」。子ども食堂を中心に、九州大学が主導し地元企業が参画して開催される、子どもたちに『体験』というプレゼントを提供し続けているイベントです。",
      "フード・フィルム・シアター・ミュージックの4つのフェスを通じて、子どもたちや単身世帯の方々が「おなかいっぱい、こころいっぱい」になれる時間を届けます。たった一度の「美味しかった」「楽しかった」が人生を変えるきっかけになる——その想いが伝わり、参加と協賛の輪が広がるWeb体験を設計しました。",
    ],
    url: "https://fuku-oka-christmas-festa.com/2025/",
    images: [
      { src: "/work/fukuoka-christmas-festa.png", width: 370, height: 802 },
      { src: "/work/christmas-theater.png", width: 370, height: 802 },
    ],
    soft: "#ffdcdc",
    accent: "#d94343",
  },
];
