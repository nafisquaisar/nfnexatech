"use client";

import { useState, useRef } from "react";
import { trackEvent } from "@/lib/analytics";
import { trackGoogleAdsConversion } from "@/lib/googleAds";
import { siteConfig } from "@/config/site";

/* ── Options ────────────────────────────────────────────── */
const SERVICE_OPTIONS = [
  "Web Development",
  "Android App Development",
  "Flutter App Development",
  "UI/UX Design",
  "Backend & API Development",
  "SaaS / MVP Development",
  "Custom Software Development",
  "Other",
];
const BUDGET_OPTIONS = ["Under ₹1 Lakh", "₹1L – ₹3L", "₹3L – ₹7L", "₹7L – ₹15L", "₹15L+", "To be discussed"];
const TIMELINE_OPTIONS = ["ASAP (< 1 month)", "1–2 months", "3–6 months", "6+ months", "Flexible"];

const COUNTRY_CODES = [
  { flag: "🇮🇳", code: "+91",  label: "India" },
  { flag: "🇦🇪", code: "+971", label: "UAE" },
  { flag: "🇺🇸", code: "+1",   label: "USA" },
  { flag: "🇬🇧", code: "+44",  label: "UK" },
  { flag: "🇸🇦", code: "+966", label: "Saudi Arabia" },
  { flag: "🇸🇬", code: "+65",  label: "Singapore" },
  { flag: "🇦🇺", code: "+61",  label: "Australia" },
  { flag: "🇨🇦", code: "+1",   label: "Canada" },
  { flag: "🇩🇪", code: "+49",  label: "Germany" },
  { flag: "🌍", code: "+",    label: "Other" },
];

const CONTACT_ROWS = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Call Us",
    value: "+91 81093 47584", href: "tel:+918109347584",
    value2: "+91 98019 99829", href2: "tel:+919801999829",
    color: "#1FA0B1", bg: "rgba(181,229,235,0.4)",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.554 4.103 1.523 5.824L0 24l6.339-1.501A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
    label: "WhatsApp", value: "+91 81093 47584", sub: "Quick response on WhatsApp",
    href: "https://wa.me/918109347584", color: "#25D366", bg: "rgba(37,211,102,0.12)",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
      </svg>
    ),
    label: "Email Us", value: "nfnexatech@gmail.com", sub: "We reply within 24 hours",
    href: "mailto:nfnexatech@gmail.com", color: "#E8763A", bg: "rgba(249,225,205,0.55)",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      </svg>
    ),
    label: "Our Office", value: "Mahipalpur, New Delhi – 110037", sub: "Bangali Market, Block B",
    href: "https://maps.google.com/?q=Mahipalpur,New+Delhi", color: "#E8763A", bg: "rgba(249,225,205,0.55)",
  },
];

