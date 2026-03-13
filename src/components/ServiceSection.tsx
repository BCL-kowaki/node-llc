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
  { title: "生成AI/LLM\n導入支援", icon: faRobot },
  { title: "AIソフトウェア\n研究開発", icon: faMicrochip },
  { title: "AIエージェント\n開発", icon: faBolt },
  { title: "AI学習データ\n構築", icon: faDatabase },
  { title: "AIコンテンツ\n制作", icon: faPaintBrush },
  { title: "AI研修・\n人材育成", icon: faGraduationCap },
  { title: "IT/DX\nコンサルティング", icon: faLightbulb },
  { title: "AI広告運用\n分析", icon: faChartLine },
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
              企画から運用まで、
            <br />
            一気通貫で。
          </span>
          <span className="hidden sm:inline">
          企画から運用まで、一気通貫で。
          </span>
            </h3>
            <div className="space-y-5 text-base md:text-lg text-white/75 leading-relaxed">
              <p>
                AIを導入したい。でも、何から始めればいいかわからない。
                そんなご相談をよくいただきます。
              </p>
              <p>
                nodeは企画・設計・開発・運用・教育まで、
                すべてワンストップで対応します。
                部分的なサポートも、もちろん可能です。
              </p>
              <p>
                必要なのは「相談してみよう」という一歩だけ。
                あとはわたしたちが一緒に考えます。
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
