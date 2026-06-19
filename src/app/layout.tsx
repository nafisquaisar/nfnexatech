import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true, // generates size-adjust CSS → prevents CLS on font swap
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
};

// Build the dynamic OG image URL for the home page using the same /api/og route
// used by blog posts, services, and projects — keeps branding consistent.
const homeOgUrl =
  `${siteConfig.url}/api/og?` +
  new URLSearchParams({
    title: "Software Development Company India",
    type: "page",
  }).toString();

// ── Search Console verification ──────────────────────────────────────────────
// Reads from server-side env vars (no NEXT_PUBLIC_ prefix needed — this value
// is only embedded in the HTML <head> at build/request time, never sent to JS).
//
// HOW TO SET UP GOOGLE SEARCH CONSOLE:
//   1. Go to https://search.google.com/search-console
//   2. Click "Add property" → choose "URL prefix" → enter https://nfnexatech.tech
//   3. Select "HTML tag" verification method
//   4. Copy the content value from the meta tag shown, e.g.:
//        <meta name="google-site-verification" content="PASTE_THIS_VALUE" />
//   5. Add to .env.local:  GOOGLE_SITE_VERIFICATION=PASTE_THIS_VALUE
//   6. Add the same variable to your Vercel / hosting project env settings
//   7. Redeploy, then click "Verify" in Search Console
//
// OPTIONAL — Bing Webmaster Tools (https://www.bing.com/webmasters):
//   Follow the same HTML-tag flow and set BING_SITE_VERIFICATION=<value>
//
// A missing or placeholder value is silently omitted — no broken meta tag.
const gscToken = process.env.GOOGLE_SITE_VERIFICATION;
const bingToken = process.env.BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: `Software Development Company India | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    // Primary commercial keywords
    "software development company India",
    "web development company India",
    "Android app development company",
    "Flutter app development company",
    "SaaS development company",
    "UI UX design agency India",
    // Secondary / long-tail
    "software agency",
    "Next.js development",
    "React development",
    "Firebase backend",
    "SaaS MVP development",
    "startup software development",
    "mobile app development India",
    // Local keywords
    "software company New Delhi",
    "web developer Mahipalpur",
    "IT company Delhi",
    // Brand
    "NF Nexa Tech",
  ],
  authors: [{ name: siteConfig.founder, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `Software Development Company India | ${siteConfig.name}`,
    description: siteConfig.description,
    images: [
      {
        url: homeOgUrl,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Software Development Company India`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Software Development Company India | ${siteConfig.name}`,
    description: siteConfig.description,
    images: [homeOgUrl],
    creator: "@nfnexatech",
    site: "@nfnexatech",
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      "application/rss+xml": `${siteConfig.url}/rss.xml`,
    },
  },
  // ── Search engine verification ───────────────────────────────────────────
  // Next.js emits <meta name="google-site-verification" content="..." /> and
  // equivalent tags automatically when these are present. Values are sourced
  // from env vars so nothing is ever hardcoded or committed to git.
  // See comment block above for full setup instructions.
  verification: {
    ...(gscToken && gscToken !== "REPLACE_WITH_GSC_VERIFICATION_TOKEN"
      ? { google: gscToken }
      : {}),
    ...(bingToken && bingToken !== "REPLACE_WITH_BING_VERIFICATION_TOKEN"
      ? { other: { "msvalidate.01": [bingToken] } }
      : {}),
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ── Analytics IDs ────────────────────────────────────────────────────────
  // NEXT_PUBLIC_GOOGLE_ADS_ID  → Google Ads account ID (AW-XXXXXXXXXX)
  // NEXT_PUBLIC_GA_ID          → GA4 Measurement ID (G-XXXXXXXXXX) — optional,
  //                              leave unset or set to placeholder if no GA4 property
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  // Validate IDs — ignore placeholder values
  const validAdsId =
    adsId && adsId !== "AW-XXXXXXXXXX" ? adsId : undefined;
  const validGaId =
    gaId && gaId.startsWith("G-") && gaId !== "G-XXXXXXXXXX"
      ? gaId
      : undefined;

  // A primary tag ID is required to load the gtag script at all.
  // Google recommends loading with the GA4 ID if present; otherwise Ads ID.
  const primaryTagId = validGaId ?? validAdsId;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* Preconnect to Google Fonts CDN — eliminates DNS round-trip before font fetch */}
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        {children}
        <Analytics />

        {/*
          Google Tag — loads gtag.js once for both GA4 and Google Ads.
          Script is deferred with afterInteractive so it never blocks render.
          Both IDs are configured in a single init script to avoid duplicate
          gtag.js loads (which would double-count pageviews).

          Required env vars (set in .env.local AND Vercel project settings):
            NEXT_PUBLIC_GOOGLE_ADS_ID = AW-18240874915
            NEXT_PUBLIC_GA_ID         = G-XXXXXXXXXX  (optional, if GA4 is set up)
        */}
        {primaryTagId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${primaryTagId}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {[
                "window.dataLayer=window.dataLayer||[];",
                "function gtag(){dataLayer.push(arguments);}",
                "gtag('js',new Date());",
                // Configure GA4 first if available (recommended order)
                validGaId
                  ? `gtag('config','${validGaId}',{send_page_view:true});`
                  : "",
                // Configure Google Ads account — required for conversion tracking
                validAdsId ? `gtag('config','${validAdsId}');` : "",
              ]
                .filter(Boolean)
                .join("")}
            </Script>
          </>
        )}

        {/* Microsoft Clarity — replace XXXXXXXXXX in .env.local */}
        {clarityId && clarityId !== "XXXXXXXXXX" && (
          <Script id="ms-clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarityId}");`}
          </Script>
        )}
      </body>
    </html>
  );
}

