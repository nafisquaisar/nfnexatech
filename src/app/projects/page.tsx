/**
 * /projects — Server Component page.
 *
 * Phase 5: Refactored from a "use client" page to a proper server component.
 *   - Metadata is now exported for SEO (title, description, OG, Twitter, canonical).
 *   - Interactive filtering logic lives in ProjectsClient (client island).
 *   - All project data and visual design are preserved exactly.
 */
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";
import ProjectsClient from "./ProjectsClient";

const projectsOgImage = ogImage({
  title: "Software Development Portfolio",
  category: "Projects",
  type: "page",
});

export const metadata: Metadata = {
  // Root layout template appends "| NF Nexa Tech" automatically.
  // Renders as: "Software Development Portfolio | NF Nexa Tech"
  title: "Software Development Portfolio",
  description:
    "Explore NF Nexa Tech's portfolio of web applications, Android apps, Flutter apps, and SaaS products built for businesses in Delhi and across India.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
  openGraph: {
    // OG tags don't use the template — include full brand explicitly.
    title: "Software Development Portfolio | NF Nexa Tech",
    description:
      "Web apps, Android apps, Flutter apps, and SaaS products built by NF Nexa Tech for businesses across India.",
    url: `${siteConfig.url}/projects`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [projectsOgImage],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nfnexatech",
    creator: "@nfnexatech",
    title: "Software Development Portfolio | NF Nexa Tech",
    description:
      "Web apps, Android apps, Flutter apps, and SaaS products built by NF Nexa Tech.",
    images: [projectsOgImage.url],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
