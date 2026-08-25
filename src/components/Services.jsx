
import Link from "next/link";
import SectionTitle from "./SectionTitle";

/**
 * Services shown on the homepage.
 * Pulled from servicesData (content.js) so slugs stay in sync with /services/[slug] pages.
 */
const HOMEPAGE_SERVICES = [
  {
    slug: "web-development",
    icon: "🌐",
    title: "Web Development",
    description:
      "Business websites and web applications built fast, mobile-first, and optimised for search. From a clean 5-page site to a full customer portal.",
  },
  {
    slug: "android-app-development",
    icon: "📱",
    title: "Android App Development",
    description:
      "Native Android apps in Kotlin and cross-platform apps with Flutter. We've shipped apps to the Play Store that are actively used.",
  },
  {
    slug: "flutter-app-development",
    icon: "🦋",
    title: "Flutter App Development",
    description:
      "One codebase, Android and iOS. Flutter is our choice for most cross-platform projects — it's fast, looks native, and cuts costs significantly.",
  },
  {
    slug: "ui-ux-design",
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Interfaces designed to be used, not just admired. We design what makes sense to your users — whether that's a mobile checkout or a complex dashboard.",
  },
  {
    slug: "backend-api-development",
    icon: "⚙️",
    title: "Backend & API Development",
    description:
      "Secure, scalable backends and REST APIs. If you need something that talks to payment gateways, third-party services, or your own data — we build that layer.",
  },
  {
    slug: "saas-mvp-development",
    icon: "🚀",
    title: "SaaS / MVP Development",
    description:
      "Have a product idea? We help founders build their first version quickly — with everything needed to start getting paying customers or early feedback.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-slate-950 py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle
          eyebrow="Services"
          title="What we build"
          subtitle="We design and build websites, web apps, mobile apps, and SaaS products for businesses across Delhi and India. Here's what we work on."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {HOMEPAGE_SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <span className="text-3xl">{service.icon}</span>
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>
              <p className="flex-1 text-sm leading-6 text-slate-400">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 transition group-hover:gap-2.5">
                Learn more
                <svg
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* View all services link */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-400/30 hover:text-white"
          >
            View all services
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
