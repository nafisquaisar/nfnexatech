"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { LEADERSHIP, TEAM_MEMBERS } from "@/data/team";

/* ─────────────────────────────────────────────────────────────────────────────
   Static data
───────────────────────────────────────────────────────────────────────────── */

const STATS = [
  { value: 15, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "", label: "Team Members" },
  { value: 2, suffix: "+", label: "Years of Excellence" },
];

const VALUES = [
  { icon: "💡", title: "Innovation", desc: "We embrace new technologies and creative thinking to solve complex problems in ways that move the needle." },
  { icon: "🔍", title: "Transparency", desc: "Clear communication, honest timelines and open collaboration — no surprises, ever." },
  { icon: "🏆", title: "Quality First", desc: "We don't ship code we're not proud of. Every line goes through rigorous review before it reaches production." },
  { icon: "🤝", title: "Client Success", desc: "Your growth is our metric. We measure our success by the impact we create for your business." },
  { icon: "⚡", title: "Fast Delivery", desc: "Speed without compromise. We ship faster than the industry average while maintaining enterprise-grade standards." },
  { icon: "🏗️", title: "Scalable Architecture", desc: "Built to grow. Our systems handle 10 users today and 10 million tomorrow with the same reliability." },
  { icon: "🔒", title: "Security", desc: "Security is baked in from day one, not bolted on later. Every project follows industry-leading security practices." },
  { icon: "🛠️", title: "Long-Term Support", desc: "We're partners, not contractors. Post-launch support, monitoring and iteration are part of our commitment." },
  { icon: "📈", title: "Continuous Improvement", desc: "We retrospect after every project and constantly refine our processes to deliver better outcomes each time." },
];

const WHY_CHOOSE = [
  { icon: "⚡", title: "Fast Delivery", desc: "2–6 week sprints with weekly demos" },
  { icon: "✨", title: "Clean Code", desc: "Type-safe, documented, maintainable" },
  { icon: "🎨", title: "Modern UI", desc: "Pixel-perfect, accessible interfaces" },
  { icon: "📐", title: "Scalable Architecture", desc: "Built for millions of users from day one" },
  { icon: "💬", title: "Transparent Comms", desc: "Daily updates, no radio silence" },
  { icon: "🔧", title: "Dedicated Support", desc: "Post-launch monitoring & fixes included" },
  { icon: "🚀", title: "Latest Technologies", desc: "Next.js 15, React 19, Flutter 3, Firebase" },
  { icon: "💰", title: "Affordable Pricing", desc: "Premium quality at startup-friendly rates" },
  { icon: "🔗", title: "Long-Term Partnership", desc: "We grow with you, not away from you" },
];

const PROCESS = [
  { step: "01", icon: "🎯", title: "Discovery", desc: "We start with a deep-dive call to understand your goals, constraints, audience and competitive landscape." },
  { step: "02", icon: "📋", title: "Planning", desc: "We produce a detailed project brief, feature map and delivery roadmap with clear milestones." },
  { step: "03", icon: "🎨", title: "UI/UX Design", desc: "Wireframes and high-fidelity Figma prototypes, validated with stakeholders before a single line of code is written." },
  { step: "04", icon: "⚡", title: "Development", desc: "Agile sprints with weekly demos. Clean, typed, tested code committed to a shared repository daily." },
  { step: "05", icon: "🔬", title: "Testing", desc: "Unit tests, integration tests, cross-browser QA, performance audits and security scans before release." },
  { step: "06", icon: "🚀", title: "Deployment", desc: "Automated CI/CD pipelines. Zero-downtime deployments on Vercel, AWS or your preferred cloud." },
  { step: "07", icon: "🛠️", title: "Maintenance", desc: "Proactive monitoring, bug fixes, feature updates and performance optimisation — ongoing, forever." },
];

/* ── Technologies — grouped by category ─────────────────────────────────── */
const TECH_GROUPS = [
  {
    label: "Frontend",
    colour: "cyan",
    border: "border-cyan-500/25",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    badgeBg: "bg-cyan-500/15",
    badgeBorder: "border-cyan-500/30",
    badgeText: "text-cyan-300",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Mobile",
    colour: "violet",
    border: "border-violet-500/25",
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    badgeBg: "bg-violet-500/15",
    badgeBorder: "border-violet-500/30",
    badgeText: "text-violet-300",
    items: ["Android", "Kotlin", "Flutter"],
  },
  {
    label: "Backend",
    colour: "amber",
    border: "border-amber-500/25",
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    badgeBg: "bg-amber-500/15",
    badgeBorder: "border-amber-500/30",
    badgeText: "text-amber-300",
    items: ["Node.js", "Firebase", "REST APIs"],
  },
  {
    label: "Database",
    colour: "emerald",
    border: "border-emerald-500/25",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    badgeBg: "bg-emerald-500/15",
    badgeBorder: "border-emerald-500/30",
    badgeText: "text-emerald-300",
    items: ["Firestore", "MySQL"],
  },
];

