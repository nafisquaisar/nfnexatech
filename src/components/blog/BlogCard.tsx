import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/blog-utils";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

/** Category badge colours — deterministic from category name */
const CATEGORY_COLORS: Record<string, string> = {
  "Mobile Development":
    "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
  Business: "bg-purple-400/10 text-purple-300 border-purple-400/20",
  Startup: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
  SaaS: "bg-blue-400/10 text-blue-300 border-blue-400/20",
  Design: "bg-pink-400/10 text-pink-300 border-pink-400/20",
  General: "bg-slate-400/10 text-slate-300 border-slate-400/20",
};

function categoryBadge(category: string) {
  const cls =
    CATEGORY_COLORS[category] ??
    "bg-white/5 text-slate-300 border-white/10";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-widest ${cls}`}
    >
      {category}
    </span>
  );
}

/** Gradient placeholder when no image is provided */
function ImagePlaceholder({ category }: { category: string }) {
  const gradients: Record<string, string> = {
    "Mobile Development": "from-cyan-900/40 to-blue-900/40",
    Business: "from-purple-900/40 to-slate-900/40",
    Startup: "from-emerald-900/40 to-teal-900/40",
    SaaS: "from-blue-900/40 to-indigo-900/40",
    Design: "from-pink-900/40 to-rose-900/40",
  };
  const grad = gradients[category] ?? "from-slate-800/60 to-slate-900/60";
  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${grad}`}
    >
      <svg
        className="h-10 w-10 text-white/10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    </div>
  );
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-cyan-500/5 ${
        featured ? "md:flex-row" : ""
      }`}
    >
      {/* Thumbnail */}
      <div
        className={`relative overflow-hidden ${
          featured
            ? "h-52 w-full md:h-auto md:w-2/5 md:flex-shrink-0"
            : "h-48 w-full"
        }`}
      >
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 40vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ImagePlaceholder category={post.category} />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        {/* Category + reading time */}
        <div className="flex items-center gap-3">
          {categoryBadge(post.category)}
          <span className="text-xs text-slate-500">
            {post.readingTime} min read
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-bold leading-snug text-white transition-colors group-hover:text-cyan-200 ${
            featured ? "text-xl sm:text-2xl" : "text-lg"
          }`}
        >
          {post.title}
        </h3>

        {/* Description */}
        <p className="line-clamp-2 flex-1 text-sm leading-6 text-slate-400">
          {post.description}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-0.5 text-[11px] text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer: Author + Date */}
        <div className="mt-auto flex items-center justify-between border-t border-white/8 pt-4">
          <div className="flex items-center gap-2">
            {/* Author avatar — initials fallback */}
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-[10px] font-bold text-white">
              {post.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div>
              <p className="text-xs font-medium text-slate-300">
                {post.author.name}
              </p>
            </div>
          </div>
          <time
            dateTime={post.date}
            className="text-xs text-slate-500"
          >
            {formatDate(post.date)}
          </time>
        </div>
      </div>
    </Link>
  );
}
