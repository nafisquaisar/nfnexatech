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
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section anchor
───────────────────────────────────────────────────────────── */
function Section({ id, children, className = "" }: {
  id: string; children: React.ReactNode; className?: string;
}) {
  return <section id={id} className={`scroll-mt-24 pb-20 ${className}`}>{children}</section>;
}

/* ─────────────────────────────────────────────────────────────
   Section heading
───────────────────────────────────────────────────────────── */
function SH({ label, title, color }: { label: string; title: string; color: string }) {
  return (
    <Reveal>
      <div className="mb-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color }}>{label}</p>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <div className="mt-3 h-px w-16" style={{ background: color }} />
      </div>
    </Reveal>
  );
}

/* ─────────────────────────────────────────────────────────────
   Lightbox
───────────────────────────────────────────────────────────── */
function CaseLightbox({ isOpen, src, label, onClose }: {
  isOpen: boolean; src: string; label: string; onClose: () => void;
}) {
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
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }} onClick={onClose}
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
                <Image src={src} alt={label} width={1440} height={900}
                  style={{ width: "100%", height: "auto", display: "block" }} priority />
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
function BrowserFrame({ src, alt, url = "trainyourtech.in" }: { src: string; alt: string; url?: string }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  return (
    <>
      <div
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/12 shadow-2xl shadow-black/60 transition-all duration-300 hover:border-white/25"
        onClick={() => setLightboxOpen(true)}
      >
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
          <svg className="h-3.5 w-3.5 text-slate-500 transition-colors group-hover:text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>
        {/* Full screenshot — natural proportions, no clipping */}
        <div className="relative bg-slate-950">
          <Image src={src} alt={alt} width={1440} height={900}
            style={{ width: "100%", height: "auto", display: "block" }}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="transition-transform duration-500 group-hover:scale-[1.015]"
          />
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
   Nav items
───────────────────────────────────────────────────────────── */
const navItems = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "modules", label: "Modules" },
  { id: "screenshots", label: "Screenshots" },
  { id: "architecture", label: "Architecture" },
  { id: "timeline", label: "Timeline" },
  { id: "results", label: "Results" },
];

