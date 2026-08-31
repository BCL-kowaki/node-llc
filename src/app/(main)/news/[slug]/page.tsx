import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NoteBanner from "../../_components/NoteBanner";
import ParticleField from "../../_components/ParticleField";
import SiteFooter from "../../_components/SiteFooter";
import SiteHeader from "../../_components/SiteHeader";
import { getNewsPost, newsPosts } from "../../_data/news";
import styles from "../../test.module.css";

type NewsPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | 合同会社node`,
    description: post.body[0],
  };
}

export default async function NewsArticlePage({ params }: NewsPageProps) {
  const { slug } = await params;
  const post = getNewsPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.site}>
      {/* メインビジュアルの白い下地(粒子キャンバスより背面) */}
      <div className={styles.heroWhiteBackdrop} data-hero-backdrop aria-hidden="true" />
      <ParticleField heroOnly compactOnMobile />
      <SiteHeader />

      <section className={`${styles.detailHero} ${styles.companyHero} ${styles.articleHero}`}>
        <div className={styles.breadcrumbs}>
          <Link href="/">TOP</Link>
          <span>/</span>
          <Link href="/news">NEWS</Link>
        </div>
        <div className={styles.articleMeta}>
          <time className={styles.newsDate} dateTime={post.dateISO}>
            {post.date}
          </time>
          <span className={styles.newsCategory}>{post.category}</span>
        </div>
        <h1>{post.title}</h1>
      </section>

      <section className={styles.articleSection}>
        <div className={styles.articleBody}>
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          {post.sourceUrl && (
            <p className={styles.contactNote}>
              出典:{" "}
              <a href={post.sourceUrl} target="_blank" rel="noopener noreferrer">
                {post.sourceName ?? post.sourceUrl}
              </a>
            </p>
          )}
          <Link className={styles.articleBack} href="/news">
            ← お知らせ一覧へ戻る
          </Link>
        </div>

        <NoteBanner />
      </section>

      <SiteFooter />
    </main>
  );
}