const NEXT_STEPS = [
  {
    num: "1", title: "We Review", desc: "We go through your requirements", color: "#1FA0B1",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    num: "2", title: "Discussion", desc: "We discuss the scope, timeline & cost", color: "#E8763A",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    num: "3", title: "Proposal", desc: "You'll get a detailed proposal and plan", color: "#7C5CBF",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" />
      </svg>
    ),
  },
  {
    num: "4", title: "Get Started", desc: "Once approved, we start building", color: "#1FA0B1",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

/* ── Styled Input ───────────────────────────────────────── */
const inputCls = "w-full rounded-xl border px-4 py-3 text-[13px] outline-none transition-all focus:border-[#1FA0B1] focus:ring-2 focus:ring-[#1FA0B1]/20";
const inputStyle = { borderColor: "rgba(198,209,215,0.6)", color: "#1a1a1a", backgroundColor: "white" };

/* ── Main Component ─────────────────────────────────────── */
export default function Contact() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", service: "", budget: "", timeline: "", message: "", _honeypot: "",
  });
  const [countryCode, setCountryCode] = useState(COUNTRY_CODES[0]);
  const [ccOpen, setCcOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");

  const set = (k: string, v: string) => { setForm((f) => ({ ...f, [k]: v })); setErrors((e) => ({ ...e, [k]: "" })); };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.service) e.service = "Select a service";
    if (!form.message.trim()) e.message = "Tell us about your project";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form._honeypot) return;
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/xkgnrneg", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        trackEvent("contact_form_submit");
        trackGoogleAdsConversion();
        setForm({ name: "", company: "", email: "", phone: "", service: "", budget: "", timeline: "", message: "", _honeypot: "" });
      } else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-14"
      style={{ backgroundColor: "#FAF7F5" }}
    >
      {/* White overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundColor: "rgba(250,247,245,0.82)", zIndex: 1 }} />

      <div className="relative mx-auto w-[92%] max-w-6xl" style={{ zIndex: 2 }}>

        {/* ── Header ── */}
        <div className="relative mb-8">
          <div className="mb-3 inline-flex items-center gap-3">
            <span className="h-px w-10" style={{ backgroundColor: "rgba(31,160,177,0.5)" }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#1FA0B1" }}>Contact</span>
          </div>
          <h2 className="text-[36px] font-extrabold tracking-tight sm:text-[42px]" style={{ color: "#1a1a1a" }}>
            Get a <span style={{ color: "#1FA0B1" }}>Free</span>{" "}
            <span style={{ color: "#E8763A" }}>Quote</span>{" "}for Web &amp; App Development
          </h2>
          <p className="mt-3 max-w-xl text-[14px] leading-relaxed" style={{ color: "#6B5A5A" }}>
            Tell us about your website, mobile app, SaaS, or software project. Share your requirements with us and we&apos;ll get back to you with the next steps and a project estimate.
          </p>
          {/* Let's Build Together badge */}
          <div className="absolute right-0 top-0 hidden md:block">
            <div className="rotate-6 rounded-2xl border-2 p-3 text-center" style={{ borderColor: "#1FA0B1", backgroundColor: "rgba(181,229,235,0.2)" }}>
              <div className="font-bold leading-tight text-[12px]" style={{ color: "#1FA0B1", fontFamily: "cursive" }}>Let&apos;s<br/>Build<br/>Together</div>
            </div>
          </div>
        </div>

        {/* ── 2-col layout ── */}
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT: Form */}
          <div
            className="rounded-2xl border p-6 shadow-sm"
            style={{ borderColor: "rgba(198,209,215,0.5)", backgroundColor: "rgba(255,255,255,0.97)" }}
          >
            {/* Form header */}
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: "rgba(181,229,235,0.4)" }}>
                <svg className="h-5 w-5" fill="none" stroke="#1FA0B1" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" />
                </svg>
              </div>
              <div>
                <div className="text-[15px] font-bold" style={{ color: "#1a1a1a" }}>Project Information</div>
                <div className="text-[11px]" style={{ color: "#6B5A5A" }}>Fill in the details below and we&apos;ll get back to you within 24 hours.</div>
              </div>
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <div className="text-5xl">🎉</div>
                <div className="text-[16px] font-bold" style={{ color: "#1a1a1a" }}>Message Sent!</div>
                <div className="text-[13px]" style={{ color: "#6B5A5A" }}>We&apos;ll get back to you within 24 hours.</div>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-4">
                {/* Honeypot */}
                <input type="text" name="_honeypot" className="hidden" value={form._honeypot} onChange={(e) => set("_honeypot", e.target.value)} />

                {/* Row 1: Name + Company */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[12px] font-semibold" style={{ color: "#1a1a1a" }}>Your Name <span style={{ color: "#E8763A" }}>*</span></label>
                    <div className="relative">
                      <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" fill="none" stroke="#9B8B8B" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" /></svg>
                      <input className={inputCls + " pl-10"} style={inputStyle} placeholder="Enter your full name" value={form.name} onChange={(e) => set("name", e.target.value)} />
                    </div>
                    {errors.name && <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-1 block text-[12px] font-semibold" style={{ color: "#1a1a1a" }}>Business / Company Name</label>
                    <div className="relative">
                      <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" fill="none" stroke="#9B8B8B" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" /></svg>
                      <input className={inputCls + " pl-10"} style={inputStyle} placeholder="Enter your company name (optional)" value={form.company} onChange={(e) => set("company", e.target.value)} />
                    </div>
                  </div>
                </div>

                {/* Row 2: Email + Phone */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[12px] font-semibold" style={{ color: "#1a1a1a" }}>Email Address <span style={{ color: "#E8763A" }}>*</span></label>
                    <div className="relative">
                      <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" fill="none" stroke="#9B8B8B" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" /></svg>
                      <input type="email" className={inputCls + " pl-10"} style={inputStyle} placeholder="you@example.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
                    </div>
                    {errors.email && <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="mb-1 block text-[12px] font-semibold" style={{ color: "#1a1a1a" }}>Phone / WhatsApp <span style={{ color: "#E8763A" }}>*</span></label>
                    <div className="flex gap-2">
                      {/* Country code — custom compact dropdown */}
                      <div
                        className="relative shrink-0"
                        onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setCcOpen(false); }}
                        tabIndex={-1}
                      >
                        {/* Trigger button */}
                        <button
                          type="button"
                          onClick={() => setCcOpen((o) => !o)}
                          className="flex h-full items-center gap-1 rounded-xl border px-2.5 py-2 text-[12px] font-semibold transition-all hover:border-[#1FA0B1] focus:border-[#1FA0B1] focus:ring-2 focus:ring-[#1FA0B1]/20 focus:outline-none"
                          style={{ borderColor: ccOpen ? "#1FA0B1" : "rgba(198,209,215,0.6)", backgroundColor: "white", color: "#1a1a1a", minWidth: 72 }}
                        >
                          <span className="text-base leading-none">{countryCode.flag}</span>
                          <span className="whitespace-nowrap">{countryCode.code}</span>
                          <svg className={`h-3 w-3 shrink-0 transition-transform ${ccOpen ? "rotate-180" : ""}`} fill="none" stroke="#9B8B8B" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Dropdown list */}
                        {ccOpen && (
                          <div
                            className="absolute left-0 top-full z-50 mt-1 w-52 overflow-hidden rounded-xl border bg-white shadow-xl"
                            style={{ borderColor: "rgba(198,209,215,0.6)" }}
                          >
                            {COUNTRY_CODES.map((c) => (
                              <button
                                key={c.label}
                                type="button"
                                onClick={() => { setCountryCode(c); setCcOpen(false); }}
                                className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-[12px] transition-colors hover:bg-[#1FA0B1]/8"
                                style={{
                                  backgroundColor: c.label === countryCode.label ? "rgba(31,160,177,0.1)" : undefined,
                                  fontWeight: c.label === countryCode.label ? 700 : 500,
                                  color: "#1a1a1a",
                                }}
                              >
                                <span className="text-base leading-none w-5 text-center">{c.flag}</span>
                                <span className="font-bold w-10 shrink-0" style={{ color: "#1FA0B1" }}>{c.code}</span>
                                <span style={{ color: "#6B5A5A" }}>{c.label}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      <input className={inputCls} style={inputStyle} placeholder="98765 43210" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                    </div>
                    {errors.phone && <p className="mt-1 text-[11px] text-red-500">{errors.phone}</p>}
                  </div>
                </div>

                {/* Row 3: Service */}
                <div>
                  <label className="mb-1 block text-[12px] font-semibold" style={{ color: "#1a1a1a" }}>Service Needed <span style={{ color: "#E8763A" }}>*</span></label>
                  <div className="relative">
                    <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" fill="none" stroke="#9B8B8B" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                    <select className={inputCls + " pl-10 appearance-none cursor-pointer"} style={inputStyle} value={form.service} onChange={(e) => set("service", e.target.value)}>
                      <option value="">Select a service</option>
                      {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  {errors.service && <p className="mt-1 text-[11px] text-red-500">{errors.service}</p>}
                </div>


                {/* Message */}
                <div>
                  <label className="mb-1 block text-[12px] font-semibold" style={{ color: "#1a1a1a" }}>Tell Us About Your Project <span style={{ color: "#E8763A" }}>*</span></label>
                  <div className="relative">
                    <svg className="pointer-events-none absolute left-3 top-3.5 h-4 w-4" fill="none" stroke="#9B8B8B" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" /></svg>
                    <textarea rows={4} className={inputCls + " pl-10 resize-none"} style={inputStyle} placeholder="Describe your idea, goals, and any specific requirements..." value={form.message} onChange={(e) => set("message", e.target.value)} />
                  </div>
                  {errors.message && <p className="mt-1 text-[11px] text-red-500">{errors.message}</p>}
                </div>

                {/* File attach */}
                <div className="flex items-center justify-between rounded-xl border px-4 py-3" style={{ borderColor: "rgba(198,209,215,0.5)", backgroundColor: "rgba(250,247,245,0.5)" }}>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5" fill="none" stroke="#1FA0B1" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 1 0 2.828 2.828l6.414-6.586a4 4 0 0 0-5.656-5.656l-6.415 6.585a6 6 0 1 0 8.486 8.486L20.5 13" /></svg>
                    <div>
                      <div className="text-[12px] font-semibold" style={{ color: "#1a1a1a" }}>Attach Files <span className="font-normal" style={{ color: "#9B8B8B" }}>(Optional)</span></div>
                      <div className="text-[10px]" style={{ color: "#6B5A5A" }}>{fileName || "Share reference files, designs, or documents (Max 10MB)"}</div>
                    </div>
                  </div>
                  <button type="button" onClick={() => fileRef.current?.click()}
                    className="flex items-center gap-2 rounded-xl border px-4 py-2 text-[12px] font-semibold transition-all hover:border-[#1FA0B1]"
                    style={{ borderColor: "rgba(198,209,215,0.6)", backgroundColor: "white", color: "#1a1a1a" }}>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-8-4-4m0 0L8 8m4-4v12" /></svg>
                    Choose Files
                  </button>
                  <input ref={fileRef} type="file" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-2xl py-4 text-[14px] font-bold text-white transition-all hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 flex items-center justify-center gap-2"
                  style={{ background: "linear-gradient(135deg,#1FA0B1,#E8763A)", boxShadow: "0 6px 20px rgba(31,160,177,0.35)" }}
                >
                  {status === "loading" ? (
                    <><svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4}/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending...</>
                  ) : (
                    <><svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>Send Project Details →</>
                  )}
                </button>
                {status === "error" && <p className="text-center text-[12px] text-red-500">Something went wrong. Please try again or WhatsApp us directly.</p>}
                <p className="text-center text-[11px]" style={{ color: "#9B8B8B" }}>🔒 Your information is kept private and used only to respond to your enquiry.</p>
              </form>
            )}
          </div>

          {/* RIGHT: Contact info + Steps + Map */}
          <div className="flex flex-col gap-4">

            {/* Get in Touch */}
            <div className="rounded-2xl border p-4 shadow-sm" style={{ borderColor: "rgba(198,209,215,0.5)", backgroundColor: "rgba(255,255,255,0.95)" }}>
              <div className="mb-3 text-[13px] font-bold" style={{ color: "#1a1a1a" }}>Get In Touch Directly</div>
              <div className="space-y-1.5">
                {CONTACT_ROWS.map((row) =>
                  row.href2 ? (
                    /* Call Us — two separate clickable tel: links */
                    <div key={row.label}
                      className="flex items-center gap-2.5 rounded-xl border px-3 py-2"
                      style={{ borderColor: "rgba(198,209,215,0.45)", backgroundColor: "rgba(250,247,245,0.5)" }}>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: row.bg, color: row.color }}>
                        {row.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[11px] font-bold" style={{ color: "#1a1a1a" }}>{row.label}</div>
                        <a href={row.href} className="block text-[11px] font-semibold transition-colors hover:underline" style={{ color: row.color }}>{row.value}</a>
                        <a href={row.href2} className="block text-[11px] font-semibold transition-colors hover:underline" style={{ color: row.color }}>{row.value2}</a>
                      </div>
                    </div>
                  ) : (
                    <a key={row.label} href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 rounded-xl border px-3 py-2 transition-all hover:shadow-sm hover:-translate-y-0.5"
                      style={{ borderColor: "rgba(198,209,215,0.45)", backgroundColor: "rgba(250,247,245,0.5)" }}>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: row.bg, color: row.color }}>
                        {row.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[11px] font-bold" style={{ color: "#1a1a1a" }}>{row.label}</div>
                        <div className="truncate text-[11px] font-semibold" style={{ color: row.color }}>{row.value}</div>
                        {row.sub && <div className="text-[10px]" style={{ color: "#6B5A5A" }}>{row.sub}</div>}
                      </div>
                      <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="#C6D1D7" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* What Happens Next */}
            <div className="rounded-2xl border p-4 shadow-sm" style={{ borderColor: "rgba(198,209,215,0.5)", backgroundColor: "rgba(255,255,255,0.95)" }}>
              <div className="mb-3 text-[13px] font-bold" style={{ color: "#1a1a1a" }}>What Happens Next?</div>
              <div className="flex items-center gap-1">
                {NEXT_STEPS.map((s, i) => (
                  <div key={s.num} className="flex items-center gap-1 flex-1">
                    <div className="flex flex-col items-center text-center w-full">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ backgroundColor: `${s.color}18`, color: s.color }}>{s.icon}</div>
                      <div className="text-[9px] font-bold mt-0.5" style={{ color: s.color }}>{s.title}</div>
                    </div>
                    {i < NEXT_STEPS.length - 1 && (
                      <svg className="h-3 w-3 shrink-0 text-[#C6D1D7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border shadow-sm" style={{ borderColor: "rgba(198,209,215,0.5)" }}>
              <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: "rgba(255,255,255,0.95)" }}>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4" fill="none" stroke="#E8763A" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>
                  <div>
                    <div className="text-[12px] font-bold" style={{ color: "#1a1a1a" }}>Our Location</div>
                    <div className="text-[10px]" style={{ color: "#6B5A5A" }}>Mahipalpur, New Delhi</div>
                  </div>
                </div>
                <a href="https://maps.google.com/?q=Mahipalpur,New+Delhi" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded-xl border px-3 py-1.5 text-[11px] font-semibold transition-all hover:scale-105"
                  style={{ borderColor: "rgba(198,209,215,0.6)", backgroundColor: "white", color: "#1a1a1a" }}>
                  Open in Maps ↗
                </a>
              </div>
              <div style={{ height: 160 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5!2d77.1!3d28.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b3a5b5b5b5b%3A0x0!2sMahipalpur%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="160"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NF Nexa Tech Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
