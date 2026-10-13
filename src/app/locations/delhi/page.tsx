import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCtas from "@/components/FloatingCtas";
import { StartProjectButton, WhatsAppCtaButton } from "@/components/LocalSeoCtas";
import {
  PinIcon,
  WebDevIcon,
  WebAppIcon,
  UiUxIcon,
  BackendIcon,
  SaasIcon,
  MobileIcon,
} from "@/components/LocationPageIcons";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";

const ogImg = ogImage({
  title: "Website Development Company in Delhi",
  category: "📍 Mahipalpur, New Delhi",
  type: "page",
});

export const metadata: Metadata = {
  // Root layout template appends "| NF Nexa Tech" automatically.
  // Renders as: "Website Development Company in Delhi | NF Nexa Tech"
  title: "Website Development Company in Delhi",
  description:
    "NF Nexa Tech is a website development company based in Mahipalpur, New Delhi. We build business websites, web apps, and custom software for Delhi businesses. Call us for a free consultation.",
  alternates: {
    canonical: `${siteConfig.url}/locations/delhi`,
  },
  openGraph: {
    // OG tags do not use the template — include full brand explicitly.
    title: "Website Development Company in Delhi | NF Nexa Tech",
    description:
      "Web design and development company in Mahipalpur, New Delhi. Business websites, web apps, and custom software built for Delhi businesses.",
    url: `${siteConfig.url}/locations/delhi`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [ogImg],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nfnexatech",
    creator: "@nfnexatech",
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
    streetAddress: siteConfig.contact.streetAddress,
    addressLocality: siteConfig.contact.city,
    addressRegion: siteConfig.contact.state,
    postalCode: siteConfig.contact.postalCode,
    addressCountry: siteConfig.contact.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.lat,
    longitude: siteConfig.geo.lng,
  },
  areaServed: [
    { "@type": "City", name: "New Delhi" },
    { "@type": "City", name: "Delhi" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
    { "@type": "City", name: "Patna" },
    { "@type": "City", name: "Darbhanga" },
    { "@type": "City", name: "Jhanjharpur" },
    { "@type": "Country", name: "India" },
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
    Icon: WebDevIcon,
    title: "Business Websites",
    desc: "A clean, fast website that clearly explains what you do and makes it easy for customers to contact you. We build these for restaurants, clinics, service providers, consultants, and shops across Delhi.",
    link: "/services/web-development",
  },
  {
    Icon: WebAppIcon,
    title: "Web Applications",
    desc: "Custom platforms with user accounts, admin dashboards, booking systems, payment integration, or inventory management. Built properly from the start so they scale as your business grows.",
    link: "/services/web-development",
  },
  {
    Icon: UiUxIcon,
    title: "UI/UX Design",
    desc: "Design that actually makes sense to use. We design interfaces that guide visitors toward the action you want — whether that's a phone call, a booking, or a purchase.",
    link: "/services/ui-ux-design",
  },
  {
    Icon: BackendIcon,
    title: "Backend & API Development",
    desc: "If you need something that talks to other systems — a payment gateway, a delivery partner, a CRM, or an internal tool — we build the backend layer that makes it all work.",
    link: "/services/backend-api-development",
  },
  {
    Icon: SaasIcon,
    title: "SaaS & MVP Development",
    desc: "Have a product idea? We help founders in Delhi build their first version fast — with everything needed to start getting paying customers.",
    link: "/services/saas-mvp-development",
  },
  {
    Icon: MobileIcon,
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
    <div className="bg-white text-slate-900">
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
            <Link href="/locations/delhi" className="text-slate-500">Delhi</Link>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: copy */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-xs font-semibold text-teal-700">
                <PinIcon className="h-3.5 w-3.5" />
                Mahipalpur, New Delhi
              </div>

              <h1 className="mb-5 text-4xl font-extrabold leading-tight sm:text-5xl" style={{ background: 'linear-gradient(to right,#1FA0B1,#E8763A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Website Development<br />
                Company in{" "}
                Delhi
              </h1>

              <p className="mb-4 max-w-xl text-lg leading-relaxed text-slate-700">
                NF Nexa Tech is a software development company based in Mahipalpur, New Delhi. We build websites, web applications, and mobile apps for businesses across Delhi and the wider NCR.
              </p>

              <p className="mb-8 max-w-xl text-sm leading-7 text-slate-500">
                Whether you need a clean business website, a customer-facing web application, or a mobile app — we help you plan the right solution before development begins, and stay in communication throughout.
              </p>

              <div className="flex flex-wrap gap-3">
                <StartProjectButton label="Discuss Your Project" />
                <WhatsAppCtaButton city="Delhi" service="Website Development" />
              </div>
            </div>

            {/* Right: trust card */}
            <div className="hidden lg:block">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-md">
                <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-teal-600">At a glance</p>
                <ul className="space-y-4">
                  {[
                    { label: "Office", value: "Mahipalpur, New Delhi — 110037" },
                    { label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
                    { label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
                    { label: "Hours", value: siteConfig.businessHours[0].displayLabel },
                    { label: "Founded", value: siteConfig.foundedDate },
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

      {/* ── STATS BAR — mobile only (lg hero card already shows them) ── */}
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
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">About Us</p>
          <h2 className="mb-6 text-2xl font-bold text-slate-900">A software development team based in Delhi</h2>
          <div className="space-y-4 text-sm leading-7 text-slate-600">
            <p>
              We started NF Nexa Tech in October 2023. Our office is in Mahipalpur, New Delhi — five minutes from the IGI Airport metro station and close to Aerocity. We serve clients in Delhi NCR directly, and businesses across the rest of India remotely.
            </p>
            <p>
              Most of our clients come to us with one of two situations: they have no website and need to launch something credible, or they have an existing website that is slow, outdated, or not generating any business. Both are problems we work on regularly.
            </p>
            <p>
              We&apos;re a focused team. You&apos;ll deal with the same people from the first call to the final delivery — there&apos;s no handoff between sales and engineering. Every project starts with a discovery call where we understand the problem before we suggest a solution.
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
          <h2 className="mb-3 text-2xl font-bold text-slate-900">What we build</h2>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-500">
            Most projects fall into one of these categories. If yours doesn&apos;t fit neatly, describe what you&apos;re trying to achieve and we&apos;ll work out the right approach with you.
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

      {/* ── HOW WE WORK ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Our Process</p>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">How a project works</h2>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-500">
            From first contact to launch, here&apos;s what to expect when you work with us.
          </p>
          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Discovery call",
                body: "A free 30-minute call where we understand what you&apos;re trying to build, what problem it solves, and what your timeline and budget look like. No sales pitch — just a conversation.",
              },
              {
                step: "02",
                title: "Scope and proposal",
                body: "Within 48 hours, we send a written scope document covering what will be built, what&apos;s excluded, a timeline, and a fixed price. You review it, ask questions, and we adjust until it&apos;s accurate.",
              },
              {
                step: "03",
                title: "Design and development",
                body: "We design first and share mockups before writing code. Development happens in short cycles. You get access to a staging environment and can review progress at every stage.",
              },
              {
                step: "04",
                title: "Testing and launch",
                body: "Before launch, we test across devices and browsers, check performance, and fix anything that needs fixing. We handle the deployment. You get 30 days of post-launch support included.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-bold text-teal-600 ring-2 ring-teal-100">
                  {item.step}
                </div>
                <div className="pt-1">
                  <h3 className="mb-1.5 text-sm font-bold text-slate-800">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-500" dangerouslySetInnerHTML={{ __html: item.body.replace(/&apos;/g, "'") }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ── */}
      <section className="border-t border-slate-100 bg-slate-50 py-20">
        <div className="mx-auto w-[92%] max-w-3xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Clients</p>
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Who we work with</h2>
          <div className="space-y-4 text-sm leading-7 text-slate-600">
            <p>
              Most of our clients are small and medium businesses — clinics, coaching institutes, home service companies, restaurants, and e-commerce sellers. We&apos;ve also worked with founders building their first product.
            </p>
            <p>
              We don&apos;t require a large budget to start a conversation. A basic business website is a straightforward project. A custom web application takes longer and costs more. We&apos;ll always tell you the honest scope before you commit.
            </p>
            <p>
              Some real examples: <Link href="/projects/medon-company" className="text-teal-600 hover:underline">Medon Company</Link> — a service booking platform for home appliance repair in Delhi NCR. <Link href="/projects/nestiva-hospital" className="text-teal-600 hover:underline">Nestiva Hospital</Link> — a healthcare website with department pages and appointment CTAs. <Link href="/projects/organizer-classes" className="text-teal-600 hover:underline">Organizer Classes</Link> — a student management platform for a coaching institute with 1,200+ students.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Healthcare", "Education", "E-commerce", "Home Services", "Real Estate", "Food & Beverage", "Finance", "Logistics", "Fitness", "Legal", "EdTech", "SaaS"].map((tag) => (
              <span key={tag} className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Portfolio</p>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Selected projects</h2>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-500">
            A sample of the work we&apos;ve delivered. Full case studies are on the{" "}
            <Link href="/projects" className="text-teal-600 hover:underline">projects page</Link>.
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                category: "Local Business",
                title: "Medon Company",
                desc: "Service booking platform for a home appliance repair business in Delhi NCR. Location-specific landing pages, WhatsApp lead capture. Lighthouse performance score: 96/100.",
                tags: ["Next.js", "SEO", "Local SEO"],
                href: "/projects/medon-company",
              },
              {
                category: "Healthcare",
                title: "Nestiva Hospital",
                desc: "Multi-specialty hospital website with doctor discovery pages, department listings, appointment CTAs, and a clean layout designed for patients rather than administrators.",
                tags: ["Next.js", "Healthcare", "Web Design"],
                href: "/projects/nestiva-hospital",
              },
              {
                category: "Education",
                title: "Organizer Classes",
                desc: "Web application for a coaching institute managing 1,200+ students. Replaced spreadsheets with a single platform handling enrollments, fees, and communications.",
                tags: ["React", "Firebase", "Web App"],
                href: "/projects/organizer-classes",
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

      {/* ── AREAS SERVED ── */}
      <section className="border-t border-slate-100 bg-slate-50 py-16">
        <div className="mx-auto w-[92%] max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Coverage</p>
          <h2 className="mb-3 text-xl font-bold text-slate-900">Areas we serve in Delhi NCR</h2>
          <p className="mb-6 max-w-2xl text-sm leading-7 text-slate-500">
            Our office is in Mahipalpur. We work with clients across Delhi and the NCR. Most communication happens over WhatsApp and video call, so location within the city is rarely a barrier.
          </p>
          <div className="flex flex-wrap gap-2">
            {areasServed.map((area) => (
              <span key={area} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                {area}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="mb-3 text-sm font-bold text-slate-700">We also serve businesses across India — remotely</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Patna, Bihar", href: "/locations/patna" },
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
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16">
        <div className="mx-auto w-[92%] max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">FAQs</p>
          <h2 className="mb-8 text-2xl font-bold text-slate-900">Common questions</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {faqSchema.mainEntity.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-slate-200 bg-white shadow-sm transition-all open:border-teal-300 open:bg-teal-50/40"
              >
                <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-5 py-3.5 text-sm font-semibold text-slate-800 group-open:text-teal-700">
                  <span>{faq.name}</span>
                  {/* Chevron — rotates 180° when open */}
                  <svg
                    className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180 group-open:text-teal-500"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="border-t border-slate-100 px-5 pb-4 pt-3 text-sm leading-6 text-slate-500">
                  {faq.acceptedAnswer.text}
                </p>
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

