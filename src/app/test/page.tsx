import Image from "next/image";
import Link from "next/link";
import ContactCta from "./_components/ContactCta";
import ParticleField from "./_components/ParticleField";
import ServiceVisual from "./_components/ServiceVisual";
import SiteFooter from "./_components/SiteFooter";
import SiteHeader from "./_components/SiteHeader";
import { services } from "./_data/services";
import styles from "./test.module.css";

const approachItems = [
  {
    number: "01",
    title: "現場から考える",
    english: "DISCOVER",
    icon: "discover",
    description: "資料だけで判断せず、実際の業務と顧客の行動を見て、解くべき課題を見つけます。",
  },
  {
    number: "02",
    title: "つくって確かめる",
    english: "BUILD",
    icon: "build",
    description: "大きな計画を待つより、検証できる最小単位をつくり、現場の反応から学びます。",
  },
  {
    number: "03",
    title: "運用で育てる",
    english: "GROW",
    icon: "grow",
    description: "公開や導入をゴールにせず、数字と声を見ながら、成果が続く仕組みへ改善します。",
  },
];

const flow = [
  { step: "LISTEN", title: "相談・ヒアリング", text: "目標、現状、困っていることを、言葉になっていない部分も含めて伺います。" },
  { step: "DEFINE", title: "課題とゴールを定義", text: "誰の、どの行動を、どう変えるか。成果指標と優先順位を揃えます。" },
  { step: "MAKE", title: "制作・実装・検証", text: "必要なものから形にし、利用者の反応とデータで仮説を確かめます。" },
  { step: "IMPROVE", title: "運用・改善", text: "日々の業務へ組み込み、振り返りながら次の改善を進めます。" },
];

export default function TestHomePage() {
  return (
    <main className={styles.site}>
      {/* メインビジュアルの白い下地(粒子キャンバスより背面) */}
      <div className={styles.heroWhiteBackdrop} aria-hidden="true" />
      <ParticleField />
      <SiteHeader />

      <section className={styles.hero} data-particle-hero>
        <div className={styles.heroFieldFallback} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>DESIGN. BUILD. GROW.</p>
          <h1>
            事業と現場を<span className={styles.serifPunct}>、</span>
            <br />
            <span>前へ。</span>
          </h1>
          <p className={styles.lead}>
            つくって、納品して、終わり。そんな支援はしません。
            <br />
            現場で課題の根っこを見つけ、かたちにして、数字が動くまで磨き続ける。
            <br />
            nodeは、成果が出るまで隣を走り続ける伴走パートナーです。
          </p>
          <a className={styles.primaryButton} href="#services">
            OUR SERVICES
            <span aria-hidden="true">↘</span>
          </a>
        </div>

        <p className={styles.scrollCue}>SCROLL TO EXPLORE</p>
      </section>

      <section className={styles.statement} data-particle-statement>
        <p className={styles.sectionLabel}>WHAT WE DO</p>
        <div className={styles.statementBody}>
          <h2>
            点だった課題を<span className={styles.serifPunct}>、</span>
            <br />
            一本の<span>線</span>にする。
          </h2>
          <div className={styles.statementText}>
            <p>
              Web、広告、動画、システム、AI。
              <br />
              手段はそろっているのに、なぜか成果につながらない。その原因の多くは、それぞれが「点」のまま、ばらばらに動いていることにあります。途切れた場所で、顧客の熱も、現場の努力も冷めていきます。
            </p>
            <p>
              nodeは、事業のゴールから逆算して手段を選び、集客から受注、業務、改善までをひとつの流れに束ねます。一本の線でつながった仕組みは、成果を「偶然」から「再現できるもの」に変えます。
            </p>
          </div>
        </div>
      </section>

      <section id="services" className={styles.servicesSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionLabel}>SERVICES</p>
          <div>
            <h2>
              領域をまたいで<span className={styles.serifPunct}>、</span>
              <br />
              課題を解く。
            </h2>
            <p>
              サイトは制作会社へ、広告は代理店へ、システムは開発会社へ――分業の境目を越えるたび、意図は少しずつ削れていきます。nodeは企画から制作・開発・運用までをひとつのチームで担い、境目で失われていた成果を取り戻します。
            </p>
          </div>
        </div>

        <div className={styles.serviceList}>
          {services.map((service, index) => (
            <article
              key={service.slug}
              className={`${styles.serviceCard} ${index % 2 === 1 ? styles.serviceCardReverse : ""}`}
            >
              <Link href={`/test/services/${service.slug}`} aria-label={`${service.title}の詳細を見る`}>
                <div className={styles.serviceCardCopy}>
                  <div className={styles.serviceMeta}>
                    <span>{service.number}</span>
                    <span>{service.englishTitle}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.cardCopy}</p>
                  <span className={styles.cardLink}>
                    VIEW SERVICE <b aria-hidden="true">↗</b>
                  </span>
                </div>
                <ServiceVisual service={service} compact />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="approach" className={styles.approachSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionLabel}>OUR APPROACH</p>
          <div>
            <h2>
              成果までの距離を<span className={styles.serifPunct}>、</span>
              <br />
              短くする。
            </h2>
            <p>
              立派な企画書より、現場で動く小さな事実。nodeは仮説と検証を短いサイクルで回し、確かめながら最短距離で成果に近づきます。
            </p>
          </div>
        </div>
        <div className={styles.approachGrid}>
          {approachItems.map((item) => (
            <article key={item.number}>
              <div className={styles.approachTop}>
                <span>{item.number}</span>
                <span>{item.english}</span>
              </div>
              <div className={styles.approachShape} aria-hidden="true">
                <Image
                  src={`/test/generated/approach/${item.icon}.png`}
                  alt=""
                  width={640}
                  height={640}
                  unoptimized
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.flowSection}>
        <p className={styles.sectionLabel}>PROJECT FLOW</p>
        <div className={styles.flowHeading}>
          <h2>
            聞く。決める。
            <br />
            つくる。育てる。
          </h2>
          <p>
            決まりきったパッケージに当てはめることはしません。目的と状況に合わせて工程を組み替えながら、最初のご相談から公開後の改善まで、一つの流れで隣を走ります。
          </p>
        </div>
        <ol className={styles.flowList}>
          {flow.map((item, index) => (
            <li key={item.step}>
              <span className={styles.flowNumber}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.flowEnglish}>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <ContactCta />
      <SiteFooter />
    </main>
  );
}
