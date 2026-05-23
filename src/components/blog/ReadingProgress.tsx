"use client";

import { useEffect, useState } from "react";

/**
 * Thin progress bar fixed to the top of the viewport.
 * Tracks scroll position relative to total document height.
 * Client-only — scroll events are not available on the server.
 */
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrollTop = window.scrollY || el.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[2px]"
    >
      <div
        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-[width] duration-75 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
