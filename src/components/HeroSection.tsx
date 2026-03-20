"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section id="hero" className="snap-page relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-purple-500/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full bg-red-500/5 blur-3xl" />

      <div className="w-[95%] mx-auto relative z-10">
        <h1
          className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="sm:hidden">
            AIと共創する、
            <br />
            未来のかたち。
          </span>
          <span className="hidden sm:inline">
            AIと共創する、未来のかたち。
          </span>
        </h1>
        <p
          className={`text-base sm:text-xl md:text-2xl lg:text-3xl font-light text-white/80 leading-relaxed transition-all duration-1000 delay-300 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          生成AI・LLM・AIエージェント。
          <br className="hidden sm:block" />
          企画から実装まで、ビジネスの未来を共に描く。
        </p>
      </div>

      {/* Scroll indicator - 下部固定配置 */}
      <div
        className={`absolute bottom-8 left-[5%] z-10 transition-all duration-1000 delay-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-start gap-2">
          <span className="text-xs tracking-[0.3em] text-white/40 uppercase" style={{ fontFamily: "var(--font-heading)" }}>
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
