import Image from "next/image";
import Link from "next/link";
import { services } from "../_data/services";
import styles from "../test.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/" aria-label="node トップページへ">
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
        <Link href="/#services">SERVICES</Link>
        <Link href="/#approach">APPROACH</Link>
        <Link href="/company">COMPANY</Link>
        <Link href="/news">NEWS</Link>
        <Link className={styles.navContact} href="/contact">
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
            <Link href="/">トップ</Link>
            <Link href="/#services">サービス一覧</Link>
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <small>{service.number}</small>
                {service.title}
              </Link>
            ))}
            <Link href="/company">会社概要</Link>
            <Link href="/news">お知らせ</Link>
            <Link href="/contact">お問い合わせ</Link>
          </nav>
        </div>
      </details>
    </header>
  );
}
