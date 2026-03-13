import FadeUpSection from "./FadeUpSection";

export default function AboutSection() {
  return (
    <FadeUpSection id="about" className="min-h-screen flex items-center py-24 md:py-32">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            ABOUT
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 mb-12" />
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-relaxed mb-12">
          導入の、その先へ。
        </h3>

        <div className="space-y-6 text-base md:text-lg text-white/75 leading-relaxed max-w-4xl">
          <p>
            AIを導入して終わり、ではもったいない。
            nodeは「現場で成果が出る状態」まで伴走します。
          </p>
          <p>
            AIエージェントの開発、業務自動化の設計、学習データの構築、
            コンテンツ制作、人材育成。
            領域は幅広くとも、目指すところはひとつです。
          </p>
          <p className="gradient-text font-bold text-lg md:text-xl">
            あなたの現場で、AIがちゃんと機能すること。
          </p>
          <p>
            技術だけでは届かない課題がある。
            だからこそ、わたしたちはお客様のチームの一員として、
            同じ目線で、同じ熱量で取り組みます。
          </p>
        </div>
      </div>
    </FadeUpSection>
  );
}
