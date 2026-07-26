"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   Reveal wrapper — consistent with existing case study pattern
───────────────────────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section anchor wrapper
───────────────────────────────────────────────────────────── */
function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 pb-20 ${className}`}>
      {children}
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section heading — matches MedonCaseStudyClient SH component
───────────────────────────────────────────────────────────── */
function SH({
  label,
  title,
  color,
}: {
  label: string;
  title: string;
  color: string;
}) {
  return (
    <Reveal>
      <div className="mb-10">
        <p
          className="mb-2 text-xs font-semibold uppercase tracking-[0.22em]"
          style={{ color }}
        >
          {label}
        </p>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <div className="mt-3 h-px w-16" style={{ background: color }} />
      </div>
    </Reveal>
  );
}

/* ─────────────────────────────────────────────────────────────
   Lightbox — identical to MedonCaseStudyClient
───────────────────────────────────────────────────────────── */
function CaseLightbox({
  isOpen,
  src,
  label,
  onClose,
}: {
  isOpen: boolean;
  src: string;
  label: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-black/92 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
        >
          <motion.div
            className="relative my-10 w-[92%] max-w-5xl"
            initial={{ scale: 0.94, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-2xl border border-white/20 shadow-2xl shadow-black/80">
              <div className="flex items-center gap-3 border-b border-white/10 bg-slate-900 px-4 py-2.5">
                <button
                  onClick={onClose}
                  className="h-3 w-3 rounded-full bg-red-500 transition-colors hover:bg-red-400"
                />
                <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-[11px] text-slate-400">{label}</span>
              </div>
              <div className="bg-slate-950">
                <Image
                  src={src}
                  alt={label}
                  width={1440}
                  height={900}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  priority
                />
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-slate-500">
              Click outside or press Esc to close
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────────────────────
   Browser frame — matches MedonCaseStudyClient BrowserFrame
───────────────────────────────────────────────────────────── */
function BrowserFrame({
  src,
  alt,
  url = "nestiva-hospital.com",
}: {
  src: string;
  alt: string;
  url?: string;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  return (
    <>
      <div
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/12 shadow-2xl shadow-black/60 transition-all duration-300 hover:border-white/25 hover:shadow-black/80"
        onClick={() => setLightboxOpen(true)}
      >
        {/* Chrome bar */}
        <div className="flex items-center gap-3 border-b border-white/10 bg-slate-900/90 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="flex flex-1 items-center gap-1.5 rounded-md border border-white/10 bg-slate-800/60 px-3 py-1">
            <svg
              className="h-2.5 w-2.5 text-green-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="truncate text-[10px] text-slate-300">{url}</span>
          </div>
          <svg
            className="h-3.5 w-3.5 text-slate-500 transition-colors group-hover:text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {/* Full screenshot */}
        <div className="relative bg-slate-950">
          <Image
            src={src}
            alt={alt}
            width={1440}
            height={900}
            style={{ width: "100%", height: "auto", display: "block" }}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="transition-transform duration-500 group-hover:scale-[1.015]"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
            <span className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
              Open Full Screenshot
            </span>
          </div>
        </div>
      </div>
      <CaseLightbox
        isOpen={lightboxOpen}
        src={src}
        label={alt}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   Nav items for sidebar
───────────────────────────────────────────────────────────── */
const navItems = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "The Challenge" },
  { id: "approach", label: "Our Approach" },
  { id: "features", label: "Key Features" },
  { id: "experience", label: "The Experience" },
  { id: "ux-decisions", label: "UX Decisions" },
  { id: "results", label: "The Result" },
  { id: "tech", label: "Tech & Delivery" },
  { id: "cta", label: "Start a Project" },
];

/* ─────────────────────────────────────────────────────────────
   MAIN CLIENT COMPONENT
───────────────────────────────────────────────────────────── */
export default function NestivaHospitalCaseStudyClient({ data }: { data: any }) {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrolled, setScrolled] = useState(false);

  const {
    color,
    colorRgb,
    title,
    headline,
    subtitle,
    categoryFull,
    liveUrl,
    meta,
    services,
    overview,
    challenge,
    approach,
    features,
    screenshots,
    uxDecisions,
    results,
    techDelivery,
    tagline,
  } = data;

  /* Track active section via IntersectionObserver */
  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => obs.observe(s!));
    return () => obs.disconnect();
  }, []);

  /* Navbar shadow on scroll */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* ── Sticky top navbar ── */}
      <nav
        className={`sticky top-0 z-50 border-b border-white/5 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/95 shadow-lg shadow-black/40 backdrop-blur-xl"
            : "bg-slate-950/80 backdrop-blur-lg"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H6.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L6.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            Back to Portfolio
          </Link>
          <div className="hidden items-center gap-1 sm:flex">
            <span
              className="rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-widest"
              style={{
                color,
                borderColor: `rgba(${colorRgb},0.4)`,
                background: `rgba(${colorRgb},0.1)`,
              }}
            >
              Healthcare
            </span>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-xs font-bold text-white transition-all duration-300 hover:brightness-110"
                style={{
                  background: `rgba(${colorRgb},0.25)`,
                  border: `1px solid rgba(${colorRgb},0.5)`,
                }}
              >
                Visit Website ↗
              </a>
            )}
            <Link
              href="/#contact"
              className="flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-xs font-bold text-slate-300 transition-all duration-300 hover:text-white"
              style={{
                border: `1px solid rgba(255,255,255,0.1)`,
              }}
            >
              Start a Project
            </Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 xl:grid-cols-[260px_1fr]">

          {/* ── STICKY SIDEBAR ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-20 pt-16">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Case Study
              </p>
              <h3 className="mb-6 text-sm font-bold text-white">{title}</h3>

              {/* Nav links */}
              <nav className="flex flex-col gap-0.5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-250"
                      style={{
                        color: isActive ? "white" : "rgb(100,116,139)",
                        background: isActive
                          ? `rgba(${colorRgb},0.12)`
                          : "transparent",
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 flex-shrink-0 rounded-full transition-all duration-300"
                        style={{
                          background: isActive
                            ? color
                            : "rgba(100,116,139,0.5)",
                          transform: isActive ? "scale(1.4)" : "scale(1)",
                        }}
                      />
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="nestiva-sidebar-active"
                          className="ml-auto h-4 w-0.5 rounded-full"
                          style={{ background: color }}
                        />
                      )}
                    </a>
                  );
                })}
              </nav>

              {/* Quick meta */}
              <div className="mt-8 space-y-3 border-t border-white/8 pt-6">
                {meta.slice(0, 4).map((m: any) => (
                  <div key={m.label} className="flex items-start gap-2.5">
                    <span className="text-sm">{m.icon}</span>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
                        {m.label}
                      </p>
                      <p className="text-xs font-medium text-slate-300">
                        {m.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Live site link in sidebar */}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold text-white transition-all duration-300 hover:brightness-110"
                  style={{
                    background: `linear-gradient(135deg, rgba(${colorRgb},0.4), rgba(${colorRgb},0.2))`,
                    border: `1px solid rgba(${colorRgb},0.5)`,
                  }}
                >
                  Visit Live Site ↗
                </a>
              )}
              {/* Healthcare CTA in sidebar */}
              <Link
                href="/#contact"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold text-slate-300 transition-all duration-300 hover:text-white"
                style={{
                  border: `1px solid rgba(255,255,255,0.1)`,
                }}
              >
                Start Healthcare Project →
              </Link>
            </div>
          </aside>

          {/* ── MAIN CONTENT ── */}
          <main className="pb-24 pt-12">

            {/* ── HERO ── */}
            <Reveal>
              <header className="mb-16">
                {/* Category eyebrow */}
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span
                    className="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                    style={{
                      color,
                      borderColor: `rgba(${colorRgb},0.4)`,
                      background: `rgba(${colorRgb},0.1)`,
                    }}
                  >
                    {categoryFull}
                  </span>
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 underline decoration-dotted hover:text-teal-400 transition-colors"
                    >
                      nestivahospital.vercel.app ↗
                    </a>
                  )}
                </div>

                {/* Title */}
                <h1 className="mb-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                  {title}
                </h1>

                {/* Tagline */}
                <p
                  className="mb-3 text-sm font-semibold uppercase tracking-widest"
                  style={{ color }}
                >
                  {tagline}
                </p>

                {/* Headline */}
                <p className="mb-4 max-w-2xl text-xl font-medium text-slate-200 sm:text-2xl">
                  {headline}
                </p>

                {/* Description */}
                <p className="mb-8 max-w-2xl text-base leading-8 text-slate-400">
                  {subtitle}
                </p>

                {/* Services badges */}
                <div className="flex flex-wrap gap-2">
                  {services.map((s: string) => (
                    <span
                      key={s}
                      className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Hero CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/#contact"
                    className="rounded-xl px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:brightness-110"
                    style={{
                      background: `linear-gradient(135deg, rgba(${colorRgb},0.8), rgba(${colorRgb},0.5))`,
                      border: `1px solid rgba(${colorRgb},0.6)`,
                    }}
                  >
                    Start a Healthcare Project
                  </Link>
                  <a
                    href="#experience"
                    className="rounded-xl border border-white/15 bg-white/5 px-7 py-3 text-sm font-bold text-slate-300 transition-all duration-300 hover:border-white/30 hover:text-white"
                  >
                    Explore the Experience
                  </a>
                </div>
              </header>
            </Reveal>

            {/* ── HERO SCREENSHOT ── */}
            <Reveal delay={0.1}>
              <div className="mb-16">
                <BrowserFrame
                  src={screenshots[0].src}
                  alt="Nestiva Hospital website homepage designed by NF Nexa Tech"
                />
              </div>
            </Reveal>

            {/* ── META CARDS ── */}
            <Reveal delay={0.05}>
              <div className="mb-16 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {meta.map((m: any) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 backdrop-blur-sm"
                  >
                    <span className="text-xl">{m.icon}</span>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      {m.label}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-200">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* ── PROJECT OVERVIEW ── */}
            <Section id="overview">
              <SH
                label="Project Overview"
                title="Project Overview"
                color={color}
              />
              <Reveal>
                <p className="text-base leading-8 text-slate-400">{overview}</p>
              </Reveal>
            </Section>

            {/* ── THE CHALLENGE ── */}
            <Section id="challenge">
              <SH
                label={challenge.heading}
                title="The Challenge"
                color={color}
              />
              <Reveal>
                <p className="mb-8 text-base leading-8 text-slate-400">
                  {challenge.body}
                </p>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {challenge.points.map((p: any, i: number) => (
                  <Reveal key={p.number} delay={0.06 * i}>
                    <div
                      className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                      style={{ borderColor: `rgba(${colorRgb},0.12)` }}
                    >
                      <span
                        className="mb-3 block text-3xl font-black"
                        style={{ color: `rgba(${colorRgb},0.4)` }}
                      >
                        {p.number}
                      </span>
                      <h3 className="mb-2 font-bold text-white">{p.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-400">
                        {p.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── OUR APPROACH ── */}
            <Section id="approach">
              <SH
                label={approach.heading}
                title="Our Approach"
                color={color}
              />
              <Reveal>
                <p className="mb-8 text-base leading-8 text-slate-400">
                  {approach.intro}
                </p>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {approach.points.map((p: any, i: number) => (
                  <Reveal key={p.title} delay={0.05 * i}>
                    <div
                      className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                      style={{ borderColor: `rgba(${colorRgb},0.1)` }}
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <span className="text-2xl">{p.icon}</span>
                        <h3 className="font-bold text-white">{p.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-400">
                        {p.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── KEY FEATURES ── */}
            <Section id="features">
              <SH label="Feature Showcase" title="Key Features" color={color} />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((f: any, i: number) => (
                  <Reveal key={f.title} delay={0.04 * i}>
                    <div
                      className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                      style={{ borderColor: `rgba(${colorRgb},0.1)` }}
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <span className="text-2xl">{f.icon}</span>
                        <h3 className="font-bold text-white">{f.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-400">
                        {f.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── THE EXPERIENCE (Design Showcase) ── */}
            <Section id="experience">
              <SH
                label="THE EXPERIENCE"
                title="A Patient-First Healthcare Experience"
                color={color}
              />

              <div className="space-y-16">
                {screenshots.map((s: any, i: number) => {
                  const isLeft = s.position === "left";
                  return (
                    <Reveal key={s.src} delay={0.06}>
                      <div
                        className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                          isLeft ? "" : "lg:[&>*:first-child]:order-2"
                        }`}
                      >
                        {/* Image */}
                        <div>
                          <BrowserFrame
                            src={s.src}
                            alt={`Nestiva Hospital — ${s.label}`}
                          />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-4">
                          <p
                            className="font-mono text-xs font-bold"
                            style={{ color }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </p>
                          <h3 className="text-xl font-bold text-white sm:text-2xl">
                            {s.label}
                          </h3>
                          <div
                            className="h-px w-12"
                            style={{ background: color }}
                          />
                          <p className="text-base leading-relaxed text-slate-400">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </Section>

            {/* ── UX DECISIONS ── */}
            <Section id="ux-decisions">
              <SH
                label="Design Thinking"
                title="Designing Around Patient Intent"
                color={color}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {uxDecisions.map((u: any, i: number) => (
                  <Reveal key={u.title} delay={0.06 * i}>
                    <div
                      className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                      style={{ borderColor: `rgba(${colorRgb},0.1)` }}
                    >
                      <span className="mt-0.5 text-2xl">{u.icon}</span>
                      <div>
                        <h3 className="mb-1 font-bold text-white">{u.title}</h3>
                        <p className="text-sm leading-relaxed text-slate-400">
                          {u.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── THE RESULT ── */}
            <Section id="results">
              <SH
                label="Project Outcomes"
                title="The Result"
                color={color}
              />
              <Reveal>
                <p className="mb-8 text-base leading-8 text-slate-400">
                  {results.body}
                </p>
              </Reveal>

              <Reveal>
                <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-8">
                  <h3 className="mb-6 font-bold text-white">
                    Delivered Experience
                  </h3>
                  <ul className="space-y-3">
                    {results.outcomes.map((item: string) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <span
                          className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                          style={{
                            background: `rgba(${colorRgb},0.2)`,
                            color,
                          }}
                        >
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </Section>

            {/* ── TECH & DELIVERY ── */}
            <Section id="tech">
              <SH
                label="Technical Delivery"
                title={techDelivery.heading}
                color={color}
              />
              <Reveal>
                <p className="mb-8 text-base leading-8 text-slate-400">
                  {techDelivery.body}
                </p>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {techDelivery.points.map((t: any, i: number) => (
                  <Reveal key={t.title} delay={0.05 * i}>
                    <div
                      className="rounded-2xl border border-white/8 bg-white/[0.03] p-5"
                      style={{ borderColor: `rgba(${colorRgb},0.15)` }}
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-xl">{t.icon}</span>
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest"
                          style={{ color }}
                        >
                          {t.title}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-slate-400">
                        {t.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── HEALTHCARE CTA ── */}
            <Section id="cta">
              <Reveal>
                <div
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center"
                  style={{ borderColor: `rgba(${colorRgb},0.2)` }}
                >
                  {/* Background glow */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-3xl opacity-20"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, rgba(${colorRgb},0.5) 0%, transparent 70%)`,
                    }}
                  />

                  <p
                    className="relative mb-3 text-xs font-semibold uppercase tracking-widest"
                    style={{ color }}
                  >
                    BUILDING FOR HEALTHCARE?
                  </p>
                  <h2 className="relative mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    Your Patients Search Online Before They Walk Through Your Doors.
                  </h2>
                  <p className="relative mx-auto mb-8 max-w-lg text-slate-400">
                    NF Nexa Tech designs modern websites for hospitals, clinics,
                    doctors and healthcare businesses with a focus on trust,
                    clarity, responsive experiences and patient-friendly journeys.
                  </p>

                  <div className="relative flex flex-wrap items-center justify-center gap-4">
                    <Link
                      href="/#contact"
                      className="rounded-xl px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:brightness-110"
                      style={{
                        background: `linear-gradient(135deg, rgba(${colorRgb},0.8), rgba(${colorRgb},0.5))`,
                        border: `1px solid rgba(${colorRgb},0.6)`,
                      }}
                    >
                      Start Your Healthcare Project →
                    </Link>
                    <Link
                      href="/#contact"
                      className="rounded-xl border border-white/15 bg-white/5 px-8 py-3 text-sm font-bold text-slate-300 transition-all duration-300 hover:border-white/30 hover:text-white"
                    >
                      Contact NF Nexa Tech
                    </Link>
                  </div>

                  {/* Trust signals */}
                  <div className="relative mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/8 pt-8">
                    {[
                      "Hospital Websites",
                      "Clinic Websites",
                      "Doctor Websites",
                      "Healthcare Platforms",
                      "Medical Websites",
                      "Appointment Booking",
                    ].map((label) => (
                      <span
                        key={label}
                        className="text-xs font-medium text-slate-500"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Related projects nudge */}
              <Reveal delay={0.1}>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.02] px-6 py-4">
                  <p className="text-sm text-slate-400">
                    Explore more of our work
                  </p>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white"
                    style={{ color }}
                  >
                    View All Projects
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      />
                    </svg>
                  </Link>
                </div>
              </Reveal>
            </Section>

          </main>
        </div>
      </div>
    </div>
  );
}
