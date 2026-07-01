
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const HIGHLIGHTS = [
  { icon: "🚀", text: "Founded in 2023" },
  { icon: "📦", text: "15+ Projects Delivered" },
  { icon: "🤝", text: "10+ Happy Clients" },
  { icon: "🏛️", text: "UDYAM Registered MSME" },
];

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
          {/* Left — text content */}
          <div className="flex flex-col gap-5">
            <p className="text-slate-300">
              NF Nexa Tech delivers end-to-end software services including web platforms,
              Android applications, backend APIs, and UI/UX design systems. Our teams
              focus on performance, maintainability, and user-first experiences.
            </p>
            <p className="text-slate-400">
              From concept to deployment, we help startups and enterprises launch
              scalable digital products with confidence.
            </p>

            {/* Highlights */}
            <ul className="mt-1 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {HIGHLIGHTS.map((h) => (
                <li
                  key={h.text}
                  className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-300"
                >
                  <span className="text-base leading-none">{h.icon}</span>
                  {h.text}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-2">
              <Link
                href="/about"
                id="about-section-learn-more"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-300 backdrop-blur transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:text-white"
              >
                Learn More
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — image */}
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
