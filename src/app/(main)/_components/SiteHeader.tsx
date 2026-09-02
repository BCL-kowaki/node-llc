"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { services } from "../_data/services";
import styles from "../test.module.css";

export default function SiteHeader() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // リンクをタップしたらメニューを閉じる(同一ページ内アンカーでも閉じるように)
  const closeMenu = () => {
    menuRef.current?.removeAttribute("open");
  };

  // トップページ内のアンカーリンク: Next.jsのLinkは同一パス+hash変更だけだと
  // スクロールが発火しない(かつ背景の粒子アニメーションが重く、smoothスクロールだと
  // 動き出す前に止まって見える)ため、トップページ滞在中はここで直接ジャンプさせる。
  // 他ページからの遷移時はNext.jsのLinkによる通常の画面遷移に任せる。
  const handleAnchorClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) return;
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "instant" as ScrollBehavior });
    history.replaceState(null, "", `/#${id}`);
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
        <Link href="/#services" onClick={handleAnchorClick("services")}>
          SERVICES
        </Link>
        <Link href="/#approach" onClick={handleAnchorClick("approach")}>
          APPROACH
        </Link>
        <Link href="/company">COMPANY</Link>
        <Link href="/news">NEWS</Link>
        <Link className={styles.navContact} href="/contact">
          CONTACT <span aria-hidden="true">{"↗︎"}</span>
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
            <Link href="/#services" onClick={handleAnchorClick("services")}>
              SERVICE
            </Link>
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
            <Link href="/company">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
          </nav>
        </div>
      </details>
    </header>
  );
}
