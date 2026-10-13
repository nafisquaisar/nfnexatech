import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCtas from "@/components/FloatingCtas";
import { StartProjectButton, WhatsAppCtaButton } from "@/components/LocalSeoCtas";

/* ── OG image ─────────────────────────────────────────────── */
const ogImg = ogImage({
  title: "Software Development Company in Darbhanga",
  category: "Darbhanga, Bihar",
  type: "page",
});

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  // Root layout template appends "| NF Nexa Tech"
  // Final: "Software Development Company in Darbhanga | NF Nexa Tech"
  title: "Software Development Company in Darbhanga",
  description:
    "NF Nexa Tech is a Delhi-based software development company serving businesses in Darbhanga, Bihar. We build websites, Android apps, Flutter apps, and SaaS products — fully remote. Free consultation available.",
  alternates: {
    canonical: `${siteConfig.url}/locations/darbhanga`,
  },
  openGraph: {
    title: "Software Development Company in Darbhanga | NF Nexa Tech",
    description:
      "Software development services for businesses in Darbhanga, Bihar. Web apps, mobile apps, and SaaS products built by a Delhi-based team.",
    url: `${siteConfig.url}/locations/darbhanga`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [ogImg],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nfnexatech",
    creator: "@nfnexatech",
    title: "Software Development Company in Darbhanga | NF Nexa Tech",
    description:
      "Software development services for businesses in Darbhanga, Bihar. Remote-first, Delhi-based team.",
    images: [ogImg.url],
  },
};

/* ── JSON-LD ──────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/locations/darbhanga#service`,
  name: "Software Development Services in Darbhanga",
  description:
    "NF Nexa Tech provides software development services — web development, Android app development, Flutter app development, UI/UX design, backend API development, and SaaS MVP development — to businesses in Darbhanga, Bihar.",
  url: `${siteConfig.url}/locations/darbhanga`,
  provider: {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.streetAddress,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.state,
      postalCode: siteConfig.contact.postalCode,
      addressCountry: siteConfig.contact.countryCode,
    },
  },
  areaServed: [
    { "@type": "City", name: "Darbhanga" },
    { "@type": "State", name: "Bihar" },
  ],
  serviceType: "Software Development",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${siteConfig.url}/locations/delhi` },
    { "@type": "ListItem", position: 3, name: "Darbhanga", item: `${siteConfig.url}/locations/darbhanga` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does NF Nexa Tech serve businesses in Darbhanga?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NF Nexa Tech provides software development services remotely to businesses in Darbhanga, Bihar. Our office is in Mahipalpur, New Delhi, and we work with clients across India through WhatsApp and video calls.",
      },
    },
    {
      "@type": "Question",
      name: "Can a business in Darbhanga hire NF Nexa Tech without visiting Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All project communication, planning, and delivery happens remotely. We use WhatsApp, video calls, and written progress updates. Many of our clients have never visited our office — and the projects still get delivered correctly.",
      },
    },
    {
      "@type": "Question",
      name: "What types of software does NF Nexa Tech build for businesses in Darbhanga?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build business websites, web applications, Android apps (Kotlin), Flutter cross-platform apps, SaaS products, and custom backend systems. Common use cases for businesses in Darbhanga include education platforms, retail management systems, service booking apps, and business websites.",
      },
    },
    {
      "@type": "Question",
      name: "Is NF Nexa Tech based in Darbhanga?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. NF Nexa Tech is headquartered in Mahipalpur, New Delhi. We do not have a physical office in Darbhanga. We serve Darbhanga businesses remotely.",
      },
    },
    {
      "@type": "Question",
      name: "What is the process for starting a project from Darbhanga?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact us via WhatsApp, email, or the project form on our website. We schedule a free 30-minute discovery call, understand your requirements, and send a written proposal within 48 hours. All subsequent work happens remotely with regular check-ins.",
      },
    },
  ],
};

/* ── Use cases specific to Darbhanga-type businesses ─────── */
const useCases = [
  {
    icon: "🏫",
    title: "Education & Coaching Institutes",
    desc: "Darbhanga has a strong education sector. We build student management platforms, online exam portals, fee management systems, and educational apps for coaching institutes and schools.",
  },
  {
    icon: "🏪",
    title: "Retail & Trading Businesses",
    desc: "Inventory management apps, billing software, e-commerce websites, and WhatsApp-based ordering systems for retail and trading businesses in Darbhanga.",
  },
  {
    icon: "🏥",
    title: "Healthcare & Clinics",
    desc: "Appointment booking websites, patient management systems, doctor discovery pages, and informational healthcare websites for clinics and healthcare providers.",
  },
  {
    icon: "🚗",
    title: "Service & Local Businesses",
    desc: "Lead generation websites, service booking platforms, and WhatsApp contact integrations for local service businesses — plumbers, electricians, repair shops, and others.",
  },
];

