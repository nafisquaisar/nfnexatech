"use client";

import { useState, useRef } from "react";
import SectionTitle from "./SectionTitle";
import { trackEvent } from "@/lib/analytics";
import { trackGoogleAdsConversion } from "@/lib/googleAds";
import { siteConfig } from "@/config/site";

/* ── Form field types ───────────────────────────────────── */
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  _honeypot: string; // spam trap — must stay empty
}

type Status = "idle" | "loading" | "success" | "error";

/* ── Field options ──────────────────────────────────────── */
const SERVICE_OPTIONS = [
  "Web Development",
  "Android App Development",
  "Flutter App Development",
  "UI/UX Design",
  "Backend & API Development",
  "SaaS MVP Development",
  "Other / Not Sure Yet",
];

const BUDGET_OPTIONS = [
  "Under ₹1 Lakh",
  "₹1L – ₹3L",
  "₹3L – ₹7L",
  "₹7L – ₹15L",
  "₹15L+",
  "To be discussed",
];

const TIMELINE_OPTIONS = [
  "ASAP (< 1 month)",
  "1–2 months",
  "3–6 months",
  "6+ months",
  "Flexible",
];

/* ── Input component ────────────────────────────────────── */
function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-400"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus:border-cyan-400/60 focus:outline-none focus:ring-0";

const selectCls =
  "w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-slate-100 transition focus:border-cyan-400/60 focus:outline-none";

/* ── Validation ─────────────────────────────────────────── */
function validate(data: FormData): Partial<Record<keyof FormData, string>> {
  const errors: Partial<Record<keyof FormData, string>> = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    errors.name = "Please enter your name (min 2 characters)";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address";
  if (!data.service) errors.service = "Please select a service";
  if (!data.message.trim() || data.message.trim().length < 20)
    errors.message = "Please describe your project (min 20 characters)";
  return errors;
}

