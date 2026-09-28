"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────────────────────────
   SVG ICONS
───────────────────────────────────────────────────────────── */
function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FlutterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.9 2.01 3.9 12l3.09 3.09 2.71-2.7L13.9 2.01zm.01 10.6-4.93 4.93 4.93 4.95h6.19l-4.93-4.95 4.93-4.93h-6.19z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   CATEGORY TABS
───────────────────────────────────────────────────────────── */
const CATEGORIES = [
  { id: "all",     label: "All" },
  { id: "app",     label: "App" },
  { id: "flutter", label: "Flutter" },
  { id: "website", label: "Website" },
];

/* ─────────────────────────────────────────────────────────────
   PROJECT DATA  (single source of truth)
   categories: array — a project can appear in multiple tabs
───────────────────────────────────────────────────────────── */
interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  color: string;
  tech: string[];
  categories: string[];   // e.g. ["app","flutter"]
  featured: boolean;
  liveUrl?: string;
}

const ALL_PROJECTS: Project[] = [
  /* ── FEATURED ──────────────────────────────────────────── */
  {
    slug: "invoicelelo",
    title: "InvoiceLelo — Website",
    subtitle: "Billing & invoicing platform for businesses",
    description:
      "InvoiceLelo is a billing and invoicing platform that handles invoice creation, customer management, bill history, business verification, and payment workflows. Built for businesses that need to manage their billing without spreadsheets.",
    heroImage: "/images/projects/invoicelelo/home.png",
    imageAlt: "InvoiceLelo billing platform dashboard",
    imageFit: "cover",
    color: "#1FA0B1",
    tech: ["Next.js", "Tailwind CSS", "Firebase", "Razorpay"],
    categories: ["website"],
    featured: true,
  },

  /* ── APP (in order) ─────────────────────────────────────── */
  {
    slug: "popular-bread",
    title: "Popular Bread",
    subtitle: "Business management app for a bread business",
    description:
      "Built for a bread business to manage daily operations — purchases, purchase slips, stock, sales, customers, capital, and wastage. Also shows daily and monthly business analysis in one place.",
    heroImage: "/images/projects/popular/popular_preview.png",
    imageAlt: "Popular Bread business management app screenshot",
    imageFit: "contain",
    color: "#f97316",
    tech: ["Flutter", "Firebase", "Hive", "Cloud Storage"],
    categories: ["app", "flutter"],
    featured: false,
  },
  {
    slug: "kharcha-plus",
    title: "Kharcha Plus",
    subtitle: "Expense and utility tracking app",
    description:
      "Kharcha Plus is an expense management app for tracking daily expenses, electricity bills, water usage and bills, drinking water, and food or mess expenses — all in one place.",
    heroImage: "/images/projects/kharchaplus/kharchaplus_preview.png",
    imageAlt: "Kharcha Plus expense management app screenshot",
    imageFit: "contain",
    color: "#0f9f9a",
    tech: ["Flutter", "Riverpod", "Isar", "Firebase"],
    categories: ["app", "flutter"],
    featured: false,
  },
  {
    slug: "invoicelelo-app",
    title: "InvoiceLelo — App",
    subtitle: "Mobile invoicing app",
    description:
      "The mobile version of InvoiceLelo. Create invoices, manage customer records, and handle payment-related information from your phone.",
    heroImage: "/images/projects/invoicelelo/app.png",
    imageAlt: "InvoiceLelo mobile invoicing app screenshot",
    imageFit: "contain",
    color: "#1FA0B1",
    tech: ["Flutter", "Firebase", "Razorpay", "PDF Gen"],
    categories: ["app", "flutter"],
    featured: false,
  },
  {
    slug: "tunelyf",
    title: "TuneLyf",
    subtitle: "Music player app for Android",
    description:
      "TuneLyf plays both online music and songs saved on your device. It supports song search, favorites, playlists, recently played, artist browsing, and background playback with notifications.",
    heroImage: "/images/projects/tunelyf/tunelyf_preview.png",
    imageAlt: "TuneLyf music player app screenshot",
    imageFit: "contain",
    color: "#8b5cf6",
    tech: ["Android", "Audius API", "ExoPlayer", "Firebase"],
    categories: ["app"],
    featured: false,
  },
  {
    slug: "organizer-classes",
    title: "Organizer Classes",
    subtitle: "Online learning platform for students",
    description:
      "An online learning platform where students can buy courses, watch video classes, read handwritten notes, take practice tests, browse subject and class-wise content, and view previous-year questions.",
    heroImage: "/images/projects/organizer/organizer_preview.png",
    imageAlt: "Organizer Classes online learning platform screenshot",
    imageFit: "contain",
    color: "#f97316",
    tech: ["Android", "Razorpay", "Video Streaming", "Firebase"],
    categories: ["app"],
    featured: false,
  },
  {
    slug: "small-steps",
    title: "Small Steps",
    subtitle: "Notes and checklist app",
    description:
      "A simple notes and checklist app. Users can write notes, add checklist items under any title, manage tasks, and lock their notes with biometric authentication.",
    heroImage: "/images/projects/smallstep/smallstep_preview.png",
    imageAlt: "Small Steps notes and checklist app screenshot",
    imageFit: "contain",
    color: "#14b8a6",
    tech: ["Android", "Local Storage", "Biometric Auth"],
    categories: ["app"],
    featured: false,
  },

  /* ── WEBSITE (in order) ────────────────────────────────── */
  {
    slug: "medon-company",
    title: "Medon Company",
    subtitle: "AC and appliance repair service website",
    description:
      "A service website for Medon Company. Customers can explore available repair services, check service areas, view past work, and contact or book a visit.",
    heroImage: "/images/projects/medon/home.png",
    imageAlt: "Medon Company AC repair service website",
    imageFit: "cover",
    color: "#06b6d4",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    categories: ["website"],
    featured: false,
  },
  {
    slug: "madza-company",
    title: "Madza Company",
    subtitle: "Home services website",
    description:
      "A home services website covering AC repair, refrigerator and washing machine servicing, geyser repair, invisible grill installation, electrical, plumbing, and related services across its locations.",
    heroImage: "/images/projects/madzacompany/home.png",
    imageAlt: "Madza Company home services website",
    imageFit: "cover",
    color: "#06b6d4",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    categories: ["website"],
    featured: false,
  },
  {
    slug: "nestiva-hospital",
    title: "Nestiva Hospital",
    subtitle: "Hospital website",
    description:
      "A hospital website that helps patients find doctors, explore departments, check available services, access emergency information, and understand how to book an appointment.",
    heroImage: "/images/projects/nestiva/nestivahome.png",
    imageAlt: "Nestiva Hospital website homepage",
    imageFit: "cover",
    color: "#0d9488",
    tech: ["Next.js", "React", "Tailwind CSS"],
    categories: ["website"],
    featured: false,
    liveUrl: "https://nestivahospital.vercel.app/",
  },
  {
    slug: "train-your-tech",
    title: "Train Your Tech",
    subtitle: "Placement preparation platform",
    description:
      "Train Your Tech is a placement preparation platform with student and admin login. Students get access to courses, resume analysis, interview practice, tests, and job listings. Admins can manage platform content.",
    heroImage: "/images/projects/trainyourtech/landing.png",
    imageAlt: "Train Your Tech placement preparation platform",
    imageFit: "cover",
    color: "#a855f7",
    tech: ["React", "Spring Boot", "MySQL", "Firebase"],
    categories: ["website"],
    featured: false,
  },
];

