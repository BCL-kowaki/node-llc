import Image from "next/image";
import styles from "../test.module.css";

// 代表こわっきーのnoteブログへ誘導するバナー
export default function NoteBanner() {
  return (
    <a
      className={styles.noteBanner}
      href="https://note.com/kowackey13824"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.noteBannerLogo}>
        {/* note公式のワードマークロゴ(黒)をCSSで白反転して表示 */}
        <Image src="/img/note-logo.svg" alt="note" width={98} height={22} unoptimized />
      </span>
      <span className={styles.noteBannerText}>
        <p>CEO BLOG ON NOTE</p>
        <strong>代表・こわっきーのnoteで、現場のリアルとAI活用の実践知を発信中</strong>
      </span>
      <b className={styles.noteBannerArrow} aria-hidden="true">
        ↗
      </b>
    </a>
  );
}
