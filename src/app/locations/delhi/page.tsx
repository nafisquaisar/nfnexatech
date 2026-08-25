import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCtas from "@/components/FloatingCtas";
import { StartProjectButton, WhatsAppCtaButton } from "@/components/LocalSeoCtas";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";

const ogImg = ogImage({
  title: "Website Development Company in Delhi",
  category: "📍 Mahipalpur, New Delhi",
  type: "page",
});

export const metadata: Metadata = {
  title: "Website Development Company in Delhi | NF Nexa Tech",
  description:
    "NF Nexa Tech is a website development company based in Mahipalpur, New Delhi. We build business websites, web apps, and custom software for Delhi businesses. Call us for a free consultation.",
  alternates: {
    canonical: `${siteConfig.url}/locations/delhi`,
  },
  openGraph: {
    title: "Website Development Company in Delhi | NF Nexa Tech",
    description:
      "Web design and development company in Mahipalpur, New Delhi. Business websites, web apps, and custom software built for Delhi businesses.",
    url: `${siteConfig.url}/locations/delhi`,
    type: "website",
    images: [ogImg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Delhi | NF Nexa Tech",
    description:
      "Web design and development company in Mahipalpur, New Delhi. Business websites, web apps, and custom software for Delhi businesses.",
    images: [ogImg.url],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/locations/delhi#localbusiness`,
  name: siteConfig.name,
  description:
    "Website design and development company based in Mahipalpur, New Delhi. We build business websites, web applications, and custom software for businesses across Delhi NCR.",
  url: `${siteConfig.url}/locations/delhi`,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Flat 301, Janki Hari Niwas, Block B, Bengali Market, Mahipalpur",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110037",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5357,
    longitude: 77.1199,
  },
  areaServed: [
    { "@type": "City", name: "New Delhi" },
    { "@type": "City", name: "Delhi" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
  ],
  priceRange: "₹₹",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Delhi", item: `${siteConfig.url}/locations/delhi` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is NF Nexa Tech located in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our office is in Mahipalpur, New Delhi — near Aerocity and IGI Airport. We work with clients across Delhi, Gurgaon, Noida, and the wider NCR region.",
      },
    },
    {
      "@type": "Question",
      name: "What does a business website cost in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A clean, professional business website typically costs between ₹25,000 and ₹80,000 depending on the number of pages, design complexity, and features like contact forms or a portfolio section. A web application or customer-facing platform with a backend starts from ₹1.5 lakh. We provide a detailed quote after a free discovery call.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard business website takes 2–4 weeks. A web application with user accounts, dashboards, or payment integration typically takes 6–10 weeks. We agree on a timeline upfront and share progress updates throughout.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only work with large companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. Most of our clients are small and medium businesses — shops, clinics, coaching institutes, restaurants, service providers. We've also worked with funded startups. The budget and scope vary, but we treat every project the same way.",
      },
    },
    {
      "@type": "Question",
      name: "Can you redesign an existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you already have a website but it's slow, looks outdated, or isn't generating enquiries, we can rebuild it properly. We assess the current site first and discuss whether a redesign or a full rebuild makes more sense for your situation.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Send us a WhatsApp message or fill out the contact form. We respond the same day. We'll schedule a free 30-minute call to understand what you need and then share a proposal within 48 hours.",
      },
    },
  ],
};

const services = [
  {
    icon: "🌐",
    title: "Business Websites",
    desc: "A clean, fast website that clearly explains what you do and makes it easy for customers to contact you. We build these for restaurants, clinics, service providers, consultants, and shops across Delhi.",
    link: "/services/web-development",
  },
  {
    icon: "🛒",
    title: "Web Applications",
    desc: "Custom platforms with user accounts, admin dashboards, booking systems, payment integration, or inventory management. Built properly from the start so they scale as your business grows.",
    link: "/services/web-development",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Design that actually makes sense to use. We design interfaces that guide visitors toward the action you want — whether that's a phone call, a booking, or a purchase.",
    link: "/services/ui-ux-design",
  },
  {
    icon: "⚙️",
    title: "Backend & API Development",
    desc: "If you need something that talks to other systems — a payment gateway, a delivery partner, a CRM, or an internal tool — we build the backend layer that makes it all work.",
    link: "/services/backend-api-development",
  },
  {
    icon: "🚀",
    title: "SaaS & MVP Development",
    desc: "Have a product idea? We help founders in Delhi build their first version fast — with everything needed to start getting paying customers.",
    link: "/services/saas-mvp-development",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "Android apps built natively in Kotlin, or cross-platform apps using Flutter for both Android and iOS. We've shipped apps to the Play Store that are actively used.",
    link: "/services/android-app-development",
  },
];

const areasServed = [
  "Mahipalpur", "Vasant Kunj", "Aerocity", "Dwarka", "Janakpuri",
  "South Delhi", "Saket", "Hauz Khas", "Lajpat Nagar", "Greater Kailash",
  "Noida", "Gurgaon", "Faridabad",
];

