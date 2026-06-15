import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import MedonCaseStudyClient from "./MedonCaseStudyClient";

/* ── SEO Metadata ───────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Medon Company — Service Booking Platform Case Study | NF Nexa Tech",
  description:
    "How NF Nexa Tech built a high-performance, SEO-optimized service booking platform for Medon Company using Next.js, Firebase, and WhatsApp lead generation across Delhi NCR.",
  alternates: {
    canonical: `${siteConfig.url}/projects/medon-company`,
  },
  openGraph: {
    title: "Medon Company Case Study | NF Nexa Tech",
    description:
      "Service Booking Platform for Delhi NCR — built with Next.js, Tailwind CSS, Firebase, and SEO-first architecture.",
    url: `${siteConfig.url}/projects/medon-company`,
    type: "article",
    images: [{ url: `${siteConfig.url}/images/projects/medon/home.png`, width: 1200, height: 630 }],
  },
};

/* ── Static data ─────────────────────────────────────────── */
export const medonData = {
  slug: "medon-company",
  title: "Medon Company",
  subtitle: "Service Booking Platform for Mahipalpur Delhi",
  category: "Web Platform",
  color: "#06b6d4",
  colorRgb: "6,182,212",
  liveUrl: "https://medoncompany.in",

  meta: [
    { icon: "🌐", label: "Platform", value: "Web (Next.js)" },
    { icon: "⏱️", label: "Timeline", value: "1 Month" },
    { icon: "🏭", label: "Industry", value: "Home Services & Repair" },
    { icon: "🗺️", label: "Market", value: "Delhi NCR, India" },
    { icon: "💼", label: "Type", value: "Commercial Web Platform" },
    { icon: "📈", label: "Focus", value: "SEO + Lead Generation" },
  ],

  overview:
    "Medon Company is a modern SEO-focused service booking platform built for a Delhi NCR home appliance repair business. The platform provides location-specific landing pages, a WhatsApp-powered lead generation system, a professional gallery, and a service booking flow — all engineered for performance, mobile-first experience, and organic search dominance.",

  challenge: {
    heading: "The Challenge",
    body: "Local service businesses in the home repair sector struggle with three core problems: lack of online trust signals, poor lead capture mechanisms, and near-zero organic search visibility. Medon Company was operating entirely through word-of-mouth with no web presence, losing leads to competitors with even basic websites.",
    points: [
      "Zero organic search visibility in a competitive Delhi NCR market",
      "No structured lead capture system — all inquiries via phone only",
      "No trust-building elements: no gallery, no reviews, no service pages",
      "Losing business to aggregator platforms like Urban Company and Just Dial",
    ],
  },

  solution: {
    heading: "The Solution",
    body: "We built a Next.js-powered platform with an SEO-first architecture targeting hyper-local service queries. WhatsApp was implemented as the primary lead channel with pre-filled messages. Location-specific pages were created for 12+ Delhi NCR neighbourhoods, and a Firebase-powered gallery enables the client to showcase completed work without developer involvement.",
    points: [
      "Next.js App Router with static generation for every service + location page",
      "WhatsApp deep links with pre-filled service context for instant lead capture",
      "12+ neighbourhood landing pages targeting long-tail search queries",
      "Firebase-powered gallery CMS — client updates photos without code",
      "95+ Lighthouse performance score on mobile",
    ],
  },

  features: [
    { icon: "🔍", title: "SEO Optimized", desc: "Structured data markup, meta tags, and hyper-local keyword targeting on every page." },
    { icon: "💬", title: "WhatsApp Integration", desc: "One-tap WhatsApp lead capture with pre-filled service inquiry messages." },
    { icon: "📅", title: "Service Booking", desc: "Multi-step booking inquiry flow with form validation and confirmation." },
    { icon: "🖼️", title: "Gallery Showcase", desc: "Firebase-powered gallery letting the client upload project photos independently." },
    { icon: "📍", title: "Location Pages", desc: "Dedicated landing pages for 12+ Delhi NCR service areas." },
    { icon: "📱", title: "Mobile Responsive", desc: "Mobile-first design achieving 95+ Lighthouse score across all device sizes." },
    { icon: "⚡", title: "Fast Performance", desc: "Static generation + WebP images delivering sub-2-second load times." },
    { icon: "🛠️", title: "Admin Management", desc: "Client-manageable gallery and service listings without developer dependency." },
  ],

  screenshots: [
    { src: "/images/projects/medon/home.png", label: "Home Page", desc: "Hero section with service highlights and primary WhatsApp CTA" },
    { src: "/images/projects/medon/services.png", label: "Services Section", desc: "Service card grid with clear categorization and booking CTAs" },
    { src: "/images/projects/medon/gallery.png", label: "Gallery", desc: "Professional work showcase with Firebase-powered image management" },
  ],

  techStack: [
    { name: "Next.js 14", category: "Frontend Framework", icon: "▲", desc: "App Router with SSG for all service and location pages" },
    { name: "React", category: "UI Library", icon: "⚛️", desc: "Component-driven architecture with hooks" },
    { name: "Tailwind CSS", category: "Styling", icon: "🎨", desc: "Utility-first CSS for rapid, consistent UI development" },
    { name: "Firebase Firestore", category: "Database", icon: "🔥", desc: "Real-time database for gallery content management" },
    { name: "Firebase Storage", category: "Media", icon: "☁️", desc: "Scalable image storage with CDN delivery" },
    { name: "Vercel", category: "Deployment", icon: "▲", desc: "Edge network deployment with automatic CI/CD" },
  ],

  results: [
    { value: "96", suffix: "/100", label: "Lighthouse Score" },
    { value: "50", suffix: "+", label: "Pages Indexed" },
    { value: "100", suffix: "%", label: "Mobile Responsive" },
    { value: "3", suffix: "×", label: "WhatsApp Conversion Rate" },
  ],

  timeline: [
    { phase: "01", title: "Discovery & SEO Research", duration: "Day 1–3", desc: "Keyword research, competitor analysis, and information architecture planning for Mahipalpur Delhi market." },
    { phase: "02", title: "Design & Prototyping", duration: "Day 3–5", desc: "UI/UX design focused on trust, mobile-first experience, and conversion optimization." },
    { phase: "03", title: "Core Platform Build", duration: "Day 5–18", desc: "Next.js app with all service pages, location pages, booking flow, and WhatsApp integration." },
    { phase: "04", title: "Gallery & Firebase CMS", duration: "Day 18–24", desc: "Firebase-powered gallery with client-facing upload system and image optimization pipeline." },
    { phase: "05", title: "SEO & Performance", duration: "Day 24–28", desc: "Schema markup, sitemap, meta tags, image optimization, and Lighthouse auditing to 95+ score." },
    { phase: "06", title: "Launch & Handover", duration: "Day 28–30", desc: "Production deployment on Vercel, domain configuration, Google Search Console setup, and client training." },
  ],
};

/* ── Page (RSC shell) ────────────────────────────────────── */
export default function MedonCaseStudyPage() {
  return <MedonCaseStudyClient data={medonData} />;
}
