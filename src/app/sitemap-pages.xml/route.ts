/**
 * Core Pages Sitemap — served at /sitemap-pages.xml
 *
 * Covers: homepage, about, services index, projects index, blog index,
 * contact, start-project, and all local SEO landing pages.
 */

import { siteConfig } from "@/config/site";

const BASE = siteConfig.url;

const pages = [
  { path: "/",                               changeFreq: "weekly",  priority: 1.0 },
  { path: "/about",                          changeFreq: "monthly", priority: 0.8 },
  { path: "/services",                       changeFreq: "monthly", priority: 0.9 },
  { path: "/projects",                       changeFreq: "monthly", priority: 0.8 },
  { path: "/blog",                           changeFreq: "weekly",  priority: 0.9 },
  { path: "/contact",                        changeFreq: "yearly",  priority: 0.7 },
  { path: "/start-project",                  changeFreq: "monthly", priority: 0.8 },
  { path: "/software-company-bhopal",        changeFreq: "monthly", priority: 0.8 },
  { path: "/software-company-india",         changeFreq: "monthly", priority: 0.8 },
  { path: "/web-development-company-patna",  changeFreq: "monthly", priority: 0.7 },
] as const;

function buildXml(now: string): string {
  const urls = pages
    .map(
      ({ path, changeFreq, priority }) => `
  <url>
    <loc>${BASE}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
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
