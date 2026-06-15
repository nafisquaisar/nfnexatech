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
   Lightbox
───────────────────────────────────────────────────────────── */
function Lightbox({ isOpen, screenshots, initialIdx, onClose }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => { if (isOpen) setIdx(initialIdx); }, [isOpen, initialIdx]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + screenshots.length) % screenshots.length);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % screenshots.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, screenshots.length, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-black/92 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="relative my-8 w-[92%] max-w-5xl"
            initial={{ scale: 0.93, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.93, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Browser chrome in lightbox */}
            <div className="overflow-hidden rounded-2xl border border-white/20 shadow-2xl shadow-black/80">
              <div className="flex items-center gap-3 border-b border-white/10 bg-slate-900 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <button onClick={onClose} className="h-3 w-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex flex-1 items-center justify-between">
                  <span className="text-[11px] text-slate-400">{screenshots[idx]?.label}</span>
                  <span className="text-[10px] text-slate-600">{idx + 1} / {screenshots.length}</span>
                </div>
              </div>
              <div className="bg-slate-950">
                <Image
                  src={screenshots[idx]?.src}
                  alt={screenshots[idx]?.label ?? "Screenshot"}
                  width={1440}
                  height={900}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  priority
                />
              </div>
            </div>

            {/* Prev / Next arrows */}
            {screenshots.length > 1 && (
              <>
                <button
                  onClick={() => setIdx((i) => (i - 1 + screenshots.length) % screenshots.length)}
                  className="absolute -left-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-900/90 text-white shadow-lg backdrop-blur transition hover:border-white/40 hover:bg-white/10"
                >
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H6.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L6.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  onClick={() => setIdx((i) => (i + 1) % screenshots.length)}
                  className="absolute -right-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-900/90 text-white shadow-lg backdrop-blur transition hover:border-white/40 hover:bg-white/10"
                >
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </button>
              </>
            )}

            {/* Thumbnail strip */}
            {screenshots.length > 1 && (
              <div className="mt-4 flex items-center justify-center gap-2">
                {screenshots.map((s, i) => (
                  <button
                    key={s.src}
                    onClick={() => setIdx(i)}
                    className={`rounded-lg border px-3 py-1 text-[10px] font-medium transition-all duration-200 ${
                      i === idx
                        ? "border-white/40 bg-white/15 text-white"
                        : "border-white/10 bg-white/5 text-slate-400 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function BrowserMockup({ screenshots, title, color, urlLabel }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);

  const startAutoScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      if (!el) return;
      const maxScroll = el.scrollHeight - el.clientHeight;
      if (maxScroll <= 0) { clearInterval(autoScrollRef.current); return; }
      if (el.scrollTop >= maxScroll - 2) {
        clearInterval(autoScrollRef.current);
        setTimeout(() => {
          el.scrollTo({ top: 0, behavior: "smooth" });
          setTimeout(startAutoScroll, 2000);
        }, 2500);
      } else {
        el.scrollTop += 1.2;
      }
    }, 28);
  }, []);

  useEffect(() => {
    if (isHovered) {
      clearInterval(autoScrollRef.current);
    } else {
      const t = setTimeout(startAutoScroll, 1200);
      return () => clearTimeout(t);
    }
    return () => clearInterval(autoScrollRef.current);
  }, [isHovered, startAutoScroll]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = 0;
    clearInterval(autoScrollRef.current);
    const t = setTimeout(startAutoScroll, 1200);
    return () => { clearTimeout(t); clearInterval(autoScrollRef.current); };
  }, [activeIdx, startAutoScroll]);

  const handleUserScroll = useCallback(() => {
    clearInterval(autoScrollRef.current);
  }, []);

  return (
    <>
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
          className="relative rounded-2xl border border-white/15 shadow-2xl shadow-black/70"
          style={{ background: "linear-gradient(160deg, #0f172a 0%, #1a2540 100%)" }}
        >
          {/* Title bar */}
          <div className="flex items-center gap-3 border-b border-white/10 bg-slate-900/90 px-4 py-3 backdrop-blur rounded-t-2xl">
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
            {/* Open full screenshot button */}
            <button
              onClick={() => setLightboxOpen(true)}
              title="Open full screenshot"
              className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded text-slate-500 transition-colors hover:text-white"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Scrollable screenshot area */}
          <div
            className="relative overflow-hidden rounded-b-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Scrollable container — full image visible, no cropping */}
                <div
                  ref={scrollRef}
                  onScroll={handleUserScroll}
                  style={{
                    height: "300px",
                    overflowY: "auto",
                    overflowX: "hidden",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  <Image
                    src={screenshots[activeIdx].src}
                    alt={`${title} — ${screenshots[activeIdx].label}`}
                    width={1440}
                    height={900}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    priority={activeIdx === 0}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Hover overlay — Open Full Screenshot */}
            <div
              className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/55 backdrop-blur-[2px] transition-opacity duration-300"
              style={{ opacity: isHovered ? 1 : 0 }}
            >
              <button
                className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-bold tracking-wider text-white shadow-lg backdrop-blur transition hover:border-white/55 hover:bg-white/20"
                onClick={() => setLightboxOpen(true)}
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293-2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Open Full Screenshot
              </button>
              <p className="text-[10px] text-white/40">scroll to explore</p>
            </div>

            {/* Bottom gradient hint */}
            <div className="pointer-events-none absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-slate-950/70 to-transparent" />
          </div>

          {/* Tab bar */}
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

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        screenshots={screenshots}
        initialIdx={activeIdx}
        onClose={() => setLightboxOpen(false)}
      />
    </>
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
   Single project panel — isolated, no sticky, no overflow
───────────────────────────────────────────────────────────── */
function ProjectPanel({ project, index }) {
  const panelRef = useRef(null);
  const inView = useInView(panelRef, { amount: 0.25, once: false });
  const [counterStarted, setCounterStarted] = useState(false);

  useEffect(() => {
    if (inView) setCounterStarted(true);
  }, [inView]);

  // Alternate: even index → screenshot left | odd → screenshot right
  const screenshotLeft = index % 2 === 0;

  const MockupBlock = (
    <motion.div
      initial={{ opacity: 0, x: screenshotLeft ? -40 : 40, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <BrowserMockup
        screenshots={project.screenshots}
        title={project.title}
        color={project.colorRgb}
        urlLabel={project.urlLabel}
      />
      {/* Counters below mockup — desktop only */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        {project.counters.map((c) => (
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
      </div>
    </motion.div>
  );

  const ContentBlock = (
    <div className="flex flex-col gap-6">
      {/* Project number */}
      <motion.div
        initial={{ opacity: 0, x: screenshotLeft ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3"
      >
        <span
          className="font-mono text-4xl font-black leading-none"
          style={{ color: `rgba(${project.colorRgb},0.25)` }}
        >
          {String(index + 1).padStart(2, "0")}
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

      {/* Stat chips */}
      <div className="flex flex-wrap gap-2">
        {project.stats.map((s, i) => (
          <StatChip key={s.label} icon={s.icon} label={s.label} color={project.colorRgb} delay={0.05 * i} />
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
            }}
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
  );

  return (
    <div ref={panelRef} className="relative overflow-hidden py-24 lg:py-32">
      {/* Per-project background glow — contained inside section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: screenshotLeft
            ? `radial-gradient(ellipse 60% 50% at 20% 50%, rgba(${project.colorRgb},0.06) 0%, transparent 70%)`
            : `radial-gradient(ellipse 60% 50% at 80% 50%, rgba(${project.colorRgb},0.06) 0%, transparent 70%)`,
        }}
      />

      {/* Two-column grid — screenshot and content side by side */}
      <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Mobile: always show screenshot first */}
        <div className={`order-first ${screenshotLeft ? "lg:order-first" : "lg:order-last"}`}>
          {MockupBlock}
        </div>
        <div className={`${screenshotLeft ? "lg:order-last" : "lg:order-first"}`}>
          {ContentBlock}
        </div>
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
  const panelRefs = useRef([]);

  // Track which project panel is in view to drive the progress indicator
  useEffect(() => {
    const observers = panelRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveProject(i);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section
      id="website-projects"
      className="relative overflow-x-hidden bg-slate-950"
    >
      {/* ── Background atmosphere (non-overflowing) ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[700px] w-[700px] rounded-full bg-cyan-500/6 blur-[160px]" />
        <div className="absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full bg-purple-600/8 blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[120px]" />
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

        {/* ── Project sections — each fully isolated ── */}
        <div className="flex flex-col">
          {websiteProjects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => (panelRefs.current[i] = el)}
            >
              {/* Section separator */}
              {i > 0 && (
                <div
                  className="my-0 h-[1px] w-full"
                  style={{ background: `linear-gradient(90deg, transparent, rgba(${project.colorRgb},0.4), transparent)` }}
                />
              )}
              <ProjectPanel project={project} index={i} />
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

