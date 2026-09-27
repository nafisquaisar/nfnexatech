/**
 * Shared Framer Motion variants — NF Nexa Tech design system.
 * Compatible with Framer Motion v12 + React 19.
 */

import type { Variants } from "framer-motion";

/* ── Easing presets (plain arrays for FM v12 compatibility) ── */
export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT: [number, number, number, number]   = [0.45, 0, 0.55, 1];
export const EASE_SPRING: [number, number, number, number]   = [0.22, 1, 0.36, 1];

/* ── Fade-up reveal (general purpose) ──────────────────────── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.98 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.75, ease: EASE_OUT_EXPO },
  },
};

/* ── Heading reveal ─────────────────────────────────────────── */
export const headingReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

/* ── Subtle fade (paragraphs / subtitles) ───────────────────── */
export const softFade: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: EASE_SPRING },
  },
};

/* ── Slide in from left ─────────────────────────────────────── */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60, scale: 0.97 },
  show: {
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

/* ── Slide in from right ────────────────────────────────────── */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 60, scale: 0.97 },
  show: {
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

/* ── Stagger container ──────────────────────────────────────── */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.10,
      delayChildren: 0.05,
    },
  },
};

/* ── Card reveal (for grid cards) ──────────────────────────── */
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.65, ease: EASE_OUT_EXPO },
  },
};

/* ── Section reveal — whole-section wrapper ─────────────────── */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.985 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.85, ease: EASE_OUT_EXPO },
  },
};

/* ── Viewport config ────────────────────────────────────────── */
export const VIEWPORT_ONCE = { once: true, amount: 0.12 };
export const VIEWPORT_CARDS = { once: true, amount: 0.08 };
