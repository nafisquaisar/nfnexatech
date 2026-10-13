import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import AboutPageClient from "./AboutPageClient";

/* ─────────────────────────────────────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  // The root layout template appends "| NF Nexa Tech" automatically.
  // So this renders as: "About Us | Software Development Company in Delhi | NF Nexa Tech"
  title: "About Us | Software Development Company in Delhi",
  description:
    "Learn about NF Nexa Tech — a UDYAM-registered software development company in Mahipalpur, New Delhi. We build websites, web apps, Android & Flutter apps, and SaaS products for businesses across India.",
  keywords: [
    "about NF Nexa Tech",
    "software development company New Delhi",
    "MSME software agency India",
    "web development company Delhi",
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
    // OG tags do not use the template — include full brand explicitly.
    type: "website",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    title: "About NF Nexa Tech | Software Development Company in Delhi",
    description:
      "UDYAM-registered software development company from Mahipalpur, New Delhi. We build web apps, mobile apps, and SaaS products for startups and enterprises across India.",
    images: [
      {
        url: `${siteConfig.url}/api/og?title=About+NF+Nexa+Tech&type=page`,
        width: 1200,
        height: 630,
        alt: "About NF Nexa Tech — Software Development Company in Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nfnexatech",
    creator: "@nfnexatech",
    title: "About NF Nexa Tech | Software Development Company in Delhi",
    description:
      "UDYAM-registered software studio from New Delhi building web apps, mobile apps, and digital products.",
    images: [`${siteConfig.url}/api/og?title=About+NF+Nexa+Tech&type=page`],
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD structured data
───────────────────────────────────────────────────────────────────────────── */

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  // @id must match the homepage JsonLd.tsx orgSchema() so Google merges them
  // into a single knowledge graph entity instead of treating them as two separate orgs.
  "@id": `${siteConfig.url}/#organization`,
  name: "NF Nexa Tech",
  legalName: "NF Nexa Tech",
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/logo.png`,
    width: 512,
    height: 512,
  },
  description:
    "NF Nexa Tech is a UDYAM-registered software development company from New Delhi, India, specialising in web applications, mobile apps, Flutter, UI/UX design and SaaS development.",
  foundingDate: String(siteConfig.foundedYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.streetAddress,
    addressLocality: siteConfig.contact.city,
    addressRegion: siteConfig.contact.state,
    postalCode: siteConfig.contact.postalCode,
    addressCountry: siteConfig.contact.countryCode,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      email: siteConfig.contact.email,
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone2,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.instagram,
    siteConfig.social.facebook,
  ],
  founder: {
    "@type": "Person",
    // @id ties this Person entity to the same founder referenced in JsonLd.tsx
    "@id": `${siteConfig.url}/#founder`,
    name: siteConfig.founder,
    // Standardised to "Founder & CEO" across all pages — matches About page content
    jobTitle: "Founder & CEO",
    worksFor: { "@id": `${siteConfig.url}/#organization` },
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
        text: `Our head office is in ${siteConfig.contact.streetAddress}, ${siteConfig.contact.city}, ${siteConfig.contact.state} ${siteConfig.contact.postalCode}. We serve clients across India and internationally.`,
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
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        suppressHydrationWarning
      />

      <Navbar />

      {/*
        ── AEO: Answer-First "Quick Facts" block ────────────────────────────
        Server-rendered immediately after Navbar so it appears in the raw HTML
        before the client component hydrates. Answer engines (SGE, Perplexity,
        Bing AI) can extract entity facts directly without executing JavaScript.
      */}
      <section
        aria-label="Quick facts about NF Nexa Tech"
        className="sr-only"
        style={{ position: "absolute", left: "-9999px" }}
      >
        {/* Hidden from visual UI but accessible to crawlers and screen readers */}
        <h2>What is NF Nexa Tech?</h2>
        <p>
          NF Nexa Tech is a UDYAM-registered software development company based in Mahipalpur, New Delhi, India.
          Founded in October 2023 by Nafis Quaisar and co-founded by Saheb Alam, the company builds websites,
          web applications, Android apps, Flutter apps, SaaS products, and custom software for businesses in Delhi
          and remotely across India, including Patna, Darbhanga, and Jhanjharpur in Bihar.
        </p>
        <dl>
          <dt>Company Name</dt><dd>NF Nexa Tech</dd>
          <dt>Founded</dt><dd>25 October 2023</dd>
          <dt>Founder</dt><dd>Nafis Quaisar</dd>
          <dt>Co-Founder</dt><dd>Saheb Alam</dd>
          <dt>Physical Location</dt><dd>Mahipalpur, New Delhi, Delhi 110037, India</dd>
          <dt>Primary Market</dt><dd>Delhi / New Delhi</dd>
          <dt>Service Areas</dt><dd>Delhi NCR, Patna, Darbhanga, Jhanjharpur, and across India</dd>
          <dt>Registration</dt><dd>UDYAM (MSME) — Government of India</dd>
          <dt>Website</dt><dd>{siteConfig.url}</dd>
          <dt>Email</dt><dd>{siteConfig.contact.email}</dd>
          <dt>Phone</dt><dd>{siteConfig.contact.phone}</dd>
          <dt>Services</dt><dd>Web Development, Android App Development, Flutter App Development, UI/UX Design, Backend &amp; API Development, SaaS &amp; MVP Development</dd>
        </dl>
      </section>

      <AboutPageClient />
      <Faq />
      <Footer />
    </>
  );
}

