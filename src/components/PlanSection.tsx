"use client";

import FadeUpSection from "./FadeUpSection";

const plans = [
  {
    name: "Light",
    nameJa: "ライトプラン",
    price: "5万円〜",
    description: "活用支援",
    features: [
      "AI活用に関するご相談",
      "導入プランのご提案",
      "ツール選定サポート",
    ],
  },
  {
    name: "Standard",
    nameJa: "スタンダードプラン",
    price: "15万円〜",
    description: "研修・人材育成",
    features: [
      "ライトプランの全内容",
      "AI研修プログラム設計",
      "社内人材の育成支援",
      "定期フォローアップ",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    nameJa: "エンタープライズ",
    price: "ASK",
    description: "フルカスタム対応",
    features: [
      "スタンダードプランの全内容",
      "専用AI開発・実装",
      "システムインテグレーション",
      "専任チームによる伴走支援",
    ],
  },
];

export default function PlanSection() {
  return (
    <FadeUpSection id="plan" className="min-h-screen flex items-center py-24 md:py-32">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Plan
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 mb-12" />
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-relaxed mb-6">
          料金プラン
        </h3>
        <p className="text-base md:text-lg text-white/60 leading-relaxed mb-12">
          お客様の規模・目的に合わせた最適なプランをご用意しています。
          <br />
          <span className="text-sm text-white/40">
            ※上記は月額プランの料金です。システム開発・プラットフォーム構築等の単発案件については、別途お見積りとなります。
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 ${
                plan.popular
                  ? "plan-card-popular"
                  : "glass"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 to-purple-500" />
              )}

              {/* Plan name */}
              <p
                className="text-xs tracking-[0.2em] text-white/40 uppercase mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {plan.name}
              </p>
              <h4 className="text-xl font-bold text-white mb-2">
                {plan.nameJa}
              </h4>

              {/* Price */}
              <div className="mb-4">
                <span className="text-2xl md:text-3xl font-black gradient-text">
                  {plan.price}
                </span>
                {plan.price !== "ASK" && (
                  <span className="text-sm text-white/40 ml-1">/月</span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-white/60 mb-6 pb-6 border-b border-white/10">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/75">
                    <span className="gradient-text mt-0.5 shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </FadeUpSection>
  );
}
