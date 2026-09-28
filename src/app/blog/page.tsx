import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { formatDate } from "@/lib/blog-utils";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";
import BlogCard from "@/components/blog/BlogCard";
import BlogFilters from "@/components/blog/BlogFilters";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogOgImage = ogImage({
  title: "Insights & Guides",
  category: "Blog",
  type: "blog",
});

export const metadata: Metadata = {
  title: "Web Development Blog — Insights & Guides",
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
    images: [blogOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${siteConfig.name}`,
    description:
      "Expert insights on web development, mobile apps, Flutter, SaaS, and software engineering from the NF Nexa Tech team.",
    images: [blogOgImage.url],
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
    <div className="min-h-screen text-[#1a1a1a] overflow-x-hidden" style={{ backgroundColor: "#FAF7F5" }}>
      <Navbar />

      {/* ── HERO HEADER ─────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-12 pt-36" style={{ background: "linear-gradient(135deg, #F0F7FF 0%, #FAF7F5 50%, #FFF4ED 100%)" }}>
        {/* Glow blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(31,160,177,0.12)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 right-0 h-[300px] w-[300px] rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(232,118,58,0.10)" }}
        />

        <div className="relative mx-auto w-[92%] max-w-6xl">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#1FA0B1]">
            Insights & Guides
          </p>
          <h1 className="mb-5 text-[42px] font-extrabold leading-tight text-[#1a1a1a] sm:text-[56px]">
            The NF Nexa Tech{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #1FA0B1 0%, #E8763A 100%)" }}
            >
              Blog
            </span>
          </h1>
          <p className="max-w-2xl text-[15px] leading-relaxed" style={{ color: "#6B5A5A" }}>
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
              <span className="h-px flex-1" style={{ backgroundColor: "rgba(31,160,177,0.2)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "#1FA0B1" }}>
                Featured
              </span>
              <span className="h-px flex-1" style={{ backgroundColor: "rgba(31,160,177,0.2)" }} />
            </div>
            <BlogCard post={featuredPost} featured />
          </section>
        )}

        {/* ── ALL POSTS: Search + Filter + Grid ───────────── */}
        <section>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px flex-1" style={{ backgroundColor: "rgba(31,160,177,0.2)" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "#1FA0B1" }}>
              All Articles ({allPosts.length})
            </span>
            <span className="h-px flex-1" style={{ backgroundColor: "rgba(31,160,177,0.2)" }} />
          </div>

          {/* BlogFilters is a client component — handles search + category */}
          <BlogFilters posts={remainingPosts} categories={categories} />
        </section>
      </div>

      <Footer />
    </div>
  );
}