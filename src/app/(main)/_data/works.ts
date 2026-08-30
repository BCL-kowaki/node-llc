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
  /** スマホモックアップに入れる画像 */
  image: string;
  imageWidth: number;
  imageHeight: number;
  /** ロゴ等の正方形画像は contain 表示にする */
  imageContain?: boolean;
  /** モックアップ背景のアクセント色(点描スウォッシュに使用) */
  soft: string;
  /** 点描の濃い色 */
  accent: string;
};

export const works: Work[] = [
  {
    slug: "yell-basketball",
    title: "YeLL Basketball",
    englishTitle: "COMMUNITY PLATFORM",
    tags: ["サービス開発", "コミュニティ"],
    description: [
      "「全てのバスケファンに、ワクワクを。」を掲げる、ユースバスケットボールのコミュニティプラットフォーム。U12・U15・U18の全国大会からブロック・県大会まで、各地の大会情報と試合結果をひとつの場所に集約しています。",
      "散らばりがちだった大会日程・組み合わせ・結果を選手・保護者・指導者・ファンが迷わず追える形に整理し、ユース世代のバスケットボールを取り巻くコミュニティ全体を盛り上げていくサービスです。",
    ],
    url: "https://yell-basketball.jp/home",
    image: "/work/yell-basketball.png",
    imageWidth: 373,
    imageHeight: 554,
    soft: "#ffe2d8",
    accent: "#f4713c",
  },
  {
    slug: "fukuoka-christmas-festa",
    title: "FUKU OKA Christmas Festa",
    englishTitle: "SOCIAL EVENT",
    tags: ["Webサイト制作", "イベント支援"],
    description: [
      "「子どもたちに忘れられないクリスマスプレゼントを」。九州大学芸術工学研究院を中心に、産学官と市民が連携して立ち上げた、子どもたちの体験格差の解消に取り組むクリスマスイベントです。",
      "フード・フィルム・シアター・ミュージックの4つのフェスを通じて、子どもたちや単身世帯の方々が「おなかいっぱい、こころいっぱい」になれる体験を届けます。その想いが伝わり、参加と協賛の輪が広がるWeb体験を設計しました。",
    ],
    url: "https://fuku-oka-christmas-festa.com/2025/",
    image: "/work/fukuoka-christmas-festa.png",
    imageWidth: 370,
    imageHeight: 663,
    soft: "#ffdcdc",
    accent: "#d94343",
  },
  {
    slug: "jelly",
    title: "Jelly",
    englishTitle: "BRAND DESIGN",
    tags: ["ブランドデザイン", "ロゴ制作"],
    description: [
      "水中をたゆたうクラゲをモチーフにした、ブランド「Jelly」のビジュアルアイデンティティ。しなやかな曲線だけで生き物の浮遊感を描き、ミニマルながら一目で記憶に残るシンボルに仕上げました。",
      "ロゴタイプも曲線の流れを受け継いだオリジナルの字形で設計し、シンボルと並べたときにひとつの世界観としてつながるよう構成しています。",
    ],
    image: "/work/jelly.jpg",
    imageWidth: 1254,
    imageHeight: 1254,
    imageContain: true,
    soft: "#e7ecf2",
    accent: "#5f7d9c",
  },
];
