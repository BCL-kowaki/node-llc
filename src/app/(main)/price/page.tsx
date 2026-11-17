import type { Metadata } from "next";
import Link from "next/link";
import ContactCta from "../_components/ContactCta";
import ParticleField from "../_components/ParticleField";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import { services } from "../_data/services";
import styles from "../test.module.css";

export const metadata: Metadata = {
  title: "料金 | 合同会社node",
  description:
    "WEBサイト制作10万円〜、LP10万円〜、LINEハーネス導入5万円〜、AI研修 半日5万円〜、動画制作1本2万円〜。合同会社nodeの料金の目安です（税別）。",
};

// 料金の注意書き(料金ページの末尾に表示する)
const priceNotes = [
  "表示価格はすべて税別です。",
  "「〜」の価格は、最小構成で進める場合の目安です。ページ数、機能、写真や原稿の有無などで変わります。",
  "ASKの項目は、内容をうかがったうえでお見積もりします。",
  "広告費、LINE公式アカウントの配信料金、サーバーやドメインなどの外部サービスの利用料は別にかかります。",
  "正式な金額は、ヒアリングのあとにお見積書でご提示します。",
];

export default function PricePage() {
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
          <span>PRICE</span>
        </div>
        <p className={styles.detailEnglish}>PRICE</p>
        <h1>料金</h1>
        <p className={styles.detailLead}>まずは小さく、明朗な価格から始められます。</p>
      </section>

      <section className={styles.priceSection}>
        <p className={styles.sectionLabel}>PRICE LIST</p>
        <h2>料金の目安</h2>
        <p className={styles.priceIntro}>
          AIを使って制作・開発の工程を短くし、少人数で動くことで、営業や管理にかかる費用を抑えています。その分を価格に反映し、必要なものから小さく始められるようにしています。
        </p>

        <div className={styles.priceList}>
          {services.map((service) => (
            <article key={service.slug} className={styles.priceRow}>
              <Link href={`/services/${service.slug}`} className={styles.priceService}>
                <small>{service.number}</small>
                <span>{service.title}</span>
                <b aria-hidden="true">{"↗︎"}</b>
              </Link>
              <dl className={styles.priceItems}>
                {service.prices.map((price) => (
                  <div key={price.label}>
                    <dt>{price.label}</dt>
                    <dd>
                      {price.amount === "ASK" ? (
                        <strong>
                          ASK<span>個別お見積もり</span>
                        </strong>
                      ) : (
                        <strong>{price.amount}</strong>
                      )}
                      {price.note && <p>{price.note}</p>}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <ul className={styles.priceNotes}>
          {priceNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <ContactCta />
      <SiteFooter />
    </main>
  );
}
