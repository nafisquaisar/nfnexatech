"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import WhatsAppCta from "@/components/WhatsAppCta";
import { trackEvent } from "@/lib/analytics";

/**
 * Shared floating CTA container.
 *
 * Renders "Start Your Project" link + WhatsApp button in a single
 * fixed-position flex column — stacked vertically with consistent spacing.
 *
 * Layout (bottom-right corner):
 *   ┌───────────────────┐
 *   │ Start Your Project│  ← Link to /start-project (top)
 *   └───────────────────┘
 *         gap-4
 *   ┌───────────────────┐
 *   │ 💬 Chat with us   │  ← WhatsApp (bottom)
 *   └───────────────────┘
 *         ↕ bottom-6
 */
export default function FloatingCtas() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4">
      {/* Start Your Project CTA */}
      <Link
        href="/start-project"
        onClick={() => trackEvent("cta_click", { label: "floating_start_project" })}
        className={`group flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/90 px-5 py-3 shadow-lg shadow-cyan-500/10 backdrop-blur-md transition-all duration-500 hover:border-cyan-400/60 hover:bg-slate-800 hover:shadow-cyan-500/20 ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        {/* Rocket icon */}
        <svg
          aria-hidden="true"
          className="h-4 w-4 flex-shrink-0 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m0 0a6 6 0 01-7.38-5.84h4.8"
          />
        </svg>
        <span className="text-sm font-semibold text-white">
          Start Your Project
        </span>
        <span
          aria-hidden
          className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"
        />
      </Link>

      {/* WhatsApp CTA */}
      <WhatsAppCta />
    </div>
  );
}
