"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { trackEvent } from "@/lib/analytics";
import { EASE_OUT_EXPO, EASE_SPRING } from "@/lib/motion";

/* ─── Stats ─────────────────────────────────────────────── */
const STATS = [
  {
    id: "clients",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: "30+",
    label: "Happy Clients",
  },
  {
    id: "years",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    value: "3+",
    label: "Years of Experience",
  },
];

/* ─── Trust logos ────────────────────────────────────────── */
const TRUST_LOGOS = ["Google", "Firebase", "AWS", "Vercel", "Notion", "Microsoft"];

/* ─── Shared easing shorthand ────────────────────────────── */
const EXPO = EASE_OUT_EXPO;

/* ─── Animation variants ─────────────────────────────────── */
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EXPO } },
};

const itemFast = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EXPO } },
};

const statItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_SPRING } },
};

const imageReveal = {
  hidden: { opacity: 0, x: 80, scale: 0.94 },
  show: {
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 1.1, ease: EXPO, delay: 0.2 },
  },
};

const trustBarReveal = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: EXPO, delay: 0.5 },
  },
};

/* ─── Component ─────────────────────────────────────────── */
function Hero() {
  /* ── Mouse parallax setup ─────────────────────────────── */
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 0.8 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 0.8 });

  // bg image parallax (slowest)
  const bgX = useTransform(smoothX, [-1, 1], [-8, 8]);
  const bgY = useTransform(smoothY, [-1, 1], [-5, 5]);

  // content parallax (subtle)
  const contentX = useTransform(smoothX, [-1, 1], [-4, 4]);
  const contentY = useTransform(smoothY, [-1, 1], [-3, 3]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = section.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 2;
      const y = ((e.clientY - top) / height - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden pt-[88px]"
      style={{ minHeight: "calc(100vw / 2.13 + 76px)" }}
    >
      {/* ══ Background ══ */}
      <motion.div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "#FAF7F5", x: bgX, y: bgY }}
      >
        <Image
          src="/images/hero/herobg2.webp"
          alt=""
          fill
          priority
          className="object-contain object-right-top hidden lg:block"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 via-[40%] to-transparent lg:from-white/80 lg:via-white/40" />
      </motion.div>

      {/* ══ Main content ══ */}
      <div className="relative z-10 w-full pl-[6%] pr-[4%] pb-8 pt-10 min-h-[calc(100vh-88px)] flex items-center">

        {/* LEFT — animated content */}
        <motion.div
          className="flex flex-col lg:max-w-[55%] w-full"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{ x: contentX, y: contentY }}
        >

          {/* Badge */}
          <motion.div
            variants={itemUp}
            className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-[#C6D1D7]/70 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#E8763A]" />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#6B5A5A]">
              Web &amp; Software Development
            </span>
            <span className="text-[#C6D1D7] font-light">—</span>
            <span className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#1FA0B1]">
              Mahipalpur, New Delhi
            </span>
          </motion.div>

          {/* Headline — line by line */}
          <h1 className="text-[48px] font-extrabold leading-[1.08] tracking-tight text-[#1a1a1a] sm:text-[54px] lg:text-[58px]">
            <motion.span variants={itemUp} className="block">Digital Solutions</motion.span>
            <motion.span variants={itemUp} className="block">That Create</motion.span>
            <motion.span
              variants={itemUp}
              className="inline-flex flex-wrap items-baseline gap-x-3 mt-1"
            >
              <span className="text-[#E8763A]">Real</span>
              <span className="text-[#1FA0B1]">Impact</span>
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            variants={itemFast}
            className="mt-5 max-w-[440px] text-[15px] leading-relaxed text-[#6B5A5A]"
          >
            NF Nexa Tech builds <strong className="font-semibold text-[#1a1a1a]">websites</strong>,{" "}
            <strong className="font-semibold text-[#1a1a1a]">web applications</strong>, mobile apps and{" "}
            <strong className="font-semibold text-[#1a1a1a]">SaaS</strong> products for businesses in Delhi
            and across India. We turn ideas into scalable and beautiful digital products.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemFast} className="mt-7 flex flex-wrap items-center gap-5">
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.28, ease: EASE_SPRING }}>
              <Link
                href="/start-project"
                id="hero-get-quote-btn"
                className="group inline-flex items-center gap-2 rounded-full bg-[#F9E1CD] px-6 py-3 text-[14px] font-bold text-[#1a1a1a] shadow-md shadow-[#F9E1CD]/60 hover:bg-[#f5d4b8] hover:shadow-lg"
                onClick={() => trackEvent("cta_click", { label: "hero_get_quote" })}
              >
                Get a Free Quote
                <motion.svg
                  className="w-3.5 h-3.5"
                  fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.25 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </motion.svg>
              </Link>
            </motion.div>

            <motion.a
              href="#projects"
              id="hero-watch-work-btn"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#1FA0B1]/40 bg-white/70 px-5 py-2.5 text-[14px] font-semibold text-[#1a1a1a] shadow-sm backdrop-blur-sm transition-all hover:border-[#1FA0B1] hover:bg-[#1FA0B1]/8 hover:text-[#1FA0B1] hover:shadow-md"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.28, ease: EASE_SPRING }}
              onClick={() => trackEvent("cta_click", { label: "hero_view_work" })}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1FA0B1] text-white shadow-sm transition-transform group-hover:scale-110">
                <svg className="w-3.5 h-3.5 translate-x-[1px]" fill="currentColor" viewBox="0 0 16 16" aria-hidden>
                  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5Z" />
                </svg>
              </span>
              Watch Our Work
            </motion.a>
          </motion.div>

          {/* Stats — staggered */}
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
            className="mt-9 grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-0 sm:divide-x sm:divide-[#C6D1D7]/60"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.id}
                variants={statItem}
                className="flex flex-col items-center text-center gap-1.5 rounded-xl bg-white/70 border border-[#C6D1D7]/40 p-3 shadow-sm sm:flex-row sm:items-center sm:text-left sm:gap-2.5 sm:rounded-none sm:bg-transparent sm:border-0 sm:shadow-none sm:px-5 sm:first:pl-0 sm:last:pr-0 sm:p-0"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#B5E5EB]/50 text-[#1FA0B1]">
                  {stat.icon}
                </span>
                <div>
                  <div className="text-[18px] sm:text-[20px] font-extrabold leading-none text-[#1a1a1a]">{stat.value}</div>
                  <div className="mt-0.5 text-[10px] sm:text-[11px] font-medium text-[#6B5A5A] leading-tight">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ══ Trust bar ══ */}
      <motion.div
        variants={trustBarReveal}
        initial="hidden"
        animate="show"
        className="relative z-10 border-t border-[#C6D1D7]/40 bg-white/60 backdrop-blur-sm"
      >
        <div className="mx-auto w-[92%] max-w-6xl py-5">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-[#C6D1D7]/50" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B8ACA7] whitespace-nowrap">
              Trusted by Businesses Worldwide
            </p>
            <div className="flex-1 h-px bg-[#C6D1D7]/50" />
          </div>
          <motion.div
            className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
            initial="hidden"
            animate="show"
          >
            {TRUST_LOGOS.map((logo) => (
              <motion.span
                key={logo}
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EXPO } } }}
                className="text-[13px] font-semibold text-[#B8ACA7] tracking-wide transition-colors hover:text-[#6B5A5A]"
              >
                {logo}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
