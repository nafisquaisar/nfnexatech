"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const INDUSTRIES = [
  { name: "Healthcare", color: "#E8436E", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg> },
  { name: "Education", color: "#1FA0B1", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15v-3.75m0 0h-.008v.008H6.75v-.008z" /></svg> },
  { name: "Real Estate", color: "#2563EB", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg> },
  { name: "E-Commerce", color: "#10B981", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg> },
  { name: "Banking & Finance", color: "#7C3AED", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg> },
  { name: "Manufacturing", color: "#D97706", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.6-3.03c-.51-.27-.68-.93-.37-1.42l.9-1.42a1 1 0 011.42-.2l3.18 2.24 5.15-5.94a1 1 0 011.48-.05l1.01 1.06c.38.4.36 1.03-.05 1.4L12.83 15a1 1 0 01-1.41.17zM3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18" /></svg> },
  { name: "IT & Technology", color: "#0891B2", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" /></svg> },
  { name: "Food & Beverage", color: "#EA580C", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.126-6 .37" /></svg> },
  { name: "Automotive", color: "#DC2626", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg> },
  { name: "Travel & Hospitality", color: "#4F46E5", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg> },
  { name: "Logistics & Supply Chain", color: "#0D9488", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0V5.625m0 0a2.25 2.25 0 114.5 0v.386m-4.5-.386a2.25 2.25 0 10-4.5 0v6.506" /></svg> },
  { name: "Enterprise", color: "#2563EB", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg> },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F0F7FF 0%, #F5F8FF 30%, #FAF7F5 60%, #F0F4FF 100%)" }}
    >
      {/* Background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -left-16 h-[250px] w-[250px] rounded-full bg-[#B5E5EB]/20 blur-[90px]" />
        <div className="absolute -bottom-16 -right-16 h-[250px] w-[250px] rounded-full bg-[#C4B5E8]/15 blur-[90px]" />
        <div className="absolute top-6 left-6 grid grid-cols-4 gap-[6px] opacity-15">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="h-[5px] w-[5px] rounded-full bg-[#1FA0B1]" />
          ))}
        </div>
        <div className="absolute bottom-8 right-8 grid grid-cols-3 gap-[6px] opacity-10">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="h-[5px] w-[5px] rounded-full bg-[#C4B5E8]" />
          ))}
        </div>
      </div>

      <div className="relative mx-auto w-[92%] max-w-6xl">
        {/* Header — left aligned */}
        <div className="mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1FA0B1]/30 bg-[#B5E5EB]/15 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#1FA0B1]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1FA0B1]" />
            Industries
          </div>
          <h2 className="text-[28px] font-extrabold tracking-tight text-[#1a1a1a] sm:text-[34px]">
            Industries{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #1FA0B1 0%, #7B5EA7 100%)" }}>We Serve</span>
          </h2>
          <p className="mt-2 text-[13px] text-[#6B5A5A] max-w-xl">
            We build digital solutions for businesses across diverse industries, helping them grow, innovate and scale.
          </p>
        </div>

        {/* Industry pills */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap gap-3"
        >
          {INDUSTRIES.map((ind) => (
            <motion.div
              key={ind.name}
              variants={fadeUp}
              className="flex items-center gap-2.5 rounded-xl border border-[#E8E0D8]/40 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${ind.color}15`, color: ind.color }}
              >
                {ind.icon}
              </div>
              <span className="text-[13px] font-semibold text-[#1a1a1a]">{ind.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
