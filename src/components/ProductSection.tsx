"use client";

import FadeUpSection from "./FadeUpSection";
import Image from "next/image";

// 料金行（初期費用・月額など）の型
type PriceRow = { label: string; value: string; note?: string };

type Product = {
  name: string;
  logo: string;
  category: string; // 種別ラベル
  catch: string; // キャッチコピー
  features: string[]; // 機能詳細
  price: PriceRow[];
};

const products: Product[] = [
  {
    name: "Salesync",
    logo: "/img/salesync-logo.png",
    category: "独自CRMプラットフォーム",
    catch: "使う機能だけの、あなた専用CRM。",
    features: [
      "既製CRMに業務を合わせず、社内の商流・営業フローに沿ってゼロから設計",
      "使わない機能に費用を払わない、必要な仕組みだけを実装",
      "導入後も改善・追加構築まで継続して伴走",
    ],
    price: [
      { label: "初期費用", value: "300,000円〜" },
      { label: "月額", value: "100,000円〜", note: "サポート・支援・追加構築を含む" },
    ],
  },
  {
    name: "myWorkspace",
    logo: "/img/myworkspace-logo.png",
    category: "ビジネスツール一元管理プラットフォーム",
    catch: "散らばったツールを、ひとつの画面に。",
    features: [
      "Slack・Chatwork・LINE WORKS・Googleカレンダーを横断集約",
      "オンライン会議の議事録も自動で記録・一元管理",
      "クライアントごとの連絡手段を切り替えず一画面で把握",
      "一人法人・個人事業主のための“自分専用”ワークスペース",
    ],
    price: [
      { label: "初期費用", value: "50,000円〜", note: "連携ツールに応じて変動" },
      {
        label: "月額",
        value: "3,000円〜",
        note: "スタンダード 3,000円／AIプラン 5,000円",
      },
    ],
  },
  {
    name: "SERA",
    logo: "/img/sera-logo.png",
    category: "AI秘書ツール",
    catch: "あなたの時間を守る、AI秘書。",
    features: [
      "複数Googleアカウントのメール・カレンダーを一元管理",
      "個人タスク・メモ・会議議事録をひとつに集約",
      "気になるニュースをAIが自動で収集・通知",
      "英語ニュースも翻訳・要約・音声要約で“ながら”インプット",
    ],
    price: [
      { label: "初期費用", value: "10,000円" },
      { label: "月額", value: "2,000円" },
    ],
  },
];

// 料金の表示切り替え（true で表示 / false で非表示）
// ※ 費用面を一旦非表示にするため false にしています。再表示する場合は true に戻してください。
const SHOW_PRICE = false;

export default function ProductSection() {
  return (
    <FadeUpSection
      id="product"
      className="min-h-screen flex items-center py-24 md:py-32"
    >
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Product
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 mb-12" />
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-relaxed mb-6">
          自社プロダクト
        </h3>
        <p className="text-base md:text-lg text-white/60 leading-relaxed mb-12">
          現場での構築ノウハウを、すぐに使えるプロダクトとして提供しています。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="glass flex flex-col">
              {/* ロゴ（白背景パネル：濃色ロゴを視認できるように） */}
              <div className="bg-white flex items-center justify-center py-8 px-6">
                <Image
                  src={product.logo}
                  alt={product.name}
                  width={240}
                  height={120}
                  unoptimized
                  className="h-42 md:h-50 w-auto object-contain"
                />
              </div>

              {/* 本文 */}
              <div className="flex flex-col flex-1 px-4 py-6 md:px-6 md:py-8">
                {/* 種別ラベル */}
                <p className="text-xs tracking-[0.15em] text-white/40 mb-3">
                  {product.category}
                </p>

                {/* キャッチコピー */}
                <h4 className="text-lg md:text-xl font-bold text-white leading-relaxed mb-6">
                  {product.catch}
                </h4>

                {/* 機能詳細 */}
                <ul className="space-y-3 flex-1">
                  {product.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-1 text-sm text-white/75 leading-relaxed"
                    >
                      <span className="gradient-text mt-0.5 shrink-0">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* 料金（SHOW_PRICE で表示切り替え） */}
                {SHOW_PRICE && (
                <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                  {product.price.map((row, i) => (
                    <div
                      key={i}
                      className="flex items-baseline justify-between gap-3"
                    >
                      <span className="text-xs text-white/40 shrink-0">
                        {row.label}
                      </span>
                      <div className="text-right">
                        <span className="text-lg md:text-xl font-black gradient-text">
                          {row.value}
                        </span>
                        {row.note && (
                          <p className="text-[10px] text-white/40 mt-1 leading-snug">
                            {row.note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeUpSection>
  );
}
