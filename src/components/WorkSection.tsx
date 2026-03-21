"use client";

import FadeUpSection from "./FadeUpSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareNodes,
  faUsers,
  faBullhorn,
  faVideo,
  faTowerBroadcast,
  faNewspaper,
  faMagnifyingGlass,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const works: { title: string; icon: IconDefinition }[] = [
  { title: "独自SNS\nプラットフォーム構築", icon: faShareNodes },
  { title: "CRM\nプラットフォーム構築", icon: faUsers },
  { title: "営業マネジメント\nインフラ構築", icon: faBriefcase },
  { title: "広告一元管理\nプラットフォーム構築", icon: faBullhorn },
  { title: "動画配信\nプラットフォーム構築", icon: faVideo },
  { title: "LiveStreaming\nプラットフォーム構築", icon: faTowerBroadcast },
  { title: "情報配信\nプラットフォーム構築", icon: faNewspaper },
  { title: "SEO対策\nプラットフォーム構築", icon: faMagnifyingGlass },
];

export default function WorkSection() {
  return (
    <FadeUpSection id="work" className="min-h-screen flex items-center py-24 md:py-32">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Work
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 mb-12" />
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-relaxed mb-6">
          これまでの実績
        </h3>
        <p className="text-base md:text-lg text-white/60 leading-relaxed mb-12">
          業種・規模を問わず、様々なプラットフォーム構築を手がけてきました。
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {works.map((work, index) => (
            <div
              key={index}
              className="service-card p-4 flex flex-col items-center justify-center text-center min-h-[150px] gap-3"
            >
              <span className="text-2xl gradient-icon">
                <FontAwesomeIcon icon={work.icon} />
              </span>
              <span className="text-sm font-bold text-white/90 whitespace-pre-line leading-relaxed">
                {work.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </FadeUpSection>
  );
}
