import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import MedonCaseStudyClient from "./MedonCaseStudyClient";

/* ── SEO Metadata ───────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Medon Company Case Study | Appliance Repair Website | NF Nexa Tech",
  description:
    "See how NF Nexa Tech built the Medon Company website for AC, appliance, electrical, and home repair services across Mahipalpur and Delhi NCR.",
  alternates: {
    canonical: `${siteConfig.url}/projects/medon-company`,
  },
  openGraph: {
    title: "Medon Company Website Case Study | NF Nexa Tech",
    description:
      "A look at how NF Nexa Tech designed and developed Medon Company's service booking website for customers across Delhi NCR.",
    url: `${siteConfig.url}/projects/medon-company`,
    type: "article",
    images: [
      {
        url: `${siteConfig.url}/images/projects/medon/home.png`,
        width: 1200,
        height: 630,
        alt: "Medon Company website designed and developed by NF Nexa Tech",
      },
    ],
  },
};

/* ── Static case-study data ──────────────────────────────── */
export const medonData = {
  slug: "medon-company",
  title: "Medon Company",
  subtitle: "A Service Booking Website for Home & Appliance Repair",
  category: "Web Platform",
  color: "#06b6d4",
  colorRgb: "6,182,212",
  liveUrl: "https://medoncompany.in",

  meta: [
    { icon: "globe", label: "Platform", value: "Web" },
    { icon: "clock", label: "Timeline", value: "1 Month" },
    { icon: "home", label: "Industry", value: "Home & Appliance Services" },
    { icon: "map-pin", label: "Location", value: "Delhi NCR" },
    { icon: "briefcase", label: "Type", value: "Service Booking Platform" },
    { icon: "phone", label: "Focus", value: "Booking & Local Search" },
  ],

  overview:
    "Medon Company is a service booking website built for a local appliance repair business in Mahipalpur, New Delhi. The website helps customers find the right service, explore nearby service areas, and get in touch with Medon through booking, phone, and WhatsApp. It also gives the business a clear place to showcase its services, work, and customer information.",

  challenge: {
    heading: "The Challenge",
    body: "The main challenge was to make it easier for local customers to find Medon, understand the services available, and contact the team when they needed help. A repair business also needs to build trust quickly, especially when customers are inviting a technician into their home or workplace.",
    points: [
      "Customers needed a simple way to find the right repair service",
      "The business needed a stronger online presence for local searches",
      "Services and pricing information needed to be easy to understand",
      "Customers needed quick ways to call, message, or book a service",
      "The website needed to cover multiple services and nearby locations",
    ],
  },

  approach: {
    heading: "Our Approach",
    body: "We built a responsive website that brings Medon's services, locations, booking options, and business information together in one place. The experience keeps the main actions close at hand, while dedicated service and location pages make it easier for customers to find relevant information.",
    points: [
      "A clear service structure for AC, refrigerator, washing machine, geyser, microwave, and electrical services",
      "Online booking with direct call and WhatsApp options",
      "Location-specific pages for areas around Mahipalpur and Delhi NCR",
      "Service pages with repair details, pricing, and common questions",
      "A work gallery to show completed repair and service work",
      "A responsive experience designed for customers using their phones",
    ],
  },

  features: [
    { icon: "wrench", title: "Service Listings", desc: "Customers can browse AC, refrigerator, washing machine, geyser, microwave, and electrical services." },
    { icon: "calendar", title: "Service Booking", desc: "Customers can choose a service and send a booking request without having to search for contact details." },
    { icon: "chat", title: "WhatsApp & Call", desc: "Quick contact options make it easy to ask about a repair or request a service." },
    { icon: "map-pin", title: "Local Service Areas", desc: "Dedicated pages help customers find services available in their area." },
    { icon: "currency", title: "Clear Pricing", desc: "Service pages show starting prices and explain that the final cost can depend on the appliance and repair." },
    { icon: "image", title: "Work Gallery", desc: "A visual gallery gives customers a look at the repair and service work completed by Medon." },
    { icon: "star", title: "Customer Reviews", desc: "Customer feedback adds useful context for people considering a service." },
    { icon: "responsive", title: "Mobile Friendly", desc: "The website is designed to work comfortably across phones, tablets, and desktop screens." },
  ],

  screenshots: [
    { src: "/images/projects/medon/home.png", label: "Home Page", desc: "The main page introduces Medon's services and gives customers quick ways to book or get in touch." },
    { src: "/images/projects/medon/services.png", label: "Services", desc: "A simple service layout helps visitors find the type of repair or installation they need." },
    { src: "/images/projects/medon/gallery.png", label: "Work Gallery", desc: "A collection of completed work that gives visitors a better idea of the services Medon provides." },
  ],

  techStack: [
    { name: "Next.js", category: "Web Framework", icon: "code", desc: "Used to build the website and its service and location pages." },
    { name: "React", category: "UI", icon: "component", desc: "Used to build reusable interface components across the website." },
    { name: "Tailwind CSS", category: "Styling", icon: "palette", desc: "Used for the responsive layouts and visual styling." },
    { name: "Firebase Firestore", category: "Database", icon: "fire", desc: "Used to store and manage website content where needed." },
    { name: "Firebase Storage", category: "Media", icon: "cloud", desc: "Used for storing and serving uploaded images." },
    { name: "Vercel", category: "Deployment", icon: "deploy", desc: "Used to deploy and host the Next.js website." },
  ],

  results: [
    { value: "13+", suffix: "", label: "Service Areas" },
    { value: "6+", suffix: "", label: "Service Categories" },
    { value: "24/7", suffix: "", label: "Service Availability" },
    { value: "1", suffix: "", label: "Place to Book & Contact" },
  ],

  timeline: [
    { phase: "01", title: "Understanding the Business", desc: "We looked at the services Medon provides, the customers they serve, and the areas they cover." },
    { phase: "02", title: "Planning the Website", desc: "The main pages, service structure, location pages, and booking paths were planned around customer needs." },
    { phase: "03", title: "Design & Development", desc: "We built the main website, service pages, location pages, contact flows, and responsive layouts." },
    { phase: "04", title: "Content & Local Pages", desc: "Service information, local area content, FAQs, and supporting pages were added to make the website useful for customers and search." },
    { phase: "05", title: "Testing & Launch", desc: "The website was tested across screen sizes, forms and contact flows before being deployed." },
  ],
};

/* ── Page ─────────────────────────────────────────────────── */
export default function MedonCaseStudyPage() {
  return <MedonCaseStudyClient data={medonData} />;
}
