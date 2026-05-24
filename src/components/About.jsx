

import Image from "next/image";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section id="about" className="bg-slate-900 py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle
          eyebrow="About Us"
          title="Your technology partner for web and mobile growth"
          subtitle="We combine product strategy, design, and engineering to deliver software that drives measurable business outcomes."
        />

        <div className="grid items-center gap-10 rounded-2xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/30 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-slate-300">
              NF Nexa Tech delivers end-to-end software services including web platforms,
              Android applications, backend APIs, and UI/UX design systems. Our teams
              focus on performance, maintainability, and user-first experiences.
            </p>
            <p className="mt-4 text-slate-400">
              From concept to deployment, we help startups and enterprises launch
              scalable digital products with confidence.
            </p>
          </div>

          <div className="relative h-72 w-full overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="NF Nexa Tech team collaborating on a software project"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
