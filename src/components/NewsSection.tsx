import FadeUpSection from "./FadeUpSection";

const news = [
  {
    date: "2026.03.13",
    title: "合同会社nodeを設立いたしました",
    description:
      "AI技術でビジネスの未来を創造するため、合同会社nodeを設立いたしました。生成AI・LLM・AIエージェントの開発を中心に、企業のDX推進を支援してまいります。",
  },
  {
    date: "2026.03.13",
    title: "コーポレートサイトを公開しました",
    description:
      "合同会社nodeのコーポレートサイトを公開いたしました。サービス内容やお問い合わせなど、お気軽にご覧ください。",
  },
];

export default function NewsSection() {
  return (
    <FadeUpSection id="news" className="py-24 md:py-32">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            News
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 mb-12" />
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-relaxed mb-12">
          お知らせ
        </h3>

        <div className="space-y-0">
          {news.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-2 md:gap-8 py-6 border-b border-white/10"
            >
              <time className="md:w-36 text-white/40 text-sm tracking-wider shrink-0 pt-1">
                {item.date}
              </time>
              <div>
                <h4 className="text-white font-bold text-base mb-2">
                  {item.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeUpSection>
  );
}
