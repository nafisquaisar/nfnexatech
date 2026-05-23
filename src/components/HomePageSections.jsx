"use client";

import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CompanyDetails from "@/components/CompanyDetails";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import WhatsAppCta from "@/components/WhatsAppCta";

/**
 * Composition of all homepage sections.
 * Section order optimised for conversion funnel:
 *   Hook → Trust → Value → Social Proof → Credibility → Objection Handling → Contact
 */
function HomePageSections() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <CompanyDetails />
      <Faq />
      <Contact />
      <WhatsAppCta />
    </main>
  );
}

export default HomePageSections;
