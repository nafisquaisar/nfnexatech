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
 * Features:
 *   - Single round toggle button that morphs between chat ↔ cross icon
 *   - When closed: shows chat icon to open CTAs
 *   - When open: shows ✕ icon to close CTAs
 */
export default function FloatingCtas() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3 pointer-events-none transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      {/* ── CTAs (shown when open) ── */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-500 ${
          open
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-4 opacity-0 scale-95"
        }`}
      >
        {/* Start Your Project CTA */}
        <Link
          href="/start-project"
          onClick={() => trackEvent("cta_click", { label: "floating_start_project" })}
          className={`group flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/90 px-5 py-3 shadow-lg shadow-cyan-500/10 backdrop-blur-md transition-all duration-500 hover:border-cyan-400/60 hover:bg-slate-800 hover:shadow-cyan-500/20 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
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
        <div className={open ? "pointer-events-auto" : "pointer-events-none"}>
          <WhatsAppCta />
        </div>
      </div>

      {/* ── Toggle button: chat icon ↔ cross icon ── */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Hide contact options" : "Open contact options"}
        className={`pointer-events-auto relative flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-110 ${
          open
            ? "bg-slate-800/90 backdrop-blur-md shadow-slate-900/30 hover:bg-red-500/90 hover:shadow-red-500/25"
            : "bg-gradient-to-br from-cyan-500 to-emerald-500 shadow-cyan-500/25 hover:shadow-cyan-500/40"
        }`}
      >
        {/* Chat icon (visible when closed) */}
        <svg
          className={`absolute h-6 w-6 text-white transition-all duration-500 ${
            open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>

        {/* Cross icon (visible when open) */}
        <svg
          className={`absolute h-6 w-6 text-white transition-all duration-500 ${
            open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        {/* Pulse ring (only when closed, to attract attention) */}
        {!open && (
          <span
            aria-hidden
            className="absolute inset-0 animate-ping rounded-full bg-cyan-400 opacity-20"
          />
        )}
      </button>
    </div>
  );
}
