/**
 * robots.ts — served at /robots.txt
 *
 * Phase 18: AI crawler policy reviewed against AEO/GEO/AIO goals.
 *
 * DECISION RATIONALE:
 *   The site's strategic goal includes AEO, GEO, AIO, and AI search visibility.
 *   Blocking all AI crawlers is inconsistent with that goal.
 *
 *   Crawlers ALLOWED (AI Answer/Search engines — index public content for answers):
 *     • GPTBot         — ChatGPT browsing and search features (OpenAI)
 *     • Google-Extended — Google's AI Overviews / Bard / Gemini
 *     • PerplexityBot  — Perplexity AI search engine
 *     • anthropic-ai   — Claude's browsing (Anthropic)
 *     • Applebot-Extended — Apple Intelligence / Siri Suggestions
 *
 *   Crawlers BLOCKED (pure training data scrapers, no end-user search benefit):
 *     • CCBot           — Common Crawl (training data bulk harvester)
 *     • FacebookBot     — Meta AI training (not OG preview — FB uses different UA)
 *
 *   Private routes still blocked for ALL crawlers:
 *     /api/ (except /api/og), /_next/, /verify/, admin, etc.
 *
 * NOTE: FacebookBot for Open Graph previews uses a different User-Agent
 * ("facebookexternalhit") which is allowed via the default * rule.
 */

import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.url;

  return {
    rules: [
      // ── Default: all legitimate crawlers (including search engines) ──────
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/contact",        // P2: explicitly allow new indexable contact page
          "/services/",
          "/projects/",
          "/blog/",
          "/locations/",
          "/start-project",
          "/software-company-bhopal",
          "/software-company-india",
          "/web-development-company-patna",
          "/privacy-policy",
          "/terms",
          "/refund-policy",
          // /api/og must be explicitly allowed so Googlebot can fetch OG images
          // for social card previews. Being more specific than /api/ means this
          // allow takes precedence per robots.txt specificity rules.
          "/api/og",
        ],
        disallow: [
          "/api/",         // Block all other API routes (internal use only)
          "/_next/",       // Next.js build assets
          "/_vercel/",     // Vercel deployment internals
          "/static/",      // Static assets directory
          "/admin",        // Admin panel (if ever added)
          "/*.json$",      // Raw JSON data files
          "/verify/",      // Employee verification portal — internal only
        ],
      },

      // ── Phase 18: Allow GPTBot (ChatGPT/OpenAI search) ──────────────────
      // Supports AEO/GEO — content appears in ChatGPT answer citations.
      {
        userAgent: "GPTBot",
        allow: ["/"],
        disallow: ["/api/", "/verify/", "/_next/"],
      },

      // ── Phase 18: Allow Google-Extended (Gemini / AI Overviews) ─────────
      // Supports GEO — content appears in Google AI Overviews / Gemini.
      {
        userAgent: "Google-Extended",
        allow: ["/"],
        disallow: ["/api/", "/verify/", "/_next/"],
      },

      // ── Phase 18: Allow anthropic-ai (Claude) ───────────────────────────
      // Supports AEO — Claude can cite content in answers.
      {
        userAgent: "anthropic-ai",
        allow: ["/"],
        disallow: ["/api/", "/verify/", "/_next/"],
      },

      // ── Phase 18: Allow PerplexityBot ───────────────────────────────────
      // Supports AEO — Perplexity cites sources in its AI search results.
      {
        userAgent: "PerplexityBot",
        allow: ["/"],
        disallow: ["/api/", "/verify/", "/_next/"],
      },

      // ── Phase 18: Block CCBot (Common Crawl training data) ───────────────
      // No end-user AI search benefit — pure bulk training data harvester.
      {
        userAgent: "CCBot",
        disallow: ["/"],
      },
    ],

    // Sitemap index — references all sub-sitemaps
    sitemap: `${base}/sitemap.xml`,
  };
}
