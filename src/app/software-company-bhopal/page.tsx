import { Metadata } from "next";
import LocalSeoPage from "@/components/LocalSeoPage";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";

export async function generateMetadata(): Promise<Metadata> {
  const image = ogImage({
    title: "Software Company in Bhopal",
    category: "📍 Bhopal, MP",
    type: "page",
  });

  return {
    title: "Software Company in Bhopal | NF Nexa Tech",
    description:
      "NF Nexa Tech is a leading software company in Bhopal, Madhya Pradesh. We build web apps, Android apps, Flutter apps, and SaaS products for startups and businesses. Get a free consultation today.",
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
      title: "Best Software Company in Bhopal | NF Nexa Tech",
      description:
        "Top-rated software development company in Bhopal. Web apps, mobile apps, and SaaS MVPs built to global standards at Indian prices.",
      url: `${siteConfig.url}/software-company-bhopal`,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Software Company in Bhopal | NF Nexa Tech",
      description:
        "Top-rated software development company in Bhopal. Web apps, mobile apps, and SaaS MVPs built to global standards.",
      images: [image.url],
    },
  };
}

const localFaqs = [
  {
    question: "Which is the best software company in Bhopal?",
    answer:
      "NF Nexa Tech is one of Bhopal's leading software companies, specialising in web development, Android/Flutter app development, and SaaS MVP development. We have delivered 15+ projects for clients across India and internationally.",
  },
  {
    question: "What software services does NF Nexa Tech offer in Bhopal?",
    answer:
      "We offer end-to-end software development: web applications (React, Next.js), Android apps (Java/Kotlin), Flutter cross-platform apps, UI/UX design, backend APIs (Node.js, Firebase), and SaaS MVP development — serving clients in Bhopal and across India from our New Delhi office.",
  },
  {
    question: "How much does software development cost in Bhopal?",
    answer:
      "Project costs vary by scope. A focused MVP typically starts from ₹1.5L–₹3L. A full-featured mobile app ranges from ₹3L–₹8L. A custom SaaS platform starts from ₹7L. We provide detailed, transparent quotes after a free discovery call.",
  },
  {
    question: "Do you work with clients outside Bhopal?",
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
  "@id": `${siteConfig.url}/software-company-bhopal#localbusiness`,
  name: `${siteConfig.name} — Software Company in Bhopal`,
  description:
    "Leading software development company in Bhopal, MP. Web apps, Android apps, Flutter apps, and SaaS MVPs.",
  url: `${siteConfig.url}/software-company-bhopal`,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Flat 301, Janki Hari Niwas, Block B, Bengali Market, Mahipalpur",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110037",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5357,
    longitude: 77.1199,
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
      service="Software Company"
      slug="software-company-bhopal"
      headline="#1 Software Development Company in Bhopal"
      subheadline="Web apps, mobile apps, and SaaS products built to global standards — right here in Bhopal, Madhya Pradesh."
      description="NF Nexa Tech is Bhopal's trusted software development company. We build production-grade web applications, Android apps, Flutter apps, and SaaS MVPs for startups, SMEs, and enterprises. Our tech team delivers international-quality software at competitive Indian pricing."
      geo={{ lat: 23.2599, lng: 77.4126 }}
      localFaqs={localFaqs}
      schema={schema}
    />
  );
}
