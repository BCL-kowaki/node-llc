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
            Web制作、広告運用、社内システム構築。
            10年以上、デジタルの現場でずっと手を動かしてきました。
            「どうすれば、もっと現場がラクになるか」。
            いつもそればかり考えていた気がします。
          </p>
          <p>
            そんな中で出会ったのが、生成AIでした。
            正直、最初に触れたときの衝撃は忘れられません。
            これまで自分が何年もかけてやってきたことが、
            一瞬で形になる。
            「これは、とんでもないことが起きている」と思いました。
          </p>
          <p>
            同時に、確信したんです。
            この技術を正しく使いこなせれば、ビジネスは確実に変わる。
            現場の悩みを、もっと大きなスケールで解決できるようになる、と。
          </p>
          <p>
            だから、nodeをつくりました。
            難しい技術の話をしたいわけじゃありません。
            お客様のビジネスで何が変わるのか、何ができるようになるのか。
            そこだけに集中して、一緒に答えを出していきたい。
            それが僕のやりたいことです。
          </p>
        </div>

        <p className="text-white/50 text-base md:text-lg mt-12">
          合同会社node CEO　<span className="text-white font-bold">小脇 拓哉</span>
        </p>
      </div>
    </FadeUpSection>
  );
}
