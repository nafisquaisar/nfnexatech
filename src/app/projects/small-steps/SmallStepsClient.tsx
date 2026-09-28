"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ic = "h-5 w-5";
const ICONS: Record<string, React.ReactNode> = {
  phone:     <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
  pencil:    <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>,
  checkbox:  <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  lock:      <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25z" /></svg>,
  clipboard: <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>,
  sparkle:   <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456z" /></svg>,
  check:     <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>,
  edit:      <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487z" /></svg>,
  database:  <svg className={ic} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>,
};

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <span className={className}>{ICONS[name] ?? <span>{name}</span>}</span>;
}

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
        <motion.div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }} onClick={onClose}>
          <motion.div className="relative mx-4 max-h-[85vh] w-auto max-w-sm"
            initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}>
            <div className="overflow-hidden rounded-[2.5rem] border-[6px] border-gray-800 bg-gray-800 shadow-2xl">
              <div className="relative mx-auto h-6 w-24 rounded-b-2xl bg-gray-800" />
              <Image src={src} alt={label} width={390} height={844} style={{ width: "100%", height: "auto", display: "block" }} priority />
            </div>
            <p className="mt-3 text-center text-xs" style={{ color: "#ccc" }}>Tap outside or press Esc to close</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="group relative cursor-pointer transition-all duration-300 hover:-translate-y-1" onClick={() => setOpen(true)}>
        <div className="overflow-hidden rounded-[2rem] border-[5px] border-gray-800 bg-gray-800 shadow-xl transition-shadow duration-300 group-hover:shadow-2xl">
          <div className="relative mx-auto h-5 w-20 rounded-b-xl bg-gray-800" />
          <div className="relative bg-white">
            <Image src={src} alt={alt} width={390} height={844} style={{ width: "100%", height: "auto", display: "block" }} sizes="(max-width: 640px) 45vw, 200px" loading="lazy" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/15">
              <span className="rounded-xl bg-white/80 px-3 py-1.5 text-[10px] font-bold opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100" style={{ color: "#1a1a1a" }}>View Full</span>
            </div>
          </div>
          <div className="flex justify-center py-2 bg-gray-800"><div className="h-1 w-16 rounded-full bg-gray-600" /></div>
        </div>
      </div>
      <Lightbox isOpen={open} src={src} label={alt} onClose={() => setOpen(false)} />
    </>
  );
}

const navItems = [
  { id: "overview",     label: "Overview" },
  { id: "challenge",    label: "The Challenge" },
  { id: "approach",     label: "The Solution" },
  { id: "modules",      label: "App Features" },
  { id: "screenshots",  label: "Screenshots" },
  { id: "architecture", label: "Architecture" },
  { id: "tech",         label: "Tech Stack" },
  { id: "timeline",     label: "Timeline" },
  { id: "result",       label: "The Result" },
];

