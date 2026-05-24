import SectionTitle from "./SectionTitle";

const STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "Free 30-minute call to understand your goals, timeline, and technical requirements. We ask the hard questions upfront so nothing surprises you later.",
    icon: "🎯",
    duration: "30 min · Free",
  },
  {
    number: "02",
    title: "Technical Proposal",
    description:
      "Detailed scope document, architecture plan, timeline, and milestone-based pricing — delivered within 48 hours. No generic quotes.",
    icon: "📋",
    duration: "48 hrs · No obligation",
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "Agile sprints with bi-weekly demos. You see real progress every two weeks. Constant communication via WhatsApp/Slack — no black boxes.",
    icon: "⚡",
    duration: "6–16 weeks · Milestone-based",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Deployment, performance testing, and 30 days of post-launch support included. Your product is monitored from day one.",
    icon: "🚀",
    duration: "30 days · Included free",
  },
];

/**
 * ProcessTimeline — Server Component.
 * Explains the engagement process to remove objections and build confidence.
 * Positioned between Services and Projects to convert interest into action.
 */
export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      {/* Subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-500/8 blur-[120px]"
      />

      <div className="relative mx-auto w-[92%] max-w-6xl">
        <SectionTitle
          eyebrow="Our Process"
          title="How we work together"
          subtitle="A transparent, milestone-driven process — so you always know what's happening and what's coming next."
        />

        {/* Steps grid */}
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connector line — desktop only */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block"
          />

          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="group relative flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04]"
            >
              {/* Number badge */}
              <div className="flex items-center justify-between">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-lg font-extrabold text-slate-500 transition-colors group-hover:border-cyan-400/30 group-hover:text-cyan-400">
                  {step.number}
                </div>
                <span className="text-2xl" aria-hidden>
                  {step.icon}
                </span>
              </div>

              <div>
                <h3 className="mb-2 text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </div>

              <div className="mt-auto pt-3 border-t border-white/8">
                <span className="text-xs font-semibold text-cyan-400/70">
                  {step.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
