"use client";

import { useState } from "react";
import Link from "next/link";
import { faqs } from "@/data/content";

function FaqItem({ faq, index, open, toggle }) {
  const num = String(index + 1).padStart(2, "0");
  const isOpen = open === index;

  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen ? "shadow-sm" : ""}`}
      style={{
        borderColor: isOpen ? "rgba(31,160,177,0.35)" : "rgba(198,209,215,0.45)",
        backgroundColor: "rgba(255,255,255,0.95)",
      }}
    >
      <button
        onClick={() => toggle(isOpen ? -1 : index)}
        aria-expanded={isOpen}
        id={`faq-q-${index}`}
        className="flex w-full items-center gap-4 px-5 py-4 text-left"
      >
        {/* Number badge */}
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[12px] font-bold"
          style={{
            backgroundColor: isOpen ? "rgba(31,160,177,0.15)" : "rgba(249,225,205,0.6)",
            color: isOpen ? "#1FA0B1" : "#E8763A",
          }}
        >
          {num}
        </span>

        {/* Question */}
        <span className="flex-1 text-[13px] font-semibold" style={{ color: "#1a1a1a" }}>
          {faq.question}
        </span>

        {/* Chevron */}
        <svg
          className="h-4 w-4 shrink-0 transition-transform duration-300"
          style={{
            color: isOpen ? "#1FA0B1" : "#9B8B8B",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Answer */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? 300 : 0, opacity: isOpen ? 1 : 0 }}
      >
        <p
          className="px-5 pb-5 pl-[68px] text-[12px] leading-relaxed"
          style={{ color: "#6B5A5A" }}
        >
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0); // first one open by default

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-14"
      style={{ backgroundColor: "#FAF7F5" }}
    >
      {/* White overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundColor: "rgba(250,247,245,0.82)", zIndex: 1 }} />

      {/* Blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>
        <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full blur-[80px]" style={{ backgroundColor: "rgba(181,229,235,0.3)" }} />
        <div className="absolute bottom-0 -left-10 h-48 w-48 rounded-full blur-[70px]" style={{ backgroundColor: "rgba(249,225,205,0.4)" }} />
      </div>

      <div className="relative mx-auto w-[92%] max-w-3xl" style={{ zIndex: 2 }}>

        {/* Heading */}
        <div className="mb-8">
          <div className="mb-3 inline-flex items-center gap-3">
            <span className="h-px w-10" style={{ backgroundColor: "rgba(31,160,177,0.5)" }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#1FA0B1" }}>FAQ</span>
          </div>
          <h2 className="text-[36px] font-extrabold tracking-tight sm:text-[42px]" style={{ color: "#1a1a1a" }}>
            Frequently Asked{" "}
            <span style={{ color: "#1FA0B1" }}>Questions</span>
          </h2>
          <p className="mt-3 max-w-xl text-[14px] leading-relaxed" style={{ color: "#6B5A5A" }}>
            Everything you need to know before starting your project with us.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="flex flex-col gap-2.5">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              index={i}
              open={open}
              toggle={setOpen}
            />
          ))}
        </div>

        {/* Bottom CTA card */}
        <div
          className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border px-6 py-4"
          style={{ borderColor: "rgba(198,209,215,0.5)", backgroundColor: "rgba(255,255,255,0.92)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: "rgba(181,229,235,0.4)" }}
            >
              <svg className="h-5 w-5" fill="none" stroke="#1FA0B1" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <div className="text-[13px] font-bold" style={{ color: "#1a1a1a" }}>Still have questions?</div>
              <div className="text-[11px]" style={{ color: "#6B5A5A" }}>Can&apos;t find your answer? Our team is here to help.</div>
            </div>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-2.5 text-[13px] font-bold transition-all hover:scale-[1.03]"
            style={{ borderColor: "#E8763A", color: "#E8763A", backgroundColor: "transparent" }}
          >
            Contact Us →
          </Link>
        </div>

      </div>
    </section>
  );
}
