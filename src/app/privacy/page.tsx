import Link from "next/link";

export const metadata = {
  title: "プライバシーポリシー | 合同会社node",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-white/50 text-sm hover:text-white transition-colors mb-12 inline-block"
        >
          ← トップに戻る
        </Link>

        <h1
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Privacy Policy
        </h1>
        <p className="text-white/50 text-sm mb-12">プライバシーポリシー</p>

        <div className="space-y-10 text-white/75 text-base leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-lg mb-4">1. 個人情報の取得について</h2>
            <p>
              合同会社node（以下「当社」）は、お問い合わせフォーム等を通じて、
              お名前、メールアドレス、電話番号等の個人情報を取得することがあります。
              個人情報の取得は、適正かつ公正な手段により行います。
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4">2. 個人情報の利用目的</h2>
            <p>当社は、取得した個人情報を以下の目的で利用いたします。</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>お問い合わせへの回答・対応</li>
              <li>当社サービスに関する情報のご案内</li>
              <li>サービスの提供・改善のため</li>
              <li>契約の履行・管理のため</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4">3. 個人情報の第三者提供</h2>
            <p>
              当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4">4. 個人情報の安全管理</h2>
            <p>
              当社は、個人情報の漏洩、滅失、毀損等を防止するために、
              適切なセキュリティ対策を講じ、個人情報の安全管理に努めます。
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4">5. 個人情報の開示・訂正・削除</h2>
            <p>
              ご本人から個人情報の開示・訂正・削除等のご請求があった場合は、
              本人確認の上、合理的な期間内に対応いたします。
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4">6. Cookieの使用について</h2>
            <p>
              当社のウェブサイトでは、利便性の向上やアクセス解析のためにCookieを使用する場合があります。
              ブラウザの設定により、Cookieの受け取りを拒否することが可能です。
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4">7. プライバシーポリシーの変更</h2>
            <p>
              当社は、必要に応じて本ポリシーを変更することがあります。
              変更後のプライバシーポリシーは、当ウェブサイトに掲載した時点で効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-4">8. お問い合わせ窓口</h2>
            <p>個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。</p>
            <div className="mt-4 glass p-6 space-y-2">
              <p className="text-white font-bold">合同会社node</p>
              <p>〒810-0014 福岡県福岡市中央区平尾3丁目14-17</p>
              <p>メール：info@node-llc.com</p>
            </div>
          </section>

          <p className="text-white/40 text-sm pt-6">
            制定日：2026年3月
          </p>
        </div>
      </div>
    </div>
  );
}
