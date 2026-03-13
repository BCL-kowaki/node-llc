"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import FadeUpSection from "./FadeUpSection";

export default function AccessSection() {
  return (
    <FadeUpSection id="access" className="py-24 md:py-32">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Access
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 mb-12" />
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-relaxed mb-12">
          会社情報
        </h3>

        {/* Map */}
        <div className="glass overflow-hidden mb-12">
          <iframe
            src="https://maps.google.com/maps?q=%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%B9%B3%E5%B0%BE3%E4%B8%81%E7%9B%AE14-17&output=embed&z=17"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="合同会社node 所在地"
          />
        </div>

        {/* Company info */}
        <div className="glass p-8 md:p-10 space-y-6">
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-white/10">
            <dt className="md:w-48 text-white/50 text-sm tracking-wider shrink-0">
              会社名
            </dt>
            <dd className="text-white text-base">合同会社node</dd>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-white/10">
            <dt className="md:w-48 text-white/50 text-sm tracking-wider shrink-0">
              事務所所在地
            </dt>
            <dd className="text-white text-base">
              〒810-0014 福岡県福岡市中央区平尾3丁目14-17
            </dd>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-white/10">
            <dt className="md:w-48 text-white/50 text-sm tracking-wider shrink-0">
              代表者
            </dt>
            <dd className="text-white text-base">小脇 拓哉</dd>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-white/10">
            <dt className="md:w-48 text-white/50 text-sm tracking-wider shrink-0">
              設立
            </dt>
            <dd className="text-white text-base">2026年3月</dd>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-white/10">
            <dt className="md:w-48 text-white/50 text-sm tracking-wider shrink-0">
              電話番号
            </dt>
            <dd className="text-white text-base">050-0000-0000</dd>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 py-4">
            <dt className="md:w-48 text-white/50 text-sm tracking-wider shrink-0">
              メールアドレス
            </dt>
            <dd className="text-white text-base">info@node-llc.com</dd>
          </div>
        </div>

        {/* CEO Profile */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="mb-12">
            <h2
              className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              CEO
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 mb-12" />
          </div>

          <div className="flex flex-col items-center md:flex-row md:items-start gap-10">
            {/* Photo & Name */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="ceo-avatar w-40 h-40 md:w-48 md:h-48 rounded-full p-[3px]">
                <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/ceo.png"
                    alt="小脇 拓哉"
                    className="w-[100%] h-[100%] object-contain"
                  />
                </div>
              </div>
              <p className="text-white/50 text-sm mt-4">CEO</p>
              <p className="text-white text-lg font-bold">小脇 拓哉</p>

              {/* SNS Links */}
              <div className="flex items-center gap-5 mt-4">
                <a
                  href="https://www.facebook.com/takuya.hamagami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors text-xl"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://x.com/takuyakowaki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors text-xl"
                  aria-label="X (Twitter)"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                  href="https://note.com/kowackey13824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors text-xl"
                  aria-label="note"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M22.195 2.641c-1.2-1.2-3.4-2.2-6.4-1.3-2 .6-4.2 2-6.3 4.1-2.1 2.1-3.5 4.3-4.1 6.3-.9 3-.1 5.2 1.3 6.4 1.2 1.2 3.4 2.2 6.4 1.3 2-.6 4.2-2 6.3-4.1 2.1-2.1 3.5-4.3 4.1-6.3.9-3 0-5.2-1.3-6.4zm-1.4 1.4c.6.6 1.2 1.8.6 3.9-.5 1.7-1.7 3.6-3.6 5.5-1.9 1.9-3.8 3.1-5.5 3.6-2.1.6-3.3 0-3.9-.6-.6-.6-1.2-1.8-.6-3.9.5-1.7 1.7-3.6 3.6-5.5 1.9-1.9 3.8-3.1 5.5-3.6 2.1-.6 3.3 0 3.9.6zM4.495 3.04c-.8-.1-1.6.1-2.2.7-.9.9-.9 2.3 0 3.2l.7.7c.1-.5.3-1.1.5-1.6l-.2-.2c-.3-.3-.3-.7 0-1 .1-.1.3-.2.5-.2h.1c.1-.6.3-1.2.6-1.6zm-1.5 15.5l-.7.7c-.9.9-.9 2.3 0 3.2.6.6 1.4.8 2.2.7-.3-.5-.5-1-.6-1.6h-.1c-.2 0-.4-.1-.5-.2-.3-.3-.3-.7 0-1l.2-.2c-.2-.5-.4-1.1-.5-1.6zm18.5-15.5c.3.5.5 1 .6 1.6h.1c.2 0 .4.1.5.2.3.3.3.7 0 1l-.2.2c.2.5.4 1.1.5 1.6l.7-.7c.9-.9.9-2.3 0-3.2-.6-.5-1.4-.8-2.2-.7z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Profile text */}
            <div className="space-y-5 text-base md:text-lg text-white/75 leading-relaxed">
              <p>
                1987年生まれ、鹿児島県出身。
                大手コールセンターにてマネージャーを経験したのち、WEB業界へ転身。
                WEBサイト制作、動画編集、広告運用、Salesforceを活用した社内インフラシステム構築など、
                10年以上にわたりデジタル領域の最前線で幅広い経験を積む。
              </p>
              <p>
                近年の生成AI技術の急速な進化を機に、AI領域へと活動の幅を拡大。
                これまで培ったデジタル実務のノウハウとAI技術を掛け合わせ、
                企業のDX推進を支援するために合同会社nodeを設立。
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeUpSection>
  );
}
