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
    "@type": "BlogPosting",
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
    <div className="min-h-screen text-[#1a1a1a] overflow-x-hidden" style={{ backgroundColor: "#FAF7F5" }}>
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
      <header className="relative overflow-hidden pb-10 pt-36" style={{ background: "linear-gradient(135deg, #F0F7FF 0%, #FAF7F5 50%, #FFF4ED 100%)" }}>
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

        <div className="relative mx-auto w-[92%] max-w-4xl">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs"
            style={{ color: "#9B8B8B" }}
          >
            <Link href="/" className="transition hover:text-[#1FA0B1]">
              Home
            </Link>
            <span aria-hidden>›</span>
            <Link href="/blog" className="transition hover:text-[#1FA0B1]">
              Blog
            </Link>
            <span aria-hidden>›</span>
            <span className="line-clamp-1" style={{ color: "#6B5A5A" }}>{post.title}</span>
          </nav>

          {/* Category badge */}
          <span className="mb-4 inline-flex items-center rounded-full border border-[#1FA0B1]/25 bg-[#B5E5EB]/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#1FA0B1]">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="mb-5 text-3xl font-extrabold leading-tight text-[#1a1a1a] sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg leading-relaxed" style={{ color: "#6B5A5A" }}>
            {post.description}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-5 border-y py-4 text-sm" style={{ borderColor: "rgba(198,209,215,0.4)", color: "#6B5A5A" }}>
            {/* Author */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: "linear-gradient(135deg, #1FA0B1 0%, #E8763A 100%)" }}>
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1a1a1a]">
                  {post.author.name}
                </p>
                <p className="text-xs" style={{ color: "#9B8B8B" }}>{post.author.role}</p>
              </div>
            </div>

            <span className="h-4 w-px" style={{ backgroundColor: "rgba(198,209,215,0.5)" }} aria-hidden />

            <time dateTime={post.date} style={{ color: "#6B5A5A" }}>
              {formatDate(post.date)}
            </time>

            <span className="h-4 w-px" style={{ backgroundColor: "rgba(198,209,215,0.5)" }} aria-hidden />

            <span>{post.readingTime} min read</span>

            <span className="h-4 w-px hidden sm:block" style={{ backgroundColor: "rgba(198,209,215,0.5)" }} aria-hidden />

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
                  className="rounded-md border px-3 py-1 text-xs"
                  style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "rgba(255,255,255,0.8)", color: "#9B8B8B" }}
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
            <hr className="my-12" style={{ borderColor: "rgba(198,209,215,0.4)" }} />

            {/* Share section */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <ShareButtons title={post.title} url={postUrl} />

              <Link
                href="/blog"
                className="text-sm transition hover:text-[#1FA0B1]"
                style={{ color: "#9B8B8B" }}
              >
                ← Back to Blog
              </Link>
            </div>

            {/* Author card */}
            <div className="mt-12 rounded-2xl border p-6" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "rgba(255,255,255,0.9)" }}>
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold text-white" style={{ background: "linear-gradient(135deg, #1FA0B1 0%, #E8763A 100%)" }}>
                  {post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold text-[#1a1a1a]">
                    {post.author.name}
                  </p>
                  <p className="mb-2 text-xs font-semibold" style={{ color: "#1FA0B1" }}>
                    {post.author.role}
                  </p>
                  <p className="text-sm leading-6" style={{ color: "#6B5A5A" }}>
                    Nafis builds web and mobile products at NF Nexa Tech —
                    a software agency in Mahipalpur, New Delhi, specialising in
                    Next.js, Flutter, and SaaS MVP development.
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold transition hover:underline"
                    style={{ color: "#1FA0B1" }}
                  >
                    Work with us →
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* ── Sidebar (desktop only) ── */}
          <aside className="hidden lg:block">
            {/* Sticky container — height capped to viewport, TOC scrolls inside */}
            <div
              className="sticky top-28 flex flex-col gap-4"
              style={{ maxHeight: "calc(100vh - 8rem)" }}
            >
              <TableOfContents items={post.toc} />

              {/* Sidebar CTA — clean, no gradient bg */}
              <div
                className="flex-shrink-0 rounded-xl p-5"
                style={{
                  border: "1px solid rgba(198,209,215,0.4)",
                  backgroundColor: "rgba(255,255,255,0.95)",
                }}
              >
                {/* Label */}
                <p
                  className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: "#1FA0B1" }}
                >
                  NF Nexa Tech
                </p>

                <p className="mb-1 text-sm font-semibold" style={{ color: "#1a1a1a" }}>
                  Working on something?
                </p>
                <p className="mb-5 text-xs leading-5" style={{ color: "#6B5A5A" }}>
                  We build websites, mobile apps, and business software. Happy to hear about your project.
                </p>

                {/* Start project button */}
                <Link
                  href="/start-project"
                  className="mb-2 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-bold text-white transition hover:opacity-90"
                  style={{ backgroundColor: "#1FA0B1" }}
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Get in touch
                </Link>

                {/* WhatsApp button */}
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border py-2.5 text-xs font-semibold transition hover:border-[#25D366]/40 hover:text-[#25D366]"
                  style={{ borderColor: "rgba(198,209,215,0.5)", color: "#6B5A5A" }}
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ── RELATED POSTS ──────────────────────────────────── */}
      {related.length > 0 && (
        <section className="border-t py-20" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "rgba(255,255,255,0.5)" }}>
          <div className="mx-auto w-[92%] max-w-6xl">
            <div className="mb-8">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#1FA0B1]/30 bg-[#B5E5EB]/15 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#1FA0B1]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1FA0B1]" />
                Continue Reading
              </div>
              <h2 className="text-2xl font-bold text-[#1a1a1a]">
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



      <Footer />
    </div>
  );
}
