import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCtas from "@/components/FloatingCtas";
import { StartProjectButton, WhatsAppCtaButton } from "@/components/LocalSeoCtas";
import { siteConfig } from "@/config/site";
import { testimonials } from "@/data/content";
import { faqs } from "@/data/content";
import {
  PinIcon,
  SpeedIcon,
  GlobeIcon,
  PricingIcon,
  ShieldIcon,
  TrendIcon,
  HandshakeIcon,
} from "@/components/LocationPageIcons";

export interface LocalSeoPageProps {
  city: string;
  state: string;
  country: string;
  countryCode: string;
  service: string;       // e.g. "Software Company"
  slug: string;          // URL slug
  headline: string;
  subheadline: string;
  description: string;
  geo: { lat: number; lng: number };
  localFaqs?: { question: string; answer: string }[];
  schema?: Record<string, unknown>;
}

/**
 * Reusable Local SEO Landing Page template.
 * Creates a unique, localised page for each city/service combination.
 * All schema, meta, and content is injected via props.
 * Server Component — CTA interactivity lives in LocalSeoCtas (client island).
 */
export default function LocalSeoPage({
  city,
  state,
  country,
  service,
  headline,
  subheadline,
  description,
  geo,
  localFaqs,
  schema,
}: LocalSeoPageProps) {
  const allFaqs = localFaqs ?? faqs.slice(0, 5);

  return (
    <div className="bg-white text-slate-900">
      {/* Structured data */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-orange-50 pb-20 pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_#0d948820_1px,transparent_1px)] bg-[size:32px_32px]"
        />
        <div className="relative mx-auto w-[92%] max-w-5xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-teal-600 transition">Home</Link>
            <span>›</span>
            <span className="text-slate-400">{service} in {city}</span>
          </nav>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-xs font-semibold text-teal-700">
            <PinIcon className="h-3.5 w-3.5" /> {city}, {state}, {country}
          </div>

          <h1 className="mb-5 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl" style={{ background: 'linear-gradient(to right,#1FA0B1,#E8763A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            {headline}
          </h1>
          <p className="mb-3 max-w-2xl text-lg leading-relaxed text-slate-600">
            {subheadline}
          </p>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-500">
            {description}
          </p>

          <div className="flex flex-wrap gap-4">
            <StartProjectButton label="Start Your Project" />
            <WhatsAppCtaButton city={city} service={service} />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto w-[92%] max-w-5xl">
          <ul className="grid grid-cols-2 divide-x divide-slate-100 md:grid-cols-4">
            {siteConfig.stats.map((stat, i) => (
              <li key={stat.label} className="flex flex-col items-center gap-1 px-4 py-6 text-center">
                <span className={`text-3xl font-extrabold ${i % 2 === 0 ? "text-teal-600" : "text-orange-500"}`}>
                  {stat.value}
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHY NF NEXA TECH ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-5xl">
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Why us</p>
          <h2 className="mb-12 text-center text-2xl font-bold text-slate-900">
            Why businesses work with NF Nexa Tech
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                Icon: SpeedIcon,
                title: "Staged delivery",
                desc: "Development happens in stages with progress updates at each milestone. Timeline is agreed in the written scope before work begins.",
              },
              {
                Icon: GlobeIcon,
                title: "Solid technical foundation",
                desc: "We follow established practices for code structure, security, and performance in every project we deliver.",
              },
              {
                Icon: PricingIcon,
                title: "Transparent pricing",
                desc: "Fixed-price quotes based on agreed scope. No hourly billing and no surprise invoices.",
              },
              {
                Icon: ShieldIcon,
                title: "Clear communication",
                desc: "Regular updates via WhatsApp and video calls. You review the work at each stage and can give feedback throughout.",
              },
              {
                Icon: TrendIcon,
                title: "Performance-conscious builds",
                desc: "Performance, semantic markup, and Core Web Vitals are considered from the start of every web project.",
              },
              {
                Icon: HandshakeIcon,
                title: "Post-launch support",
                desc: "We provide support after delivery to address issues and adjustments. Terms are agreed as part of the project scope.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-300 hover:shadow-md"
              >
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <item.Icon className="h-5 w-5" />
                </span>
                <h3 className="mb-2 text-base font-bold text-slate-800">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="border-t border-slate-100 bg-slate-50 py-20">
        <div className="mx-auto w-[92%] max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Portfolio</p>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Selected projects</h2>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-500">
            Examples of work we have delivered. Full case studies are on the{" "}
            <Link href="/projects" className="text-teal-600 hover:underline">projects page</Link>.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                category: "Education",
                title: "Organizer Classes",
                desc: "A web application for a coaching institute to manage students, fees, attendance, and communications — replacing spreadsheet-based workflows with one platform.",
                tags: ["React", "Firebase", "Web App"],
                href: "/projects/organizer-classes",
              },
              {
                category: "Food & Beverage",
                title: "Popular Bread",
                desc: "An Android application for a bread manufacturing business to track daily production, stock levels, and distribution workflows.",
                tags: ["Android", "Kotlin", "Firebase"],
                href: "/projects/popular-bread",
              },
              {
                category: "Healthcare",
                title: "Nestiva Hospital",
                desc: "A hospital website with doctor listings, department pages, and appointment CTAs — designed for patients navigating healthcare information.",
                tags: ["Next.js", "Healthcare", "Web Design"],
                href: "/projects/nestiva-hospital",
              },
            ].map((proj) => (
              <Link
                key={proj.title}
                href={proj.href}
                className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-300 hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-500">{proj.category}</span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{proj.title}</h3>
                <p className="flex-1 text-sm leading-6 text-slate-500">{proj.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((t) => (
                    <span key={t} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-500">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL FAQ ── */}
      <section className="py-16">
        <div className="mx-auto w-[92%] max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">FAQs</p>
          <h2 className="mb-8 text-2xl font-bold text-slate-900">
            FAQs — {service} in {city}
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {allFaqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-slate-200 bg-white shadow-sm transition-all open:border-teal-300 open:bg-teal-50/40"
              >
                <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-5 py-3.5 text-sm font-semibold text-slate-800 group-open:text-teal-700">
                  <span>{faq.question}</span>
                  <svg className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180 group-open:text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="border-t border-slate-100 px-5 pb-4 pt-3 text-sm leading-6 text-slate-500">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCtas />
    </div>
  );
}
