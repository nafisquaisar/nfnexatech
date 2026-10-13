/**
 * Central site configuration.
 * Import this instead of hard-coding URLs, social links, or brand strings.
 *
 * Phase 20 — Address Consistency Fix
 *   Confirmed authoritative address: Google Business Profile
 *   (https://maps.app.goo.gl/D7jqDzLm3ampPqAc6, verified 13 Oct 2026).
 *   Stale address string (Flat 301, Janki Hari Niwas, Block B, Bengali Market)
 *   replaced with GBP-confirmed locality address across all consumers.
 *   streetAddress + postalCode extracted as discrete fields so JSON-LD schemas
 *   and visible components share one source of truth.
 *
 * Phase 20.1 — Geo-Coordinate Centralisation
 *   Owner confirmed coordinates from Google Maps on 13 Oct 2026:
 *   lat 28.539194, lng 77.126583 (NF Nexa Tech GBP pin, Mahipalpur, New Delhi).
 *   All JSON-LD GeoCoordinates blocks now read from siteConfig.geo.
 */
export const siteConfig = {
  name: "NF Nexa Tech",
  tagline: "Digital Product Studio",
  description:
    "NF Nexa Tech is a software development company based in Mahipalpur, New Delhi. We build websites, web applications, Android and Flutter apps, SaaS products, and custom software for businesses in Delhi and across India.",
  url: "https://nfnexatech.in",
  locale: "en_IN",
  ogImage: "/og-default.png",

  contact: {
    email: "nfnexatech@gmail.com",
    phone: "+91 8109347584",
    phone2: "+91 9801999829",
    /**
     * Authoritative address — verified against Google Business Profile
     * on 13 October 2026. No flat number or market name is included
     * because neither has been independently confirmed from an official
     * document (UDYAM certificate or GBP owner panel).
     * Owner must update this field once additional details are verified.
     */
    address: "Mahipalpur Village, Mahipalpur, New Delhi, Delhi 110037",
    /** streetAddress field for Schema.org PostalAddress (JSON-LD consumers). */
    streetAddress: "Mahipalpur Village, Mahipalpur",
    postalCode: "110037",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    countryCode: "IN",
  },

  /**
   * Phase 20.1 — Owner-confirmed business location coordinates.
   * Source: Google Maps pin for NF Nexa Tech GBP listing, confirmed 13 Oct 2026.
   * lat 28.539194, lng 77.126583 — Mahipalpur Village, Mahipalpur, New Delhi.
   * All JSON-LD GeoCoordinates blocks (LocalBusiness, ProfessionalService,
   * and location/service pages) read from here.
   */
  geo: {
    lat: 28.539194,
    lng: 77.126583,
  },

  social: {
    linkedin: "https://www.linkedin.com/in/nfnexatech",
    instagram: "https://www.instagram.com/nfnexatech/",
    facebook: "https://www.facebook.com/nfnexatech",
    whatsapp: "https://wa.me/918109347584",
    whatsapp2: "https://wa.me/919801999829",
  },

  founder: "Nafis Quaisar",
  coFounder: "Saheb Alam",
  foundedYear: 2023,
  foundedDate: "25 October 2023",

  services: [
    { name: "Web Development", slug: "web-development" },
    { name: "Android App Development", slug: "android-app-development" },
    { name: "Flutter App Development", slug: "flutter-app-development" },
    { name: "UI/UX Design", slug: "ui-ux-design" },
    { name: "Backend & API Development", slug: "backend-api-development" },
    { name: "SaaS & MVP Development", slug: "saas-mvp-development" },
  ],

  /**
   * Company stats — single source of truth (Phase 1).
   *
   * Conflict resolution:
   *   Happy Clients: Hero.tsx and About.jsx both showed "30+".
   *     CompanyDetails.jsx showed "10+" — treated as outdated.
   *     Authoritative value: "30+".
   *     ⚠️ BUSINESS DECISION: Confirm actual client count.
   *
   *   Years of Experience: Founded October 2023, current year 2026 = ~3 years.
   *     site.ts previously had "4+" which was inaccurate.
   *     Authoritative value: "3+".
   *     ⚠️ BUSINESS DECISION: Confirm preferred phrasing.
   *
   *   Projects Delivered: "70+" was consistent; retained as-is.
   *     ⚠️ BUSINESS DECISION: Confirm actual project count.
   *
   *   "100% On-Time Delivery" removed (Phase 11) — unverifiable absolute claim.
   *   Replaced with "Transparent Project Timelines".
   */
  stats: [
    { value: "70+",   label: "Projects Delivered" },
    { value: "30+",   label: "Happy Clients" },
    { value: "3+",    label: "Years of Experience" },
    // Phase 3: "Since 2023" replaces a year-count that would drift annually.
    // Consumers that show a number (Hero.tsx) use the first two stats.
    // Consumers that show all four (Delhi page) will show "Since 2023" instead of "On Time".
    { value: "Since 2023", label: "Operating Since" },
  ],

  /**
   * Business opening hours — single source of truth (Phase 7).
   *
   * Conflict found:
   *   Footer showed: "Mon – Sat, 10:00 AM – 7:00 PM"
   *   JSON-LD had:   Mon-Fri 09:00-19:00 AND Sat 10:00-16:00 (different Saturday hours)
   *
   * Resolution: Footer value used as the human-visible UI truth.
   * ⚠️ BUSINESS DECISION REQUIRED: Confirm actual hours. This object is the
   * authoritative source for Footer, Contact page, and LocalBusiness JSON-LD.
   */
  businessHours: [
    {
      daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as string[],
      opens: "00:00",
      closes: "23:59",
      displayLabel: "Available 24/7",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
