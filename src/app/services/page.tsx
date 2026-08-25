import Link from "next/link";
import { servicesData } from "@/data/content";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const servicesOgImage = ogImage({
  title: "Our Services",
  category: "What We Do",
  type: "service",
});

export const metadata = {
  title: "Web & Software Development Services | NF Nexa Tech",
  description:
    "Web development, Android & Flutter app development, UI/UX design, backend APIs, and SaaS MVP development — built by a Delhi-based team for businesses across India.",
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: "Web & Software Development Services | NF Nexa Tech",
    description:
      "Web development, Android & Flutter apps, UI/UX design, and SaaS MVPs — built by a Delhi-based team for startups and businesses.",
    url: `${siteConfig.url}/services`,
    type: "website",
    images: [servicesOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & Software Development Services | NF Nexa Tech",
    description:
      "Web development, Android & Flutter apps, UI/UX design, and SaaS MVPs — built by a Delhi-based team.",
    images: [servicesOgImage.url],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
  ],
};

export default function ServicesIndexPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <header className="py-24 text-center pt-36">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">What we do</p>
        <h1 className="mb-6 text-5xl font-extrabold text-white">Our Services</h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400">
          We build websites, web applications, mobile apps, and SaaS platforms for businesses across Delhi and India. Here&apos;s what we work on.
        </p>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-20">
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

        {/* CTA strip */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <h2 className="mb-3 text-xl font-bold text-white">Not sure what you need?</h2>
          <p className="mb-6 text-sm text-slate-400">
            Describe your project and we&apos;ll recommend the right approach. Free 30-minute call, no commitment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/start-project"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-3 text-sm font-bold text-white transition hover:opacity-90"
            >
              Start a Project
            </Link>
            <Link
              href="/locations/delhi"
              className="rounded-xl border border-white/15 px-7 py-3 text-sm font-bold text-slate-300 transition hover:border-white/30"
            >
              Delhi-based clients →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
