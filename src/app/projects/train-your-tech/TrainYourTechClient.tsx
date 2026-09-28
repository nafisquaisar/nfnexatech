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
  globe:      <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.268.262-2.475.734-3.571" /></svg>,
  clock:      <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>,
  graduation: <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>,
  user:       <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
  briefcase:  <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75a23.978 23.978 0 0 1-7.577-1.22 2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>,
  robot:      <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25zm1.5-9h6v3h-6v-3z" /></svg>,

  /* modules */
  lock:       <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25z" /></svg>,
  book:       <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>,
  document:   <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" /></svg>,
  video:      <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25z" /></svg>,
  mic:        <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3z" /></svg>,
  test:       <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" /></svg>,
  admin:      <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.004.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /></svg>,

  /* tech */
  component:  <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313" /></svg>,
  server:     <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg>,
  database:   <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>,
  fire:       <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18z" /></svg>,
  plug:       <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>,

  /* misc */
  check:      <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>,
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
  { id: "overview",      label: "Overview" },
  { id: "challenge",     label: "The Challenge" },
  { id: "approach",      label: "Our Approach" },
  { id: "modules",       label: "Platform Modules" },
  { id: "screenshots",   label: "Screenshots" },
  { id: "architecture",  label: "Architecture" },
  { id: "tech",          label: "Tech Stack" },
  { id: "timeline",      label: "Timeline" },
  { id: "result",        label: "The Result" },
];


/* ────────────────────────────────────────────────────────────
   Main Component
   ──────────────────────────────────────────────────────────── */

export default function TrainYourTechClient({ data }: { data: any }) {
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
    meta, overview, problem, solution, modules,
    screenshots, architecture, techStack, results, timeline,
  } = data;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F5", color: "#1a1a1a" }}>

      {/* ─── Top Navbar ─── */}
      <nav className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "shadow-lg shadow-black/5" : ""}`}
        style={{ backgroundColor: scrolled ? "rgba(250,247,245,0.95)" : "rgba(250,247,245,0.85)", backdropFilter: "blur(16px)", borderColor: "rgba(198,209,215,0.3)" }}>
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#a855f7]" style={{ color: "#6B5A5A" }}>
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
                      {active && <motion.div layoutId="sidebar-active-tyt" className="ml-auto h-4 w-0.5 rounded-full" style={{ background: color }} />}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-8 space-y-3 border-t pt-6" style={{ borderColor: "rgba(198,209,215,0.3)" }}>
                {meta.slice(0, 4).map((m: any) => (
                  <div key={m.label} className="flex items-start gap-2.5">
                    <Icon name={m.icon} className="text-[#a855f7]" />
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
              </header>
            </Reveal>

            {/* Hero Screenshot */}
            <Reveal delay={0.1}>
              <div className="mb-16">
                <BrowserFrame src={screenshots[0].src} alt={`${title} — ${screenshots[0].label}`} url="trainyourtech.com" />
              </div>
            </Reveal>

            {/* Meta Cards */}
            <Reveal delay={0.05}>
              <div className="mb-16 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {meta.map((m: any) => (
                  <div key={m.label} className="rounded-2xl border p-4" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                    <Icon name={m.icon} className="text-[#a855f7]" />
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
              <SH label={`02. ${problem.heading}`} title={problem.heading} color={color} />
              <Reveal><p className="mb-8 text-base leading-8" style={{ color: "#6B5A5A" }}>{problem.body}</p></Reveal>
              <Reveal delay={0.05}>
                <div className="rounded-2xl border p-6" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                  <ul className="space-y-3">
                    {problem.points.map((p: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="check" className="mt-0.5 flex-shrink-0 text-[#a855f7]" />
                        <span className="text-sm leading-relaxed" style={{ color: "#4a4a4a" }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </Section>

            {/* 03 — Our Approach */}
            <Section id="approach">
              <SH label={`03. ${solution.heading}`} title={solution.heading} color={color} />
              <Reveal><p className="mb-8 text-base leading-8" style={{ color: "#6B5A5A" }}>{solution.body}</p></Reveal>
              <Reveal delay={0.05}>
                <div className="rounded-2xl border p-6" style={{ borderColor: `rgba(${colorRgb},0.25)`, backgroundColor: "white" }}>
                  <ul className="space-y-3">
                    {solution.points.map((p: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="check" className="mt-0.5 flex-shrink-0 text-[#a855f7]" />
                        <span className="text-sm leading-relaxed" style={{ color: "#4a4a4a" }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </Section>

            {/* 04 — Platform Modules */}
            <Section id="modules">
              <SH label="04. Platform Modules" title="What the platform includes" color={color} />
              <div className="grid gap-4 sm:grid-cols-2">
                {modules.map((m: any, i: number) => (
                  <Reveal key={m.name} delay={0.04 * i}>
                    <div className="rounded-2xl border p-5 transition-all duration-300 hover:shadow-md"
                      style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                      <div className="mb-3 flex items-center gap-3">
                        <Icon name={m.icon} className="text-[#a855f7]" />
                        <h3 className="font-bold" style={{ color: "#1a1a1a" }}>{m.name}</h3>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#6B5A5A" }}>{m.desc}</p>
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
                      <BrowserFrame src={s.src} alt={`${title} — ${s.label}`} url="trainyourtech.com" />
                      {s.desc && <p className="mt-3 text-sm" style={{ color: "#6B5A5A" }}>{s.desc}</p>}
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* 06 — Architecture */}
            <Section id="architecture">
              <SH label="06. Architecture" title="How the platform is structured" color={color} />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {architecture.map((a: any, i: number) => (
                  <Reveal key={a.layer} delay={0.05 * i}>
                    <div className="rounded-2xl border p-5" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                      <div className="mb-2 flex items-center gap-2">
                        <Icon name={a.icon} className="text-[#a855f7]" />
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
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {techStack.map((t: any, i: number) => (
                  <Reveal key={t.name} delay={0.05 * i}>
                    <div className="rounded-2xl border p-5" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                      <div className="mb-2 flex items-center gap-2">
                        <Icon name={t.icon} className="text-[#a855f7]" />
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
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl" style={{ color: "#1a1a1a" }}>Need a Similar Platform?</h2>
                <p className="mx-auto mb-8 max-w-md" style={{ color: "#6B5A5A" }}>
                  We build EdTech platforms, learning management systems, and placement preparation tools for educational organisations.
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
