import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ProcessTimeline from "@/components/ProcessTimeline";
import Industries from "@/components/Industries";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import FloatingCtas from "@/components/FloatingCtas";
import SectionReveal from "@/components/SectionReveal";

/**
 * Composition of all homepage sections.
 * Each section is wrapped in SectionReveal for smooth scroll-triggered
 * slide-in animations — alternating left/right/up directions.
 */
export default function HomePageSections() {
  return (
    <main>
      {/* Hero has no reveal — it's the first thing visible */}
      <Hero />

      <SectionReveal direction="up">
        <About />
      </SectionReveal>

      <SectionReveal direction="left">
        <Services />
      </SectionReveal>

      <SectionReveal direction="right">
        <Industries />
      </SectionReveal>

      <SectionReveal direction="left">
        <ProcessTimeline />
      </SectionReveal>

      <SectionReveal direction="left">
        <Projects />
      </SectionReveal>

      <SectionReveal direction="right">
        <Testimonials />
      </SectionReveal>

      <SectionReveal direction="left">
        <Faq />
      </SectionReveal>

      <SectionReveal direction="up">
        <Contact />
      </SectionReveal>

      {/* ── Global sticky overlays ── */}
      <FloatingCtas />
    </main>
  );
}
