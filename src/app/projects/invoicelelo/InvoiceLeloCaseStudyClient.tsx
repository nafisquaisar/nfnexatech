"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ── SVG Icon Map ────────────────────────────────────────── */
const svgClass = "h-5 w-5";
const ICONS: Record<string, React.ReactNode> = {
  // Meta icons
  globe: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.268.262-2.475.734-3.571" /></svg>,
  clock: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>,
  building: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>,
  "map-pin": <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" /></svg>,
  briefcase: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75a23.978 23.978 0 0 1-7.577-1.22 2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>,
  chart: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z" /></svg>,

  // Feature icons
  invoice: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" /></svg>,
  calculator: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM5.625 21h12.75a1.875 1.875 0 0 0 1.875-1.875V4.875A1.875 1.875 0 0 0 18.375 3H5.625A1.875 1.875 0 0 0 3.75 4.875v14.25A1.875 1.875 0 0 0 5.625 21z" /></svg>,
  users: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0z" /></svg>,
  office: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>,
  clipboard: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" /></svg>,
  pdf: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" /></svg>,
  folder: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44z" /></svg>,
  dashboard: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25zM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25z" /></svg>,

  // Tech stack icons
  nextjs: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>,
  phone: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
  fire: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18z" /></svg>,
  database: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>,
  "credit-card": <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5z" /></svg>,

  // Misc
  "device-mobile": <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
};

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const icon = ICONS[name];
  if (!icon) return <span>{name}</span>;
  return <span className={className}>{icon}</span>;
}

/* ── Reveal wrapper ──────────────────────────────────────── */
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

/* ── Section wrapper ─────────────────────────────────────── */
function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-24 pb-20">{children}</section>;
}

/* ── Section heading ─────────────────────────────────────── */
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

/* ── Lightbox ────────────────────────────────────────────── */
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
          className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-black/70 backdrop-blur-md"
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
            <div className="overflow-hidden rounded-2xl border shadow-2xl" style={{ borderColor: "rgba(198,209,215,0.3)" }}>
              <div className="flex items-center gap-3 border-b px-4 py-2.5" style={{ backgroundColor: "#f1f3f5", borderColor: "rgba(198,209,215,0.3)" }}>
                <button onClick={onClose} className="h-3 w-3 rounded-full bg-red-500 transition-colors hover:bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-[11px]" style={{ color: "#6B5A5A" }}>{label}</span>
              </div>
              <div style={{ backgroundColor: "#fff" }}>
                <Image src={src} alt={label} width={1440} height={900}
                  style={{ width: "100%", height: "auto", display: "block" }} priority />
              </div>
            </div>
            <p className="mt-3 text-center text-xs" style={{ color: "#6B5A5A" }}>Click outside or press Esc to close</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Browser frame ───────────────────────────────────────── */
function BrowserFrame({ src, alt, url }: { src: string; alt: string; url: string }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  return (
    <>
      <div
        className="group relative cursor-pointer overflow-hidden rounded-2xl border shadow-lg transition-all duration-300 hover:shadow-xl"
        style={{ borderColor: "rgba(198,209,215,0.4)" }}
        onClick={() => setLightboxOpen(true)}
      >
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
          <svg className="h-3.5 w-3.5 transition-colors group-hover:text-[#16a34a]" style={{ color: "#999" }} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="relative" style={{ backgroundColor: "#fff" }}>
          <Image src={src} alt={alt} width={1440} height={900}
            style={{ width: "100%", height: "auto", display: "block" }}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="transition-transform duration-500 group-hover:scale-[1.015]" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
            <span className="rounded-xl border border-white/40 bg-white/80 px-4 py-2 text-xs font-bold opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100" style={{ color: "#1a1a1a" }}>
              Open Full Screenshot
            </span>
          </div>
        </div>
      </div>
      <CaseLightbox isOpen={lightboxOpen} src={src} label={alt} onClose={() => setLightboxOpen(false)} />
    </>
  );
}

/* ── Nav items ───────────────────────────────────────────── */
const navItems = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The Problem" },
  { id: "approach", label: "Our Approach" },
  { id: "features", label: "Key Features" },
  { id: "web-app", label: "Web & Android App" },
  { id: "screenshots", label: "Screenshots" },
  { id: "tech", label: "Tech Stack" },
  { id: "timeline", label: "Timeline" },
  { id: "outcome", label: "Outcome" },
];

