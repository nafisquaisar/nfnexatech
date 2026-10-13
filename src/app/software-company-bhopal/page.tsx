import { Metadata } from "next";
import LocalSeoPage from "@/components/LocalSeoPage";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";

export async function generateMetadata(): Promise<Metadata> {
  const image = ogImage({
    title: "Software Development Services in Bhopal",
    category: "Bhopal, Madhya Pradesh",
    type: "page",
  });

  return {
    title: "Software Development Services in Bhopal",
    description:
      "NF Nexa Tech provides software development services to businesses in Bhopal, Madhya Pradesh. Based in Mahipalpur, New Delhi, we build websites, Android apps, Flutter apps, and custom software — delivered remotely.",
    alternates: {
      canonical: `${siteConfig.url}/software-company-bhopal`,
    },
    openGraph: {
      title: "Software Development Services in Bhopal | NF Nexa Tech",
      description:
        "Website development, Android apps, Flutter apps, and custom software for businesses in Bhopal, MP. Delhi-based team. Remote delivery.",
      url: `${siteConfig.url}/software-company-bhopal`,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: "Software Development Services in Bhopal | NF Nexa Tech",
      description:
        "Software development for businesses in Bhopal, MP. Delhi-based team, remote delivery.",
      images: [image.url],
    },
  };
}

const localFaqs = [
  {
    question: "Does NF Nexa Tech serve businesses in Bhopal?",
    answer:
      "Yes. NF Nexa Tech provides software development services remotely to businesses in Bhopal, Madhya Pradesh. Our office is in Mahipalpur, New Delhi. All project communication happens through WhatsApp, video calls, and written project documentation.",
  },
  {
    question: "Is NF Nexa Tech physically located in Bhopal?",
    answer:
      "No. Our office is in Mahipalpur, New Delhi. We do not have a physical presence in Bhopal. We serve Bhopal businesses fully remotely — the process is structured so location is not a barrier.",
  },
  {
    question: "What types of software does NF Nexa Tech build?",
    answer:
      "We build business websites, web applications, Android apps (Kotlin), Flutter cross-platform apps (Android and iOS), and custom software such as management dashboards and internal tools. The right solution depends on your specific requirements, which we discuss before recommending an approach.",
  },
  {
    question: "Can we work together remotely from Bhopal?",
    answer:
      "Yes. All project communication, design reviews, and progress updates happen remotely. We share a written scope before starting, work in development stages, and provide updates throughout. You can review the work and give feedback at each stage.",
  },
  {
    question: "How can I request a project estimate?",
    answer:
      "Send a WhatsApp message or fill in the project form on the Start Project page. Describe what you want to build and what problem it needs to solve. We will review your requirements and discuss the right approach before providing an estimate.",
  },
  {
    question: "What should I prepare before discussing a project?",
    answer:
      "A basic idea of what the software should do, who will use it, and which problem it needs to solve. You do not need a technical specification — we help clarify requirements during the initial discussion. Reference examples or competitor links are useful to share.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/software-company-bhopal#service`,
  name: "Software Development Services in Bhopal",
  description:
    "NF Nexa Tech provides software development services — web development, Android app development, Flutter app development, UI/UX design, backend API development, and SaaS MVP development — to businesses in Bhopal, Madhya Pradesh.",
  url: `${siteConfig.url}/software-company-bhopal`,
  provider: {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.streetAddress,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.state,
      postalCode: siteConfig.contact.postalCode,
      addressCountry: siteConfig.contact.countryCode,
    },
  },
  areaServed: [
    { "@type": "City", name: "Bhopal" },
    { "@type": "State", name: "Madhya Pradesh" },
  ],
  serviceType: "Software Development",
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
      headline="Software Development Services for Businesses in Bhopal"
      subheadline="NF Nexa Tech is based in Mahipalpur, New Delhi, and works remotely with businesses in Bhopal and across India. We develop websites, mobile applications, and custom software based on each project's requirements."
      description="Whether you're planning a new business website, improving an existing application, or building a software product, we can discuss your goals and help you work out a practical development approach. All project communication happens through WhatsApp and video calls — no travel required at any stage."
      geo={{ lat: 23.2599, lng: 77.4126 }}
      localFaqs={localFaqs}
      schema={schema}
    />
  );
}
