import { notFound } from "next/navigation";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { formatDate } from "@/lib/blog-utils";
import { ogImage } from "@/lib/og-image";
import { siteConfig } from "@/config/site";
import { mdxComponents } from "@/components/blog/mdxComponents";
import ReadingProgress from "@/components/blog/ReadingProgress";
import TableOfContents from "@/components/blog/TableOfContents";
import ShareButtons from "@/components/blog/ShareButtons";
import BlogCard from "@/components/blog/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Static params for SSG ──────────────────────────────────── */
export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

/* ── Dynamic metadata per post ──────────────────────────────── */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  const postUrl = `${siteConfig.url}/blog/${slug}`;
  const image = ogImage({ title: post.title, category: post.category, type: "blog" });

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: postUrl },
    openGraph: {
      title: post.title,
      description: post.description,
      url: postUrl,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedDate ?? post.date,
      authors: [post.author.name],
      tags: post.tags,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [image.url],
    },
  };
}

/* ── Page ───────────────────────────────────────────────────── */
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.draft) notFound();

  const postUrl = `${siteConfig.url}/blog/${slug}`;
  const related = getRelatedPosts(slug, 3);

  /* ── Compile MDX ── */
  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypePrettyCode, { theme: "github-dark" }],
        ],
      },
    },
  });

  /* ── Article JSON-LD schema ── */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${postUrl}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedDate ?? post.date,
    wordCount: post.wordCount,
    timeRequired: `PT${post.readingTime}M`,
    inLanguage: "en-IN",
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      url: siteConfig.url,
      worksFor: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
        width: 512,
        height: 512,
      },
    },
    image: post.image
      ? { "@type": "ImageObject", url: `${siteConfig.url}${post.image}` }
      : { "@type": "ImageObject", url: `${siteConfig.url}/api/og?title=${encodeURIComponent(post.title)}&category=${encodeURIComponent(post.category)}&type=blog` },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
  };

  /* ── Breadcrumb JSON-LD ── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteConfig.url}/blog`,
      },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Reading progress bar (fixed, above Navbar) */}
      <ReadingProgress />

      <Navbar />

      {/* ── ARTICLE HERO ───────────────────────────────────── */}
      <header className="relative overflow-hidden pb-10 pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-[120px]"
        />

        <div className="relative mx-auto w-[92%] max-w-4xl">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs text-slate-500"
          >
            <Link href="/" className="transition hover:text-slate-300">
              Home
            </Link>
            <span aria-hidden>›</span>
            <Link href="/blog" className="transition hover:text-slate-300">
              Blog
            </Link>
            <span aria-hidden>›</span>
            <span className="line-clamp-1 text-slate-400">{post.title}</span>
          </nav>

          {/* Category badge */}
          <span className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-300">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="mb-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg leading-relaxed text-slate-400">
            {post.description}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-5 border-y border-white/8 py-4 text-sm text-slate-400">
            {/* Author */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-xs font-bold text-white">
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-200">
                  {post.author.name}
                </p>
                <p className="text-xs text-slate-500">{post.author.role}</p>
              </div>
            </div>

            <span className="h-4 w-px bg-white/15" aria-hidden />

            <time dateTime={post.date} className="text-slate-400">
              {formatDate(post.date)}
            </time>

            <span className="h-4 w-px bg-white/15" aria-hidden />

            <span>{post.readingTime} min read</span>

            <span className="h-4 w-px bg-white/15 hidden sm:block" aria-hidden />

            <span className="hidden sm:block">
              {post.wordCount.toLocaleString()} words
            </span>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/8 bg-white/[0.03] px-3 py-1 text-xs text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ── MAIN CONTENT + SIDEBAR ─────────────────────────── */}
      <div className="mx-auto w-[92%] max-w-6xl pb-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          {/* ── Article body ── */}
          <article className="min-w-0">
            {content}

            {/* Divider */}
            <hr className="my-12 border-white/10" />

            {/* Share section */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <ShareButtons title={post.title} url={postUrl} />

              <Link
                href="/blog"
                className="text-sm text-slate-500 transition hover:text-slate-300"
              >
                ← Back to Blog
              </Link>
            </div>

            {/* Author card */}
            <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-lg font-bold text-white">
                  {post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold text-white">
                    {post.author.name}
                  </p>
                  <p className="mb-2 text-xs text-cyan-400">
                    {post.author.role}
                  </p>
                  <p className="text-sm leading-6 text-slate-400">
                    Nafis builds web and mobile products at NF Nexa Tech —
                    a software agency in Mahipalpur, New Delhi, specialising in
                    Next.js, Flutter, and SaaS MVP development.
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    Work with us →
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* ── Sidebar (desktop only) ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 z-10 flex max-h-[calc(100vh-8rem)] flex-col gap-6 overflow-y-auto">
              <TableOfContents items={post.toc} />

              {/* Sidebar CTA */}
              <div className="flex-shrink-0 rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  NF Nexa Tech
                </p>
                <p className="mb-4 text-sm font-semibold text-white">
                  Need a software partner?
                </p>
                <p className="mb-5 text-xs leading-5 text-slate-500">
                  We build web apps, mobile apps, and SaaS MVPs for startups
                  and enterprises.
                </p>
                <Link
                  href="/start-project"
                  className="block w-full rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 py-2.5 text-xs font-bold text-white transition hover:opacity-90"
                >
                  Start Your Project
                </Link>
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block w-full rounded-lg border border-white/10 py-2.5 text-xs font-bold text-slate-300 transition hover:border-[#25D366]/30 hover:text-[#25D366]"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ── RELATED POSTS ──────────────────────────────────── */}
      {related.length > 0 && (
        <section className="border-t border-white/8 bg-slate-900/40 py-20">
          <div className="mx-auto w-[92%] max-w-6xl">
            <div className="mb-8 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Continue Reading
              </p>
              <h2 className="text-2xl font-bold text-white">
                Related Articles
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rp) => (
                <BlogCard key={rp.slug} post={rp} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto w-[92%] max-w-4xl rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Ready to build?
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white">
            Let&apos;s turn your idea into a product
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-slate-400">
            Whether it&apos;s a web app, mobile app, or SaaS MVP — we&apos;ll
            help you ship fast, scale confidently, and win on search.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/start-project"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-3 text-sm font-bold text-white transition hover:opacity-90"
            >
              Start Your Project
            </Link>
            <Link
              href="/blog"
              className="rounded-xl border border-white/15 px-7 py-3 text-sm font-bold text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}