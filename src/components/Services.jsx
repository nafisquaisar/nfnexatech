"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, cardReveal, VIEWPORT_CARDS, EASE_SPRING, EASE_OUT_EXPO } from "@/lib/motion";

const SERVICES = [
  {
    slug: "web-development",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="14" rx="2" /><line x1="3" y1="7" x2="21" y2="7" /><line x1="8" y1="3" x2="8" y2="7" />
      </svg>
    ),
    title: "Web Development",
    desc: "Responsive websites and web applications built with modern technologies for businesses, startups, and growing brands.",
    color: "#1FA0B1",
    bg: "rgba(181,229,235,0.4)",
  },
  {
    slug: "android-app-development",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <rect x="7" y="2" width="10" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeWidth={2.5} />
      </svg>
    ),
    title: "Android App Development",
    desc: "Native Android applications built with modern Android technologies for reliable performance and great user experiences.",
    color: "#E8763A",
    bg: "rgba(249,225,205,0.55)",
  },
  {
    slug: "flutter-app-development",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 12l4 4 6-6 6 6 4-4L12 2z" />
      </svg>
    ),
    title: "Flutter App Development",
    desc: "Cross-platform mobile applications for Android and iOS from a shared, maintainable codebase.",
    color: "#1FA0B1",
    bg: "rgba(181,229,235,0.4)",
  },
  {
    slug: "ui-ux-design",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 1 1 3.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: "UI/UX Design",
    desc: "User-focused interfaces and experiences designed to make websites and applications clear, intuitive, and engaging.",
    color: "#E8763A",
    bg: "rgba(249,225,205,0.55)",
  },
  {
    slug: "backend-api-development",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Backend & API Development",
    desc: "Scalable backend systems, REST APIs, databases, authentication, and integrations for modern applications.",
    color: "#1FA0B1",
    bg: "rgba(181,229,235,0.4)",
  },
  {
    slug: "saas-mvp-development",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 0 0 4 4h9a5 5 0 1 0-.1-9.999 5.002 5.002 0 0 0-9.78 2.096A4.001 4.001 0 0 0 3 15z" />
      </svg>
    ),
    title: "SaaS & MVP Development",
    desc: "From idea to launch, we build scalable SaaS products and MVPs that help businesses validate and grow their products.",
    color: "#7C5CBF",
    bg: "rgba(196,181,253,0.35)",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-16"
      style={{ backgroundColor: "#FAF7F5" }}
    >
      {/* White overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundColor: "rgba(250,247,245,0.82)", zIndex: 1 }} />

      <div className="relative mx-auto w-[92%] max-w-6xl" style={{ zIndex: 2 }}>

        {/* Heading */}
        <div className="mb-10">
          <div className="mb-3 inline-flex items-center gap-3">
            <span className="h-px w-10" style={{ backgroundColor: "rgba(31,160,177,0.5)" }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#1FA0B1" }}>Services</span>
          </div>
          <h2 className="text-[36px] font-extrabold tracking-tight sm:text-[42px]" style={{ color: "#1a1a1a" }}>
            Our Software Development <span style={{ color: "#E8763A" }}>Services</span>
          </h2>
          <p className="mt-3 max-w-xl text-[14px] leading-relaxed" style={{ color: "#6B5A5A" }}>
            We build websites, mobile applications, SaaS products, and custom software solutions for businesses in Delhi and across India.
          </p>
        </div>

        {/* 3-column grid with stagger reveal */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_CARDS}
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.slug}
              variants={cardReveal}
              whileHover={{ y: -5, transition: { duration: 0.28, ease: EASE_SPRING } }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="group flex items-start gap-4 rounded-2xl border p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
                style={{
                  borderColor: "rgba(198,209,215,0.5)",
                  backgroundColor: "rgba(255,255,255,0.92)",
                }}
              >
                <motion.span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: s.bg, color: s.color }}
                  whileHover={{ scale: 1.12, rotate: 3, transition: { duration: 0.28, ease: EASE_SPRING } }}
                >
                  {s.icon}
                </motion.span>
                <div className="flex-1 min-w-0">
                  <div className="text-[15px] font-bold leading-tight" style={{ color: "#1a1a1a" }}>
                    {s.title}
                  </div>
                  <div className="mt-1 text-[13px] leading-snug" style={{ color: "#6B5A5A" }}>
                    {s.desc}
                  </div>
                  <div className="mt-2.5 inline-flex items-center gap-1 text-[12px] font-semibold" style={{ color: s.color }}>
                    Learn More
                    <motion.svg
                      className="w-3.5 h-3.5"
                      fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                      whileHover={{ x: 4, transition: { duration: 0.22 } }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </motion.svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CARDS}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.2 }}
          whileHover={{ scale: 1.03, y: -2 }}
        >
          <Link
            href="/services"
            id="services-view-all"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[14px] font-bold text-white shadow-md"
            style={{ backgroundColor: "#1FA0B1", boxShadow: "0 4px 14px rgba(31,160,177,0.35)" }}
          >
            View All Services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
