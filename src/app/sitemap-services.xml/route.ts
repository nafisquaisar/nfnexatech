/**
 * Services Sitemap — served at /sitemap-services.xml
 *
 * One entry per service slug with image tags for service icons/OG images.
 */

import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/content";

const BASE = siteConfig.url;

function buildXml(now: string): string {
  const urls = servicesData
    .map(
      (s) => `
  <url>
    <loc>${BASE}/services/${s.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${BASE}/api/og?title=${encodeURIComponent(s.title)}&amp;type=service</image:loc>
      <image:title>${s.title} — ${siteConfig.name}</image:title>
      <image:caption>${s.tagline}</image:caption>
    </image:image>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>`;
}

export async function GET() {
  const now = new Date().toISOString();
  return new Response(buildXml(now), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
