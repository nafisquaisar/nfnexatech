
import Link from "next/link";
import Image from "next/image";

const HIGHLIGHTS = [
  {
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>,
    text: "Founded in 2023", sub: "Young & ambitious", color: "#1FA0B1", bg: "rgba(181,229,235,0.4)"
  },
  {
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
    text: "70+ Projects Delivered", sub: "Startups & businesses", color: "#E8763A", bg: "rgba(249,225,205,0.55)"
  },
  {
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    text: "30+ Happy Clients", sub: "India & worldwide", color: "#1FA0B1", bg: "rgba(181,229,235,0.4)"
  },
  {
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z"/></svg>,
    text: "Udyam MSME", sub: "Trusted & verified", color: "#E8763A", bg: "rgba(249,225,205,0.55)"
  },
];

const WHY = [
  {
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4-4 4 4 4M6 16l-4-4 4-4"/></svg>,
    title: "Dedicated Team", desc: "Work directly with developers", color: "#1FA0B1", bg: "rgba(181,229,235,0.4)"
  },
  {
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>,
    title: "Clear Communication", desc: "Regular updates, no surprises", color: "#E8763A", bg: "rgba(249,225,205,0.55)"
  },
  {
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>,
    title: "Modern Technology", desc: "Latest tools & scalable stack", color: "#1FA0B1", bg: "rgba(181,229,235,0.4)"
  },
  {
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"/></svg>,
    title: "Result Driven", desc: "Quality & long-term support", color: "#E8763A", bg: "rgba(249,225,205,0.55)"
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-16"
      style={{ backgroundColor: "#FAF7F5" }}
    >
      {/* White overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundColor: "rgba(250,247,245,0.82)", zIndex: 1 }} />

      <div className="relative mx-auto w-[92%] max-w-6xl" style={{ zIndex: 2 }}>

        {/* Heading */}
        <div className="mb-12">
          <div className="mb-3 inline-flex items-center gap-3">
            <span className="h-px w-10" style={{ backgroundColor: "rgba(31,160,177,0.5)" }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#1FA0B1" }}>About Us</span>
          </div>

          <h2 className="text-[36px] font-extrabold tracking-tight sm:text-[42px]" style={{ color: "#1a1a1a" }}>
            A Software Development Company in{" "}
            <span style={{ color: "#E8763A" }}>Delhi,</span>{" "}
            Serving Businesses{" "}
            <span style={{ color: "#1FA0B1" }}>Across India</span>
          </h2>
        </div>

        {/* 2-column grid */}
        <div className="grid items-start gap-10 lg:grid-cols-2">

          {/* LEFT */}
          <div className="flex flex-col gap-5">

            {/* Story box */}
            <div
              className="rounded-xl border p-5"
              style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "rgba(255,255,255,0.75)" }}
            >
              <p className="text-[14px] leading-relaxed mb-4" style={{ color: "#6B5A5A" }}>
                NF Nexa Tech is a software development company based in{" "}
                <strong style={{ color: "#1FA0B1" }}>Mahipalpur, New Delhi</strong>, serving businesses in Delhi and across India. We build:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Websites & Web Applications", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
                  { label: "Mobile Applications", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path strokeLinecap="round" d="M12 18h.01"/></svg> },
                  { label: "SaaS Products", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4 4 4 0 0 0-1.1-2.73A6 6 0 1 0 6.3 8.27 4 4 0 0 0 3 12v3z"/></svg> },
                  { label: "Backend & APIs", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg> },
                  { label: "UI/UX Design", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
                  { label: "Custom Software", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg> },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(181,229,235,0.4)", color: "#1FA0B1" }}>
                      {item.icon}
                    </span>
                    <span className="text-[12px] font-medium" style={{ color: "#1a1a1a" }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 fact cards 2×2 */}
            <div className="grid grid-cols-2 gap-3">
              {HIGHLIGHTS.map((h) => (
                <div key={h.text}
                  className="flex items-center gap-3 rounded-xl border px-4 py-3"
                  style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "rgba(255,255,255,0.9)" }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: h.bg, color: h.color }}>
                    {h.icon}
                  </span>
                  <div>
                    <div className="text-[13px] font-bold leading-tight" style={{ color: "#1a1a1a" }}>{h.text}</div>
                    <div className="text-[11px] mt-0.5" style={{ color: "#6B5A5A" }}>{h.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/start-project"
                id="about-get-quote"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-bold text-white"
                style={{ backgroundColor: "#1FA0B1", boxShadow: "0 4px 14px rgba(31,160,177,0.35)" }}
              >
                Get a Free Quote →
              </Link>
              <Link
                href="/about"
                id="about-learn-more"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-[14px] font-semibold"
                style={{ borderColor: "rgba(198,209,215,0.6)", backgroundColor: "white", color: "#1a1a1a" }}
              >
                More About Us →
              </Link>
            </div>
          </div>

          {/* RIGHT — image + 4 cards below */}
          <div className="hidden lg:flex lg:flex-col lg:gap-4">

            {/* Image */}
            <div
              className="relative overflow-hidden rounded-2xl border shadow-md"
              style={{ borderColor: "rgba(198,209,215,0.4)", aspectRatio: "16/8" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="NF Nexa Tech team"
                fill
                sizes="50vw"
                className="object-cover"
                loading="lazy"
              />
              {/* Watch Our Story */}
              <div
                className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl px-4 py-2.5 backdrop-blur-sm"
                style={{ backgroundColor: "rgba(26,26,26,0.82)" }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "#E8763A" }}>
                  <svg className="w-4 h-4 translate-x-0.5 text-white" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] font-bold text-white">Watch Our Story</div>
                  <div className="text-[11px] text-white/60">See how we work</div>
                </div>
              </div>
            </div>

            {/* 4 why-us cards — 2×2 */}
            <div className="grid grid-cols-2 gap-3">
              {WHY.map((w) => (
                <div key={w.title}
                  className="flex items-center gap-3 rounded-xl border px-4 py-3.5"
                  style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "rgba(255,255,255,0.92)" }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: w.bg, color: w.color }}>
                    {w.icon}
                  </span>
                  <div>
                    <div className="text-[13px] font-bold leading-tight" style={{ color: "#1a1a1a" }}>{w.title}</div>
                    <div className="text-[11px] mt-0.5" style={{ color: "#6B5A5A" }}>{w.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
