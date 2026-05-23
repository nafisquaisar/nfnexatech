"use client";


import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/data";

const AUTO_DELAY = 4000 // ms between auto-slides

/* ─────────────────────────────────────────────────────────────
   Tiny sub-components
───────────────────────────────────────────────────────────── */

/** Gradient placeholder when image is missing */
function ImagePlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-900/40 to-purple-900/40">
      <svg className="h-16 w-16 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </div>
  )
}

/** Stacked 3-layer mockup with subtle 3-D tilt */
function MockupStack({ image, alt }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Shadow layer 3 — furthest back */}
      <div
        className="absolute inset-0 rounded-2xl border border-white/5 bg-white/3"
        style={{ transform: 'rotate(-6deg) scale(0.88) translateY(12px)', opacity: 0.35 }}
      />
      {/* Shadow layer 2 */}
      <div
        className="absolute inset-0 rounded-2xl border border-white/8 bg-white/5"
        style={{ transform: 'rotate(-3deg) scale(0.94) translateY(6px)', opacity: 0.55 }}
      />
      {/* Main card */}
      <div className="group/img relative z-10 w-full overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/60 transition-transform duration-700 hover:scale-[1.02]">
        {image
          ? <img src={image} alt={alt ?? 'Project mockup'} className="h-full max-h-[420px] w-full object-contain p-4 transition-transform duration-700 group-hover/img:scale-105" />
          : <ImagePlaceholder />
        }
        {/* Glass sheen */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/5 via-transparent to-transparent" />
      </div>
    </div>
  )
}

/** Animated vertical 3-phone fan mockup (e.g. TuneLyf) */
function VerticalPhoneFanMockup({ project }) {
  const color = project?.color ?? '#1f2a44'
  const stack = project?.phoneStack ?? {}

  if (!stack?.left && !stack?.center && !stack?.right) return null

  return (
    <div className="phone-fan relative mx-auto h-[250px] w-full max-w-[390px] -translate-y-4 overflow-visible sm:h-[280px] sm:-translate-y-5 lg:h-[310px] lg:-translate-y-6">
      {/* Colour blobs */}
      <div
        className="absolute left-[10%] top-[10%] h-32 w-32 rounded-full opacity-35 blur-3xl"
        style={{ backgroundColor: color }}
      />
      <div
        className="absolute right-[10%] top-[18%] h-28 w-28 rounded-full opacity-25 blur-3xl"
        style={{ backgroundColor: color }}
      />

      {/* Left phone — fans left; final position driven by phone-left keyframe */}
      {stack.left && (
        <img
          src={stack.left}
          alt={`${project?.title ?? 'Project'} left screen`}
          className="phone-left absolute left-1/2 z-10 w-[125px] select-none object-contain drop-shadow-xl sm:w-[145px] lg:w-[160px]"
          style={{ top: 28, transform: 'translateX(-50%)' }}
          loading="lazy"
        />
      )}

      {/* Right phone — fans right; final position driven by phone-right keyframe */}
      {stack.right && (
        <img
          src={stack.right}
          alt={`${project?.title ?? 'Project'} right screen`}
          className="phone-right absolute left-1/2 z-20 w-[125px] select-none object-contain drop-shadow-xl sm:w-[145px] lg:w-[160px]"
          style={{ top: 28, transform: 'translateX(-50%)' }}
          loading="lazy"
        />
      )}

      {/* Center phone — always on top, stays centered */}
      {stack.center && (
        <img
          src={stack.center}
          alt={`${project?.title ?? 'Project'} center screen`}
          className="phone-center absolute left-1/2 z-30 w-[145px] select-none object-contain drop-shadow-xl sm:w-[165px] lg:w-[180px]"
          style={{ top: 8, transform: 'translateX(-50%)' }}
          loading="lazy"
        />
      )}
    </div>
  )
}

/** HackerKernel-style horizontal 3-layer phone/app mockup */
function PhoneLayerMockup({ project }) {
  const color = project?.color ?? '#1f2a44'
  const layers = project?.layers ?? {}

  if (!layers?.top && !layers?.middle && !layers?.phone) return null

  return (
    <div className="relative mx-auto h-[260px] w-full max-w-[520px] overflow-visible sm:h-[300px] md:h-[330px] lg:h-[350px]">
      {/* Colour blobs */}
      <div
        className="absolute left-[8%] top-[8%] h-32 w-32 rounded-full opacity-60 blur-2xl sm:h-40 sm:w-40"
        style={{ backgroundColor: color }}
      />
      <div
        className="absolute right-[8%] top-[32%] h-24 w-24 rounded-full opacity-50 blur-2xl sm:h-32 sm:w-32"
        style={{ backgroundColor: color }}
      />

      {/* Base / phone layer */}
      {layers.phone && (
        <img
          src={layers.phone}
          alt={`${project?.title ?? 'Project'} phone`}
          className="absolute bottom-[6%] left-[6%] z-10 w-[70%] select-none object-contain drop-shadow-2xl"
          loading="lazy"
        />
      )}

      {/* Middle overlay */}
      {layers.middle && (
        <img
          src={layers.middle}
          alt={`${project?.title ?? 'Project'} middle screen`}
          className="absolute left-[20%] top-[38%] z-20 w-[52%] select-none object-contain drop-shadow-2xl"
          loading="lazy"
        />
      )}

      {/* Top overlay */}
      {layers.top && (
        <img
          src={layers.top}
          alt={`${project?.title ?? 'Project'} top screen`}
          className="absolute left-[34%] top-[12%] z-30 w-[48%] select-none object-contain drop-shadow-2xl"
          loading="lazy"
        />
      )}
    </div>
  )
}

