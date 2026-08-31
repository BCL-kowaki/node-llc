// 実績(Work)ページの掲載データ。
// 追加はこの配列にオブジェクトを足すだけでよい(一覧に自動反映)。
export type Work = {
  slug: string;
  title: string;
  /** 英字の小ラベル */
  englishTitle: string;
  /** nodeの参画領域を示すタグ */
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
      "独自ECショップを開設してオリジナルブランドの販売を行うほか、地元・福岡でのイベント開催を通じて、バスケットボールを愛する人たちが集まる場をつくるPR活動を進めています。nodeはブランド設計から買い物体験づくりまでを担うメンバーとして参画し、この輪を広げていく取り組みを一緒に進めています。",
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
    tags: ["SNSプラットフォーム", "サービス開発", "コミュニティ"],
    description: [
      "「すべてのバスケファンに、ワクワクを。」を掲げ、少年バスケットボールの活動に貢献するプロジェクト「YeLL」。バスケの指導者チームが立ち上げた、現場の課題を知る人たちによる取り組みです。選手・保護者・指導者・ファンがつながる、バスケットボール専門のSNSプラットフォームとして運営されています。",
      "U18以下のカテゴリは、教員を含むボランティア指導者に運営の負担が集中しているという課題があります。YeLLは大会情報と試合結果がタイムラインに流れ、保護者一人ひとりへ最短で届く仕組みで指導者の連絡負担をなくし、頑張る選手へのメダル贈呈や大会運営のペーパーレス化まで、民間企業の強みを活かして少年バスケの環境を整えています。nodeはこの取り組みにサービス開発の面から参画しています。",
    ],
    url: "https://yell-basketball.jp/",
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
    tags: ["地域イベント", "子ども支援"],
    description: [
      "「子どもたちに忘れられないクリスマスプレゼントを」。子ども食堂を中心に、九州大学が主導し地元企業が参画して開催される、子どもたちに『体験』というプレゼントを提供し続けているイベントです。",
      "フード・フィルム・シアター・ミュージックの4つのフェスを通じて、子どもたちや単身世帯の方々が「おなかいっぱい、こころいっぱい」になれる時間を届けます。たった一度の「美味しかった」「楽しかった」が人生を変えるきっかけになる——その想いに共感し、nodeも参画企業の一社として、この取り組みを一緒に育てています。",
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
