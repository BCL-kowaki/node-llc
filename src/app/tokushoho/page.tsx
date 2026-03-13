import Link from "next/link";

export const metadata = {
  title: "特定商取引法に基づく表記 | 合同会社node",
};

export default function TokushohoPage() {
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
          Specified Commercial Transactions Act
        </h1>
        <p className="text-white/50 text-sm mb-12">特定商取引法に基づく表記</p>

        <div className="glass p-8 md:p-10 space-y-6">
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-white/10">
            <dt className="md:w-48 text-white/50 text-sm tracking-wider shrink-0">
              販売事業者
            </dt>
            <dd className="text-white text-base">合同会社node</dd>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-white/10">
            <dt className="md:w-48 text-white/50 text-sm tracking-wider shrink-0">
              代表責任者
            </dt>
            <dd className="text-white text-base">小脇 拓哉</dd>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-white/10">
            <dt className="md:w-48 text-white/50 text-sm tracking-wider shrink-0">
              所在地
            </dt>
            <dd className="text-white text-base">
              〒810-0014 福岡県福岡市中央区平尾3丁目14-17
            </dd>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-white/10">
            <dt className="md:w-48 text-white/50 text-sm tracking-wider shrink-0">
              電話番号
            </dt>
            <dd className="text-white text-base">050-0000-0000</dd>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-white/10">
            <dt className="md:w-48 text-white/50 text-sm tracking-wider shrink-0">
              メールアドレス
            </dt>
            <dd className="text-white text-base">info@node-llc.com</dd>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-white/10">
            <dt className="md:w-48 text-white/50 text-sm tracking-wider shrink-0">
              販売URL
            </dt>
            <dd className="text-white text-base">https://node-llc.com</dd>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-white/10">
            <dt className="md:w-48 text-white/50 text-sm tracking-wider shrink-0">
              販売価格
            </dt>
            <dd className="text-white text-base">
              各サービスページに記載の価格に準じます。
              <br />
              <span className="text-white/50 text-sm">
                ※案件内容に応じて個別にお見積りいたします。
              </span>
            </dd>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-white/10">
            <dt className="md:w-48 text-white/50 text-sm tracking-wider shrink-0">
              販売価格以外の
              <br className="hidden md:block" />
              必要料金
            </dt>
            <dd className="text-white text-base">
              消費税、振込手数料（お客様負担）
            </dd>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-white/10">
            <dt className="md:w-48 text-white/50 text-sm tracking-wider shrink-0">
              お支払い方法
            </dt>
            <dd className="text-white text-base">銀行振込</dd>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-white/10">
            <dt className="md:w-48 text-white/50 text-sm tracking-wider shrink-0">
              お支払い時期
            </dt>
            <dd className="text-white text-base">
              月額プラン：毎月末日締め、翌月末日払い
              <br />
              単発案件：契約時に定める支払条件に準じます
            </dd>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-white/10">
            <dt className="md:w-48 text-white/50 text-sm tracking-wider shrink-0">
              サービス提供時期
            </dt>
            <dd className="text-white text-base">
              ご契約後、双方合意のスケジュールに基づき提供を開始します。
            </dd>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-white/10">
            <dt className="md:w-48 text-white/50 text-sm tracking-wider shrink-0">
              キャンセル・解約
            </dt>
            <dd className="text-white text-base">
              月額プラン：解約希望月の前月末日までにご連絡ください。
              <br />
              単発案件：着手後のキャンセルについては、進捗に応じた費用をご請求する場合があります。
            </dd>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4">
            <dt className="md:w-48 text-white/50 text-sm tracking-wider shrink-0">
              返品・返金
            </dt>
            <dd className="text-white text-base">
              サービスの性質上、提供開始後の返品・返金は原則としてお受けしておりません。
              <br />
              <span className="text-white/50 text-sm">
                ※サービス内容に重大な瑕疵がある場合は、個別にご対応いたします。
              </span>
            </dd>
          </div>
        </div>

        <p className="text-white/40 text-sm pt-8">
          制定日：2026年3月
        </p>
      </div>
    </div>
  );
}
