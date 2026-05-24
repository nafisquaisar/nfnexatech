import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalendlyModal from "@/components/CalendlyModal";
import WhatsAppCta from "@/components/WhatsAppCta";
import { CalendlyCtaButton, WhatsAppCtaButton } from "@/components/LocalSeoCtas";
import { siteConfig } from "@/config/site";
import { testimonials } from "@/data/content";
import { faqs } from "@/data/content";

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
    <div className="bg-slate-950 text-slate-100">
      {/* Structured data */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#155e75,_transparent_30%),radial-gradient(circle_at_bottom_right,_#7c3aed,_transparent_30%),linear-gradient(to_bottom,_#020617,_#0f172a)] pb-20 pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]"
        />
        <div className="relative mx-auto w-[92%] max-w-5xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-slate-300 transition">Home</Link>
            <span>›</span>
            <span className="text-slate-400">{service} in {city}</span>
          </nav>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-300">
            📍 {city}, {state}, {country}
          </div>

          <h1 className="mb-5 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            {headline}
          </h1>
          <p className="mb-3 max-w-2xl text-lg leading-relaxed text-slate-300">
            {subheadline}
          </p>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-400">
            {description}
          </p>

          <div className="flex flex-wrap gap-4">
            <CalendlyCtaButton label="Book Free Consultation" />
            <WhatsAppCtaButton city={city} service={service} />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/8 bg-slate-900/60">
        <div className="mx-auto w-[92%] max-w-5xl">
          <ul className="grid grid-cols-2 divide-x divide-white/8 md:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <li key={stat.label} className="flex flex-col items-center gap-1 px-4 py-6 text-center">
                <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-3xl font-extrabold text-transparent">
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
          <div className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Why choose us
          </div>
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            The best {service.toLowerCase()} in {city}
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "⚡",
                title: "Fast Delivery",
                desc: "MVPs in 6–10 weeks. Full products in 3–5 months. No endless timelines.",
              },
              {
                icon: "🌐",
                title: "Global Standards",
                desc: "Built by an Indian team to international code quality, security, and performance standards.",
              },
              {
                icon: "💰",
                title: "Competitive Pricing",
                desc: `Top-tier software development at ${city} pricing — fraction of Western agency costs.`,
              },
              {
                icon: "🔒",
                title: "Transparent Process",
                desc: "Bi-weekly demos. Slack/WhatsApp access. No black boxes.",
              },
              {
                icon: "📈",
                title: "SEO-First Builds",
                desc: "Every web project is built to rank — performance, schema, and Core Web Vitals from day one.",
              },
              {
                icon: "🤝",
                title: "Long-Term Partner",
                desc: "30 days post-launch support included. We stick around after the project ends.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition hover:border-cyan-400/20"
              >
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="mb-2 text-base font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="border-t border-white/8 bg-slate-900/40 py-20">
        <div className="mx-auto w-[92%] max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-white">
            What our clients say
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-6"
              >
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mb-4 text-sm leading-6 text-slate-300">
                  &ldquo;{t.review}&rdquo;
                </blockquote>
                <footer className="text-xs text-slate-500">
                  <strong className="text-slate-300">{t.name}</strong> · {t.title}, {t.company}
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL FAQ ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-white">
            FAQs — {service} in {city}
          </h2>
          <div className="space-y-4">
            {allFaqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4 open:border-cyan-400/20"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-200 group-open:text-cyan-300">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="border-t border-white/8 bg-slate-900/40 py-20">
        <div className="mx-auto w-[92%] max-w-3xl rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Ready to start?
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white">
            Get a free quote for your project
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-slate-400 text-sm">
            We&apos;re the leading {service.toLowerCase()} in {city}. Contact us
            today and get a no-obligation proposal within 48 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CalendlyCtaButton label="Book Free Consultation" />
            <Link
              href="/#contact"
              className="rounded-xl border border-white/15 px-7 py-3 text-sm font-bold text-slate-300 transition hover:border-white/30"
            >
              Send Project Brief
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppCta />
      <CalendlyModal />
    </div>
  );
}
