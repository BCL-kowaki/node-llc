import Link from "next/link";
import styles from "../test.module.css";

export default function ContactCta() {
  return (
    <section id="contact" className={styles.contactCta}>
      <div className={styles.contactDots} aria-hidden="true" />
      <p className={styles.sectionLabel}>CONTACT</p>
      <div className={styles.contactCtaBody}>
        <h2>
          まだ言葉になっていない課題から<span className={styles.serifPunct}>、</span>
          <br />
          お聞かせください。
        </h2>
        <p>
          「何を頼めばいいか分からない」――それは、いちばん相談しがいのあるタイミングです。
          <br />
          要件書も企画書もいりません。現状をお聞かせいただければ、課題の整理から、効果の出やすい最初の一歩までご提案します。
        </p>
        <Link className={styles.contactButton} href="/contact">
          お問い合わせ
          <span aria-hidden="true">{"↗\uFE0E"}</span>
        </Link>
      </div>
    </section>
  );
}
