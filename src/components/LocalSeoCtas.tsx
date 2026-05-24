"use client";

import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/config/site";

export function CalendlyCtaButton({ label = "Book Free Consultation", className = "" }: { label?: string; className?: string }) {
  return (
    <button
      onClick={() => {
        trackEvent("cta_click", { label: "local_seo_calendly" });
        window.dispatchEvent(new CustomEvent("open-calendly"));
      }}
      className={`rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-3.5 text-sm font-bold text-white transition hover:opacity-90 ${className}`}
    >
      {label}
    </button>
  );
}

export function WhatsAppCtaButton({ city, service }: { city: string; service: string }) {
  const msg = encodeURIComponent(`Hi NF Nexa Tech! I'm looking for a ${service} in ${city}.`);
  return (
    <a
      href={`${siteConfig.social.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { label: `local_seo_${city.toLowerCase()}` })}
      className="rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-7 py-3.5 text-sm font-bold text-[#25D366] transition hover:bg-[#25D366]/20"
    >
      WhatsApp Us →
    </a>
  );
}
