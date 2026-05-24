
import SectionTitle from "./SectionTitle";
import { testimonials } from "@/data/content";

/** Star rating component */
function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? "text-amber-400" : "text-slate-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/** Avatar fallback with initials */
function Avatar({ name, avatar }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  if (avatar) {
    return (
      <img
        src={avatar}
        alt={name}
        className="h-12 w-12 rounded-full object-cover ring-2 ring-cyan-400/30"
      />
    );
  }

  // Deterministic gradient based on name
  const gradients = [
    "from-cyan-500 to-blue-600",
    "from-purple-500 to-pink-600",
    "from-emerald-500 to-cyan-600",
    "from-orange-500 to-red-600",
  ];
  const gradient = gradients[name.charCodeAt(0) % gradients.length];

  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-sm font-bold text-white ring-2 ring-white/10`}
      aria-label={`Avatar for ${name}`}
    >
      {initials}
    </div>
  );
}

/** Single testimonial card */
function TestimonialCard({ testimonial, isActive }) {
  return (
    <article
      className={`flex flex-col gap-5 rounded-2xl border p-6 transition-all duration-500 md:p-8 ${
        isActive
          ? "border-cyan-400/30 bg-white/[0.04] shadow-lg shadow-cyan-500/10"
          : "border-white/8 bg-white/[0.02]"
      }`}
    >
      <Stars count={testimonial.rating} />

      <blockquote className="flex-1 text-base leading-7 text-slate-300">
        &ldquo;{testimonial.review}&rdquo;
      </blockquote>

      <footer className="flex items-center gap-3">
        <Avatar name={testimonial.name} avatar={testimonial.avatar} />
        <div>
          <p className="text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="text-xs text-slate-500">
            {testimonial.title} · {testimonial.company}
          </p>
        </div>
      </footer>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-slate-900 py-24"
    >
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[120px]"
      />

      <div className="relative mx-auto w-[92%] max-w-6xl">
        <SectionTitle
          eyebrow="Client Stories"
          title="What our clients say"
          subtitle="We measure success by the outcomes we create for our clients — not just the code we ship."
        />

        {/* Cards grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} isActive={i === 0} />
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <Stars count={5} />
          <span className="text-sm text-slate-400">
            5.0 average from {testimonials.length} client reviews
          </span>
        </div>
      </div>
    </section>
  );
}
