"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ────────────────────────────────────────────────────────────
   SVG Icon Map
   ──────────────────────────────────────────────────────────── */

const ic = "h-5 w-5";

const ICONS: Record<string, React.ReactNode> = {
  /* meta */
  phone:     <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
  store:     <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75z" /></svg>,
  package:   <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>,
  chart:     <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z" /></svg>,
  currency:  <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>,
  settings:  <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.004.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /></svg>,

  /* modules */
  cart:      <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" /></svg>,
  receipt:   <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z" /></svg>,
  bread:     <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m18-4.5a9 9 0 1 1-18 0" /></svg>,
  users:     <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0z" /></svg>,
  recycle:   <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" /></svg>,
  trending:  <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>,
  calendar:  <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>,
  clipboard: <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>,

  /* tech */
  fire:      <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18z" /></svg>,
  cloud:     <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15z" /></svg>,
  database:  <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>,

  /* misc */
  check:     <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>,
};

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <span className={className}>{ICONS[name] ?? <span>{name}</span>}</span>;
}

/* ────────────────────────────────────────────────────────────
   Helpers
   ──────────────────────────────────────────────────────────── */

function Reveal({ children, delay = 0, y = 24 }: { children: React.ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-24 pb-20">{children}</section>;
}

function SH({ label, title, color }: { label: string; title: string; color: string }) {
  return (
    <Reveal>
      <div className="mb-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color }}>{label}</p>
        <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: "#1a1a1a" }}>{title}</h2>
        <div className="mt-3 h-px w-16" style={{ background: color }} />
      </div>
    </Reveal>
  );
}

/* ────────────────────────────────────────────────────────────
   Lightbox (for mobile screenshots)
   ──────────────────────────────────────────────────────────── */

function Lightbox({ isOpen, src, label, onClose }: { isOpen: boolean; src: string; label: string; onClose: () => void }) {
  useEffect(() => {
    if (!isOpen) return;
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [isOpen, onClose]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }} onClick={onClose}>
          <motion.div className="relative mx-4 max-h-[85vh] w-auto max-w-sm"
            initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}>
            {/* Phone frame */}
            <div className="overflow-hidden rounded-[2.5rem] border-[6px] border-gray-800 bg-gray-800 shadow-2xl">
              <div className="relative mx-auto h-6 w-24 rounded-b-2xl bg-gray-800" />
              <Image src={src} alt={label} width={390} height={844}
                style={{ width: "100%", height: "auto", display: "block" }} priority />
            </div>
            <p className="mt-3 text-center text-xs" style={{ color: "#ccc" }}>Tap outside or press Esc to close</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ────────────────────────────────────────────────────────────
   Phone Frame — for mobile app screenshots
   ──────────────────────────────────────────────────────────── */

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="group relative cursor-pointer transition-all duration-300 hover:-translate-y-1"
        onClick={() => setOpen(true)}>
        <div className="overflow-hidden rounded-[2rem] border-[5px] border-gray-800 bg-gray-800 shadow-xl transition-shadow duration-300 group-hover:shadow-2xl">
          {/* Notch */}
          <div className="relative mx-auto h-5 w-20 rounded-b-xl bg-gray-800" />
          <div className="relative bg-white">
            <Image src={src} alt={alt} width={390} height={844}
              style={{ width: "100%", height: "auto", display: "block" }}
              sizes="(max-width: 640px) 45vw, 200px" loading="lazy" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/15">
              <span className="rounded-xl bg-white/80 px-3 py-1.5 text-[10px] font-bold opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100"
                style={{ color: "#1a1a1a" }}>View Full</span>
            </div>
          </div>
          {/* Home bar */}
          <div className="flex justify-center py-2 bg-gray-800">
            <div className="h-1 w-16 rounded-full bg-gray-600" />
          </div>
        </div>
      </div>
      <Lightbox isOpen={open} src={src} label={alt} onClose={() => setOpen(false)} />
    </>
  );
}


/* ────────────────────────────────────────────────────────────
   Sidebar Nav
   ──────────────────────────────────────────────────────────── */

