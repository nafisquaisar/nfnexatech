"use client";

import SectionTitle from './SectionTitle'

function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let's discuss your next project"
          subtitle="Tell us your idea and we will help you plan, design, and build it."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <form className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/70 p-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-cyan-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-5 rounded-2xl border border-white/10 bg-slate-950/70 p-6">
            <div>
              <p className="text-sm uppercase tracking-wide text-cyan-300">Phone</p>
              <p className="mt-1 text-slate-100">+91 9801999829</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-cyan-300">Email</p>
              <a
                href="mailto:nfnexatech@gmail.com"
                className="mt-2 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900 px-4 py-2 text-slate-100 transition hover:border-cyan-400/50 hover:text-cyan-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5 flex-shrink-0">
                  <path fill="#EA4335" d="M24 5C13.5 5 5 13.5 5 24s8.5 19 19 19 19-8.5 19-19S34.5 5 24 5z" opacity="0"/>
                  <path fill="#4285F4" d="M34 12H14c-1.1 0-2 .9-2 2v.6l12 7.8 12-7.8V14c0-1.1-.9-2-2-2z"/>
                  <path fill="#34A853" d="M36 16.4l-12 7.8-12-7.8V34c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V16.4z"/>
                  <path fill="#FBBC05" d="M12 16.4V34l8-8.8-8-8.8z"/>
                  <path fill="#EA4335" d="M36 16.4l-8 8.8 8 8.8V16.4z"/>
                </svg>
                <span>nfnexatech@gmail.com</span>
              </a>
            </div>
            <iframe
              title="Office location map"
              className="h-64 w-full rounded-xl border-0"
              src="https://maps.google.com/maps?q=34+Sneh+Nagar+Siddharth+Enclave+Ayodhya+Nagar+Bhopal+Madhya+Pradesh+462022+India&t=&z=16&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
