"use client";

import { motion } from "framer-motion";
import { sectionReveal, slideLeft, slideRight, VIEWPORT_ONCE } from "@/lib/motion";
import type { Variants } from "framer-motion";

/**
 * SectionReveal — wraps a homepage section with a Framer Motion
 * scroll-triggered reveal. Alternating directions give a premium
 * "breathing" feel as the user scrolls.
 */
export default function SectionReveal({
  children,
  direction = "up",
}: {
  children: React.ReactNode;
  direction?: "up" | "left" | "right";
}) {
  const variantMap: Record<string, Variants> = {
    up:    sectionReveal,
    left:  slideLeft,
    right: slideRight,
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_ONCE}
      variants={variantMap[direction]}
    >
      {children}
    </motion.div>
  );
}