const navItems = [
  { id: "overview",      label: "Overview" },
  { id: "challenge",     label: "The Challenge" },
  { id: "approach",      label: "Our Approach" },
  { id: "modules",       label: "App Modules" },
  { id: "screenshots",   label: "Screenshots" },
  { id: "architecture",  label: "Architecture" },
  { id: "tech",          label: "Tech Stack" },
  { id: "timeline",      label: "Timeline" },
  { id: "result",        label: "The Result" },
];


/* ────────────────────────────────────────────────────────────
   Main Component
   ──────────────────────────────────────────────────────────── */

export default function PopularBreadClient({ data }: { data: any }) {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const els = navItems.map((n) => document.getElementById(n.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => obs.observe(el!));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const {
    color, colorRgb, title, subtitle, category, liveUrl,
    meta, overview, challenge, approach, modules,
    screenshots, architecture, techStack, results, timeline,
  } = data;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F5", color: "#1a1a1a" }}>

      {/* ─── Top Navbar ─── */}
      <nav className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "shadow-lg shadow-black/5" : ""}`}
        style={{ backgroundColor: scrolled ? "rgba(250,247,245,0.95)" : "rgba(250,247,245,0.85)", backdropFilter: "blur(16px)", borderColor: "rgba(198,209,215,0.3)" }}>
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#f97316]" style={{ color: "#6B5A5A" }}>
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H6.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L6.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            Back to Portfolio
          </Link>
          <span className="hidden rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-widest sm:inline-block"
            style={{ color, borderColor: `rgba(${colorRgb},0.4)`, background: `rgba(${colorRgb},0.1)` }}>{category}</span>
          <div className="w-24" />
        </div>
      </nav>

      {/* ─── Layout ─── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 xl:grid-cols-[260px_1fr]">

          {/* ─── Sidebar ─── */}
          <aside className="hidden lg:block">
            <div className="sticky top-20 pt-16">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: "#999" }}>Case Study</p>
              <h3 className="mb-6 text-sm font-bold" style={{ color: "#1a1a1a" }}>{title}</h3>
              <nav className="flex flex-col gap-0.5">
                {navItems.map((item) => {
                  const active = activeSection === item.id;
                  return (
                    <a key={item.id} href={`#${item.id}`}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all"
                      style={{ color: active ? "#1a1a1a" : "#6B5A5A", background: active ? `rgba(${colorRgb},0.1)` : "transparent" }}>
                      <span className="h-1.5 w-1.5 rounded-full flex-shrink-0 transition-all"
                        style={{ background: active ? color : "rgba(198,209,215,0.6)", transform: active ? "scale(1.4)" : "scale(1)" }} />
                      {item.label}
                      {active && <motion.div layoutId="sidebar-active-pb" className="ml-auto h-4 w-0.5 rounded-full" style={{ background: color }} />}
                    </a>
                  );
                })}
              </nav>
              <div className="mt-8 space-y-3 border-t pt-6" style={{ borderColor: "rgba(198,209,215,0.3)" }}>
                {meta.slice(0, 4).map((m: any) => (
                  <div key={m.label} className="flex items-start gap-2.5">
                    <Icon name={m.icon} className="text-[#f97316]" />
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "#999" }}>{m.label}</p>
                      <p className="text-xs font-medium" style={{ color: "#1a1a1a" }}>{m.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* ─── Main ─── */}
          <main className="pb-24 pt-12">

            {/* Hero */}
            <Reveal>
              <header className="mb-16">
                <span className="mb-4 inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                  style={{ color, borderColor: `rgba(${colorRgb},0.4)`, background: `rgba(${colorRgb},0.1)` }}>{category}</span>
                <h1 className="mb-3 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl" style={{ color: "#1a1a1a" }}>{title}</h1>
                <p className="mb-8 text-lg" style={{ color: "#6B5A5A" }}>{subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((t: any) => (
                    <span key={t.name} className="rounded-md border px-3 py-1 text-xs font-medium"
                      style={{ borderColor: "rgba(198,209,215,0.5)", color: "#1a1a1a", backgroundColor: "white" }}>{t.name}</span>
                  ))}
                </div>
                {liveUrl && (
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2.5 rounded-xl px-6 py-3 text-sm font-bold text-white transition-all hover:brightness-110 hover:shadow-lg"
                    style={{ backgroundColor: "#1a1a1a" }}>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893 2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199 2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.3 12l2.398-2.492zM5.864 3.458l10.937 6.333-2.302 2.302L5.864 3.458z" />
                    </svg>
                    Get on Play Store
                  </a>
                )}
              </header>
            </Reveal>

            {/* Hero — App Preview (3 phones) */}
            <Reveal delay={0.1}>
              <div className="mb-16 flex items-end justify-center gap-4 sm:gap-6">
                <div className="w-32 sm:w-40 opacity-80 -translate-y-4">
                  <PhoneFrame src={screenshots[0].src} alt={`${title} — ${screenshots[0].label}`} />
                </div>
                <div className="w-40 sm:w-48 z-10">
                  <PhoneFrame src={screenshots[1]?.src ?? screenshots[0].src} alt={`${title} — ${screenshots[1]?.label ?? screenshots[0].label}`} />
                </div>
                <div className="w-32 sm:w-40 opacity-80 -translate-y-4">
                  <PhoneFrame src={screenshots[2]?.src ?? screenshots[0].src} alt={`${title} — ${screenshots[2]?.label ?? screenshots[0].label}`} />
                </div>
              </div>
            </Reveal>

            {/* Meta Cards */}
            <Reveal delay={0.05}>
              <div className="mb-16 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {meta.map((m: any) => (
                  <div key={m.label} className="rounded-2xl border p-4" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                    <Icon name={m.icon} className="text-[#f97316]" />
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: "#999" }}>{m.label}</p>
                    <p className="mt-0.5 text-sm font-semibold" style={{ color: "#1a1a1a" }}>{m.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* 01 — Overview */}
            <Section id="overview">
              <SH label="01. Overview" title={subtitle} color={color} />
              <Reveal><p className="text-base leading-8" style={{ color: "#6B5A5A" }}>{overview}</p></Reveal>
            </Section>

            {/* 02 — The Challenge */}
            <Section id="challenge">
              <SH label={`02. ${challenge.heading}`} title={challenge.heading} color={color} />
              <Reveal><p className="mb-8 text-base leading-8" style={{ color: "#6B5A5A" }}>{challenge.body}</p></Reveal>
              <Reveal delay={0.05}>
                <div className="rounded-2xl border p-6" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                  <ul className="space-y-3">
                    {challenge.points.map((p: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="check" className="mt-0.5 flex-shrink-0 text-[#f97316]" />
                        <span className="text-sm leading-relaxed" style={{ color: "#4a4a4a" }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </Section>

            {/* 03 — Our Approach */}
            <Section id="approach">
              <SH label={`03. ${approach.heading}`} title={approach.heading} color={color} />
              <Reveal><p className="mb-8 text-base leading-8" style={{ color: "#6B5A5A" }}>{approach.body}</p></Reveal>
              <Reveal delay={0.05}>
                <div className="rounded-2xl border p-6" style={{ borderColor: `rgba(${colorRgb},0.25)`, backgroundColor: "white" }}>
                  <ul className="space-y-3">
                    {approach.points.map((p: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="check" className="mt-0.5 flex-shrink-0 text-[#f97316]" />
                        <span className="text-sm leading-relaxed" style={{ color: "#4a4a4a" }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </Section>

            {/* 04 — App Modules */}
            <Section id="modules">
              <SH label="04. App Modules" title="What the app includes" color={color} />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {modules.map((m: any, i: number) => (
                  <Reveal key={m.name} delay={0.04 * i}>
                    <div className="rounded-2xl border p-5 transition-all duration-300 hover:shadow-md"
                      style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                      <div className="mb-3 flex items-center gap-3">
                        <Icon name={m.icon} className="text-[#f97316]" />
                        <h3 className="font-bold text-sm" style={{ color: "#1a1a1a" }}>{m.name}</h3>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#6B5A5A" }}>{m.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* 05 — Screenshots (mobile app gallery) */}
            <Section id="screenshots">
              <SH label="05. Screenshots" title="See it in action" color={color} />
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {screenshots.map((s: any, i: number) => (
                  <Reveal key={s.src} delay={0.05 * i}>
                    <div className="text-center">
                      <PhoneFrame src={s.src} alt={`${title} — ${s.label}`} />
                      <p className="mt-3 text-xs font-semibold" style={{ color: "#1a1a1a" }}>{s.label}</p>
                      <p className="mt-0.5 text-[11px] leading-snug" style={{ color: "#6B5A5A" }}>{s.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* 06 — Architecture */}
            <Section id="architecture">
              <SH label="06. Architecture" title="How the app is structured" color={color} />
              <div className="grid gap-4 sm:grid-cols-2">
                {architecture.map((a: any, i: number) => (
                  <Reveal key={a.layer} delay={0.05 * i}>
                    <div className="rounded-2xl border p-5" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                      <div className="mb-2 flex items-center gap-2">
                        <Icon name={a.icon} className="text-[#f97316]" />
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: a.color }}>{a.layer}</span>
                      </div>
                      <h4 className="mb-1.5 font-bold" style={{ color: "#1a1a1a" }}>{a.tech}</h4>
                      <p className="text-xs leading-relaxed" style={{ color: "#6B5A5A" }}>{a.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* 07 — Tech Stack */}
            <Section id="tech">
              <SH label="07. Tech Stack" title="Technologies Used" color={color} />
              <div className="grid gap-4 sm:grid-cols-2">
                {techStack.map((t: any, i: number) => (
                  <Reveal key={t.name} delay={0.05 * i}>
                    <div className="rounded-2xl border p-5" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                      <div className="mb-2 flex items-center gap-2">
                        <Icon name={t.icon} className="text-[#f97316]" />
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>{t.category}</span>
                      </div>
                      <h4 className="mb-1.5 font-bold" style={{ color: "#1a1a1a" }}>{t.name}</h4>
                      <p className="text-xs leading-relaxed" style={{ color: "#6B5A5A" }}>{t.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* 08 — Timeline */}
            <Section id="timeline">
              <SH label="08. Timeline" title="How We Delivered" color={color} />
              <div className="relative space-y-0">
                <div className="absolute left-[27px] top-0 h-full w-px" style={{ backgroundColor: "rgba(198,209,215,0.4)" }} />
                {timeline.map((t: any, i: number) => (
                  <Reveal key={t.phase} delay={0.06 * i}>
                    <div className="relative flex gap-6 pb-8">
                      <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold"
                        style={{ color, borderColor: `rgba(${colorRgb},0.35)`, backgroundColor: "white" }}>{t.phase}</div>
                      <div className="flex-1 pt-3">
                        <h3 className="mb-1 font-bold" style={{ color: "#1a1a1a" }}>{t.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#6B5A5A" }}>{t.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* 09 — The Result */}
            <Section id="result">
              <SH label="09. The Result" title="The Result" color={color} />
              <Reveal>
                <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {results.map((r: any) => (
                    <div key={r.label} className="rounded-2xl border p-5 text-center" style={{ borderColor: `rgba(${colorRgb},0.3)`, backgroundColor: "white" }}>
                      <p className="text-2xl font-black sm:text-3xl" style={{ color }}>{r.value}{r.suffix}</p>
                      <p className="mt-1 text-xs" style={{ color: "#6B5A5A" }}>{r.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </Section>

            {/* CTA */}
            <Reveal>
              <div className="rounded-3xl border p-10 text-center" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color }}>Start a Project</p>
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl" style={{ color: "#1a1a1a" }}>Need a Similar App?</h2>
                <p className="mx-auto mb-8 max-w-md" style={{ color: "#6B5A5A" }}>
                  We build business management apps, inventory systems, and operational tools for businesses across India.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="/#contact" className="rounded-xl px-8 py-3 text-sm font-bold text-white transition-all hover:brightness-110 hover:shadow-lg"
                    style={{ backgroundColor: color }}>Start Your Project →</Link>
                  <Link href="/" className="rounded-xl border px-8 py-3 text-sm font-bold transition-all hover:shadow-sm"
                    style={{ borderColor: "rgba(198,209,215,0.5)", color: "#1a1a1a", backgroundColor: "#FAF7F5" }}>View All Projects</Link>
                </div>
              </div>
            </Reveal>

          </main>
        </div>
      </div>
    </div>
  );
}
