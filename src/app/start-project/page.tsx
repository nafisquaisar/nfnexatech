import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StartProjectForm from "./StartProjectForm";

/* ── SEO metadata ────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Start Your Project",
  description:
    "Tell us about your project. NF Nexa Tech builds web apps, mobile apps, and SaaS MVPs — get a free consultation and proposal within 48 hours.",
  alternates: { canonical: `${siteConfig.url}/start-project` },
  openGraph: {
    title: "Start Your Project | NF Nexa Tech",
    description:
      "Tell us about your project and get a free consultation within 48 hours.",
    url: `${siteConfig.url}/start-project`,
    type: "website",
  },
};

/* ── Page ────────────────────────────────────────────────── */
export default function StartProjectPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      {/* ── Hero ── */}
      <header className="relative overflow-hidden pb-10 pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/8 blur-[120px]"
        />

        <div className="relative mx-auto w-[92%] max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            🚀 Start Your Project
          </div>
          <h1 className="mb-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              extraordinary
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400">
            Share your project details and we&apos;ll get back to you with a
            tailored proposal within 48 hours — no commitment required.
          </p>
        </div>
      </header>

      {/* ── Form + Sidebar ── */}
      <div className="mx-auto w-[92%] max-w-6xl pb-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Form (client component) */}
          <StartProjectForm />

          {/* Sidebar */}
          <div className="space-y-5">
            {/* What happens next */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                What happens next
              </p>
              <ol className="space-y-3">
                {[
                  ["📩", "We review your brief within 4 hours"],
                  ["📞", "Free 30-min discovery call scheduled"],
                  ["📋", "Detailed proposal & timeline delivered"],
                  ["🚀", "Project kickoff on your timeline"],
                ].map(([icon, text], i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-slate-400"
                  >
                    <span className="mt-0.5 text-base">{icon}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Direct contact */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Prefer to reach out directly?
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:text-white"
                >
                  <span className="text-xl">📞</span>
                  {siteConfig.contact.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:text-white"
                >
                  <span className="text-xl">✉️</span>
                  {siteConfig.contact.email}
                </a>
                <a
                  href={`${siteConfig.social.whatsapp}?text=${encodeURIComponent("Hi NF Nexa Tech! I have a project I'd like to discuss.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-[#25D366]/20 bg-[#25D366]/5 px-4 py-3 text-sm font-semibold text-[#25D366] transition hover:border-[#25D366]/40 hover:bg-[#25D366]/10"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us Now
                </a>
              </div>
            </div>

            {/* Trust badges */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Why NF Nexa Tech
              </p>
              <ul className="space-y-3">
                {[
                  "15+ projects delivered successfully",
                  "100% on-time delivery record",
                  "Full-stack: Web, Mobile, SaaS",
                  "Free 30-min discovery call",
                  "30-day post-launch support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-slate-400"
                  >
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-cyan-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
