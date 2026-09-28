import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/content";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Static params ─────────────────────────────────────────── */
export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  const image = ogImage({ title: service.title, category: "Service", type: "service" });

  return {
    title: `${service.title} in Delhi | ${siteConfig.name}`,
    description: service.metaDescription,
    alternates: { canonical: `${siteConfig.url}/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ${siteConfig.name}`,
      description: service.metaDescription,
      images: [image.url],
    },
  };
}

/* ── Icon Map ──────────────────────────────────────────────── */
const ic = "h-5 w-5";
const ICONS = {
  check: <svg className={ic} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>,
  arrow: <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>,
  globe: <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.729-3.56" /></svg>,
  phone: <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
  flutter: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none"><path d="M14.314 0 3.098 11.216l3.394 3.394L17.708 3.394 14.314 0zm0 11.216L9.886 15.644l3.394 3.394 7.622-7.622-3.394-3.394-3.194 3.194z" fill="currentColor" /><path d="m9.886 15.644 4.428 4.428L17.708 24l3.394-3.394-7.822-7.822-3.394 2.86z" fill="currentColor" opacity=".7" /></svg>,
  paint: <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>,
  server: <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg>,
  rocket: <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" /></svg>,
};

const SERVICE_THEME: Record<string, { color: string; colorRgb: string; icon: keyof typeof ICONS }> = {
  "web-development":         { color: "#0ea5e9", colorRgb: "14,165,233",  icon: "globe" },
  "android-app-development": { color: "#f97316", colorRgb: "249,115,22",  icon: "phone" },
  "flutter-app-development": { color: "#ec4899", colorRgb: "236,72,153",  icon: "flutter" },
  "ui-ux-design":            { color: "#8b5cf6", colorRgb: "139,92,246",  icon: "paint" },
  "backend-api-development": { color: "#06b6d4", colorRgb: "6,182,212",   icon: "server" },
  "saas-mvp-development":    { color: "#f43f5e", colorRgb: "244,63,94",   icon: "rocket" },
};

/* ── Projects mapped per service ─────────────────────────── */
const SERVICE_PROJECTS: Record<string, { slug: string; title: string; subtitle: string; image: string; color: string; tech: string[] }[]> = {
  "web-development": [
    { slug: "nestiva-hospital",  title: "Nestiva Hospital",    subtitle: "Multi-Specialty Hospital Website",    image: "/images/projects/nestiva/home.png",         color: "#14b8a6", tech: ["Next.js", "React", "Tailwind CSS"] },
    { slug: "medon-company",     title: "Medon Company",       subtitle: "Appliance Repair & Service Website",  image: "/images/projects/medon/home.png",           color: "#06b6d4", tech: ["Next.js", "Tailwind CSS", "Firebase"] },
    { slug: "madza-company",     title: "Madza Company",       subtitle: "Home Services Platform",              image: "/images/projects/madzacompany/home.png",    color: "#06b6d4", tech: ["Next.js", "Tailwind CSS", "Firebase"] },
    { slug: "train-your-tech",   title: "Train Your Tech",     subtitle: "Placement Preparation Platform",      image: "/images/projects/trainyourtech/landing.png", color: "#a855f7", tech: ["React", "Spring Boot", "MySQL"] },
  ],
  "android-app-development": [
    { slug: "popular-bread",     title: "Popular Bread",       subtitle: "Bread Business Management App",       image: "/images/projects/popular/popular_preview.png",       color: "#f97316", tech: ["Android", "Firebase", "Hive"] },
    { slug: "tunelyf",           title: "TuneLyf",             subtitle: "Online & Local Music Player",         image: "/images/projects/tunelyf/tunelyf_preview.png",       color: "#8b5cf6", tech: ["Android", "Audius API"] },
    { slug: "organizer-classes", title: "Organizer Classes",   subtitle: "Online Learning & Exam Prep",         image: "/images/projects/organizer/organizer_preview.png",    color: "#f97316", tech: ["Android", "Razorpay"] },
    { slug: "small-steps",       title: "Small Steps",         subtitle: "Notes & Checklist App",               image: "/images/projects/smallstep/smallstep_preview.png",    color: "#14b8a6", tech: ["Android", "Local Storage"] },
  ],
  "flutter-app-development": [
    { slug: "kharcha-plus",      title: "Kharcha Plus",        subtitle: "Expense & Utility Management",        image: "/images/projects/kharchaplus/kharchaplus_preview.png", color: "#0f9f9a", tech: ["Flutter", "Riverpod", "Isar"] },
  ],
  "ui-ux-design": [
    { slug: "nestiva-hospital",  title: "Nestiva Hospital",    subtitle: "Healthcare Website Design",           image: "/images/projects/nestiva/home.png",         color: "#14b8a6", tech: ["Figma", "UI Design", "Tailwind CSS"] },
    { slug: "medon-company",     title: "Medon Company",       subtitle: "Service Website Design",              image: "/images/projects/medon/home.png",           color: "#06b6d4", tech: ["Figma", "UI Design"] },
    { slug: "madza-company",     title: "Madza Company",       subtitle: "Home Services Website Design",        image: "/images/projects/madzacompany/home.png",    color: "#06b6d4", tech: ["Figma", "UI Design"] },
  ],
  "backend-api-development": [
    { slug: "train-your-tech",   title: "Train Your Tech",     subtitle: "Spring Boot Backend",                 image: "/images/projects/trainyourtech/landing.png", color: "#a855f7", tech: ["Spring Boot", "MySQL", "Firebase"] },
    { slug: "popular-bread",     title: "Popular Bread",       subtitle: "Firebase Backend",                    image: "/images/projects/popular/popular_preview.png",       color: "#f97316", tech: ["Firebase", "Cloud Storage"] },
    { slug: "organizer-classes", title: "Organizer Classes",   subtitle: "Razorpay + Course Backend",           image: "/images/projects/organizer/organizer_preview.png",    color: "#f97316", tech: ["Firebase", "Razorpay"] },
  ],
  "saas-mvp-development": [
    { slug: "train-your-tech",   title: "Train Your Tech",     subtitle: "EdTech Platform MVP",                 image: "/images/projects/trainyourtech/landing.png", color: "#a855f7", tech: ["React", "Spring Boot", "MySQL"] },
  ],
};