/* ─────────────────────────────────────────────────────────────
   CATEGORY META (badge colours + icon)
───────────────────────────────────────────────────────────── */
const CAT_STYLE: Record<string, { Icon: React.FC<{className?: string}>; bg: string; text: string; border: string; label: string }> = {
  website: { Icon: GlobeIcon,   bg: "rgba(31,160,177,0.1)",  text: "#1FA0B1",  border: "rgba(31,160,177,0.25)",  label: "Website" },
  app:     { Icon: PhoneIcon,   bg: "rgba(232,118,58,0.1)",  text: "#E8763A",  border: "rgba(232,118,58,0.25)",  label: "App" },
  flutter: { Icon: FlutterIcon, bg: "rgba(68,138,255,0.1)",  text: "#4488FF",  border: "rgba(68,138,255,0.25)",  label: "Flutter" },
};

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const featuredProjects = ALL_PROJECTS.filter((p) => p.featured);

  /* For "All" tab — deduplicate (show each project once, first occurrence) */
  const seen = new Set<string>();
  const allTabProjects = ALL_PROJECTS.filter((p) => {
    if (p.featured) return false;
    if (seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  });

  const visibleOther =
    activeCategory === "all"
      ? allTabProjects
      : ALL_PROJECTS.filter((p) => !p.featured && p.categories.includes(activeCategory));

  /* Primary display category (first in array) for badge */
  function primaryCat(p: Project) {
    return p.categories[0] ?? "website";
  }

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#FAF7F5", color: "#1a1a1a" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <header
        className="relative overflow-hidden pb-16 pt-36"
        style={{ background: "linear-gradient(135deg, #F0F7FF 0%, #FAF7F5 50%, #FFF4ED 100%)" }}
      >
        <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-[120px]" style={{ backgroundColor: "rgba(31,160,177,0.12)" }} />
        <div aria-hidden className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full blur-[100px]" style={{ backgroundColor: "rgba(232,118,58,0.08)" }} />
        <div aria-hidden className="pointer-events-none absolute top-10 right-10 grid grid-cols-6 gap-[8px] opacity-[0.18]">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="h-[5px] w-[5px] rounded-full bg-[#1FA0B1]" />
          ))}
        </div>

        <div className="relative mx-auto w-[92%] max-w-5xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1FA0B1]/30 bg-[#B5E5EB]/15 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#1FA0B1]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1FA0B1]" />
            Our Work
          </div>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-[56px]" style={{ color: "#1a1a1a" }}>
            Projects &amp;{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #1FA0B1 0%, #E8763A 100%)" }}
            >
              Case Studies
            </span>
          </h1>
          <p className="max-w-2xl text-[15px] leading-relaxed" style={{ color: "#6B5A5A" }}>
            Some of the websites, mobile apps, and business software we&apos;ve worked on. A mix of
            client work and internal products across different industries.
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-8">
            {[
              { n: "70+", label: "Projects Delivered" },
              { n: "3+",   label: "Years Building" },
              { n: "100%", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-2xl font-extrabold" style={{ color: "#1FA0B1" }}>{s.n}</span>
                <span className="text-[12px] font-medium" style={{ color: "#9B8B8B" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto w-[92%] max-w-6xl pb-28 pt-12">

        {/* ── FEATURED ─────────────────────────────────────── */}
        {featuredProjects.length > 0 && (
          <section className="mb-20">
            <SectionDivider label="Featured Project" />
            <div className="grid gap-8">
              {featuredProjects.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <ProjectCard project={p} featured primaryCat={primaryCat(p)} />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ── ALL PROJECTS ─────────────────────────────────── */}
        <section>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="h-px w-8" style={{ backgroundColor: "#1FA0B1" }} />
              <h2 className="text-xl font-bold" style={{ color: "#1a1a1a" }}>All Projects</h2>
            </div>

            {/* Category filter pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const cs = CAT_STYLE[cat.id];
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest transition-all duration-200"
                    style={
                      activeCategory === cat.id
                        ? { borderColor: "#1FA0B1", backgroundColor: "rgba(181,229,235,0.2)", color: "#1FA0B1" }
                        : { borderColor: "rgba(198,209,215,0.5)", backgroundColor: "white", color: "#6B5A5A" }
                    }
                  >
                    {cs && <cs.Icon className="h-3 w-3 flex-shrink-0" />}
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Count */}
          <p className="mb-6 text-[12px]" style={{ color: "#9B8B8B" }}>
            {visibleOther.length} project{visibleOther.length !== 1 ? "s" : ""}
            {activeCategory !== "all" && ` · ${CATEGORIES.find((c) => c.id === activeCategory)?.label}`}
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {visibleOther.map((p) => (
                <ProjectCard key={`${activeCategory}-${p.slug}`} project={p} featured={false} primaryCat={primaryCat(p)} />
              ))}
            </motion.div>
          </AnimatePresence>

          {visibleOther.length === 0 && (
            <div className="flex flex-col items-center justify-center rounded-2xl border py-20 text-center" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "rgba(255,255,255,0.6)" }}>
              <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>No projects in this category yet</p>
              <p className="mt-1 text-sm" style={{ color: "#9B8B8B" }}>More coming soon!</p>
              <button
                onClick={() => setActiveCategory("all")}
                className="mt-5 rounded-full border px-5 py-2 text-xs font-semibold transition-colors hover:text-[#1FA0B1]"
                style={{ borderColor: "rgba(198,209,215,0.5)", color: "#6B5A5A" }}
              >
                Show all
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION DIVIDER
───────────────────────────────────────────────────────────── */
function SectionDivider({ label }: { label: string }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className="h-px flex-1" style={{ backgroundColor: "rgba(31,160,177,0.2)" }} />
      <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "#1FA0B1" }}>{label}</span>
      <span className="h-px flex-1" style={{ backgroundColor: "rgba(31,160,177,0.2)" }} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────────────────────── */
function ProjectCard({
  project,
  featured,
  primaryCat,
}: {
  project: Project;
  featured: boolean;
  primaryCat: string;
}) {
  const { slug, title, subtitle, description, heroImage, imageFit = "cover", color, tech, liveUrl } = project;
  const cs = CAT_STYLE[primaryCat] ?? CAT_STYLE.website;

  /* App/flutter screenshots: dark bg + contain; websites: white bg + cover */
  const isScreenshot = imageFit === "contain";

  return (
    <Link
      href={`/projects/${slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1FA0B1] ${
        featured ? "lg:flex-row" : ""
      }`}
      style={{
        borderColor: "rgba(198,209,215,0.4)",
        backgroundColor: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
      }}
    >
      {/* ── Image area ── */}
      <div
        className={`relative overflow-hidden ${
          featured ? "h-64 lg:h-auto lg:w-[46%] flex-shrink-0" : "h-52"
        }`}
        style={{ backgroundColor: isScreenshot ? "#111827" : `${color}12` }}
      >
        {heroImage ? (
          <Image
            src={heroImage}
            alt={project.imageAlt ?? `${title} screenshot`}
            fill
            className={`transition-transform duration-500 group-hover:scale-[1.04] ${
              isScreenshot ? "object-contain p-3" : "object-cover"
            }`}
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 46vw"
                : "(max-width: 640px) 100vw, 33vw"
            }
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="h-10 w-10 opacity-30" style={{ color }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
            </svg>
          </div>
        )}

        <div
          className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm"
          style={{ backgroundColor: cs.bg, color: cs.text, border: `1px solid ${cs.border}` }}
        >
          <cs.Icon className="h-3 w-3 flex-shrink-0" />
          <span>{cs.label}</span>
        </div>

        {/* Overlay for website images */}
        {!isScreenshot && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent" />
        )}
      </div>

      {/* ── Content ── */}
      <div className="flex flex-1 flex-col p-5">
        <h3
          className="mb-1 text-[15px] font-bold transition-colors duration-300 group-hover:text-[#1FA0B1]"
          style={{ color: "#1a1a1a" }}
        >
          {title}
        </h3>
        <p className="mb-2.5 text-[12px] font-medium" style={{ color: "#6B5A5A" }}>
          {subtitle}
        </p>
        <p
          className="mb-4 flex-1 text-[13px] leading-relaxed line-clamp-3"
          style={{ color: "#9B8B8B" }}
        >
          {description}
        </p>

        {/* Tech */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border px-2 py-0.5 text-[10px] font-medium"
              style={{
                borderColor: "rgba(198,209,215,0.5)",
                color: "#6B5A5A",
                backgroundColor: "rgba(250,247,245,0.8)",
              }}
            >
              {t}
            </span>
          ))}
          {tech.length > 4 && (
            <span
              className="rounded-md border px-2 py-0.5 text-[10px] font-medium"
              style={{ borderColor: "rgba(198,209,215,0.5)", color: "#9B8B8B", backgroundColor: "rgba(250,247,245,0.8)" }}
            >
              +{tech.length - 4}
            </span>
          )}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-1.5 text-[12px] font-semibold transition-all duration-300 group-hover:gap-3"
            style={{ color: "#1FA0B1" }}
          >
            View case study
            <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>

          {liveUrl && (
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(liveUrl, "_blank", "noopener,noreferrer"); }}
              className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition hover:opacity-80"
              style={{ backgroundColor: `${color}15`, color, border: `1px solid ${color}25` }}
            >
              Live ↗
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}
