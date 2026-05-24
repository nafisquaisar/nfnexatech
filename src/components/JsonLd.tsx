import { siteConfig } from "@/config/site";

/**
 * Injects JSON-LD structured data for:
 *   - Organization (rich results for brand knowledge panel)
 *   - WebSite (enables sitelinks search box)
 *
 * This is a Server Component — no "use client" needed.
 * Place it once in the root layout or per-page layout.
 */
export default function JsonLd() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    foundingDate: String(siteConfig.foundedYear),
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "34, Sneh Nagar, Siddharth Enclave, Ayodhya Nagar",
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.state,
      addressCountry: siteConfig.contact.countryCode,
      postalCode: "462022",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "Customer Support",
      email: siteConfig.contact.email,
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.facebook,
    ],
    serviceType: siteConfig.services.map((s) => s.name),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/projects?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    image: `${siteConfig.url}/logo.png`,
    priceRange: "₹₹",
    currenciesAccepted: "INR, USD",
    paymentAccepted: "Bank Transfer, UPI, International Wire",
    address: {
      "@type": "PostalAddress",
      streetAddress: "34, Sneh Nagar, Siddharth Enclave, Ayodhya Nagar",
      addressLocality: "Bhopal",
      addressRegion: "Madhya Pradesh",
      postalCode: "462022",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.2599,
      longitude: 77.4126,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: siteConfig.services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${siteConfig.url}/services/${s.slug}`,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
