import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Services from "@/components/Services";
import ProcessTimeline from "@/components/ProcessTimeline";
import Projects from "@/components/Projects";
import WebsiteShowcase from "@/components/WebsiteShowcase";
import Testimonials from "@/components/Testimonials";
import CompanyDetails from "@/components/CompanyDetails";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import FloatingCtas from "@/components/FloatingCtas";

/**
 * Composition of all homepage sections.
 * Conversion funnel order:
 *   Hook (Hero) → Trust (Stats) → Value (Services) → Process
 *   → Social Proof (Projects + Testimonials) → Credibility (Details)
 *   → Objection Handling (FAQ) → Capture (Contact)
 *   + Global: FloatingCtas (sticky overlays — Start Project + WhatsApp)
 *
 * NOTE: "use client" intentionally removed — child components declare
 * their own client boundaries. This keeps RSC benefits for static children.
 */
export default function HomePageSections() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <ProcessTimeline />
      <WebsiteShowcase />
      <Projects />
      <Testimonials />
      <CompanyDetails />
      <Faq />
      <Contact />

      {/* ── Global sticky overlays ── */}
      <FloatingCtas />
    </main>
  );
}
