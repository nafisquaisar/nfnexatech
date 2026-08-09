/**
 * Sitemap Index — served at /sitemap.xml
 *
 * WHY A ROUTE HANDLER INSTEAD OF sitemap.ts:
 * Next.js's built-in `sitemap()` return format emits a <urlset> document
 * (a regular URL sitemap), which causes Google to treat sub-sitemap URLs
 * like /sitemap-blog.xml as ordinary pages to crawl and index — resulting
 * in the "Crawled - currently not indexed" GSC warning for sitemap XML files.
 *
 * A proper <sitemapindex> document tells Google these are child sitemaps to
 * follow (not pages). This Route Handler outputs the correct format.
 *
 * Sub-sitemaps:
 *   /sitemap-pages.xml     → Core pages + local SEO landing pages
 *   /sitemap-services.xml  → All service pages with image tags
 *   /sitemap-blog.xml      → All published blog posts (dynamic, with real dates)
 *   /sitemap-projects.xml  → All project case studies with image tags
 *   /sitemap-images.xml    → Dedicated image sitemap (logo, heroes, OG images)
 */

import { siteConfig } from "@/config/site";

const BASE = siteConfig.url;

const subSitemaps = [
  `${BASE}/sitemap-pages.xml`,
  `${BASE}/sitemap-services.xml`,
  `${BASE}/sitemap-blog.xml`,
  `${BASE}/sitemap-projects.xml`,
  `${BASE}/sitemap-images.xml`,
];

function buildSitemapIndex(): string {
  const now = new Date().toISOString();

  const entries = subSitemaps
    .map(
      (url) => `
  <sitemap>
    <loc>${url}</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}
</sitemapindex>`;
}

export async function GET() {
  return new Response(buildSitemapIndex(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      // Cache for 1 hour on CDN, allow stale for up to 10 minutes
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
    },
  });
}
