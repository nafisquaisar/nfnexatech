"use client";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#155e75,_transparent_30%),radial-gradient(circle_at_bottom_right,_#7c3aed,_transparent_30%),linear-gradient(to_bottom,_#020617,_#0f172a)] pt-32"
    >
      <div className="mx-auto flex min-h-[84vh] w-[92%] max-w-6xl flex-col items-start justify-center">
        <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Digital Product Studio
        </p>
        <h1 className="animate-fade-up mt-5 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          NF Nexa Tech
        </h1>
        <p className="animate-fade-up mt-6 max-w-2xl text-lg text-slate-200 md:text-xl">
          We build web and mobile applications that help modern businesses scale faster.
        </p>
        <a
          href="#contact"
          className="animate-fade-up mt-9 rounded-xl bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}

export default Hero
