import { newsPosts } from "@/app/(main)/_data/news";
import { services } from "@/app/(main)/_data/services";

export const SITE_URL = "https://node-llc.com";

export type SitePage = {
  path: string;
  /** 最終更新日(YYYY-MM-DD)。記事のように日付を持つページのみ */
  lastModified?: string;
};

// 公開ページの一覧。sitemap.xml と Markdown 応答の対象をここで一元管理する。
// ページを追加したら next.config.ts の MARKDOWN_PAGE_SOURCES にも追加する
export function getSitePages(): SitePage[] {
  return [
    { path: "/" },
    { path: "/company" },
    { path: "/contact" },
    { path: "/participation" },
    { path: "/privacy" },
    { path: "/tokushoho" },
    { path: "/services/web-production/demos" },
    ...services.map((service) => ({ path: `/services/${service.slug}` })),
    { path: "/news" },
    ...newsPosts.map((post) => ({ path: `/news/${post.slug}`, lastModified: post.dateISO })),
  ];
}
