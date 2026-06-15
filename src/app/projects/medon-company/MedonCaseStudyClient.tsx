"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   Animated counter
───────────────────────────────────────────────────────────── */
function useCounter(end: number, duration = 1600, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, started]);
  return count;
}

function AnimCounter({ end, suffix, label, color, started }: {
  end: number; suffix: string; label: string; color: string; started: boolean;
}) {
  const count = useCounter(end, 1600, started);
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-3xl font-black sm:text-4xl" style={{ color }}>
        {count}{suffix}
      </span>
      <span className="mt-1 text-xs text-slate-400">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Reveal wrapper
───────────────────────────────────────────────────────────── */
function Reveal({ children, delay = 0, y = 24 }: {
  children: React.ReactNode; delay?: number; y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section anchor wrapper
───────────────────────────────────────────────────────────── */
function Section({ id, children, className = "" }: {
  id: string; children: React.ReactNode; className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 pb-20 ${className}`}>
      {children}
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section heading
───────────────────────────────────────────────────────────── */
function SH({ label, title, color }: { label: string; title: string; color: string }) {
  return (
    <Reveal>
      <div className="mb-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color }}>
          {label}
        </p>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <div className="mt-3 h-px w-16" style={{ background: color }} />
      </div>
    </Reveal>
  );
}

/* ─────────────────────────────────────────────────────────────
   Lightbox
───────────────────────────────────────────────────────────── */
function CaseLightbox({
  isOpen, src, label, onClose,
}: { isOpen: boolean; src: string; label: string; onClose: () => void }) {
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
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
                <button onClick={onClose} className="h-3 w-3 rounded-full bg-red-500 transition-colors hover:bg-red-400" />
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
            <p className="mt-3 text-center text-xs text-slate-500">Click outside or press Esc to close</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────────────────────
   Browser frame — full screenshot, no cropping
───────────────────────────────────────────────────────────── */
function BrowserFrame({ src, alt, url }: { src: string; alt: string; url: string }) {
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
            <svg className="h-2.5 w-2.5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
            <span className="truncate text-[10px] text-slate-300">{url}</span>
          </div>
          {/* Expand icon */}
          <svg className="h-3.5 w-3.5 text-slate-500 transition-colors group-hover:text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>
        {/* Full screenshot — natural proportions, no clipping */}
        <div className="relative bg-slate-950">
          <Image
            src={src}
            alt={alt}
            width={1440}
            height={900}
            style={{ width: "100%", height: "auto", display: "block" }}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="transition-transform duration-500 group-hover:scale-[1.015]"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
            <span className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
              Open Full Screenshot
            </span>
          </div>
        </div>
      </div>
      <CaseLightbox isOpen={lightboxOpen} src={src} label={alt} onClose={() => setLightboxOpen(false)} />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   NAV ITEMS per data
───────────────────────────────────────────────────────────── */
const navItems = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "solution", label: "Solution" },
  { id: "features", label: "Features" },
  { id: "screenshots", label: "Screenshots" },
  { id: "tech", label: "Tech Stack" },
  { id: "timeline", label: "Timeline" },
  { id: "results", label: "Results" },
];

/* ─────────────────────────────────────────────────────────────
   MAIN CLIENT COMPONENT
───────────────────────────────────────────────────────────── */
export default function MedonCaseStudyClient({ data }: { data: any }) {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrolled, setScrolled] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const resultsInView = useInView(resultsRef, { once: true, amount: 0.3 });
  const [counterStarted, setCounterStarted] = useState(false);

  useEffect(() => {
    if (resultsInView) setCounterStarted(true);
  }, [resultsInView]);

  /* Track active section via IntersectionObserver */
  useEffect(() => {
    const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean);
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

  const { color, colorRgb, title, subtitle, category, liveUrl, meta, overview,
    challenge, solution, features, screenshots, techStack, results, timeline } = data;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* ── Sticky top navbar ── */}
      <nav className={`sticky top-0 z-50 border-b border-white/5 transition-all duration-300 ${scrolled ? "bg-slate-950/95 shadow-lg shadow-black/40 backdrop-blur-xl" : "bg-slate-950/80 backdrop-blur-lg"}`}>
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-white">
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H6.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L6.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            Back to Portfolio
          </Link>
          <div className="hidden items-center gap-1 sm:flex">
            <span className="rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-widest" style={{ color, borderColor: `rgba(${colorRgb},0.4)`, background: `rgba(${colorRgb},0.1)` }}>
              {category}
            </span>
          </div>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-lg px-4 py-1.5 text-xs font-bold text-white transition-all duration-300 hover:brightness-110 sm:flex"
              style={{ background: `rgba(${colorRgb},0.25)`, border: `1px solid rgba(${colorRgb},0.5)` }}>
              Visit Website ↗
            </a>
          )}
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 xl:grid-cols-[260px_1fr]">

          {/* ── STICKY SIDEBAR ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-20 pt-16">
              {/* Project label */}
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">Case Study</p>
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
                        background: isActive ? `rgba(${colorRgb},0.12)` : "transparent",
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full flex-shrink-0 transition-all duration-300"
                        style={{ background: isActive ? color : "rgba(100,116,139,0.5)", transform: isActive ? "scale(1.4)" : "scale(1)" }}
                      />
                      {item.label}
                      {isActive && (
                        <motion.div layoutId="sidebar-active" className="ml-auto h-4 w-0.5 rounded-full" style={{ background: color }} />
                      )}
                    </a>
                  );
                })}
              </nav>

              {/* Quick meta below nav */}
              <div className="mt-8 space-y-3 border-t border-white/8 pt-6">
                {meta.slice(0, 4).map((m: any) => (
                  <div key={m.label} className="flex items-start gap-2.5">
                    <span className="text-sm">{m.icon}</span>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{m.label}</p>
                      <p className="text-xs font-medium text-slate-300">{m.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold text-white transition-all duration-300 hover:brightness-110"
                  style={{ background: `linear-gradient(135deg, rgba(${colorRgb},0.4), rgba(${colorRgb},0.2))`, border: `1px solid rgba(${colorRgb},0.5)` }}>
                  Visit Live Site ↗
                </a>
              )}
            </div>
          </aside>

          {/* ── MAIN CONTENT ── */}
          <main className="pb-24 pt-12">

            {/* ── HERO ── */}
            <Reveal>
              <header className="mb-16">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest" style={{ color, borderColor: `rgba(${colorRgb},0.4)`, background: `rgba(${colorRgb},0.1)` }}>
                    {category}
                  </span>
                  {liveUrl && (
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 underline decoration-dotted hover:text-cyan-400">
                      medoncompany.in ↗
                    </a>
                  )}
                </div>
                <h1 className="mb-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
                <p className="mb-8 text-lg text-slate-400">{subtitle}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {techStack.map((t: any) => (
                    <span key={t.name} className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                      {t.name}
                    </span>
                  ))}
                </div>
              </header>
            </Reveal>

            {/* ── HERO SCREENSHOT ── */}
            <Reveal delay={0.1}>
              <div className="mb-16">
                <BrowserFrame
                  src={screenshots[0].src}
                  alt={`${title} — ${screenshots[0].label}`}
                  url="medoncompany.in"
                />
              </div>
            </Reveal>

            {/* ── META CARDS ── */}
            <Reveal delay={0.05}>
              <div className="mb-16 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {meta.map((m: any) => (
                  <div key={m.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 backdrop-blur-sm">
                    <span className="text-xl">{m.icon}</span>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">{m.label}</p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-200">{m.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* ── OVERVIEW ── */}
            <Section id="overview">
              <SH label="Project Overview" title="About This Project" color={color} />
              <Reveal>
                <p className="text-base leading-8 text-slate-400">{overview}</p>
              </Reveal>
            </Section>

            {/* ── CHALLENGE ── */}
            <Section id="challenge">
              <SH label={challenge.heading} title="The Problem We Solved" color={color} />
              <Reveal>
                <p className="mb-6 text-base leading-8 text-slate-400">{challenge.body}</p>
              </Reveal>
              <div className="space-y-3">
                {challenge.points.map((p: string, i: number) => (
                  <Reveal key={p} delay={0.05 * i}>
                    <div className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-4">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-400">✕</span>
                      <span className="text-sm leading-relaxed text-slate-300">{p}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── SOLUTION ── */}
            <Section id="solution">
              <SH label={solution.heading} title="How We Built It" color={color} />
              <Reveal>
                <p className="mb-6 text-base leading-8 text-slate-400">{solution.body}</p>
              </Reveal>
              <div className="space-y-3">
                {solution.points.map((p: string, i: number) => (
                  <Reveal key={p} delay={0.05 * i}>
                    <div className="flex items-start gap-3 rounded-xl border bg-white/[0.03] p-4" style={{ borderColor: `rgba(${colorRgb},0.2)` }}>
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold" style={{ background: `rgba(${colorRgb},0.15)`, color }}>✓</span>
                      <span className="text-sm leading-relaxed text-slate-300">{p}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── FEATURES ── */}
            <Section id="features">
              <SH label="Feature Showcase" title="What We Built" color={color} />
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((f: any, i: number) => (
                  <Reveal key={f.title} delay={0.04 * i}>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                      style={{ borderColor: `rgba(${colorRgb},0.1)` }}>
                      <div className="mb-3 flex items-center gap-3">
                        <span className="text-2xl">{f.icon}</span>
                        <h3 className="font-bold text-white">{f.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── SCREENSHOTS ── */}
            <Section id="screenshots">
              <SH label="Screenshots Gallery" title="See It in Action" color={color} />
              <div className="space-y-8">
                {screenshots.map((s: any, i: number) => (
                  <Reveal key={s.src} delay={0.08 * i}>
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <span className="font-mono text-xs font-bold" style={{ color }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-sm font-semibold text-white">{s.label}</h3>
                        <div className="h-px flex-1 bg-white/8" />
                      </div>
                      <BrowserFrame src={s.src} alt={`${title} — ${s.label}`} url="medoncompany.in" />
                      {s.desc && <p className="mt-3 text-sm text-slate-500">{s.desc}</p>}
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── TECH STACK ── */}
            <Section id="tech">
              <SH label="Technical Stack" title="Technologies Used" color={color} />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {techStack.map((t: any, i: number) => (
                  <Reveal key={t.name} delay={0.05 * i}>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5" style={{ borderColor: `rgba(${colorRgb},0.15)` }}>
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-xl">{t.icon}</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>{t.category}</span>
                      </div>
                      <h4 className="mb-1.5 font-bold text-white">{t.name}</h4>
                      <p className="text-xs leading-relaxed text-slate-400">{t.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── TIMELINE ── */}
            <Section id="timeline">
              <SH label="Project Timeline" title="How We Delivered" color={color} />
              <div className="relative space-y-0">
                {/* Vertical line */}
                <div className="absolute left-[27px] top-0 h-full w-px bg-white/8" />
                {timeline.map((t: any, i: number) => (
                  <Reveal key={t.phase} delay={0.06 * i}>
                    <div className="relative flex gap-6 pb-8">
                      {/* Phase dot */}
                      <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-slate-900 text-xs font-bold"
                        style={{ color, borderColor: `rgba(${colorRgb},0.35)`, background: `rgba(${colorRgb},0.08)` }}>
                        {t.phase}
                      </div>
                      <div className="flex-1 pt-3">
                        <div className="mb-1 flex flex-wrap items-center gap-3">
                          <h3 className="font-bold text-white">{t.title}</h3>
                          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-400">
                            {t.duration}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">{t.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── RESULTS ── */}
            <Section id="results">
              <SH label="Project Results" title="What We Achieved" color={color} />
              <div ref={resultsRef} className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {results.map((r: any, i: number) => (
                  <motion.div
                    key={r.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={counterStarted ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.08 * i, ease: "backOut" }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center"
                    style={{ borderColor: `rgba(${colorRgb},0.2)` }}
                  >
                    <AnimCounter end={r.value} suffix={r.suffix} label={r.label} color={color} started={counterStarted} />
                  </motion.div>
                ))}
              </div>

              <Reveal>
                <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-8">
                  <h3 className="mb-4 font-bold text-white">Key Outcomes</h3>
                  <ul className="space-y-3">
                    {["96/100 Lighthouse Performance score on mobile", "50+ service and location pages indexed by Google", "100% mobile responsive across all tested devices", "WhatsApp lead conversions within first month of launch"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                        <span className="mt-0.5 h-4 w-4 flex-shrink-0 rounded-full text-[10px] font-bold flex items-center justify-center" style={{ background: `rgba(${colorRgb},0.2)`, color }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </Section>

            {/* ── CTA ── */}
            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color }}>Start a Project</p>
                <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Need a Similar Platform?</h2>
                <p className="mx-auto mb-8 max-w-md text-slate-400">
                  We build high-performance, SEO-optimized web platforms for businesses across India and worldwide.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="/#contact"
                    className="rounded-xl px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:brightness-110"
                    style={{ background: `linear-gradient(135deg, rgba(${colorRgb},0.7), rgba(${colorRgb},0.4))`, border: `1px solid rgba(${colorRgb},0.6)` }}>
                    Start Your Project →
                  </Link>
                  <Link href="/"
                    className="rounded-xl border border-white/15 bg-white/5 px-8 py-3 text-sm font-bold text-slate-300 transition-all duration-300 hover:border-white/30 hover:text-white">
                    View All Projects
                  </Link>
                </div>
              </div>
            </Reveal>

          </main>
        </div>
      </div>
    </div>
  );
}
