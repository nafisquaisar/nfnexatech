"use client";

import { useState, useEffect, useCallback } from "react";
import type { TocItem } from "@/types/blog";

interface TableOfContentsProps {
  items: TocItem[];
}

/* Group flat items into H2 sections, each carrying their H3 children */
interface TocSection {
  h2: TocItem;
  children: TocItem[];
}

function groupItems(items: TocItem[]): TocSection[] {
  const sections: TocSection[] = [];
  let current: TocSection | null = null;

  for (const item of items) {
    if (item.level === 2) {
      current = { h2: item, children: [] };
      sections.push(current);
    } else if (item.level === 3 && current) {
      current.children.push(item);
    }
  }
  return sections;
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId]         = useState<string>("");
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const sections = groupItems(items);

  /* ── Intersection observer ── */
  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (!visible) return;
        const id = visible.target.id;
        setActiveId(id);

        /* Auto-expand the parent section of the active heading */
        const parentSection = sections.find(
          (s) => s.h2.id === id || s.children.some((c) => c.id === id)
        );
        if (parentSection) {
          setOpenSections((prev) => new Set([...prev, parentSection.h2.id]));
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    },
    []
  );

  const toggleSection = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  if (sections.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="flex min-h-0 flex-1 flex-col rounded-xl"
      style={{
        border: "1px solid rgba(198,209,215,0.45)",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
      }}
    >
      {/* Header — never scrolls */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: "1px solid rgba(198,209,215,0.35)" }}
      >
        {/* List icon */}
        <svg
          className="h-3.5 w-3.5 flex-shrink-0"
          style={{ color: "#9B8B8B" }}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          viewBox="0 0 24 24"
        >
          <line x1="8"  y1="6"  x2="21" y2="6"  />
          <line x1="8"  y1="12" x2="21" y2="12" />
          <line x1="8"  y1="18" x2="21" y2="18" />
          <line x1="3"  y1="6"  x2="3.01" y2="6"  />
          <line x1="3"  y1="12" x2="3.01" y2="12" />
          <line x1="3"  y1="18" x2="3.01" y2="18" />
        </svg>
        <span
          className="text-[10px] font-bold uppercase tracking-[0.2em]"
          style={{ color: "#9B8B8B" }}
        >
          On this page
        </span>
      </div>

      {/* Sections — scroll internally when list is long */}
      <ul className="overflow-y-auto py-2" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(198,209,215,0.6) transparent" }}>
        {sections.map((section) => {
          const isOpen      = openSections.has(section.h2.id);
          const isH2Active  = activeId === section.h2.id;
          const hasChildren = section.children.length > 0;
          const isChildActive = section.children.some((c) => c.id === activeId);

          return (
            <li key={section.h2.id}>
              {/* H2 row */}
              <div className="flex items-center">
                <a
                  href={`#${section.h2.id}`}
                  onClick={(e) => scrollTo(e, section.h2.id)}
                  className="flex-1 truncate px-4 py-1.5 text-[12px] transition-colors duration-150"
                  style={{
                    color: isH2Active || isChildActive ? "#1FA0B1" : "#374151",
                    fontWeight: isH2Active || isChildActive ? 600 : 400,
                  }}
                  title={section.h2.text}
                >
                  {section.h2.text}
                </a>

                {/* Collapse toggle — only if has children */}
                {hasChildren && (
                  <button
                    aria-label={isOpen ? "Collapse section" : "Expand section"}
                    onClick={() => toggleSection(section.h2.id)}
                    className="mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded transition-colors hover:bg-gray-100"
                  >
                    <svg
                      className="h-3 w-3 transition-transform duration-200"
                      style={{
                        color: "#9B8B8B",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                )}
              </div>

              {/* H3 children — collapsible */}
              {hasChildren && isOpen && (
                <ul className="mb-1">
                  {section.children.map((child) => {
                    const isChildItemActive = activeId === child.id;
                    return (
                      <li key={child.id}>
                        <a
                          href={`#${child.id}`}
                          onClick={(e) => scrollTo(e, child.id)}
                          className="block truncate py-1 pl-8 pr-4 text-[11px] transition-colors duration-150"
                          style={{
                            color: isChildItemActive ? "#1FA0B1" : "#9B8B8B",
                            fontWeight: isChildItemActive ? 600 : 400,
                            borderLeft: isChildItemActive
                              ? "2px solid #1FA0B1"
                              : "2px solid transparent",
                            paddingLeft: isChildItemActive ? "28px" : "30px",
                          }}
                          title={child.text}
                        >
                          {child.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
