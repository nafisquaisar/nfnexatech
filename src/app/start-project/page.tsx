import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

/* ── SEO metadata ────────────────────────────────────────── */
const pageOgImage = ogImage({ title: "Start a Project with NF Nexa Tech", type: "page" });

export const metadata: Metadata = {
  title: "Start a Project — Free Consultation & Proposal | NF Nexa Tech",
  description:
    "Tell us about your project. NF Nexa Tech builds web apps, mobile apps, and SaaS MVPs — get a free consultation and proposal within 48 hours.",
  alternates: { canonical: `${siteConfig.url}/start-project` },
  openGraph: {
    title: "Start a Project — Free Consultation & Proposal | NF Nexa Tech",
    description:
      "Tell us about your project and get a free consultation within 48 hours. Web apps, mobile apps, SaaS MVPs.",
    url: `${siteConfig.url}/start-project`,
    type: "website",
    images: [pageOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Start a Project — Free Consultation & Proposal | NF Nexa Tech",
    description:
      "Tell us about your project and get a free consultation within 48 hours.",
    images: [pageOgImage.url],
  },
};

/* ── Page ────────────────────────────────────────────────── */
export default function StartProjectPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F5" }}>
      <Navbar />
      <div className="pt-24">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
