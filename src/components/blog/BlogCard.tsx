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
    "bg-[#B5E5EB]/20 text-[#1FA0B1] border-[#1FA0B1]/25",
  Business: "bg-[#F9E1CD]/30 text-[#E8763A] border-[#E8763A]/25",
  Startup: "bg-emerald-50 text-emerald-700 border-emerald-200",
  SaaS: "bg-blue-50 text-blue-700 border-blue-200",
  Design: "bg-pink-50 text-pink-700 border-pink-200",
  General: "bg-[#F5F5F5] text-[#6B5A5A] border-[#E8E0D8]/60",
};

function categoryBadge(category: string) {
  const cls =
    CATEGORY_COLORS[category] ??
    "bg-[#B5E5EB]/15 text-[#1FA0B1] border-[#1FA0B1]/20";
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
    "Mobile Development": "from-[#B5E5EB]/30 to-[#F0F7FF]",
    Business: "from-[#F9E1CD]/30 to-[#FFF4ED]",
    Startup: "from-emerald-50 to-teal-50",
    SaaS: "from-blue-50 to-indigo-50",
    Design: "from-pink-50 to-rose-50",
  };
  const grad = gradients[category] ?? "from-[#FAF7F5] to-[#F5F0EB]";
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
      className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-lg ${
        featured ? "md:flex-row" : ""
      }`}
      style={{ borderColor: "rgba(198,209,215,0.45)", backgroundColor: "rgba(255,255,255,0.92)" }}
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
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        {/* Category + reading time */}
        <div className="flex items-center gap-3">
          {categoryBadge(post.category)}
          <span className="text-xs" style={{ color: "#9B8B8B" }}>
            {post.readingTime} min read
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-bold leading-snug text-[#1a1a1a] transition-colors group-hover:text-[#1FA0B1] ${
            featured ? "text-xl sm:text-2xl" : "text-lg"
          }`}
        >
          {post.title}
        </h3>

        {/* Description */}
        <p className="line-clamp-2 flex-1 text-sm leading-6" style={{ color: "#6B5A5A" }}>
          {post.description}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md border px-2 py-0.5 text-[11px]"
                style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "rgba(250,247,245,0.8)", color: "#9B8B8B" }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer: Author + Date */}
        <div className="mt-auto flex items-center justify-between border-t pt-4" style={{ borderColor: "rgba(198,209,215,0.35)" }}>
          <div className="flex items-center gap-2">
            {/* Author avatar — initials fallback */}
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ background: "linear-gradient(135deg, #1FA0B1 0%, #E8763A 100%)" }}>
              {post.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div>
              <p className="text-xs font-medium text-[#1a1a1a]">
                {post.author.name}
              </p>
            </div>
          </div>
          <time
            dateTime={post.date}
            className="text-xs" style={{ color: "#9B8B8B" }}
          >
            {formatDate(post.date)}
          </time>
        </div>
      </div>
    </Link>
  );
}
