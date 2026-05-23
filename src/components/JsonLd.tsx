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
    </>
  );
}
