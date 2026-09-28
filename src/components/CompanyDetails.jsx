import Image from "next/image";
import Link from "next/link";

const INFO_CARDS = [
  {
    label: "Headquarters",
    value: "Mahipalpur, New Delhi,\nDelhi, India",
    color: "#1FA0B1",
    bg: "rgba(181,229,235,0.35)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      </svg>
    ),
  },
  {
    label: "Office Address",
    value: "Flat 201, Jheel Hari Niwas,\nBlock B, Bangali Market,\nMahipalpur, New Delhi - 110037",
    color: "#1FA0B1",
    bg: "rgba(181,229,235,0.35)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
      </svg>
    ),
  },
  {
    label: "Founder & CEO",
    value: "Nafis Quaisar",
    color: "#E8763A",
    bg: "rgba(249,225,205,0.55)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" />
      </svg>
    ),
  },
  {
    label: "Company Type",
    value: "Software Agency —\nWeb & Mobile Development",
    color: "#E8763A",
    bg: "rgba(249,225,205,0.55)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
      </svg>
    ),
  },
];

const STATS = [
  { icon: "📅", value: "2023", label: "Founded In", color: "#1FA0B1", bg: "rgba(181,229,235,0.4)" },
  { icon: "😊", value: "10+", label: "Happy Clients", color: "#E8763A", bg: "rgba(249,225,205,0.55)" },
  { icon: "🚀", value: "70+", label: "Projects Delivered", color: "#1FA0B1", bg: "rgba(181,229,235,0.4)" },
  { icon: "🏆", value: "3+", label: "Years of Experience", color: "#7C5CBF", bg: "rgba(196,181,253,0.35)" },
];

const SOCIALS = [
  { href: "https://linkedin.com/company/nfnexatech", label: "LinkedIn", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { href: "https://twitter.com/nfnexatech", label: "Twitter", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { href: "https://instagram.com/nfnexatech", label: "Instagram", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg> },
  { href: "https://youtube.com/@nfnexatech", label: "YouTube", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
  { href: "https://nfnexatech.com", label: "Website", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
];

export default function CompanyDetails() {
  return (
    <section
      className="relative overflow-hidden py-14"
      style={{ backgroundColor: "#FAF7F5" }}
    >
      {/* Background — blurred bg.webp */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "url('/bg.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", filter: "blur(6px)", transform: "scale(1.08)", zIndex: 0 }} />
      {/* White overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundColor: "rgba(250,247,245,0.88)", zIndex: 1 }} />

      <div className="relative mx-auto w-[92%] max-w-5xl" style={{ zIndex: 2 }}>

        {/* Heading */}
        <div className="mb-8 text-center">
          <div className="mb-3 inline-flex items-center gap-3">
            <span className="h-px w-10" style={{ backgroundColor: "rgba(31,160,177,0.5)" }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#1FA0B1" }}>Company Details</span>
            <span className="h-px w-10" style={{ backgroundColor: "rgba(31,160,177,0.5)" }} />
          </div>
          <h2 className="text-[32px] font-extrabold tracking-tight sm:text-[38px]" style={{ color: "#1a1a1a" }}>
            About Our <span style={{ color: "#E8763A" }}>Company</span>
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-[13px]" style={{ color: "#6B5A5A" }}>
            A quick overview about NF Nexa Tech, our location, founder and what we do.
          </p>
        </div>

        {/* Main Card */}
        <div
          className="overflow-hidden rounded-2xl border shadow-sm"
          style={{ borderColor: "rgba(198,209,215,0.5)", backgroundColor: "rgba(255,255,255,0.95)" }}
        >
          {/* Top: Logo panel + Info grid */}
          <div className="grid md:grid-cols-[260px_1fr]">

            {/* Left: Logo + Description + Socials */}
            <div
              className="flex flex-col gap-4 border-r p-6"
              style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "rgba(250,247,245,0.6)" }}
            >
              {/* Logo */}
              <div className="flex items-center gap-2.5">
                <Image src="/logo/navlogo.png" alt="NF Nexa Tech" width={36} height={36} className="rounded-xl" />
                <div>
                  <div className="text-[14px] font-bold leading-tight" style={{ color: "#1a1a1a" }}>NF Nexa Tech</div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.18em]" style={{ color: "#1FA0B1" }}>Innovating the Future</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[12px] leading-relaxed" style={{ color: "#6B5A5A" }}>
                NF Nexa Tech is a web and mobile development company based in Mahipalpur, New Delhi. We help businesses build modern digital products with a focus on clean design, performance, and real business impact.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-2 mt-auto">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border transition-all hover:scale-110 hover:border-[#1FA0B1] hover:text-[#1FA0B1]"
                    style={{ borderColor: "rgba(198,209,215,0.5)", color: "#6B5A5A" }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: 2x2 info cards */}
            <div className="grid grid-cols-2">
              {INFO_CARDS.map((card, i) => (
                <div
                  key={card.label}
                  className={`flex gap-3 p-5 ${i < 2 ? "border-b" : ""} ${i % 2 === 0 ? "border-r" : ""}`}
                  style={{ borderColor: "rgba(198,209,215,0.4)" }}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: card.bg, color: card.color }}>
                    {card.icon}
                  </div>
                  <div>
                    <div className="mb-1 text-[9px] font-bold uppercase tracking-[0.18em]" style={{ color: card.color }}>{card.label}</div>
                    <div className="text-[12px] font-semibold leading-snug whitespace-pre-line" style={{ color: "#1a1a1a" }}>{card.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: Stats row */}
          <div className="grid grid-cols-2 border-t md:grid-cols-4" style={{ borderColor: "rgba(198,209,215,0.4)" }}>
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`flex items-center gap-3 px-6 py-4 ${i < STATS.length - 1 ? "border-r" : ""}`}
                style={{ borderColor: "rgba(198,209,215,0.4)" }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl" style={{ backgroundColor: s.bg }}>
                  {s.icon}
                </div>
                <div>
                  <div className="text-[18px] font-extrabold leading-tight" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px]" style={{ color: "#6B5A5A" }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
