import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import NestivaHospitalCaseStudyClient from "./NestivaHospitalCaseStudyClient";

/* ── SEO Metadata ───────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "Nestiva Hospital Website Case Study | Healthcare Web Development | NF Nexa Tech",
  description:
    "Explore how NF Nexa Tech designed and developed Nestiva Hospital's modern healthcare website with doctor discovery, departments, appointment journeys, emergency access, patient resources and responsive UX.",
  alternates: {
    canonical: `${siteConfig.url}/projects/nestiva-hospital`,
  },
  openGraph: {
    title: "Nestiva Hospital Case Study | NF Nexa Tech",
    description:
      "How NF Nexa Tech built a patient-first healthcare website for Nestiva Hospital — doctor discovery, departments, appointments, emergency access and a fully responsive experience.",
    url: `${siteConfig.url}/projects/nestiva-hospital`,
    type: "article",
    images: [
      {
        url: `${siteConfig.url}/images/projects/nestiva/nestiva-hospital-hero.png`,
        width: 1200,
        height: 630,
        alt: "Nestiva Hospital website homepage designed by NF Nexa Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nestiva Hospital Case Study | NF Nexa Tech",
    description:
      "Explore how NF Nexa Tech designed and developed Nestiva Hospital's modern healthcare website.",
    images: [`${siteConfig.url}/images/projects/nestiva/nestiva-hospital-hero.png`],
  },
};

/* ── Static case-study data ──────────────────────────────── */
export const nestivaData = {
  slug: "nestiva-hospital",
  title: "Nestiva Hospital",
  headline: "Designing a Digital Healthcare Experience Built Around Patients",
  subtitle:
    "Nestiva is a modern multi-specialty hospital website designed to make healthcare information easier to discover and important patient actions easier to complete.",
  category: "Healthcare",
  categoryFull: "HEALTHCARE • WEBSITE DESIGN & DEVELOPMENT",
  color: "#0d9488",
  colorRgb: "13,148,136",
  liveUrl: "https://nestivahospital.vercel.app",

  tagline: "Advanced Care, Human Touch",

  meta: [
    { icon: "🌐", label: "Platform", value: "Web" },
    { icon: "⏱️", label: "Timeline", value: "6 Weeks" },
    { icon: "🏥", label: "Industry", value: "Healthcare" },
    { icon: "🤝", label: "Client Type", value: "Healthcare Provider" },
    { icon: "💼", label: "Focus", value: "Patient Experience" },
    { icon: "📱", label: "Responsive", value: "Mobile, Tablet, Desktop" },
  ],

  services: [
    "UI/UX Design",
    "Website Development",
    "Responsive Development",
    "Healthcare Website Design",
    "Appointment Journey Design",
    "SEO-Friendly Architecture",
    "Performance Optimization",
  ],

  overview:
    "Nestiva Hospital needed a modern digital presence capable of communicating trust while helping patients quickly reach the information that matters most. The website was structured around common healthcare journeys — discovering specialists, exploring departments, understanding hospital facilities, accessing emergency information and moving toward appointment booking. NF Nexa Tech created a clean, responsive and patient-focused experience that balances healthcare credibility with modern digital design.",

  challenge: {
    heading: "The Challenge",
    body: "Healthcare websites serve users with very different intentions. Some visitors may be researching a specialist, others may be comparing departments, and some may need urgent contact information. The challenge was to organise a large amount of healthcare information without making the experience feel complicated.",
    points: [
      {
        number: "01",
        title: "Complex Information Architecture",
        desc: "Doctors, departments, facilities, patient resources and healthcare content needed clear organisation without overwhelming visitors.",
      },
      {
        number: "02",
        title: "Trust & Credibility",
        desc: "The visual experience needed to communicate professionalism and confidence appropriate for healthcare.",
      },
      {
        number: "03",
        title: "Fast Patient Navigation",
        desc: "Important actions such as finding doctors, viewing departments and reaching appointment or emergency information needed to be easy to locate.",
      },
      {
        number: "04",
        title: "Responsive Experience",
        desc: "The experience needed to remain clear and usable across desktop, tablet and mobile screens.",
      },
    ],
  },

  approach: {
    heading: "Our Approach",
    intro:
      "We approached Nestiva as a patient journey rather than simply a collection of hospital pages.",
    points: [
      {
        icon: "🧭",
        title: "Patient-First UX",
        desc: "Important healthcare journeys are surfaced through clear navigation and strong calls to action.",
      },
      {
        icon: "🎨",
        title: "Healthcare-Focused UI",
        desc: "A clean visual system, readable typography, generous spacing and healthcare-oriented design establish a professional experience.",
      },
      {
        icon: "🗂️",
        title: "Structured Content",
        desc: "Doctors, departments, facilities, testimonials, FAQs and health resources are separated into easily understandable sections.",
      },
      {
        icon: "🎯",
        title: "Conversion-Focused Journeys",
        desc: "Appointment and contact actions are placed throughout the experience so visitors always have a clear next step.",
      },
    ],
  },

  features: [
    {
      icon: "👨‍⚕️",
      title: "Doctor Discovery",
      desc: "Specialist cards and doctor information help visitors identify relevant medical professionals.",
    },
    {
      icon: "🏥",
      title: "Department Discovery",
      desc: "Dedicated department presentation helps patients understand available specialties.",
    },
    {
      icon: "📅",
      title: "Appointment Journey",
      desc: "Prominent appointment CTAs make the next step clear throughout the website.",
    },
    {
      icon: "🚨",
      title: "24/7 Emergency Information",
      desc: "Emergency contact information is visually prioritised for quick access.",
    },
    {
      icon: "💬",
      title: "Patient Testimonials",
      desc: "Patient stories add social proof and human context to the hospital experience.",
    },
    {
      icon: "🏗️",
      title: "Hospital Facilities Showcase",
      desc: "Facility visuals help communicate the hospital environment and infrastructure.",
    },
    {
      icon: "📰",
      title: "Health Insights / Blog",
      desc: "Educational healthcare content supports patient awareness and organic content discovery.",
    },
    {
      icon: "❓",
      title: "FAQ Section",
      desc: "Common patient questions can be answered without making users search through multiple pages.",
    },
    {
      icon: "📱",
      title: "Responsive Experience",
      desc: "Layout and interactions work smoothly across desktop, tablet and mobile screen sizes.",
    },
  ],

  screenshots: [
    {
      src: "/images/projects/nestiva/nestiva-hospital-hero.png",
      label: "Homepage / Hero",
      desc: "Primary entry point establishing trust and surfacing the most important patient actions.",
      position: "right",
    },
    {
      src: "/images/projects/nestiva/nestiva-departments.png",
      label: "Hospital Achievements & Departments",
      desc: "Trust statistics and department discovery for patients researching available specialties.",
      position: "left",
    },
    {
      src: "/images/projects/nestiva/nestiva-doctors.png",
      label: "Doctors",
      desc: "Specialist discovery with doctor cards, filters and direct appointment pathways.",
      position: "right",
    },
    {
      src: "/images/projects/nestiva/nestiva-why-choose.png",
      label: "Why Choose Nestiva",
      desc: "Trust-building section communicating the hospital's core strengths to prospective patients.",
      position: "left",
    },
    {
      src: "/images/projects/nestiva/nestiva-patient-testimonials.png",
      label: "Patient Testimonials",
      desc: "Social proof from patients adding human context and building confidence.",
      position: "right",
    },
    {
      src: "/images/projects/nestiva/nestiva-facilities.png",
      label: "Facilities",
      desc: "Visual showcase communicating the hospital's infrastructure and care environment.",
      position: "left",
    },
    {
      src: "/images/projects/nestiva/nestiva-health-insights.png",
      label: "Health Insights",
      desc: "Educational content supporting patient awareness and organic search discovery.",
      position: "right",
    },
    {
      src: "/images/projects/nestiva/nestiva-faq-cta.png",
      label: "FAQ / Appointment CTA / Footer",
      desc: "Final conversion layer — common questions answered and appointment action reinforced.",
      position: "left",
    },
  ],

  uxDecisions: [
    {
      icon: "🔍",
      title: "Find Care",
      desc: "Help visitors discover departments and specialists quickly without unnecessary navigation.",
    },
    {
      icon: "🏆",
      title: "Build Confidence",
      desc: "Use doctors, facilities, patient stories and structured hospital information to reinforce credibility.",
    },
    {
      icon: "⚡",
      title: "Reduce Friction",
      desc: "Keep appointment, contact and emergency actions easy to find at every scroll depth.",
    },
    {
      icon: "📚",
      title: "Educate",
      desc: "Use FAQs and health articles to answer common questions and provide useful information to patients.",
    },
  ],

  results: {
    heading: "The Result",
    body: "The final experience gives Nestiva a structured digital presence where patients can move from discovering healthcare services to identifying specialists and taking the next step toward care without unnecessary complexity.",
    outcomes: [
      "Clear healthcare information architecture",
      "Stronger doctor and department discovery",
      "Prominent appointment pathways",
      "Visible emergency access",
      "Responsive patient experience across all devices",
      "Trust-focused visual design",
      "Scalable structure for additional doctors, departments and health content",
    ],
  },

  techDelivery: {
    heading: "Built for Performance and Growth",
    body: "The website was built with a component-driven, SEO-friendly architecture designed to scale as the hospital grows — adding new doctors, departments and health content without reworking the underlying structure.",
    points: [
      {
        icon: "📱",
        title: "Responsive Architecture",
        desc: "Layout and components tested across mobile, tablet and desktop breakpoints for a consistent patient experience.",
      },
      {
        icon: "🧩",
        title: "Reusable Components",
        desc: "Doctor cards, department blocks and content sections are built as reusable components for easy expansion.",
      },
      {
        icon: "🔍",
        title: "SEO Metadata",
        desc: "Page-level meta titles, descriptions and Open Graph tags implemented for search and social discoverability.",
      },
      {
        icon: "🖼️",
        title: "Image Optimization",
        desc: "All images processed for appropriate formats and sizes to minimise page weight and improve load performance.",
      },
      {
        icon: "♿",
        title: "Accessible Markup",
        desc: "Semantic HTML with appropriate heading hierarchy and sufficient colour contrast throughout.",
      },
      {
        icon: "📈",
        title: "Scalable Data Structure",
        desc: "Doctor profiles, department pages and health content are structured for easy addition of new entries.",
      },
    ],
  },
};

/* ── Page (RSC shell) ────────────────────────────────────── */
export default function NestivaHospitalCaseStudyPage() {
  return <NestivaHospitalCaseStudyClient data={nestivaData} />;
}
