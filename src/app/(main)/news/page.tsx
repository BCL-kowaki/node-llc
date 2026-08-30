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
};

export default function NewsPage() {
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
          <span>NEWS</span>
        </div>
        <p className={styles.detailEnglish}>NEWS</p>
        <h1>お知らせ</h1>
        <p className={styles.detailLead}>
          nodeからの公式なお知らせと、AI業界の注目ニュースをお届けします。
        </p>
      </section>

      <section className={styles.newsSection}>
        <p className={styles.newsNote}>
          <b>WEEKLY AI DIGEST</b>
          AIの法規制や主要AI企業の動きから、押さえておきたいトピックを毎週ピックアップして掲載しています。
        </p>
        <div className={styles.newsList}>
          {newsPosts.map((post) => (
            <Link key={post.slug} href={`/news/${post.slug}`}>
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
