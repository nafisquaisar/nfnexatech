import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about" },
  { label: "Our Process", href: "/#process" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const LOCATION_LINKS = [
  { label: "Delhi", href: "/locations/delhi" },
  { label: "Mahipalpur", href: "/locations/delhi" },
  { label: "Aerocity", href: "/locations/delhi" },
  { label: "South Delhi", href: "/locations/delhi" },
];

const TRUST_BADGES = [
  { icon: "👤", label: "Free Consultation" },
  { icon: "⚡", label: "Quick Response" },
  { icon: "🛡️", label: "No Obligation" },
];


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* ── CTA Banner ── */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundColor: "rgba(250,247,245,0.88)" }}
        />
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full blur-[90px]" style={{ backgroundColor: "rgba(181,229,235,0.5)" }} />
          <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full blur-[80px]" style={{ backgroundColor: "rgba(249,225,205,0.5)" }} />
        </div>

        <div className="relative mx-auto w-[92%] max-w-6xl py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* Left text */}
            <div className="max-w-md">
              <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: "#1FA0B1" }}>
                Let&apos;s Work Together
              </div>
              <h2 className="text-[30px] font-extrabold leading-tight tracking-tight sm:text-[36px]" style={{ color: "#1a1a1a" }}>
                Have a Project in{" "}
                <span style={{ color: "#1FA0B1" }}>Mind?</span>
              </h2>
              <p className="mt-3 text-[13px] leading-relaxed" style={{ color: "#6B5A5A" }}>
                Tell us about your idea — we&apos;ll turn it into a modern, scalable and high-quality digital product.
              </p>
            </div>

            {/* Right: buttons + badges */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/start-project"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] font-bold text-white transition-all hover:scale-[1.03]"
                  style={{ background: "linear-gradient(135deg,#1FA0B1,#36c2d6)", boxShadow: "0 6px 20px rgba(31,160,177,0.35)" }}
                >
                  Get a Free Quote →
                </Link>
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-[13px] font-bold transition-all hover:scale-[1.03]"
                  style={{ borderColor: "rgba(198,209,215,0.7)", color: "#1a1a1a", backgroundColor: "white" }}
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                  </svg>
                  Schedule a Call
                </a>
              </div>
              {/* Trust badges */}
              <div className="flex flex-wrap gap-4">
                {TRUST_BADGES.map((b) => (
                  <div key={b.label} className="flex items-center gap-1.5 text-[12px]" style={{ color: "#6B5A5A" }}>
                    <span>{b.icon}</span>
                    <span>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Light Footer — matches site warm cream ── */}
      <div style={{ backgroundColor: "#F0EBE7", borderTop: "1px solid rgba(198,209,215,0.5)" }}>
        <div className="mx-auto w-[92%] max-w-6xl">

          {/* Main grid */}
          <div className="grid gap-10 py-14 grid-cols-2 lg:grid-cols-[1.8fr_1fr_1.2fr_1.2fr]">

            {/* Brand col */}
            <div className="col-span-2 lg:col-span-1">
              {/* Logo */}
              <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
                <Image src="/logo/navlogo.png" alt="NF Nexa Tech" width={32} height={32} className="rounded-xl" />
                <div>
                  <div className="text-[15px] font-bold" style={{ color: "#1a1a1a" }}>NF Nexa Tech</div>
                  <div className="text-[8px] font-semibold uppercase tracking-[0.2em]" style={{ color: "#1FA0B1" }}>Innovating the Future</div>
                </div>
              </Link>

              <p className="text-[12px] leading-relaxed max-w-[260px]" style={{ color: "#6B5A5A" }}>
                {siteConfig.description}
              </p>

              {/* Socials */}
              <div className="mt-5 flex gap-2.5">
                {[
                  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                  { href: siteConfig.social.instagram, label: "Instagram", icon: <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                  { href: siteConfig.social.facebook, label: "Facebook", icon: <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                  { href: siteConfig.social.whatsapp, label: "WhatsApp", icon: <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border transition-all hover:border-[#1FA0B1] hover:text-[#1FA0B1]"
                    style={{ borderColor: "rgba(198,209,215,0.7)", color: "#9B8B8B" }}>
                    {s.icon}
                  </a>
                ))}
              </div>

            </div>

            {/* Company col */}
            <nav aria-label="Company links">
              <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "#9B8B8B" }}>Company</h3>
              <ul className="space-y-3">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href}
                      className="flex items-center justify-between text-[13px] transition-all hover:text-[#1FA0B1]"
                      style={{ color: "#6B5A5A" }}>
                      {link.label}
                      <svg className="h-3 w-3 opacity-40" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services col */}
            <nav aria-label="Services">
              <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "#9B8B8B" }}>Services</h3>
              <ul className="space-y-3">
                {siteConfig.services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`}
                      className="flex items-center justify-between text-[13px] transition-all hover:text-[#1FA0B1]"
                      style={{ color: "#6B5A5A" }}>
                      {s.name}
                      <svg className="h-3 w-3 opacity-40" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Info col */}
            <nav aria-label="Contact Info">
              <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "#9B8B8B" }}>Contact Info</h3>
              <div className="space-y-4">
                {/* Office */}
                <div className="flex gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(31,160,177,0.12)" }}>
                    <svg className="h-4 w-4" fill="none" stroke="#1FA0B1" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold" style={{ color: "#1a1a1a" }}>Our Office</div>
                    <div className="text-[11px] leading-relaxed" style={{ color: "#6B5A5A" }}>
                      Flat 201, Jheel Hari Niwas, Block B,<br />
                      Bangali Market, Mahipalpur,<br />
                      New Delhi – 110037, India
                    </div>
                  </div>
                </div>
                {/* Call */}
                <div className="flex gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(31,160,177,0.12)" }}>
                    <svg className="h-4 w-4" fill="none" stroke="#1FA0B1" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold" style={{ color: "#1a1a1a" }}>Call Us</div>
                    <a href={`tel:${siteConfig.contact.phone}`} className="block text-[11px] transition hover:text-[#1FA0B1]" style={{ color: "#6B5A5A" }}>{siteConfig.contact.phone}</a>
                    <a href={`tel:${siteConfig.contact.phone2}`} className="block text-[11px] transition hover:text-[#1FA0B1]" style={{ color: "#6B5A5A" }}>{siteConfig.contact.phone2}</a>
                    <div className="text-[10px]" style={{ color: "#9B8B8B" }}>Mon – Sat, 10:00 AM – 7:00 PM</div>
                  </div>
                </div>
                {/* Email */}
                <div className="flex gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(232,118,58,0.12)" }}>
                    <svg className="h-4 w-4" fill="none" stroke="#E8763A" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold" style={{ color: "#1a1a1a" }}>Email Us</div>
                    <a href={`mailto:${siteConfig.contact.email}`} className="block text-[11px] transition hover:text-[#E8763A]" style={{ color: "#6B5A5A" }}>{siteConfig.contact.email}</a>
                    <div className="text-[10px]" style={{ color: "#9B8B8B" }}>We reply within 24 hours</div>
                  </div>
                </div>
                {/* Directions */}
                <div className="flex gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(31,160,177,0.12)" }}>
                    <svg className="h-4 w-4" fill="none" stroke="#1FA0B1" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold" style={{ color: "#1a1a1a" }}>Get Directions</div>
                    <a href="https://maps.google.com/?q=Mahipalpur,New+Delhi" target="_blank" rel="noopener noreferrer"
                      className="text-[11px] font-semibold transition hover:opacity-80" style={{ color: "#1FA0B1" }}>
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* Divider */}
          <div className="h-px" style={{ backgroundColor: "rgba(198,209,215,0.6)" }} />

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-3 py-5 text-[11px] sm:flex-row" style={{ color: "#9B8B8B" }}>
            <div>
              <p>©{" "}{year} {siteConfig.name}. All rights reserved.</p>
              <p style={{ color: "#B8ACA7" }}>A Software Agency — Web &amp; Mobile Development</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Refund Policy", href: "/refund-policy" },
                { label: "Sitemap", href: "/sitemap.xml" },
                { label: "RSS", href: "/rss.xml" },
              ].map((l, i, arr) => (
                <span key={l.label} className="flex items-center gap-4">
                  <Link href={l.href} className="transition hover:text-[#1FA0B1]">{l.label}</Link>
                  {i < arr.length - 1 && <span style={{ color: "#C6D1D7" }}>|</span>}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}


