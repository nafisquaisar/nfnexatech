"use client";

import SectionTitle from './SectionTitle'
import { services } from '../data/data'

function Services() {
  return (
    <section id="services" className="bg-slate-950 py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle
          eyebrow="Services"
          title="Comprehensive product engineering services"
          subtitle="Choose from specialized services that support your product lifecycle from design to deployment."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <span className="text-3xl">{service.icon}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
