"use client";

import { motion } from "framer-motion";
import { staggerContainer, cardReveal, headingReveal, softFade, VIEWPORT_ONCE, VIEWPORT_CARDS, EASE_SPRING } from "@/lib/motion";

const STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We understand your business goals, requirements, timeline, and technical needs to define the right solution.",
    duration: "30 min – Free",
    color: "#E8763A",
    bg: "rgba(249,225,205,0.55)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Technical Proposal",
    description:
      "We prepare the project scope, technology plan, timeline, and milestones so you know exactly what we're building.",
    duration: "48 hrs – No obligation",
    color: "#1FA0B1",
    bg: "rgba(181,229,235,0.4)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "We design and develop your product in stages, with regular updates and feedback throughout the development process.",
    duration: "6–16 weeks – Milestone-based",
    color: "#E8763A",
    bg: "rgba(249,225,205,0.55)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4-4 4 4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We handle deployment, testing, optimization, and post-launch support to help ensure a smooth product launch.",
    duration: "30 days – Included free",
    color: "#1FA0B1",
    bg: "rgba(181,229,235,0.4)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

/**
 * ProcessTimeline — redesigned to match reference image.
 * 4 horizontal cards with dotted connector arrows, step numbers, icons, time badges.
 */
export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-16"
      style={{ backgroundColor: "#FAF7F5" }}
    >
      {/* White overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundColor: "rgba(250,247,245,0.82)", zIndex: 1 }} />

      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>
        <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full blur-[90px]" style={{ backgroundColor: "rgba(181,229,235,0.4)" }} />
        <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full blur-[80px]" style={{ backgroundColor: "rgba(249,225,205,0.5)" }} />
      </div>

      <div className="relative mx-auto w-[92%] max-w-6xl" style={{ zIndex: 2 }}>

        {/* ── Heading ── */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={softFade} className="mb-3 inline-flex items-center gap-3">
            <span className="h-px w-10" style={{ backgroundColor: "rgba(31,160,177,0.5)" }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#1FA0B1" }}>Our Process</span>
          </motion.div>
          <motion.h2 variants={headingReveal} className="text-[36px] font-extrabold tracking-tight sm:text-[42px]" style={{ color: "#1a1a1a" }}>
            How We Work{" "}
            <span style={{ color: "#E8763A" }}>Together</span>
          </motion.h2>
          <motion.p variants={softFade} className="mt-3 max-w-xl text-[14px] leading-relaxed" style={{ color: "#6B5A5A" }}>
            A clear, milestone-driven software development process from discovery and planning to development, launch, and ongoing support.
          </motion.p>
        </motion.div>

        {/* ── 4 Step cards with connectors ── */}
        <motion.div
          className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_CARDS}
        >

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              variants={cardReveal}
              className="relative flex flex-col"
              whileHover={{ y: -4, transition: { duration: 0.28, ease: EASE_SPRING } }}
            >

              {/* Dotted connector arrow — between cards (desktop only) */}
              {i < STEPS.length - 1 && (
                <div className="absolute top-[36px] left-full z-10 hidden lg:flex items-center" style={{ width: "calc(100% - 100%)", marginLeft: "-1px" }}>
                  {/* We use a pseudo approach via the gap */}
                </div>
              )}

              {/* Card */}
              <div
                className="flex flex-col gap-3 rounded-2xl border p-5 shadow-sm h-full transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ borderColor: "rgba(198,209,215,0.5)", backgroundColor: "rgba(255,255,255,0.92)" }}
              >
                {/* Top row: step number + icon */}
                <div className="flex items-center justify-between">
                  {/* Step number */}
                  <span
                    className="text-[13px] font-extrabold tracking-widest"
                    style={{ color: "#1FA0B1" }}
                  >
                    {step.number}
                  </span>

                  {/* Icon badge */}
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: step.bg, color: step.color }}
                  >
                    {step.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-bold" style={{ color: "#1a1a1a" }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className="flex-1 text-[12px] leading-relaxed" style={{ color: "#6B5A5A" }}>
                  {step.description}
                </p>

                {/* Time badge */}
                <div
                  className="mt-auto flex items-center gap-1.5 rounded-lg px-3 py-2"
                  style={{ backgroundColor: step.bg }}
                >
                  {/* Clock icon */}
                  <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke={step.color} strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[11px] font-semibold" style={{ color: step.color }}>
                    {step.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* ── Dotted connector lines overlay (desktop) ── */}
          <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute top-[36px] flex items-center gap-1"
                style={{ left: `calc(${(i + 1) * 25}% - 16px)`, transform: "translateX(-50%)" }}
              >
                {/* Dots */}
                {[0, 1, 2].map((d) => (
                  <div
                    key={d}
                    className="rounded-full"
                    style={{ width: 4, height: 4, backgroundColor: "rgba(198,209,215,0.9)", marginRight: 2 }}
                  />
                ))}
                {/* Arrow */}
                <svg className="h-3 w-3" fill="none" viewBox="0 0 12 12">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="#E8763A" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