export default function DelhiPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
            <span className="text-slate-400">Delhi</span>
          </nav>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-300">
            📍 Mahipalpur, New Delhi
          </div>

          <h1 className="mb-5 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Website Development Company in Delhi
          </h1>

          <p className="mb-4 max-w-2xl text-lg leading-relaxed text-slate-300">
            We build websites and web applications for businesses in Delhi. Our office is in Mahipalpur — a 10-minute drive from Aerocity and Vasant Kunj.
          </p>

          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-400">
            We've built websites for hospitals, coaching institutes, service businesses, and SaaS startups. If you need something that actually works — loads fast, looks good on mobile, and brings in enquiries — talk to us.
          </p>

          <div className="flex flex-wrap gap-4">
            <StartProjectButton label="Discuss Your Project" />
            <WhatsAppCtaButton city="Delhi" service="Website Development" />
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

      {/* ── ABOUT SECTION — conversational, not generic ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-white">
            A web development team based in Delhi
          </h2>
          <div className="space-y-4 text-sm leading-7 text-slate-400">
            <p>
              NF Nexa Tech is based in Mahipalpur, New Delhi. We work with businesses across Delhi — from small shops and clinics that need a basic website, to funded startups that need a full web platform with a backend.
            </p>
            <p>
              Most of our clients come to us because they either have no website, or they have one that isn't doing anything useful for them. We've rebuilt websites for businesses where the previous site was five years old, not mobile-friendly, and generating zero enquiries. After a rebuild, things change.
            </p>
            <p>
              We're a small team. You'll talk to the same person throughout the project — not be passed between account managers. Every project gets a proper discovery call, a written scope, and regular updates.
            </p>
            <p>
              If you're looking for the cheapest possible option, we're probably not the right fit. If you want something built properly that holds up over time, let's talk.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="text-sm text-slate-400">
              <span className="font-semibold text-slate-200">Based at:</span> Flat 301, Janki Hari Niwas, Block B, Bengali Market, Mahipalpur, New Delhi — 110037
            </p>
            <p className="mt-2 text-sm text-slate-400">
              <span className="font-semibold text-slate-200">Phone:</span>{" "}
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-cyan-300 transition">
                {siteConfig.contact.phone}
              </a>
              {" "}·{" "}
              <a href={`tel:${siteConfig.contact.phone2}`} className="hover:text-cyan-300 transition">
                {siteConfig.contact.phone2}
              </a>
            </p>
            <p className="mt-2 text-sm text-slate-400">
              <span className="font-semibold text-slate-200">Email:</span>{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-cyan-300 transition">
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="border-t border-white/8 bg-slate-900/40 py-20">
        <div className="mx-auto w-[92%] max-w-5xl">
          <h2 className="mb-3 text-2xl font-bold text-white">What we build</h2>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-400">
            Most projects fall into one of these categories. If yours doesn't, describe it and we'll figure out the right approach together.
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

      {/* ── WHO WE WORK WITH ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-white">Who we work with</h2>
          <div className="space-y-4 text-sm leading-7 text-slate-400">
            <p>
              We've worked with hospitals, coaching classes, bakery chains, home service companies, fitness centres, and EdTech startups. The industry doesn't matter as much as having a clear idea of what you need.
            </p>
            <p>
              If you already have a website but it's slow, difficult to update, or not generating enquiries, we can rebuild it without starting everything from scratch. We'll review what's there first and tell you honestly whether a redesign makes sense or whether it's better to rebuild.
            </p>
            <p>
              If you're a startup with an app idea and need an MVP to show to investors or early users, we've done that too — the Organizer Classes platform, TuneLyf music app, and Train Your Tech SaaS platform were all built here.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Healthcare", "Education", "E-commerce", "Food & Beverage", "Real Estate", "Finance", "Logistics", "Home Services", "Fitness & Wellness", "Legal"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AREAS SERVED ── */}
      <section className="border-t border-white/8 bg-slate-900/40 py-16">
        <div className="mx-auto w-[92%] max-w-5xl">
          <h2 className="mb-4 text-xl font-bold text-white">Areas we serve in Delhi NCR</h2>
          <p className="mb-6 max-w-2xl text-sm leading-7 text-slate-400">
            We're based in Mahipalpur and work with clients across Delhi and the wider NCR. Most project communication happens remotely over WhatsApp and video call — location is rarely a barrier.
          </p>
          <div className="flex flex-wrap gap-2">
            {areasServed.map((area) => (
              <span
                key={area}
                className="rounded-lg border border-white/8 bg-white/[0.02] px-4 py-2 text-sm text-slate-300"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT EXAMPLES ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-5xl">
          <h2 className="mb-3 text-2xl font-bold text-white">Some projects we've built</h2>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-400">
            These give you an idea of the kind of work we do. Full case studies are on the{" "}
            <Link href="/#projects" className="text-cyan-400 hover:underline">projects page</Link>.
          </p>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Medon Company",
                desc: "Service booking platform for a home appliance repair business in Delhi NCR. Location-specific landing pages, WhatsApp lead capture, 96/100 Lighthouse score.",
                tags: ["Next.js", "SEO", "Local Business"],
                href: "/projects/medon-company",
              },
              {
                title: "Nestiva Hospital",
                desc: "Healthcare website for a multi-specialty hospital. Doctor discovery, department pages, appointment CTAs, and a patient-focused layout.",
                tags: ["Next.js", "Healthcare", "Web Design"],
                href: "/projects/nestiva-hospital",
              },
              {
                title: "Organizer Classes",
                desc: "Education management platform for a coaching institute with 1,200+ students. Replaced all spreadsheet workflows with a single web application.",
                tags: ["React", "Firebase", "Web App"],
                href: "/#projects",
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
                    <span key={t} className="rounded-md bg-white/[0.05] px-2 py-0.5 text-xs text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-white/8 bg-slate-900/40 py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <h2 className="mb-10 text-2xl font-bold text-white">
            Common questions
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
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-3xl rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Let&apos;s talk
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white">
            Tell us what you need
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-sm leading-7 text-slate-400">
            Send us a message with a rough description of what you want to build. We&apos;ll respond the same day and schedule a free call to discuss details — no obligation, no sales pitch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <StartProjectButton label="Start Your Project" />
            <Link
              href="/#contact"
              className="rounded-xl border border-white/15 px-7 py-3 text-sm font-bold text-slate-300 transition hover:border-white/30"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCtas />
    </div>
  );
}
