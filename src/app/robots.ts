/**
 * robots.ts — served at /robots.txt
 *
 * Enterprise-grade crawl directives:
 *   - Allows all meaningful public pages
 *   - Blocks internal API routes, Next.js internals, and query strings
 *   - Disallows AI training scrapers (GPTBot, CCBot, etc.)
 *   - Points to the sitemap index
 */

import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.url;

  return {
    rules: [
      // ── Default: all legitimate crawlers ─────────────────────────────
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/services/",
          "/projects/",
          "/blog/",
          "/contact",
          "/start-project",
          "/software-company-bhopal",
          "/software-company-india",
          "/web-development-company-patna",
        ],
        disallow: [
          "/api/",         // Next.js API routes (internal)
          "/api/og",       // OG image generator (not a page)
          "/_next/",       // Next.js build assets
          "/_vercel/",     // Vercel deployment internals
          "/static/",      // Static assets directory
          "/*?*",          // Any URL with query parameters (avoids duplicate indexing)
          "/admin",        // Admin panel (if ever added)
          "/*.json$",      // Raw JSON data files
        ],
      },

      // ── Block OpenAI's web crawler (AI training opt-out) ────────────
      {
        userAgent: "GPTBot",
        disallow: ["/"],
      },

      // ── Block Common Crawl (AI training data) ───────────────────────
      {
        userAgent: "CCBot",
        disallow: ["/"],
      },

      // ── Block Google Extended (AI training) ─────────────────────────
      {
        userAgent: "Google-Extended",
        disallow: ["/"],
      },

      // ── Block Anthropic Claude crawler ──────────────────────────────
      {
        userAgent: "anthropic-ai",
        disallow: ["/"],
      },

      // ── Block Meta AI crawler ─────────────────────────────────────
      {
        userAgent: "FacebookBot",
        allow: ["/"],   // Facebook needs it for OG previews
      },
    ],

    // Sitemap index — references all sub-sitemaps
    sitemap: `${base}/sitemap.xml`,

    // Canonical host declaration
    host: base,
  };
}
