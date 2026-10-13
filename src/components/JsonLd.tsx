import { siteConfig } from "@/config/site";
import { faqs } from "@/data/faqs"; // Phase 4: canonical source

/**
 * Global JSON-LD structured data — injected once in the root layout via page.tsx.
 *
 * Schema types emitted:
 *   1. Organization          — Brand knowledge panel, sitelinks
 *   2. WebSite               — Sitelinks search box
 *   3. LocalBusiness         — Local pack / Maps integration
 *   4. ProfessionalService   — Professional service rich results
 *   5. FAQPage               — FAQ accordion in SERPs (homepage FAQs)
 *   6. BreadcrumbList (home) — Breadcrumb trail in SERPs
 *
 * Phase 7: openingHoursSpecification now reads from siteConfig.businessHours
 *          so Footer, Contact, and JSON-LD all share one source of truth.
 *
 * Phase 15: All LocalBusiness entities representing the same physical office
 *           use the canonical @id: https://nfnexatech.in/#localbusiness
 *           Location-specific pages use sameAs to reference this entity.
 *
 * All are Server Component-safe — no "use client" needed.
 */

// Phase 20: All address constants now delegate to siteConfig.contact.
// Changing siteConfig.contact.* in src/config/site.ts is the only edit
// required to keep every JSON-LD schema consistent.
const STREET   = siteConfig.contact.streetAddress;
const CITY     = siteConfig.contact.city;
const REGION   = siteConfig.contact.state;
const POSTAL   = siteConfig.contact.postalCode;
const COUNTRY  = siteConfig.contact.countryCode;
// Phase 20.1: Coordinates now read from siteConfig.geo (owner-confirmed,
// 13 Oct 2026). Updating siteConfig.geo in site.ts is the only change needed
// to keep LocalBusiness and ProfessionalService geo blocks in sync.
const LAT      = siteConfig.geo.lat;
const LNG      = siteConfig.geo.lng;

const postalAddress = {
  "@type":           "PostalAddress",
  streetAddress:     STREET,
  addressLocality:   CITY,
  addressRegion:     REGION,
  postalCode:        POSTAL,
  addressCountry:    COUNTRY,
};

// ── 1. Organization ───────────────────────────────────────────────────────────
function orgSchema() {
  return {
    "@context":    "https://schema.org",
    "@type":       "Organization",
    "@id":         `${siteConfig.url}/#organization`,
    name:          siteConfig.name,
    legalName:     "NF Nexa Tech",
    url:           siteConfig.url,
    logo: {
      "@type":     "ImageObject",
      url:         `${siteConfig.url}/logo.png`,
      width:       512,
      height:      512,
    },
    description:   siteConfig.description,
    foundingDate:  String(siteConfig.foundedYear),
    founder: {
      "@type":     "Person",
      // Stable @id so Google links this Person across all pages that reference founder
      "@id":       `${siteConfig.url}/#founder`,
      name:        siteConfig.founder,
      jobTitle:    "Founder & CEO",
      worksFor:    { "@id": `${siteConfig.url}/#organization` },
    },
    address:       postalAddress,
    contactPoint: {
      "@type":            "ContactPoint",
      telephone:          siteConfig.contact.phone,
      contactType:        "Customer Support",
      email:              siteConfig.contact.email,
      areaServed:         "Worldwide",
      availableLanguage:  "English",
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      // Phase 14: Google Maps Business Profile URL — confirmed from codebase (Testimonials.jsx).
      "https://maps.app.goo.gl/D7jqDzLm3ampPqAc6",
    ],
    knowsAbout: [
      "Web Development",
      "Android App Development",
      "Flutter App Development",
      "UI/UX Design",
      "SaaS MVP Development",
      "Next.js",
      "React",
      "Firebase",
      "Node.js",
    ],
    // Phase 16: Co-founder added to Organization entity.
    employee: [
      { "@id": `${siteConfig.url}/#founder` },
      { "@id": `${siteConfig.url}/#cofounder` },
    ],
    // numberOfEmployees intentionally omitted — no authoritative headcount
    // is available in the project configuration. Add when confirmed by owner.
    serviceType: siteConfig.services.map((s) => s.name),
  };
}

// ── 2. WebSite ────────────────────────────────────────────────────────────────
function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type":    "WebSite",
    "@id":      `${siteConfig.url}/#website`,
    name:       siteConfig.name,
    url:        siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-IN",
    publisher:  { "@id": `${siteConfig.url}/#organization` },
  };
}

