/**
 * Analytics event tracking helper.
 * Wraps GA4 gtag() and Vercel Analytics track().
 *
 * Safe to call from any client component — silently no-ops
 * when analytics scripts are not loaded.
 */

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function gtag(...args: any[]): void;
}

export type TrackEventName =
  | "cta_click"
  | "calendly_open"
  | "calendly_close"
  | "whatsapp_click"
  | "form_submit_start"
  | "form_submit_success"
  | "form_submit_error"
  | "blog_read"
  | "service_view";

interface EventProps {
  label?: string;
  value?: string | number;
  page?: string;
  [key: string]: string | number | undefined;
}

export function trackEvent(name: TrackEventName, props?: EventProps): void {
  try {
    // GA4
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", name, {
        event_category: "engagement",
        ...props,
      });
    }
  } catch {
    // Never crash the app for analytics failures
  }
}
