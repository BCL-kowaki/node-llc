import Image from "next/image";
import Link from "next/link";
import { services } from "../_data/services";
import styles from "../test.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/test" aria-label="node テストサイトのトップへ">
        <Image
          src="/test/logo-horizontal-trimmed.png"
          alt="合同会社node"
          width={1636}
          height={523}
          sizes="278px"
          priority
          unoptimized
          className={styles.logoImage}
        />
      </Link>

      <nav className={styles.desktopNav} aria-label="メインナビゲーション">
        <Link href="/test#services">SERVICES</Link>
        <Link href="/test#approach">APPROACH</Link>
        <Link href="/test/company">COMPANY</Link>
        <Link href="/test/news">NEWS</Link>
        <Link className={styles.navContact} href="/test/contact">
          CONTACT <span aria-hidden="true">↗</span>
        </Link>
      </nav>

      <details className={styles.mobileMenu}>
        <summary aria-label="メニューを開く">
          <span />
          <span />
        </summary>
        <div className={styles.mobileMenuPanel}>
          <p>MENU</p>
          <nav aria-label="モバイルナビゲーション">
            <Link href="/test">トップ</Link>
            <Link href="/test#services">サービス一覧</Link>
            {services.map((service) => (
              <Link key={service.slug} href={`/test/services/${service.slug}`}>
                <small>{service.number}</small>
                {service.title}
              </Link>
            ))}
            <Link href="/test/company">会社概要</Link>
            <Link href="/test/news">お知らせ</Link>
            <Link href="/test/contact">お問い合わせ</Link>
          </nav>
        </div>
      </details>
    </header>
  );
}
