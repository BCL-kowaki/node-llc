import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../_components/ContactForm";
import ParticleField from "../_components/ParticleField";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import styles from "../test.module.css";

export const metadata: Metadata = {
  title: "お問い合わせ | 合同会社node",
  description: "合同会社nodeへのご相談・お問い合わせはこちらから。",
};

export default function ContactPage() {
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
          <span>CONTACT</span>
        </div>
        <p className={styles.detailEnglish}>CONTACT</p>
        <h1>お問い合わせ</h1>
        <p className={styles.detailLead}>まずは、現場の話からお聞かせください。</p>
      </section>

      <section className={styles.contactPageBody}>
        <div className={styles.contactIntro}>
          <p>
            「何を頼めばいいか分からない」という段階で構いません。要件書も企画書も不要です。現状をお聞かせいただければ、課題の整理から、効果の出やすい最初の一歩までご提案します。
          </p>
          <p>
            サービス内容のご質問、お見積もり、協業のご相談など、どんな内容でもお気軽にどうぞ。
          </p>
          <p className={styles.contactNote}>※ 3営業日以内にご返信いたします。</p>
        </div>
        <ContactForm />
      </section>

      <SiteFooter />
    </main>
  );
}
