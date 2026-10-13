import { Metadata } from "next";
import LocalSeoPage from "@/components/LocalSeoPage";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";

export async function generateMetadata(): Promise<Metadata> {
  const image = ogImage({
    title: "Software Development Services in Bhopal",
    category: "📍 Bhopal, MP",
    type: "page",
  });

  return {
    // Phase 10: Removed "leading software company" superlative from title.
    title: "Software Development Services in Bhopal | NF Nexa Tech",
    description:
      // Phase 9: Removed claim that NF Nexa Tech is based in Bhopal.
      // Accurately describes Delhi-based company serving Bhopal businesses.
      "NF Nexa Tech is a Delhi-based software development company serving businesses in Bhopal, Madhya Pradesh. We build web apps, Android apps, Flutter apps, and SaaS products. Get a free consultation today.",
    keywords: [
      "software company Bhopal",
      "software development company Bhopal",
      "app development Bhopal",
      "web development Bhopal",
      "IT company Bhopal",
      "software agency Bhopal",
      "mobile app development Bhopal",
      "Flutter development Bhopal",
      "React developer Bhopal",
      "Next.js developer Bhopal",
    ],
    alternates: {
      canonical: `${siteConfig.url}/software-company-bhopal`,
    },
    openGraph: {
      // Phase 10: Removed "Best Software Company" superlative from OG title.
      title: "Software Development Services in Bhopal | NF Nexa Tech",
      description:
        "Delhi-based software development company serving Bhopal businesses. Web apps, mobile apps, and SaaS MVPs built to quality standards.",
      url: `${siteConfig.url}/software-company-bhopal`,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      // Phase 10: Removed "Best Software Company" superlative from Twitter title.
      title: "Software Development Services in Bhopal | NF Nexa Tech",
      description:
        "Delhi-based software development company serving Bhopal businesses. Web apps, mobile apps, and SaaS MVPs.",
      images: [image.url],
    },
  };
}

const localFaqs = [
  {
    question: "Does NF Nexa Tech serve clients in Bhopal?",
    // Phase 9: Corrected — no longer claims to be "one of Bhopal's leading companies".
    answer:
      "Yes. NF Nexa Tech is a Delhi-based software development company serving businesses in Bhopal and across India. We specialise in web development, Android and Flutter app development, and SaaS MVP development. While our office is in Mahipalpur, New Delhi, we work with Bhopal-based clients remotely via WhatsApp, video calls, and Slack.",
  },
  {
    question: "What software services does NF Nexa Tech offer for Bhopal businesses?",
    answer:
      "We offer end-to-end software development: web applications (React, Next.js), Android apps (Java/Kotlin), Flutter cross-platform apps, UI/UX design, backend APIs (Node.js, Firebase), and SaaS MVP development — serving clients in Bhopal and across India from our New Delhi office.",
  },
  {
    question: "How much does software development cost for a Bhopal business?",
    answer:
      "Project costs vary by scope. A focused MVP typically starts from ₹1.5L–₹3L. A full-featured mobile app ranges from ₹3L–₹8L. A custom SaaS platform starts from ₹7L. We provide detailed, transparent quotes after a free discovery call.",
  },
  {
    question: "Do you work with clients outside Delhi?",
    answer:
      "Yes — based in New Delhi, we work with clients across India (Bhopal, Mumbai, Bangalore, Pune, Patna) and internationally (USA, UK, UAE). All communication is remote-first via WhatsApp, Slack, and video calls.",
  },
  {
    question: "How do I get started with NF Nexa Tech?",
    answer:
      "Book a free 30-minute discovery call, send a WhatsApp message, or fill out our contact form. We respond within 4 business hours and deliver a detailed proposal within 48 hours.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  // Phase 15: Location-specific page uses sameAs to reference canonical LocalBusiness.
  // This page represents the same physical business serving a different city.
  "sameAs": `${siteConfig.url}/#localbusiness`,
  "@id": `${siteConfig.url}/software-company-bhopal#localbusiness`,
  name: `${siteConfig.name} — Software Development Services for Bhopal`,
  // Phase 9: Description no longer claims to be a Bhopal-based company.
  description:
    "Delhi-based software development company serving businesses in Bhopal, MP. Web apps, Android apps, Flutter apps, and SaaS MVPs.",
  url: `${siteConfig.url}/software-company-bhopal`,
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.lat,
    longitude: siteConfig.geo.lng,
  },
  areaServed: { "@type": "City", name: "Bhopal" },
  priceRange: "₹₹",
};

export default function SoftwareCompanyBhopal() {
  return (
    <LocalSeoPage
      city="Bhopal"
      state="Madhya Pradesh"
      country="India"
      countryCode="IN"
      service="Software Development Services"
      slug="software-company-bhopal"
      // Phase 9 & 10: Removed "#1 Software Development Company in Bhopal" headline
      // and "NF Nexa Tech is Bhopal's trusted" description.
      // Replaced with factual wording — Delhi-based company serving Bhopal.
      headline="Software Development Services for Bhopal Businesses"
      subheadline="NF Nexa Tech is a Delhi-based software company serving businesses in Bhopal, Madhya Pradesh. We build web apps, mobile apps, and SaaS products remotely."
      description="NF Nexa Tech is a Delhi-based software development company serving businesses in Bhopal, Madhya Pradesh. We build web applications (React, Next.js), Android apps, Flutter cross-platform apps, and SaaS MVPs for startups, SMEs, and enterprises across India. Our team works remotely with Bhopal clients via WhatsApp, video calls, and regular check-ins."
      geo={{ lat: 23.2599, lng: 77.4126 }}
      localFaqs={localFaqs}
      schema={schema}
    />
  );
}
