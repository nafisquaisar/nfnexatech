"use client";

import Link from "next/link";
import Image from "next/image";
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
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#155e75,_transparent_30%),radial-gradient(circle_at_bottom_right,_#7c3aed,_transparent_30%),linear-gradient(to_bottom,_#020617,_#0f172a)] pt-28"
    >
      {/* Grid Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      {/* Glow Effects */}
      <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-purple-500/20 blur-[140px]" />

      <div className="relative mx-auto grid min-h-[92vh] w-[92%] max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="relative z-10">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400/60" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Premium Digital Product Studio
            </p>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            We Build Software{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              That Scales
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            NF Nexa Tech delivers production-grade web apps,
            mobile apps, SaaS platforms, and scalable digital
            experiences for startups and businesses worldwide.
          </p>

          {/* Pills */}
          <div className="mt-7 flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur"
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-4">

            <Link
              href="/start-project"
              id="hero-start-project-btn"
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-4 text-sm font-bold text-white shadow-2xl shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.03]"
              onClick={() => trackEvent("cta_click", { label: "hero_start_project" })}
            >
              Start Your Project
            </Link>

            <a
              href="#projects"
              id="hero-view-work-btn"
              className="rounded-xl border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-bold text-slate-300 backdrop-blur transition hover:border-white/30 hover:text-white"
              onClick={() =>
                trackEvent("cta_click", {
                  label: "hero_view_work",
                })
              }
            >
              View Our Work →
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8">

            <div className="flex items-center gap-2">
              <div className="flex">
                {["AM", "PS", "RG"].map((initials) => (
                  <div
                    key={initials}
                    className="-ml-2 first:ml-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-950 bg-gradient-to-br from-cyan-500 to-purple-600 text-[10px] font-bold text-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  10+ happy clients
                </p>

                <p className="text-xs text-slate-500">
                  across India & internationally
                </p>
              </div>
            </div>

            <div className="hidden h-6 w-px bg-white/10 sm:block" />

            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}

              <span className="text-sm text-slate-400">
                5.0 · 15+ projects delivered
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex items-center justify-center isolate">

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-[140px]" />
          <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

          {/* Image */}
          <div className="relative flex items-center justify-center w-full">

            <Image
              src="/images/hero/nf-nexa-laptop6.png"
              alt="NF Nexa Tech Premium Laptop Showcase"
              width={4000}
              height={2500}
              priority
              className="
        relative z-10

        w-[140%]
        max-w-none

        lg:w-[160%]

        h-auto
        object-contain

        mix-blend-screen

        brightness-110
        contrast-125
        saturate-125

        drop-shadow-[0_0_90px_rgba(0,180,255,0.32)]

        transition-all
        duration-700
        hover:scale-[1.03]
      "
            />

          </div>
        </div>

      </div>

      {/* Bottom Fade */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950"
      />
    </section>
  );
}

export default Hero;