/**
 * MDX component overrides — controls how every HTML element renders inside blog posts.
 *
 * Server-compatible: only CodeBlock uses 'use client'.
 * All other components render as plain React on the server.
 */

import Link from "next/link";
import { CodeBlock } from "./CodeBlock";

/* ─── Heading anchors ──────────────────────────────────────── */

function headingAnchor(id: string, children: React.ReactNode) {
  return (
    <span className="group/hl">
      {children}
      <a
        href={`#${id}`}
        className="ml-2 no-underline opacity-0 transition-opacity duration-200 group-hover/hl:opacity-100"
        style={{ color: "#1FA0B1" }}
        aria-label={`Link to section: ${id}`}
      >
        #
      </a>
    </span>
  );
}

/* ─── Component map ────────────────────────────────────────── */

export const mdxComponents = {
  /* Headings */
  h1: ({ children, id }: { children: React.ReactNode; id?: string }) => (
    <h1
      id={id}
      className="mb-4 mt-10 scroll-mt-24 text-3xl font-extrabold leading-tight sm:text-4xl"
      style={{ color: "#111827" }}
    >
      {id ? headingAnchor(id, children) : children}
    </h1>
  ),

  h2: ({ children, id }: { children: React.ReactNode; id?: string }) => (
    <h2
      id={id}
      className="mb-4 mt-12 scroll-mt-24 pb-3 text-2xl font-bold border-b"
      style={{ color: "#111827", borderColor: "rgba(198,209,215,0.5)" }}
    >
      {id ? headingAnchor(id, children) : children}
    </h2>
  ),

  h3: ({ children, id }: { children: React.ReactNode; id?: string }) => (
    <h3
      id={id}
      className="mb-3 mt-8 scroll-mt-24 text-xl font-bold"
      style={{ color: "#111827" }}
    >
      {id ? headingAnchor(id, children) : children}
    </h3>
  ),

  h4: ({ children, id }: { children: React.ReactNode; id?: string }) => (
    <h4
      id={id}
      className="mb-2 mt-6 scroll-mt-24 text-lg font-semibold"
      style={{ color: "#1F2937" }}
    >
      {children}
    </h4>
  ),

  /* Body text */
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="my-5 text-[16px] leading-[1.85]" style={{ color: "#374151" }}>{children}</p>
  ),

  /* Lists */
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="my-5 ml-2 space-y-2">{children}</ul>
  ),

  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="my-5 ml-6 list-decimal space-y-2">{children}</ol>
  ),

  li: ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-2.5 text-[15px] leading-7" style={{ color: "#374151" }}>
      <span className="mt-[10px] h-[6px] w-[6px] flex-shrink-0 rounded-full" style={{ backgroundColor: "#1FA0B1" }} />
      <span>{children}</span>
    </li>
  ),

  /* Inline elements */
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-semibold" style={{ color: "#111827" }}>{children}</strong>
  ),

  em: ({ children }: { children: React.ReactNode }) => (
    <em className="italic" style={{ color: "#4B5563" }}>{children}</em>
  ),

  code: ({ children }: { children: React.ReactNode }) => (
    <code
      className="rounded-md px-1.5 py-0.5 font-mono text-sm"
      style={{ backgroundColor: "rgba(31,160,177,0.08)", color: "#1FA0B1", border: "1px solid rgba(31,160,177,0.15)" }}
    >
      {children}
    </code>
  ),

  /* Code blocks — overridden pre to use our CodeBlock client component */
  pre: CodeBlock,

  /* Blockquote */
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote
      className="my-6 rounded-r-xl py-3 pl-5 pr-4 not-italic"
      style={{ borderLeft: "3px solid #1FA0B1", backgroundColor: "rgba(181,229,235,0.07)", color: "#4B5563" }}
    >
      {children}
    </blockquote>
  ),

  /* Tables */
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="my-7 overflow-x-auto rounded-xl border" style={{ borderColor: "rgba(198,209,215,0.4)" }}>
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),

  thead: ({ children }: { children: React.ReactNode }) => (
    <thead style={{ backgroundColor: "rgba(181,229,235,0.1)" }}>{children}</thead>
  ),

  th: ({ children }: { children: React.ReactNode }) => (
    <th
      className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b"
      style={{ color: "#374151", backgroundColor: "rgba(243,244,246,0.8)", borderColor: "rgba(198,209,215,0.4)" }}
    >
      {children}
    </th>
  ),

  td: ({ children }: { children: React.ReactNode }) => (
    <td className="border-b px-4 py-3 text-[14px]" style={{ color: "#374151", borderColor: "rgba(198,209,215,0.3)" }}>
      {children}
    </td>
  ),

  tr: ({ children }: { children: React.ReactNode }) => (
    <tr className="transition-colors hover:bg-[#B5E5EB]/5">{children}</tr>
  ),

  /* HR */
  hr: () => <hr className="my-10" style={{ borderColor: "rgba(198,209,215,0.4)" }} />,

  /* Links */
  a: ({
    href,
    children,
    ...props
  }: { href?: string; children: React.ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href?.startsWith("/") || href?.startsWith("#");
    if (isInternal && href) {
      return (
        <Link
          href={href}
          className="underline underline-offset-2 transition hover:opacity-80"
          style={{ color: "#1FA0B1" }}
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 transition hover:opacity-80"
        style={{ color: "#1FA0B1" }}
        {...props}
      >
        {children}
      </a>
    );
  },

  /* Images */
  img: ({
    src,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt ?? ""}
      loading="lazy"
      className="my-8 w-full rounded-xl object-cover shadow-md"
      style={{ border: "1px solid rgba(198,209,215,0.4)" }}
      {...props}
    />
  ),
};
