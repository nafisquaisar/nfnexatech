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
  title: "Software Development Services in Jhanjharpur",
  category: "Jhanjharpur, Bihar",
  type: "page",
});

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Software Development Services in Jhanjharpur",
  description:
    "NF Nexa Tech provides software development services to businesses in Jhanjharpur, Bihar. Based in Mahipalpur, New Delhi, we build websites, Android apps, Flutter apps, and custom software — delivered remotely.",
  alternates: {
    canonical: `${siteConfig.url}/locations/jhanjharpur`,
  },
  openGraph: {
    title: "Software Development Services in Jhanjharpur | NF Nexa Tech",
    description:
      "Website development, Android apps, Flutter apps, and custom software for businesses in Jhanjharpur, Bihar. Delhi-based team. Remote delivery.",
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
      "Software development for businesses in Jhanjharpur, Bihar. Delhi-based team, remote delivery.",
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
      name: "Does NF Nexa Tech serve businesses in Jhanjharpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NF Nexa Tech provides software development services remotely to businesses in Jhanjharpur and across Bihar. Our office is in Mahipalpur, New Delhi. All project work is handled through WhatsApp, video calls, and written documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Is NF Nexa Tech physically located in Jhanjharpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our office is in Mahipalpur, New Delhi. We do not have a physical presence in Jhanjharpur. We serve Jhanjharpur businesses entirely remotely — the process is structured so location is not a barrier.",
      },
    },
    {
      "@type": "Question",
      name: "What types of websites and software can you build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build business websites, web applications, Android apps, cross-platform Flutter apps, and custom software such as management systems and internal tools. The right solution depends on your business requirements, which we discuss before recommending anything.",
      },
    },
    {
      "@type": "Question",
      name: "Can we work together remotely from Jhanjharpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All project communication, design reviews and progress updates happen remotely. We share a written scope before starting, work in stages, and provide updates throughout. You can review and give feedback at each stage without any need to travel.",
      },
    },
    {
      "@type": "Question",
      name: "How can I request a project estimate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Send a WhatsApp message or fill in the project form on the Start Project page. Describe what you want to build and the problem it needs to solve. We will review your requirements and discuss the approach before providing an estimate.",
      },
    },
    {
      "@type": "Question",
      name: "What should I prepare before discussing a project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A basic idea of what you want to build, who will use it, and what problem it needs to solve is enough to start. You don't need a technical specification. Reference examples, competitor links, or any existing workflows you want to improve are helpful to share.",
      },
    },
  ],
};

/* ── Services ─────────────────────────────────────────────── */
const services = [
  {
    Icon: WebDevIcon,
    title: "Website & Web App Development",
    desc: "Business websites, service pages, e-commerce platforms, and web applications with user accounts and admin dashboards. Built with React and Next.js.",
    link: "/services/web-development",
  },
  {
    Icon: AndroidIcon,
    title: "Android App Development",
    desc: "Native Android applications for customer-facing features, inventory management, booking systems, and internal business workflows — built in Kotlin.",
    link: "/services/android-app-development",
  },
  {
    Icon: FlutterIcon,
    title: "Flutter App Development",
    desc: "Cross-platform apps for Android and iOS from a single codebase — a practical option when you need to reach users on both platforms.",
    link: "/services/flutter-app-development",
  },
  {
    Icon: UiUxIcon,
    title: "UI/UX Design",
    desc: "User flows, wireframes, and interface designs created in Figma — designed so people can use your product without friction, with developer handoff included.",
    link: "/services/ui-ux-design",
  },
  {
    Icon: BackendIcon,
    title: "Backend & API Development",
    desc: "Backend services, databases, authentication systems, payment integrations, and connections between platforms — built according to each project's specific requirements.",
    link: "/services/backend-api-development",
  },
  {
    Icon: SaasIcon,
    title: "SaaS & MVP Development",
    desc: "A working first version of a software product built around core features — structured to gather real user feedback and be extended over time.",
    link: "/services/saas-mvp-development",
  },
];

