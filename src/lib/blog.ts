/**
 * Blog library — filesystem-based MDX post management.
 *
 * All functions are pure server-side utilities (Node.js fs).
 * Never import this in a client component.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost, BlogPostWithContent, TocItem } from "@/types/blog";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

/* ── Helpers ──────────────────────────────────────────────── */

function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * Extract h2 / h3 headings from raw MDX for the Table of Contents.
 * IDs are generated to match what rehype-slug produces.
 */
export function extractToc(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const items: TocItem[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length; // 2 or 3
    const rawText = match[2].trim();

    // Strip inline markdown (bold, italic, code) for clean TOC label
    const text = rawText
      .replace(/\*\*(.+?)\*\*/g, "$1")
      .replace(/\*(.+?)\*/g, "$1")
      .replace(/`(.+?)`/g, "$1")
      .replace(/\[(.+?)\]\(.+?\)/g, "$1");

    // Match rehype-slug: lowercase, keep alphanumerics + hyphens, spaces → hyphens
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    if (id) items.push({ id, text, level });
  }

  return items;
}

/* ── Post parsing ─────────────────────────────────────────── */

function parsePostMeta(slug: string): BlogPost | null {
  try {
    const filepath = path.join(BLOG_DIR, `${slug}.mdx`);
    const raw = fs.readFileSync(filepath, "utf-8");
    const { data, content } = matter(raw);

    if (!data.title) return null;

    return {
      slug,
      title: data.title as string,
      description: (data.description as string) || "",
      date: (data.date as string) || new Date().toISOString().split("T")[0],
      updatedDate: data.updatedDate as string | undefined,
      author: (data.author as BlogPost["author"]) || {
        name: "Nafis Quaisar",
        role: "Founder, NF Nexa Tech",
      },
      category: (data.category as string) || "General",
      tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
      featured: Boolean(data.featured),
      draft: Boolean(data.draft),
      readingTime: calculateReadingTime(content),
      wordCount: content.trim().split(/\s+/).length,
      image: data.image as string | undefined,
    };
  } catch {
    return null;
  }
}

/* ── Public API ───────────────────────────────────────────── */

/** Returns all published posts sorted newest-first. */
export function getAllPosts(includeDrafts = false): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => parsePostMeta(f.replace(".mdx", "")))
    .filter((p): p is BlogPost => p !== null)
    .filter((p) => includeDrafts || !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** Returns a single post with full MDX content + TOC, or null. */
export function getPostBySlug(slug: string): BlogPostWithContent | null {
  try {
    const filepath = path.join(BLOG_DIR, `${slug}.mdx`);
    const raw = fs.readFileSync(filepath, "utf-8");
    const { data, content } = matter(raw);

    if (!data.title) return null;

    return {
      slug,
      title: data.title as string,
      description: (data.description as string) || "",
      date: (data.date as string) || new Date().toISOString().split("T")[0],
      updatedDate: data.updatedDate as string | undefined,
      author: (data.author as BlogPost["author"]) || {
        name: "Nafis Quaisar",
        role: "Founder, NF Nexa Tech",
      },
      category: (data.category as string) || "General",
      tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
      featured: Boolean(data.featured),
      draft: Boolean(data.draft),
      readingTime: calculateReadingTime(content),
      wordCount: content.trim().split(/\s+/).length,
      image: data.image as string | undefined,
      content,
      toc: extractToc(content),
    };
  } catch {
    return null;
  }
}

/** Returns up to `limit` related posts based on category/tag overlap. */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];

  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      score:
        (p.category === current.category ? 3 : 0) +
        p.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime())
    .slice(0, limit)
    .map(({ post }) => post);
}

export function getAllCategories(): string[] {
  return [...new Set(getAllPosts().map((p) => p.category))].sort();
}

export function getAllTags(): string[] {
  return [...new Set(getAllPosts().flatMap((p) => p.tags))].sort();
}
