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
  globe:     <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.268.262-2.475.734-3.571" /></svg>,
  home:      <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>,
  "map-pin": <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" /></svg>,
  wrench:    <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" /></svg>,
  calendar:  <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>,
  briefcase: <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75a23.978 23.978 0 0 1-7.577-1.22 2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>,

  /* features */
  shield:    <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  bug:       <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152-6.135c-.117-2.776-.726-4.68-1.305-5.555M12 12.75c-2.883 0-5.647.508-8.208 1.44.125-2.104.52-4.136 1.153-6.135.117-2.776.726-4.68 1.305-5.555M12 12.75V6M8.25 3h7.5" /></svg>,
  snowflake: <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18L8.25 6.75M12 3l3.75 3.75M12 21l-3.75-3.75M12 21l3.75-3.75M3 12h18M3 12l3.75-3.75M3 12l3.75 3.75M21 12l-3.75-3.75M21 12l-3.75 3.75" /></svg>,
  fridge:    <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 3.75h13.5v16.5H5.25V3.75zM5.25 12h13.5M9 6.75v2.25M9 15v2.25" /></svg>,
  washing:   <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 3h13.5v18H5.25V3zM9 6h.008v.008H9V6zm1.5 0h.008v.008H10.5V6zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>,
  shower:    <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 0a6.75 6.75 0 0 1 6.75 6.75h-13.5A6.75 6.75 0 0 1 12 5.25zm-6.75 9v6m3-6v6m3.75-6v6m3.75-6v6m3-6v6" /></svg>,
  bolt:      <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
  building:  <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>,
  chat:      <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>,

  /* tech */
  code:      <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>,
  component: <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313" /></svg>,
  palette:   <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" /></svg>,
  fire:      <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18z" /></svg>,
  deploy:    <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" /></svg>,

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
   Lightbox
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
        <motion.div className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }} onClick={onClose}>
          <motion.div className="relative my-10 w-[92%] max-w-5xl"
            initial={{ scale: 0.94, opacity: 0, y: 16 }} animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}>
            <div className="overflow-hidden rounded-2xl border shadow-2xl" style={{ borderColor: "rgba(198,209,215,0.3)" }}>
              <div className="flex items-center gap-3 border-b px-4 py-2.5" style={{ backgroundColor: "#f1f3f5", borderColor: "rgba(198,209,215,0.3)" }}>
                <button onClick={onClose} className="h-3 w-3 rounded-full bg-red-500 hover:bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-[11px]" style={{ color: "#6B5A5A" }}>{label}</span>
              </div>
              <div style={{ backgroundColor: "#fff" }}>
                <Image src={src} alt={label} width={1440} height={900} style={{ width: "100%", height: "auto", display: "block" }} priority />
              </div>
            </div>
            <p className="mt-3 text-center text-xs" style={{ color: "#6B5A5A" }}>Click outside or press Esc to close</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


/* ────────────────────────────────────────────────────────────
   Browser Frame
   ──────────────────────────────────────────────────────────── */

