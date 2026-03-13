"use client";

import FadeUpSection from "./FadeUpSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHeadset,
  faFileSignature,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const steps: { title: string; icon: IconDefinition; description: string }[] = [
  {
    title: "お問い合わせ",
    icon: faEnvelope,
    description: "フォームまたはお電話にてお気軽にご連絡ください。",
  },
  {
    title: "ヒアリング",
    icon: faHeadset,
    description: "課題や目的を丁寧にお伺いし、最適なプランをご提案します。",
  },
  {
    title: "ご契約",
    icon: faFileSignature,
    description: "プラン内容・お見積りにご納得いただいたうえで、契約を締結します。",
  },
  {
    title: "導入",
    icon: faRocket,
    description: "開発・構築を進め、スムーズな導入・運用開始までサポートします。",
  },
];

export default function FlowSection() {
  return (
    <FadeUpSection id="flow" className="min-h-screen flex items-center py-24 md:py-32">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Flow
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 mb-12" />
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-relaxed mb-6">
          導入の流れ
        </h3>
        <p className="text-base md:text-lg text-white/60 leading-relaxed mb-16">
          お問い合わせから導入まで、シンプルな4ステップ。
        </p>

        {/* Flow steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-18 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500/30 via-purple-500/30 to-red-500/30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Step number + icon */}
                <div className="relative z-10 w-32 h-32 md:w-36 md:h-36 flex items-center justify-center mb-6 glass">
                  <div className="flex flex-col items-center gap-2">
                    <span
                      className="text-2xl md:text-3xl tracking-widest text-white uppercase font-black"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-3xl md:text-4xl gradient-icon">
                      <FontAwesomeIcon icon={step.icon} />
                    </span>
                  </div>
                </div>

                {/* Arrow (mobile only) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-px h-8 bg-gradient-to-b from-white/20 to-transparent mb-4" />
                )}

                {/* Text */}
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed max-w-[240px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeUpSection>
  );
}
