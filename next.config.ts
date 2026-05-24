import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
