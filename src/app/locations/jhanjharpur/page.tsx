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
  title: "Software Development Services in Jhanjharpur",
  category: "Jhanjharpur, Bihar",
  type: "page",
});

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  // Root layout appends "| NF Nexa Tech"
  // Final: "Software Development Services in Jhanjharpur | NF Nexa Tech"
  title: "Software Development Services in Jhanjharpur",
  description:
    "NF Nexa Tech is a Delhi-based software development company providing website development, Android apps, Flutter apps, and custom business software to businesses in Jhanjharpur, Bihar. Remote-first. Free consultation.",
  alternates: {
    canonical: `${siteConfig.url}/locations/jhanjharpur`,
  },
  openGraph: {
    title: "Software Development Services in Jhanjharpur | NF Nexa Tech",
    description:
      "Software development for businesses in Jhanjharpur, Bihar. Websites, Android apps, Flutter apps, and SaaS products — delivered remotely from New Delhi.",
    url: `${siteConfig.url}/locations/jhanjharpur`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [ogImg],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nfnexatech",
    creator: "@nfnexatech",
    title: "Software Development Services in Jhanjharpur | NF Nexa Tech",
    description:
      "Software development for businesses in Jhanjharpur, Bihar. Remote-first, Delhi-based team.",
    images: [ogImg.url],
  },
};

/* ── JSON-LD ──────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/locations/jhanjharpur#service`,
  name: "Software Development Services in Jhanjharpur",
  description:
    "NF Nexa Tech provides software development services — web development, Android app development, Flutter app development, UI/UX design, backend API development, and SaaS MVP development — to businesses in Jhanjharpur, Bihar.",
  url: `${siteConfig.url}/locations/jhanjharpur`,
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
    { "@type": "City", name: "Jhanjharpur" },
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
    { "@type": "ListItem", position: 3, name: "Jhanjharpur", item: `${siteConfig.url}/locations/jhanjharpur` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can businesses in Jhanjharpur hire NF Nexa Tech?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NF Nexa Tech works remotely with businesses in Jhanjharpur, Bihar. Our office is in Mahipalpur, New Delhi. We communicate via WhatsApp and video calls and have experience delivering projects for clients across Bihar.",
      },
    },
    {
      "@type": "Question",
      name: "Is NF Nexa Tech based in Jhanjharpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. NF Nexa Tech is headquartered in Mahipalpur, New Delhi, India. We do not have a physical office in Jhanjharpur. All services are delivered remotely.",
      },
    },
    {
      "@type": "Question",
      name: "What software can NF Nexa Tech build for a business in Jhanjharpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can build business websites, web applications, Android apps, Flutter apps for both Android and iOS, SaaS products, inventory management systems, booking platforms, and custom business software. The right solution depends on what your specific business needs — we discuss this in a free discovery call.",
      },
    },
    {
      "@type": "Question",
      name: "How does payment and contract work for a Jhanjharpur business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with a written agreement, fixed-price quotes, and milestone-based payments — typically 40% upfront, 30% at mid-project review, and 30% on delivery. Payment is via UPI, NEFT, or bank transfer. All standard Indian payment methods are accepted.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after the software is delivered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every project includes 30 days of free post-launch support. During this period, we fix any bugs, make minor adjustments, and ensure everything is running smoothly. For ongoing maintenance, we offer monthly retainer plans.",
      },
    },
  ],
};

/* ── Technology stack shown ───────────────────────────────── */
const techStack = [
  { name: "React & Next.js", desc: "Fast, SEO-friendly websites and web applications" },
  { name: "Kotlin (Android)", desc: "Native Android apps published to Google Play Store" },
  { name: "Flutter", desc: "Single codebase for Android and iOS apps" },
  { name: "Node.js & Firebase", desc: "Backend APIs, real-time databases, authentication" },
  { name: "Figma", desc: "Professional UI/UX design before development begins" },
  { name: "PostgreSQL & MongoDB", desc: "Relational and document databases for complex data" },
];

