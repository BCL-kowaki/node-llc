import type { Metadata } from "next";
import Link from "next/link";
import NoteBanner from "../_components/NoteBanner";
import ParticleField from "../_components/ParticleField";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import { newsPosts } from "../_data/news";
import styles from "../test.module.css";

export const metadata: Metadata = {
  title: "お知らせ | 合同会社node",
  description: "合同会社nodeからの公式なお知らせ一覧です。",
  robots: { index: false, follow: false },
};

export default function NewsPage() {
  return (
    <main className={styles.site}>
      {/* メインビジュアルの白い下地(粒子キャンバスより背面) */}
      <div className={styles.heroWhiteBackdrop} aria-hidden="true" />
      <ParticleField heroOnly />
      <SiteHeader />

      <section className={`${styles.detailHero} ${styles.companyHero}`}>
        <div className={styles.breadcrumbs}>
          <Link href="/test">TOP</Link>
          <span>/</span>
          <span>NEWS</span>
        </div>
        <p className={styles.detailEnglish}>NEWS</p>
        <h1>お知らせ</h1>
        <p className={styles.detailLead}>nodeからの公式なお知らせをお届けします。</p>
      </section>

      <section className={styles.newsSection}>
        <div className={styles.newsList}>
          {newsPosts.map((post) => (
            <Link key={post.slug} href={`/test/news/${post.slug}`}>
              <time className={styles.newsDate} dateTime={post.dateISO}>
                {post.date}
              </time>
              <span className={styles.newsCategory}>{post.category}</span>
              <span className={styles.newsTitle}>{post.title}</span>
              <b className={styles.newsArrow} aria-hidden="true">
                ↗
              </b>
            </Link>
          ))}
        </div>

        <NoteBanner />
      </section>

      <SiteFooter />
    </main>
  );
}
