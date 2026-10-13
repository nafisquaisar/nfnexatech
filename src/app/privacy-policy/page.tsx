import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  // Root layout template appends "| NF Nexa Tech".
  title: "Privacy Policy",
  description:
    "Privacy Policy for NF Nexa Tech — how we collect, use, and protect information when you use our website or contact us.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F5" }}>
      <Navbar />

      <main className="mx-auto w-[92%] max-w-3xl pb-24 pt-32">
        {/* Header */}
        <div className="mb-10">
          <p
            className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "#1FA0B1" }}
          >
            Legal
          </p>
          <h1
            className="text-[36px] font-extrabold leading-tight tracking-tight sm:text-[44px]"
            style={{ color: "#1a1a1a" }}
          >
            Privacy Policy
          </h1>
          <p className="mt-3 text-[14px]" style={{ color: "#9B8B8B" }}>
            Company: {siteConfig.name} &nbsp;·&nbsp; Contact:{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="underline underline-offset-2 hover:text-[#1FA0B1] transition-colors"
            >
              {siteConfig.contact.email}
            </a>
          </p>
        </div>

        {/* Body */}
        <div
          className="prose max-w-none"
          style={{
            "--tw-prose-body": "#6B5A5A",
            "--tw-prose-headings": "#1a1a1a",
            "--tw-prose-links": "#1FA0B1",
            "--tw-prose-bold": "#1a1a1a",
            lineHeight: "1.75",
          } as React.CSSProperties}
        >
          <Section title="1. Who We Are">
            <p>
              {siteConfig.name} is a software development company based in
              Mahipalpur, New Delhi, India. Our website is{" "}
              <a href={siteConfig.url}>{siteConfig.url}</a>.
            </p>
            <p>
              We build websites, web applications, mobile apps, and SaaS
              products for businesses. If you have any questions about this
              policy, contact us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>
              We collect information only when you actively provide it to us.
              The primary ways this happens are:
            </p>
            <ul>
              <li>
                <strong>Contact form</strong> — when you submit our contact or
                start-project form, we receive your name, email address, phone
                number (if provided), and the message you write. This
                information is sent to us via email and is used solely to
                respond to your enquiry.
              </li>
              <li>
                <strong>Email and WhatsApp</strong> — if you contact us
                directly by email or WhatsApp, we receive whatever information
                you share in that communication.
              </li>
              <li>
                <strong>Analytics data</strong> — our analytics tools collect
                aggregated, anonymised information about how visitors use the
                website. This may include pages visited, time on site, device
                type, and approximate location (country/city). This data does
                not identify you personally. See Section 4 for details.
              </li>
            </ul>
            <p>
              We do not collect payment information directly — any payments are
              handled by third-party payment processors.
            </p>
          </Section>

          <Section title="3. How We Use Information">
            <p>Information you provide through the contact form or direct communication is used to:</p>
            <ul>
              <li>Respond to your project enquiry or question</li>
              <li>Prepare and send a project proposal or quote</li>
              <li>Communicate with you about an ongoing project</li>
            </ul>
            <p>
              We do not sell, rent, or share your personal contact information
              with third parties for marketing purposes.
            </p>
          </Section>

          <Section title="4. Analytics and Cookies">
            <p>
              Our website uses the following analytics and tracking services to
              understand site performance and user behaviour. These services may
              set cookies or collect data about your browser and visit:
            </p>
            <ul>
              <li>
                <strong>Google Analytics 4 (GA4)</strong> — collects
                anonymised data about pages visited, session duration, and
                traffic sources. Governed by Google's Privacy Policy:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  policies.google.com/privacy
                </a>
                .
              </li>
              <li>
                <strong>Google Ads</strong> — used for conversion tracking if
                you arrive via an advertisement and then contact us.
              </li>
              <li>
                <strong>Microsoft Clarity</strong> — records anonymised session
                heatmaps and user interaction patterns to help us improve the
                website. Governed by Microsoft's Privacy Statement:{" "}
                <a
                  href="https://privacy.microsoft.com/privacystatement"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy.microsoft.com
                </a>
                .
              </li>
              <li>
                <strong>Vercel Analytics</strong> — aggregated, privacy-first
                analytics provided by our hosting platform (Vercel). No
                personal data is stored.
              </li>
            </ul>
            <p>
              These services may use cookies. You can control cookie preferences
              through your browser settings. Disabling analytics cookies will
              not affect your ability to use this website.
            </p>
          </Section>

          <Section title="5. Third-Party Services">
            <p>
              Our website contains links to WhatsApp (for direct messaging),
              Google Maps (for our office location), and social media platforms
              (LinkedIn, Instagram, Facebook). These services are governed by
              their own privacy policies. We are not responsible for the
              practices of external websites.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              Enquiries and project communications are retained for a reasonable
              period to allow us to respond to your requests and manage any
              ongoing projects. We do not retain personal data beyond what is
              necessary for the purpose it was collected.
            </p>
          </Section>

          <Section title="7. Data Security">
            <p>
              We take reasonable measures to protect information you share with
              us. Our website is served over HTTPS. Contact form data is
              transmitted by email and is not stored in a publicly accessible
              database.
            </p>
            <p>
              No method of electronic transmission or storage is completely
              secure. We cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>
              If you have shared information with us (for example, via a contact
              form or email) and wish to:
            </p>
            <ul>
              <li>Ask what information we hold about you</li>
              <li>Request that we delete your information</li>
              <li>Correct any inaccurate information</li>
            </ul>
            <p>
              Please contact us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
              . We will respond within a reasonable time.
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              This website is not directed at children under the age of 16. We
              do not knowingly collect personal information from children.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Material
              changes will be reflected on this page. We encourage you to review
              this page periodically.
            </p>
          </Section>

          <Section title="11. Contact">
            <p>
              For questions about this Privacy Policy, contact us:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                Address: {siteConfig.contact.address}
              </li>
            </ul>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* ── Internal helper component ────────────────────────────── */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2
        className="mb-4 text-[20px] font-bold tracking-tight"
        style={{ color: "#1a1a1a" }}
      >
        {title}
      </h2>
      <div
        className="space-y-3 text-[14px] leading-relaxed"
        style={{ color: "#6B5A5A" }}
      >
        {children}
      </div>
    </section>
  );
}
