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
    slug: "yell-basketball",
    title: "YeLL Basketball",
    englishTitle: "COMMUNITY PLATFORM",
    tags: ["サービス開発", "コミュニティ"],
    description: [
      "「全てのバスケファンに、ワクワクを。」を掲げる、ユースバスケットボールのコミュニティプラットフォーム。U12・U15・U18の全国大会からブロック・県大会まで、各地の大会情報と試合結果をひとつの場所に集約しています。",
      "散らばりがちだった大会日程・組み合わせ・結果を選手・保護者・指導者・ファンが迷わず追える形に整理し、ユース世代のバスケットボールを取り巻くコミュニティ全体を盛り上げていくサービスです。",
    ],
    url: "https://yell-basketball.jp/home",
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
      "「子どもたちに忘れられないクリスマスプレゼントを」。九州大学芸術工学研究院を中心に、産学官と市民が連携して立ち上げた、子どもたちの体験格差の解消に取り組むクリスマスイベントです。",
      "フード・フィルム・シアター・ミュージックの4つのフェスを通じて、子どもたちや単身世帯の方々が「おなかいっぱい、こころいっぱい」になれる体験を届けます。その想いが伝わり、参加と協賛の輪が広がるWeb体験を設計しました。",
    ],
    url: "https://fuku-oka-christmas-festa.com/2025/",
    images: [
      { src: "/work/fukuoka-christmas-festa.png", width: 370, height: 802 },
      { src: "/work/christmas-theater.png", width: 370, height: 802 },
    ],
    soft: "#ffdcdc",
    accent: "#d94343",
  },
  {
    slug: "jelly",
    title: "Jelly",
    englishTitle: "BRAND DESIGN",
    tags: ["ブランドデザイン", "ECサイト"],
    description: [
      "「Minimal Wear. Fluid Identity.」を掲げるアパレルブランド「Jelly」。水中をたゆたうクラゲをモチーフに、しなやかな曲線だけで浮遊感を描いたシンボルと、その流れを受け継ぐオリジナルのロゴタイプでブランドの世界観をつくりました。",
      "その世界観をそのまま買い物体験へ落とし込み、商品一覧からカート、アカウントまでを設計。余白と静けさを大切にしたトーンで、ブランドの手触りが伝わるECサイトに仕上げています。",
    ],
    images: [
      { src: "/work/jelly.png", width: 370, height: 802 },
      { src: "/work/jelly-ec-top.png", width: 370, height: 802 },
    ],
    soft: "#e7ecf2",
    accent: "#5f7d9c",
  },
];