function BrowserFrame({ src, alt, url }: { src: string; alt: string; url: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="group relative cursor-pointer overflow-hidden rounded-2xl border shadow-lg transition-all duration-300 hover:shadow-xl"
        style={{ borderColor: "rgba(198,209,215,0.4)" }} onClick={() => setOpen(true)}>
        <div className="flex items-center gap-3 border-b px-4 py-2.5" style={{ backgroundColor: "#f1f3f5", borderColor: "rgba(198,209,215,0.3)" }}>
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="flex flex-1 items-center gap-1.5 rounded-md border bg-white px-3 py-1" style={{ borderColor: "rgba(198,209,215,0.5)" }}>
            <svg className="h-2.5 w-2.5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
            <span className="truncate text-[10px]" style={{ color: "#6B5A5A" }}>{url}</span>
          </div>
        </div>
        <div className="relative" style={{ backgroundColor: "#fff" }}>
          <Image src={src} alt={alt} width={1440} height={900}
            style={{ width: "100%", height: "auto", display: "block" }}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="transition-transform duration-500 group-hover:scale-[1.015]" loading="lazy" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
            <span className="rounded-xl border border-white/40 bg-white/80 px-4 py-2 text-xs font-bold opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100"
              style={{ color: "#1a1a1a" }}>Open Full Screenshot</span>
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
  { id: "overview",    label: "Overview" },
  { id: "challenge",   label: "The Challenge" },
  { id: "approach",    label: "Our Approach" },
  { id: "features",    label: "Key Services" },
  { id: "screenshots", label: "Screenshots" },
  { id: "tech",        label: "Tech Stack" },
  { id: "timeline",    label: "Timeline" },
  { id: "result",      label: "The Result" },
];


/* ────────────────────────────────────────────────────────────
   Main Component
   ──────────────────────────────────────────────────────────── */

export default function MadzaCaseStudyClient({ data }: { data: any }) {
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
    meta, overview, challenge, approach, features,
    screenshots, techStack, results, timeline,
  } = data;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F5", color: "#1a1a1a" }}>

      {/* ─── Top Navbar ─── */}
      <nav className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "shadow-lg shadow-black/5" : ""}`}
        style={{ backgroundColor: scrolled ? "rgba(250,247,245,0.95)" : "rgba(250,247,245,0.85)", backdropFilter: "blur(16px)", borderColor: "rgba(198,209,215,0.3)" }}>
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#06b6d4]" style={{ color: "#6B5A5A" }}>
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H6.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L6.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            Back to Portfolio
          </Link>
          <span className="hidden rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-widest sm:inline-block"
            style={{ color, borderColor: `rgba(${colorRgb},0.4)`, background: `rgba(${colorRgb},0.1)` }}>{category}</span>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-lg px-4 py-1.5 text-xs font-bold text-white transition-all hover:brightness-110 sm:flex"
              style={{ backgroundColor: color }}>Visit Website ↗</a>
          )}
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
                      {active && <motion.div layoutId="sidebar-active-mz" className="ml-auto h-4 w-0.5 rounded-full" style={{ background: color }} />}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-8 space-y-3 border-t pt-6" style={{ borderColor: "rgba(198,209,215,0.3)" }}>
                {meta.slice(0, 4).map((m: any) => (
                  <div key={m.label} className="flex items-start gap-2.5">
                    <Icon name={m.icon} className="text-[#06b6d4]" />
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "#999" }}>{m.label}</p>
                      <p className="text-xs font-medium" style={{ color: "#1a1a1a" }}>{m.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold text-white transition-all hover:brightness-110"
                  style={{ backgroundColor: color }}>Visit Live Site ↗</a>
              )}
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
              </header>
            </Reveal>

            {/* Hero Screenshot */}
            <Reveal delay={0.1}>
              <div className="mb-16">
                <BrowserFrame src={screenshots[0].src} alt={`${title} — ${screenshots[0].label}`} url="madzacompany.in" />
              </div>
            </Reveal>

            {/* Meta Cards */}
            <Reveal delay={0.05}>
              <div className="mb-16 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {meta.map((m: any) => (
                  <div key={m.label} className="rounded-2xl border p-4" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                    <Icon name={m.icon} className="text-[#06b6d4]" />
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
                        <Icon name="check" className="mt-0.5 flex-shrink-0 text-[#06b6d4]" />
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
                        <Icon name="check" className="mt-0.5 flex-shrink-0 text-[#06b6d4]" />
                        <span className="text-sm leading-relaxed" style={{ color: "#4a4a4a" }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </Section>

            {/* 04 — Key Services */}
            <Section id="features">
              <SH label="04. Key Services" title="What the website covers" color={color} />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((f: any, i: number) => (
                  <Reveal key={f.title} delay={0.04 * i}>
                    <div className="rounded-2xl border p-5 transition-all duration-300 hover:shadow-md"
                      style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                      <div className="mb-3 flex items-center gap-3">
                        <Icon name={f.icon} className="text-[#06b6d4]" />
                        <h3 className="font-bold text-sm" style={{ color: "#1a1a1a" }}>{f.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#6B5A5A" }}>{f.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* 05 — Screenshots */}
            <Section id="screenshots">
              <SH label="05. Screenshots" title="See it in action" color={color} />
              <div className="space-y-8">
                {screenshots.map((s: any, i: number) => (
                  <Reveal key={s.src} delay={0.08 * i}>
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <span className="font-mono text-xs font-bold" style={{ color }}>{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>{s.label}</h3>
                        <div className="h-px flex-1" style={{ backgroundColor: "rgba(198,209,215,0.4)" }} />
                      </div>
                      <BrowserFrame src={s.src} alt={`${title} — ${s.label}`} url="madzacompany.in" />
                      {s.desc && <p className="mt-3 text-sm" style={{ color: "#6B5A5A" }}>{s.desc}</p>}
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* 06 — Tech Stack */}
            <Section id="tech">
              <SH label="06. Tech Stack" title="Technologies Used" color={color} />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {techStack.map((t: any, i: number) => (
                  <Reveal key={t.name} delay={0.05 * i}>
                    <div className="rounded-2xl border p-5" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                      <div className="mb-2 flex items-center gap-2">
                        <Icon name={t.icon} className="text-[#06b6d4]" />
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>{t.category}</span>
                      </div>
                      <h4 className="mb-1.5 font-bold" style={{ color: "#1a1a1a" }}>{t.name}</h4>
                      <p className="text-xs leading-relaxed" style={{ color: "#6B5A5A" }}>{t.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* 07 — Timeline */}
            <Section id="timeline">
              <SH label="07. Timeline" title="How We Delivered" color={color} />
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

            {/* 08 — The Result */}
            <Section id="result">
              <SH label="08. The Result" title="The Result" color={color} />
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
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl" style={{ color: "#1a1a1a" }}>Need a Similar Platform?</h2>
                <p className="mx-auto mb-8 max-w-md" style={{ color: "#6B5A5A" }}>
                  We build service platforms, booking websites, and digital solutions for home services businesses.
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
