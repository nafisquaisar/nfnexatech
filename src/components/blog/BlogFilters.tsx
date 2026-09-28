"use client";

import { useState, useMemo } from "react";
import BlogCard from "./BlogCard";
import type { BlogPost } from "@/types/blog";

interface BlogFiltersProps {
  posts: BlogPost[];
  categories: string[];
}

/**
 * Client component — handles search + category filtering.
 * Receives all posts from the server page and filters entirely in the browser.
 * This avoids any server round-trips and keeps the UX snappy.
 */
export default function BlogFilters({ posts, categories }: BlogFiltersProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return posts.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, activeCategory]);

  return (
    <div>
      {/* ── Search + Category row ── */}
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search input */}
        <div className="relative w-full max-w-sm">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ color: "#9B8B8B" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="search"
            placeholder="Search articles…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border py-2.5 pl-10 pr-4 text-sm placeholder:text-[#9B8B8B] focus:outline-none focus:ring-0 transition-colors"
            style={{ borderColor: "rgba(198,209,215,0.5)", backgroundColor: "rgba(255,255,255,0.8)", color: "#1a1a1a" }}
          />
        </div>

        {/* Category pills */}
        <div
          role="group"
          aria-label="Filter by category"
          className="flex flex-wrap gap-2"
        >
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all duration-200 ${
                activeCategory === cat
                  ? "border-[#1FA0B1]/60 bg-[#B5E5EB]/20 text-[#1FA0B1]"
                  : "bg-white text-[#6B5A5A] hover:border-[#1FA0B1]/30 hover:text-[#1FA0B1]"
              }`}
              style={{ borderColor: activeCategory === cat ? undefined : "rgba(198,209,215,0.5)" }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Results grid ── */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border py-20 text-center" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "rgba(255,255,255,0.6)" }}>
          <svg
            className="mb-4 h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ color: "#C6D1D7" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>
            No articles found
          </p>
          <p className="mt-1 text-sm" style={{ color: "#9B8B8B" }}>
            Try a different search term or category
          </p>
          <button
            onClick={() => {
              setQuery("");
              setActiveCategory("All");
            }}
            className="mt-5 rounded-full border px-4 py-2 text-xs transition-colors hover:text-[#1FA0B1] hover:border-[#1FA0B1]/40"
            style={{ borderColor: "rgba(198,209,215,0.5)", color: "#6B5A5A" }}
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Result count */}
      {query || activeCategory !== "All" ? (
        <p className="mt-6 text-center text-xs" style={{ color: "#9B8B8B" }}>
          {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
        </p>
      ) : null}
    </div>
  );
}
