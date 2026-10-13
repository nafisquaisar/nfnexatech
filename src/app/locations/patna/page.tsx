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
  title: "Software Development Company in Patna",
  category: "Patna, Bihar",
  type: "page",
});

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  // Root layout template appends "| NF Nexa Tech"
  // Final: "Software Development Company in Patna | NF Nexa Tech"
  title: "Software Development Company in Patna",
  description:
    "NF Nexa Tech is a Delhi-based software development company serving businesses in Patna, Bihar. We build websites, Android apps, Flutter apps, SaaS products, and custom software. Remote-first. Free consultation.",
  alternates: {
    canonical: `${siteConfig.url}/locations/patna`,
  },
  openGraph: {
    title: "Software Development Company in Patna | NF Nexa Tech",
    description:
      "Software development services for businesses in Patna. Web apps, mobile apps, and SaaS products built by a Delhi-based team.",
    url: `${siteConfig.url}/locations/patna`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [ogImg],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nfnexatech",
    creator: "@nfnexatech",
    title: "Software Development Company in Patna | NF Nexa Tech",
    description:
      "Software development services for businesses in Patna, Bihar. Remote-first, Delhi-based team.",
    images: [ogImg.url],
  },
};

/* ── JSON-LD schemas ──────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/locations/patna#service`,
  name: "Software Development Services in Patna",
  description:
    "NF Nexa Tech provides software development services — including web development, Android app development, Flutter app development, UI/UX design, backend API development, and SaaS MVP development — to businesses in Patna, Bihar.",
  url: `${siteConfig.url}/locations/patna`,
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
    { "@type": "City", name: "Patna" },
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
    { "@type": "ListItem", position: 3, name: "Patna", item: `${siteConfig.url}/locations/patna` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is NF Nexa Tech based in Patna?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. NF Nexa Tech is headquartered in Mahipalpur, New Delhi. We provide software development services remotely to businesses in Patna and across Bihar.",
      },
    },
    {
      "@type": "Question",
      name: "Can a Patna business hire NF Nexa Tech for software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We regularly work with clients in Patna and across Bihar. All project communication happens through WhatsApp, video calls, and regular progress updates — location is not a barrier to working together.",
      },
    },
    {
      "@type": "Question",
      name: "What software development services does NF Nexa Tech offer for Patna businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer web development (React, Next.js), Android app development (Kotlin), Flutter cross-platform app development, UI/UX design, backend and API development (Node.js, Firebase), and SaaS MVP development for businesses in Patna.",
      },
    },
    {
      "@type": "Question",
      name: "How does remote software development work for businesses in Patna?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We begin with a free discovery call to understand your project. We then prepare a written scope and proposal. Development happens in regular cycles with WhatsApp or video call updates at every milestone. You can review progress and provide feedback at each stage.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a software project take for a Patna business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A business website typically takes 2–4 weeks. A web application or mobile app with backend integration takes 6–12 weeks. A SaaS MVP typically takes 6–10 weeks. We agree on timelines before starting and share regular updates throughout the project.",
      },
    },
  ],
};

/* ── Services data ────────────────────────────────────────── */
const services = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Business websites, web applications, e-commerce platforms, and customer portals built with React and Next.js. Fast, mobile-friendly, and SEO-optimised.",
    link: "/services/web-development",
  },
  {
    icon: "📱",
    title: "Android App Development",
    desc: "Native Android apps built in Kotlin for businesses in Patna — inventory management, customer apps, booking systems, and more.",
    link: "/services/android-app-development",
  },
  {
    icon: "🦋",
    title: "Flutter App Development",
    desc: "Cross-platform apps that run on both Android and iOS from one codebase. Ideal for startups wanting to reach both platforms without double the cost.",
    link: "/services/flutter-app-development",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Interface design that makes sense to users. We design in Figma and deliver production-ready screens, component libraries, and developer handoff specs.",
    link: "/services/ui-ux-design",
  },
  {
    icon: "⚙️",
    title: "Backend & API Development",
    desc: "REST APIs, Firebase backends, database architecture, payment gateway integration (Razorpay, Stripe), and third-party service integrations.",
    link: "/services/backend-api-development",
  },
  {
    icon: "🚀",
    title: "SaaS & MVP Development",
    desc: "First versions of software products built fast and correctly. Authentication, billing, admin dashboard, and core features — ready to acquire paying customers.",
    link: "/services/saas-mvp-development",
  },
];

