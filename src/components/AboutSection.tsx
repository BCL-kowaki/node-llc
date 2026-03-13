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
          AI技術で考える、つくる、実現する、
          <br className="hidden md:block" />
          そしてビジネスの未来へとつなげる。
        </h3>

        <div className="space-y-6 text-base md:text-lg text-white/75 leading-relaxed max-w-4xl">
          <p>
            私たちnodeは、生成AIや大規模言語モデル（LLM）の最前線に立ち、
            企業のAI導入から活用までをトータルでサポートします。
          </p>
          <p>
            AIがビジネスを変革する時代、必要なのは確かな技術力と実装力です。
            私たちは、AIエージェントや業務自動化ツールの開発、AI学習データの構築、
            デジタルコンテンツ制作まで、幅広い領域でお客様の課題を解決します。
          </p>
          <p className="gradient-text font-bold text-lg md:text-xl">
            お客様のDX推進は、私たちの使命です。
          </p>
          <p>
            だからこそ、私たちはお客様と共に歩み続け、急速に進化するAI技術を活用しながら、
            ビジネスの可能性を最大限に引き出します。
            AI時代のパートナーとして、私たちはお客様のビジネスの成長と発展に寄与します。
          </p>
        </div>

        {/* 代表者挨拶 */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="mb-12">
            <h2
              className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Message
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 mb-12" />
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-relaxed mb-12">
            テクノロジーの力で、
            <br className="hidden md:block" />
            ビジネスの可能性を共に切り拓く。
          </h3>

          <div className="space-y-6 text-base md:text-lg text-white/75 leading-relaxed max-w-4xl">
            <p>
              合同会社nodeのページをご覧いただき、誠にありがとうございます。
            </p>
            <p>
              AI技術は今まさに、あらゆる産業のあり方を根本から変えようとしています。
              私たちnodeは、この変革の最前線で、お客様と共にビジネスの未来を切り拓くパートナーでありたいと考えています。
            </p>
            <p>
              生成AIやLLMの技術を正しく理解し、ビジネスの現場で確実に成果を出すこと。
              それが私たちの提供する価値です。
              お気軽にお問い合わせください。
            </p>
          </div>

          <p className="text-white/50 text-base md:text-lg mt-12">
            合同会社node CEO　<span className="text-white font-bold">小脇 拓哉</span>
          </p>
        </div>
      </div>
    </FadeUpSection>
  );
}
