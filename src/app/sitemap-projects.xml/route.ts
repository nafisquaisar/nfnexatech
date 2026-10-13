/**
 * Projects Sitemap — served at /sitemap-projects.xml
 *
 * Covers all project case studies:
 *   - Static project pages (own directory under /projects/) → STATIC_PROJECTS
 *   - Dynamic projects from data.js that do NOT have a static page
 * Includes image:image tags for hero/preview images.
 *
 * De-duplication strategy (P0 sitemap fix — 13 Oct 2026):
 *   STATIC_PROJECTS is the authoritative source for projects that have their
 *   own dedicated page.tsx. Dynamic routes from data.js are included only for
 *   slugs that do NOT appear in STATIC_PROJECTS, and the redirected legacy
 *   slug "popular-bread-inventory" is explicitly excluded.
 */

import { projects } from "@/data/data";
import { siteConfig } from "@/config/site";

const BASE = siteConfig.url;

/**
 * Projects with their own dedicated static page under /projects/<slug>/page.tsx.
 * Each slug here is the canonical route. Any matching slug in data.js is
 * intentionally excluded from the dynamic URL block to prevent duplicates.
 */
const STATIC_PROJECTS = [
  {
    slug: "invoicelelo",
    title: "InvoiceLelo",
    heroImage: "/images/projects/invoicelelo/home.png",
    subtitle: "Invoice Generator for Indian Businesses",
  },
  {
    slug: "nestiva-hospital",
    title: "Nestiva Hospital",
    heroImage: "/images/projects/nestiva/nestivahome.png",
    subtitle: "Multi-Specialty Hospital Website Design & Development",
  },
  {
    slug: "medon-company",
    title: "Medon Company",
    heroImage: "/images/projects/medon/home.png",
    subtitle: "Appliance Repair & Service Booking Website",
  },
  {
    slug: "madza-company",
    title: "Madza Company",
    heroImage: "/images/projects/madzacompany/home.png",
    subtitle: "Home Services Platform",
  },
  {
    slug: "popular-bread",
    title: "Popular Bread",
    heroImage: "/images/projects/popular/popular_preview.png",
    subtitle: "Bread Business Management Android App",
  },
  {
    slug: "organizer-classes",
    title: "Organizer Classes",
    heroImage: "/images/projects/organizer/organizer_preview.png",
    subtitle: "Online Learning Platform for Exam Preparation",
  },
  {
    slug: "train-your-tech",
    title: "Train Your Tech",
    heroImage: "/images/projects/trainyourtech/landing.png",
    subtitle: "Placement Preparation Platform",
  },
];

/** Slugs that redirect to a different canonical URL — must never appear in sitemap. */
const REDIRECT_SLUGS = new Set(["popular-bread-inventory"]);

/** Slugs covered by STATIC_PROJECTS — excluded from dynamic URL block. */
const STATIC_SLUGS = new Set(STATIC_PROJECTS.map((p) => p.slug));

function buildXml(now: string): string {
  // Dynamic projects from data.js — exclude those with static pages and redirects
  const dynamicUrls = projects
    .filter((p) => !STATIC_SLUGS.has(p.slug) && !REDIRECT_SLUGS.has(p.slug))
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

  // Static project pages — authoritative list
  const staticUrls = STATIC_PROJECTS.map((p) => {
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
  }).join("");

  // Projects index page
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
