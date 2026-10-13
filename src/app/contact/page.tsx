import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

/* ── OG image ─────────────────────────────────────────────── */
const pageOgImage = ogImage({
  title: "Contact NF Nexa Tech",
  category: "📍 Mahipalpur, New Delhi",
  type: "page",
});

/* ── SEO metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  // Root layout template appends "| NF Nexa Tech"
  // Final: "Contact NF Nexa Tech — Get a Free Quote | NF Nexa Tech"
  title: "Contact NF Nexa Tech — Get a Free Quote",
  description:
    "Get in touch with NF Nexa Tech — a software development company based in Mahipalpur, New Delhi. Contact us for web development, Android apps, Flutter apps, SaaS MVPs, and UI/UX design. Free consultation available.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact NF Nexa Tech — Get a Free Quote | NF Nexa Tech",
    description:
      "Contact NF Nexa Tech for web development, mobile apps, and SaaS products. Delhi-based software company. Same-day response guaranteed.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [pageOgImage],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nfnexatech",
    creator: "@nfnexatech",
    title: "Contact NF Nexa Tech — Get a Free Quote | NF Nexa Tech",
    description:
      "Contact NF Nexa Tech for web development, mobile apps, and SaaS products. Same-day response.",
    images: [pageOgImage.url],
  },
};

/* ── JSON-LD ──────────────────────────────────────────────── */
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteConfig.url}/contact#webpage`,
  name: "Contact NF Nexa Tech",
  description:
    "Contact page for NF Nexa Tech — a software development company based in Mahipalpur, New Delhi, India.",
  url: `${siteConfig.url}/contact`,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: { "@id": `${siteConfig.url}/#organization` },
  mainEntity: { "@id": `${siteConfig.url}/#organization` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${siteConfig.url}/contact`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is NF Nexa Tech located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `NF Nexa Tech is based in ${siteConfig.contact.streetAddress}, ${siteConfig.contact.city}, ${siteConfig.contact.state} ${siteConfig.contact.postalCode}, India. We serve clients across Delhi NCR and remotely across India and internationally.`,
      },
    },
    {
      "@type": "Question",
      name: "How quickly does NF Nexa Tech respond to project enquiries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We respond to all project enquiries the same business day. After your first message, we schedule a free 30-minute discovery call to understand your requirements and send a detailed proposal within 48 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Can I contact NF Nexa Tech via WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Yes. You can WhatsApp us directly at ${siteConfig.contact.phone}. This is the fastest way to reach us for an immediate response.`,
      },
    },
    {
      "@type": "Question",
      name: "What are NF Nexa Tech's business hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `NF Nexa Tech is available Monday to Saturday, 10:00 AM to 7:00 PM IST. For urgent matters, WhatsApp is monitored outside these hours.`,
      },
    },
  ],
};