/* ── Page ─────────────────────────────────────────────────── */
export default function JhanjharpurPage() {
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
            <span className="text-slate-400">Jhanjharpur</span>
          </nav>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-300">
            📍 Serving Jhanjharpur, Bihar
          </div>

          <h1 className="mb-5 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Software Development Services for Businesses in Jhanjharpur
          </h1>
          <p className="mb-3 max-w-2xl text-lg leading-relaxed text-slate-300">
            NF Nexa Tech is based in Mahipalpur, New Delhi and serves businesses in Jhanjharpur remotely.
          </p>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-400">
            Businesses in smaller Bihar cities like Jhanjharpur often struggle to find reliable software development partners who understand their actual needs — not just sell a template and disappear. We work differently. Every project starts with understanding your business before writing any code.
          </p>

          <div className="flex flex-wrap gap-4">
            <StartProjectButton label="Start Your Project" />
            <WhatsAppCtaButton city="Jhanjharpur" service="Software Development" />
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
            Why businesses in Jhanjharpur need professional software — and what we build
          </h2>
          <div className="space-y-4 text-sm leading-7 text-slate-400">
            <p>
              Jhanjharpur is a rapidly growing commercial area with businesses in wholesale, retail, education, agriculture supply, and services. As local commerce grows, businesses face the same challenge that businesses everywhere face: manual processes that don&apos;t scale.
            </p>
            <p>
              A business that tracks inventory in notebooks, takes orders over phone calls, and handles customer records in spreadsheets has a ceiling. Software removes that ceiling — not by being complex, but by automating the repetitive parts so the business can focus on growth.
            </p>
            <p>
              NF Nexa Tech builds practical software for businesses at this stage. We don&apos;t over-engineer. We identify the single highest-impact problem and solve it first. Then we build from there.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="border-t border-white/8 bg-slate-900/40 py-20">
        <div className="mx-auto w-[92%] max-w-5xl">
          <h2 className="mb-3 text-2xl font-bold text-white">Software Development Services for Jhanjharpur</h2>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-400">
            All services available remotely to businesses in Jhanjharpur and surrounding areas of Madhubani district, Bihar.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🌐",
                title: "Business Website Development",
                desc: "A clear, fast website that explains what your business does and makes it easy for customers to contact you. Built with React/Next.js — mobile-first and optimised for search engines.",
                href: "/services/web-development",
              },
              {
                icon: "📱",
                title: "Android App Development",
                desc: "Custom Android apps for managing inventory, taking orders, tracking deliveries, or any other business operation that currently requires manual effort.",
                href: "/services/android-app-development",
              },
              {
                icon: "🦋",
                title: "Flutter App Development",
                desc: "If you need to reach both Android and iOS users, Flutter lets us build once and deploy to both platforms — reducing cost without reducing quality.",
                href: "/services/flutter-app-development",
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                desc: "Interface design that makes software easy to use for real people — not just technically correct. We design in Figma and hand off production-ready specifications.",
                href: "/services/ui-ux-design",
              },
              {
                icon: "⚙️",
                title: "Backend & API Development",
                desc: "Backend systems, databases, payment integration (Razorpay), WhatsApp Business API integrations, and third-party service connections.",
                href: "/services/backend-api-development",
              },
              {
                icon: "🚀",
                title: "SaaS & MVP Development",
                desc: "If you have a product idea, we help you build the first version quickly and correctly — with authentication, billing, and the core features needed to start getting customers.",
                href: "/services/saas-mvp-development",
              },
            ].map((s) => (
              <Link
                key={s.title}
                href={s.href}
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

      {/* ── TECH STACK ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-white">Technologies we use</h2>
          <p className="mb-8 text-sm leading-7 text-slate-400">
            We use modern, proven technologies with long-term support — not trendy frameworks that are obsolete in a year.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {techStack.map((t) => (
              <div key={t.name} className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3">
                <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs leading-5 text-slate-400">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REMOTE WORKFLOW ── */}
      <section className="border-t border-white/8 bg-slate-900/40 py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-white">Starting a project from Jhanjharpur</h2>
          <p className="mb-8 text-sm leading-7 text-slate-400">
            Getting started requires nothing more than a WhatsApp message or a project form submission. The full process:
          </p>
          <ol className="space-y-6">
            {[
              {
                step: "Contact us",
                desc: "Send a WhatsApp message or fill the project form on this site. Describe what you want to build — even a rough description is enough to start the conversation.",
              },
              {
                step: "Discovery call",
                desc: "We schedule a free 30-minute call — phone or video, whichever you prefer. We ask questions, you ask questions. We understand your business before suggesting any solution.",
              },
              {
                step: "Proposal",
                desc: "We send a written document: what we&apos;ll build, what it will cost, and when you&apos;ll receive it. Fixed price — no surprises. You agree before we start.",
              },
              {
                step: "Development with check-ins",
                desc: "We build in stages and share progress after each stage. You can test, review, and give feedback. Nothing gets locked in without your approval.",
              },
              {
                step: "Delivery",
                desc: "We launch, hand over source code, and include 30 days of post-launch support. You own everything we build.",
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

      {/* ── FAQ ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <h2 className="mb-10 text-2xl font-bold text-white">
            FAQs — Software Development in Jhanjharpur
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
              { label: "Darbhanga, Bihar", href: "/locations/darbhanga" },
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
            Get a free quote for your Jhanjharpur business
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-sm text-slate-400">
            Message us on WhatsApp or submit the project form. We respond the same day and send a written proposal within 48 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <StartProjectButton label="Start Your Project" />
            <WhatsAppCtaButton city="Jhanjharpur" service="Software Development" />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCtas />
    </div>
  );
}
