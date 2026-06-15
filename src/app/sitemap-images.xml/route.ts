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
  // 1. Homepage — logo + OG image
  const homepageImages = `
  <url>
    <loc>${BASE}/</loc>
    <image:image>
      <image:loc>${BASE}/logo.png</image:loc>
      <image:title>${encodeXml(siteConfig.name)} Logo</image:title>
      <image:caption>Official logo of ${encodeXml(siteConfig.name)} — Software Development Company</image:caption>
    </image:image>
    <image:image>
      <image:loc>${BASE}/api/og?title=${encodeURIComponent(siteConfig.name + " — Software Development Company India")}&amp;type=page</image:loc>
      <image:title>${encodeXml(siteConfig.name)} — Software Development Company India</image:title>
      <image:caption>${encodeXml(siteConfig.description)}</image:caption>
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

  // 3. Service OG images
  const serviceImages = siteConfig.services
    .map(
      (s) => `
  <url>
    <loc>${BASE}/services/${s.slug}</loc>
    <image:image>
      <image:loc>${BASE}/api/og?title=${encodeURIComponent(s.name)}&amp;type=service</image:loc>
      <image:title>${encodeXml(s.name)} — ${encodeXml(siteConfig.name)}</image:title>
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
${homepageImages}${projectImages}${serviceImages}
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
