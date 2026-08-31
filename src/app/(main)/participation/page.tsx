import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import ContactCta from "../_components/ContactCta";
import ParticleField from "../_components/ParticleField";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import { works } from "../_data/works";
import styles from "../test.module.css";

export const metadata: Metadata = {
  title: "参画プロジェクト | 合同会社node",
  description: "合同会社nodeが参画している、サービス開発・Webサイト制作・ブランドづくりのプロジェクトをご紹介します。",
};

type SoftStyle = CSSProperties & { "--work-soft": string; "--work-accent": string };

export default function ParticipationPage() {
  return (
    <main className={styles.site}>
      {/* メインビジュアルの白い下地(粒子キャンバスより背面) */}
      <div className={styles.heroWhiteBackdrop} data-hero-backdrop aria-hidden="true" />
      <ParticleField heroOnly compactOnMobile />
      <SiteHeader />

      <section className={`${styles.detailHero} ${styles.companyHero}`}>
        <div className={styles.breadcrumbs}>
          <Link href="/">TOP</Link>
          <span>/</span>
          <span>PARTICIPATION</span>
        </div>
        <p className={styles.detailEnglish}>PARTICIPATION</p>
        <h1>参画プロジェクト</h1>
        <p className={styles.detailLead}>
          nodeがチームの一員として参画し、いま一緒に前へ進めているプロジェクトです。
        </p>
      </section>

      <section className={styles.workList}>
        {works.map((work) => {
          const softStyle: SoftStyle = { "--work-soft": work.soft, "--work-accent": work.accent };
          return (
            <article key={work.slug} className={styles.workItem} style={softStyle}>
              <div className={`${styles.workVisual} ${styles.workVisualPair}`}>
                {work.images.map((image, imageIndex) => (
                  <div
                    className={`${styles.phoneFrame} ${imageIndex === 1 ? styles.phoneFrameSecond : ""}`}
                    key={image.src}
                  >
                    <Image
                      src={image.src}
                      alt={`${work.title}の画面${imageIndex + 1}`}
                      width={image.width}
                      height={image.height}
                      unoptimized
                      className={`${styles.phoneScreen} ${image.contain ? styles.phoneScreenContain : ""}`}
                    />
                  </div>
                ))}
              </div>
              <div className={styles.workCopy}>
                <p className={styles.workEnglish}>{work.englishTitle}</p>
                <h2>{work.title}</h2>
                <div className={styles.workTags}>
                  {work.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {work.description.map((paragraph) => (
                  <p key={paragraph.slice(0, 20)} className={styles.workDescription}>
                    {paragraph}
                  </p>
                ))}
                {work.url && (
                  <a
                    className={styles.workLink}
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW SITE <b aria-hidden="true">{"↗\uFE0E"}</b>
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </section>

      <ContactCta />
      <SiteFooter />
    </main>
  );
}
