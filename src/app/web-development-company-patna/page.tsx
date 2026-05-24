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
    title: "Web Development Company in Patna | NF Nexa Tech",
    description:
      "NF Nexa Tech is a top web development company serving Patna, Bihar. We build high-performance React, Next.js web apps, mobile apps, and SaaS products. Get a free quote today.",
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
      canonical: `${siteConfig.url}/web-development-company-patna`,
    },
    openGraph: {
      title: "Best Web Development Company in Patna | NF Nexa Tech",
      description:
        "Professional web development services for Patna businesses. React, Next.js, Android, Flutter — built to global standards.",
      url: `${siteConfig.url}/web-development-company-patna`,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Web Development Company in Patna | NF Nexa Tech",
      description:
        "Professional web development services for Patna businesses. React, Next.js, Android, Flutter — built to global standards.",
      images: [image.url],
    },
  };
}

const localFaqs = [
  {
    question: "Is there a good web development company in Patna?",
    answer:
      "NF Nexa Tech serves clients in Patna and across Bihar with professional web development, mobile app development, and SaaS services. While our office is in Bhopal, we work remotely with Patna-based startups, businesses, and institutions.",
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
  "@id": `${siteConfig.url}/web-development-company-patna#localbusiness`,
  name: `${siteConfig.name} — Web Development Company serving Patna`,
  description:
    "Professional web development company serving Patna, Bihar. React, Next.js, mobile apps, and SaaS solutions.",
  url: `${siteConfig.url}/web-development-company-patna`,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "34, Sneh Nagar, Siddharth Enclave, Ayodhya Nagar",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    postalCode: "462022",
    addressCountry: "IN",
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
      headline="Premium Web Development for Patna Businesses"
      subheadline="NF Nexa Tech delivers world-class web apps, mobile apps, and SaaS products for startups and businesses in Patna, Bihar."
      description="Looking for a reliable web development company in Patna? NF Nexa Tech builds high-performance React and Next.js web applications, Android apps, Flutter mobile apps, and SaaS MVPs — with a dedicated team, transparent process, and 4-hour response time. We serve clients across Patna, Bihar and all of India."
      geo={{ lat: 25.5941, lng: 85.1376 }}
      localFaqs={localFaqs}
      schema={schema}
    />
  );
}