/* ── Page ─────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F5" }}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-10 pt-32" style={{ background: "linear-gradient(135deg, #F0F7FF 0%, #FAF7F5 50%, #FFF4ED 100%)" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(31,160,177,0.10)" }}
        />
        <div className="relative mx-auto w-[92%] max-w-5xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs" style={{ color: "#9B8B8B" }}>
            <Link href="/" className="transition hover:text-[#1FA0B1]">Home</Link>
            <span aria-hidden>›</span>
            <span style={{ color: "#6B5A5A" }}>Contact</span>
          </nav>

          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#1FA0B1" }}>
            Get in touch
          </p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl" style={{ color: "#1a1a1a" }}>
            Contact NF Nexa Tech
          </h1>
          <p className="max-w-2xl text-base leading-7" style={{ color: "#6B5A5A" }}>
            Tell us about your project and we&apos;ll respond the same day. A free 30-minute discovery call and a detailed proposal within 48 hours — no obligation.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO + FORM ─────────────────────────────── */}
      <section className="mx-auto w-[92%] max-w-5xl py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">

          {/* ── Business Info ── */}
          <aside>
            <div className="rounded-2xl border p-6 space-y-6" style={{ borderColor: "rgba(198,209,215,0.4)", backgroundColor: "rgba(255,255,255,0.7)" }}>
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: "#1FA0B1" }}>Company</p>
                <p className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>{siteConfig.name}</p>
              </div>

              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: "#1FA0B1" }}>Office Address</p>
                <address className="not-italic text-sm leading-6" style={{ color: "#4a4a4a" }}>
                  {siteConfig.contact.streetAddress},<br />
                  {siteConfig.contact.city}, {siteConfig.contact.state} {siteConfig.contact.postalCode}<br />
                  India
                </address>
              </div>

              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: "#1FA0B1" }}>Phone</p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="block text-sm transition hover:text-[#1FA0B1]"
                  style={{ color: "#4a4a4a" }}
                >
                  {siteConfig.contact.phone}
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone2}`}
                  className="block text-sm transition hover:text-[#1FA0B1]"
                  style={{ color: "#4a4a4a" }}
                >
                  {siteConfig.contact.phone2}
                </a>
              </div>

              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: "#1FA0B1" }}>Email</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm transition hover:text-[#1FA0B1]"
                  style={{ color: "#4a4a4a" }}
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: "#1FA0B1" }}>WhatsApp</p>
                <a
                  href={`${siteConfig.social.whatsapp}?text=${encodeURIComponent("Hi NF Nexa Tech! I'd like to discuss a project.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition hover:opacity-80"
                  style={{ color: "#25D366" }}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Message on WhatsApp
                </a>
              </div>

              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: "#1FA0B1" }}>Business Hours</p>
                <p className="text-sm" style={{ color: "#4a4a4a" }}>
                  {siteConfig.businessHours[0].displayLabel}
                </p>
              </div>

              {/* Google Maps link */}
              <div>
                <a
                  href="https://maps.app.goo.gl/D7jqDzLm3ampPqAc6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold transition hover:opacity-80"
                  style={{ color: "#1FA0B1" }}
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>

            {/* Service areas note */}
            <div className="mt-4 rounded-xl border px-4 py-3 text-xs leading-5" style={{ borderColor: "rgba(198,209,215,0.3)", color: "#6B5A5A" }}>
              <span className="font-semibold" style={{ color: "#1a1a1a" }}>We serve clients across India.</span>{" "}
              While our office is in New Delhi, we work remotely with businesses in{" "}
              <Link href="/locations/patna" className="underline hover:text-[#1FA0B1]">Patna</Link>,{" "}
              <Link href="/locations/darbhanga" className="underline hover:text-[#1FA0B1]">Darbhanga</Link>,{" "}
              <Link href="/locations/jhanjharpur" className="underline hover:text-[#1FA0B1]">Jhanjharpur</Link>,{" "}
              and other cities across India.
            </div>
          </aside>

          {/* ── Contact Form ── */}
          <div>
            <Contact />
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ─────────────────────────────────────── */}
      <section className="mx-auto w-[92%] max-w-3xl pb-20">
        <h2 className="mb-6 text-xl font-bold" style={{ color: "#1a1a1a" }}>Common Questions</h2>
        <div className="space-y-3">
          {faqSchema.mainEntity.map((faq, i) => (
            <details
              key={i}
              className="group overflow-hidden rounded-xl border transition-all"
              style={{ borderColor: "rgba(198,209,215,0.45)", backgroundColor: "rgba(255,255,255,0.95)" }}
            >
              <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4 marker:hidden" style={{ color: "#1a1a1a" }}>
                <h3 className="flex-1 text-[13px] font-semibold m-0">{faq.name}</h3>
                <svg
                  aria-hidden
                  className="h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-180"
                  style={{ color: "#1FA0B1" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="px-5 pb-5 text-[13px] leading-relaxed" style={{ color: "#6B5A5A" }}>
                {faq.acceptedAnswer.text}
              </p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
