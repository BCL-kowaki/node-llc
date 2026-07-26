"use client";

import FadeUpSection from "./FadeUpSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faMicrochip,
  faBolt,
  faDatabase,
  faPaintBrush,
  faGraduationCap,
  faLightbulb,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const services: { title: string; icon: IconDefinition }[] = [
  { title: "KPI設計・\n目標逆算支援", icon: faRobot },
  { title: "FDE型AI\n実装支援", icon: faRobot },
  { title: "業務フロー\n再設計", icon: faLightbulb },
  { title: "AIエージェント\n開発", icon: faBolt },
  { title: "AIアプリケーション\n研究開発", icon: faMicrochip },
  { title: "データ整備・\nシステム連携", icon: faDatabase },
  { title: "AI研修・\n定着支援", icon: faGraduationCap },
  { title: "AIコンテンツ\n制作", icon: faPaintBrush },
  { title: "Webマーケティング・\nコンサル", icon: faChartLine },
];

export default function ServiceSection() {
  return (
    <FadeUpSection id="service" className="min-h-screen flex items-center py-24 md:py-32">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Service
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 mb-12" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Description */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-relaxed mb-8">
              <span className="sm:hidden">
                FDE型実装を、
                <br />
                目標達成の手段に。
              </span>
              <span className="hidden sm:inline">
                FDE型AI実装を、目標達成の手段に。
              </span>
            </h3>
            <div className="space-y-5 text-base md:text-lg text-white/75 leading-relaxed">
              <p>
                nodeの中心にあるのは、FDE型の伴走支援です。ただし目的はAI導入ではなく、KPIで測れる目標達成。顧客の現場を理解し、数字が動く業務設計と実装を進めます。
              </p>
              <p>
                企画、プロトタイプ、AIエージェント開発、データ連携、運用定着まで一気通貫で対応します。マネジメント経験を活かしたKPI設計や組織運営支援も、必要に応じて組み込みます。
              </p>
              <p>
                「AIを入れる」ではなく、「目標に向かって数字が動く」ところまで。そこに責任を持つのがnodeのFDEプランです。
              </p>
            </div>
          </div>

          {/* Right: Service cards */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card p-6 flex flex-col items-center justify-center text-center min-h-[140px] gap-3"
                >
                  <span className="text-2xl gradient-icon">
                    <FontAwesomeIcon icon={service.icon} />
                  </span>
                  <span className="text-sm font-bold text-white/90 whitespace-pre-line leading-relaxed">
                    {service.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeUpSection>
  );
}
