"use client";

import { useState, useEffect, useCallback } from "react";
import { trackEvent } from "@/lib/analytics";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/nfnexatech/30min";

/**
 * CalendlyModal — sticky "Book Free Call" CTA + full-screen iframe modal.
 *
 * Features:
 * - Sticky button appears after 400px scroll
 * - ESC key closes modal
 * - Body scroll locked while modal open
 * - Tracks opens/closes via GA4
 * - Mobile-friendly (100dvh modal)
 */
export default function CalendlyModal() {
  const [showButton, setShowButton] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  /* Show sticky button after scroll */
  useEffect(() => {
    const onScroll = () => setShowButton(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when modal open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* ESC to close */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  /* Listen for global open event from CalendlyButton */
  useEffect(() => {
    const handler = () => {
      setIsOpen(true);
      trackEvent("calendly_open", { label: "inline_button" });
    };
    window.addEventListener("open-calendly", handler);
    return () => window.removeEventListener("open-calendly", handler);
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
    trackEvent("calendly_open", { label: "sticky_button" });
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    trackEvent("calendly_close");
  }, []);

  return (
    <>
      {/* ── Sticky CTA button ── */}
      <div
        className={`fixed bottom-24 left-1/2 z-40 -translate-x-1/2 transition-all duration-500 md:bottom-8 md:left-auto md:right-8 md:translate-x-0 ${
          showButton
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={openModal}
          aria-label="Book a free consultation call"
          className="group flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/90 px-5 py-3 shadow-lg shadow-cyan-500/10 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-slate-800 hover:shadow-cyan-500/20"
        >
          {/* Calendar icon */}
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
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm font-semibold text-white">
            Book Free Call
          </span>
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"
          />
        </button>
      </div>

      {/* ── Modal backdrop ── */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a free consultation"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="relative flex h-[90dvh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl mx-4">
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  Book a Free 30-Min Consultation
                </p>
                <p className="text-xs text-slate-500">
                  Pick a time that works for you — no commitment required
                </p>
              </div>
              <button
                onClick={closeModal}
                aria-label="Close booking modal"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Calendly iframe */}
            <iframe
              src={`${CALENDLY_URL}?embed_domain=nfnexatech.com&embed_type=Inline&hide_gdpr_banner=1&primary_color=22d3ee`}
              className="flex-1 w-full border-0"
              title="Book a free consultation with NF Nexa Tech"
              loading="lazy"
              allow="fullscreen"
            />
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Inline Calendly button — use anywhere to trigger the modal.
 * Fires the same open event.
 */
export function CalendlyButton({
  label = "Book Free Consultation",
  className = "",
  variant = "primary",
}: {
  label?: string;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
}) {
  const [, setOpen] = useState(false);

  const base =
    "inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all duration-200";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:opacity-90 hover:-translate-y-0.5",
    outline:
      "border border-cyan-400/40 text-cyan-300 hover:border-cyan-400/70 hover:bg-cyan-400/5",
    ghost: "text-cyan-400 hover:text-cyan-300 underline underline-offset-2",
  };

  // Trigger the global CalendlyModal by emitting a custom event
  const handleClick = () => {
    trackEvent("cta_click", { label: "calendly_inline_button" });
    window.dispatchEvent(new CustomEvent("open-calendly"));
  };

  return (
    <button onClick={handleClick} className={`${base} ${variants[variant]} ${className}`}>
      <svg
        aria-hidden="true"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      {label}
    </button>
  );
}
