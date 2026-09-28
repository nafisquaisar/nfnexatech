import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import NestivaHospitalCaseStudyClient from "./NestivaHospitalCaseStudyClient";

/* ── SEO Metadata ───────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Nestiva Hospital Website Case Study | NF Nexa Tech",
  description:
    "See how NF Nexa Tech designed and developed the Nestiva Hospital website to make doctors, departments, appointments, emergency information, and hospital services easier to find.",
  alternates: {
    canonical: `${siteConfig.url}/projects/nestiva-hospital`,
  },
  openGraph: {
    title: "Nestiva Hospital Case Study | NF Nexa Tech",
    description:
      "See how NF Nexa Tech designed and developed the Nestiva Hospital website to make doctors, departments, appointments, emergency information, and hospital services easier to find.",
    url: `${siteConfig.url}/projects/nestiva-hospital`,
    type: "article",
    images: [
      {
        url: `${siteConfig.url}/images/projects/nestiva/nestivahome.png`,
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
      "See how NF Nexa Tech designed and developed the Nestiva Hospital website to make doctors, departments, appointments, emergency information, and hospital services easier to find.",
    images: [`${siteConfig.url}/images/projects/nestiva/nestivahome.png`],
  },
};

/* ── Static case-study data ──────────────────────────────── */
export const nestivaData = {
  slug: "nestiva-hospital",
  title: "Nestiva Hospital",
  headline: "A Clearer, Simpler Way to Find Healthcare Information",
  subtitle:
    "Nestiva is a multi-specialty hospital website designed to help patients find doctors, departments, facilities, and important hospital information without getting lost in too many pages.",
  category: "Healthcare",
  categoryFull: "HEALTHCARE • WEBSITE DESIGN & DEVELOPMENT",
  color: "#0d9488",
  colorRgb: "13,148,136",
  liveUrl: "https://nestivahospital.vercel.app",

  tagline: "Advanced Care, Human Touch",

  meta: [
    { icon: "globe", label: "Platform", value: "Web" },
    { icon: "clock", label: "Timeline", value: "6 Weeks" },
    { icon: "hospital", label: "Industry", value: "Healthcare" },
    { icon: "handshake", label: "Client Type", value: "Healthcare Provider" },
    { icon: "briefcase", label: "Focus", value: "Patient Experience" },
    { icon: "phone", label: "Responsive", value: "Mobile, Tablet, Desktop" },
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
    "Nestiva Hospital needed a website that felt trustworthy while making everyday information easy to find. We organised the experience around the things patients are most likely to look for, such as doctors, departments, facilities, emergency information, and appointments. The result is a clean and responsive website that makes those journeys easier.",

  challenge: {
    heading: "The Challenge",
    body: "A hospital website has to serve different people for different reasons. Someone may be looking for a doctor, another person may want to know about a department, while someone else may need emergency contact information. The challenge was to bring all of this together without making the website difficult to use.",
    points: [
      {
        number: "01",
        title: "Organising a Lot of Information",
        desc: "Doctors, departments, facilities, patient resources, and other information needed to be easy to find without overwhelming visitors.",
      },
      {
        number: "02",
        title: "Building Trust",
        desc: "The design needed to feel professional and reassuring, which is especially important when people are looking for healthcare.",
      },
      {
        number: "03",
        title: "Making Important Actions Easy",
        desc: "Finding doctors, exploring departments, contacting the hospital, and reaching appointment information needed to be straightforward.",
      },
      {
        number: "04",
        title: "Working Across Devices",
        desc: "The website needed to work well on phones, tablets, and desktop screens.",
      },
    ],
  },

  approach: {
    heading: "Our Approach",
    intro:
      "We designed the website around how patients actually look for information, rather than simply putting hospital content into separate pages.",
    points: [
      {
        icon: "compass",
        title: "Easy Navigation",
        desc: "The main healthcare information and actions are kept easy to find throughout the website.",
      },
      {
        icon: "palette",
        title: "Simple Visual Design",
        desc: "Clean layouts, readable typography, and comfortable spacing keep the experience clear and professional.",
      },
      {
        icon: "layout",
        title: "Clear Content Structure",
        desc: "Doctors, departments, facilities, testimonials, FAQs, and health information are organised into clear sections.",
      },
      {
        icon: "target",
        title: "Clear Next Steps",
        desc: "Appointment and contact options are placed where patients are likely to need them.",
      },
    ],
  },

  features: [
    {
      icon: "doctor",
      title: "Find a Doctor",
      desc: "Doctor profiles help visitors find specialists and learn more about the available doctors.",
    },
    {
      icon: "hospital",
      title: "Explore Departments",
      desc: "Visitors can browse the hospital's departments and understand the services available.",
    },
    {
      icon: "calendar",
      title: "Appointments",
      desc: "Appointment actions are easy to find throughout the website.",
    },
    {
      icon: "emergency",
      title: "Emergency Information",
      desc: "Important emergency contact information is kept visible and easy to reach.",
    },
    {
      icon: "chat",
      title: "Patient Testimonials",
      desc: "Patient stories give visitors a better idea of the experience and add a personal touch.",
    },
    {
      icon: "facilities",
      title: "Hospital Facilities",
      desc: "Facility sections give visitors a visual look at the hospital and its infrastructure.",
    },
    {
      icon: "news",
      title: "Health Insights",
      desc: "Health articles provide useful information while giving the website more helpful content to explore.",
    },
    {
      icon: "question",
      title: "FAQs",
      desc: "Common questions are answered in one place so visitors don't have to search through multiple pages.",
    },
    {
      icon: "responsive",
      title: "Responsive Design",
      desc: "The website adapts to desktop, tablet, and mobile screens.",
    },
  ],

  screenshots: [
    {
      src: "/images/projects/nestiva/nestivahome.png",
      label: "Homepage",
      desc: "The main entry point with key hospital information and actions.",
    },
    {
      src: "/images/projects/nestiva/specialist.png",
      label: "Specialists",
      desc: "Doctor profiles with specialities and appointment options.",
    },
    {
      src: "/images/projects/nestiva/doctorpage.png",
      label: "Doctor Page",
      desc: "Individual doctor profile with details and contact information.",
    },
    {
      src: "/images/projects/nestiva/gallery.png",
      label: "Gallery & Facilities",
      desc: "A visual look at the hospital's infrastructure and care environment.",
    },
    {
      src: "/images/projects/nestiva/article.png",
      label: "Health Articles",
      desc: "Health articles with useful information for patients.",
    },
  ],



  uxDecisions: [
    {
      icon: "search",
      title: "Find Care",
      desc: "Make it easier for visitors to find doctors and departments without going through unnecessary pages.",
    },
    {
      icon: "trophy",
      title: "Build Trust",
      desc: "Doctors, facilities, patient stories, and clear hospital information help visitors understand what Nestiva offers.",
    },
    {
      icon: "bolt",
      title: "Keep Things Simple",
      desc: "Appointment, contact, and emergency options are kept easy to reach when they are needed.",
    },
    {
      icon: "book",
      title: "Useful Information",
      desc: "FAQs and health articles help answer common questions before a patient needs to contact the hospital.",
    },
  ],

  results: {
    heading: "The Result",
    body: "The finished website gives Nestiva a clear digital presence where patients can explore services, find doctors and departments, and take the next step without having to work through a complicated interface.",
    outcomes: [
      "Clear and organised hospital information",
      "Easier doctor and department discovery",
      "Easy-to-find appointment options",
      "Quick access to emergency information",
      "Responsive experience across devices",
      "A clean and trustworthy visual design",
      "A structure that can be expanded with new doctors, departments, and health content",
    ],
  },

  techDelivery: {
    heading: "Built to Stay Easy to Maintain",
    body: "The website uses a structured component-based setup so new doctors, departments, and health content can be added without having to rebuild the whole website.",
    points: [
      {
        icon: "responsive",
        title: "Responsive Layout",
        desc: "The layout works across mobile, tablet, and desktop screen sizes.",
      },
      {
        icon: "puzzle",
        title: "Reusable Components",
        desc: "Common sections such as doctor cards, department blocks, and content areas can be reused as the website grows.",
      },
      {
        icon: "search",
        title: "SEO Setup",
        desc: "Page titles, descriptions, and social sharing information are set up to help the website appear correctly in search and social previews.",
      },
      {
        icon: "image",
        title: "Optimised Images",
        desc: "Images are prepared in suitable sizes and formats to keep the website lighter and faster.",
      },
      {
        icon: "accessibility",
        title: "Accessible Structure",
        desc: "Semantic HTML, clear headings, and readable contrast are used throughout the website.",
      },
      {
        icon: "chart",
        title: "Easy to Extend",
        desc: "The structure makes it easier to add new doctors, departments, and health content later.",
      },
    ],
  },
};

/* ── Page (RSC shell) ────────────────────────────────────── */
export default function NestivaHospitalCaseStudyPage() {
  return <NestivaHospitalCaseStudyClient data={nestivaData} />;
}
