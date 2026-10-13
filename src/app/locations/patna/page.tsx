import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCtas from "@/components/FloatingCtas";
import { StartProjectButton, WhatsAppCtaButton } from "@/components/LocalSeoCtas";
import {
  PinIcon,
  WebDevIcon,
  AndroidIcon,
  FlutterIcon,
  UiUxIcon,
  BackendIcon,
  SaasIcon,
} from "@/components/LocationPageIcons";

/* ── OG image ─────────────────────────────────────────────── */
const ogImg = ogImage({
  title: "Software Development Company in Patna",
  category: "Patna, Bihar",
  type: "page",
});

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Software Development Company in Patna",
  description:
    "NF Nexa Tech provides software development services to businesses in Patna, Bihar. Based in Mahipalpur, New Delhi, we build websites, Android apps, Flutter apps, and custom software — delivered remotely with regular communication.",
  alternates: {
    canonical: `${siteConfig.url}/locations/patna`,
  },
  openGraph: {
    title: "Software Development Company in Patna | NF Nexa Tech",
    description:
      "Website development, Android apps, Flutter apps, and custom software for businesses in Patna, Bihar. Delhi-based team. Remote delivery.",
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
      "Software development for businesses in Patna, Bihar. Delhi-based team, remote delivery.",
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
      name: "Does NF Nexa Tech provide software development services in Patna?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NF Nexa Tech works with businesses in Patna and across Bihar. Our office is in Mahipalpur, New Delhi, and we serve Patna clients fully remotely — with project discussions, design reviews and progress updates handled online.",
      },
    },
    {
      "@type": "Question",
      name: "Is NF Nexa Tech physically located in Patna?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our office is in Mahipalpur, New Delhi. We do not have a physical office in Patna, but we work with Patna businesses remotely. All project communication takes place over WhatsApp, video calls, and shared documentation.",
      },
    },
    {
      "@type": "Question",
      name: "What types of websites can you build for a Patna business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build business websites, service landing pages, e-commerce websites, web applications with admin dashboards, and customer portals. The right type depends on what your business needs — we discuss this during an initial call before recommending a solution.",
      },
    },
    {
      "@type": "Question",
      name: "Can you develop Android apps and custom business software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We develop native Android applications and cross-platform apps using Flutter. We also build custom software — such as inventory systems, management dashboards, and internal tools — depending on the project's requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How does remote collaboration work for Patna clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We share a written scope before starting, work in development stages, and provide regular progress updates. You can review the work and give feedback at each stage. Communication happens primarily over WhatsApp and video call.",
      },
    },
    {
      "@type": "Question",
      name: "How can I request a project estimate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill in the project form on the Start Project page or send us a WhatsApp message. Describe what you want to build and what problem it needs to solve. We'll review your requirements and discuss the right approach.",
      },
    },
    {
      "@type": "Question",
      name: "What should I prepare before starting a software project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It helps to have a basic idea of what the software should do, who will use it, and what problem it solves. You don't need a technical specification — we help structure the requirements during the initial discussion. Any reference examples, competitor links, or existing workflows you can share are useful.",
      },
    },
  ],
};

/* ── Services data ────────────────────────────────────────── */
const services = [
  {
    Icon: WebDevIcon,
    title: "Website & Web App Development",
    desc: "Business websites, service landing pages, e-commerce platforms, and web applications with user accounts and admin dashboards. Built with React and Next.js.",
    link: "/services/web-development",
  },
  {
    Icon: AndroidIcon,
    title: "Android App Development",
    desc: "Native Android applications for customer-facing features, internal business workflows, inventory management, and booking systems — built in Kotlin.",
    link: "/services/android-app-development",
  },
  {
    Icon: FlutterIcon,
    title: "Flutter App Development",
    desc: "Cross-platform mobile apps that run on both Android and iOS from a single codebase — a practical choice when you need to reach both platforms.",
    link: "/services/flutter-app-development",
  },
  {
    Icon: UiUxIcon,
    title: "UI/UX Design",
    desc: "User flows, wireframes and interface designs that help people understand and use a product without unnecessary complexity. Designed in Figma.",
    link: "/services/ui-ux-design",
  },
  {
    Icon: BackendIcon,
    title: "Backend & API Development",
    desc: "Backend services, databases, authentication systems, payment gateway integration, and connections between different platforms — according to project requirements.",
    link: "/services/backend-api-development",
  },
  {
    Icon: SaasIcon,
    title: "SaaS & MVP Development",
    desc: "A working first version of a software product with the core features needed to test the idea and gather real feedback. Built to be extended rather than thrown away.",
    link: "/services/saas-mvp-development",
  },
];

