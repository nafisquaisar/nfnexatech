import { Metadata } from "next";
import LocalSeoPage from "@/components/LocalSeoPage";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";

export async function generateMetadata(): Promise<Metadata> {
  const image = ogImage({
    title: "Web Development Company in Patna",
    category: "Patna, Bihar",
    type: "page",
  });

  return {
    // Phase 10: Removed "Best Web Development Company" superlative.
    title: "Web Development Services for Businesses in Patna | NF Nexa Tech",
    description:
      "NF Nexa Tech is a Delhi-based software company offering web development services for businesses in Patna, Bihar. We build high-performance React, Next.js web apps, mobile apps, and SaaS products. Get a free quote today.",
    keywords: [
      "web development company Patna",
      "web developer Patna",
      "software company Patna",
      "app development Patna",
      "IT company Patna Bihar",
      "React developer Patna",
      "Next.js developer Patna",
      "mobile app development Patna",
      "SaaS development Patna",
      "startup tech company Patna",
    ],
    alternates: {
      // Phase Batch1: Canonical updated to redirect destination.
      // next.config.ts permanently redirects this URL → /locations/patna.
      // Canonical must match the redirect destination to avoid mixed signals.
      canonical: `${siteConfig.url}/locations/patna`,
    },
    openGraph: {
      // Phase 10: Removed "Best Web Development Company" superlative from OG title.
      title: "Web Development Services for Businesses in Patna | NF Nexa Tech",
      description:
        "Professional web development services for Patna businesses. React, Next.js, Android, Flutter — built to quality standards.",
      url: `${siteConfig.url}/locations/patna`,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      // Phase 10: Removed "Best Web Development Company" superlative from Twitter title.
      title: "Web Development Services for Businesses in Patna | NF Nexa Tech",
      description:
        "Professional web development services for Patna businesses. React, Next.js, Android, Flutter.",
      images: [image.url],
    },
  };
}

const localFaqs = [
  {
    question: "Is there a good web development company in Patna?",
    answer:
      "NF Nexa Tech serves clients in Patna and across Bihar with professional web development, mobile app development, and SaaS services. While our office is in New Delhi (Mahipalpur), we work remotely with Patna-based startups, businesses, and institutions.",
  },
  {
    question: "What web development services are available for Patna businesses?",
    answer:
      "We build React and Next.js web applications, e-commerce platforms, business websites, admin dashboards, Android apps, Flutter cross-platform apps, and custom SaaS platforms — all tailored to your business needs.",
  },
  {
    question: "How much does web development cost for a Patna startup?",
    answer:
      "A professional business website starts from ₹50,000–₹1.5L. A full web application or e-commerce platform ranges from ₹2L–₹6L. SaaS products start from ₹5L. We provide free, detailed quotes after a discovery call.",
  },
  {
    question: "Do you provide ongoing support after the website is built?",
    answer:
      "Yes — all projects include 30 days of free post-launch support. We also offer monthly retainer maintenance plans for ongoing updates, performance monitoring, and feature additions.",
  },
  {
    question: "Can I get a free consultation for my Patna-based project?",
    answer:
      "Absolutely. Book a free 30-minute video call with our team. We&apos;ll discuss your requirements, suggest the best technology stack, and provide a no-obligation project estimate — all at zero cost.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  // Phase 15: sameAs references canonical LocalBusiness entity.
  "sameAs": `${siteConfig.url}/#localbusiness`,
  "@id": `${siteConfig.url}/web-development-company-patna#localbusiness`,
  name: `${siteConfig.name} — Web Development Services for Patna`,
  description:
    "Professional web development company serving Patna, Bihar. React, Next.js, mobile apps, and SaaS solutions.",
  url: `${siteConfig.url}/web-development-company-patna`,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.streetAddress,
    addressLocality: siteConfig.contact.city,
    addressRegion: siteConfig.contact.state,
    postalCode: siteConfig.contact.postalCode,
    addressCountry: siteConfig.contact.countryCode,
  },
  areaServed: [
    { "@type": "City", name: "Patna" },
    { "@type": "State", name: "Bihar" },
  ],
  priceRange: "₹₹",
};

export default function WebDevelopmentCompanyPatna() {
  return (
    <LocalSeoPage
      city="Patna"
      state="Bihar"
      country="India"
      countryCode="IN"
      service="Web Development Company"
      slug="web-development-company-patna"
      // Phase 10: Removed "Premium Web Development" superlative from headline.
      headline="Web Development Services for Businesses in Patna"
      subheadline="NF Nexa Tech is a Delhi-based software company offering web development, mobile apps, and SaaS products for businesses in Patna, Bihar."
      description="Looking for web development services in Patna? NF Nexa Tech is a Delhi-based software development company serving businesses in Patna, Bihar. We build high-performance React and Next.js web applications, Android apps, Flutter mobile apps, and SaaS MVPs — with a dedicated team, transparent process, and regular updates. We serve clients across Patna, Bihar and all of India."
      geo={{ lat: 25.5941, lng: 85.1376 }}
      localFaqs={localFaqs}
      schema={schema}
    />
  );
}
