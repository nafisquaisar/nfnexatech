import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import MadzaCaseStudyClient from "./MadzaCaseStudyClient";

/* ── SEO Metadata ───────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Madza Company Website Case Study | Home Services Platform | NF Nexa Tech",
  description:
    "See how NF Nexa Tech built the Madza Company website for home services including invisible grills, AC repair, refrigerator service, washing machine repair, electrical work, plumbing, and more.",
  alternates: {
    canonical: `${siteConfig.url}/projects/madza-company`,
  },
  openGraph: {
    title: "Madza Company Website Case Study | NF Nexa Tech",
    description:
      "A look at the website built for Madza, a home services platform covering repairs, installations, and maintenance across multiple cities.",
    url: `${siteConfig.url}/projects/madza-company`,
    type: "article",
    images: [
      {
        url: `${siteConfig.url}/images/projects/madzacompany/home.png`,
        width: 1200,
        height: 630,
        alt: "Madza Company home services website",
      },
    ],
  },
};

/* ── Static case-study data ──────────────────────────────── */
export const madzaData = {
  slug: "madza-company",
  title: "Madza Company",
  subtitle: "A Home Services Platform for Everyday Repairs & Installations",
  category: "Home Services",
  color: "#06b6d4",
  colorRgb: "6,182,212",
  liveUrl: "https://madzacompany.in",

  meta: [
    { icon: "globe", label: "Platform", value: "Web" },
    { icon: "home", label: "Industry", value: "Home Services" },
    { icon: "map-pin", label: "Locations", value: "Mumbai, Bihar, Kolkata & Hyderabad" },
    { icon: "wrench", label: "Services", value: "Repairs, Installation & Maintenance" },
    { icon: "calendar", label: "Booking", value: "Online + WhatsApp" },
    { icon: "briefcase", label: "Type", value: "Service Platform" },
  ],

  overview:
    "Madza is a home services platform that helps people find and book everyday repair, installation, and maintenance services. The website brings different services into one place, from invisible grills and mosquito mesh to AC, refrigerator, washing machine, geyser, electrical, plumbing, and more.",

  challenge: {
    heading: "The Challenge",
    body: "Madza offers several different home services, so the website needed to make a wide range of services easy to understand and easy to book. Customers should be able to find the service they need, check whether it is available in their city, and contact the team without going through a complicated process.",
    points: [
      "Present different home services in one clear structure",
      "Make services such as invisible grills and appliance repair easy to find",
      "Help customers find services available in their city",
      "Give customers simple ways to book or contact the team",
      "Make the website useful on phones as well as desktop screens",
    ],
  },

  approach: {
    heading: "Our Approach",
    body: "We organised the website around services and locations. Each service has its own page, while city pages show the services available in that area. Booking, phone, and WhatsApp options are kept close to the main service information so customers can take the next step without searching for contact details.",
    points: [
      "Separate pages for individual services",
      "Location-based service pages for different cities",
      "Online booking with direct WhatsApp and call options",
      "Clear service descriptions with simple information",
      "A responsive layout designed around mobile users",
      "A structure that can support more services and locations later",
    ],
  },

  features: [
    { icon: "shield", title: "Invisible Grill", desc: "Installation for balconies and windows, with dedicated service information." },
    { icon: "bug", title: "Pleated Mosquito Mesh", desc: "Space-saving window mesh designed to help keep insects out." },
    { icon: "snowflake", title: "AC Repair & Service", desc: "AC installation, repair, gas refilling, cleaning, and maintenance." },
    { icon: "fridge", title: "Refrigerator Service", desc: "Help with cooling issues, compressor repair, gas charging, and related work." },
    { icon: "washing", title: "Washing Machine Service", desc: "Repair and maintenance for top-load, front-load, and semi-automatic machines." },
    { icon: "shower", title: "Geyser Service", desc: "Geyser repair, installation, cleaning, and maintenance." },
    { icon: "bolt", title: "Electrical Services", desc: "Home electrical work including wiring, lights, fans, switches, and MCBs." },
    { icon: "wrench", title: "Plumbing Services", desc: "Plumbing work including leak repair, pipe fitting, and bathroom fitting." },
    { icon: "building", title: "Electrical Contracting", desc: "Building electrical work including wiring, panels, conduit, earthing, and commissioning." },
    { icon: "map-pin", title: "Location-Based Services", desc: "Customers can choose their city and see the services available in their area." },
    { icon: "calendar", title: "Service Booking", desc: "Customers can choose a service and send a booking request online." },
    { icon: "chat", title: "WhatsApp & Call", desc: "Quick contact options make it easy to ask questions or request a service." },
  ],

  screenshots: [
    { src: "/images/projects/madzacompany/home.png", label: "Home Page", desc: "The homepage introduces Madza and gives customers quick access to services, locations, and booking." },
    { src: "/images/projects/madzacompany/service.png", label: "Services", desc: "A simple service layout helps visitors find the type of home service they need." },
    { src: "/images/projects/madzacompany/servicearea.png", label: "Service Locations", desc: "Location pages help customers find services available in their city." },
    { src: "/images/projects/madzacompany/work.png", label: "Work Showcase", desc: "Examples of different types of work completed by Madza." },
  ],

  techStack: [
    { name: "Next.js", category: "Web Framework", icon: "code", desc: "Used to build the website, service pages, and location-based pages." },
    { name: "React", category: "UI", icon: "component", desc: "Used to build reusable components across the website." },
    { name: "Tailwind CSS", category: "Styling", icon: "palette", desc: "Used for the responsive layouts and visual styling." },
    { name: "Firebase", category: "Backend", icon: "fire", desc: "Used where dynamic website data and service content need to be managed." },
    { name: "Vercel", category: "Deployment", icon: "deploy", desc: "Used to deploy and host the web platform." },
  ],

  results: [
    { value: "9+", suffix: "", label: "Service Categories" },
    { value: "4", suffix: "", label: "Service Locations" },
    { value: "1", suffix: "", label: "Place to Explore & Book" },
    { value: "24/7", suffix: "", label: "Online Booking Access" },
  ],

  timeline: [
    { phase: "01", title: "Understanding the Services", desc: "We looked at the different services Madza provides and how customers would normally search for them." },
    { phase: "02", title: "Planning the Structure", desc: "Services, locations, booking paths, and supporting pages were organised into a simple website structure." },
    { phase: "03", title: "Design & Development", desc: "We built the main website, service pages, location pages, booking flow, and responsive layouts." },
    { phase: "04", title: "Service & Location Content", desc: "Individual service information and location-based content were added so visitors could find what they needed more easily." },
    { phase: "05", title: "Testing & Launch", desc: "The website, booking flow, contact options, and responsive layouts were tested before launch." },
  ],
};

/* ── Page ─────────────────────────────────────────────────── */
export default function MadzaCaseStudyPage() {
  return <MadzaCaseStudyClient data={madzaData} />;
}
