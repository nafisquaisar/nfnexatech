"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  AnimatePresence,
} from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   Project Data
───────────────────────────────────────────────────────────── */
const websiteProjects = [
  {
    id: "medon",
    index: 0,
    title: "Medon Company",
    category: "Service Booking Platform",
    url: "https://medoncompany.in",
    tech: ["Next.js", "React", "Tailwind CSS", "Firebase", "SEO Optimized"],
    description:
      "A modern service booking platform for AC repair, refrigerator repair, geyser repair, electrical services, and home appliance maintenance across Delhi NCR.",
    features: [
      "SEO Optimized Service Pages",
      "WhatsApp Lead Generation",
      "Service Booking System",
      "Mobile Responsive Design",
      "Gallery Showcase",
      "Location-Based Landing Pages",
      "Fast Performance",
      "Professional Admin Management",
    ],
    stats: [
      { label: "Next.js Platform", icon: "⚡" },
      { label: "SEO Optimized", icon: "🔍" },
      { label: "Service Booking System", icon: "📅" },
      { label: "Delhi NCR Coverage", icon: "📍" },
    ],
    counters: [
      { end: 50, suffix: "+", label: "Pages Developed" },
      { end: 100, suffix: "%", label: "Mobile Responsive" },
      { end: 95, suffix: "+", label: "Performance Score" },
    ],
    screenshots: [
      { src: "/images/projects/medon/home.png", label: "Home Page" },
      { src: "/images/projects/medon/services.png", label: "Services" },
      { src: "/images/projects/medon/gallery.png", label: "Gallery" },
    ],
    color: "#06b6d4",
    colorRgb: "6,182,212",
    urlLabel: "medoncompany.in",
    cta: {
      primary: { label: "Visit Website", href: "https://medoncompany.in", external: true },
      secondary: { label: "Case Study", href: "/projects/medon-company", external: false },
    },
  },
  {
    id: "trainyourtech",
    index: 1,
    title: "Train Your Tech",
    category: "EdTech SaaS Platform",
    url: null,
    tech: ["Spring Boot", "Firebase", "MySQL", "React", "AI Integration"],
    description:
      "A complete placement preparation and career development platform helping students prepare for interviews, aptitude tests, coding rounds, and job applications.",
    features: [
      "AI Mock Interview",
      "Resume Analyzer",
      "Job Portal Aggregator",
      "Course Management System",
      "Online Test Platform",
      "Student Dashboard",
      "Admin Dashboard",
      "Profile & Progress Tracking",
    ],
    stats: [
      { label: "Spring Boot Backend", icon: "🌱" },
      { label: "Firebase Integration", icon: "🔥" },
      { label: "AI Interview System", icon: "🤖" },
      { label: "Job Portal Platform", icon: "💼" },
    ],
    counters: [
      { end: 8, suffix: "+", label: "Core Modules" },
      { end: 500, suffix: "+", label: "Students Onboarded" },
      { end: 98, suffix: "%", label: "Interview Ready Rate" },
    ],
    screenshots: [
      { src: "/images/projects/trainyourtech/landing.png", label: "Landing Page" },
      { src: "/images/projects/trainyourtech/dashboard.png", label: "Dashboard" },
    ],
    color: "#a855f7",
    colorRgb: "168,85,247",
    urlLabel: "trainyourtech.in",
    cta: {
      primary: { label: "View Project", href: "#", external: false },
      secondary: { label: "Case Study", href: "/projects/train-your-tech", external: false },
    },
  },
];

