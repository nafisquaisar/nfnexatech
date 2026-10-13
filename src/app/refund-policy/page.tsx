import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund Policy for NF Nexa Tech software development services — how cancellations and refunds are handled.",
  alternates: {
    canonical: `${siteConfig.url}/refund-policy`,
  },
  robots: { index: true, follow: true },
};

export default function RefundPolicyPage() {
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
            Refund Policy
          </h1>
          <p className="mt-3 text-[14px]" style={{ color: "#9B8B8B" }}>
            Questions about a payment or project?{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="underline underline-offset-2 hover:text-[#1FA0B1] transition-colors"
            >
              {siteConfig.contact.email}
            </a>
          </p>
        </div>

        <div className="space-y-0" style={{ color: "#6B5A5A" }}>
          <Section title="1. Overview">
            <p>
              NF Nexa Tech provides custom software development services. Because
              each project is unique and involves significant time and resources
              from the start, our refund policy is structured around project
              milestones rather than a flat refund window.
            </p>
            <p>
              This policy applies to all payments made for services by NF Nexa
              Tech. Specific refund terms may also be stated in your individual
              project agreement — where they conflict, the project agreement
              takes precedence.
            </p>
          </Section>

          <Section title="2. Pre-Payment / Before Work Begins">
            <p>
              If you have made a payment and wish to cancel before any
              development work has begun (typically within 48 hours of the
              initial payment), you are entitled to a full refund.
            </p>
            <p>
              Please notify us immediately at{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="underline underline-offset-2 hover:text-[#1FA0B1] transition-colors"
              >
                {siteConfig.contact.email}
              </a>{" "}
              so we can stop work and process your refund.
            </p>
          </Section>

          <Section title="3. After Work Has Begun">
            <p>
              Once development work has commenced, payments reflect the work
              completed up to the point of cancellation. The following applies:
            </p>
            <ul>
              <li>
                <strong>Partial refund</strong> — If you cancel mid-project,
                you may be eligible for a partial refund proportional to the
                work remaining, less any costs already incurred (design,
                development hours, third-party subscriptions, etc.).
              </li>
              <li>
                <strong>Milestone-based projects</strong> — Payments made for a
                completed milestone are non-refundable. Payments made for
                upcoming milestones that have not yet started may be refunded.
              </li>
              <li>
                <strong>Work delivered and approved</strong> — Completed and
                client-approved deliverables are non-refundable.
              </li>
            </ul>
          </Section>

          <Section title="4. Situations Where Refunds Are Not Applicable">
            <p>Refunds will not be issued in the following situations:</p>
            <ul>
              <li>
                Change of mind after significant development work has been
                completed
              </li>
              <li>Delays caused by the client (late feedback, content, approvals)</li>
              <li>Work delivered as per the agreed scope and approved by the client</li>
              <li>
                Dissatisfaction due to changes in client requirements after
                development has begun
              </li>
              <li>
                Domain, hosting, or third-party service fees paid on the
                client's behalf
              </li>
            </ul>
          </Section>

          <Section title="5. How to Request a Refund">
            <p>To request a refund, contact us at:</p>
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
              <li>
                Phone / WhatsApp:{" "}
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="underline underline-offset-2 hover:text-[#1FA0B1] transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
            </ul>
            <p>
              Please include your project name, payment reference, and the
              reason for the refund request. We will review your request and
              respond within 3–5 business days.
            </p>
          </Section>

          <Section title="6. Refund Processing">
            <p>
              Approved refunds will be processed within 7–10 business days to
              the original payment method. Processing time may vary depending
              on your bank or payment provider.
            </p>
          </Section>

          <Section title="7. Changes to This Policy">
            <p>
              We may update this Refund Policy from time to time. Changes will
              be posted on this page. For active projects, the refund policy
              in effect at the time of your payment applies.
            </p>
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