// ── 3. LocalBusiness ──────────────────────────────────────────────────────────
// Phase 15: Canonical @id — all location pages reference this entity via sameAs.
function localBusinessSchema() {
  return {
    "@context":          "https://schema.org",
    "@type":             "LocalBusiness",
    // Canonical LocalBusiness @id — used consistently across all pages.
    "@id":               `${siteConfig.url}/#localbusiness`,
    name:                siteConfig.name,
    description:         siteConfig.description,
    url:                 siteConfig.url,
    telephone:           siteConfig.contact.phone,
    email:               siteConfig.contact.email,
    image:               `${siteConfig.url}/logo.png`,
    priceRange:          "₹₹",
    currenciesAccepted:  "INR, USD",
    paymentAccepted:     "Bank Transfer, UPI, International Wire",
    address:             postalAddress,
    geo: {
      "@type":    "GeoCoordinates",
      latitude:   LAT,
      longitude:  LNG,
    },
    // Phase 7: Opening hours from siteConfig.businessHours — single source of truth.
    openingHoursSpecification: siteConfig.businessHours.map((h) => ({
      "@type":      "OpeningHoursSpecification",
      dayOfWeek:    h.daysOfWeek,
      opens:        h.opens,
      closes:       h.closes,
    })),
    areaServed: [
      { "@type": "City", name: "New Delhi" },
      { "@type": "City", name: "Delhi" },
      { "@type": "AdministrativeArea", name: "Delhi NCR" },
      // P2: Bihar service cities added — consistent with P1 location pages
      { "@type": "City", name: "Patna" },
      { "@type": "City", name: "Darbhanga" },
      { "@type": "City", name: "Jhanjharpur" },
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Australia" },
    ],
    sameAs: [
      // Phase 14: Google Business Profile URL confirmed from codebase.
      "https://maps.app.goo.gl/D7jqDzLm3ampPqAc6",
      siteConfig.social.linkedin,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name:    "Software Development Services",
      itemListElement: siteConfig.services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name:    s.name,
          url:     `${siteConfig.url}/services/${s.slug}`,
        },
      })),
    },
  };
}

// ── Phase 15: Co-Founder Person schema ────────────────────────────────────────────
// Saheb Alam is visibly identified as Co-Founder on the About page and in team data.
// No LinkedIn URL or social profile added — not confirmed available in codebase.
function coFounderSchema() {
  return {
    "@context": "https://schema.org",
    "@type":    "Person",
    "@id":      `${siteConfig.url}/#cofounder`,
    name:       siteConfig.coFounder,
    jobTitle:   "Co-Founder",
    worksFor:   { "@id": `${siteConfig.url}/#organization` },
  };
}

// ── 4. ProfessionalService ────────────────────────────────────────────────────
function professionalServiceSchema() {
  return {
    "@context":       "https://schema.org",
    "@type":          "ProfessionalService",
    "@id":            `${siteConfig.url}/#professionalservice`,
    name:             siteConfig.name,
    description:      siteConfig.description,
    url:              siteConfig.url,
    telephone:        siteConfig.contact.phone,
    email:            siteConfig.contact.email,
    address:          postalAddress,
    geo: {
      "@type":    "GeoCoordinates",
      latitude:   LAT,
      longitude:  LNG,
    },
    areaServed:       "Worldwide",
    serviceType:      "Software Development Agency",
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name:    "Digital Product Development Services",
      itemListElement: siteConfig.services.map((s, i) => ({
        "@type":    "ListItem",
        position:   i + 1,
        item: {
          "@type":       "Service",
          name:          s.name,
          url:           `${siteConfig.url}/services/${s.slug}`,
          provider:      { "@id": `${siteConfig.url}/#organization` },
          areaServed:    "Worldwide",
          serviceType:   s.name,
        },
      })),
    },
  };
}

// ── 5. FAQPage ────────────────────────────────────────────────────────────────
function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type":    "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type":         "Question",
      name:            faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text:    faq.answer,
      },
    })),
  };
}


// ── 6. BreadcrumbList (Homepage) ──────────────────────────────────────────────
function homeBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type":    "BreadcrumbList",
    itemListElement: [
      {
        "@type":  "ListItem",
        position: 1,
        name:     "Home",
        item:     siteConfig.url,
      },
    ],
  };
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function JsonLd() {
  const schemas = [
    orgSchema(),
    websiteSchema(),
    localBusinessSchema(),
    coFounderSchema(),
    professionalServiceSchema(),
    faqSchema(),
    // Phase 17: Single-item BreadcrumbList for homepage removed — a breadcrumb
    // containing only the homepage itself provides no navigation value to crawlers.
    // BreadcrumbList is retained on inner pages where it represents real hierarchy.
    // homeBreadcrumbSchema() — intentionally omitted.
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