/** Tech badges row */
function TechBadges({ tech }) {
  if (!tech?.length) return null
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span key={t}
          className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm">
          {t}
        </span>
      ))}
    </div>
  )
}

/** CTA button — navigates to /projects/:slug */
function CaseStudyButton({ project }) {

  // prevent undefined crash
  if (!project || !project.slug) {
    return null;
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group/btn inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 px-5 py-2.5 text-xs font-bold tracking-widest text-white backdrop-blur transition-all duration-300 hover:border-cyan-400/80 hover:from-cyan-500/40 hover:to-purple-600/40 hover:shadow-lg hover:shadow-cyan-500/20"
    >
      VIEW CASE STUDY

      <svg
        className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
        />
      </svg>
    </Link>
  );
}

/** Arrow button for prev/next */
function ArrowBtn({ direction, onClick }) {
  const isLeft = direction === 'left'
  return (
    <button onClick={onClick} aria-label={isLeft ? 'Previous project' : 'Next project'}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-white">
      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        {isLeft
          ? <path fillRule="evenodd" clipRule="evenodd" d="M17 10a.75.75 0 01-.75.75H6.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L6.612 9.25H16.25A.75.75 0 0117 10z" />
          : <path fillRule="evenodd" clipRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
        }
      </svg>
    </button>
  )
}

/* ─────────────────────────────────────────────────────────────
   Main Projects / Case Study section
───────────────────────────────────────────────────────────── */
function Projects() {
  const [active, setActive] = useState(0)
  const [animKey, setAnimKey] = useState(0)   // bump to re-trigger CSS animation
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

const total = projects?.length || 0

  /* Go to a specific slide */
  const goTo = useCallback((idx) => {
    setActive((idx + total) % total)
    setAnimKey((k) => k + 1)
  }, [total])

  const next = useCallback(() => goTo(active + 1), [active, goTo])
  const prev = useCallback(() => goTo(active - 1), [active, goTo])

  /* Auto-slide */
  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, AUTO_DELAY)
    return () => clearInterval(timerRef.current)
  }, [paused, next])

