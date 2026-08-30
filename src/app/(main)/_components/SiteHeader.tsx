"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { services } from "../_data/services";
import styles from "../test.module.css";

export default function SiteHeader() {
  const menuRef = useRef<HTMLDetailsElement>(null);

  // リンクをタップしたらメニューを閉じる(同一ページ内アンカーでも閉じるように)
  const closeMenu = () => {
    menuRef.current?.removeAttribute("open");
  };

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
        <Link href="/work">WORK</Link>
        <Link href="/company">COMPANY</Link>
        <Link href="/news">NEWS</Link>
        <Link className={styles.navContact} href="/contact">
          CONTACT <span aria-hidden="true">{"↗\uFE0E"}</span>
        </Link>
      </nav>

      <details ref={menuRef} className={styles.mobileMenu}>
        <summary aria-label="メニューを開く">
          <span />
          <span />
        </summary>
        <div className={styles.mobileMenuPanel}>
          <p>MENU</p>
          <nav aria-label="モバイルナビゲーション" onClick={closeMenu}>
            <Link href="/">TOP</Link>
            <Link href="/#services">SERVICE</Link>
            {services.map((service) => (
              <Link
                key={service.slug}
                className={styles.mobileMenuSub}
                href={`/services/${service.slug}`}
              >
                <small>{service.number}</small>
                {service.title}
              </Link>
            ))}
            <Link href="/news">NEWS</Link>
            <Link href="/work">WORK</Link>
            <Link href="/company">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
          </nav>
        </div>
      </details>
    </header>
  );
}
