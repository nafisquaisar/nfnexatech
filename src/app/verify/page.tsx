import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Verification Portal | NF Nexa Tech",
  description:
    "Official NF Nexa Tech Employee Verification Portal. Verify the identity and employment status of NF Nexa Tech team members.",
  robots: { index: false, follow: false },
};

const roles = [
  {
    title: "Founder",
    designation: "Founder & CEO",
    id: "NFT-CEO-001",
    href: "/verify/founder",
    icon: "👑",
    gradient: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/30",
    glow: "shadow-amber-500/10",
  },
  {
    title: "Co-Founder",
    designation: "Co-Founder",
    id: "NFT-CF-002",
    href: "/verify/cofounder",
    icon: "🤝",
    gradient: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
    glow: "shadow-violet-500/10",
  },
  {
    title: "Business Development Executive",
    designation: "Business Development Executive",
    id: "NFT-BDE-003",
    href: "/verify/business-development-executive",
    icon: "📈",
    gradient: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
    glow: "shadow-emerald-500/10",
  },
  {
    title: "HR & Operations Executive",
    designation: "HR & Operations Executive",
    id: "NFT-HR-004",
    href: "/verify/hr-operations-executive",
    icon: "🧑‍💼",
    gradient: "from-sky-500/20 to-blue-500/10",
    border: "border-sky-500/30",
    glow: "shadow-sky-500/10",
  },
  {
    title: "UI/UX Designer",
    designation: "UI/UX Designer",
    id: "NFT-UXD-005",
    href: "/verify/ui-ux-designer",
    icon: "🎨",
    gradient: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/30",
    glow: "shadow-pink-500/10",
  },
];

export default function VerifyPortalPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-emerald-600/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-sm shadow-xl">
              <Image
                src="/logo.png"
                alt="NF Nexa Tech Logo"
                width={52}
                height={52}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Verification badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Official Verification System
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Employee{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              Verification Portal
            </span>
          </h1>

          <p className="max-w-2xl text-base text-slate-400 sm:text-lg">
            Verify the identity and employment status of NF Nexa Tech team
            members. Each verification page is digitally authenticated and
            reflects current active status.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-3 text-xs text-slate-500">
            {["🔒 Secure & Official", "✅ Digitally Verified", "🏢 NF Nexa Tech Certified"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700/60 bg-slate-800/50 px-3 py-1"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* Section label */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-700" />
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Team Directory
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-700" />
        </div>

        {/* Role Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <Link
              key={role.id}
              href={role.href}
              id={`verify-card-${role.id.toLowerCase()}`}
              className={`group relative overflow-hidden rounded-2xl border ${role.border} bg-gradient-to-br ${role.gradient} p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${role.glow} hover:border-opacity-60`}
            >
              {/* Card shimmer effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <div className="relative flex flex-col gap-4">
                {/* Icon + ID row */}
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{role.icon}</span>
                  <span className="rounded-md bg-slate-800/70 px-2 py-0.5 font-mono text-xs text-slate-400">
                    {role.id}
                  </span>
                </div>

                {/* Designation */}
                <div>
                  <h2 className="text-lg font-semibold text-white leading-snug">
                    {role.designation}
                  </h2>
                  <p className="mt-0.5 text-sm text-slate-400">NF Nexa Tech</p>
                </div>

                {/* Status + CTA row */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Active
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-slate-400 transition-colors group-hover:text-white">
                    Verify
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-600">
            This portal is maintained by NF Nexa Tech.{" "}
            <a
              href="https://nfnexatech.tech"
              className="text-slate-500 underline-offset-2 hover:text-slate-400 hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              nfnexatech.tech
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
