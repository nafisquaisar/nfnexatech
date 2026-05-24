import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/content";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  const image = ogImage({
    title: service.title,
    category: `${service.icon} Service`,
    type: "service",
  });

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: {
      canonical: `${siteConfig.url}/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ${siteConfig.name}`,
      description: service.metaDescription,
      images: [image.url],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  // JSON-LD Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
    serviceType: service.title,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors">
            ← Back to {siteConfig.name}
          </Link>
          <span className="hidden text-xs uppercase tracking-widest text-slate-500 sm:block">Services</span>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden py-24">
        <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            {siteConfig.name} · Services
          </p>
          <h1 className="mb-5 text-5xl font-extrabold leading-tight text-white sm:text-6xl">
            <span className="mr-3 text-5xl">{service.icon}</span>
            {service.title}
          </h1>
          <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-400">
            {service.tagline}
          </p>
          <p className="mb-10 max-w-3xl text-base leading-8 text-slate-400">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-3 text-sm font-bold text-white transition hover:opacity-90"
            >
              {service.cta}
            </Link>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 px-7 py-3 text-sm font-bold text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </header>

      {/* FEATURES */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="mb-8 text-2xl font-bold text-white">What&apos;s included</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {service.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4"
            >
              <span aria-hidden className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cyan-400/10">
                <svg className="h-3 w-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm text-slate-300">{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-900/50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-white">Our process</h2>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <li key={p.step} className="relative flex flex-col gap-3 rounded-2xl border border-white/8 bg-white/[0.02] p-6">
                <span className="text-4xl font-extrabold text-white/10 tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="text-lg font-bold text-white">{p.step}</h3>
                <p className="text-sm leading-6 text-slate-400">{p.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-8 text-2xl font-bold text-white">Explore other services</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData
            .filter((s) => s.slug !== service.slug)
            .slice(0, 5)
            .map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4 transition hover:border-cyan-400/30 hover:bg-white/[0.04]"
              >
                <span className="text-xl">{s.icon}</span>
                <span className="text-sm font-medium text-slate-300 group-hover:text-white">{s.title}</span>
              </Link>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Ready to get started?</h2>
          <p className="mb-8 text-slate-400">
            Tell us about your project and we&apos;ll come back with a free proposal within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-3 text-sm font-bold text-white"
            >
              {service.cta}
            </Link>
            <Link href="/" className="rounded-xl border border-white/15 px-7 py-3 text-sm font-bold text-slate-300">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