/* ── Main component ─────────────────────────────────────── */
export default function Contact() {
  const ENDPOINT =
    process.env.NEXT_PUBLIC_FORMSPREE_URL ||
    "https://formspree.io/f/meedldrg";

  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    _honeypot: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [status, setStatus] = useState<Status>("idle");
  const lastSubmit = useRef<number>(0);

  const set = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field])
      setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (data._honeypot) return;

    // Rate limit: 60s between submissions
    const now = Date.now();
    if (now - lastSubmit.current < 60_000) {
      setStatus("error");
      return;
    }

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    trackEvent("form_submit_start", { label: data.service });

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || "Not provided",
          service: data.service,
          budget: data.budget || "Not specified",
          timeline: data.timeline || "Not specified",
          message: data.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        lastSubmit.current = Date.now();
        trackEvent("form_submit_success", { label: data.service });
        // Fire Google Ads conversion — only on confirmed API success
        trackGoogleAdsConversion();

        setData({
          name: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          timeline: "",
          message: "",
          _honeypot: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus("error");
      trackEvent("form_submit_error");
    }
  };

  return (
    <section id="contact" className="bg-slate-900 py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let's discuss your next project"
          subtitle="Tell us about your idea. We respond within 4 business hours."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* ── Form ── */}
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 sm:p-8">
            {status === "success" ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 ring-2 ring-emerald-500/20">
                  <svg
                    className="h-8 w-8 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Message Sent!
                </h3>
                <p className="mb-6 text-sm text-slate-400">
                  Thank you, {data.name || "there"}! We&apos;ll get back to you
                  within 4 business hours.
                </p>
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-5 py-2.5 text-sm font-semibold text-[#25D366] transition hover:bg-[#25D366]/20"
                >
                  Or WhatsApp us for faster reply
                </a>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-xs text-slate-600 underline hover:text-slate-400"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot — hidden from real users */}
                <input
                  type="text"
                  name="_honeypot"
                  value={data._honeypot}
                  onChange={(e) => set("_honeypot", e.target.value)}
                  className="sr-only"
                  tabIndex={-1}
                  aria-hidden="true"
                  autoComplete="off"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your Name *" id="contact-name" error={errors.name}>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Arjun Mehta"
                      value={data.name}
                      onChange={(e) => set("name", e.target.value)}
                      autoComplete="name"
                      className={inputCls}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                    />
                  </Field>

                  <Field label="Email Address *" id="contact-email" error={errors.email}>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="you@company.com"
                      value={data.email}
                      onChange={(e) => set("email", e.target.value)}
                      autoComplete="email"
                      className={inputCls}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                    />
                  </Field>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field label="Phone (optional)" id="contact-phone">
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={data.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      autoComplete="tel"
                      className={inputCls}
                    />
                  </Field>

                  <Field label="Service Needed *" id="contact-service" error={errors.service}>
                    <select
                      id="contact-service"
                      value={data.service}
                      onChange={(e) => set("service", e.target.value)}
                      className={selectCls}
                      aria-required="true"
                      aria-invalid={!!errors.service}
                    >
                      <option value="">Select a service…</option>
                      {SERVICE_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field label="Project Budget" id="contact-budget">
                    <select
                      id="contact-budget"
                      value={data.budget}
                      onChange={(e) => set("budget", e.target.value)}
                      className={selectCls}
                    >
                      <option value="">Select budget range…</option>
                      {BUDGET_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Ideal Timeline" id="contact-timeline">
                    <select
                      id="contact-timeline"
                      value={data.timeline}
                      onChange={(e) => set("timeline", e.target.value)}
                      className={selectCls}
                    >
                      <option value="">Select timeline…</option>
                      {TIMELINE_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label="Tell Us About Your Project *" id="contact-message" error={errors.message}>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Describe your idea, goals, and any specific requirements…"
                      value={data.message}
                      onChange={(e) => set("message", e.target.value)}
                      className={inputCls}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                    />
                  </Field>
                </div>

                {/* Error banner */}
                {status === "error" && (
                  <p
                    role="alert"
                    className="mt-3 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400"
                  >
                    Something went wrong. Please try again or{" "}
                    <a
                      href={siteConfig.social.whatsapp}
                      className="underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp us directly
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-3.5 text-sm font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    "Send Project Brief →"
                  )}
                </button>

                <p className="mt-3 text-center text-xs text-slate-600">
                  We respond within 4 business hours · No spam ever
                </p>
              </form>
            )}
          </div>

          {/* ── Contact info sidebar ── */}
          <div className="space-y-5">
            {/* Direct contact */}
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Prefer to reach out directly?
              </p>

              <div className="space-y-3">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:text-white"
                  onClick={() => trackEvent("cta_click", { label: "phone" })}
                >
                  <span className="text-xl">📞</span>
                  {siteConfig.contact.phone}
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:text-white"
                  onClick={() => trackEvent("cta_click", { label: "email" })}
                >
                  <span className="text-xl">✉️</span>
                  {siteConfig.contact.email}
                </a>

                <a
                  href={`${siteConfig.social.whatsapp}?text=${encodeURIComponent("Hi NF Nexa Tech! I have a project I'd like to discuss.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-[#25D366]/20 bg-[#25D366]/5 px-4 py-3 text-sm font-semibold text-[#25D366] transition hover:border-[#25D366]/40 hover:bg-[#25D366]/10"
                  onClick={() => trackEvent("whatsapp_click", { label: "contact_sidebar" })}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us Now
                </a>
              </div>
            </div>

            {/* Response time */}
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                What happens next
              </p>
              <ol className="space-y-3">
                {[
                  ["📩", "We review your brief within 4 hours"],
                  ["📞", "Free 30-min discovery call scheduled"],
                  ["📋", "Detailed proposal & timeline delivered"],
                  ["🚀", "Project kickoff on your timeline"],
                ].map(([icon, text], i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="mt-0.5 text-base">{icon}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="NF Nexa Tech office location — Mahipalpur, New Delhi"
                className="h-48 w-full border-0"
                src="https://maps.google.com/maps?q=G4QG%2BMJ+Mahipalpur+Village+Mahipalpur+New+Delhi+Delhi+110037+India&t=&z=16&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
