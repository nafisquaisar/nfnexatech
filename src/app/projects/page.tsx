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
    subtitle: "Service Booking Platform for Delhi NCR",
    category: "Web Platform",
    description:
      "A high-performance, SEO-optimized service booking platform for a Delhi NCR home appliance repair business. Hyper-local landing pages, WhatsApp lead generation, and Firebase-powered gallery.",
    heroImage: "/images/projects/medon/home.png",
    color: "#06b6d4",
    tech: ["Next.js", "Firebase", "Tailwind CSS"],
  },
  {
    slug: "train-your-tech",
    title: "Train Your Tech",
    subtitle: "AI-Powered Placement Preparation Platform",
    category: "SaaS Platform",
    description:
      "An AI-powered EdTech SaaS platform with mock interviews, resume analyzer, job portal, course management, and online tests — built with Spring Boot, React, Firebase, and MySQL.",
    heroImage: "/images/projects/trainyourtech/landing.png",
    color: "#a855f7",
    tech: ["Spring Boot", "React", "Firebase", "MySQL"],
  },
];

/* ── Page ─────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherDynamicProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
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
          className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/8 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/8 blur-[120px]"
        />
        <div className="relative mx-auto w-[92%] max-w-5xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-300">
            Our Work
          </div>
          <h1 className="mb-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Projects &amp; Case Studies
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400">
            Real work. Real results. Browse our portfolio of web apps, mobile apps, SaaS platforms,
            and digital products built for startups and businesses across India.
          </p>
        </div>
      </header>

      <main className="mx-auto w-[92%] max-w-6xl pb-24">

        {/* ── Featured Projects ── */}
        {featuredProjects.length > 0 && (
          <section aria-labelledby="featured-heading" className="mb-16">
            <h2 id="featured-heading" className="mb-8 text-xl font-bold text-slate-200">
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
          <h2 id="all-heading" className="mb-8 text-xl font-bold text-slate-200">
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

        {/* ── CTA ── */}
        <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/60 p-10 text-center backdrop-blur-sm">
          <h2 className="mb-3 text-2xl font-bold text-white">
            Have a project in mind?
          </h2>
          <p className="mx-auto mb-7 max-w-xl text-slate-400">
            Tell us what you want to build. We&apos;ll review your brief within 4 hours and send
            you a detailed proposal with timeline and pricing.
          </p>
          <Link
            href="/start-project"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            Start a Project →
          </Link>
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
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition-all duration-300 hover:border-slate-700 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${featured ? "lg:flex-row" : ""
        }`}
    >
      {/* Hero Image */}
      <div
        className={`relative overflow-hidden ${featured ? "h-56 lg:h-auto lg:w-1/2 flex-shrink-0" : "h-44"
          }`}
      >
        {heroImage ? (
          <Image
            src={heroImage}
            alt={`${title} project preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 640px) 100vw, 33vw"}
            style={{ backgroundColor: `${color}33` }}
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center text-4xl"
            style={{ backgroundColor: `${color}33` }}
          >
            🚀
          </div>
        )}
        {/* Category badge */}
        <div className="absolute left-3 top-3 z-10 rounded-md bg-slate-950/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-300 backdrop-blur-sm">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-1 text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
          {title}
        </h3>
        <p className="mb-3 text-xs font-medium text-slate-400">{subtitle}</p>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500 line-clamp-3">
          {description}
        </p>
        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border border-slate-700/60 bg-slate-800/60 px-2 py-0.5 text-[11px] font-medium text-slate-400"
            >
              {t}
            </span>
          ))}
          {tech.length > 4 && (
            <span className="rounded-md border border-slate-700/60 bg-slate-800/60 px-2 py-0.5 text-[11px] font-medium text-slate-500">
              +{tech.length - 4}
            </span>
          )}
        </div>
        <div className="mt-4 text-xs font-semibold text-violet-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          View case study →
        </div>
      </div>
    </Link>
  );
}
