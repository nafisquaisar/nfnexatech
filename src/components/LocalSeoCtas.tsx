"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/config/site";

export function StartProjectButton({ label = "Start Your Project", className = "" }: { label?: string; className?: string }) {
  return (
    <Link
      href="/start-project"
      onClick={() => trackEvent("cta_click", { label: "local_seo_start_project" })}
      className={`inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.99] ${className}`}
      style={{ background: "linear-gradient(135deg,#1FA0B1,#E8763A)", boxShadow: "0 6px 20px rgba(31,160,177,0.3)" }}
    >
      {label}
    </Link>
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
      className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.99]"
      style={{ background: "#25D366", boxShadow: "0 6px 20px rgba(37,211,102,0.30)" }}
    >
      {/* WhatsApp icon */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.112 1.523 5.837L.057 23.857a.5.5 0 00.614.612l6.094-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.031-1.368l-.36-.214-3.733.9.934-3.641-.236-.374A9.9 9.9 0 012.1 12C2.1 6.533 6.533 2.1 12 2.1c5.466 0 9.9 4.433 9.9 9.9 0 5.466-4.434 9.9-9.9 9.9z"/>
      </svg>
      WhatsApp Us
    </a>
  );
}

