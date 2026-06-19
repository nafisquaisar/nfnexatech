/**
 * Google Ads Conversion Tracking Utility
 *
 * Centralises the Conversion ID and Label so they are defined in exactly
 * one place. Every form and CTA that should create a Google Ads conversion
 * calls trackGoogleAdsConversion() — never window.gtag directly.
 *
 * Rules:
 *  - Only called AFTER a confirmed lead event (API 200, user click)
 *  - Never called on page load, validation failure, or API error
 *  - Silent no-op when gtag is not loaded (dev, ad-blocker, SSR)
 *
 * Conversion details:
 *  Conversion ID:    AW-18240874915
 *  Conversion Label: L4frCLrA_MEcEKPT9vlD
 */

// ── Global type declaration ────────────────────────────────────────────────
// Extends the Window interface so TypeScript knows about gtag without a
// third-party @types package. The global ambient declaration in analytics.ts
// also covers this, but we redeclare here so this file is self-contained.
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

/** Google Ads account-level Conversion ID (shared across all conversions). */
const GOOGLE_ADS_ID = "AW-18240874915";

/** Specific conversion action label for a confirmed lead. */
const CONVERSION_LABEL = "L4frCLrA_MEcEKPT9vlD";

/** Full send_to value used in the gtag conversion call. */
const SEND_TO = `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`;

export interface ConversionOptions {
  /**
   * Optional monetary value of the conversion.
   * Useful for weighted bidding — e.g. pass the selected budget tier.
   */
  value?: number;
  /** ISO 4217 currency code. Defaults to "INR". */
  currency?: string;
}

/**
 * Fire a Google Ads conversion event.
 *
 * @param options - Optional value and currency for the conversion.
 *
 * @example
 * // Basic — on confirmed form submission success:
 * trackGoogleAdsConversion();
 *
 * @example
 * // With value — on high-budget lead:
 * trackGoogleAdsConversion({ value: 100000, currency: "INR" });
 */
export function trackGoogleAdsConversion(options: ConversionOptions = {}): void {
  try {
    // SSR guard — never runs on the server
    if (typeof window === "undefined") return;

    // No-op when gtag has not been loaded (dev without GA env var, ad-blockers)
    if (typeof window.gtag !== "function") return;

    const { value, currency = "INR" } = options;

    window.gtag("event", "conversion", {
      send_to: SEND_TO,
      // Only include value/currency when a numeric value is provided
      ...(value !== undefined && { value, currency }),
    });
  } catch {
    // Analytics failures must never crash the application
  }
}