/* ─────────────────────────────────────────────────────────────
   MAIN CLIENT COMPONENT
───────────────────────────────────────────────────────────── */
export default function TrainYourTechClient({ data }: { data: any }) {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrolled, setScrolled] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const resultsInView = useInView(resultsRef, { once: true, amount: 0.3 });
  const [counterStarted, setCounterStarted] = useState(false);

  useEffect(() => {
    if (resultsInView) setCounterStarted(true);
  }, [resultsInView]);

  useEffect(() => {
    const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => obs.observe(s!));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { color, colorRgb, title, subtitle, category, liveUrl, meta, overview,
    problem, solution, modules, screenshots, architecture, techStack, results, timeline } = data;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* ── Top navbar ── */}
      <nav className={`sticky top-0 z-50 border-b border-white/5 transition-all duration-300 ${scrolled ? "bg-slate-950/95 shadow-lg shadow-black/40 backdrop-blur-xl" : "bg-slate-950/80 backdrop-blur-lg"}`}>
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-white">
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H6.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L6.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            Back to Portfolio
          </Link>
          <span className="hidden rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-widest sm:block"
            style={{ color, borderColor: `rgba(${colorRgb},0.4)`, background: `rgba(${colorRgb},0.1)` }}>
            {category}
          </span>
          <span className="hidden items-center gap-1.5 rounded-lg px-4 py-1.5 text-xs font-bold text-slate-500 sm:flex">
            Coming Soon
          </span>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 xl:grid-cols-[260px_1fr]">

          {/* ── STICKY SIDEBAR ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-20 pt-16">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">Case Study</p>
              <h3 className="mb-6 text-sm font-bold text-white">{title}</h3>
              <nav className="flex flex-col gap-0.5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a key={item.id} href={`#${item.id}`}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-250"
                      style={{ color: isActive ? "white" : "rgb(100,116,139)", background: isActive ? `rgba(${colorRgb},0.12)` : "transparent" }}>
                      <span className="h-1.5 w-1.5 rounded-full flex-shrink-0 transition-all duration-300"
                        style={{ background: isActive ? color : "rgba(100,116,139,0.5)", transform: isActive ? "scale(1.4)" : "scale(1)" }} />
                      {item.label}
                      {isActive && <motion.div layoutId="tyt-sidebar-active" className="ml-auto h-4 w-0.5 rounded-full" style={{ background: color }} />}
                    </a>
                  );
                })}
              </nav>
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
            </div>
          </aside>

          {/* ── MAIN CONTENT ── */}
          <main className="pb-24 pt-12">

            {/* ── HERO ── */}
            <Reveal>
              <header className="mb-16">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                    style={{ color, borderColor: `rgba(${colorRgb},0.4)`, background: `rgba(${colorRgb},0.1)` }}>
                    {category}
                  </span>
                  <span className="text-xs text-slate-500">EdTech · SaaS</span>
                </div>
                <h1 className="mb-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
                <p className="mb-8 text-lg text-slate-400">{subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.slice(0, 6).map((t: any) => (
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
                <BrowserFrame src={screenshots[0].src} alt={`${title} — ${screenshots[0].label}`} />
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
              <SH label="Project Overview" title="About This Platform" color={color} />
              <Reveal><p className="text-base leading-8 text-slate-400">{overview}</p></Reveal>
            </Section>

            {/* ── PROBLEM ── */}
            <Section id="problem">
              <SH label={problem.heading} title="The Problem We Solved" color={color} />
              <Reveal><p className="mb-6 text-base leading-8 text-slate-400">{problem.body}</p></Reveal>
              <div className="space-y-3">
                {problem.points.map((p: string, i: number) => (
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
              <Reveal><p className="mb-6 text-base leading-8 text-slate-400">{solution.body}</p></Reveal>
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

            {/* ── MODULES ── */}
            <Section id="modules">
              <SH label="Feature Showcase" title="Key Modules" color={color} />
              <div className="grid gap-4 sm:grid-cols-2">
                {modules.map((m: any, i: number) => (
                  <Reveal key={m.name} delay={0.04 * i}>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                      style={{ borderColor: `rgba(${colorRgb},0.1)` }}>
                      <div className="mb-3 flex items-center gap-3">
                        <span className="text-2xl">{m.icon}</span>
                        <h3 className="font-bold text-white">{m.name}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-400">{m.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── SCREENSHOTS ── */}
            <Section id="screenshots">
              <SH label="Screenshots Gallery" title="Platform in Action" color={color} />
              <div className="space-y-10">
                {screenshots.map((s: any, i: number) => (
                  <Reveal key={s.src} delay={0.08 * i}>
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <span className="font-mono text-xs font-bold" style={{ color }}>{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="text-sm font-semibold text-white">{s.label}</h3>
                        <div className="h-px flex-1 bg-white/8" />
                      </div>
                      <BrowserFrame src={s.src} alt={`${title} — ${s.label}`} />
                      {s.desc && <p className="mt-3 text-sm text-slate-500">{s.desc}</p>}
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── ARCHITECTURE ── */}
            <Section id="architecture">
              <SH label="System Architecture" title="Technical Design" color={color} />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {architecture.map((a: any, i: number) => (
                  <Reveal key={a.layer} delay={0.05 * i}>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5" style={{ borderColor: `rgba(${colorRgb},0.15)` }}>
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-2xl">{a.icon}</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>{a.layer}</span>
                      </div>
                      <h4 className="mb-1.5 font-bold text-white">{a.tech}</h4>
                      <p className="text-xs leading-relaxed text-slate-400">{a.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Architecture flow diagram */}
              <Reveal delay={0.15}>
                <div className="mt-8 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6">
                  <p className="mb-6 text-xs font-bold uppercase tracking-widest" style={{ color }}>Data Flow</p>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-center">
                    {[
                      { label: "React\nFrontend", icon: "⚛️" },
                      { label: "→", icon: "" },
                      { label: "Spring Boot\nREST API", icon: "🌱" },
                      { label: "→", icon: "" },
                      { label: "MySQL\nDatabase", icon: "🗄️" },
                    ].map((n, i) => (
                      n.label === "→" ? (
                        <span key={i} className="text-xl text-slate-600">→</span>
                      ) : (
                        <div key={i} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                          <div className="text-xl">{n.icon}</div>
                          <p className="mt-1 whitespace-pre text-[10px] text-slate-300">{n.label}</p>
                        </div>
                      )
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-center">
                    {[
                      { label: "Firebase\nAuth + RT", icon: "🔥" },
                      { label: "↕", icon: "" },
                      { label: "AI Engine\nInterview AI", icon: "🤖" },
                    ].map((n, i) => (
                      n.label === "↕" ? (
                        <span key={i} className="text-xl text-slate-600">↕</span>
                      ) : (
                        <div key={i} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                          <div className="text-xl">{n.icon}</div>
                          <p className="mt-1 whitespace-pre text-[10px] text-slate-300">{n.label}</p>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </Reveal>
            </Section>

            {/* ── TIMELINE ── */}
            <Section id="timeline">
              <SH label="Project Timeline" title="6-Month Delivery" color={color} />
              <div className="relative space-y-0">
                <div className="absolute left-[27px] top-0 h-full w-px bg-white/8" />
                {timeline.map((t: any, i: number) => (
                  <Reveal key={t.phase} delay={0.06 * i}>
                    <div className="relative flex gap-6 pb-8">
                      <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold"
                        style={{ color, borderColor: `rgba(${colorRgb},0.35)`, background: `rgba(${colorRgb},0.08)` }}>
                        {t.phase}
                      </div>
                      <div className="flex-1 pt-3">
                        <div className="mb-1 flex flex-wrap items-center gap-3">
                          <h3 className="font-bold text-white">{t.title}</h3>
                          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-400">{t.duration}</span>
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
                  <motion.div key={r.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={counterStarted ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.08 * i, ease: "backOut" }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center"
                    style={{ borderColor: `rgba(${colorRgb},0.2)` }}>
                    <AnimCounter end={r.value} suffix={r.suffix} label={r.label} color={color} started={counterStarted} />
                  </motion.div>
                ))}
              </div>
              <Reveal>
                <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-8">
                  <h3 className="mb-4 font-bold text-white">Key Outcomes</h3>
                  <ul className="space-y-3">
                    {["500+ students onboarded during beta phase", "8 integrated modules in a single platform", "89% student satisfaction with AI interview feedback", "Avg. 3.2 sessions per week per active student"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                        <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                          style={{ background: `rgba(${colorRgb},0.2)`, color }}>✓</span>
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
                <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Want to Build a SaaS Platform Like This?</h2>
                <p className="mx-auto mb-8 max-w-md text-slate-400">
                  We architect and build end-to-end SaaS platforms — from AI integrations to scalable backends — for startups and enterprises worldwide.
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
