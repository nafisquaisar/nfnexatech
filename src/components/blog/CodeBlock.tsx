"use client";

import { useState, useRef } from "react";

/**
 * Client component that wraps code blocks produced by rehype-pretty-code.
 * Renders a language badge + copy-to-clipboard button on hover.
 * Used as the `pre` override in mdxComponents.
 */
export function CodeBlock({
  children,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  // rehype-pretty-code sets data-language on the <pre> element
  const language = (props as Record<string, unknown>)["data-language"] as
    | string
    | undefined;

  const handleCopy = async () => {
    const text =
      preRef.current?.querySelector("code")?.textContent?.trim() ?? "";
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API may be unavailable in some contexts
    }
  };

  return (
    <div className="group/code relative my-7 overflow-hidden rounded-xl border border-white/10 shadow-lg shadow-black/30">
      {/* ── Header bar ── */}
      <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.04] px-4 py-2.5">
        <div className="flex items-center gap-2">
          {/* macOS-style dots */}
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
        </div>

        <div className="flex items-center gap-3">
          {language && (
            <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
              {language}
            </span>
          )}

          <button
            onClick={handleCopy}
            aria-label="Copy code"
            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-400 transition-all duration-200 hover:border-cyan-400/40 hover:text-cyan-300"
          >
            {copied ? "✓ Copied" : "Copy"}
          </button>
        </div>
      </div>

      {/* ── Code area ── */}
      <pre
        ref={preRef}
        {...props}
        className="overflow-x-auto bg-[#0d1117] p-5 text-sm leading-6"
        style={{ margin: 0 }}
      >
        {children}
      </pre>
    </div>
  );
}
