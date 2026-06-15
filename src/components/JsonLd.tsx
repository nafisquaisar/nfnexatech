import { siteConfig } from "@/config/site";
import { faqs } from "@/data/content";

/**
 * Global JSON-LD structured data — injected once in the root layout via page.tsx.
 *
 * Schema types emitted:
 *   1. Organization          — Brand knowledge panel, sitelinks
 *   2. WebSite               — Sitelinks search box
 *   3. LocalBusiness         — Local pack / Maps integration
 *   4. ProfessionalService   — Professional service rich results
 *   5. FAQPage               — FAQ accordion in SERPs (homepage FAQs)
 *   6. AggregateRating       — Star rating snippet
 *   7. BreadcrumbList (home) — Breadcrumb trail in SERPs
 *
 * All are Server Component-safe — no "use client" needed.
 */

const STREET   = "Flat 301, Janki Hari Niwas, Block B, Bengali Market, Mahipalpur";
const CITY     = "New Delhi";
const REGION   = "Delhi";
const POSTAL   = "110037";
const COUNTRY  = "IN";
const LAT      = 28.5357;
const LNG      = 77.1199;

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
      name:        siteConfig.founder,
      jobTitle:    "Founder & Lead Developer",
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
      siteConfig.social.github,
      siteConfig.social.facebook,
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
    numberOfEmployees: { "@type": "QuantitativeValue", value: 5 },
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
    potentialAction: {
      "@type":  "SearchAction",
      target: {
        "@type":      "EntryPoint",
        urlTemplate:  `${siteConfig.url}/projects?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ── 3. LocalBusiness ──────────────────────────────────────────────────────────
function localBusinessSchema() {
  return {
    "@context":          "https://schema.org",
    "@type":             "LocalBusiness",
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
    openingHoursSpecification: [
      {
        "@type":      "OpeningHoursSpecification",
        dayOfWeek:    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens:        "09:00",
        closes:       "19:00",
      },
      {
        "@type":      "OpeningHoursSpecification",
        dayOfWeek:    ["Saturday"],
        opens:        "10:00",
        closes:       "16:00",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Australia" },
    ],
    aggregateRating: {
      "@type":       "AggregateRating",
      ratingValue:   "4.9",
      reviewCount:   "12",
      bestRating:    "5",
      worstRating:   "1",
    },
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
    aggregateRating: {
      "@type":       "AggregateRating",
      ratingValue:   "4.9",
      reviewCount:   "12",
      bestRating:    "5",
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

// ── 6. AggregateRating + Reviews ─────────────────────────────────────────────
function reviewSchema() {
  return {
    "@context":      "https://schema.org",
    "@type":         "Organization",
    "@id":           `${siteConfig.url}/#organization`,
    name:            siteConfig.name,
    aggregateRating: {
      "@type":       "AggregateRating",
      ratingValue:   "4.9",
      reviewCount:   "12",
      bestRating:    "5",
      worstRating:   "1",
    },
    review: [
      {
        "@type":        "Review",
        author:         { "@type": "Person", name: "Arjun Mehta" },
        datePublished:  "2024-09-15",
        reviewBody:     "NF Nexa Tech delivered our music streaming app on time and exceeded every benchmark we set. The ExoPlayer integration and UI polish were truly world-class.",
        reviewRating:   { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type":        "Review",
        author:         { "@type": "Person", name: "Priya Sharma" },
        datePublished:  "2024-11-02",
        reviewBody:     "They completely transformed how we manage 1,200+ students. The platform replaced all our spreadsheets in two weeks. Support has been excellent.",
        reviewRating:   { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type":        "Review",
        author:         { "@type": "Person", name: "Rajesh Gupta" },
        datePublished:  "2025-01-20",
        reviewBody:     "The inventory system reduced our nightly stock-count from 90 minutes to 8 minutes. Wastage dropped by 68%. The ROI was immediate and measurable.",
        reviewRating:   { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
    ],
  };
}

// ── 7. BreadcrumbList (Homepage) ──────────────────────────────────────────────
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
    professionalServiceSchema(),
    faqSchema(),
    reviewSchema(),
    homeBreadcrumbSchema(),
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
