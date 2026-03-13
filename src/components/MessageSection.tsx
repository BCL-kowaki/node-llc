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
            WEB制作、広告運用、社内システム構築。
            10年以上デジタルの現場で手を動かし続けるなかで、
            生成AIと出会いました。
          </p>
          <p>
            この技術を正しく使いこなせれば、ビジネスは確実に変わる。
            その確信が、nodeの原点です。
          </p>
          <p>
            技術の話を難しくするつもりはありません。
            お客様のビジネスで何が変わるのか、何ができるようになるのか。
            そこに集中して、一緒に答えを出していきます。
          </p>
        </div>

        <p className="text-white/50 text-base md:text-lg mt-12">
          合同会社node CEO　<span className="text-white font-bold">小脇 拓哉</span>
        </p>
      </div>
    </FadeUpSection>
  );
}
