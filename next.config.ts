import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow Unsplash images (used in About section)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    // Modern formats for better compression
    formats: ["image/avif", "image/webp"],
  },
  // Enforce strict mode for better React error detection
  reactStrictMode: true,
  // Compress assets
  compress: true,
  // Power-header for CDN cache identification
  poweredByHeader: false,
};

export default nextConfig;
