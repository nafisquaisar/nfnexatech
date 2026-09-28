"use client";

import { useState, useEffect, useCallback, useRef } from "react";

/* ── Testimonials Data ──────────────────────────────────── */
const TESTIMONIALS = [
  {
    id: 1,
    name: "Popular Bread",
    initials: "P",
    gradient: "from-[#E8763A] to-[#f5a04a]",
    rating: 5,
    review:
      "Aapne mera app banaye the popular bread that was really good app. Smooth kaaam karraha ha aur mera kaam bahut ache se aur aashan hogaya ha. aur mere according customize bhi hai",
    accent: "#E8763A",
  },
  {
    id: 2,
    name: "Asargroup Invisiblegrill",
    initials: "A",
    gradient: "from-[#1FA0B1] to-[#36c2d6]",
    rating: 5,
    review:
      "NF Nexa Tech developed a professional website for our invisible grill business, and we are very happy with the result. The website has a clean design, works smoothly on mobile, and presents our services in a simple and attractive way. They understood our requirements well and delivered everything professionally. Highly recommended for business website development.",
    accent: "#1FA0B1",
  },
  {
    id: 3,
    name: "Harsh Kumar",
    initials: "HK",
    gradient: "from-[#7C5CBF] to-[#9b7dd4]",
    rating: 5,
    review:
      "NF Nexa Tech built our company website from scratch and the result was fantastic. The design is modern, mobile-friendly, and loads very fast. Great experience overall.",
    accent: "#7C5CBF",
  },
  {
    id: 4,
    name: "Md Ismail",
    initials: "MI",
    gradient: "from-[#1FA0B1] to-[#36c2d6]",
    rating: 5,
    review:
      "I recently hired NF Nexa Tech to develop a professional website for my business, and I must say that their service has been absolutely exceptional from start to finish. If you are looking for a top-notch web development and SEO agency in Mahipalpur or the Delhi NCR region, NF Nexa Tech is undoubtedly the best choice.",
    accent: "#1FA0B1",
  },
];

/* ── Client Logo Bar ────────────────────────────────────── */
const CLIENTS = [
  {
    name: "TuneLyf",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    name: "Organizer Classes",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    name: "Medon Company",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: "InvoiceLelo",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" />
      </svg>
    ),
  },
];

