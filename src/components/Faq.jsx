"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/content";

/** Single FAQ accordion item */
function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/8 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-semibold text-slate-100 sm:text-lg">
          {faq.question}
        </span>
        <span
          aria-hidden
          className={`mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            open
              ? "border-cyan-400/50 bg-cyan-400/10 rotate-45"
              : "border-white/15 bg-white/5"
          }`}
        >
          <svg
            className="h-3 w-3 text-slate-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-base leading-7 text-slate-400">{faq.answer}</p>
      </div>
    </div>
  );
}


export default function Faq() {
  return (
    <section id="faq" className="bg-slate-950 py-24">
      <div className="mx-auto w-[92%] max-w-4xl">
        <SectionTitle
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know before starting your project with us."
        />

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 sm:px-8">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* CTA below FAQ */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Can&apos;t find your answer?{" "}
          <a
            href="#contact"
            className="font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Contact us directly →
          </a>
        </p>
      </div>
    </section>
  );
}
