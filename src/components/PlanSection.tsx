"use client";

import FadeUpSection from "./FadeUpSection";

const plans = [
  {
    name: "Spot",
    nameJa: "単発スポット",
    price: "5万円〜",
    description: "相談・研修・小規模制作",
    features: [
      "AI活用に関する壁打ち",
      "ツール選定・導入整理",
      "研修・資料制作・小規模開発",
    ],
  },
  {
    name: "FDE Core",
    nameJa: "FDE伴走プラン",
    price: "15万円〜",
    description: "主力のAI実装伴走",
    features: [
      "現場課題の整理・優先順位づけ",
      "AIエージェント・自動化の設計",
      "プロトタイプ開発・改善",
      "運用定着までの継続支援",
    ],
    popular: true,
  },
  {
    name: "FDE Enterprise",
    nameJa: "FDEエンタープライズ",
    price: "ASK",
    description: "組織横断のAI実装",
    features: [
      "FDE伴走プランの全内容",
      "既存システム・データ基盤連携",
      "専用AIアプリケーション開発",
      "部門横断の業務変革支援",
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
          FDEプラン
        </h3>
        <p className="text-base md:text-lg text-white/60 leading-relaxed mb-12">
          主力は、現場に入り込んでAI実装を進めるFDE伴走プランです。
          単発の相談・研修・制作も入口としてご利用いただけます。
          <br />
          <span className="text-sm text-white/40">
            ※上記は目安です。業務範囲、開発内容、連携システムに応じて個別にお見積りします。
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
