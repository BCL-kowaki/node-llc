import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import ContactCta from "../../_components/ContactCta";
import ParticleField from "../../_components/ParticleField";
import SiteFooter from "../../_components/SiteFooter";
import SiteHeader from "../../_components/SiteHeader";
import { getService, services } from "../../_data/services";
import styles from "../../test.module.css";

type AccentStyle = CSSProperties & {
  "--service-accent": string;
  "--service-soft": string;
};

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const supportIcons = ["field", "build", "connect", "improve"] as const;

// イメージカラー(#rrggbb)を粒子アニメーション用のRGB値へ変換する
function hexToRgb(hex: string): [number, number, number] {
  const value = hex.replace("#", "");
  return [
    parseInt(value.slice(0, 2), 16),
    parseInt(value.slice(2, 4), 16),
    parseInt(value.slice(4, 6), 16),
  ];
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  const title = `${service.title} | 合同会社node`;

  return {
    title,
    description: service.description,
    openGraph: {
      title,
      description: service.description,
      images: [],
    },
    twitter: {
      title,
      description: service.description,
      images: [],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const accentStyle: AccentStyle = {
    "--service-accent": service.accent,
    "--service-soft": service.accentSoft,
  };
  const relatedServices = service.related
    .map((relatedSlug) => getService(relatedSlug))
    .filter((relatedService) => relatedService !== undefined);

  return (
    <main className={styles.site} style={accentStyle}>
      {/* メインビジュアルの白い下地(粒子キャンバスより背面) */}
      <div className={styles.heroWhiteBackdrop} data-hero-backdrop aria-hidden="true" />
      <ParticleField colorFrom={hexToRgb(service.accent)} heroOnly />
      <SiteHeader />

      <section className={styles.detailHero}>
        <div className={styles.breadcrumbs}>
          <Link href="/">TOP</Link>
          <span>/</span>
          <Link href="/#services">SERVICES</Link>
          <span>/</span>
          <span>{service.number}</span>
        </div>
        <div className={styles.detailHeroGrid}>
          <div className={styles.detailHeroCopy}>
            <p className={styles.detailEnglish}>{service.englishTitle}</p>
            <h1>
              {service.titleParts.map((part) => (
                <span key={part}>{part}</span>
              ))}
            </h1>
            <p className={styles.detailLead}>{service.lead}</p>
            <p className={styles.detailDescription}>{service.description}</p>
            <a className={styles.detailButton} href="#service-contact">
              このサービスについて相談する
              <span aria-hidden="true">↘</span>
            </a>
          </div>
          {/* 右側はイメージを置かず、枠内に背後の粒子アニメーションをうっすら見せる */}
          <div className={styles.detailHeroVisualBlank} aria-hidden="true" />
        </div>
      </section>

      <section className={styles.outcomeStrip}>
        <p>WHAT CHANGES</p>
        <ol>
          {service.outcomes.map((outcome, index) => (
            <li key={outcome}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {outcome}
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.detailOverview}>
        <p className={styles.sectionLabel}>OVERVIEW</p>
        <div>
          <h2>
            手段ではなく<span className={styles.serifPunct}>、</span>
            <br />
            変化から設計する。
          </h2>
          <p>{service.overview}</p>
        </div>
      </section>

      <section className={styles.painSection}>
        <div className={styles.detailSectionHeading}>
          <p className={styles.sectionLabel}>COMMON CHALLENGES</p>
          <h2>こんな課題はありませんか。</h2>
        </div>
        <ul className={styles.painList}>
          {service.pains.map((pain, index) => (
            <li key={pain}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{pain}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.supportSection}>
        <div className={styles.detailSectionHeading}>
          <p className={styles.sectionLabel}>SUPPORT</p>
          <h2>nodeが支援すること。</h2>
        </div>
        <div className={styles.supportGrid}>
          {service.supports.map((support, index) => (
            <article key={support.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div className={styles.supportMark} aria-hidden="true">
                <Image
                  src={`/test/generated/support/${supportIcons[index % supportIcons.length]}.png`}
                  alt=""
                  width={640}
                  height={640}
                  unoptimized
                />
              </div>
              <h3>{support.title}</h3>
              <p>{support.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.deliverablesSection}>
        <div>
          <p className={styles.sectionLabel}>DELIVERABLES</p>
          <h2>
            必要なものを<span className={styles.serifPunct}>、</span>
            <br />
            必要な順番で。
          </h2>
          <p>目的と現状に合わせ、以下を組み合わせて支援範囲を設計します。</p>
        </div>
        <ol>
          {service.deliverables.map((deliverable, index) => (
            <li key={deliverable}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {deliverable}
              <i aria-hidden="true">↗</i>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.detailProcessSection}>
        <div className={styles.detailSectionHeading}>
          <p className={styles.sectionLabel}>PROCESS</p>
          <h2>進め方。</h2>
          <p>状況に応じて前後しながら、小さな確認を重ねて進めます。</p>
        </div>
        <ol className={styles.detailProcessList}>
          {service.process.map((step, index) => (
            <li key={step.title}>
              <div>
                <span>STEP {String(index + 1).padStart(2, "0")}</span>
                <i aria-hidden="true" />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.fitSection}>
        <div className={styles.fitBox}>
          <p className={styles.sectionLabel}>GOOD FIT FOR</p>
          <h2>このような方へ。</h2>
          <ul>
            {service.idealFor.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.faqBox}>
          <p className={styles.sectionLabel}>FAQ</p>
          <h2>よくあるご質問。</h2>
          <div>
            {service.faqs.map((faq, index) => (
              <details key={faq.question}>
                <summary>
                  <span>Q{String(index + 1).padStart(2, "0")}</span>
                  {faq.question}
                  <i aria-hidden="true">＋</i>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.detailSectionHeading}>
          <p className={styles.sectionLabel}>RELATED SERVICES</p>
          <h2>組み合わせて<span className={styles.serifPunct}>、</span>もっと前へ。</h2>
        </div>
        <div className={styles.relatedGrid}>
          {relatedServices.map((relatedService) => (
            <Link key={relatedService.slug} href={`/services/${relatedService.slug}`}>
              <span>{relatedService.number}</span>
              <h3>{relatedService.title}</h3>
              <p>{relatedService.cardCopy}</p>
              <b aria-hidden="true">↗</b>
            </Link>
          ))}
        </div>
      </section>

      <div id="service-contact">
        <ContactCta />
      </div>
      <SiteFooter />
    </main>
  );
}