/* ── Page ─────────────────────────────────────────────────── */
export default function PatnaPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-slate-50 pb-20 pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_#0d948814_1px,transparent_1px)] bg-[size:28px_28px]"
        />
        <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-teal-300/10 blur-3xl" />

        <div className="relative mx-auto w-[92%] max-w-5xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-teal-600 transition">Home</Link>
            <span aria-hidden>›</span>
            <Link href="/locations/delhi" className="hover:text-teal-600 transition">Locations</Link>
            <span aria-hidden>›</span>
            <span className="text-slate-500">Patna</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: copy */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-xs font-semibold text-teal-700">
                <PinIcon className="h-3.5 w-3.5" />
                Serving Patna, Bihar
              </div>

              <h1 className="mb-5 text-4xl font-extrabold leading-tight sm:text-5xl" style={{ background: 'linear-gradient(to right,#1FA0B1,#E8763A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Software Development<br />
                Services for Businesses<br />
                in Patna
              </h1>

              <p className="mb-4 max-w-xl text-lg leading-relaxed text-slate-700">
                NF Nexa Tech helps businesses in Patna build websites, mobile apps, and custom software. Based in Mahipalpur, New Delhi, we work remotely with clients in Patna and across Bihar.
              </p>

              <p className="mb-8 max-w-xl text-sm leading-7 text-slate-500">
                Whether you want to bring your business online, simplify day-to-day operations, or turn a product idea into a working application, we help you plan a solution around your actual requirements before development begins.
              </p>

              <div className="flex flex-wrap gap-3">
                <StartProjectButton label="Discuss Your Project" />
                <WhatsAppCtaButton city="Patna" service="Software Development" />
              </div>
            </div>

            {/* Right: trust card */}
            <div className="hidden lg:block">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-md">
                <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-teal-600">At a glance</p>
                <ul className="space-y-4">
                  {[
                    { label: "Office", value: "Mahipalpur, New Delhi — 110037" },
                    { label: "Serves", value: "Patna, Bihar and across India" },
                    { label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
                    { label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
                    { label: "Hours", value: siteConfig.businessHours[0].displayLabel },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3 text-sm">
                      <span className="w-14 shrink-0 font-semibold text-slate-500">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="text-teal-600 hover:underline">{item.value}</a>
                      ) : (
                        <span className="text-slate-700">{item.value}</span>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                  {siteConfig.stats.map((stat, i) => (
                    <div key={stat.label} className="flex-1 rounded-xl bg-slate-50 px-3 py-2 text-center">
                      <p className={`text-xl font-extrabold ${i % 2 === 0 ? "text-teal-600" : "text-orange-500"}`}>{stat.value}</p>
                      <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR — mobile only ── */}
      <section className="border-y border-slate-100 bg-slate-50 lg:hidden">
        <div className="mx-auto w-[92%] max-w-5xl">
          <ul className="grid grid-cols-2 divide-x divide-slate-100">
            {siteConfig.stats.map((stat, i) => (
              <li key={stat.label} className="flex flex-col items-center gap-1 px-4 py-5 text-center">
                <span className={`text-2xl font-extrabold ${i % 2 === 0 ? "text-teal-600" : "text-orange-500"}`}>
                  {stat.value}
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-slate-400">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">About</p>
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Software development for Patna businesses — delivered remotely
          </h2>
          <div className="space-y-4 text-sm leading-7 text-slate-600">
            <p>
              Businesses in Patna have different technology requirements. A coaching institute may need a platform to manage student records, fees, and communications. A clinic may need a website that helps patients find the right doctor and book an appointment. A retail business may need an inventory app to track stock across multiple locations.
            </p>
            <p>
              The right solution depends on how your business works today and what you want to improve. NF Nexa Tech starts every project by understanding the actual requirements before suggesting a website, mobile app, or custom software solution.
            </p>
            <p>
              We are based in Mahipalpur, New Delhi and serve clients in Patna fully remotely. Project communication happens over WhatsApp, video calls, and shared documents. We&apos;ve delivered projects for clients across Bihar and across India without any geographic barrier affecting the quality of communication or delivery.
            </p>
          </div>

          <div className="mt-8 grid gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 sm:grid-cols-3">
            {[
              { label: "Office", value: `${siteConfig.contact.streetAddress}, ${siteConfig.contact.city}, ${siteConfig.contact.postalCode}` },
              { label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
              { label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
            ].map((item) => (
              <div key={item.label}>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm font-medium text-teal-600 hover:underline">{item.value}</a>
                ) : (
                  <p className="text-sm text-slate-700">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="border-t border-slate-100 bg-slate-50 py-20">
        <div className="mx-auto w-[92%] max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Services</p>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Software Development Services in Patna</h2>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-500">
            We provide the following services to businesses in Patna and Bihar — all delivered remotely.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link
                key={s.title}
                href={s.link}
                className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-300 hover:shadow-md"
              >
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl transition group-hover:scale-105 ${i % 2 === 0 ? "bg-teal-50 text-teal-600" : "bg-orange-50 text-orange-500"}`}>
                  <s.Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{s.title}</h3>
                <p className="flex-1 text-sm leading-6 text-slate-500">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-600 transition group-hover:gap-2">
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
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Clients</p>
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Who we work with</h2>
          <div className="space-y-4 text-sm leading-7 text-slate-600">
            <p>
              Most of our clients are small and medium businesses — coaching institutes, clinics, retail shops, service companies, and founders building software products. We&apos;ve also worked with NGOs and education organisations.
            </p>
            <p>
              You don&apos;t need a large budget to start a conversation. The scope depends on what your business needs. A basic business website is a straightforward project. A custom management system with mobile and web components takes more time and planning. We&apos;ll discuss the right scope honestly before you commit.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Education & Coaching", "Healthcare & Clinics", "Retail & E-commerce", "Home Services", "Food & Beverage", "Logistics", "Finance", "EdTech & SaaS"].map((tag) => (
              <span key={tag} className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW REMOTE WORKS ── */}
      <section className="border-t border-slate-100 bg-slate-50 py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Our Process</p>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">How remote development works</h2>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-500">
            Here&apos;s what to expect from the first conversation to delivery.
          </p>
          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Share your requirements",
                body: "Tell us what you want to build, which problem you want to solve, and who will use it. You can send a WhatsApp message or fill in the project form — no technical specification required.",
              },
              {
                step: "02",
                title: "Discuss the approach",
                body: "We review your requirements, clarify important details, and discuss a suitable technical approach — whether that's a website, mobile app, web application, or something else.",
              },
              {
                step: "03",
                title: "Review the written scope",
                body: "You receive a written document covering what will be built, what is excluded, the estimated timeline, and the price. You can ask questions and we adjust until the scope is accurate.",
              },
              {
                step: "04",
                title: "Design and development",
                body: "We design first and share screens before writing code. Development happens in stages with regular updates. You can review and give feedback at each stage.",
              },
              {
                step: "05",
                title: "Testing and delivery",
                body: "We test across devices, fix issues, and handle the deployment. Source code and documentation are handed over along with the working product.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-bold text-teal-600 ring-2 ring-teal-100">
                  {item.step}
                </div>
                <div className="pt-1">
                  <h3 className="mb-1.5 text-sm font-bold text-slate-800">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-500">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Why us</p>
          <h2 className="mb-8 text-2xl font-bold text-slate-900">Why businesses in Patna work with NF Nexa Tech</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Remote collaboration without compromise",
                desc: "All communication happens through WhatsApp, video calls, and shared documents. Location has not been a barrier on any project we have delivered.",
              },
              {
                title: "Written scope before we start",
                desc: "You receive a written scope document covering what will be built, what is excluded, and the timeline — before development begins.",
              },
              {
                title: "Regular progress updates",
                desc: "We share updates at each development stage and respond to questions promptly. You know what is being built and when to expect it.",
              },
              {
                title: "Solutions based on requirements",
                desc: "We discuss your actual business requirements before recommending a technical approach. We don't upsell features that aren't needed.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="mb-2 text-sm font-bold text-slate-800">{item.title}</h3>
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
            Examples of the work we&apos;ve delivered. Full case studies are on the{" "}
            <Link href="/projects" className="text-teal-600 hover:underline">projects page</Link>.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                category: "Education",
                title: "Organizer Classes",
                desc: "A web application built for a coaching institute to manage students, fees, attendance, and communications — replacing spreadsheet-based workflows with a single platform.",
                tags: ["React", "Firebase", "Web App"],
                href: "/projects/organizer-classes",
              },
              {
                category: "Food & Beverage",
                title: "Popular Bread",
                desc: "An Android inventory and delivery management application for a bread manufacturing business. Built to track daily production, stock, and deliveries.",
                tags: ["Android", "Kotlin", "Firebase"],
                href: "/projects/popular-bread",
              },
              {
                category: "Healthcare",
                title: "Nestiva Hospital",
                desc: "A multi-specialty hospital website with department pages, doctor listings, appointment CTAs, and a layout designed for patients navigating healthcare services.",
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

      {/* ── FAQ ── */}
      <section className="py-16">
        <div className="mx-auto w-[92%] max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">FAQs</p>
          <h2 className="mb-8 text-2xl font-bold text-slate-900">FAQs — Software Development in Patna</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {faqSchema.mainEntity.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-slate-200 bg-white shadow-sm transition-all open:border-teal-300 open:bg-teal-50/40"
              >
                <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-5 py-3.5 text-sm font-semibold text-slate-800 group-open:text-teal-700">
                  <span>{faq.name}</span>
                  <svg className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180 group-open:text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="border-t border-slate-100 px-5 pb-4 pt-3 text-sm leading-6 text-slate-500">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER LOCATIONS ── */}
      <section className="border-t border-slate-100 bg-slate-50 py-14">
        <div className="mx-auto w-[92%] max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Locations</p>
          <h2 className="mb-4 text-lg font-bold text-slate-900">We also serve businesses in</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Delhi / New Delhi", href: "/locations/delhi" },
              { label: "Darbhanga, Bihar", href: "/locations/darbhanga" },
              { label: "Jhanjharpur, Bihar", href: "/locations/jhanjharpur" },
            ].map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="rounded-lg border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 transition hover:bg-teal-100"
              >
                {loc.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCtas />
    </div>
  );
}
