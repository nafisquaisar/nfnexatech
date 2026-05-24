"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

const SERVICES = [
  "Web Applications",
  "Android Apps",
  "Flutter Apps",
  "SaaS MVPs",
  "UI/UX Design",
  "Backend APIs",
];

function Hero() {
  const openCalendly = () => {
    trackEvent("cta_click", { label: "hero_book_call" });
    window.dispatchEvent(new CustomEvent("open-calendly"));
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#155e75,_transparent_30%),radial-gradient(circle_at_bottom_right,_#7c3aed,_transparent_30%),linear-gradient(to_bottom,_#020617,_#0f172a)] pt-32"
    >
      {/* Animated grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="relative mx-auto flex min-h-[88vh] w-[92%] max-w-6xl flex-col items-start justify-center">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-cyan-400/60" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Premium Digital Product Studio
          </p>
        </div>

        {/* H1 */}
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          We Build Software{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            That Scales
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
          NF Nexa Tech delivers production-grade web apps, mobile apps, and
          SaaS products — built in India, trusted internationally.
        </p>

        {/* Service pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-400"
            >
              {s}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {/* Primary: Book a call */}
          <button
            onClick={openCalendly}
            id="hero-book-call-btn"
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition-all hover:opacity-90 hover:-translate-y-0.5"
          >
            <svg
              aria-hidden
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Book Free Consultation
          </button>

          {/* Secondary: View work */}
          <a
            href="#projects"
            id="hero-view-work-btn"
            className="rounded-xl border border-white/15 px-7 py-3.5 text-sm font-bold text-slate-300 transition hover:border-white/30 hover:text-white"
            onClick={() => trackEvent("cta_click", { label: "hero_view_work" })}
          >
            View Our Work →
          </a>
        </div>

        {/* Social proof strip */}
        <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/8 pt-8">
          <div className="flex items-center gap-2">
            <div className="flex">
              {["AM", "PS", "RG"].map((initials) => (
                <div
                  key={initials}
                  className="-ml-2 first:ml-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-950 bg-gradient-to-br from-cyan-500 to-purple-600 text-[10px] font-bold text-white"
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold text-white">10+ happy clients</p>
              <p className="text-[10px] text-slate-500">across India &amp; internationally</p>
            </div>
          </div>

          <div className="hidden h-6 w-px bg-white/10 sm:block" />

          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className="h-3.5 w-3.5 text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-slate-400">5.0 · 15+ projects delivered</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/60"
      />
    </section>
  );
}

export default Hero;
