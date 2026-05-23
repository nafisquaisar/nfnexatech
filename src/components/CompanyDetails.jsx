"use client";

function CompanyDetails() {
  const details = [
    { label: 'State / Location', value: 'Bhopal, Madhya Pradesh, India' },
    { label: 'Office Address', value: '34, Sneh Nagar, Siddharth Enclave, Ayodhya Nagar, Bhopal, MP 462022' },
    { label: 'Founder', value: 'Nafis Quaisar' },
    { label: 'Company Type', value: 'Software Agency — Web & Mobile Development' },
  ]

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto w-[92%] max-w-6xl rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-8 md:p-12">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Company Details</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {details.map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-slate-900/70 p-5">
              <p className="text-sm uppercase tracking-wide text-cyan-300">{item.label}</p>
              <p className="mt-2 text-slate-100">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanyDetails
