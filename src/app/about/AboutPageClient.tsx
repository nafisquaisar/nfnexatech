"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

/* ── Static data ─────────────────────────────────────────────────────────── */

const STATS = [
  { value: "70+", label: "Projects Delivered", color: "#E8763A", bg: "rgba(249,225,205,0.7)" },
  { value: "10+", label: "Happy Clients",       color: "#1FA0B1", bg: "rgba(181,229,235,0.5)" },
  { value: "10",  label: "Team Members",        color: "#E8763A", bg: "rgba(249,225,205,0.7)" },
  { value: "2+",  label: "Years of Excellence", color: "#1FA0B1", bg: "rgba(181,229,235,0.5)" },
];

const CORE_VALUES = [
  { n: "01", title: "Innovation",              color: "#1FA0B1", desc: "We explore new technologies and practical ideas to solve real problems." },
  { n: "02", title: "Transparency",            color: "#E8763A", desc: "We communicate clearly, set realistic timelines, and keep clients informed." },
  { n: "03", title: "Quality First",           color: "#7B5EA7", desc: "We review every piece of work carefully before it goes out." },
  { n: "04", title: "Client Success",          color: "#1FA0B1", desc: "We measure our work by how much it helps your business." },
  { n: "05", title: "Fast Delivery",           color: "#E8763A", desc: "We move quickly without cutting corners on quality." },
  { n: "06", title: "Scalable Architecture",   color: "#7B5EA7", desc: "We build systems that can grow with your business without unnecessary complexity." },
  { n: "07", title: "Security",                color: "#1FA0B1", desc: "Security is considered from the beginning, not added as an afterthought." },
  { n: "08", title: "Long-Term Support",       color: "#E8763A", desc: "We stay involved when you need support after launch." },
  { n: "09", title: "Continuous Improvement",  color: "#7B5EA7", desc: "We learn from every project and keep improving how we build and deliver." },
];

const TIMELINE = [
  { year: "Oct 2023",   title: "Company Founded",          desc: "NF Nexa Tech officially registered under UDYAM (MSME) in New Delhi." },
  { year: "Late 2023",  title: "First Client Projects",    desc: "Delivered first three client projects — real-estate portal, school management app and e-commerce store." },
  { year: "Early 2024", title: "Team Expansion",           desc: "Grew to a cross-functional team with dedicated design, development and business functions." },
  { year: "Mid 2024",   title: "10+ Projects Milestone",   desc: "Crossed 10 successfully delivered projects across healthcare, education and SaaS verticals." },
  { year: "Late 2024",  title: "Mobile Specialisation",    desc: "Launched Flutter and Kotlin development practice, delivering four cross-platform mobile apps." },
  { year: "2025",       title: "Enterprise Growth",        desc: "Onboarded enterprise clients, expanded to cloud solutions and business automation." },
];

/* ── Animation variants ──────────────────────────────────────────────────── */

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ── Helpers ─────────────────────────────────────────────────────────────── */

function AnimSection({
  id, children, className = "", style,
}: {
  id?: string; children: React.ReactNode; className?: string; style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      id={id} ref={ref} variants={fadeUp}
      initial="hidden" animate={inView ? "visible" : "hidden"}
      className={className} style={style}
    >
      {children}
    </motion.section>
  );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1FA0B1]/30 bg-[#B5E5EB]/15 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#1FA0B1]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#1FA0B1]" />
      {children}
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────────────────────── */

export default function AboutPageClient() {
  return (
    <div className="min-h-screen bg-[#FAF7F5] text-[#1a1a1a] overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#FAF7F5] pt-[80px]">

        {/* Background blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 right-0 h-[500px] w-[500px] rounded-full bg-[#B5E5EB]/20 blur-[120px]" />
          <div className="absolute bottom-0 -left-20 h-64 w-64 rounded-full bg-[#F9E1CD]/50 blur-[90px]" />
          <div className="absolute top-1/2 right-1/4 h-48 w-64 rounded-full bg-[#C4B5E8]/10 blur-[80px]" />
        </div>

        {/* Breadcrumb row — just below navbar */}
        <div className="mx-auto w-[92%] max-w-6xl pt-4 pb-0 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#C6D1D7]/60 bg-white/80 px-4 py-2 text-[12px] font-semibold text-[#6B5A5A] shadow-sm backdrop-blur-sm transition-all hover:border-[#1FA0B1]/40 hover:text-[#1FA0B1]"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Home
          </Link>
          <nav className="flex items-center gap-1.5 text-[12px] text-[#9B8B8B]" aria-label="breadcrumb">
            <Link href="/" className="hover:text-[#1FA0B1] transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-semibold text-[#1FA0B1]">About</span>
          </nav>
        </div>

        {/* Two-column hero content */}
        <div className="mx-auto w-[92%] max-w-6xl px-0 py-10 sm:py-14">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12">

            {/* LEFT — text */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible"
              className="flex-1 max-w-xl"
            >
              <SectionBadge>About NF Nexa Tech</SectionBadge>
              <h1 className="mt-3 text-[34px] font-extrabold leading-[1.1] tracking-tight text-[#1a1a1a] sm:text-[44px]">
                Building Modern{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #E8763A 0%, #1FA0B1 100%)" }}
                >
                  Digital Products
                </span>
                <br />That Scale
              </h1>
              <p className="mt-5 text-[13.5px] leading-relaxed text-[#6B5A5A]">
                NF Nexa Tech is a UDYAM-registered software company from New Delhi. We build web apps, mobile apps and custom software for startups and businesses that need reliable, maintainable products.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1FA0B1] px-6 py-3 text-[13px] font-bold text-white shadow-md shadow-[#1FA0B1]/20 transition-all hover:bg-[#198694] hover:scale-[1.02]"
                >
                  Start a Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="#why-us"
                  className="inline-flex items-center gap-2 rounded-full border border-[#C6D1D7] bg-white px-6 py-3 text-[13px] font-semibold text-[#1a1a1a] shadow-sm transition-all hover:border-[#1FA0B1]/40 hover:text-[#1FA0B1]"
                >
                  Why Choose Us
                </Link>
              </div>
            </motion.div>

            {/* RIGHT — device mockup image */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible"
              className="relative flex-1 flex items-center justify-center"
            >
              {/* Dot grid decoration */}
              <div aria-hidden className="absolute top-0 right-0 grid grid-cols-6 gap-[9px] opacity-30">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="h-[5px] w-[5px] rounded-full bg-[#1FA0B1]" />
                ))}
              </div>
              {/* Glow behind image */}
              <div aria-hidden className="absolute inset-0 rounded-3xl bg-[#B5E5EB]/20 blur-[40px]" />

              <div className="relative w-full max-w-[520px] drop-shadow-2xl">
                <Image
                  src="/images/hero/nf-nexa-devices.jpg"
                  alt="NF Nexa Tech — digital products on multiple devices"
                  width={520}
                  height={346}
                  className="w-full rounded-2xl object-cover"
                  priority
                />
              </div>

              {/* Bottom dot grid */}
              <div aria-hidden className="absolute bottom-2 left-0 grid grid-cols-4 gap-[8px] opacity-20">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="h-[5px] w-[5px] rounded-full bg-[#E8763A]" />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-y border-[#E8E0D8]/60 px-4 py-6 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, #ffffff 0%, #F5FBFC 50%, #FFF8F4 100%)" }}>
        {/* Subtle bg dots */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-8 -left-8 h-40 w-40 rounded-full bg-[#B5E5EB]/20 blur-3xl" />
          <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-[#F9E1CD]/30 blur-3xl" />
        </div>
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="relative mx-auto grid w-[92%] max-w-5xl grid-cols-2 gap-0 sm:grid-cols-4"
        >
          {[
            {
              value: "70+", label: "Projects Delivered", sub: "Across 6+ industries", color: "#E8763A", bg: "rgba(249,225,205,0.6)",
              icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            },
            {
              value: "10+", label: "Happy Clients", sub: "India & globally", color: "#1FA0B1", bg: "rgba(181,229,235,0.5)",
              icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            },
            {
              value: "10", label: "Team Members", sub: "Skilled professionals", color: "#E8763A", bg: "rgba(249,225,205,0.6)",
              icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" /></svg>
            },
            {
              value: "2+", label: "Years of Excellence", sub: "Since Oct 2023", color: "#1FA0B1", bg: "rgba(181,229,235,0.5)",
              icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
            },
          ].map((s, i) => (
            <motion.div key={s.label} variants={fadeUp} className={`flex flex-col items-center gap-2 px-4 py-3 text-center ${i < 3 ? "border-r border-[#E8E0D8]/50" : ""}`}>
              {/* Icon circle */}
              <div className="flex h-9 w-9 items-center justify-center rounded-xl shadow-sm" style={{ backgroundColor: s.bg, color: s.color }}>
                {s.icon}
              </div>
              {/* Number */}
              <div className="text-[26px] font-black leading-none tracking-tight" style={{ color: s.color }}>{s.value}</div>
              {/* Label */}
              <div>
                <div className="text-[12px] font-semibold text-[#1a1a1a]">{s.label}</div>
                <div className="mt-0.5 text-[10px] text-[#9B8B8B]">{s.sub}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── COMPANY OVERVIEW ─────────────────────────────────────────────── */}
      <section className="relative bg-[#FAF7F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

            {/* LEFT — Our Story badge + heading + subtitle + image */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex flex-col lg:w-[42%]"
            >
              {/* Our Story badge — top of left */}
              <div className="mb-5 inline-flex items-center gap-2 self-start rounded-full border border-[#1FA0B1]/30 bg-[#B5E5EB]/15 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#1FA0B1]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1FA0B1]" />
                Our Story
              </div>

              {/* Heading */}
              <h2 className="text-[30px] font-extrabold leading-[1.1] tracking-tight text-[#1a1a1a] sm:text-[38px]">
                Born In Delhi,{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #1FA0B1 0%, #E8763A 100%)" }}>
                  Built for the World
                </span>
              </h2>

              {/* Subtitle */}
              <p className="mt-4 text-[13px] leading-relaxed text-[#6B5A5A]">
                A software company from New Delhi building reliable digital products for startups and growing businesses.
              </p>

              {/* Image with dot decoration */}
              <div className="mt-8 relative w-full max-w-[400px]">
                <div aria-hidden className="absolute -top-3 -left-3 grid grid-cols-5 gap-[7px] opacity-25">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="h-[5px] w-[5px] rounded-full bg-[#1FA0B1]" />
                  ))}
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/hero/herobg_1.webp"
                    alt="NF Nexa Tech — Innovative Digital Solutions"
                    width={520}
                    height={320}
                    className="w-full aspect-[16/10] object-cover"
                  />
                  {/* OUR BASE badge — overlaid on image bottom-left */}
                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-2.5 rounded-xl border border-white/30 bg-white/95 px-3.5 py-2.5 shadow-md backdrop-blur-sm">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#B5E5EB]/30">
                      <svg className="w-3.5 h-3.5 text-[#1FA0B1]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#9B8B8B]">Our Base</div>
                      <div className="text-[12px] font-bold text-[#1a1a1a]">New Delhi and Across India</div>
                    </div>
                  </div>
                </div>
                <div aria-hidden className="absolute -bottom-3 -right-3 grid grid-cols-3 gap-[7px] opacity-20">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="h-[5px] w-[5px] rounded-full bg-[#E8763A]" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT — 3 story paragraphs + 2 info items */}
            <motion.div
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex flex-col gap-5 lg:w-[58%] lg:pt-10"
            >
              {/* Timeline dots — 3 paragraphs */}
              <div className="relative">
                {/* Vertical connecting line */}
                <div className="absolute left-[9px] top-3 bottom-3 w-px bg-gradient-to-b from-[#1FA0B1] via-[#E8763A] to-[#7B5EA7] opacity-25" />

                {/* Para 1 */}
                <motion.div variants={fadeUp} className="flex gap-4 mb-6">
                  <div className="relative z-10 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white ring-2 ring-[#1FA0B1] shadow-sm shadow-[#1FA0B1]/20">
                    <div className="h-2 w-2 rounded-full bg-[#1FA0B1]" />
                  </div>
                  <p className="text-[13.5px] leading-[1.8] text-[#4A3F3F]">
                    NF Nexa Tech was founded on 25 October 2023 by{" "}
                    <span className="font-bold text-[#1a1a1a]">Nafis Quaisar, Founder</span>, with a simple idea: good ideas deserve good technology. While working on different projects, Nafis saw many businesses struggle with technology that could not keep up with their goals.
                  </p>
                </motion.div>

                {/* Para 2 */}
                <motion.div variants={fadeUp} className="flex gap-4 mb-6">
                  <div className="relative z-10 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white ring-2 ring-[#E8763A] shadow-sm shadow-[#E8763A]/20">
                    <div className="h-2 w-2 rounded-full bg-[#E8763A]" />
                  </div>
                  <p className="text-[13.5px] leading-[1.8] text-[#4A3F3F]">
                    That became the foundation of NF Nexa Tech. Our focus is to understand the real problem, choose the right technology, and build reliable products that can grow with the business — from mobile apps and websites to custom software and SaaS solutions.
                  </p>
                </motion.div>

                {/* Para 3 */}
                <motion.div variants={fadeUp} className="flex gap-4">
                  <div className="relative z-10 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white ring-2 ring-[#7B5EA7] shadow-sm shadow-[#7B5EA7]/20">
                    <div className="h-2 w-2 rounded-full bg-[#7B5EA7]" />
                  </div>
                  <p className="text-[13.5px] leading-[1.8] text-[#4A3F3F]">
                    Today, NF Nexa Tech is based in{" "}
                    <span className="font-semibold text-[#1a1a1a]">Mahipalpur, New Delhi</span>, working with businesses across healthcare, education, real estate, SaaS, and e-commerce.{" "}
                    <span className="font-semibold text-[#1a1a1a]">Our philosophy is simple: build with purpose, keep it simple, and make it last.</span>
                  </p>
                </motion.div>
              </div>

              {/* 2 info items below the story */}
              <motion.div variants={fadeUp} className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {/* Item 1 */}
                <div className="flex items-start gap-3 rounded-xl border border-[#1FA0B1]/20 bg-[#B5E5EB]/10 px-4 py-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#B5E5EB]/40">
                    <svg className="w-3.5 h-3.5 text-[#1FA0B1]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-[#1a1a1a]">Founded</div>
                    <div className="text-[11px] text-[#6B5A5A]">25 October 2023 · New Delhi</div>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="flex items-start gap-3 rounded-xl border border-[#E8763A]/20 bg-[#F9E1CD]/15 px-4 py-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F9E1CD]/60">
                    <svg className="w-3.5 h-3.5 text-[#E8763A]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-[#1a1a1a]">Mahipalpur, New Delhi</div>
                    <div className="text-[11px] text-[#6B5A5A]">Serving clients across India &amp; globally</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <AnimSection
        id="why-us"
        className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #EBF7FF 0%, #F5F8FF 45%, #FFF4ED 100%)" }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-10 -right-10 h-80 w-80 rounded-full bg-[#B5E5EB]/20 blur-[90px]" />
          <div className="absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-[#F9E1CD]/25 blur-[80px]" />
          <div className="absolute top-6 left-6 grid grid-cols-6 gap-[10px] opacity-[0.18]">
            {Array.from({ length: 36 }).map((_, i) => <div key={i} className="h-1 w-1 rounded-full bg-[#1FA0B1]" />)}
          </div>
          <div className="absolute bottom-6 right-6 grid grid-cols-6 gap-[10px] opacity-[0.14]">
            {Array.from({ length: 36 }).map((_, i) => <div key={i} className="h-1 w-1 rounded-full bg-[#7B5EA7]" />)}
          </div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1FA0B1]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B5EA7]/15 to-transparent" />
        </div>

        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">

            {/* LEFT */}
            <div className="lg:w-[38%] lg:sticky lg:top-24">
              {/* Dot-gradient WHY US banner */}
              <div className="mb-6 flex h-14 w-full max-w-[260px] overflow-hidden rounded-2xl shadow-sm">
                <div className="flex flex-col justify-center gap-[6px] bg-[#B5E5EB]/50 px-3.5 py-3">
                  {[0,1,2,3].map(row => (
                    <div key={row} className="flex gap-[6px]">
                      {[0,1,2].map(col => <div key={col} className="h-[5px] w-[5px] rounded-full bg-[#1FA0B1]" />)}
                    </div>
                  ))}
                </div>
                <div
                  className="relative flex flex-1 items-center px-4"
                  style={{ background: "linear-gradient(90deg, rgba(181,229,235,0.35) 0%, #F9E1CD 100%)" }}
                >
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#1FA0B1]">Why Us</span>
                </div>
              </div>

              <h2 className="text-[30px] font-extrabold leading-[1.1] tracking-tight text-[#1a1a1a] sm:text-[36px]">
                Why Choose{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #1FA0B1 0%, #7B5EA7 100%)" }}
                >
                  NF Nexa Tech?
                </span>
              </h2>
              <p className="mt-4 text-[13.5px] leading-relaxed text-[#6B5A5A]">
                We keep things simple. You work directly with the people building your product, with clear communication from start to finish.
              </p>
              <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-[#1FA0B1] to-[#7B5EA7]" />
            </div>

            {/* RIGHT — 2x2 cards */}
            <motion.div
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-2 lg:w-[62%]"
            >
              {[
                { n: "01", title: "Work Directly With Developers", color: "#1FA0B1", bg: "rgba(181,229,235,0.25)", desc: "Talk directly with the people working on your product, without unnecessary layers." },
                { n: "02", title: "Clear Communication",           color: "#7B5EA7", bg: "rgba(196,181,232,0.25)", desc: "Regular updates, honest timelines, and a clear view of what is being worked on." },
                { n: "03", title: "Right Technology for the Job",  color: "#1FA0B1", bg: "rgba(181,229,235,0.25)", desc: "We choose tools and technologies based on what your product actually needs." },
                { n: "04", title: "Built for the Long Term",       color: "#7B5EA7", bg: "rgba(196,181,232,0.25)", desc: "We focus on clean, reliable software that is easier to maintain and improve over time." },
              ].map((item) => (
                <motion.article
                  key={item.n} variants={fadeUp}
                  className="group relative overflow-hidden rounded-2xl border border-[#E8E0D8]/50 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full blur-2xl" style={{ backgroundColor: item.bg }} />
                  <div className="relative">
                    <div className="mb-4 flex items-start justify-between">
                      <span className="font-mono text-[11px] font-extrabold tracking-[0.15em] opacity-60" style={{ color: item.color }}>
                        {item.n} —
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl text-[13px] font-bold" style={{ backgroundColor: item.bg, color: item.color }}>
                        {item.n}
                      </div>
                    </div>
                    <h3 className="mb-1.5 text-[14px] font-bold text-[#1a1a1a]">{item.title}</h3>
                    <p className="text-[12.5px] leading-relaxed text-[#6B5A5A]">{item.desc}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </AnimSection>

      {/* ── MISSION & VISION ─────────────────────────────────────────────── */}
      <AnimSection id="mission-vision" className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#B5E5EB]/20 blur-[100px]" />
          <div className="absolute bottom-0 -left-20 h-64 w-64 rounded-full bg-[#F9E1CD]/30 blur-[80px]" />
        </div>
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="mb-10">
            <SectionBadge>Mission &amp; Vision</SectionBadge>
            <h2 className="mt-2 text-[30px] font-extrabold tracking-tight text-[#1a1a1a] sm:text-[36px]">
              What We{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #1FA0B1 0%, #E8763A 100%)" }}>Stand For</span>
            </h2>
            <p className="mt-2 text-[13px] text-[#6B5A5A]">The foundation of every decision we make as a company.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">

            {/* MISSION card */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-[#1FA0B1]/20 p-7 shadow-sm"
              style={{ background: 'linear-gradient(135deg, #ffffff 40%, rgba(249,225,205,0.18) 100%)' }}>
              {/* Decorative concentric circles — top right */}
              <div aria-hidden className="pointer-events-none absolute -top-6 -right-6 h-[140px] w-[140px]">
                <div className="absolute inset-0 rounded-full border border-[#1FA0B1]/8" />
                <div className="absolute inset-[18px] rounded-full border border-[#1FA0B1]/10" />
                <div className="absolute inset-[36px] rounded-full border border-[#1FA0B1]/12" />
                <div className="absolute inset-[50px] rounded-full bg-[#1FA0B1]/6" />
                <div className="absolute inset-[58px] rounded-full bg-[#1FA0B1]/10 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-[#1FA0B1]/25" />
                </div>
              </div>
              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B5E5EB]/40 text-[#1FA0B1]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1FA0B1]">Our Mission</span>
                </div>
                <h3 className="mb-4 text-[20px] font-extrabold leading-[1.15] tracking-tight">
                  <span className="text-[#1a1a1a]">Build Technology That<br /></span>
                  <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #1FA0B1 0%, #E8763A 100%)" }}>
                    Moves Businesses Forward
                  </span>
                </h3>
                <p className="mb-7 text-[13px] leading-relaxed text-[#6B5A5A]">
                  We help businesses turn ideas into reliable digital products, from mobile apps and websites to custom software. We focus on solving real problems with technology that is practical, maintainable, and built to grow.
                </p>
                <div className="flex flex-wrap items-center gap-5 pt-3 border-t border-[#1FA0B1]/15">
                  {[
                    { label: "Practical", icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg> },
                    { label: "Maintainable", icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg> },
                    { label: "Built to grow", icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg> },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-1.5 text-[#1FA0B1]">
                      {item.icon}
                      <span className="text-[11px] font-semibold text-[#6B5A5A]">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* VISION card */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-[#7B5EA7]/20 p-7 shadow-sm"
              style={{ background: 'linear-gradient(135deg, rgba(181,229,235,0.08) 0%, rgba(196,181,232,0.12) 100%)' }}>
              {/* Decorative telescope/vision icon — top right */}
              <div aria-hidden className="pointer-events-none absolute -top-2 -right-2 h-[120px] w-[120px] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#C4B5E8]/8" />
                <div className="absolute inset-[16px] rounded-full bg-[#C4B5E8]/10" />
                <svg className="relative w-10 h-10 text-[#7B5EA7]/15" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                </svg>
              </div>
              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C4B5E8]/30 text-[#7B5EA7]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#7B5EA7]">Our Vision</span>
                </div>
                <h3 className="mb-4 text-[20px] font-extrabold leading-[1.15] tracking-tight">
                  <span className="text-[#1a1a1a]">Become a Technology Partner<br /></span>
                  <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #7B5EA7 0%, #1FA0B1 100%)" }}>
                    Businesses Can Rely On
                  </span>
                </h3>
                <p className="mb-7 text-[13px] leading-relaxed text-[#6B5A5A]">
                  We want to build lasting relationships with businesses by creating software that solves real problems and continues to deliver value as they grow.
                </p>
                <div className="flex flex-wrap items-center gap-5 pt-3 border-t border-[#7B5EA7]/15">
                  {[
                    { label: "Lasting relationships", icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg> },
                    { label: "Real value", icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg> },
                    { label: "Long-term", icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-1.5 text-[#7B5EA7]">
                      {item.icon}
                      <span className="text-[11px] font-semibold text-[#6B5A5A]">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimSection>

      {/* ── CORE VALUES ──────────────────────────────────────────────────── */}
      <AnimSection id="core-values" className="py-8 px-4 sm:px-6 lg:px-8 bg-white/60">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="mb-5">
            <SectionBadge>What We Stand For</SectionBadge>
            <h2 className="mt-1.5 text-[26px] font-extrabold tracking-tight text-[#1a1a1a] sm:text-[30px]">
              Core <span className="text-[#1FA0B1]">Values</span>
            </h2>
            <p className="mt-1 text-[12px] text-[#6B5A5A]">Nine principles that guide every decision, every commit and every client interaction at NF Nexa Tech.</p>
          </div>
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {CORE_VALUES.map((v, idx) => {
              const gradientBg = v.color === "#1FA0B1"
                ? "linear-gradient(135deg, #ffffff 60%, rgba(181,229,235,0.18) 100%)"
                : v.color === "#E8763A"
                ? "linear-gradient(135deg, #ffffff 60%, rgba(249,225,205,0.22) 100%)"
                : "linear-gradient(135deg, #ffffff 60%, rgba(196,181,232,0.18) 100%)";
              const iconBg = v.color === "#1FA0B1" ? "rgba(181,229,235,0.30)" : v.color === "#E8763A" ? "rgba(249,225,205,0.40)" : "rgba(196,181,232,0.28)";
              const icons = [
                /* 01 Innovation — cog */
                <svg key="i0" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                /* 02 Transparency — search */
                <svg key="i1" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
                /* 03 Quality First — star */
                <svg key="i2" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
                /* 04 Client Success — users */
                <svg key="i3" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
                /* 05 Fast Delivery — bolt */
                <svg key="i4" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
                /* 06 Scalable Architecture — arrows expand */
                <svg key="i5" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>,
                /* 07 Security — shield */
                <svg key="i6" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
                /* 08 Long-Term Support — clipboard check */
                <svg key="i7" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" /></svg>,
                /* 09 Continuous Improvement — chart */
                <svg key="i8" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
              ];
              return (
                <motion.div key={v.n} variants={fadeUp}
                  className="group relative overflow-hidden rounded-xl border border-[#E8E0D8]/40 p-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all hover:shadow-md hover:-translate-y-0.5"
                  style={{ background: gradientBg }}
                >
                  <div className="flex items-start justify-between mb-2.5">
                    {/* Icon — rounded square */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ backgroundColor: iconBg, color: v.color }}>
                      {icons[idx]}
                    </div>
                    {/* Number — clean, right side */}
                    <span className="text-[15px] font-bold opacity-30" style={{ color: v.color }}>{v.n}</span>
                  </div>
                  <h3 className="mb-1 text-[13px] font-bold text-[#1a1a1a]">{v.title}</h3>
                  <p className="text-[11.5px] leading-[1.65] text-[#6B5A5A]">{v.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </AnimSection>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <AnimSection
        id="process"
        className="relative py-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #FFFBF7 0%, #F5FAFF 50%, #FFF8F3 100%)" }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-[#F9E1CD]/60 blur-[80px]" />
          <div className="absolute top-1/3 -right-20 h-64 w-64 rounded-full bg-[#B5E5EB]/30 blur-[70px]" />
          <div className="absolute top-8 left-8 grid grid-cols-5 gap-2 opacity-25">
            {Array.from({ length: 25 }).map((_, i) => <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#1FA0B1]" />)}
          </div>
          <div className="absolute bottom-10 right-8 grid grid-cols-5 gap-2 opacity-20">
            {Array.from({ length: 25 }).map((_, i) => <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#E8763A]" />)}
          </div>
        </div>
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="mb-8">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1FA0B1]/40 bg-white/80 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#1FA0B1]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1FA0B1]" />
              How We Work
            </div>
            <h2 className="text-[30px] font-extrabold tracking-tight sm:text-[36px]">
              <span className="text-[#1a1a1a]">Our Development </span>
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #1FA0B1 0%, #E8763A 100%)" }}>Process</span>
            </h2>
            <p className="mt-2 text-[13px] text-[#6B5A5A]">A proven seven-step process refined across 15+ successful projects.</p>
          </div>

          {/* Row 1 — 4 cards */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { n: "01", title: "Discovery",    color: "#1FA0B1", desc: "We start with a call to understand your goals, constraints, audience and competitive landscape." },
                { n: "02", title: "Planning",     color: "#1FA0B1", desc: "We produce a detailed project brief, feature map and delivery roadmap with clear milestones." },
                { n: "03", title: "UI/UX Design", color: "#1FA0B1", desc: "Wireframes and high-fidelity Figma prototypes, validated before a single line of code is written." },
                { n: "04", title: "Development",  color: "#1FA0B1", desc: "Agile sprints with weekly demos. Clean, typed, testable code committed to a shared repository daily." },
              ].map((p) => (
                <motion.div key={p.n} variants={fadeUp} className="rounded-2xl border border-[#E8E0D8]/60 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                  <div className="mb-3 text-[12px] font-extrabold tracking-widest" style={{ color: p.color }}>{p.n}</div>
                  <h3 className="mb-2 text-[14px] font-bold text-[#1a1a1a]">{p.title}</h3>
                  <p className="text-[12px] leading-relaxed text-[#6B5A5A]">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Row 2 — 3 cards */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:max-w-[75%] lg:mx-auto">
              {[
                { n: "05", title: "Testing",     color: "#E8763A", desc: "Unit tests, integration tests, cross-browser QA, performance audits and security scans before release." },
                { n: "06", title: "Deployment",  color: "#E8763A", desc: "Automated CI/CD pipeline. Zero-downtime deployments on Vercel, AWS or your preferred cloud." },
                { n: "07", title: "Maintenance", color: "#E8763A", desc: "Proactive monitoring, bug fixes, feature updates and performance optimization keeping your product stable." },
              ].map((p) => (
                <motion.div key={p.n} variants={fadeUp} className="rounded-2xl border border-[#E8E0D8]/60 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                  <div className="mb-3 text-[12px] font-extrabold tracking-widest" style={{ color: p.color }}>{p.n}</div>
                  <h3 className="mb-2 text-[14px] font-bold text-[#1a1a1a]">{p.title}</h3>
                  <p className="text-[12px] leading-relaxed text-[#6B5A5A]">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </AnimSection>

      {/* ── TECHNOLOGIES WE USE ──────────────────────────────────────────── */}
      <AnimSection
        id="tech-stack"
        className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #F0F7FF 0%, #F5F8FF 30%, #FAF7F5 60%, #F0F4FF 100%)" }}
      >
        {/* Background decorations */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-20 h-[300px] w-[300px] rounded-full bg-[#B5E5EB]/25 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 h-[280px] w-[280px] rounded-full bg-[#C4B5E8]/20 blur-[100px]" />
          <div className="absolute top-10 right-10 h-40 w-40 rounded-full bg-[#F9E1CD]/30 blur-[80px]" />
        </div>

        <div className="relative mx-auto w-[92%] max-w-6xl">
          {/* Header — centered */}
          <div className="mb-8">
            <SectionBadge>Tech Stack</SectionBadge>
            <h2 className="mt-2 text-[30px] font-extrabold tracking-tight text-[#1a1a1a] sm:text-[36px]">
              Technologies{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #1FA0B1 0%, #7B5EA7 100%)" }}>We Use</span>
            </h2>
            <p className="mt-2 text-[13px] text-[#6B5A5A]">
              Modern, battle-tested tools chosen to deliver performance, scalability and maintainability.
            </p>
          </div>

          {/* 4 columns */}
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* FRONTEND */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-[#E8E0D8]/40 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1FA0B1]/15">
                  <svg className="w-5 h-5 text-[#1FA0B1]" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#1a1a1a]">FRONTEND</div>
                  <div className="text-[10px] text-[#9B8B8B]">Modern web technologies</div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Next.js", color: "#000000", icon: "N" },
                  { name: "React.js", color: "#61DAFB", icon: "Re" },
                  { name: "TypeScript", color: "#3178C6", icon: "TS" },
                  { name: "Tailwind CSS", color: "#38BDF8", icon: "Tw" },
                ].map((t) => (
                  <div key={t.name} className="flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-[#F5F8FF]">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-bold" style={{ backgroundColor: `${t.color}18`, color: t.color }}>{t.icon}</div>
                    <span className="text-[13px] font-medium text-[#1a1a1a]">{t.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* MOBILE */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-[#E8E0D8]/40 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8763A]/15">
                  <svg className="w-5 h-5 text-[#E8763A]" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#1a1a1a]">MOBILE</div>
                  <div className="text-[10px] text-[#9B8B8B]">Cross-platform & native</div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Android", color: "#3DDC84", icon: "Ad" },
                  { name: "Kotlin", color: "#7F52FF", icon: "K" },
                  { name: "Flutter", color: "#02569B", icon: "Fl" },
                  { name: "Dart", color: "#0175C2", icon: "D" },
                ].map((t) => (
                  <div key={t.name} className="flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-[#F5F8FF]">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-bold" style={{ backgroundColor: `${t.color}18`, color: t.color }}>{t.icon}</div>
                    <span className="text-[13px] font-medium text-[#1a1a1a]">{t.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* BACKEND */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-[#E8E0D8]/40 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#22C55E]/15">
                  <svg className="w-5 h-5 text-[#22C55E]" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg>
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#1a1a1a]">BACKEND</div>
                  <div className="text-[10px] text-[#9B8B8B]">Robust & scalable services</div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Node.js", color: "#68A063", icon: "JS" },
                  { name: "Java", color: "#ED8B00", icon: "Jv" },
                  { name: "Python", color: "#3776AB", icon: "Py" },
                  { name: "Spring Boot", color: "#6DB33F", icon: "Sb" },
                ].map((t) => (
                  <div key={t.name} className="flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-[#F5F8FF]">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-bold" style={{ backgroundColor: `${t.color}18`, color: t.color }}>{t.icon}</div>
                    <span className="text-[13px] font-medium text-[#1a1a1a]">{t.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* DATABASE */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-[#E8E0D8]/40 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B5EA7]/15">
                  <svg className="w-5 h-5 text-[#7B5EA7]" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#1a1a1a]">DATABASE</div>
                  <div className="text-[10px] text-[#9B8B8B]">Reliable data storage</div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Firebase", color: "#FFCA28", icon: "Fb" },
                  { name: "MySQL", color: "#4479A1", icon: "My" },
                  { name: "PostgreSQL", color: "#336791", icon: "Pg" },
                ].map((t) => (
                  <div key={t.name} className="flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-[#F5F8FF]">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-bold" style={{ backgroundColor: `${t.color}18`, color: t.color }}>{t.icon}</div>
                    <span className="text-[13px] font-medium text-[#1a1a1a]">{t.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </AnimSection>

      {/* ── INDUSTRIES WE SERVE ──────────────────────────────────────────── */}
      <AnimSection
        id="industries"
        className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #F0F7FF 0%, #F5F8FF 30%, #FAF7F5 60%, #F0F4FF 100%)" }}
      >
        {/* Background decorations */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 -left-16 h-[250px] w-[250px] rounded-full bg-[#B5E5EB]/20 blur-[90px]" />
          <div className="absolute -bottom-16 -right-16 h-[250px] w-[250px] rounded-full bg-[#C4B5E8]/15 blur-[90px]" />
          <div className="absolute top-6 left-6 grid grid-cols-4 gap-[6px] opacity-15">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="h-[5px] w-[5px] rounded-full bg-[#1FA0B1]" />
            ))}
          </div>
          <div className="absolute bottom-8 right-8 grid grid-cols-3 gap-[6px] opacity-10">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-[5px] w-[5px] rounded-full bg-[#C4B5E8]" />
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-[92%] max-w-6xl">
          {/* Header — left aligned */}
          <div className="mb-8">
            <SectionBadge>Industries</SectionBadge>
            <h2 className="mt-2 text-[30px] font-extrabold tracking-tight text-[#1a1a1a] sm:text-[36px]">
              Industries{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #1FA0B1 0%, #7B5EA7 100%)" }}>We Serve</span>
            </h2>
            <p className="mt-2 text-[13px] text-[#6B5A5A]">
              We build digital solutions for businesses across diverse industries, helping them grow, innovate and scale.
            </p>
          </div>

          {/* Industry pills */}
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-start"
          >
            {[
              { name: "Healthcare", color: "#E8436E", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg> },
              { name: "Education", color: "#1FA0B1", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15v-3.75m0 0h-.008v.008H6.75v-.008z" /></svg> },
              { name: "Real Estate", color: "#2563EB", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg> },
              { name: "E-Commerce", color: "#10B981", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg> },
              { name: "Banking & Finance", color: "#7C3AED", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg> },
              { name: "Manufacturing", color: "#D97706", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.6-3.03c-.51-.27-.68-.93-.37-1.42l.9-1.42a1 1 0 011.42-.2l3.18 2.24 5.15-5.94a1 1 0 011.48-.05l1.01 1.06c.38.4.36 1.03-.05 1.4L12.83 15a1 1 0 01-1.41.17zM3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18" /></svg> },
              { name: "IT & Technology", color: "#0891B2", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" /></svg> },
              { name: "Food & Beverage", color: "#EA580C", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.126-6 .37" /></svg> },
              { name: "Automotive", color: "#DC2626", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg> },
              { name: "Travel & Hospitality", color: "#4F46E5", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg> },
              { name: "Logistics & Supply Chain", color: "#0D9488", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0V5.625m0 0a2.25 2.25 0 114.5 0v.386m-4.5-.386a2.25 2.25 0 10-4.5 0v6.506" /></svg> },
              { name: "Enterprise", color: "#2563EB", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg> },
            ].map((ind) => (
              <motion.div
                key={ind.name}
                variants={fadeUp}
                className="flex items-center gap-2.5 rounded-xl border border-[#E8E0D8]/40 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${ind.color}15`, color: ind.color }}
                >
                  {ind.icon}
                </div>
                <span className="text-[13px] font-semibold text-[#1a1a1a]">{ind.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimSection>

      {/* ── TIMELINE ─────────────────────────────────────────────────────── */}
      <AnimSection id="timeline" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-[92%] max-w-4xl">
          <div className="mb-10">
            <SectionBadge>Our Journey</SectionBadge>
            <h2 className="mt-2 text-[30px] font-extrabold tracking-tight text-[#1a1a1a] sm:text-[36px]">
              Story in <span className="text-[#E8763A]">Milestones</span>
            </h2>
          </div>
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-[#1FA0B1] via-[#E8763A] to-transparent" />
            <div className="space-y-8">
              {TIMELINE.map((t, i) => (
                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
                  <div className="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full border-2 border-[#1FA0B1] bg-white" />
                  <div className="rounded-2xl border border-[#E8E0D8]/50 bg-white p-5 shadow-sm">
                    <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1FA0B1]">{t.year}</div>
                    <h3 className="mb-1.5 text-[15px] font-bold text-[#1a1a1a]">{t.title}</h3>
                    <p className="text-[13px] leading-relaxed text-[#6B5A5A]">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimSection>

      {/* ── LEADERSHIP ───────────────────────────────────────────────────── */}
      <AnimSection
        id="leadership"
        className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #F0F7FF 0%, #F5F8FF 30%, #FAF7F5 60%, #F0F4FF 100%)" }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-20 h-[280px] w-[280px] rounded-full bg-[#B5E5EB]/20 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 h-[260px] w-[260px] rounded-full bg-[#C4B5E8]/15 blur-[100px]" />
        </div>

        <div className="relative mx-auto w-[92%] max-w-6xl">
          <div className="mb-10 text-center">
            <SectionBadge>Executive Team</SectionBadge>
            <h2 className="mt-2 text-[30px] font-extrabold tracking-tight text-[#1a1a1a] sm:text-[36px]">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #1FA0B1 0%, #7B5EA7 100%)" }}>Leadership</span>
            </h2>
            <p className="mt-2 text-[13px] text-[#6B5A5A]">The founders who started NF Nexa Tech and still drive every major product decision.</p>
          </div>

          {/* Founder cards — 2 col */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {/* Nafis Quaisar */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-[#E8E0D8]/40 bg-white/90 p-6 shadow-sm text-center relative overflow-hidden">
              <div className="absolute top-4 left-4 text-[40px] font-serif text-[#1FA0B1]/10">&ldquo;</div>
              <div className="absolute bottom-4 right-4 text-[40px] font-serif text-[#1FA0B1]/10">&rdquo;</div>
              <div className="relative mx-auto mb-4 h-24 w-24">
                <Image src="/verify/founder.jpeg" alt="Nafis Quaisar" width={96} height={96} className="rounded-full object-cover h-24 w-24" />
                <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#22C55E] ring-2 ring-white">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
              </div>
              <div className="mb-1 inline-block rounded-full bg-[#1FA0B1]/10 px-3 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#1FA0B1]">Founder & CEO</div>
              <h3 className="text-[18px] font-extrabold text-[#1a1a1a]">Nafis Quaisar</h3>
              <p className="mb-4 text-[11px] font-semibold text-[#1FA0B1]">Founder & CEO</p>
              <p className="mb-5 text-[12.5px] leading-[1.7] text-[#6B5A5A]">
                Nafis Quaisar founded NF Nexa Tech with a vision to build world-class software solutions for startups and enterprises across India. With deep expertise in full-stack development, mobile apps and cloud architecture, he leads product strategy and engineering excellence at the company.
              </p>
              <div className="mb-4 flex items-center justify-center gap-6 text-[11px] text-[#9B8B8B]">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-[#1FA0B1]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                  <span>Member since <strong className="text-[#1a1a1a]">2023</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-[#E8763A]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  <span>Based in <strong className="text-[#1a1a1a]">New Delhi, India</strong></span>
                </div>
              </div>
              <a href="https://nfnexatech.com/verify/nafis-quaisar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1FA0B1] to-[#7B5EA7] px-5 py-2 text-[12px] font-bold text-white transition-all hover:shadow-lg hover:-translate-y-0.5">
                View Verification Profile <span>→</span>
              </a>
            </motion.div>

            {/* Saheb Alam */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-[#E8E0D8]/40 bg-white/90 p-6 shadow-sm text-center relative overflow-hidden">
              <div className="absolute top-4 left-4 text-[40px] font-serif text-[#7B5EA7]/10">&ldquo;</div>
              <div className="absolute bottom-4 right-4 text-[40px] font-serif text-[#7B5EA7]/10">&rdquo;</div>
              <div className="relative mx-auto mb-4 h-24 w-24">
                <Image src="/verify/co-founder.png" alt="Saheb Alam" width={96} height={96} className="rounded-full object-cover h-24 w-24" />
                <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#22C55E] ring-2 ring-white">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
              </div>
              <div className="mb-1 inline-block rounded-full bg-[#7B5EA7]/10 px-3 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#7B5EA7]">Co-Founder</div>
              <h3 className="text-[18px] font-extrabold text-[#1a1a1a]">Saheb Alam</h3>
              <p className="mb-4 text-[11px] font-semibold text-[#7B5EA7]">Co-Founder</p>
              <p className="mb-5 text-[12.5px] leading-[1.7] text-[#6B5A5A]">
                Saheb Alam co-founded NF Nexa Tech and drives business strategy, client relationships and operational growth. He plays a key role in expanding our services and building long-term partnerships with startups and businesses across India.
              </p>
              <div className="mb-4 flex items-center justify-center gap-6 text-[11px] text-[#9B8B8B]">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-[#1FA0B1]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                  <span>Member since <strong className="text-[#1a1a1a]">2023</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-[#E8763A]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  <span>Based in <strong className="text-[#1a1a1a]">New Delhi, India</strong></span>
                </div>
              </div>
              <a href="https://nfnexatech.com/verify/saheb-alam" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E8763A] to-[#E8436E] px-5 py-2 text-[12px] font-bold text-white transition-all hover:shadow-lg hover:-translate-y-0.5">
                View Verification Profile <span>→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </AnimSection>

      {/* ── MEET OUR PEOPLE ──────────────────────────────────────────────── */}
      <AnimSection id="team" className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white/60">
        <div className="relative mx-auto w-[92%] max-w-6xl">
          <div className="mb-10 text-center">
            <SectionBadge>The Team</SectionBadge>
            <h2 className="mt-2 text-[30px] font-extrabold tracking-tight text-[#1a1a1a] sm:text-[36px]">
              Meet Our{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #1FA0B1 0%, #7B5EA7 100%)" }}>People</span>
            </h2>
            <p className="mt-2 text-[13px] text-[#6B5A5A]">A passionate, cross-functional team that ships world-class software every single week.</p>
          </div>

          {/* Team member cards — 3 col */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-10">
            {[
              { name: "Anzar", role: "Business Development Executive", color: "#1FA0B1", img: "/verify/bde.png", desc: "Anzar leads business development at NF Nexa Tech, connecting businesses with the right technology solutions and building long-term partnerships.", since: "2024" },
              { name: "Khushi Mishra", role: "HR & Operations Executive", color: "#E8763A", img: "/verify/hr.jpeg", desc: "Khushi handles HR, team operations, recruitment and ensures a smooth and productive work environment at NF Nexa Tech.", since: "2024" },
              { name: "Absar Quaisar", role: "UI/UX Designer", color: "#7B5EA7", img: "/verify/uiux.png", desc: "Absar creates intuitive, pixel-perfect user experiences and modern UI designs that help our products stand out.", since: "2024" },
            ].map((m) => (
              <motion.div key={m.name} variants={fadeUp} className="rounded-2xl border border-[#E8E0D8]/40 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="relative h-14 w-14">
                    <Image src={m.img} alt={m.name} width={56} height={56} className="rounded-xl object-cover h-14 w-14" />
                    <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#22C55E] ring-2 ring-white">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-[15px] font-extrabold text-[#1a1a1a]">{m.name}</h3>
                <p className="mb-3 text-[11px] font-semibold" style={{ color: m.color }}>{m.role}</p>
                <p className="mb-4 text-[12px] leading-[1.7] text-[#6B5A5A]">{m.desc}</p>
                <div className="flex items-center gap-5 text-[10px] text-[#9B8B8B]">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-[#1FA0B1]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                    <span>Member since <strong className="text-[#1a1a1a]">{m.since}</strong></span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-[#E8763A]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                    <span>Based in <strong className="text-[#1a1a1a]">New Delhi, India</strong></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Team stats bar */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>, value: "5+", label: "Team Members", color: "#1FA0B1" },
              { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>, value: "3+", label: "Core Departments", color: "#E8763A" },
              { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>, value: "100%", label: "Remote Friendly", color: "#7B5EA7" },
              { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>, value: "Driven", label: "By Innovation", color: "#E8436E" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-[#E8E0D8]/40 bg-white/80 px-4 py-3 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: `${s.color}12`, color: s.color }}>{s.icon}</div>
                <div>
                  <div className="text-[18px] font-extrabold text-[#1a1a1a]">{s.value}</div>
                  <div className="text-[10px] text-[#9B8B8B]">{s.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </AnimSection>

    </div>
  );
}
