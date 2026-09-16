import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../../_components/SiteFooter";
import SiteHeader from "../../../_components/SiteHeader";
import { getService } from "../../../_data/services";
import styles from "../../../test.module.css";

export const metadata: Metadata = {
  title: "デモサイト一覧 | 合同会社node",
  description: "合同会社nodeが制作したWebサイトのデモをご覧いただけます。",
};

export default function WebProductionDemosPage() {
  const demos = getService("web-production")?.demos ?? [];

  return (
    <main className={styles.site}>
      <SiteHeader />
      <section className={styles.demoArchive}>
        <div className={styles.breadcrumbs}>
          <Link href="/">TOP</Link>
          <span>/</span>
          <Link href="/services/web-production">WEBサイト制作</Link>
          <span>/</span>
          <span>DEMO</span>
        </div>
        <div className={styles.demoArchiveLead}>
          <p className={styles.sectionLabel}>DEMO SITES</p>
          <p>業種や目的に合わせた、さまざまなWebサイトの制作例です。</p>
        </div>
        <div className={styles.demoArchiveGrid}>
          {demos.map((demo) => (
            <a key={demo.title} className={styles.demoCard} href={demo.url} target="_blank" rel="noopener noreferrer">
              <span className={styles.demoImageWrap}>
                <Image
                  src={demo.image}
                  alt={`${demo.title}をノートPCとスマートフォンに表示した画面`}
                  width={1448}
                  height={1086}
                  unoptimized
                />
              </span>
              <span className={styles.demoCaption}>
                <b>{demo.title}</b>
                <span>{demo.note}</span>
              </span>
              <span className={styles.demoLink}>
                デモを見る <i aria-hidden="true">↗︎</i>
              </span>
            </a>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
