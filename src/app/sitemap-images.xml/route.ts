/**
 * Image Sitemap — served at /sitemap-images.xml
 *
 * Dedicated image sitemap covering:
 *   - Company logo
 *   - Project hero/preview images
 *   - OG images for core pages
 *
 * Helps Google Image Search index all visual assets.
 */

import { projects } from "@/data/data";
import { siteConfig } from "@/config/site";

const BASE = siteConfig.url;

function encodeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildXml(): string {
  // 1. Homepage — logo only (static asset, crawlable by Googlebot Image)
  // OG images are declared via <meta property="og:image"> per-page;
  // they do NOT need to be in the image sitemap and were causing dynamic
  // /api/og URLs to appear as image:loc entries.
  const homepageImages = `
  <url>
    <loc>${BASE}/</loc>
    <image:image>
      <image:loc>${BASE}/logo.png</image:loc>
      <image:title>${siteConfig.name} Logo</image:title>
      <image:caption>Official logo of ${siteConfig.name} — Software Development Company</image:caption>
    </image:image>
  </url>`;

  // 2. Project case study images
  const projectImages = projects
    .map((p) => {
      const images = [];
      if (p.heroImage) {
        images.push(`
    <image:image>
      <image:loc>${BASE}${p.heroImage}</image:loc>
      <image:title>${encodeXml(p.title)} — ${encodeXml(p.category)} Case Study</image:title>
      <image:caption>${encodeXml(p.subtitle)}</image:caption>
    </image:image>`);
      }
      // Phone stack images
      if (p.phoneStack?.center) {
        images.push(`
    <image:image>
      <image:loc>${BASE}${p.phoneStack.center}</image:loc>
      <image:title>${encodeXml(p.title)} App Screen</image:title>
    </image:image>`);
      }
      if (images.length === 0) return "";
      return `
  <url>
    <loc>${BASE}/projects/${p.slug}</loc>${images.join("")}
  </url>`;
    })
    .filter(Boolean)
    .join("");

  // 3. Service pages — OG images removed from image sitemap.
  // Per-page <meta og:image> tags already declare these dynamically.
  // /api/og endpoints are server-rendered and not suitable as image:loc entries.

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${homepageImages}${projectImages}
</urlset>`;
}

export async function GET() {
  return new Response(buildXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