/* ── Page ─────────────────────────────────────────────────── */
export default function PatnaPage() {
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
            <span className="text-slate-400">Patna</span>
          </nav>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-300">
            📍 Serving Patna, Bihar
          </div>

          <h1 className="mb-5 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Software Development Services for Businesses in Patna
          </h1>
          <p className="mb-3 max-w-2xl text-lg leading-relaxed text-slate-300">
            NF Nexa Tech is based in Mahipalpur, New Delhi and provides software development services remotely to businesses in Patna, Bihar.
          </p>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-400">
            We build websites, Android apps, Flutter apps, SaaS products, and custom software for startups and businesses across Patna and Bihar. All work is delivered remotely with regular updates via WhatsApp and video calls.
          </p>

          <div className="flex flex-wrap gap-4">
            <StartProjectButton label="Start Your Project" />
            <WhatsAppCtaButton city="Patna" service="Software Development" />
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
            Software development for Patna businesses — delivered remotely from New Delhi
          </h2>
          <div className="space-y-4 text-sm leading-7 text-slate-400">
            <p>
              NF Nexa Tech is a UDYAM-registered software development company based in Mahipalpur, New Delhi. We work with businesses in Patna, Bihar and across India — fully remotely, without any compromise in communication or quality.
            </p>
            <p>
              Patna has a growing startup ecosystem and a large number of education, healthcare, logistics, and service businesses that need digital tools. Whether you need a business website, a customer-facing app, or an internal management system, we build software that works for your specific business model.
            </p>
            <p>
              We&apos;ve built apps for education platforms, inventory management systems for retail businesses, hospital websites, and SaaS products for startup founders. Every project starts with a proper discovery call where we understand what you actually need — then we build it.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="border-t border-white/8 bg-slate-900/40 py-20">
        <div className="mx-auto w-[92%] max-w-5xl">
          <h2 className="mb-3 text-2xl font-bold text-white">Software Development Services in Patna</h2>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-400">
            We provide the following services to businesses in Patna, Bihar — all delivered remotely.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.link}
                className="group flex flex-col gap-3 rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition hover:border-cyan-400/20 hover:bg-white/[0.04]"
              >
                <span className="text-3xl">{s.icon}</span>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {s.title}
                </h3>
                <p className="flex-1 text-sm leading-6 text-slate-400">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 transition group-hover:gap-2">
                  Learn more
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW REMOTE WORKS ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-white">How remote development works</h2>
          <ol className="space-y-5">
            {[
              {
                step: "Discovery Call",
                desc: "We schedule a free 30-minute video call to understand your project — what you need, who it&apos;s for, and what success looks like. This call has zero obligation.",
              },
              {
                step: "Proposal",
                desc: "Within 48 hours we send a written scope, timeline, and fixed-price quote. No hourly billing surprises.",
              },
              {
                step: "Design & Development",
                desc: "We work in short cycles with regular WhatsApp and video call updates. You can review progress and provide feedback at every milestone.",
              },
              {
                step: "Delivery & Support",
                desc: "We deploy to your domain, hand over all source code and documentation, and provide 30 days of post-launch support included in every project.",
              },
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

      {/* ── WHY CHOOSE US ── */}
      <section className="border-t border-white/8 bg-slate-900/40 py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-white">Why businesses in Patna work with NF Nexa Tech</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "No geographic barrier", desc: "All communication happens through WhatsApp, video calls, and shared documents. We&apos;ve delivered projects for clients we&apos;ve never met in person." },
              { title: "Fixed-price quotes", desc: "You get a written scope and a fixed price before we start. No surprise invoices. No hourly billing." },
              { title: "Regular progress updates", desc: "You&apos;re never left wondering what&apos;s happening. We share updates at every milestone and respond quickly to messages." },
              { title: "Production-ready code", desc: "Every project is thoroughly tested, documented, and deployed properly — not patched together and handed over." },
              { title: "Post-launch support", desc: "30 days of included support after launch. If something breaks or needs adjustment, we fix it." },
              { title: "UDYAM-registered business", desc: "NF Nexa Tech is an officially registered MSME under UDYAM, Government of India — a verified Indian business entity." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
                <h3 className="mb-2 text-sm font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELEVANT PROJECTS ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <h2 className="mb-3 text-2xl font-bold text-white">Projects we&apos;ve built</h2>
          <p className="mb-8 text-sm leading-7 text-slate-400">
            These examples illustrate the type of work we do for businesses similar to those in Patna.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Organizer Classes",
                desc: "Education management platform for a coaching institute with 1,200+ students. Replaced all spreadsheet workflows with a web application — built with React and Firebase.",
                tags: ["Education", "Web App", "Firebase"],
                href: "/projects/organizer-classes",
              },
              {
                title: "Popular Bread",
                desc: "Android inventory and delivery management app for a bread business. Reduced nightly stock-count from 90 minutes to 8 minutes. Wastage dropped by 68%.",
                tags: ["Android", "Inventory", "Firebase"],
                href: "/projects/popular-bread",
              },
            ].map((proj) => (
              <Link
                key={proj.title}
                href={proj.href}
                className="group flex flex-col gap-3 rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition hover:border-cyan-400/20"
              >
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="flex-1 text-sm leading-6 text-slate-400">{proj.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((t) => (
                    <span key={t} className="rounded-md bg-white/[0.05] px-2 py-0.5 text-xs text-slate-400">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/projects" className="text-sm font-semibold text-cyan-400 hover:underline">
              View full portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-white/8 bg-slate-900/40 py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <h2 className="mb-10 text-2xl font-bold text-white">
            FAQs — Software Development in Patna
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
      <section className="py-16">
        <div className="mx-auto w-[92%] max-w-5xl">
          <h2 className="mb-4 text-lg font-bold text-white">We also serve businesses in</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Delhi / New Delhi", href: "/locations/delhi" },
              { label: "Darbhanga, Bihar", href: "/locations/darbhanga" },
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
      <section className="border-t border-white/8 bg-slate-900/40 py-20">
        <div className="mx-auto w-[92%] max-w-3xl rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Ready to start?
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white">
            Get a free quote for your Patna business
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-sm text-slate-400">
            Send us a message with a rough description of what you want to build. We respond the same day and provide a detailed proposal within 48 hours — no obligation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <StartProjectButton label="Start Your Project" />
            <WhatsAppCtaButton city="Patna" service="Software Development" />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCtas />
    </div>
  );
}
