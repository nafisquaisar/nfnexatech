/**
 * MDX component overrides — controls how every HTML element renders inside blog posts.
 *
 * Server-compatible: only CodeBlock uses 'use client'.
 * All other components render as plain React on the server.
 */

import Link from "next/link";
import { CodeBlock } from "./CodeBlock";

/* ─── Heading anchors ──────────────────────────────────────── */

/**
 * Renders heading children alongside a "#" permalink.
 *
 * Previously this wrapped children inside an <a>, which caused a React
 * hydration error ("cannot nest <a> inside <a>") whenever MDX content
 * placed a link inside a heading. Now we render children as-is and
 * append a separate <a> for the permalink — no nesting possible.
 */
function headingAnchor(id: string, children: React.ReactNode) {
  return (
    <span className="group/hl">
      {children}
      <a
        href={`#${id}`}
        className="ml-2 no-underline opacity-0 text-cyan-500 transition-opacity duration-200 group-hover/hl:opacity-100"
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
      className="mb-4 mt-10 scroll-mt-24 text-3xl font-extrabold leading-tight text-white sm:text-4xl"
    >
      {id ? headingAnchor(id, children) : children}
    </h1>
  ),

  h2: ({ children, id }: { children: React.ReactNode; id?: string }) => (
    <h2
      id={id}
      className="mb-4 mt-12 scroll-mt-24 border-b border-white/8 pb-3 text-2xl font-bold text-white"
    >
      {id ? headingAnchor(id, children) : children}
    </h2>
  ),

  h3: ({ children, id }: { children: React.ReactNode; id?: string }) => (
    <h3
      id={id}
      className="mb-3 mt-8 scroll-mt-24 text-xl font-bold text-slate-100"
    >
      {id ? headingAnchor(id, children) : children}
    </h3>
  ),

  h4: ({ children, id }: { children: React.ReactNode; id?: string }) => (
    <h4
      id={id}
      className="mb-2 mt-6 scroll-mt-24 text-lg font-semibold text-slate-200"
    >
      {children}
    </h4>
  ),

  /* Body text */
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="my-5 text-base leading-8 text-slate-300">{children}</p>
  ),

  /* Lists */
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="my-5 ml-2 space-y-2">{children}</ul>
  ),

  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="my-5 ml-6 list-decimal space-y-2">{children}</ol>
  ),

  li: ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-2.5 text-base leading-7 text-slate-300">
      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
      <span>{children}</span>
    </li>
  ),

  /* Inline elements */
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),

  em: ({ children }: { children: React.ReactNode }) => (
    <em className="italic text-slate-200">{children}</em>
  ),

  code: ({ children }: { children: React.ReactNode }) => (
    <code className="rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-sm text-cyan-300">
      {children}
    </code>
  ),

  /* Code blocks — overridden pre to use our CodeBlock client component */
  pre: CodeBlock,

  /* Blockquote */
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="my-6 rounded-r-xl border-l-4 border-cyan-400/50 bg-cyan-400/5 py-1 pl-6 pr-4 italic text-slate-400">
      {children}
    </blockquote>
  ),

  /* Tables */
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="my-7 overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),

  thead: ({ children }: { children: React.ReactNode }) => (
    <thead className="bg-white/[0.04]">{children}</thead>
  ),

  th: ({ children }: { children: React.ReactNode }) => (
    <th className="border-b border-white/10 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-300">
      {children}
    </th>
  ),

  td: ({ children }: { children: React.ReactNode }) => (
    <td className="border-b border-white/8 px-4 py-3 text-slate-300">
      {children}
    </td>
  ),

  tr: ({ children }: { children: React.ReactNode }) => (
    <tr className="transition-colors hover:bg-white/[0.02]">{children}</tr>
  ),

  /* HR */
  hr: () => <hr className="my-10 border-white/10" />,

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
          className="text-cyan-400 underline underline-offset-2 transition hover:text-cyan-300"
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
        className="text-cyan-400 underline underline-offset-2 transition hover:text-cyan-300"
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
      className="my-8 w-full rounded-xl border border-white/10 object-cover shadow-lg shadow-black/30"
      {...props}
    />
  ),
};
