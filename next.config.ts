import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // 旧テストURL(/test配下のページ)は本番ルートへ恒久リダイレクト。
    // ※ /test/:path* の一括指定にすると public/test/ 配下の画像アセットまで
    //    リダイレクトされてしまうため、ページURLのみを個別に指定する
    return [
      { source: "/test", destination: "/", permanent: true },
      { source: "/test/services/:slug", destination: "/services/:slug", permanent: true },
      { source: "/test/company", destination: "/company", permanent: true },
      { source: "/test/contact", destination: "/contact", permanent: true },
      { source: "/test/news", destination: "/news", permanent: true },
      { source: "/test/news/:slug", destination: "/news/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
