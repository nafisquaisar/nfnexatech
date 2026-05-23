import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <p className="relative mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
        404 Error
      </p>

      <h1 className="relative mb-4 text-7xl font-extrabold tracking-tight text-white sm:text-8xl">
        404
      </h1>

      <p className="relative mb-3 text-2xl font-bold text-slate-200">
        Page Not Found
      </p>

      <p className="relative mb-10 max-w-md text-base text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>

      <div className="relative flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-3 text-sm font-bold text-white transition hover:opacity-90"
        >
          ← Back to Home
        </Link>

        <Link
          href="/#contact"
          className="rounded-xl border border-white/15 px-7 py-3 text-sm font-bold text-slate-300 transition hover:border-cyan-400/50 hover:text-white"
        >
          Contact Us
        </Link>
      </div>

      <p className="relative mt-16 text-xs text-slate-600">
        {siteConfig.name} · {siteConfig.contact.city}, India
      </p>
    </div>
  );
}
