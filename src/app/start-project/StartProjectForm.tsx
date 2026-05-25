"use client";

import { useState, useRef } from "react";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/config/site";

/* ── Form field types ───────────────────────────────────── */
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  _honeypot: string;
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

/* ── Main form component ────────────────────────────────── */
export default function StartProjectForm() {
  const ENDPOINT =
    process.env.NEXT_PUBLIC_FORMSPREE_URL ||
    "https://formspree.io/f/REPLACE_WITH_YOUR_ID";

  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
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
    trackEvent("form_submit_start", { label: `start_project_${data.service}` });

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Project Inquiry: ${data.service}`,
          name: data.name,
          email: data.email,
          phone: data.phone || "Not provided",
          company: data.company || "Not provided",
          service: data.service,
          budget: data.budget || "Not specified",
          timeline: data.timeline || "Not specified",
          message: data.message,
          source: "start-project-page",
        }),
      });

      if (res.ok) {
        setStatus("success");
        lastSubmit.current = Date.now();
        trackEvent("form_submit_success", {
          label: `start_project_${data.service}`,
        });
        setData({
          name: "",
          email: "",
          phone: "",
          company: "",
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
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
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
            Project Brief Received!
          </h3>
          <p className="mb-6 text-sm text-slate-400">
            Thank you, {data.name || "there"}! We&apos;ll review your project
            and get back to you within 4 business hours with a tailored
            proposal.
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
            Submit another project
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
            <Field label="Your Name *" id="sp-name" error={errors.name}>
              <input
                id="sp-name"
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

            <Field label="Email Address *" id="sp-email" error={errors.email}>
              <input
                id="sp-email"
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
            <Field label="Phone (optional)" id="sp-phone">
              <input
                id="sp-phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={data.phone}
                onChange={(e) => set("phone", e.target.value)}
                autoComplete="tel"
                className={inputCls}
              />
            </Field>

            <Field label="Company (optional)" id="sp-company">
              <input
                id="sp-company"
                type="text"
                placeholder="Your Company Name"
                value={data.company}
                onChange={(e) => set("company", e.target.value)}
                autoComplete="organization"
                className={inputCls}
              />
            </Field>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field
              label="Service Needed *"
              id="sp-service"
              error={errors.service}
            >
              <select
                id="sp-service"
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

            <Field label="Project Budget" id="sp-budget">
              <select
                id="sp-budget"
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
          </div>

          <div className="mt-4">
            <Field label="Ideal Timeline" id="sp-timeline">
              <select
                id="sp-timeline"
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
            <Field
              label="Tell Us About Your Project *"
              id="sp-message"
              error={errors.message}
            >
              <textarea
                id="sp-message"
                rows={5}
                placeholder="Describe your idea, goals, target audience, and any specific requirements…"
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
              "Submit Project Brief →"
            )}
          </button>

          <p className="mt-3 text-center text-xs text-slate-600">
            We respond within 4 business hours · No spam ever
          </p>
        </form>
      )}
    </div>
  );
}