const project = projects?.[active] || null
  return (
    <section id="projects" className="cs-noise relative overflow-hidden bg-slate-950 py-24">

      {/* ── Glowing background blobs ── */}
      <div aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] translate-x-1/3 translate-y-1/3 rounded-full bg-purple-600/12 blur-[120px]" />
      <div aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/8 blur-[100px]" />

      <div className="relative mx-auto w-[92%] max-w-6xl">

        {/* ── Section header ── */}
        <SectionTitle
          eyebrow="Case Study"
          title="Every project tells a unique story"
          subtitle="Being a software development company, we consider our work among our accolades. Our projects reflect our process, creativity, and technical expertise."
        />

        {/* ── Main slider ── */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl md:p-10 lg:p-14"
        >
          {/* Slide content — key change re-triggers animation */}
          <div
            key={animKey}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            style={{ animation: 'cs-fade 0.45s ease both' }}
          >
            {/* ── LEFT: Mockup area — phoneStack → layers → single image ── */}
            <div className="relative flex h-[300px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-900/30 sm:h-[340px] lg:h-[390px]">
              {project?.phoneStack
                ? <VerticalPhoneFanMockup project={project} />
                : project?.layers
                  ? <PhoneLayerMockup project={project} />
                  : <MockupStack image={project?.image} alt={project?.title} />
              }
            </div>

            {/* ── RIGHT: Project info ── */}
            <div className="flex flex-col gap-5">

              {/* Category chip */}
              {project?.category && (
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
                  {project.category}
                  {project?.platform && ` | ${project.platform}`}
                </p>
              )}

              {/* Title */}
              <h3 className="text-2xl font-bold leading-snug text-white sm:text-3xl xl:text-4xl">
                {project?.title ?? 'Untitled Project'}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed text-slate-400">
                {project?.description ?? 'No description available for this project.'}
              </p>

              {/* Tech stack */}
              <TechBadges tech={project?.tech} />

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-white/10 via-cyan-500/20 to-transparent" />

              {/* CTA + slide counter */}
              <div className="flex items-center gap-4 flex-wrap">
                <CaseStudyButton project={project} />
                <span className="text-xs text-slate-500 tabular-nums">
                  {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          {/* ── Arrow navigation ── */}
          <div className="absolute right-6 top-6 flex gap-2 md:right-10 md:top-10">
            <ArrowBtn direction="left" onClick={prev} />
            <ArrowBtn direction="right" onClick={next} />
          </div>

          {/* ── Dot indicators ── */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === active
                  ? 'w-8 bg-gradient-to-r from-cyan-400 to-purple-500'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
              />
            ))}
          </div>

          {/* ── Progress bar ── */}
          {!paused && (
            <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden rounded-b-3xl">
              <div
                key={`prog-${animKey}`}
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                style={{
                  animation: `prog-fill ${AUTO_DELAY}ms linear forwards`,
                }}
              />
            </div>
          )}
        </div>

        {/* ── Thumbnail strip ── */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {projects.map((p, i) => (
            <button
              key={p?.title ?? i}
              onClick={() => goTo(i)}
              className={`group relative overflow-hidden rounded-xl border transition-all duration-500 ${i === active
                ? 'border-cyan-400/60 shadow-lg shadow-cyan-500/20'
                : 'border-white/10 hover:border-white/30'
                }`}
            >
              {/* Thumbnail image — prefer flat image, fallback to color blob, then default gradient */}
              {p?.image
                ? <img src={p.image} alt={p?.title ?? 'Project'} className="h-16 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-20" />
                : <div
                  className={`h-16 w-full sm:h-20 ${!p?.color ? 'bg-gradient-to-br from-cyan-900/40 to-purple-900/40' : ''}`}
                  style={p?.color ? { background: `linear-gradient(135deg, ${p.color}99, ${p.color}33)` } : undefined}
                />
              }
              {/* Overlay + title */}
              <div className={`absolute inset-0 flex items-end bg-gradient-to-t p-2 transition-all duration-300 ${i === active ? 'from-slate-950/90 via-slate-950/40' : 'from-slate-950/70 via-slate-950/20'
                }`}>
                <span className={`line-clamp-1 text-[10px] font-semibold leading-tight transition-colors duration-300 sm:text-xs ${i === active ? 'text-cyan-300' : 'text-slate-300'
                  }`}>
                  {p?.title ?? 'Untitled'}
                </span>
              </div>
              {/* Active cyan underline */}
              {i === active && (
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-purple-500" />
              )}
            </button>
          ))}
        </div>

      </div>

      {/* Keyframes — progress bar + phone fan animation */}
      <style>{`
        @keyframes prog-fill {
          from { width: 0%; }
          to   { width: 100%; }
        }

        /* ── Phone fan: left phone fans out to the left ── */
        @keyframes fan-left {
          0%   { transform: translateX(-50%) rotate(0deg)   scale(1); }
          60%  { transform: translateX(calc(-50% - 86px))  rotate(-10deg) scale(1); }
          100% { transform: translateX(calc(-50% - 80px))  rotate(-9deg)  scale(1); }
        }
        /* ── Phone fan: right phone fans out to the right ── */
        @keyframes fan-right {
          0%   { transform: translateX(-50%) rotate(0deg)   scale(1); }
          60%  { transform: translateX(calc(-50% + 86px))  rotate(10deg)  scale(1); }
          100% { transform: translateX(calc(-50% + 80px))  rotate(9deg)   scale(1); }
        }
        /* ── Center phone: gentle fade + rise ── */
        @keyframes fan-center {
          0%   { transform: translateX(-50%) translateY(14px) scale(1); opacity: 0.4; }
          100% { transform: translateX(-50%) translateY(0px)  scale(1); opacity: 1;   }
        }
        /* ── Subtle idle float loop after fan-in ── */
        @keyframes float-idle {
          0%, 100% { transform: translateX(-50%) translateY(0px)  scale(1); }
          50%       { transform: translateX(-50%) translateY(-4px) scale(1); }
        }

        .phone-fan .phone-left {
          animation:
            fan-left   0.7s cubic-bezier(0.34,1.56,0.64,1) 0.15s both;
        }
        .phone-fan .phone-right {
          animation:
            fan-right  0.7s cubic-bezier(0.34,1.56,0.64,1) 0.15s both;
        }
        .phone-fan .phone-center {
          animation:
            fan-center 0.5s ease                            0.05s both,
            float-idle 3.5s ease-in-out                     1.2s  infinite;
        }
      `}</style>
    </section>
  )
}

export default Projects
