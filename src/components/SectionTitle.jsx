"use client";

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      <p className="mt-4 text-base text-slate-300 md:text-lg">{subtitle}</p>
    </div>
  )
}

export default SectionTitle