/* ── Page ─────────────────────────────────────────────────── */
export default function DarbhangaPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
            <Link href="/locations/delhi" className="hover:text-slate-300 transition">Locations</Link>
            <span>›</span>
            <span className="text-slate-400">Darbhanga</span>
          </nav>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-300">
            📍 Serving Darbhanga, Bihar
          </div>

          <h1 className="mb-5 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Software Development Services for Businesses in Darbhanga
          </h1>
          <p className="mb-3 max-w-2xl text-lg leading-relaxed text-slate-300">
            NF Nexa Tech is based in Mahipalpur, New Delhi and provides software development services remotely to businesses in Darbhanga, Bihar.
          </p>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-400">
            We build websites, Android apps, Flutter apps, and custom business software for businesses across Darbhanga and Bihar. All communication is handled through WhatsApp and video calls — our process is designed to work well for remote clients.
          </p>

          <div className="flex flex-wrap gap-4">
            <StartProjectButton label="Start Your Project" />
            <WhatsAppCtaButton city="Darbhanga" service="Software Development" />
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

      {/* ── ABOUT ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Software development for Darbhanga — built in Delhi, delivered remotely
          </h2>
          <div className="space-y-4 text-sm leading-7 text-slate-400">
            <p>
              NF Nexa Tech is a UDYAM-registered software development company based in Mahipalpur, New Delhi. We extend our services to businesses in Darbhanga, Bihar — entirely remotely, with no compromise on quality or communication.
            </p>
            <p>
              Darbhanga is an important commercial and educational hub in Bihar with businesses in education, healthcare, retail, and services that increasingly need digital tools — websites that generate enquiries, apps that manage operations, and software that replaces manual processes.
            </p>
            <p>
              We understand what businesses at this stage actually need: something that works, is maintained properly, and can grow with the business. We don&apos;t build throwaway websites. Every project is production-ready from day one.
            </p>
          </div>
        </div>
      </section>

      {/* ── BUSINESS USE CASES ── */}
      <section className="border-t border-white/8 bg-slate-900/40 py-20">
        <div className="mx-auto w-[92%] max-w-5xl">
          <h2 className="mb-3 text-2xl font-bold text-white">Software solutions for businesses in Darbhanga</h2>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-400">
            Common use cases we&apos;ve built for businesses similar to those in Darbhanga:
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="mb-2 text-base font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-5xl">
          <h2 className="mb-3 text-2xl font-bold text-white">Services we provide</h2>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-400">
            All available remotely to businesses in Darbhanga, Bihar.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4 transition hover:border-cyan-400/20 hover:text-cyan-300"
              >
                <span className="flex-1 text-sm font-medium text-slate-200 group-hover:text-cyan-300 transition-colors">
                  {s.name}
                </span>
                <svg className="h-3.5 w-3.5 text-cyan-400 opacity-0 group-hover:opacity-100 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW REMOTE WORKS ── */}
      <section className="border-t border-white/8 bg-slate-900/40 py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-white">How we work with clients in Darbhanga</h2>
          <ol className="space-y-5">
            {[
              { step: "Free discovery call", desc: "A 30-minute video or phone call to understand what you need. No obligation. We can call at a time that works for you." },
              { step: "Written proposal", desc: "Within 48 hours, we send a clear scope, timeline, and fixed price. You know exactly what you&apos;re getting and what it costs." },
              { step: "Build with regular updates", desc: "We work in short sprints and share progress through WhatsApp and video calls. You can ask questions or request changes at any stage." },
              { step: "Delivery and handover", desc: "We deploy, hand over source code, and document everything. Plus 30 days of included post-launch support." },
            ].map((item, i) => (
              <li key={item.step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs font-bold text-cyan-300">
                  {i + 1}
                </span>
                <div>
                  <h3 className="mb-1 text-sm font-bold text-white">{item.step}</h3>
                  <p className="text-sm leading-6 text-slate-400">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <h2 className="mb-10 text-2xl font-bold text-white">
            FAQs — Software Development in Darbhanga
          </h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4 open:border-cyan-400/20"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-200 group-open:text-cyan-300">
                  {faq.name}
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-400">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER LOCATIONS ── */}
      <section className="border-t border-white/8 bg-slate-900/40 py-16">
        <div className="mx-auto w-[92%] max-w-5xl">
          <h2 className="mb-4 text-lg font-bold text-white">We also serve businesses in</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Delhi / New Delhi", href: "/locations/delhi" },
              { label: "Patna, Bihar", href: "/locations/patna" },
              { label: "Jhanjharpur, Bihar", href: "/locations/jhanjharpur" },
            ].map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/20 hover:text-cyan-300"
              >
                {loc.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-3xl rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Ready to start?
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white">
            Get a free quote for your Darbhanga business
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-sm text-slate-400">
            Send us a WhatsApp message or fill the project form. We respond the same day and send a proposal within 48 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <StartProjectButton label="Start Your Project" />
            <WhatsAppCtaButton city="Darbhanga" service="Software Development" />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCtas />
    </div>
  );
}
