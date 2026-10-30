import type { MetadataRoute } from "next";
import { getSitePages, SITE_URL } from "@/lib/site-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitePages().map(({ path, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    ...(lastModified ? { lastModified } : {}),
  }));
}
