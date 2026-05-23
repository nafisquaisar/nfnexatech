import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/data";

/* ── Generate static params for all project slugs ─────── */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/* ── Generate metadata per project ────────────────────── */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return { title: "Project Not Found | NF Nexa Tech" };
  }
  return {
    title: `${project.title} | NF Nexa Tech`,
    description: project.subtitle,
  };
}

/* ── Helpers ─────────────────────────────────────────────── */
function Badge({ label }) {
  return (
    <span className="rounded-md border border-cyan-400/25 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-300 tracking-wide">
      {label}
    </span>
  );
}

function MetaCard({ label, value, icon }) {
  return (
    <div className="flex flex-col gap-1.5 rounded-2xl border border-white/8 bg-white/[0.03] p-5 backdrop-blur-sm">
      <span className="text-xl">{icon}</span>
      <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
        {label}
      </span>
      <span className="text-sm font-semibold text-slate-200">
        {value}
      </span>
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
      <span className="border-b-2 border-cyan-400/50 pb-1">
        {children}
      </span>
    </h2>
  );
}

/* ── MAIN PAGE ───────────────────────────────────────────── */
export default async function ProjectDetail({ params }) {
  // In Next.js 15+, params is a Promise — must be awaited
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
          >
            ← Back to Portfolio
          </Link>

          <span className="hidden text-xs uppercase tracking-widest text-slate-500 sm:block">
            Case Study
          </span>

        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden pb-20 pt-20">

        <div className="relative mx-auto max-w-6xl px-6">

          <div className="mb-5 flex items-center gap-3">

            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              {project.category}
            </span>

            <span className="text-xs text-slate-500">
              {project.industry}
            </span>

          </div>

          <h1 className="mb-4 max-w-3xl text-5xl font-extrabold text-white">
            {project.title}
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-400">
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
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
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

        <p className="leading-8 text-slate-400">
          {project.overview}
        </p>

      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-24">

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">

          <h2 className="mb-4 text-3xl font-bold text-white">
            Need a Similar Project?
          </h2>

          <p className="mb-8 text-slate-400">
            NF Nexa Tech builds scalable apps and modern digital products.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">

            <Link
              href="/#contact"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-3 text-sm font-bold text-white"
            >
              Contact Us
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-white/15 px-7 py-3 text-sm font-bold text-slate-300"
            >
              View All Projects
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}