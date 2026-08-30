import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactCta from "../_components/ContactCta";
import NoteBanner from "../_components/NoteBanner";
import ParticleField from "../_components/ParticleField";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import styles from "../test.module.css";

export const metadata: Metadata = {
  title: "会社概要 | 合同会社node",
  description: "合同会社nodeの代表メッセージと会社概要をご紹介します。",
};

export default function CompanyPage() {
  return (
    <main className={styles.site}>
      {/* メインビジュアルの白い下地(粒子キャンバスより背面) */}
      <div className={styles.heroWhiteBackdrop} data-hero-backdrop aria-hidden="true" />
      <ParticleField heroOnly />
      <SiteHeader />

      <section className={`${styles.detailHero} ${styles.companyHero}`}>
        <div className={styles.breadcrumbs}>
          <Link href="/">TOP</Link>
          <span>/</span>
          <span>COMPANY</span>
        </div>
        <p className={styles.detailEnglish}>COMPANY</p>
        <h1>会社概要</h1>
        <p className={styles.detailLead}>
          事業と現場を、前へ。福岡から、全国へ。
        </p>
      </section>

      <section id="company" className={styles.companySection}>
        <div className={styles.companyImageWrap}>
          <div className={styles.companyImageDots} aria-hidden="true" />
          <Image
            src="/test/profile-transparent.png"
            alt="合同会社node CEO 小脇拓哉"
            width={1023}
            height={1537}
            sizes="(max-width: 800px) 84vw, 42vw"
            unoptimized
            className={styles.companyImage}
          />
          <p>
            TAKUYA KOWAKI
            <span>CEO / FORWARD DEPLOYED PARTNER</span>
          </p>
        </div>
        <div className={styles.companyCopy}>
          <p className={styles.sectionLabel}>MESSAGE</p>
          <h2>
            技術の先に<span className={styles.serifPunct}>、</span>
            <br />
            信頼がある。
          </h2>
          <p>
            Web制作、広告運用、動画、社内システム、AI活用。10年以上デジタルの現場で手を動かし、100名規模の組織マネジメントとKPI設計にも向き合ってきました。
          </p>
          <p>
            だからnodeは、技術だけでも、提案だけでも終わりません。お客様と同じ目標を見て、現場で使われ、結果につながるところまで一緒に進みます。
          </p>
          <NoteBanner />
        </div>
      </section>

      <section className={styles.companyProfileSection}>
        <p className={styles.sectionLabel}>PROFILE</p>
        <h2>会社概要</h2>
        <dl className={styles.companyFacts}>
          <div>
            <dt>会社名</dt>
            <dd>合同会社node</dd>
          </div>
          <div>
            <dt>事務所所在地</dt>
            <dd>〒810-0014 福岡県福岡市中央区平尾3丁目14-17</dd>
          </div>
          <div>
            <dt>代表者</dt>
            <dd>小脇 拓哉</dd>
          </div>
          <div>
            <dt>設立</dt>
            <dd>2026年3月18日</dd>
          </div>
          <div>
            <dt>資本金</dt>
            <dd>1,000,000円</dd>
          </div>
          <div>
            <dt>事業内容</dt>
            <dd>
              FDE型AI実装支援 / AIエージェント開発 / 業務フロー再設計 / AI研修・定着支援 /
              Web制作・広告運用 / Webマーケティング・コンサルティング
            </dd>
          </div>
        </dl>
      </section>

      <ContactCta />
      <SiteFooter />
    </main>
  );
}
