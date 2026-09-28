"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ── SVG Icon Map ────────────────────────────────────────── */
const svgClass = "h-5 w-5";
const ICONS: Record<string, React.ReactNode> = {
  globe: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.268.262-2.475.734-3.571" /></svg>,
  clock: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>,
  hospital: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>,
  handshake: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0z" /></svg>,
  briefcase: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75a23.978 23.978 0 0 1-7.577-1.22 2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>,
  phone: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
  compass: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m9 6.75 3 3m0 0 3-3m-3 3v-6M3.75 21h16.5M5.625 4.5h12.75c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125H5.625a1.125 1.125 0 0 1-1.125-1.125V5.625c0-.621.504-1.125 1.125-1.125z" /></svg>,
  palette: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" /></svg>,
  layout: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25zM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25z" /></svg>,
  target: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /></svg>,
  doctor: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /></svg>,
  calendar: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>,
  emergency: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>,
  chat: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>,
  facilities: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>,
  news: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5" /></svg>,
  question: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827m0 0v.75m0-3.5V16.5m0 0h.008v.008H12v-.008zM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>,
  responsive: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
  search: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" /></svg>,
  trophy: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m4.644-7.016-1.683 4.894" /></svg>,
  bolt: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
  book: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>,
  puzzle: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875S10.5 3.089 10.5 4.125c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.421 48.421 0 0 1-4.185-.428l.204-.253c.342-.428.548-.96.548-1.524C7.16 2.46 5.894 1.005 4.5 1.005c-1.394 0-2.66 1.455-2.66 3.52 0 .564.207 1.096.548 1.524l.204.253a48.64 48.64 0 0 1-4.185.428A.64.64 0 0 1-.25 6.087v0" /></svg>,
  image: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z" /></svg>,
  accessibility: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" /></svg>,
  chart: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z" /></svg>,
  check: <svg className={svgClass} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>,
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
          <motion.div className="relative my-10 w-[92%] max-w-5xl"
            initial={{ scale: 0.94, opacity: 0, y: 16 }} animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
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

/* ── Browser frame ───────────────────────────────────────── */
function BrowserFrame({ src, alt, url }: { src: string; alt: string; url: string }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  return (
    <>
      <div className="group relative cursor-pointer overflow-hidden rounded-2xl border shadow-lg transition-all duration-300 hover:shadow-xl"
        style={{ borderColor: "rgba(198,209,215,0.4)" }} onClick={() => setLightboxOpen(true)}>
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
          <Image src={src} alt={alt} width={1440} height={900} style={{ width: "100%", height: "auto", display: "block" }}
            sizes="(max-width: 1024px) 100vw, 60vw" className="transition-transform duration-500 group-hover:scale-[1.015]" loading="lazy" />
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
  { id: "challenge", label: "The Challenge" },
  { id: "approach", label: "Our Approach" },
  { id: "features", label: "Key Features" },
  { id: "ux", label: "UX Decisions" },
  { id: "screenshots", label: "Screenshots" },
  { id: "tech", label: "Tech & Delivery" },
  { id: "result", label: "The Result" },
];

/* ── MAIN CLIENT COMPONENT ───────────────────────────────── */
export default function NestivaHospitalCaseStudyClient({ data }: { data: any }) {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrolled, setScrolled] = useState(false);

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

  const { color, colorRgb, title, headline, subtitle, category, categoryFull, liveUrl, tagline,
    meta, overview, challenge, approach, features, screenshots, uxDecisions, results, techDelivery } = data;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F5", color: "#1a1a1a" }}>

      {/* ── Sticky top navbar ── */}
      <nav className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "shadow-lg shadow-black/5" : ""}`}
        style={{ backgroundColor: scrolled ? "rgba(250,247,245,0.95)" : "rgba(250,247,245,0.85)", backdropFilter: "blur(16px)", borderColor: "rgba(198,209,215,0.3)" }}>
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#0d9488]" style={{ color: "#6B5A5A" }}>
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
                    <a key={item.id} href={`#${item.id}`}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-250"
                      style={{ color: isActive ? "#1a1a1a" : "#6B5A5A", background: isActive ? `rgba(${colorRgb},0.1)` : "transparent" }}>
                      <span className="h-1.5 w-1.5 rounded-full flex-shrink-0 transition-all duration-300"
                        style={{ background: isActive ? color : "rgba(198,209,215,0.6)", transform: isActive ? "scale(1.4)" : "scale(1)" }} />
                      {item.label}
                      {isActive && <motion.div layoutId="sidebar-active-n" className="ml-auto h-4 w-0.5 rounded-full" style={{ background: color }} />}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-8 space-y-3 border-t pt-6" style={{ borderColor: "rgba(198,209,215,0.3)" }}>
                {meta.slice(0, 4).map((m: any) => (
                  <div key={m.label} className="flex items-start gap-2.5">
                    <Icon name={m.icon} className="text-[#0d9488]" />
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
                    {categoryFull}
                  </span>
                </div>
                <h1 className="mb-3 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl" style={{ color: "#1a1a1a" }}>{title}</h1>
                <p className="mb-2 text-xl font-semibold" style={{ color: "#0d9488" }}>{headline}</p>
                <p className="mb-8 text-lg" style={{ color: "#6B5A5A" }}>{subtitle}</p>
              </header>
            </Reveal>

            {/* ── HERO SCREENSHOT ── */}
            <Reveal delay={0.1}>
              <div className="mb-16">
                <BrowserFrame src={screenshots[0].src} alt={`${title} — ${screenshots[0].label}`} url="nestivahospital.com" />
              </div>
            </Reveal>

            {/* ── META CARDS ── */}
            <Reveal delay={0.05}>
              <div className="mb-16 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {meta.map((m: any) => (
                  <div key={m.label} className="rounded-2xl border p-4" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                    <Icon name={m.icon} className="text-[#0d9488]" />
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: "#999" }}>{m.label}</p>
                    <p className="mt-0.5 text-sm font-semibold" style={{ color: "#1a1a1a" }}>{m.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* ── 01. OVERVIEW ── */}
            <Section id="overview">
              <SH label="01. Overview" title={tagline} color={color} />
              <Reveal>
                <p className="text-base leading-8" style={{ color: "#6B5A5A" }}>{overview}</p>
              </Reveal>
            </Section>

            {/* ── 02. THE CHALLENGE ── */}
            <Section id="challenge">
              <SH label={`02. ${challenge.heading}`} title={challenge.body.split(".")[0] + "."} color={color} />
              <Reveal>
                <p className="mb-8 text-base leading-8" style={{ color: "#6B5A5A" }}>{challenge.body}</p>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {challenge.points.map((p: any, i: number) => (
                  <Reveal key={p.number} delay={0.04 * i}>
                    <div className="rounded-2xl border p-5" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                      <span className="mb-2 inline-block text-xs font-bold" style={{ color }}>{p.number}</span>
                      <h3 className="mb-2 font-bold" style={{ color: "#1a1a1a" }}>{p.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#6B5A5A" }}>{p.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── 03. OUR APPROACH ── */}
            <Section id="approach">
              <SH label={`03. ${approach.heading}`} title={approach.intro} color={color} />
              <div className="grid gap-4 sm:grid-cols-2">
                {approach.points.map((p: any, i: number) => (
                  <Reveal key={p.title} delay={0.04 * i}>
                    <div className="rounded-2xl border p-5 transition-all duration-300 hover:shadow-md"
                      style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                      <div className="mb-3 flex items-center gap-3">
                        <Icon name={p.icon} className="text-[#0d9488]" />
                        <h3 className="font-bold" style={{ color: "#1a1a1a" }}>{p.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#6B5A5A" }}>{p.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── 04. KEY FEATURES ── */}
            <Section id="features">
              <SH label="04. Key Features" title="What the website includes" color={color} />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((f: any, i: number) => (
                  <Reveal key={f.title} delay={0.04 * i}>
                    <div className="rounded-2xl border p-5 transition-all duration-300 hover:shadow-md"
                      style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                      <div className="mb-3 flex items-center gap-3">
                        <Icon name={f.icon} className="text-[#0d9488]" />
                        <h3 className="font-bold text-sm" style={{ color: "#1a1a1a" }}>{f.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#6B5A5A" }}>{f.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── 05. UX DECISIONS ── */}
            <Section id="ux">
              <SH label="05. UX Decisions" title="What guided the design" color={color} />
              <div className="grid gap-4 sm:grid-cols-2">
                {uxDecisions.map((u: any, i: number) => (
                  <Reveal key={u.title} delay={0.05 * i}>
                    <div className="flex items-start gap-4 rounded-2xl border p-5" style={{ borderColor: `rgba(${colorRgb},0.25)`, backgroundColor: "white" }}>
                      <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full" style={{ background: `rgba(${colorRgb},0.1)`, color }}>
                        <Icon name={u.icon} />
                      </span>
                      <div>
                        <h3 className="mb-1 font-bold" style={{ color: "#1a1a1a" }}>{u.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#6B5A5A" }}>{u.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── 06. SCREENSHOTS ── */}
            <Section id="screenshots">
              <SH label="06. Screenshots" title="See it in action" color={color} />
              <div className="space-y-8">
                {screenshots.map((s: any, i: number) => (
                  <Reveal key={s.src} delay={0.08 * i}>
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <span className="font-mono text-xs font-bold" style={{ color }}>{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>{s.label}</h3>
                        <div className="h-px flex-1" style={{ backgroundColor: "rgba(198,209,215,0.4)" }} />
                      </div>
                      <BrowserFrame src={s.src} alt={`${title} — ${s.label}`} url="nestivahospital.com" />
                      {s.desc && <p className="mt-3 text-sm" style={{ color: "#6B5A5A" }}>{s.desc}</p>}
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── 07. TECH & DELIVERY ── */}
            <Section id="tech">
              <SH label={`07. ${techDelivery.heading}`} title={techDelivery.heading} color={color} />
              <Reveal>
                <p className="mb-8 text-base leading-8" style={{ color: "#6B5A5A" }}>{techDelivery.body}</p>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {techDelivery.points.map((t: any, i: number) => (
                  <Reveal key={t.title} delay={0.05 * i}>
                    <div className="rounded-2xl border p-5" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                      <div className="mb-2 flex items-center gap-2">
                        <Icon name={t.icon} className="text-[#0d9488]" />
                        <h4 className="font-bold text-sm" style={{ color: "#1a1a1a" }}>{t.title}</h4>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "#6B5A5A" }}>{t.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            {/* ── 08. THE RESULT ── */}
            <Section id="result">
              <SH label={`08. ${results.heading}`} title={results.heading} color={color} />
              <Reveal>
                <p className="mb-8 text-base leading-8" style={{ color: "#6B5A5A" }}>{results.body}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="rounded-2xl border p-6" style={{ borderColor: `rgba(${colorRgb},0.2)`, backgroundColor: "white" }}>
                  <ul className="space-y-3">
                    {results.outcomes.map((o: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="check" className="mt-0.5 text-[#0d9488] flex-shrink-0" />
                        <span className="text-sm leading-relaxed" style={{ color: "#4a4a4a" }}>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </Section>

            {/* ── CTA ── */}
            <Reveal>
              <div className="rounded-3xl border p-10 text-center" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color }}>Start a Project</p>
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl" style={{ color: "#1a1a1a" }}>Need a Similar Website?</h2>
                <p className="mx-auto mb-8 max-w-md" style={{ color: "#6B5A5A" }}>
                  We design and develop websites for hospitals, clinics, and healthcare providers.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="/#contact" className="rounded-xl px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:brightness-110 hover:shadow-lg"
                    style={{ backgroundColor: color }}>
                    Start Your Project →
                  </Link>
                  <Link href="/" className="rounded-xl border px-8 py-3 text-sm font-bold transition-all duration-300 hover:shadow-sm"
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