/* ── Other service icons for bottom links ─────────────────── */
const OTHER_ICONS: Record<string, React.ReactNode> = {
  "web-development":         <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582" /></svg>,
  "android-app-development": <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
  "flutter-app-development": <svg className={ic} viewBox="0 0 24 24" fill="currentColor"><path d="M14.314 0 3.098 11.216l3.394 3.394L17.708 3.394 14.314 0zm0 11.216L9.886 15.644l3.394 3.394 7.622-7.622-3.394-3.394-3.194 3.194z" /><path d="m9.886 15.644 4.428 4.428L17.708 24l3.394-3.394-7.822-7.822-3.394 2.86z" opacity=".7" /></svg>,
  "ui-ux-design":            <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128z" /></svg>,
  "backend-api-development": <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3" /></svg>,
  "saas-mvp-development":    <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58" /></svg>,
};

/* ── Page ──────────────────────────────────────────────────── */
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const theme = SERVICE_THEME[slug] ?? { color: "#f97316", colorRgb: "249,115,22", icon: "globe" as const };
  const relatedProjects = SERVICE_PROJECTS[slug] ?? [];

  /* JSON-LD */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/services/${service.slug}#service`,
    name: service.title,
    description: service.metaDescription,
    url: `${siteConfig.url}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: [
      { "@type": "City", name: "New Delhi" },
      { "@type": "Country", name: "India" },
    ],
    serviceType: service.title,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Features`,
      itemListElement: service.features.map((f: string, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Service", name: f },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${siteConfig.url}/services/${service.slug}` },
    ],
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F5", color: "#1a1a1a" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10" aria-hidden="true">
        <div className="absolute -top-32 -right-40 h-[600px] w-[600px] rounded-full opacity-40"
          style={{ background: `radial-gradient(circle, rgba(${theme.colorRgb},0.3) 0%, transparent 70%)` }} />
        <div className="absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full opacity-25"
          style={{ background: `radial-gradient(circle, rgba(${theme.colorRgb},0.2) 0%, transparent 70%)` }} />
      </div>

      {/* ── HERO ── */}
      <header className="pb-16 pt-36 mx-auto max-w-5xl px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs" style={{ color: "#999" }}>
          <Link href="/" className="transition-colors hover:text-[#1a1a1a]">Home</Link>
          <span>›</span>
          <Link href="/services" className="transition-colors hover:text-[#1a1a1a]">Services</Link>
          <span>›</span>
          <span style={{ color: theme.color }}>{service.title}</span>
        </nav>

        <div className="flex items-start gap-5 mb-6">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl"
            style={{ backgroundColor: `rgba(${theme.colorRgb},0.1)`, color: theme.color }}>
            {ICONS[theme.icon]}
          </div>
          <div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl" style={{ color: "#1a1a1a" }}>
              {service.title}
            </h1>
            <p className="mt-2 text-lg" style={{ color: "#6B5A5A" }}>{service.tagline}</p>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-base leading-8" style={{ color: "#6B5A5A" }}>
          {service.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/start-project"
            className="rounded-xl px-7 py-3 text-sm font-bold text-white transition-all hover:brightness-110 hover:shadow-lg"
            style={{ backgroundColor: theme.color }}>
            {service.cta}
          </Link>
          <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer"
            className="rounded-xl border px-7 py-3 text-sm font-bold transition-all hover:shadow-sm"
            style={{ borderColor: "rgba(198,209,215,0.5)", color: "#1a1a1a", backgroundColor: "white" }}>
            WhatsApp Us
          </a>
        </div>
      </header>

      {/* ── FEATURES ── */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="block h-px w-8" style={{ backgroundColor: theme.color }} />
            <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: theme.color }}>What&apos;s included</p>
          </div>
          <h2 className="text-2xl font-bold" style={{ color: "#1a1a1a" }}>Features & Capabilities</h2>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {service.features.map((f: string) => (
            <li key={f}
              className="flex items-start gap-3 rounded-xl border px-5 py-4 transition-all hover:shadow-sm"
              style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "rgba(255,255,255,0.7)" }}>
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: `rgba(${theme.colorRgb},0.1)`, color: theme.color }}>
                {ICONS.check}
              </span>
              <span className="text-sm" style={{ color: "#4a4a4a" }}>{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-16" style={{ backgroundColor: "rgba(255,255,255,0.5)" }}>
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="block h-px w-8" style={{ backgroundColor: theme.color }} />
              <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: theme.color }}>How we work</p>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "#1a1a1a" }}>Our Process</h2>
          </div>
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p: any, i: number) => (
              <li key={p.step} className="relative rounded-xl border p-5"
                style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                <span className="mb-3 block text-3xl font-extrabold" style={{ color: `rgba(${theme.colorRgb},0.15)` }}>
                  0{i + 1}
                </span>
                <h3 className="mb-2 text-base font-bold" style={{ color: "#1a1a1a" }}>{p.step}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#6B5A5A" }}>{p.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── RELATED PROJECTS ── */}
      {relatedProjects.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="block h-px w-8" style={{ backgroundColor: theme.color }} />
              <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: theme.color }}>Our work</p>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "#1a1a1a" }}>
              {service.title} Projects
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {relatedProjects.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`}
                className="group overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
                style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                <div className="relative h-48 overflow-hidden" style={{ backgroundColor: `rgba(${theme.colorRgb},0.05)` }}>
                  <Image src={p.image} alt={p.title} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
                <div className="p-5">
                  <h3 className="mb-1 text-base font-bold transition-colors duration-300"
                    style={{ color: "#1a1a1a" }}>{p.title}</h3>
                  <p className="mb-3 text-[13px]" style={{ color: "#6B5A5A" }}>{p.subtitle}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-md border px-2 py-0.5 text-[10px] font-medium"
                        style={{ borderColor: "rgba(198,209,215,0.4)", color: "#6B5A5A" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── OTHER SERVICES ── */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="block h-px w-8" style={{ backgroundColor: theme.color }} />
            <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: theme.color }}>More services</p>
          </div>
          <h2 className="text-2xl font-bold" style={{ color: "#1a1a1a" }}>Explore Other Services</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData
            .filter((s) => s.slug !== service.slug)
            .map((s) => {
              const st = SERVICE_THEME[s.slug];
              return (
                <Link key={s.slug} href={`/services/${s.slug}`}
                  className="group flex items-center gap-3 rounded-xl border px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "rgba(255,255,255,0.7)" }}>
                  <span style={{ color: st?.color ?? "#999" }}>{OTHER_ICONS[s.slug]}</span>
                  <span className="text-sm font-medium transition-colors" style={{ color: "#1a1a1a" }}>{s.title}</span>
                  <span className="ml-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ color: st?.color ?? "#999" }}>{ICONS.arrow}</span>
                </Link>
              );
            })}
        </div>
      </section>


      <Footer />
    </div>
  );
}
