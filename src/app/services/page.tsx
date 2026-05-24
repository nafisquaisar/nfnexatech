import Link from "next/link";
import { servicesData } from "@/data/content";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";

const servicesOgImage = ogImage({
  title: "Our Services",
  category: "What We Do",
  type: "service",
});

export const metadata = {
  title: "Services",
  description: `${siteConfig.name} offers web development, Android apps, Flutter, UI/UX design, backend APIs, and SaaS MVP development for startups and enterprises.`,
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: `Services | ${siteConfig.name}`,
    description: `${siteConfig.name} offers web development, Android apps, Flutter, UI/UX design, backend APIs, and SaaS MVP development for startups and enterprises.`,
    url: `${siteConfig.url}/services`,
    type: "website",
    images: [servicesOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `Services | ${siteConfig.name}`,
    description: `${siteConfig.name} offers web development, Android apps, Flutter, UI/UX design, backend APIs, and SaaS MVP development for startups and enterprises.`,
    images: [servicesOgImage.url],
  },
};

export default function ServicesIndexPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors">
            ← {siteConfig.name}
          </Link>
        </div>
      </nav>

      <header className="py-24 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">What we do</p>
        <h1 className="mb-6 text-5xl font-extrabold text-white">Our Services</h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400">
          End-to-end software development services for startups and enterprises — from concept to launch.
        </p>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-32">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-cyan-400/30 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <span className="text-4xl">{s.icon}</span>
                <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {s.title}
                </h2>
                <p className="flex-1 text-sm leading-7 text-slate-400">{s.tagline}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 transition group-hover:gap-2.5">
                  Learn more
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
