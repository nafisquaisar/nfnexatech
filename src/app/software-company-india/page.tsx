import { Metadata } from "next";
import LocalSeoPage from "@/components/LocalSeoPage";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";

export async function generateMetadata(): Promise<Metadata> {
  const image = ogImage({
    title: "Software Company in India",
    category: "India · Worldwide",
    type: "page",
  });

  return {
    title: "Software Company in India | NF Nexa Tech — Web & App Development",
    description:
      "NF Nexa Tech is a premier software company in India offering web development, Android app development, Flutter apps, and SaaS MVP development. Trusted by startups and businesses across India and globally.",
    keywords: [
      "software company India",
      "software development company India",
      "web development company India",
      "app development company India",
      "Indian software agency",
      "SaaS development India",
      "Flutter development India",
      "React Next.js developer India",
      "outsource software development India",
      "hire software developer India",
      "startup tech partner India",
    ],
    alternates: {
      canonical: `${siteConfig.url}/software-company-india`,
    },
    openGraph: {
      title: "Top Software Company in India | NF Nexa Tech",
      description:
        "India's trusted software development company. Web apps, mobile apps, and SaaS products built to international standards. Work with us from anywhere in the world.",
      url: `${siteConfig.url}/software-company-india`,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: "Top Software Company in India | NF Nexa Tech",
      description:
        "India's trusted software development company. Web apps, mobile apps, and SaaS products built to international standards.",
      images: [image.url],
    },
  };
}

const localFaqs = [
  {
    question: "Which is a reliable software company in India for startups?",
    answer:
      "NF Nexa Tech is a trusted Indian software company specialising in startup-friendly development. We have delivered SaaS MVPs, Android apps, Flutter apps, and web platforms for early-stage startups and growth-stage businesses across India and internationally.",
  },
  {
    question: "Why outsource software development to India?",
    answer:
      "India offers a unique combination of top engineering talent, English proficiency, and significantly lower costs than Western markets (typically 60–80% savings). Indian developers also overlap time zones with Europe, Middle East, and parts of Asia.",
  },
  {
    question: "Can NF Nexa Tech work with international clients?",
    answer:
      "Yes — we work with clients globally across the USA, UK, UAE, Australia, and Europe. We align our working hours for international video calls, accept international payments via wire transfer, and communicate fluently in English.",
  },
  {
    question: "What makes NF Nexa Tech different from other Indian software companies?",
    answer:
      "We combine startup agility with agency-grade quality. Our tech stack (Next.js, Flutter, Firebase, Node.js) is modern and scalable. We provide bi-weekly demos, Slack/WhatsApp access, and transparent milestone-based pricing — no hidden costs.",
  },
  {
    question: "How do I start a software project with an Indian company?",
    answer:
      "Book a free 30-minute discovery call with NF Nexa Tech. We&apos;ll understand your requirements, suggest architecture, and deliver a detailed proposal within 48 hours — no commitment required.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/software-company-india#organization`,
  name: `${siteConfig.name} — Software Company in India`,
  description:
    "Leading software development company in India. Web apps, Android apps, Flutter, and SaaS MVPs for startups and enterprises.",
  url: `${siteConfig.url}/software-company-india`,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  priceRange: "₹₹",
  foundingDate: String(siteConfig.foundedYear),
  founder: { "@type": "Person", name: siteConfig.founder },
};

export default function SoftwareCompanyIndia() {
  return (
    <LocalSeoPage
      city="India"
      state="Serving All India"
      country="India"
      countryCode="IN"
      service="Software Company"
      slug="software-company-india"
      headline="India's Premier Software Development Company"
      subheadline="Production-grade web apps, mobile apps, and SaaS products built by an expert Indian tech team — trusted by startups and businesses worldwide."
      description="NF Nexa Tech is a leading software company in India offering full-stack web development, Android app development, Flutter cross-platform apps, and SaaS MVP development. We combine international engineering standards with competitive Indian pricing to help startups and businesses scale faster. Based in Bhopal, we serve clients across India, the USA, UK, UAE, and beyond."
      geo={{ lat: 20.5937, lng: 78.9629 }}
      localFaqs={localFaqs}
      schema={schema}
    />
  );
}