export default function SmallStepsClient({ data }: { data: any }) {
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
    color, colorRgb, title, subtitle, category,
    meta, overview, challenge, approach, modules,
    screenshots, architecture, techStack, results, timeline,
  } = data;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F5", color: "#1a1a1a" }}>

      <nav className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "shadow-lg shadow-black/5" : ""}`}
        style={{ backgroundColor: scrolled ? "rgba(250,247,245,0.95)" : "rgba(250,247,245,0.85)", backdropFilter: "blur(16px)", borderColor: "rgba(198,209,215,0.3)" }}>
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#14b8a6]" style={{ color: "#6B5A5A" }}>
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H6.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L6.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" /></svg>
            Back to Portfolio
          </Link>
          <span className="hidden rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-widest sm:inline-block"
            style={{ color, borderColor: `rgba(${colorRgb},0.4)`, background: `rgba(${colorRgb},0.1)` }}>{category}</span>
          <div className="w-24" />
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 xl:grid-cols-[260px_1fr]">

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
                      {active && <motion.div layoutId="sidebar-active-ss" className="ml-auto h-4 w-0.5 rounded-full" style={{ background: color }} />}
                    </a>
                  );
                })}
              </nav>
              <div className="mt-8 space-y-3 border-t pt-6" style={{ borderColor: "rgba(198,209,215,0.3)" }}>
                {meta.slice(0, 4).map((m: any) => (
                  <div key={m.label} className="flex items-start gap-2.5">
                    <Icon name={m.icon} className="text-[#14b8a6]" />
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "#999" }}>{m.label}</p>
                      <p className="text-xs font-medium" style={{ color: "#1a1a1a" }}>{m.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <main className="pb-24 pt-12">

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

            <Reveal delay={0.05}>
              <div className="mb-16 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {meta.map((m: any) => (
                  <div key={m.label} className="rounded-2xl border p-4" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                    <Icon name={m.icon} className="text-[#14b8a6]" />
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: "#999" }}>{m.label}</p>
                    <p className="mt-0.5 text-sm font-semibold" style={{ color: "#1a1a1a" }}>{m.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Section id="overview">
              <SH label="01. Overview" title={subtitle} color={color} />
              <Reveal><p className="text-base leading-8" style={{ color: "#6B5A5A" }}>{overview}</p></Reveal>
            </Section>

            <Section id="challenge">
              <SH label={`02. ${challenge.heading}`} title={challenge.heading} color={color} />
              <Reveal><p className="mb-8 text-base leading-8" style={{ color: "#6B5A5A" }}>{challenge.body}</p></Reveal>
              <Reveal delay={0.05}>
                <div className="rounded-2xl border p-6" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                  <ul className="space-y-3">
                    {challenge.points.map((p: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="check" className="mt-0.5 flex-shrink-0 text-[#14b8a6]" />
                        <span className="text-sm leading-relaxed" style={{ color: "#4a4a4a" }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </Section>

            <Section id="approach">
              <SH label={`03. ${approach.heading}`} title={approach.heading} color={color} />
              <Reveal><p className="mb-8 text-base leading-8" style={{ color: "#6B5A5A" }}>{approach.body}</p></Reveal>
              <Reveal delay={0.05}>
                <div className="rounded-2xl border p-6" style={{ borderColor: `rgba(${colorRgb},0.25)`, backgroundColor: "white" }}>
                  <ul className="space-y-3">
                    {approach.points.map((p: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="check" className="mt-0.5 flex-shrink-0 text-[#14b8a6]" />
                        <span className="text-sm leading-relaxed" style={{ color: "#4a4a4a" }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </Section>

            <Section id="modules">
              <SH label="04. App Features" title="What the app includes" color={color} />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {modules.map((m: any, i: number) => (
                  <Reveal key={m.name} delay={0.04 * i}>
                    <div className="rounded-2xl border p-5 transition-all duration-300 hover:shadow-md"
                      style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                      <div className="mb-3 flex items-center gap-3">
                        <Icon name={m.icon} className="text-[#14b8a6]" />
                        <h3 className="font-bold text-sm" style={{ color: "#1a1a1a" }}>{m.name}</h3>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#6B5A5A" }}>{m.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

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

            <Section id="architecture">
              <SH label="06. Architecture" title="How the app is structured" color={color} />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {architecture.map((a: any, i: number) => (
                  <Reveal key={a.layer} delay={0.05 * i}>
                    <div className="rounded-2xl border p-5" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                      <div className="mb-2 flex items-center gap-2">
                        <Icon name={a.icon} className="text-[#14b8a6]" />
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: a.color }}>{a.layer}</span>
                      </div>
                      <h4 className="mb-1.5 font-bold" style={{ color: "#1a1a1a" }}>{a.tech}</h4>
                      <p className="text-xs leading-relaxed" style={{ color: "#6B5A5A" }}>{a.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            <Section id="tech">
              <SH label="07. Tech Stack" title="Technologies Used" color={color} />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {techStack.map((t: any, i: number) => (
                  <Reveal key={t.name} delay={0.05 * i}>
                    <div className="rounded-2xl border p-5" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                      <div className="mb-2 flex items-center gap-2">
                        <Icon name={t.icon} className="text-[#14b8a6]" />
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>{t.category}</span>
                      </div>
                      <h4 className="mb-1.5 font-bold" style={{ color: "#1a1a1a" }}>{t.name}</h4>
                      <p className="text-xs leading-relaxed" style={{ color: "#6B5A5A" }}>{t.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Section>

            <Section id="timeline">
              <SH label="08. Timeline" title="How We Built It" color={color} />
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

            <Reveal>
              <div className="rounded-3xl border p-10 text-center" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "white" }}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color }}>Start a Project</p>
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl" style={{ color: "#1a1a1a" }}>Need a Similar App?</h2>
                <p className="mx-auto mb-8 max-w-md" style={{ color: "#6B5A5A" }}>
                  Simple enough for everyday notes. Useful enough for everyday tasks. We build practical Android apps that people actually use.
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
