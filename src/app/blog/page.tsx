import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { formatDate } from "@/lib/blog-utils";
import { siteConfig } from "@/config/site";
import BlogCard from "@/components/blog/BlogCard";
import BlogFilters from "@/components/blog/BlogFilters";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Insights & Guides",
  description:
    "Expert insights on web development, mobile apps, Flutter, SaaS, and software engineering from the NF Nexa Tech team.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description:
      "Expert insights on web development, mobile apps, Flutter, SaaS, and software engineering from the NF Nexa Tech team.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const featuredPost = allPosts.find((p) => p.featured) ?? allPosts[0];
  const remainingPosts = allPosts.filter(
    (p) => p.slug !== featuredPost?.slug
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      {/* ── HERO HEADER ─────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-12 pt-36">
        {/* Glow blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 right-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px]"
        />

        <div className="relative mx-auto w-[92%] max-w-6xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Insights & Guides
          </p>
          <h1 className="mb-5 text-5xl font-extrabold leading-tight text-white sm:text-6xl">
            The NF Nexa Tech{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400">
            Practical guides on web development, mobile apps, SaaS MVPs, and
            software engineering — written by developers who ship production
            software.
          </p>
        </div>
      </section>

      <div className="mx-auto w-[92%] max-w-6xl pb-32">
        {/* ── FEATURED POST ───────────────────────────────── */}
        {featuredPost && (
          <section className="mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px flex-1 bg-white/8" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Featured
              </span>
              <span className="h-px flex-1 bg-white/8" />
            </div>
            <BlogCard post={featuredPost} featured />
          </section>
        )}

        {/* ── ALL POSTS: Search + Filter + Grid ───────────── */}
        <section>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-white/8" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              All Articles ({allPosts.length})
            </span>
            <span className="h-px flex-1 bg-white/8" />
          </div>

          {/* BlogFilters is a client component — handles search + category */}
          <BlogFilters posts={remainingPosts} categories={categories} />
        </section>

        {/* ── NEWSLETTER / CTA STRIP ──────────────────────── */}
        <section className="mt-24 rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Work with us
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white">
            Have a project in mind?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base text-slate-400">
            We help startups and businesses build web apps, mobile apps, and
            SaaS products — from concept to production.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-3 text-sm font-bold text-white transition hover:opacity-90"
            >
              Start a Project
            </Link>
            <Link
              href="/#services"
              className="rounded-xl border border-white/15 px-7 py-3 text-sm font-bold text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
            >
              View Services
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}