import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import AboutPageClient from "./AboutPageClient";

/* ─────────────────────────────────────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "About NF Nexa Tech | Premium Software Development Company India",
  description:
    "Learn about NF Nexa Tech — a UDYAM-registered software development company from New Delhi building world-class web apps, mobile apps and digital products for startups and enterprises across India.",
  keywords: [
    "about NF Nexa Tech",
    "software development company New Delhi",
    "MSME software agency India",
    "web development company India",
    "Flutter app development India",
    "Android app development company",
    "startup software development",
    "custom software development India",
    "Nafis Quaisar founder",
    "NF Nexa Tech team",
    "Mahipalpur IT company",
    "Delhi software company",
  ],
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/about`,
    title: "About NF Nexa Tech | Premium Software Development Company India",
    description:
      "UDYAM-registered software development company from New Delhi. We build world-class web apps, mobile apps and digital products for startups and enterprises.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/api/og?title=About+NF+Nexa+Tech&type=page`,
        width: 1200,
        height: 630,
        alt: "About NF Nexa Tech — Software Development Company India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About NF Nexa Tech | Premium Software Development Company India",
    description:
      "UDYAM-registered software studio from New Delhi building world-class apps and digital products.",
    images: [`${siteConfig.url}/api/og?title=About+NF+Nexa+Tech&type=page`],
    creator: "@nfnexatech",
    site: "@nfnexatech",
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD structured data
───────────────────────────────────────────────────────────────────────────── */

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NF Nexa Tech",
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo/navlogo.png`,
  description:
    "NF Nexa Tech is a UDYAM-registered software development company from New Delhi, India, specialising in web applications, mobile apps, Flutter, UI/UX design and SaaS development.",
  foundingDate: "2023-10-25",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Flat 301, Janki Hari Niwas, Block B, Bengali Market, Mahipalpur",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110037",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9801999829",
    contactType: "customer service",
    email: "nfnexatech@gmail.com",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.github,
    siteConfig.social.facebook,
  ],
  founder: {
    "@type": "Person",
    name: "Nafis Quaisar",
    jobTitle: "Founder & CEO",
    worksFor: { "@type": "Organization", name: "NF Nexa Tech" },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.url}/about` },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is NF Nexa Tech located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our head office is at Flat 301, Janki Hari Niwas, Block B, Bengali Market, Mahipalpur, New Delhi – 110037. We serve clients across India and internationally.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does NF Nexa Tech specialise in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialise in Next.js, React, TypeScript, Flutter, Kotlin, Node.js, Firebase, PostgreSQL and AWS. We always adopt the best technology for your specific requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard web application takes 4–8 weeks. A mobile app typically takes 6–12 weeks. Complex enterprise platforms are planned on a dedicated roadmap. We provide a precise timeline after the discovery call.",
      },
    },
    {
      "@type": "Question",
      name: "Is NF Nexa Tech MSME registered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NF Nexa Tech is officially registered under UDYAM (MSME), Government of India. Founded on 25 October 2023.",
      },
    },
    {
      "@type": "Question",
      name: "Does NF Nexa Tech work with startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We love working with startups — from idea validation and MVP development to scaling products post-launch. We offer startup-friendly pricing without compromising quality.",
      },
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page (Server Component)
───────────────────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <AboutPageClient />
    </>
  );
}
