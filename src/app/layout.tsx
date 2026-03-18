import type { Metadata } from "next";
import Script from "next/script";
import { Josefin_Sans, M_PLUS_1p } from "next/font/google";
import "./globals.css";
import VideoBackground from "@/components/VideoBackground";

const GA_MEASUREMENT_ID = "G-Q5KVJVYC7Y";

const josefinSans = Josefin_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const mPlus1p = M_PLUS_1p({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "合同会社node - AI技術で未来を創造する",
  description:
    "生成AI・LLM・AIエージェントが切り開く、次世代のビジネスのために。nodeは企業のAI導入から活用までをトータルでサポートします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${josefinSans.variable} ${mPlus1p.variable}`}>
        {/* Google Analytics (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {/* SVG gradient definition for FontAwesome icons */}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <linearGradient id="fa-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f80f0f" />
              <stop offset="100%" stopColor="#cf3ff5" />
            </linearGradient>
          </defs>
        </svg>
        <VideoBackground overlayOpacity={0.55} />
        {children}
      </body>
    </html>
  );
}
