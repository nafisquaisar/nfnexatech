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
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-4 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none focus:ring-0 transition-colors"
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
                  ? "border-cyan-400/60 bg-cyan-400/10 text-cyan-300"
                  : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-slate-200"
              }`}
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
        <div className="flex flex-col items-center justify-center rounded-2xl border border-white/8 bg-white/[0.02] py-20 text-center">
          <svg
            aria-hidden="true"
            className="mb-4 h-12 w-12 text-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-base font-medium text-slate-400">
            No articles found
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Try a different search term or category
          </p>
          <button
            onClick={() => {
              setQuery("");
              setActiveCategory("All");
            }}
            className="mt-5 rounded-lg border border-white/10 px-4 py-2 text-xs text-slate-400 hover:text-white transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Result count */}
      {query || activeCategory !== "All" ? (
        <p className="mt-6 text-center text-xs text-slate-600">
          {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
        </p>
      ) : null}
    </div>
  );
}
