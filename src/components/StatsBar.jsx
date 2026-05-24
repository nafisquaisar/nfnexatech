

import { siteConfig } from "@/config/site";

/**
 * Thin stats strip shown just below the Hero.
 * Establishes trust signals immediately above the fold.
 */
function StatsBar() {
  return (
    <section
      aria-label="Company achievements"
      className="border-y border-white/8 bg-slate-900/60 backdrop-blur-sm"
    >
      <div className="mx-auto w-[92%] max-w-6xl">
        <ul className="grid grid-cols-2 divide-x divide-white/8 md:grid-cols-4">
          {siteConfig.stats.map((stat) => (
            <li
              key={stat.label}
              className="flex flex-col items-center gap-1 px-4 py-6 text-center"
            >
              <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default StatsBar;
