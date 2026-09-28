import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";
import { projects } from "@/data/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── SEO metadata ─────────────────────────────────────────── */
const pageOgImage = ogImage({
  title: "Our Projects & Case Studies",
  category: "Portfolio",
  type: "page",
});

export const metadata: Metadata = {
  title: "Projects & Case Studies — Web, Mobile & SaaS Work | NF Nexa Tech",
  description:
    "Browse NF Nexa Tech's portfolio of web, mobile, and SaaS projects. Real case studies covering healthcare, EdTech, music streaming, inventory management, and more.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
  openGraph: {
    title: "Projects & Case Studies | NF Nexa Tech",
    description:
      "Real project case studies from NF Nexa Tech — web apps, Android apps, SaaS platforms, and more.",
    url: `${siteConfig.url}/projects`,
    type: "website",
    images: [pageOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Case Studies | NF Nexa Tech",
    description:
      "Real project case studies from NF Nexa Tech — web apps, Android apps, SaaS platforms, and more.",
    images: [pageOgImage.url],
  },
  robots: { index: true, follow: true },
};

/* ── BreadcrumbList JSON-LD ────────────────────────────────── */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${siteConfig.url}/projects` },
  ],
};

/* ── Static project pages not in data.js ─────────────────── */
const staticProjects = [
  {
    slug: "medon-company",
    title: "Medon Company",
    subtitle: "Appliance Repair & Service Booking Website",
    category: "Web Platform",
    description:
      "A service website built for Medon Company to help customers find appliance repair services, explore service areas, and book a visit online.",
    heroImage: "/images/projects/medon/home.png",
    color: "#06b6d4",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
  },
  {
    slug: "train-your-tech",
    title: "Train Your Tech",
    subtitle: "Placement Preparation Platform for Students",
    category: "EdTech Platform",
    description:
      "A placement preparation platform that brings courses, resume analysis, interview practice, tests, and job opportunities together for students.",
    heroImage: "/images/projects/trainyourtech/landing.png",
    color: "#a855f7",
    tech: ["React", "Spring Boot", "MySQL", "Firebase"],
  },
  {
    slug: "madza-company",
    title: "Madza Company",
    subtitle: "Home Services Platform",
    category: "Home Services",
    description:
      "A home services website that helps customers explore and book AC, appliance, invisible grill, electrical, and plumbing services.",
    heroImage: "/images/projects/madzacompany/home.png",
    color: "#06b6d4",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
  },
  {
    slug: "popular-bread",
    title: "Popular Bread",
    subtitle: "Bread Business Management App",
    category: "Business Management App",
    description:
      "A business management app built to manage bread purchases, stock, sales, wastage, capital, and daily business performance in one place.",
    heroImage: "/images/projects/popular/popular_preview.png",
    color: "#f97316",
    tech: ["Android", "Firebase", "Hive", "Cloud Storage"],
  },
  {
    slug: "tunelyf",
    title: "TuneLyf",
    subtitle: "Online & Local Music Player",
    category: "Music & Entertainment",
    description:
      "A music player that brings online and local music together, with search, favorites, playlists, recent plays, and background playback.",
    heroImage: "/images/projects/tunelyf/tunelyf_preview.png",
    color: "#8b5cf6",
    tech: ["Android", "Audius API", "Audio Playback"],
  },
  {
    slug: "organizer-classes",
    title: "Organizer Classes",
    subtitle: "Online Learning & Exam Prep",
    category: "EdTech Platform",
    description:
      "An online learning platform where students can purchase courses, watch classes, study notes, practice tests, and access previous year questions.",
    heroImage: "/images/projects/organizer/organizer_preview.png",
    color: "#f97316",
    tech: ["Android", "Razorpay", "Video Learning"],
  },
  {
    slug: "kharcha-plus",
    title: "Kharcha Plus",
    subtitle: "Expense & Utility Management",
    category: "Finance & Utility",
    description:
      "An expense and utility management app for tracking daily spending, electricity, water, food, and mess expenses in one place.",
    heroImage: "/images/projects/kharchaplus/kharchaplus_preview.png",
    color: "#0f9f9a",
    tech: ["Flutter", "Riverpod", "Isar", "Firebase"],
  },
  {
    slug: "small-steps",
    title: "Small Steps",
    subtitle: "Notes & Checklist App",
    category: "Productivity App",
    description:
      "A simple notes and checklist app for writing things down, managing tasks, and keeping personal notes protected.",
    heroImage: "/images/projects/smallstep/smallstep_preview.png",
    color: "#14b8a6",
    tech: ["Android", "Local Storage", "Biometric Auth"],
  },
];

/* ── Page ─────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherDynamicProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F5", color: "#1a1a1a" }}>
      <Navbar />

      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Hero ── */}
      <header className="relative overflow-hidden pb-10 pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(31,160,177,0.25) 0%, rgba(232,118,58,0.1) 50%, transparent 70%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(249,225,205,0.4) 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto w-[92%] max-w-5xl">
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="block h-px w-8" style={{ backgroundColor: "#1FA0B1" }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: "#1FA0B1" }}>
              Our Work
            </span>
          </div>
          <h1 className="mb-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl" style={{ color: "#1a1a1a" }}>
            Projects &amp; <span style={{ color: "#E8763A" }}>Case Studies</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed" style={{ color: "#6B5A5A" }}>
            Real work. Real results. Browse our portfolio of web apps, mobile apps, SaaS platforms,
            and digital products built for startups and businesses across India.
          </p>
        </div>
      </header>

      <main className="mx-auto w-[92%] max-w-6xl pb-24">

        {/* ── Featured Projects ── */}
        {featuredProjects.length > 0 && (
          <section aria-labelledby="featured-heading" className="mb-16">
            <h2 id="featured-heading" className="mb-8 text-xl font-bold text-[#1a1a1a]">
              Featured Projects
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  heroImage={project.heroImage ?? project.image ?? ""}
                  category={project.category}
                  tech={project.tech}
                  color={project.color}
                  featured
                />
              ))}
            </div>
          </section>
        )}

        {/* ── All Other Projects ── */}
        <section aria-labelledby="all-heading">
          <h2 id="all-heading" className="mb-8 text-xl font-bold text-[#1a1a1a]">
            All Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherDynamicProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                heroImage={project.heroImage ?? project.image ?? ""}
                category={project.category}
                tech={project.tech}
                color={project.color}
                featured={false}
              />
            ))}
            {staticProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                heroImage={project.heroImage}
                category={project.category}
                tech={project.tech}
                color={project.color}
                featured={false}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ── ProjectCard ─────────────────────────────────────────── */
interface ProjectCardProps {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  category: string;
  tech: string[];
  color: string;
  featured: boolean;
}

function ProjectCard({
  slug,
  title,
  subtitle,
  description,
  heroImage,
  category,
  tech,
  color,
  featured,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1FA0B1] ${featured ? "lg:flex-row" : ""
        }`}
      style={{
        borderColor: "rgba(198,209,215,0.4)",
        backgroundColor: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Hero Image */}
      <div
        className={`relative overflow-hidden ${featured ? "h-56 lg:h-auto lg:w-1/2 flex-shrink-0" : "h-48"
          }`}
      >
        {heroImage ? (
          <Image
            src={heroImage}
            alt={`${title} project preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 640px) 100vw, 33vw"}
            style={{ backgroundColor: `${color}15` }}
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: `${color}15` }}
          >
            <svg className="h-10 w-10" style={{ color: `${color}80` }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
            </svg>
          </div>
        )}
        {/* Category badge */}
        <div
          className="absolute left-3 top-3 z-10 rounded-lg px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md"
          style={{ backgroundColor: `${color}18`, color, border: `1px solid ${color}25` }}
        >
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3
          className="mb-1 text-[15px] font-bold transition-colors duration-300"
          style={{ color: "#1a1a1a" }}
        >
          <span className="group-hover:text-[#1FA0B1] transition-colors duration-300">{title}</span>
        </h3>
        <p className="mb-2.5 text-[12px] font-medium" style={{ color: "#6B5A5A" }}>{subtitle}</p>
        <p className="mb-4 flex-1 text-[13px] leading-relaxed line-clamp-3" style={{ color: "#9B8B8B" }}>
          {description}
        </p>
        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border px-2 py-0.5 text-[10px] font-medium"
              style={{ borderColor: "rgba(198,209,215,0.5)", color: "#6B5A5A", backgroundColor: "rgba(250,247,245,0.8)" }}
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
        <div className="mt-3.5 flex items-center gap-1.5 text-[12px] font-semibold transition-all duration-300 group-hover:gap-2.5" style={{ color: "#1FA0B1" }}>
          View case study
          <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

