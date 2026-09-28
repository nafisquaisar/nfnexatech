import Link from "next/link";
import { servicesData } from "@/data/content";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const servicesOgImage = ogImage({
  title: "Our Services",
  category: "What We Do",
  type: "service",
});

export const metadata = {
  title: "Web & Software Development Services | NF Nexa Tech",
  description:
    "Web development, Android & Flutter app development, UI/UX design, backend APIs, and SaaS MVP development — built by a Delhi-based team for businesses across India.",
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: "Web & Software Development Services | NF Nexa Tech",
    description:
      "Web development, Android & Flutter apps, UI/UX design, and SaaS MVPs — built by a Delhi-based team for startups and businesses.",
    url: `${siteConfig.url}/services`,
    type: "website",
    images: [servicesOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & Software Development Services | NF Nexa Tech",
    description:
      "Web development, Android & Flutter apps, UI/UX design, and SaaS MVPs — built by a Delhi-based team.",
    images: [servicesOgImage.url],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
  ],
};

/* ── Card icons (real SVGs) ───────────────────────────────── */
const SERVICE_ICONS: Record<string, { svg: React.ReactNode; color: string; bg: string }> = {
  "web-development": {
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.08)",
    svg: <svg className="h-7 w-7" fill="none" stroke="#0ea5e9" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.729-3.56" /></svg>,
  },
  "android-app-development": {
    color: "#f97316",
    bg: "rgba(249,115,22,0.08)",
    svg: <svg className="h-7 w-7" fill="none" stroke="#f97316" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
  },
  "flutter-app-development": {
    color: "#ec4899",
    bg: "rgba(236,72,153,0.08)",
    svg: <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none"><path d="M14.314 0 3.098 11.216l3.394 3.394L17.708 3.394 14.314 0zm0 11.216L9.886 15.644l3.394 3.394 7.622-7.622-3.394-3.394-3.194 3.194z" fill="#ec4899" /><path d="m9.886 15.644 4.428 4.428L17.708 24l3.394-3.394-7.822-7.822-3.394 2.86z" fill="#ec4899" opacity=".7" /></svg>,
  },
  "ui-ux-design": {
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.08)",
    svg: <svg className="h-7 w-7" fill="none" stroke="#8b5cf6" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>,
  },
  "backend-api-development": {
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.08)",
    svg: <svg className="h-7 w-7" fill="none" stroke="#06b6d4" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg>,
  },
  "saas-mvp-development": {
    color: "#f43f5e",
    bg: "rgba(244,63,94,0.08)",
    svg: <svg className="h-7 w-7" fill="none" stroke="#f43f5e" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" /></svg>,
  },
};

export default function ServicesIndexPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F5", color: "#1a1a1a" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      {/* ── Background gradient blobs ── */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10" aria-hidden="true">
        <div className="absolute -top-32 -right-40 h-[700px] w-[700px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(236,72,153,0.15) 40%, transparent 70%)" }} />
        <div className="absolute top-1/3 -left-60 h-[600px] w-[600px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.3) 0%, rgba(139,92,246,0.1) 50%, transparent 70%)" }} />
        <div className="absolute bottom-20 right-1/4 h-[500px] w-[500px] rounded-full opacity-35"
          style={{ background: "radial-gradient(circle, rgba(20,184,166,0.3) 0%, rgba(249,115,22,0.1) 50%, transparent 70%)" }} />
      </div>

      {/* ── Header ── */}
      <header className="pb-12 pt-36 mx-auto max-w-5xl px-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="block h-px w-8" style={{ backgroundColor: "#f97316" }} />
          <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#f97316" }}>
            What we do
          </p>
        </div>
        <h1 className="mb-5 text-4xl font-extrabold leading-tight sm:text-5xl" style={{ color: "#1a1a1a" }}>
          Our <span style={{
            background: "linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Services</span>
        </h1>
        <p className="max-w-2xl text-base leading-relaxed" style={{ color: "#6B5A5A" }}>
          We build websites, web applications, mobile apps, and SaaS platforms for
          businesses across Delhi and India. Here&apos;s what we work on.
        </p>
      </header>

      {/* ── Service Cards ── */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((s: any, i: number) => {
            const iconData = SERVICE_ICONS[s.slug] ?? { color: "#f97316", bg: "rgba(249,115,22,0.08)", svg: null };
            const num = String(i + 1).padStart(2, "0");
            return (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative flex h-full flex-col gap-3 rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
                  style={{
                    borderColor: "rgba(198,209,215,0.4)",
                    backgroundColor: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Number badge */}
                  <span className="absolute right-4 top-4 text-[10px] font-bold"
                    style={{ color: "rgba(198,209,215,0.6)" }}>{num}</span>

                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: iconData.bg }}>
                    {iconData.svg}
                  </div>

                  {/* Title */}
                  <h2 className="text-base font-bold transition-colors duration-300 group-hover:[color:var(--hc)]"
                    style={{ color: "#1a1a1a", ["--hc" as string]: iconData.color } as React.CSSProperties}>
                    {s.title}
                  </h2>

                  {/* Tagline */}
                  <p className="flex-1 text-[13px] leading-relaxed" style={{ color: "#6B5A5A" }}>
                    {s.tagline}
                  </p>

                  {/* Link */}
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-300 group-hover:gap-2.5"
                    style={{ color: iconData.color }}>
                    Learn more
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

      </section>

      <Footer />
    </div>
  );
}