/* ─────────────────────────────────────────────────────────────
   Animated counter hook
───────────────────────────────────────────────────────────── */
function useCounter(end, duration = 1800, started) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (ts) => {
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

function AnimatedCounter({ end, suffix, label, color, started }) {
  const count = useCounter(end, 1800, started);
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-white sm:text-3xl" style={{ color }}>
        {count}{suffix}
      </p>
      <p className="mt-1 text-xs text-slate-400">{label}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Browser Mockup
───────────────────────────────────────────────────────────── */
function BrowserMockup({ screenshots, title, color, urlLabel }) {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-cycle screenshots
  useEffect(() => {
    if (screenshots.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIdx((i) => (i + 1) % screenshots.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [screenshots.length]);

  return (
    <div className="relative w-full">
      {/* Stacked depth shadows */}
      <div
        className="absolute inset-0 -z-10 rounded-2xl border border-white/5"
        style={{ transform: "rotate(-2.5deg) scale(0.96) translateY(10px)", opacity: 0.4, background: "rgba(255,255,255,0.02)" }}
      />
      <div
        className="absolute inset-0 -z-20 rounded-2xl border border-white/3"
        style={{ transform: "rotate(-4.5deg) scale(0.92) translateY(20px)", opacity: 0.22, background: "rgba(255,255,255,0.01)" }}
      />

      {/* Glow halo */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
        style={{ background: `radial-gradient(ellipse, rgba(${color},0.35) 0%, transparent 70%)` }}
      />

      {/* Browser frame */}
      <div
        className="relative overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/70"
        style={{ background: "linear-gradient(160deg, #0f172a 0%, #1a2540 100%)" }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-3 border-b border-white/10 bg-slate-900/90 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          {/* URL bar */}
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-white/10 bg-slate-800/70 px-3 py-1.5 backdrop-blur">
            <svg className="h-3 w-3 flex-shrink-0 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
            <span className="truncate text-[11px] text-slate-300">{urlLabel}</span>
          </div>
          {/* Reload icon */}
          <svg className="h-4 w-4 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Screenshot carousel */}
        <div className="relative h-[260px] w-full overflow-hidden sm:h-[300px] lg:h-[360px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
            >
              <Image
                src={screenshots[activeIdx].src}
                alt={`${title} — ${screenshots[activeIdx].label}`}
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover object-top"
                priority={activeIdx === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Bottom fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/50 to-transparent" />
          {/* Sheen */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/4 via-transparent to-transparent" />
        </div>

        {/* Screenshot tab bar */}
        {screenshots.length > 1 && (
          <div className="flex items-center justify-center gap-1.5 border-t border-white/8 bg-slate-900/70 px-4 py-2.5">
            {screenshots.map((s, i) => (
              <button
                key={s.src}
                onClick={() => setActiveIdx(i)}
                className="group flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[10px] font-medium transition-all duration-300"
                style={{
                  background: i === activeIdx ? `rgba(${color},0.15)` : "transparent",
                  color: i === activeIdx ? "white" : "rgb(148,163,184)",
                  border: i === activeIdx ? `1px solid rgba(${color},0.4)` : "1px solid transparent",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full transition-all"
                  style={{ background: i === activeIdx ? `rgba(${color},1)` : "rgba(148,163,184,0.4)" }}
                />
                {s.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Stat Chip
───────────────────────────────────────────────────────────── */
function StatChip({ icon, label, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay, ease: "backOut" }}
      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm"
      style={{ borderColor: `rgba(${color},0.25)` }}
    >
      <span className="text-base leading-none">{icon}</span>
      <span className="text-xs font-medium text-slate-300">{label}</span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Feature row
───────────────────────────────────────────────────────────── */
function FeatureItem({ text, color, delay }) {
  return (
    <motion.div
      className="flex items-start gap-2.5"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.38, delay }}
    >
      <svg
        className="mt-0.5 h-4 w-4 flex-shrink-0"
        style={{ color: `rgb(${color})` }}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-sm leading-snug text-slate-300">{text}</span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Single sticky project panel
───────────────────────────────────────────────────────────── */
function ProjectPanel({ project, isActive, progressNum }) {
  const panelRef = useRef(null);
  const inView = useInView(panelRef, { amount: 0.3, once: false });
  const [counterStarted, setCounterStarted] = useState(false);

  useEffect(() => {
    if (inView) setCounterStarted(true);
  }, [inView]);

  return (
    <div
      ref={panelRef}
      className="relative grid min-h-[100dvh] items-center py-20 lg:grid-cols-2 lg:gap-16 lg:py-24"
    >
      {/* ── LEFT: sticky mockup ── */}
      <div className="sticky top-[10vh] hidden self-start lg:block">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <BrowserMockup
            screenshots={project.screenshots}
            title={project.title}
            color={project.colorRgb}
            urlLabel={project.urlLabel}
          />
        </motion.div>

        {/* Counters below mockup */}
        <motion.div
          className="mt-8 grid grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {project.counters.map((c, i) => (
            <div
              key={c.label}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-sm"
              style={{ borderColor: `rgba(${project.colorRgb},0.2)` }}
            >
              <AnimatedCounter
                end={c.end}
                suffix={c.suffix}
                label={c.label}
                color={project.color}
                started={counterStarted}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── RIGHT: scrollable content ── */}
      <div className="flex flex-col gap-6">
        {/* Project number */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span
            className="font-mono text-4xl font-black leading-none"
            style={{ color: `rgba(${project.colorRgb},0.25)` }}
          >
            {String(project.index + 1).padStart(2, "0")}
          </span>
          <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, rgba(${project.colorRgb},0.5), transparent)` }} />
        </motion.div>

        {/* Category */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="text-xs font-semibold uppercase tracking-[0.22em]"
          style={{ color: project.color }}
        >
          {project.category}
        </motion.p>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl"
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base leading-relaxed text-slate-400"
        >
          {project.description}
        </motion.p>

        {/* Mobile mockup */}
        <div className="lg:hidden">
          <BrowserMockup
            screenshots={project.screenshots}
            title={project.title}
            color={project.colorRgb}
            urlLabel={project.urlLabel}
          />
        </div>

        {/* Stat chips */}
        <div className="flex flex-wrap gap-2">
          {project.stats.map((s, i) => (
            <StatChip
              key={s.label}
              icon={s.icon}
              label={s.label}
              color={project.colorRgb}
              delay={0.05 * i}
            />
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:text-white"
            >
              {t}
            </span>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px w-full" style={{ background: `linear-gradient(90deg, rgba(${project.colorRgb},0.4), transparent)` }} />

        {/* Features */}
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {project.features.map((f, i) => (
            <FeatureItem key={f} text={f} color={project.colorRgb} delay={0.04 * i} />
          ))}
        </div>

        {/* Mobile counters */}
        <div className="grid grid-cols-3 gap-3 lg:hidden">
          {project.counters.map((c) => (
            <div
              key={c.label}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center"
              style={{ borderColor: `rgba(${project.colorRgb},0.2)` }}
            >
              <p className="text-xl font-bold" style={{ color: project.color }}>
                {c.end}{c.suffix}
              </p>
              <p className="mt-0.5 text-[10px] text-slate-400">{c.label}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/5" />

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="flex flex-wrap items-center gap-3"
        >
          {project.cta.primary.external ? (
            <a
              href={project.cta.primary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-bold tracking-widest text-white transition-all duration-300 hover:brightness-110"
              style={{
                background: `linear-gradient(135deg, rgba(${project.colorRgb},0.35), rgba(${project.colorRgb},0.18))`,
                border: `1px solid rgba(${project.colorRgb},0.55)`,
                boxShadow: `0 0 0 0 rgba(${project.colorRgb},0)`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 28px 0 rgba(${project.colorRgb},0.3)`; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 0 0 0 rgba(${project.colorRgb},0)`; }}
            >
              {project.cta.primary.label}
              <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
              </svg>
            </a>
          ) : (
            <button
              disabled
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl px-6 py-3 text-xs font-bold tracking-widest text-white/40 opacity-40"
              style={{ border: `1px solid rgba(${project.colorRgb},0.3)`, background: `rgba(${project.colorRgb},0.08)` }}
            >
              {project.cta.primary.label}
            </button>
          )}

          <Link
            href={project.cta.secondary.href}
            className="group/btn inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-6 py-3 text-xs font-bold tracking-widest text-slate-300 backdrop-blur transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
          >
            {project.cta.secondary.label}
            <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Side Progress Indicator
───────────────────────────────────────────────────────────── */
function ProgressIndicator({ projects, activeIndex }) {
  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 xl:flex">
      {projects.map((p, i) => {
        const isActive = i === activeIndex;
        return (
          <div key={p.id} className="flex flex-col items-end gap-1">
            <motion.span
              animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 8 }}
              transition={{ duration: 0.35 }}
              className="text-right text-[10px] font-medium text-white"
            >
              {p.title}
            </motion.span>
            <motion.div
              animate={{
                width: isActive ? 32 : 12,
                background: isActive ? p.color : "rgba(255,255,255,0.2)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="h-[3px] rounded-full"
            />
            <span
              className="font-mono text-[9px] font-bold transition-colors duration-300"
              style={{ color: isActive ? p.color : "rgba(255,255,255,0.25)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section Header
───────────────────────────────────────────────────────────── */
function SectionHeader() {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300"
      >
        Our Website Portfolio
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
      >
        Building Scalable<br className="hidden sm:block" />{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Digital Products
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, delay: 0.15 }}
        className="mt-5 text-base leading-relaxed text-slate-400 md:text-lg"
      >
        From business websites to enterprise SaaS platforms, we build solutions that
        generate leads, improve operations, and scale businesses.
      </motion.p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Export
───────────────────────────────────────────────────────────── */
export default function WebsiteShowcase() {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);
  const panelRefs = useRef([]);

  // Track which project panel is in view to drive the progress indicator
  useEffect(() => {
    const observers = panelRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveProject(i);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section
      id="website-projects"
      ref={sectionRef}
      className="relative bg-slate-950"
    >
      {/* ── Background atmosphere ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Cyan blob — top left */}
        <div className="absolute -left-32 -top-32 h-[700px] w-[700px] rounded-full bg-cyan-500/6 blur-[160px]" />
        {/* Purple blob — bottom right */}
        <div className="absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full bg-purple-600/8 blur-[140px]" />
        {/* Violet mid */}
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[120px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Side progress indicator (desktop) ── */}
      <ProgressIndicator projects={websiteProjects} activeIndex={activeProject} />

      <div className="relative mx-auto w-[92%] max-w-6xl py-24">
        <SectionHeader />

        {/* ── Project panels ── */}
        <div className="flex flex-col divide-y divide-white/5">
          {websiteProjects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => (panelRefs.current[i] = el)}
            >
              {/* Thin colored accent line above each project */}
              <div
                className="mb-0 h-[1px] w-full"
                style={{ background: `linear-gradient(90deg, transparent, rgba(${project.colorRgb},0.5), transparent)` }}
              />
              <ProjectPanel
                project={project}
                isActive={activeProject === i}
                progressNum={i + 1}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reduced motion override */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </section>
  );
}
