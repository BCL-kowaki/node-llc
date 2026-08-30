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
  title: "実績 | 合同会社node",
  description: "合同会社nodeが手がけたサービス・Webサイト・ブランドデザインの実績をご紹介します。",
};

type SoftStyle = CSSProperties & { "--work-soft": string; "--work-accent": string };

export default function WorkPage() {
  return (
    <main className={styles.site}>
      {/* メインビジュアルの白い下地(粒子キャンバスより背面) */}
      <div className={styles.heroWhiteBackdrop} aria-hidden="true" />
      <ParticleField heroOnly />
      <SiteHeader />

      <section className={`${styles.detailHero} ${styles.companyHero}`}>
        <div className={styles.breadcrumbs}>
          <Link href="/">TOP</Link>
          <span>/</span>
          <span>WORK</span>
        </div>
        <p className={styles.detailEnglish}>WORK</p>
        <h1>実績</h1>
        <p className={styles.detailLead}>nodeが手がけたプロジェクトの一部をご紹介します。</p>
      </section>

      <section className={styles.workList}>
        {works.map((work) => {
          const softStyle: SoftStyle = { "--work-soft": work.soft, "--work-accent": work.accent };
          return (
            <article key={work.slug} className={styles.workItem} style={softStyle}>
              <div className={styles.workVisual}>
                <div className={styles.phoneFrame}>
                  <Image
                    src={work.image}
                    alt={`${work.title}の画面`}
                    width={work.imageWidth}
                    height={work.imageHeight}
                    unoptimized
                    className={`${styles.phoneScreen} ${
                      work.imageContain ? styles.phoneScreenContain : ""
                    }`}
                  />
                </div>
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
                    VIEW SITE <b aria-hidden="true">↗</b>
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
