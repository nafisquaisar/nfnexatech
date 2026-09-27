"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { EASE_OUT_EXPO } from "@/lib/motion";

const variants = {
  hidden: { opacity: 0, y: 20, scale: 0.99 },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.99,
    transition: { duration: 0.22, ease: "easeIn" as const },
  },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={variants}
        initial={isFirstRender.current ? false : "hidden"}
        animate="enter"
        exit="exit"
        className="flex min-h-full flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
