import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/data";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";

/* ── Generate static params for all project slugs ─────── */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/* ── Generate metadata per project ────────────────────── */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return { title: "Project Not Found | NF Nexa Tech" };
  }

  const image = ogImage({
    title: project.title,
    category: `${project.category} · ${project.platform ?? ""}`.replace(/ · $/, ""),
    type: "project",
  });

  return {
    title: `${project.title} | NF Nexa Tech`,
    description: project.subtitle,
    alternates: {
      canonical: `${siteConfig.url}/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | NF Nexa Tech`,
      description: project.subtitle,
      url: `${siteConfig.url}/projects/${project.slug}`,
      type: "article",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | NF Nexa Tech`,
      description: project.subtitle,
      images: [image.url],
    },
  };
}

/* ── Helpers ─────────────────────────────────────────────── */
function Badge({ label }: { label: string }) {
  return (
    <span className="rounded-md border px-3 py-1.5 text-xs font-semibold tracking-wide" style={{ borderColor: "rgba(198,209,215,0.5)", color: "#1FA0B1", backgroundColor: "white" }}>
      {label}
    </span>
  );
}

function MetaCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="flex flex-col gap-1.5 rounded-2xl border p-5" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
      <span className="text-xl">{icon}</span>
      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#999" }}>
        {label}
      </span>
      <span className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>
        {value}
      </span>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-2xl font-bold sm:text-3xl" style={{ color: "#1a1a1a" }}>
      <span className="border-b-2 pb-1" style={{ borderColor: "rgba(31,160,177,0.5)" }}>
        {children}
      </span>
    </h2>
  );
}

/* ── MAIN PAGE ───────────────────────────────────────────── */
export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  // In Next.js 15+, params is a Promise — must be awaited
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F5", color: "#1a1a1a" }}>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b" style={{ backgroundColor: "rgba(250,247,245,0.9)", backdropFilter: "blur(16px)", borderColor: "rgba(198,209,215,0.3)" }}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#1FA0B1]"
            style={{ color: "#6B5A5A" }}
          >
            ← Back to Portfolio
          </Link>

          <span className="hidden text-xs uppercase tracking-widest sm:block" style={{ color: "#999" }}>
            Case Study
          </span>

        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden pb-20 pt-20">

        <div className="relative mx-auto max-w-6xl px-6">

          <div className="mb-5 flex items-center gap-3">

            <span className="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest" style={{ color: "#1FA0B1", borderColor: "rgba(31,160,177,0.3)", backgroundColor: "rgba(31,160,177,0.08)" }}>
              {project.category}
            </span>

            <span className="text-xs" style={{ color: "#6B5A5A" }}>
              {project.industry}
            </span>

          </div>

          <h1 className="mb-4 max-w-3xl text-5xl font-extrabold" style={{ color: "#1a1a1a" }}>
            {project.title}
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed" style={{ color: "#6B5A5A" }}>
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techStack?.map((tech) => (
              <Badge key={tech} label={tech} />
            ))}
          </div>

        </div>

      </header>

      {/* HERO IMAGE */}
      {project.heroImage && (
        <div className="mx-auto mb-20 max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl border shadow-lg" style={{ borderColor: "rgba(198,209,215,0.4)" }}>
            <Image
              src={project.heroImage}
              alt={`${project.title} — hero screenshot`}
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      )}

      {/* META */}
      <div className="mx-auto mb-20 max-w-6xl px-6">

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

          <MetaCard
            icon="🏭"
            label="Industry"
            value={project.industry}
          />

          <MetaCard
            icon="📱"
            label="Platform"
            value={project.platform}
          />

          <MetaCard
            icon="⏱️"
            label="Timeline"
            value={project.timeline}
          />

          <MetaCard
            icon="🤝"
            label="Client Type"
            value={project.clientType}
          />

          <MetaCard
            icon="💼"
            label="Project Value"
            value={project.projectValue}
          />

          <MetaCard
            icon="👤"
            label="Role"
            value={project.role}
          />

        </div>

      </div>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-4xl px-6 pb-20">

        <SectionHeading>
          Project Overview
        </SectionHeading>

        <p className="leading-8" style={{ color: "#6B5A5A" }}>
          {project.overview}
        </p>

      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-24">

        <div className="rounded-3xl border p-10 text-center" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>

          <h2 className="mb-4 text-3xl font-bold" style={{ color: "#1a1a1a" }}>
            Need a Similar Project?
          </h2>

          <p className="mb-8" style={{ color: "#6B5A5A" }}>
            NF Nexa Tech builds scalable apps and modern digital products.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">

            <Link
              href="/#contact"
              className="rounded-xl px-7 py-3 text-sm font-bold text-white transition-all hover:brightness-110 hover:shadow-lg"
              style={{ backgroundColor: "#1FA0B1" }}
            >
              Contact Us
            </Link>

            <Link
              href="/"
              className="rounded-xl border px-7 py-3 text-sm font-bold transition-all hover:shadow-sm"
              style={{ borderColor: "rgba(198,209,215,0.5)", color: "#1a1a1a", backgroundColor: "#FAF7F5" }}
            >
              View All Projects
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}