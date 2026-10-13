import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── P1 SEO: 301 redirect — legacy Patna page → new canonical location page ──
  // This consolidates link equity from the old flat URL into /locations/patna.
  // The legacy page's own canonical tag still points to its own URL (pre-existing),
  // but the 301 is the stronger signal Google uses to determine the canonical.
  async redirects() {
    return [
      // ── P1: Legacy Patna page → canonical location page ──────────────────
      // Consolidates link equity from the old flat URL into /locations/patna.
      {
        source: "/web-development-company-patna",
        destination: "/locations/patna",
        permanent: true,
      },
      // ── Batch3: Popular Bread inventory route → canonical case study ──────
      // data.js uses slug 'popular-bread-inventory' which generates a live
      // dynamic route at /projects/popular-bread-inventory. All UI components
      // (ProjectsClient, Projects.jsx, service pages, blog, location pages)
      // already link to /projects/popular-bread (the rich static case study).
      // This redirect collapses the orphaned duplicate to the canonical URL.
      {
        source: "/projects/popular-bread-inventory",
        destination: "/projects/popular-bread",
        permanent: true,
      },
    ];
  },

  // Tree-shake large packages that support it
  experimental: {
    optimizePackageImports: ["@vercel/analytics"],
  },
  images: {
    // Allow Unsplash images (used in About section)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    // Modern formats — AVIF first for best compression, WebP fallback
    formats: ["image/avif", "image/webp"],
    // Allow quality:100 for hero image
    qualities: [100, 75],
    // Explicit srcset breakpoints — avoids generating unnecessary variants
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enforce strict mode for better React error detection
  reactStrictMode: true,
  // Compress assets
  compress: true,
  // Remove X-Powered-By header
  poweredByHeader: false,
};

export default nextConfig;

