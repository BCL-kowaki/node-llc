import Link from "next/link";
import styles from "../test.module.css";

export default function ContactCta() {
  return (
    <section id="contact" className={styles.contactCta}>
      <div className={styles.contactDots} aria-hidden="true" />
      <p className={styles.sectionLabel}>CONTACT</p>
      <div className={styles.contactCtaBody}>
        <h2>
          まとまっていない
          <br className={styles.spBreak} />
          課題も<span className={styles.serifPunct}>、</span>
          <br />
          そのまま丸投げで。
        </h2>
        <p>
          「何を頼めばいいか分からない」。それは、いちばん相談しがいのあるタイミングです。
          <br />
          要件書も企画書もいりません。現状をお聞かせいただければ、課題の整理から実行まで、nodeが引き受けます。
        </p>
        <Link className={styles.contactButton} href="/contact">
          丸投げを相談する
          <span aria-hidden="true">{"↗\uFE0E"}</span>
        </Link>
      </div>
    </section>
  );
}
