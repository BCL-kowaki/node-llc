import FadeUpSection from "./FadeUpSection";

export default function MessageSection() {
  return (
    <FadeUpSection id="message" className="min-h-screen flex items-center py-24 md:py-32">
      <div className="w-[90%] max-w-6xl mx-auto">
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
          技術の先に、信頼がある。
        </h3>

        <div className="space-y-6 text-base md:text-lg text-white/75 leading-relaxed max-w-4xl">
          <p>
            はじめまして。node代表の小脇です。
          </p>
          <p>
            Web制作、広告運用、社内システム構築。10年以上、デジタルの現場でずっと手を動かしてきました。同時に、20代前半ではマネージャーとして100名規模の組織を動かし、KPI設計や業務改善の仕組みづくりにも向き合ってきました。
          </p>
          <p>
            「現場をラクにする」だけでは、実はゴールにたどり着けません。本当に大事なのは、その先にある「事業として何を達成したいか」という目標です。
          </p>
          <p>
            だからnodeは、単なるDX・AX支援では終わりません。KPI設計やマネジメント視点を持ち込みながら、お客様と同じ目標を見据え、そこに向かって一緒に走り切るパートナーでありたいと考えています。
          </p>
          <p>
            生成AIに出会ったとき、衝撃を受けました。これまで何年もかけてやってきたことが、一瞬で形になる。この技術を正しく使いこなせれば、業務効率化の先にある「目標達成」そのものを、もっと大きなスケールで実現できる。そう確信しました。
          </p>
          <p>
            だから、nodeをつくりました。難しい技術の話をしたいわけではありません。お客様のビジネスがどこを目指していて、そこにどう到達するか。KPIの設計から、組織のマネジメント支援、そして実装まで一気通貫で伴走し、目標達成という結果にコミットする。それが僕のやりたいことです。
          </p>
        </div>

        <p className="text-white/50 text-base md:text-lg mt-12">
          合同会社node CEO　<span className="text-white font-bold">小脇 拓哉</span>
        </p>
      </div>
    </FadeUpSection>
  );
}
