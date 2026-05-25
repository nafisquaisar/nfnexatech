"use client";

import { useState, useEffect, useCallback } from "react";
import type { TocItem } from "@/types/blog";

interface TableOfContentsProps {
  items: TocItem[];
}

/**
 * Sticky table of contents for the blog sidebar.
 * Highlights the currently visible section using IntersectionObserver.
 * Client-only — IntersectionObserver is a browser API.
 */
export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  /* ── Intersection observer to track active heading ── */
  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the first entry that is visible
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      {
        rootMargin: "-80px 0px -70% 0px", // trigger when heading enters top 30% of viewport
        threshold: 0,
      }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveId(id);
      }
    },
    []
  );

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="overflow-y-auto rounded-xl border border-white/10 bg-white/[0.02] p-5"
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        On this page
      </p>

      <ul className="space-y-1.5">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const isH3 = item.level === 3;

          return (
            <li key={item.id} className={isH3 ? "ml-3" : ""}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`block rounded-md px-3 py-1.5 text-xs leading-5 transition-all duration-200 ${
                  isActive
                    ? "border-l-2 border-cyan-400 bg-cyan-400/10 font-semibold text-cyan-300"
                    : "border-l-2 border-transparent text-slate-500 hover:border-white/20 hover:text-slate-300"
                }`}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
