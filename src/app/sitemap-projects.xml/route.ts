/**
 * Projects Sitemap — served at /sitemap-projects.xml
 *
 * Covers all project case studies:
 *   - Dynamic projects from data.js (served by /projects/[slug])
 *   - Static project pages (medon-company, train-your-tech)
 * Includes image:image tags for hero/preview images.
 */

import { projects } from "@/data/data";
import { siteConfig } from "@/config/site";

const BASE = siteConfig.url;

// Static project pages not in data.js — each has its own directory
const STATIC_PROJECTS = [
  {
    slug: "medon-company",
    title: "Medon Company",
    heroImage: "/images/projects/medon/home.png",
    subtitle: "Service Booking Platform for Delhi NCR",
  },
  {
    slug: "train-your-tech",
    title: "Train Your Tech",
    heroImage: "/images/projects/trainyourtech/landing.png",
    subtitle: "AI-Powered Placement Preparation Platform",
  },
];

function buildXml(now: string): string {
  // Dynamic projects from data.js
  const dynamicUrls = projects
    .map((p) => {
      const imageTag = p.heroImage
        ? `
    <image:image>
      <image:loc>${BASE}${p.heroImage}</image:loc>
      <image:title>${p.title.replace(/&/g, "&amp;")} — Case Study</image:title>
      <image:caption>${p.subtitle.replace(/&/g, "&amp;")}</image:caption>
    </image:image>`
        : "";

      return `
  <url>
    <loc>${BASE}/projects/${p.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>${imageTag}
  </url>`;
    })
    .join("");

  // Static project pages
  const staticUrls = STATIC_PROJECTS.map((p) => {
    const imageTag = p.heroImage
      ? `
    <image:image>
      <image:loc>${BASE}${p.heroImage}</image:loc>
      <image:title>${p.title} — Case Study</image:title>
      <image:caption>${p.subtitle}</image:caption>
    </image:image>`
      : "";

    return `
  <url>
    <loc>${BASE}/projects/${p.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>${imageTag}
  </url>`;
  }).join("");

  // Projects index page — canonical here, removed from sitemap-pages.xml
  const projectsIndex = `
  <url>
    <loc>${BASE}/projects</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${projectsIndex}${dynamicUrls}${staticUrls}
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
