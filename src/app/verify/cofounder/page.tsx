import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Co-Founder Verification | NF Nexa Tech",
  description:
    "Official verification page for Saheb Alam, Co-Founder of NF Nexa Tech. Verify employment status and credentials.",
  robots: { index: false, follow: false },
};

export default function CoFounderVerificationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-60 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-slate-800/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/verify"
            id="back-to-verify-portal"
            className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Verification Portal
          </Link>
        </div>

        {/* Main Card */}
        <div className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-slate-900/70 backdrop-blur-xl shadow-2xl">
          {/* Top gradient stripe */}
          <div className="h-1.5 w-full bg-gradient-to-r from-violet-500 via-purple-400 to-fuchsia-500" />

          <div className="p-8 sm:p-10">
            {/* Header row */}
            <div className="mb-8 flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-violet-500/20 blur-xl" />
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/10 bg-slate-800 shadow-lg">
                  <Image
                    src="/verify/co-founder.png"
                    alt="Saheb Alam"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-slate-900 bg-emerald-500 text-xs text-white shadow-lg">
                  ✓
                </div>
              </div>

              <div>
                <div className="mb-1 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/60 px-3 py-1 text-xs font-mono text-slate-400">
                  NFT-CF-002 · Co-Founder
                </div>
                <h1 className="text-2xl font-bold text-white sm:text-3xl">Saheb Alam</h1>
                <p className="mt-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-sm font-semibold text-transparent">
                  Co-Founder
                </p>
                <p className="mt-0.5 text-sm text-slate-500">NF Nexa Tech</p>
              </div>
            </div>

            {/* Verification status banner */}
            <div className="mb-8 flex flex-wrap justify-center gap-3 sm:justify-start">
              {["✓ Verified Employee", "✓ Active Status", "✓ Official NF Nexa Tech Representative"].map((item) => (
                <div key={item} className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  {item}
                </div>
              ))}
            </div>

            <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            {/* Details grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Full Name", value: "Saheb Alam" },
                { label: "Designation", value: "Co-Founder" },
                { label: "Company", value: "NF Nexa Tech" },
                { label: "Employee ID", value: "NFT-CF-002", mono: true },
                { label: "Department", value: "Executive Leadership" },
                { label: "Member Since", value: "2022" },
              ].map((field) => (
                <div key={field.label} className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-4">
                  <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-slate-500">{field.label}</p>
                  <p className={`text-sm font-semibold text-white ${field.mono ? "font-mono" : ""}`}>{field.value}</p>
                </div>
              ))}

              <div className="col-span-full rounded-xl border border-emerald-500/25 bg-emerald-500/8 p-4">
                <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-slate-500">Employment Status</p>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-sm font-semibold text-emerald-400">Active</span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-4">
                <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-slate-500">Official Email</p>
                <a href="mailto:cofounder@nfnexatech.tech" className="break-all text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                  cofounder@nfnexatech.tech
                </a>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-4">
                <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-slate-500">Website</p>
                <a href="https://nfnexatech.tech" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                  nfnexatech.tech
                </a>
              </div>
            </div>

            <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            <div className="flex flex-col items-center gap-3 text-center">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full border-2 border-violet-500/30 bg-violet-500/20 text-2xl shadow-lg">🛡️</div>
              <p className="text-xs text-slate-500">
                This verification is issued by <span className="font-semibold text-slate-400">NF Nexa Tech</span> and confirms the above individual is an official employee.
              </p>
              <p className="font-mono text-[10px] text-slate-700">VERIFIED · NFT-CF-002 · nfnexatech.tech</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/verify" id="footer-back-to-portal" className="text-sm text-slate-600 underline-offset-2 hover:text-slate-400 hover:underline transition-colors">
            ← Back to Verification Portal
          </Link>
        </div>
      </div>
    </main>
  );
}