/* ── Page ─────────────────────────────────────────────────── */
export default function JhanjharpurPage() {
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
            <span className="text-slate-500">Jhanjharpur</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: copy */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-xs font-semibold text-teal-700">
                <PinIcon className="h-3.5 w-3.5" />
                Serving Jhanjharpur, Bihar
              </div>

              <h1
                className="mb-5 text-4xl font-extrabold leading-tight sm:text-5xl"
                style={{ background: "linear-gradient(to right,#1FA0B1,#E8763A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                Software Development<br />
                Services for Businesses<br />
                in Jhanjharpur
              </h1>

              <p className="mb-4 max-w-xl text-lg leading-relaxed text-slate-700">
                NF Nexa Tech is based in Mahipalpur, New Delhi, and works remotely with businesses in Jhanjharpur and across Bihar. We build websites, mobile apps, and custom software to help businesses improve their online presence and manage everyday work more effectively.
              </p>

              <p className="mb-8 max-w-xl text-sm leading-7 text-slate-500">
                Whether you want a website for your business, an app for a specific workflow, or a custom digital product, we&apos;ll first understand your requirements and discuss a practical approach.
              </p>

              <div className="flex flex-wrap gap-3">
                <StartProjectButton label="Discuss Your Project" />
                <WhatsAppCtaButton city="Jhanjharpur" service="Software Development" />
              </div>
            </div>

            {/* Right: trust card */}
            <div className="hidden lg:block">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-md">
                <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-teal-600">At a glance</p>
                <ul className="space-y-4">
                  {[
                    { label: "Office", value: "Mahipalpur, New Delhi — 110037" },
                    { label: "Serves", value: "Jhanjharpur, Bihar and across India" },
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
            Software development for Jhanjharpur businesses — delivered remotely
          </h2>
          <div className="space-y-4 text-sm leading-7 text-slate-600">
            <p>
              Businesses in Jhanjharpur, like those across small and medium towns in Bihar, often need practical digital tools — a website that explains what they do and lets customers get in touch, an app that replaces a paper-based process, or a platform that manages customers, bookings, or inventory.
            </p>
            <p>
              NF Nexa Tech approaches every project by first understanding the business — what it does, how it works today, and what needs to improve. We suggest a technical solution only after that conversation, and we build only what will genuinely help.
            </p>
            <p>
              We are based in Mahipalpur, New Delhi. All communication with clients in Jhanjharpur happens over WhatsApp and video calls. No travel is required at any stage of the project.
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
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Software Development Services in Jhanjharpur</h2>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-500">
            All services are available remotely to businesses in Jhanjharpur and Bihar.
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

      {/* ── USE CASES ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Use Cases</p>
          <h2 className="mb-6 text-2xl font-bold text-slate-900">What software can help with</h2>
          <div className="space-y-4 text-sm leading-7 text-slate-600">
            <p>
              <strong className="text-slate-800">Coaching institutes and schools</strong> often need a platform where students or parents can find course information, check schedules, or pay fees — rather than managing everything through phone calls and paper records.
            </p>
            <p>
              <strong className="text-slate-800">Retail and trading businesses</strong> may benefit from a simple inventory app to track stock and deliveries, or an online presence that lets customers browse products and place orders.
            </p>
            <p>
              <strong className="text-slate-800">Clinics and healthcare providers</strong> typically need a credible website with clear information — doctor profiles, services offered, and a way for patients to book an appointment or get in touch.
            </p>
            <p>
              <strong className="text-slate-800">Local service businesses</strong> — whether repair shops, logistics companies, or home service providers — can benefit from a simple website or landing page that explains what they do and makes it easy for customers to contact them.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Education & Coaching", "Healthcare & Clinics", "Retail & Trading", "Home Services", "Logistics", "Food & Beverage", "SaaS & Startups"].map((tag) => (
              <span key={tag} className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                {tag}
              </span>
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
                desc: "A web application for a coaching institute to manage students, fee records, attendance, and communications — replacing spreadsheet-based workflows with one platform.",
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
                desc: "A hospital website with doctor listings, department pages, and appointment CTAs — designed for patients navigating healthcare information online.",
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

      {/* ── PROCESS ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Our Process</p>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">How we work with clients in Jhanjharpur</h2>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-500">
            From the first message to delivery — here is what the process looks like.
          </p>
          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Share your requirements",
                body: "Send a WhatsApp message or fill in the project form. Describe what you want to build and the problem it needs to solve. A plain description is enough — no technical document required.",
              },
              {
                step: "02",
                title: "Discuss the approach",
                body: "We review your requirements and discuss the most suitable technical approach — a website, mobile app, web application, or something else. We clarify scope and ask questions before proposing anything.",
              },
              {
                step: "03",
                title: "Written scope and proposal",
                body: "You receive a written document covering what will be built, what is excluded, the estimated timeline, and the cost. This is agreed and confirmed before development begins.",
              },
              {
                step: "04",
                title: "Design and development",
                body: "We design the interfaces first and share them for review before writing code. Development happens in stages, with updates at each milestone. You review and give feedback throughout.",
              },
              {
                step: "05",
                title: "Testing and handover",
                body: "We test across devices and handle deployment. Source code and documentation are handed over along with the finished product.",
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

      {/* ── FAQ ── */}
      <section className="border-t border-slate-100 bg-slate-50 py-16">
        <div className="mx-auto w-[92%] max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">FAQs</p>
          <h2 className="mb-8 text-2xl font-bold text-slate-900">FAQs — Software Development in Jhanjharpur</h2>
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
      <section className="py-14">
        <div className="mx-auto w-[92%] max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Locations</p>
          <h2 className="mb-4 text-lg font-bold text-slate-900">We also serve businesses in</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Delhi / New Delhi", href: "/locations/delhi" },
              { label: "Patna, Bihar", href: "/locations/patna" },
              { label: "Darbhanga, Bihar", href: "/locations/darbhanga" },
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
