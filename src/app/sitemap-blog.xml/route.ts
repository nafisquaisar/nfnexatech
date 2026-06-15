/**
 * Blog Sitemap — served at /sitemap-blog.xml
 *
 * Dynamically generated from MDX files.
 * Uses each post's real updatedDate / date for accurate lastmod.
 * Includes image tags for posts with a hero image in frontmatter.
 */

import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/config/site";

const BASE = siteConfig.url;

function buildXml(now: string): string {
  const posts = getAllPosts();

  const urls = posts
    .map((post) => {
      const lastmod = post.updatedDate ?? post.date;
      const imageTag = post.image
        ? `
    <image:image>
      <image:loc>${BASE}${post.image}</image:loc>
      <image:title>${post.title.replace(/&/g, "&amp;")}</image:title>
      <image:caption>${post.description.replace(/&/g, "&amp;")}</image:caption>
    </image:image>`
        : "";

      return `
  <url>
    <loc>${BASE}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>${imageTag}
  </url>`;
    })
    .join("");

  // Add the blog index too
  const blogIndex = `
  <url>
    <loc>${BASE}/blog</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${blogIndex}${urls}
</urlset>`;
}

export async function GET() {
  const now = new Date().toISOString();
  return new Response(buildXml(now), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
    },
  });
}
