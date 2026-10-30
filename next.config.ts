import type { NextConfig } from "next";

// Accept: text/markdown のときに Markdown を返すページ(src/lib/site-pages.ts と揃える)
const MARKDOWN_PAGE_SOURCES = [
  "/company",
  "/contact",
  "/participation",
  "/privacy",
  "/tokushoho",
  "/services/:slug",
  "/services/web-production/demos",
  "/news",
  "/news/:slug",
];

const acceptsMarkdown = [{ type: "header" as const, key: "accept", value: ".*text/markdown.*" }];

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      // 静的配信より先に判定する必要があるため beforeFiles に置く
      beforeFiles: [
        { source: "/", has: acceptsMarkdown, destination: "/api/markdown" },
        ...MARKDOWN_PAGE_SOURCES.map((source) => ({
          source,
          has: acceptsMarkdown,
          destination: `/api/markdown${source}`,
        })),
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async headers() {
    return [
      {
        // エージェント向けの案内(RFC 8288)
        source: "/",
        headers: [
          {
            key: "Link",
            value: [
              '</.well-known/agent-skills/index.json>; rel="describedby"; type="application/json"',
              '</.well-known/ai-catalog.json>; rel="ai-catalog"; type="application/json"',
              '</sitemap.xml>; rel="sitemap"; type="application/xml"',
              '</>; rel="alternate"; type="text/markdown"',
            ].join(", "),
          },
        ],
      },
      {
        source: "/.well-known/:path*",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
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
      // Work → Participation への名称変更に伴う旧URLの吸収
      { source: "/work", destination: "/participation", permanent: true },
      { source: "/test/work", destination: "/participation", permanent: true },
    ];
  },
};

export default nextConfig;