const INDUSTRIES = [
  "Healthcare", "Education", "Real Estate", "E-Commerce", "SaaS",
  "Startups", "Finance", "Logistics", "Travel", "Local Businesses", "Enterprise",
];

const TIMELINE = [
  { year: "Oct 2023", title: "Company Founded", desc: "NF Nexa Tech officially registered under UDYAM (MSME) in New Delhi." },
  { year: "Late 2023", title: "First Client Projects", desc: "Delivered first three client projects — a real-estate portal, a school management app and an e-commerce store." },
  { year: "Early 2024", title: "Team Expansion", desc: "Grew to a cross-functional team with dedicated design, development and business development functions." },
  { year: "Mid 2024", title: "10+ Projects Milestone", desc: "Crossed 10 successfully delivered projects across healthcare, education and SaaS verticals." },
  { year: "Late 2024", title: "Mobile & Flutter Specialisation", desc: "Launched dedicated Flutter and Kotlin development practice, delivering four cross-platform mobile apps." },
  { year: "2025", title: "Enterprise Clients & Growth", desc: "Onboarded first enterprise clients, expanded services to include cloud solutions and business automation." },
];

const FAQS = [
  { q: "Where is NF Nexa Tech located?", a: "Our head office is at Flat 301, Janki Hari Niwas, Block B, Bengali Market, Mahipalpur, New Delhi – 110037. We serve clients across India and internationally." },
  { q: "What technologies do you specialise in?", a: "We specialise in Next.js, React, TypeScript, Flutter, Kotlin, Node.js, Firebase, PostgreSQL and AWS. We always adopt the best technology for your specific requirements." },
  { q: "How long does a typical project take?", a: "A standard web application takes 4–8 weeks. A mobile app typically takes 6–12 weeks. Complex enterprise platforms are planned on a dedicated roadmap. We provide a precise timeline after the discovery call." },
  { q: "Do you work with startups?", a: "Absolutely. We love working with startups — from idea validation and MVP development to scaling products post-launch. We offer startup-friendly pricing without compromising quality." },
  { q: "What is included in your post-launch support?", a: "All projects include a 30-day free bug-fix period. Beyond that, we offer monthly maintenance retainers covering monitoring, updates, security patches and feature additions." },
  { q: "Do you sign NDAs?", a: "Yes, we sign NDAs before any sensitive discussion. Client confidentiality is a non-negotiable part of how we operate." },
  { q: "Are you MSME registered?", a: "Yes. NF Nexa Tech is officially registered under UDYAM (MSME), Government of India. Founded on 25 October 2023." },
  { q: "How do I start a project with you?", a: "Simply click 'Start Your Project' or book a free consultation call. We typically respond within 2–4 hours on business days." },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Reusable section wrapper
───────────────────────────────────────────────────────────────────────────── */

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`relative px-4 py-20 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </motion.section>
  );
}

/* ── Branded label pill (cyan accent matching homepage) ───────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400">
      {children}
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
      {children}
    </h2>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Animated counter
───────────────────────────────────────────────────────────────────────────── */

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Main Page
───────────────────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">

      {/* ── Global ambient glows (vivid cyan/purple matching homepage) ──── */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-purple-500/15 blur-[100px]" />
        <div className="absolute bottom-0 -left-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      {/* ── Top navigation: breadcrumb + back button ─────────────────── */}
      <div className="relative z-10 mx-auto w-[92%] max-w-5xl px-0 pt-24 sm:pt-28">
        <div className="flex items-center justify-between gap-4">

          {/* Back button */}
          <Link
            href="/"
            id="about-back-to-home"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-400 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06] hover:text-slate-200"
          >
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Home
          </Link>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="hidden sm:flex">
            <ol className="flex items-center gap-1.5 text-sm text-slate-500">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-200 hover:text-cyan-400"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <svg className="h-3.5 w-3.5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                </svg>
              </li>
              <li>
                <span className="font-medium text-slate-300" aria-current="page">
                  About
                </span>
              </li>
            </ol>
          </nav>

        </div>
      </div>

      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 sm:pb-28 sm:pt-14 lg:px-8">


        {/* Decorative grid */}
        <div className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] [background-size:60px_60px]" />

        {/* Hero glow orbs */}
        <div className="pointer-events-none absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px] -z-10" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-purple-500/20 blur-[140px] -z-10" />

        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 -z-10" />

        <div className="mx-auto max-w-5xl text-center">

          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            NF Nexa Tech · Est. Oct 2023 · UDYAM Registered · New Delhi, India
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Building Modern{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Digital Products
            </span>{" "}
            That Scale
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl"
          >
            NF Nexa Tech is a software development company focused on delivering
            high-quality websites, mobile applications, SaaS platforms, UI/UX
            design, and custom digital solutions for startups, businesses, and
            enterprises.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/start-project"
              id="about-hero-start-project"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:scale-105"
            >
              Start Your Project
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              id="about-hero-view-services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur transition-all hover:border-white/30 hover:text-white"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              id="about-hero-contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-7 py-3.5 text-sm font-semibold text-slate-500 transition-all hover:border-slate-600 hover:text-slate-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 2. STATS ──────────────────────────────────────────────────────── */}
      <Section id="stats">
        <div className="mx-auto max-w-5xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {STATS.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60 p-6 text-center backdrop-blur-sm transition-all hover:border-cyan-500/20 hover:bg-slate-900/80"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 transition-all group-hover:from-cyan-500/5 group-hover:to-purple-500/5" />
                {/* Cyan → purple gradient on the number, matching homepage StatsBar */}
                <div className="relative bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="relative mt-2 text-sm font-medium uppercase tracking-widest text-slate-500">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── 3. COMPANY STORY ──────────────────────────────────────────────── */}
      <Section id="story" className="bg-slate-900/30">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <SectionHeading>
                Born in Delhi,{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Built for the World
                </span>
              </SectionHeading>
            </div>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>
                NF Nexa Tech was founded on 25 October 2023 by Nafis Quaisar and
                Saheb Alam — two engineers who saw the same problem everywhere:
                businesses with great ideas but software that couldn&apos;t keep up.
                Whether it was a startup that needed a scalable MVP in six weeks
                or an enterprise saddled with legacy systems that slowed
                everything down, the gap between ambition and execution was
                painfully consistent.
              </p>
              <p>
                We set out to close that gap. Not with cookie-cutter templates
                or offshore teams that treat your project as a ticket — but with
                a dedicated studio model where every client gets senior-level
                attention, custom architecture and code that is genuinely built
                to last. From Day 1, our philosophy has been simple:{" "}
                <span className="text-slate-300 font-medium">
                  write less code, ship better software, build longer
                  relationships.
                </span>
              </p>
              <p>
                Registered under UDYAM (MSME) and headquartered in Mahipalpur,
                New Delhi, we now serve clients across healthcare, education,
                real estate, SaaS and e-commerce — delivering projects in weeks
                that others take months to scope.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 4. MISSION & VISION ───────────────────────────────────────────── */}
      <Section id="mission-vision">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <SectionLabel>Purpose &amp; Direction</SectionLabel>
            <SectionHeading>Mission &amp; Vision</SectionHeading>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">

            {/* Mission */}
            <motion.div
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8 backdrop-blur-sm"
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl transition-all group-hover:bg-cyan-500/15" />
              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20 text-2xl">
                  🎯
                </div>
                <h3 className="mb-4 text-xl font-bold text-white">Our Mission</h3>
                <p className="text-slate-400 leading-relaxed">
                  To empower businesses through innovative, scalable, and
                  user-focused digital solutions — helping startups, businesses
                  and enterprises grow faster through high-quality software and
                  rapid, reliable delivery.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-purple-500/20 bg-slate-900/60 p-8 backdrop-blur-sm"
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl transition-all group-hover:bg-purple-500/15" />
              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20 text-2xl">
                  🔭
                </div>
                <h3 className="mb-4 text-xl font-bold text-white">Our Vision</h3>
                <p className="text-slate-400 leading-relaxed">
                  To become a trusted global technology partner helping startups
                  and businesses build impactful digital products — delivering
                  innovative solutions and forging long-term client relationships
                  across India and beyond.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── 5. CORE VALUES ────────────────────────────────────────────────── */}
      <Section id="values" className="bg-slate-900/30">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <SectionLabel>What We Stand For</SectionLabel>
            <SectionHeading>Core Values</SectionHeading>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Nine principles that guide every decision, every commit and every
              client interaction.
            </p>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {VALUES.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="group rounded-2xl border border-white/5 bg-slate-900/50 p-6 transition-all hover:border-cyan-500/20 hover:bg-slate-900/80"
              >
                <div className="mb-3 text-3xl">{v.icon}</div>
                <h3 className="mb-2 font-bold text-white">{v.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── 6. WHY CHOOSE US ──────────────────────────────────────────────── */}
      <Section id="why-choose-us">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <SectionLabel>Why NF Nexa Tech</SectionLabel>
            <SectionHeading>
              The Studio That{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Delivers
              </span>
            </SectionHeading>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Nine reasons businesses choose us over a generic agency.
            </p>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {WHY_CHOOSE.map((w) => (
              <motion.div
                key={w.title}
                variants={fadeUp}
                className="group flex gap-4 rounded-2xl border border-white/5 bg-slate-900/50 p-6 transition-all hover:border-cyan-500/20 hover:bg-slate-900/80"
              >
                <div className="mt-0.5 shrink-0 text-2xl">{w.icon}</div>
                <div>
                  <div className="mb-1 font-semibold text-white">{w.title}</div>
                  <div className="text-sm text-slate-400">{w.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── 7. DEVELOPMENT PROCESS ────────────────────────────────────────── */}
      <Section id="process" className="bg-slate-900/30">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <SectionLabel>How We Work</SectionLabel>
            <SectionHeading>Our Development Process</SectionHeading>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              A proven seven-step process refined across 15+ successful projects.
            </p>
          </div>

          {/* Connector line — desktop only */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block"
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {PROCESS.map((p) => (
                <motion.div
                  key={p.step}
                  variants={fadeUp}
                  className="group relative flex flex-col gap-4 rounded-2xl border border-white/8 bg-slate-900/60 p-6 backdrop-blur-sm transition-all hover:border-cyan-400/20 hover:bg-white/[0.04]"
                >
                  {/* Number badge + icon */}
                  <div className="flex items-center justify-between">
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 font-mono text-sm font-extrabold text-slate-500 transition-colors group-hover:border-cyan-400/30 group-hover:text-cyan-400">
                      {p.step}
                    </div>
                    <span className="text-2xl" aria-hidden>{p.icon}</span>
                  </div>

                  <div>
                    <h3 className="mb-2 text-base font-bold text-white">{p.title}</h3>
                    <p className="text-sm leading-6 text-slate-400">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── 8. TECHNOLOGIES — grouped ─────────────────────────────────────── */}
      <Section id="technologies">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <SectionLabel>Tech Stack</SectionLabel>
            <SectionHeading>Technologies We Use</SectionHeading>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Modern, battle-tested tools chosen to deliver performance,
              scalability and maintainability.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {TECH_GROUPS.map((group) => (
              <motion.div
                key={group.label}
                variants={fadeUp}
                className={`rounded-2xl border ${group.border} bg-slate-900/60 p-5 backdrop-blur-sm transition-all hover:bg-slate-900/80`}
              >
                {/* Group header */}
                <div className={`mb-4 inline-flex items-center gap-1.5 rounded-full border ${group.badgeBorder} ${group.badgeBg} px-3 py-1 text-xs font-bold uppercase tracking-widest ${group.text}`}>
                  {group.label}
                </div>

                {/* Tech pills */}
                <div className="flex flex-col gap-2">
                  {group.items.map((tech) => (
                    <div
                      key={tech}
                      className={`rounded-xl border border-white/8 bg-slate-800/60 px-3 py-2 text-sm font-medium ${group.badgeText} transition-all hover:border-white/15`}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── 9. INDUSTRIES ─────────────────────────────────────────────────── */}
      <Section id="industries" className="bg-slate-900/30">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <SectionLabel>Verticals</SectionLabel>
            <SectionHeading>Industries We Serve</SectionHeading>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              From early-stage startups to enterprise organisations, we deliver
              across every major vertical.
            </p>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {INDUSTRIES.map((ind) => (
              <motion.div
                key={ind}
                variants={fadeUp}
                className="rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-sm font-medium text-purple-300 transition-all hover:border-purple-500/40 hover:bg-purple-500/15"
              >
                {ind}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── 10. LEADERSHIP ────────────────────────────────────────────────── */}
      <Section id="leadership">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <SectionLabel>Executive Team</SectionLabel>
            <SectionHeading>Leadership</SectionHeading>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              The founders who started NF Nexa Tech and still drive every major
              product decision.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2"
          >
            {LEADERSHIP.map((leader) => (
              <motion.div
                key={leader.slug}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-3xl border ${leader.accent.border} bg-slate-900/60 p-8 backdrop-blur-sm`}
              >
                {/* Glow */}
                <div
                  className={`absolute -top-24 -right-24 h-48 w-48 rounded-full ${leader.accent.glow} blur-3xl transition-all group-hover:opacity-80`}
                />

                {/* Gradient stripe */}
                <div
                  className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${leader.accent.from} ${leader.accent.via} ${leader.accent.to}`}
                />

                <div className="relative">
                  {/* Photo */}
                  <div className="relative mb-6 h-28 w-28">
                    <div className={`absolute inset-0 rounded-2xl ${leader.accent.glow} blur-lg`} />
                    <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-white/10 bg-slate-800 shadow-xl">
                      <Image
                        src={leader.photo}
                        alt={leader.name}
                        fill
                        className="object-cover object-top"
                        sizes="112px"
                      />
                    </div>
                    {/* Verified badge */}
                    <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-900 bg-emerald-500 text-xs text-white shadow-lg">
                      ✓
                    </div>
                  </div>

                  <div className="mb-1 font-mono text-xs text-slate-500">
                    {leader.employeeId}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                  <p
                    className={`mt-1 bg-gradient-to-r ${leader.accent.from} ${leader.accent.to} bg-clip-text text-sm font-semibold text-transparent`}
                  >
                    {leader.designation}
                  </p>

                  <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                    {leader.bio}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                    <span className="rounded-full bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 text-emerald-400">
                      ✓ Verified
                    </span>
                    <span>Member since {leader.joinedYear}</span>
                  </div>

                  <div className="mt-6">
                    <Link
                      href={`/verify/${leader.slug}`}
                      id={`about-leadership-view-profile-${leader.slug}`}
                      className={`inline-flex items-center gap-2 rounded-lg border ${leader.accent.border} bg-slate-800/60 px-4 py-2 text-xs font-semibold text-slate-300 transition-all hover:bg-slate-800 hover:text-white`}
                    >
                      View Verification Profile
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── 11. MEET THE TEAM ─────────────────────────────────────────────── */}
      <Section id="team" className="bg-slate-900/30">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <SectionLabel>The Team</SectionLabel>
            <SectionHeading>Meet Our People</SectionHeading>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              A passionate, cross-functional team that ships world-class software
              every single week.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.slug}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-white/10 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className={`absolute -top-16 -right-16 h-32 w-32 rounded-full ${member.accent.glow} blur-3xl opacity-0 transition-all group-hover:opacity-100`} />

                <div className="relative">
                  <div className="relative mb-4 h-20 w-20">
                    <div className={`absolute inset-0 rounded-xl ${member.accent.glow} blur-md opacity-0 group-hover:opacity-100 transition-opacity`} />
                    <div className="relative h-20 w-20 overflow-hidden rounded-xl border border-white/10 bg-slate-800">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        sizes="80px"
                      />
                    </div>
                    <div className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-900 bg-emerald-500 text-[10px] text-white">
                      ✓
                    </div>
                  </div>

                  <div className="mb-0.5 font-mono text-[10px] text-slate-600">
                    {member.employeeId}
                  </div>
                  <h3 className="font-bold text-white">{member.name}</h3>
                  <p
                    className={`mt-0.5 bg-gradient-to-r ${member.accent.from} ${member.accent.to} bg-clip-text text-xs font-semibold text-transparent`}
                  >
                    {member.designation}
                  </p>
                  <p className="mt-3 text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] text-slate-600">Since {member.joinedYear}</span>
                    <Link
                      href={`/verify/${member.slug}`}
                      id={`about-team-verify-${member.slug}`}
                      className={`inline-flex items-center gap-1 rounded-lg border ${member.accent.border} bg-slate-800/60 px-3 py-1.5 text-[11px] font-semibold text-slate-400 transition-all hover:text-white`}
                    >
                      Verify Profile
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── 12. TIMELINE ──────────────────────────────────────────────────── */}
      <Section id="timeline">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <SectionLabel>Journey</SectionLabel>
            <SectionHeading>Our Story in Milestones</SectionHeading>
          </div>

          <div className="relative pl-8">
            {/* Line */}
            <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent" />

            <div className="space-y-10">
              {TIMELINE.map((t, i) => (
                <motion.div
                  key={t.year}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-8 top-1.5 flex h-4 w-4 -translate-x-0.5 items-center justify-center">
                    <div
                      className={`h-3 w-3 rounded-full shadow-[0_0_10px_3px] ${i === TIMELINE.length - 1
                          ? "bg-amber-400 shadow-amber-400/50"
                          : "bg-cyan-500 shadow-cyan-500/50"
                        }`}
                    />
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-6">
                    <div className="mb-2 font-mono text-xs font-bold text-cyan-400">
                      {t.year}
                    </div>
                    <div className="mb-1 font-bold text-white">{t.title}</div>
                    <div className="text-sm text-slate-400">{t.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── 13. CLIENT COMMITMENT ─────────────────────────────────────────── */}
      <Section id="commitment" className="bg-slate-900/30">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <SectionLabel>Our Promise</SectionLabel>
            <SectionHeading>Client Commitment</SectionHeading>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              We don&apos;t just deliver projects — we build partnerships. Here is
              what every client can expect from Day 1.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {[
              { icon: "📞", title: "Always Reachable", desc: "Dedicated point of contact, response within 2 hours during business hours. No ghosting, ever." },
              { icon: "📋", title: "Full Ownership Transfer", desc: "All code, designs and assets belong to you. We deliver source code, documentation and deployment access." },
              { icon: "🔄", title: "Agile Iterations", desc: "Weekly sprint demos, feedback loops and flexible scope management. Your vision evolves — so does our delivery." },
              { icon: "🛡️", title: "Post-Launch Protection", desc: "30-day free bug fix window post-launch. Long-term retainers available for ongoing peace of mind." },
            ].map((c) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                className="flex gap-5 rounded-2xl border border-white/5 bg-slate-900/50 p-6 transition-all hover:border-cyan-500/15"
              >
                <div className="mt-0.5 shrink-0 text-3xl">{c.icon}</div>
                <div>
                  <div className="mb-2 font-bold text-white">{c.title}</div>
                  <div className="text-sm text-slate-400 leading-relaxed">{c.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── 14. FAQ ───────────────────────────────────────────────────────── */}
      <Section id="faq">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 text-center">
            <SectionLabel>FAQ</SectionLabel>
            <SectionHeading>Frequently Asked Questions</SectionHeading>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50"
              >
                <button
                  id={`faq-toggle-${i}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-white">{faq.q}</span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="border-t border-white/5 px-6 pb-6 pt-4 text-sm text-slate-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 15. CTA ───────────────────────────────────────────────────────── */}
      <Section id="cta">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-cyan-600/20 via-purple-600/20 to-violet-600/20 p-12 text-center backdrop-blur-sm sm:p-16">

            {/* Background radial glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12)_0%,transparent_70%)]" />

            {/* Decorative corner orbs */}
            <div className="pointer-events-none absolute -top-20 -left-20 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />

            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                Ready to Build?
              </div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                Let&apos;s Build Something{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Amazing Together
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-slate-400">
                Ready to launch your next website, application, or SaaS product?
                Partner with NF Nexa Tech and bring your vision to life.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/start-project"
                  id="about-cta-start-project"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all hover:scale-105 hover:shadow-cyan-500/50"
                >
                  Start Your Project
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  id="about-cta-contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-800/60 px-8 py-4 font-semibold text-slate-300 transition-all hover:border-slate-500 hover:text-white"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 16. CONTACT STRIP ─────────────────────────────────────────────── */}
      <section className="border-t border-white/5 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <div className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-600">
                Head Office
              </div>
              <p className="text-sm text-slate-400">
                Flat 301, Janki Hari Niwas, Block B,<br />
                Bengali Market, Mahipalpur,<br />
                New Delhi – 110037
              </p>
            </div>
            <div>
              <div className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-600">
                Contact
              </div>
              <div className="space-y-1 text-sm">
                <a href="mailto:nfnexatech@gmail.com" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                  nfnexatech@gmail.com
                </a>
                <a href="tel:+919801999829" className="block text-slate-400 hover:text-slate-300 transition-colors">
                  +91 98019 99829
                </a>
              </div>
            </div>
            <div>
              <div className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-600">
                Registration
              </div>
              <p className="text-sm text-slate-400">
                UDYAM Registered MSME<br />
                Founded 25 October 2023<br />
                New Delhi, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