/* ── Google G SVG ────────────────────────────────────────── */
function GoogleG({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

/* ── Stars ────────────────────────────────────────────────── */
function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ── Single Card ─────────────────────────────────────────── */
function TestiCard({ t, active }) {
  return (
    <article
      className={`relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border p-6 shadow-sm transition-all duration-300 ${
        active ? "shadow-lg scale-[1.01]" : "hover:shadow-md"
      }`}
      style={{
        borderColor: active ? `${t.accent}40` : "rgba(198,209,215,0.45)",
        backgroundColor: "rgba(255,255,255,0.95)",
      }}
    >
      {/* Top row: quote icon + stars */}
      <div className="flex items-center justify-between">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-xl text-xl font-black leading-none"
          style={{ backgroundColor: `${t.accent}18`, color: t.accent }}
        >
          ❝
        </div>
        <Stars />
      </div>

      {/* Review text */}
      <blockquote className="flex-1 text-[13px] leading-relaxed" style={{ color: "#3D3333" }}>
        &ldquo;{t.review}&rdquo;
      </blockquote>

      {/* Client info */}
      <footer className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: "rgba(198,209,215,0.4)" }}>
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-[12px] font-bold text-white shadow-sm`}
        >
          {t.initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-bold leading-tight" style={{ color: "#1a1a1a" }}>{t.name}</p>
          <p className="text-[11px]" style={{ color: "#6B5A5A" }}>Verified on Google</p>
        </div>
        {/* Google badge */}
        <div className="flex items-center gap-1 rounded-full px-2.5 py-1" style={{ backgroundColor: "rgba(234,67,53,0.08)" }}>
          <GoogleG className="h-3.5 w-3.5" />
          <span className="text-[9px] font-bold" style={{ color: "#EA4335" }}>Google</span>
        </div>
      </footer>

      {/* Accent corner blob */}
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-30"
        style={{ backgroundColor: `${t.accent}30` }}
      />
    </article>
  );
}

/* ── Main Section ────────────────────────────────────────── */
export default function Testimonials() {
  const total = TESTIMONIALS.length;
  const [visibleCount, setVisibleCount] = useState(3);

  // Update visibleCount on resize
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxOffset = Math.max(0, total - visibleCount);
  const [offset, setOffset] = useState(0);
  const timerRef = useRef(null);

  // Clamp offset when visibleCount changes (e.g. on resize)
  useEffect(() => {
    setOffset((o) => Math.min(o, maxOffset));
  }, [maxOffset]);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setOffset((o) => (o >= maxOffset ? 0 : o + 1));
    }, 5000);
  }, [maxOffset]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const handleNav = (dir) => {
    setOffset((o) => {
      const next = o + dir;
      if (next < 0) return maxOffset;
      if (next > maxOffset) return 0;
      return next;
    });
    startTimer(); // reset autoplay on manual nav
  };

  // translate percentage: each card takes (100/visibleCount)% of container width
  const translatePct = -(offset * (100 / visibleCount));

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-14"
      style={{ backgroundColor: "#FAF7F5" }}
    >
      {/* Overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundColor: "rgba(250,247,245,0.82)", zIndex: 1 }} />

      {/* Blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>
        <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full blur-[80px]" style={{ backgroundColor: "rgba(181,229,235,0.35)" }} />
        <div className="absolute -bottom-12 -left-12 h-56 w-56 rounded-full blur-[70px]" style={{ backgroundColor: "rgba(249,225,205,0.45)" }} />
      </div>

      <div className="relative mx-auto w-[92%] max-w-6xl" style={{ zIndex: 2 }}>

        {/* ── Heading + nav arrows row ── */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="h-px w-10" style={{ backgroundColor: "rgba(31,160,177,0.5)" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#1FA0B1" }}>Client Stories</span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-extrabold tracking-tight lg:text-[42px]" style={{ color: "#1a1a1a" }}>
              What our clients{" "}
              <span style={{ color: "#1FA0B1" }}>say</span>
            </h2>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed" style={{ color: "#6B5A5A" }}>
              Real reviews from our Google Business Profile — straight from our clients.
            </p>
          </div>

          {/* Arrow buttons — top-right on desktop */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNav(-1)}
              aria-label="Previous reviews"
              disabled={offset === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition-all hover:scale-105 hover:border-[#1FA0B1] hover:text-[#1FA0B1] disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ borderColor: "rgba(198,209,215,0.6)", backgroundColor: "white", color: "#6B5A5A" }}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleNav(1)}
              aria-label="Next reviews"
              disabled={offset === maxOffset}
              className="flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition-all hover:scale-105 hover:border-[#1FA0B1] hover:text-[#1FA0B1] disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ borderColor: "rgba(198,209,215,0.6)", backgroundColor: "white", color: "#6B5A5A" }}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Carousel viewport ── */}
        <div className="overflow-hidden rounded-2xl">
          {/* Sliding track */}
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(${translatePct}% - ${offset * (16 / visibleCount)}px))` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.id}
                className="shrink-0"
                style={{ width: `calc((100% - ${(visibleCount - 1) * 16}px) / ${visibleCount})` }}
              >
                <TestiCard t={t} active={i >= offset && i < offset + visibleCount} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Dot indicators ── */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: maxOffset + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setOffset(i); startTimer(); }}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === offset ? 24 : 8,
                height: 8,
                backgroundColor: i === offset ? "#1FA0B1" : "rgba(198,209,215,0.7)",
              }}
            />
          ))}
        </div>

        {/* ── Google CTA buttons ── */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://maps.app.goo.gl/D7jqDzLm3ampPqAc6"
            target="_blank"
            rel="noopener noreferrer"
            id="view-google-reviews-btn"
            className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[13px] font-semibold shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            style={{ borderColor: "rgba(234,67,53,0.35)", backgroundColor: "white", color: "#1a1a1a" }}
          >
            <GoogleG className="h-4 w-4 shrink-0" />
            View All Reviews on Google
          </a>
          <a
            href="https://g.page/r/CclHiS64sLHYEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            id="write-google-review-btn"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            style={{ backgroundColor: "#1FA0B1", color: "white" }}
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Write a Review
          </a>
        </div>

        {/* ── Trusted by divider ── */}
        <div className="mt-10">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(198,209,215,0.5)" }} />
            <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "#9B8B8B" }}>
              Trusted by businesses and teams across India
            </span>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(198,209,215,0.5)" }} />
          </div>

          {/* Client logos */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-6">
            {CLIENTS.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-2 rounded-xl border px-4 py-2.5 transition-all hover:shadow-sm hover:-translate-y-0.5"
                style={{ borderColor: "rgba(198,209,215,0.5)", backgroundColor: "rgba(255,255,255,0.85)", color: "#6B5A5A" }}
              >
                {c.icon}
                <span className="text-[12px] font-semibold" style={{ color: "#1a1a1a" }}>{c.name}</span>
              </div>
            ))}
            <div
              className="flex items-center gap-2 rounded-xl border px-4 py-2.5"
              style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "rgba(255,255,255,0.6)", color: "#9B8B8B" }}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="5" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="19" cy="12" r="1" fill="currentColor" />
              </svg>
              <span className="text-[12px] font-semibold">AND MORE...</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
