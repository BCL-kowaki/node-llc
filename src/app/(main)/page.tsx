import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faCubes, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import AnchorButton from "./_components/AnchorButton";
import ContactCta from "./_components/ContactCta";
import HashScrollOnMount from "./_components/HashScrollOnMount";
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
    icon: faMagnifyingGlass,
    description: "資料をそろえていただく必要はありません。nodeが現場に入り、業務と顧客の行動を見て、解くべき課題を見つけます。",
  },
  {
    number: "02",
    title: "つくって確かめる",
    english: "BUILD",
    icon: faCubes,
    description: "細かな指示はいりません。nodeが検証できる最小単位をつくり、現場の反応を見て次の手を決めます。",
  },
  {
    number: "03",
    title: "運用で育てる",
    english: "GROW",
    icon: faArrowTrendUp,
    description: "公開や導入のあとも手を離しません。数字と声を見ながら、成果が続く仕組みへnodeが改善を続けます。",
  },
];

const flow = [
  { step: "LISTEN", title: "相談・ヒアリング", text: "目標も現状も、整理できていなくて構いません。困っていることをそのままお話しください。" },
  { step: "DEFINE", title: "課題とゴールを定義", text: "誰の、どの行動を、どう変えるか。成果指標と優先順位の案はnodeがつくります。" },
  { step: "MAKE", title: "制作・実装・検証", text: "必要なものからnodeが形にし、利用者の反応とデータで仮説を確かめます。" },
  { step: "IMPROVE", title: "運用・改善", text: "日々の業務への組み込みも、次の改善もnodeが進めます。" },
];

export default function TestHomePage() {
  return (
    <main className={styles.site}>
      {/* メインビジュアルの白い下地(粒子キャンバスより背面) */}
      <div className={styles.heroWhiteBackdrop} data-hero-backdrop aria-hidden="true" />
      <ParticleField compactOnMobile />
      <HashScrollOnMount />
      <SiteHeader />

      <section className={styles.hero} data-particle-hero>
        <div className={styles.heroFieldFallback} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>DESIGN. BUILD. GROW.</p>
          <h1>
            面倒な課題は
            <br className={styles.heroSpBreak} />
            すべて丸投げで。
            <br />
            あなたの事業は
            <br className={styles.heroSpBreak} />
            <span>その先へ。</span>
          </h1>
          <p className={styles.lead}>
            何を頼めばいいか分からなくても、大丈夫です。
            <br />
            課題の整理から制作、開発、運用まで、nodeがまとめて引き受けます。
            <br />
            「あとはお願い」のひと言から、数字が動くまで走り続けます。
          </p>
          <AnchorButton id="services" className={styles.primaryButton}>
            OUR SERVICES
            <span aria-hidden="true">{"↘\uFE0E"}</span>
          </AnchorButton>
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
              手段はそろっているのに、なぜか成果につながらない。その原因の多くは、それぞれが「点」のまま、ばらばらに動いていることにあります。途切れた場所で、顧客の熱も、現場の意欲も冷めていきます。
            </p>
            <p>
              nodeにお任せいただければ、事業のゴールから逆算して手段を選び、集客から受注、業務、改善までをひとつの流れに束ねます。一本の線でつながった仕組みは、成果を「偶然」から「再現できるもの」に変えます。
            </p>
          </div>
        </div>
      </section>

      <section id="services" className={styles.servicesSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionLabel}>SERVICES</p>
          <div>
            <h2>
              どの領域も<span className={styles.serifPunct}>、</span>
              <br />
              まとめて丸投げ。
            </h2>
            <p>
              サイトは制作会社へ、広告は代理店へ、システムは開発会社へ。分業の境目を越えるたび、意図は少しずつ薄れ、調整の手間はお客様に残ります。nodeは企画から制作・開発・運用までをひとつのチームで引き受けるので、窓口はひとつで済みます。
            </p>
          </div>
        </div>

        <div className={styles.serviceList}>
          {services.map((service, index) => (
            <article
              key={service.slug}
              className={`${styles.serviceCard} ${index % 2 === 1 ? styles.serviceCardReverse : ""}`}
            >
              <Link href={`/services/${service.slug}`} aria-label={`${service.title}の詳細を見る`}>
                <div className={styles.serviceCardCopy}>
                  <div className={styles.serviceMeta}>
                    <span>{service.number}</span>
                    <span>{service.englishTitle}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.cardCopy}</p>
                  <span className={styles.cardLink}>
                    VIEW SERVICE <b aria-hidden="true">{"↗\uFE0E"}</b>
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
              立派な企画書も、細かな指示書もいりません。nodeが仮説と検証を短いサイクルで回し、確かめながら最短距離で成果に近づきます。
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
                <FontAwesomeIcon icon={item.icon} />
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
            お客様にお願いするのは、最初のご相談と要所でのご判断だけです。目的と状況に合わせて工程を組み替えながら、公開後の改善までnodeが進めます。
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
