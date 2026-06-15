/**
 * Sitemap Index — served at /sitemap.xml
 *
 * Returns a sitemap index that delegates to four focused sub-sitemaps.
 * Google recommends splitting large sites into multiple sitemaps by content type.
 *
 * Sub-sitemaps:
 *   /sitemap-pages.xml     → Core pages + local SEO landing pages
 *   /sitemap-services.xml  → All service pages with image tags
 *   /sitemap-blog.xml      → All published blog posts (dynamic, with real dates)
 *   /sitemap-projects.xml  → All project case studies with image tags
 *   /sitemap-images.xml    → Dedicated image sitemap (logo, heroes, OG images)
 */

import { siteConfig } from "@/config/site";

export default function sitemap() {
  const base = siteConfig.url;
  const now = new Date().toISOString();

  return [
    { url: `${base}/sitemap-pages.xml`,    lastModified: now },
    { url: `${base}/sitemap-services.xml`, lastModified: now },
    { url: `${base}/sitemap-blog.xml`,     lastModified: now },
    { url: `${base}/sitemap-projects.xml`, lastModified: now },
    { url: `${base}/sitemap-images.xml`,   lastModified: now },
  ];
}
