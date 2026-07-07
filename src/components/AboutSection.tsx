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
          提案で終わらない。実装で変える。
        </h3>

        <div className="space-y-6 text-base md:text-lg text-white/75 leading-relaxed max-w-4xl">
          <p>
            FDEとは、Forward Deployed Engineerの略。
            顧客の現場に入り、課題を見つけ、コードを書き、
            AIが実際の業務で動く状態まで持っていく役割です。
          </p>
          <p>
            nodeはこのFDEの思想を軸に、生成AI・LLM・AIエージェントを
            既存の業務フローやデータ、チームの動きに接続します。
            単なるツール導入ではなく、現場の使い方そのものを設計します。
          </p>
          <p className="gradient-text font-bold text-lg md:text-xl">
            AIを「使ってみた」で終わらせず、成果が出る仕組みにすること。
          </p>
          <p>
            必要であれば、業務整理、プロトタイプ開発、システム連携、
            社内定着、研修、運用改善まで入ります。
            現場の横で考え、作り、変えていくことがnodeの主力サービスです。
          </p>
        </div>
      </div>
    </FadeUpSection>
  );
}
