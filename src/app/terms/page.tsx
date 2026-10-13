import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for using the NF Nexa Tech website and engaging our software development services.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F5" }}>
      <Navbar />

      <main className="mx-auto w-[92%] max-w-3xl pb-24 pt-32">
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
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-[14px]" style={{ color: "#9B8B8B" }}>
            By using this website or our services, you agree to these terms.
            Questions? Email{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="underline underline-offset-2 hover:text-[#1FA0B1] transition-colors"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>

        <div className="space-y-0" style={{ color: "#6B5A5A" }}>
          <Section title="1. About This Document">
            <p>
              These Terms &amp; Conditions govern your use of the NF Nexa Tech
              website ({siteConfig.url}) and the services we provide. By
              accessing this website or engaging our services, you agree to be
              bound by these terms.
            </p>
            <p>
              <strong>{siteConfig.name}</strong> is a software development
              company based in Mahipalpur, New Delhi, India.
            </p>
          </Section>

          <Section title="2. Website Use">
            <p>You agree to use this website lawfully and not to:</p>
            <ul>
              <li>Misrepresent yourself or your affiliation</li>
              <li>
                Attempt to access any part of the website that is not intended
                for public access
              </li>
              <li>
                Reproduce, copy, or redistribute site content without our
                prior written permission
              </li>
              <li>
                Use any automated tool to scrape, crawl, or harvest data from
                this site in excess of what standard search engines do
              </li>
            </ul>
          </Section>

          <Section title="3. Intellectual Property">
            <p>
              All content on this website — including design, text, graphics,
              code, logos, and project descriptions — is the property of NF
              Nexa Tech or its respective owners. No content may be used
              without prior written permission.
            </p>
            <p>
              Project screenshots and client work displayed in our portfolio are
              shared with the permission of respective clients or are publicly
              available products.
            </p>
          </Section>

          <Section title="4. Services">
            <p>
              NF Nexa Tech provides custom software development services
              including web development, mobile app development, UI/UX design,
              and SaaS/MVP development.
            </p>
            <p>
              Specific terms for each project — including scope, deliverables,
              timeline, and payment — are agreed upon in a separate written
              agreement (project proposal or contract) with each client.
              These Terms &amp; Conditions serve as a baseline for all
              engagements.
            </p>
          </Section>

          <Section title="5. Enquiries and Communications">
            <p>
              Submitting a contact form, sending an email, or messaging us on
              WhatsApp does not constitute a binding contract. A project
              engagement only begins once both parties have agreed to a written
              proposal or contract.
            </p>
          </Section>

          <Section title="6. Accuracy of Information">
            <p>
              We make reasonable efforts to keep information on this website
              accurate and current. However, we do not warrant that all content
              is free from errors or that it is complete and up to date. Service
              availability, pricing, and timelines discussed on this website are
              indicative only and are subject to change.
            </p>
          </Section>

          <Section title="7. Third-Party Links">
            <p>
              This website contains links to external websites (social media
              profiles, client sites, partner tools). These are provided for
              convenience. We have no control over, and accept no responsibility
              for, the content or practices of any linked external website.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, NF Nexa Tech
              shall not be liable for any indirect, incidental, special, or
              consequential damages arising from your use of this website or our
              services, including loss of data, loss of profits, or any other
              economic loss.
            </p>
            <p>
              Our liability in connection with any service project is limited to
              the amounts paid by you for that specific project.
            </p>
          </Section>

          <Section title="9. Governing Law">
            <p>
              These terms are governed by and construed in accordance with the
              laws of India. Any disputes shall be subject to the exclusive
              jurisdiction of the courts located in New Delhi, India.
            </p>
          </Section>

          <Section title="10. Changes to These Terms">
            <p>
              We may update these Terms &amp; Conditions at any time. Material
              changes will be reflected on this page. Continued use of the
              website after changes are posted constitutes acceptance of the
              updated terms.
            </p>
          </Section>

          <Section title="11. Contact">
            <p>
              For any questions about these Terms &amp; Conditions:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="underline underline-offset-2 hover:text-[#1FA0B1] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>Address: {siteConfig.contact.address}</li>
            </ul>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

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
      <div className="space-y-3 text-[14px] leading-relaxed">{children}</div>
    </section>
  );
}
