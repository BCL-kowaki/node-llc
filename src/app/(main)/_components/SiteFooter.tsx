import Image from "next/image";
import Link from "next/link";
import { services } from "../_data/services";
import styles from "../test.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div>
          <Link className={styles.footerLogo} href="/">
            <Image
              src="/test/logo-horizontal-trimmed.png"
              alt="合同会社node"
              width={1636}
              height={523}
              sizes="380px"
              unoptimized
              className={styles.logoImage}
            />
          </Link>
          <p>
            事業と現場を、前へ。
            <br />
            福岡から、全国へ。
          </p>
        </div>
        <div className={styles.footerLinks}>
          <div>
            <p>SERVICES</p>
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </div>
          <div>
            <p>COMPANY</p>
            <Link href="/company">会社情報</Link>
            <Link href="/work">実績</Link>
            <Link href="/news">お知らせ</Link>
            <Link href="/contact">お問い合わせ</Link>
            <Link href="/privacy">プライバシーポリシー</Link>
            <Link href="/tokushoho">特定商取引法に基づく表記</Link>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>© {new Date().getFullYear()} node LLC.</span>
        <span>DESIGN · BUILD · GROW</span>
      </div>
    </footer>
  );
}