/* ── MAIN CLIENT COMPONENT ───────────────────────────────── */
export default function InvoiceLeloCaseStudyClient({ data }: { data: any }) {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { color, colorRgb, title, subtitle, category, liveUrl, meta, overview,
    problem, approach, features, webAndApp, screenshots, techStack, outcome, timeline } = data;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F5", color: "#1a1a1a" }}>

      {/* ── Sticky top navbar ── */}
      <nav className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "shadow-lg shadow-black/5" : ""}`}
        style={{ backgroundColor: scrolled ? "rgba(250,247,245,0.95)" : "rgba(250,247,245,0.85)", backdropFilter: "blur(16px)", borderColor: "rgba(198,209,215,0.3)" }}>
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#16a34a]" style={{ color: "#6B5A5A" }}>
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
              style={{ backgroundColor: color }}>
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
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: "#999" }}>Case Study</p>
              <h3 className="mb-6 text-sm font-bold" style={{ color: "#1a1a1a" }}>{title}</h3>

              <nav className="flex flex-col gap-0.5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-250"
                      style={{
                        color: isActive ? "#1a1a1a" : "#6B5A5A",
                        background: isActive ? `rgba(${colorRgb},0.1)` : "transparent",
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full flex-shrink-0 transition-all duration-300"
                        style={{ background: isActive ? color : "rgba(198,209,215,0.6)", transform: isActive ? "scale(1.4)" : "scale(1)" }}
                      />
                      {item.label}
                      {isActive && (
                        <motion.div layoutId="sidebar-active-il" className="ml-auto h-4 w-0.5 rounded-full" style={{ background: color }} />
                      )}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-8 space-y-3 border-t pt-6" style={{ borderColor: "rgba(198,209,215,0.3)" }}>
                {meta.slice(0, 4).map((m: any) => (
                  <div key={m.label} className="flex items-start gap-2.5">
                    <Icon name={m.icon} className="text-[#16a34a]" />
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "#999" }}>{m.label}</p>
                      <p className="text-xs font-medium" style={{ color: "#1a1a1a" }}>{m.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold text-white transition-all duration-300 hover:brightness-110"
                  style={{ backgroundColor: color }}>
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
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs underline decoration-dotted hover:text-[#16a34a]" style={{ color: "#6B5A5A" }}>
                      invoicelelo.in ↗
                    </a>
                  )}
                </div>
                <h1 className="mb-3 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl" style={{ color: "#1a1a1a" }}>{title}</h1>
                <p className="mb-8 text-lg" style={{ color: "#6B5A5A" }}>{subtitle}</p>

                <div className="flex flex-wrap gap-2">
                  {techStack.map((t: any) => (
                    <span key={t.name} className="rounded-md border px-3 py-1 text-xs font-medium" style={{ borderColor: "rgba(198,209,215,0.5)", color: "#1a1a1a", backgroundColor: "white" }}>
                      {t.name}
                    </span>
                  ))}
                </div>
              </header>
            </Reveal>

            {/* ── HERO SCREENSHOT ── */}
            <Reveal delay={0.1}>
              <div className="mb-16">
                <BrowserFrame src={screenshots[0].src} alt={`${title} — ${screenshots[0].label}`} url="invoicelelo.in" />
              </div>
            </Reveal>

            {/* ── META CARDS ── */}
            <Reveal delay={0.05}>
              <div className="mb-16 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {meta.map((m: any) => (
                  <div key={m.label} className="rounded-2xl border p-4" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                    <Icon name={m.icon} className="text-[#16a34a]" />
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: "#999" }}>{m.label}</p>
                    <p className="mt-0.5 text-sm font-semibold" style={{ color: "#1a1a1a" }}>{m.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* ── 01. OVERVIEW ── */}
            <Section id="overview">
              <SH label="01. Overview" title={subtitle} color={color} />
              <Reveal>
                <div className="space-y-4">
                  {overview.split("\n\n").map((p: string, i: number) => (
                    <p key={i} className="text-base leading-8" style={{ color: "#6B5A5A" }}>{p}</p>
                  ))}
                </div>
              </Reveal>
            </Section>

            {/* ── 02. THE PROBLEM ── */}
            <Section id="problem">
              <SH label={`02. ${problem.heading}`} title={problem.title} color={color} />
              <Reveal>
                <p className="mb-6 text-base leading-8" style={{ color: "#6B5A5A" }}>{problem.body}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="rounded-2xl border p-6" style={{ borderColor: `rgba(${colorRgb},0.2)`, backgroundColor: "white" }}>
                  <p className="text-sm leading-7" style={{ color: "#4a4a4a" }}>{problem.conclusion}</p>
                </div>
              </Reveal>
            </Section>

            {/* ── 03. OUR APPROACH ── */}
            <Section id="approach">
              <SH label={`03. ${approach.heading}`} title={approach.title} color={color} />
              <Reveal>
                <div className="space-y-4">
                  {approach.body.split("\n\n").map((p: string, i: number) => (
                    <p key={i} className="text-base leading-8" style={{ color: "#6B5A5A" }}>{p}</p>
                  ))}
                </div>
              </Reveal>
            </Section>

            {/* ── 04. KEY FEATURES ── */}
            <Section id="features">
              <SH label="04. Key Features" title="Everything needed for everyday invoicing" color={color} />
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((f: any, i: number) => (
                  <Reveal key={f.title} delay={0.04 * i}>
                    <div className="rounded-2xl border p-5 transition-all duration-300 hover:shadow-md"
                      style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                      <div className="mb-3 flex items-center gap-3">
                        <Icon name={f.icon} className="text-[#16a34a]" />
                        <h3 className="font-bold" style={{ color: "#1a1a1a" }}>{f.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#6B5A5A" }}>{f.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── 05. WEB & ANDROID APP ── */}
            <Section id="web-app">
              <SH label={`05. ${webAndApp.heading}`} title={webAndApp.title} color={color} />
              <Reveal>
                <p className="mb-6 text-base leading-8" style={{ color: "#6B5A5A" }}>{webAndApp.body}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="flex items-start gap-4 rounded-2xl border p-6" style={{ borderColor: `rgba(${colorRgb},0.25)`, backgroundColor: "white" }}>
                  <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full" style={{ background: `rgba(${colorRgb},0.12)`, color }}><Icon name="phone" /></span>
                  <p className="text-sm leading-7" style={{ color: "#4a4a4a" }}>{webAndApp.note}</p>
                </div>
              </Reveal>
            </Section>

            {/* ── 06. SCREENSHOTS ── */}
            <Section id="screenshots">
              <SH label="06. Screenshots" title="See it in action" color={color} />
              <div className="space-y-8">
                {screenshots.map((s: any, i: number) => (
                  <Reveal key={s.src} delay={0.08 * i}>
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <span className="font-mono text-xs font-bold" style={{ color }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>{s.label}</h3>
                        <div className="h-px flex-1" style={{ backgroundColor: "rgba(198,209,215,0.4)" }} />
                      </div>
                      <BrowserFrame src={s.src} alt={`${title} — ${s.label}`} url="invoicelelo.in" />
                      {s.desc && <p className="mt-3 text-sm" style={{ color: "#6B5A5A" }}>{s.desc}</p>}
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── 07. TECH STACK ── */}
            <Section id="tech">
              <SH label="07. Tech Stack" title="Technologies Used" color={color} />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {techStack.map((t: any, i: number) => (
                  <Reveal key={t.name} delay={0.05 * i}>
                    <div className="rounded-2xl border p-5" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                      <div className="mb-2 flex items-center gap-2">
                        <Icon name={t.icon} className="text-[#16a34a]" />
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>{t.category}</span>
                      </div>
                      <h4 className="mb-1.5 font-bold" style={{ color: "#1a1a1a" }}>{t.name}</h4>
                      <p className="text-xs leading-relaxed" style={{ color: "#6B5A5A" }}>{t.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.1}>
                <p className="mt-6 text-sm italic" style={{ color: "#6B5A5A" }}>
                  The stack was chosen around the product&apos;s needs, keeping the application practical, maintainable, and easy to extend.
                </p>
              </Reveal>
            </Section>

            {/* ── 08. TIMELINE ── */}
            <Section id="timeline">
              <SH label="08. Timeline" title="How We Delivered" color={color} />
              <div className="relative space-y-0">
                <div className="absolute left-[27px] top-0 h-full w-px" style={{ backgroundColor: "rgba(198,209,215,0.4)" }} />
                {timeline.map((t: any, i: number) => (
                  <Reveal key={t.phase} delay={0.06 * i}>
                    <div className="relative flex gap-6 pb-8">
                      <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold"
                        style={{ color, borderColor: `rgba(${colorRgb},0.35)`, background: `rgba(${colorRgb},0.08)`, backgroundColor: "white" }}>
                        {t.phase}
                      </div>
                      <div className="flex-1 pt-3">
                        <h3 className="mb-1 font-bold" style={{ color: "#1a1a1a" }}>{t.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#6B5A5A" }}>{t.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── 09. OUTCOME ── */}
            <Section id="outcome">
              <SH label={`09. ${outcome.heading}`} title={outcome.title} color={color} />
              <Reveal>
                <p className="mb-6 text-base leading-8" style={{ color: "#6B5A5A" }}>{outcome.body}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="rounded-2xl border p-6" style={{ borderColor: `rgba(${colorRgb},0.2)`, backgroundColor: "white" }}>
                  <p className="text-sm font-medium leading-7" style={{ color: "#4a4a4a" }}>{outcome.conclusion}</p>
                </div>
              </Reveal>
            </Section>

            {/* ── CTA ── */}
            <Reveal>
              <div className="rounded-3xl border p-10 text-center" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color }}>Start a Project</p>
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl" style={{ color: "#1a1a1a" }}>Need a Similar Platform?</h2>
                <p className="mx-auto mb-8 max-w-md" style={{ color: "#6B5A5A" }}>
                  We build invoicing tools, billing platforms, and business apps for companies across India.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="/#contact"
                    className="rounded-xl px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:brightness-110 hover:shadow-lg"
                    style={{ backgroundColor: color }}>
                    Start Your Project →
                  </Link>
                  <Link href="/"
                    className="rounded-xl border px-8 py-3 text-sm font-bold transition-all duration-300 hover:shadow-sm"
                    style={{ borderColor: "rgba(198,209,215,0.5)", color: "#1a1a1a", backgroundColor: "#FAF7F5" }}>
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
