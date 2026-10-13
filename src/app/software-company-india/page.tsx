import { Metadata } from "next";
import LocalSeoPage from "@/components/LocalSeoPage";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";

export async function generateMetadata(): Promise<Metadata> {
  const image = ogImage({
    title: "Software Development Company in India",
    category: "New Delhi, India",
    type: "page",
  });

  return {
    // Root layout template appends "| NF Nexa Tech"
    // Final: "Software Development Company in India | NF Nexa Tech"
    title: "Software Development Company in India",
    description:
      "NF Nexa Tech is a software development company based in Mahipalpur, New Delhi. We build websites, web applications, Android apps, Flutter apps, and custom software for businesses across India — delivered remotely.",
    alternates: {
      canonical: `${siteConfig.url}/software-company-india`,
    },
    openGraph: {
      title: "Software Development Company in India | NF Nexa Tech",
      description:
        "Website development, Android apps, Flutter apps, and custom software for businesses across India. Delhi-based team. Remote delivery.",
      url: `${siteConfig.url}/software-company-india`,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: "Software Development Company in India | NF Nexa Tech",
      description:
        "Software development for businesses across India. Delhi-based team, remote delivery.",
      images: [image.url],
    },
  };
}

const localFaqs = [
  {
    question: "Where is NF Nexa Tech based and which cities do you serve?",
    answer:
      "NF Nexa Tech is based in Mahipalpur, New Delhi. We work remotely with businesses across India — including Delhi, Patna, Darbhanga, Jhanjharpur, Bhopal, and other cities. All project communication happens through WhatsApp, video calls, and written project documentation. No physical visit is required at any stage.",
  },
  {
    question: "What types of software does NF Nexa Tech build?",
    answer:
      "We build business websites, web applications, Android apps (Kotlin), Flutter cross-platform apps (Android and iOS), custom backend systems, and first versions of software products (MVPs). The right solution depends on your specific requirements, which we discuss before recommending an approach.",
  },
  {
    question: "How does remote software development work?",
    answer:
      "We share a written scope document before starting any development. Work happens in stages, with progress updates and reviews at each milestone. You can give feedback throughout the process. All communication happens over WhatsApp and video calls — no travel is needed from either side.",
  },
  {
    question: "What kinds of businesses do you typically work with?",
    answer:
      "Most of our clients are small and medium businesses — coaching institutes, clinics, retail businesses, logistics companies, and service providers — as well as founders building software products. We have also worked with NGOs and education organisations. Budget and scope vary; we discuss what is realistic for each project honestly.",
  },
  {
    question: "How do I start a project with NF Nexa Tech?",
    answer:
      "Send a WhatsApp message or fill in the project form on the Start Project page. Describe what you want to build and the problem it needs to solve. We will review your requirements and discuss the best approach before providing an estimate. You do not need a technical document to start the conversation.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes. We work with clients internationally and are comfortable communicating in English. If you are outside India, we can arrange video calls at mutually convenient times. Payment can be made via standard bank transfer or international wire transfer.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/software-company-india#service`,
  name: "Software Development Services Across India",
  description:
    "NF Nexa Tech provides software development services — web development, Android app development, Flutter app development, UI/UX design, backend API development, and SaaS MVP development — to businesses across India.",
  url: `${siteConfig.url}/software-company-india`,
  provider: {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    foundingDate: String(siteConfig.foundedYear),
    founder: { "@type": "Person", name: siteConfig.founder },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.streetAddress,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.state,
      postalCode: siteConfig.contact.postalCode,
      addressCountry: siteConfig.contact.countryCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
  },
  areaServed: { "@type": "Country", name: "India" },
  serviceType: "Software Development",
};

export default function SoftwareCompanyIndia() {
  return (
    <LocalSeoPage
      city="India"
      state="Pan-India"
      country="India"
      countryCode="IN"
      service="Software Development"
      slug="software-company-india"
      headline="Software Development Services for Businesses Across India"
      subheadline="NF Nexa Tech is based in Mahipalpur, New Delhi, and works remotely with businesses across India. We build websites, mobile applications, and custom software based on each project's requirements."
      description="Whether you're a business planning a new website, a company looking to build a mobile app, or a founder working on a software product, we can discuss your requirements and help identify a practical development approach. All project work is managed remotely through WhatsApp and video calls — no travel required."
      geo={{ lat: 20.5937, lng: 78.9629 }}
      localFaqs={localFaqs}
      schema={schema}
    />
  );
}
