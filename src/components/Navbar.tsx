"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Types ─────────────────────────────────────────────── */
type PlainItem = { label: string; href?: string; anchor?: string };
type DropdownItem = { label: string; dropdown: DropdownLink[] };
type NavItem = PlainItem | DropdownItem;

type DropdownLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
  desc: string;
};

/* ─── Service dropdown links ─────────────────────────────── */
const SERVICE_LINKS: DropdownLink[] = [
  {
    label: "Web Development",
    href: "/services/web-development",
    desc: "Business websites & web apps",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: "Android Apps",
    href: "/services/android-app-development",
    desc: "Native Android applications",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    label: "Flutter Apps",
    href: "/services/flutter-app-development",
    desc: "Cross-platform iOS & Android",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      </svg>
    ),
  },
  {
    label: "SaaS Development",
    href: "/services/saas-mvp-development",
    desc: "MVPs to full SaaS platforms",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10Z" />
      </svg>
    ),
  },
  {
    label: "UI/UX Design",
    href: "/services/ui-ux-design",
    desc: "Beautiful, conversion-first design",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    label: "Backend & APIs",
    href: "/services/backend-api-development",
    desc: "Scalable servers & REST APIs",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="4" rx="1" /><rect x="2" y="10" width="20" height="4" rx="1" /><rect x="2" y="17" width="20" height="4" rx="1" />
      </svg>
    ),
  },
];

/* ─── Nav items ──────────────────────────────────────────── */
const NAV_ITEMS: NavItem[] = [
  { label: "Home", anchor: "home" },
  { label: "About", href: "/about" },
  { label: "Services", dropdown: SERVICE_LINKS },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", anchor: "contact" },
];

/* ─── Dropdown animation variants ───────────────────────── */
const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.97,
    transition: { duration: 0.14, ease: "easeIn" as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -6 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.04, duration: 0.2, ease: "easeOut" as const },
  }),
};

/* ─── Component ─────────────────────────────────────────── */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      // Hide when scrolling DOWN past 80px, show when scrolling UP
      if (currentY > 80) {
        setHidden(currentY > lastScrollY.current);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => { setOpenDropdown(null); setIsOpen(false); }, [pathname]);

  function getHref(item: PlainItem): string {
    if (item.href) return item.href;
    const anchor = item.anchor!;
    return isHome ? `#${anchor}` : `/#${anchor}`;
  }

  function isItemActive(item: NavItem): boolean {
    if ("dropdown" in item) return pathname.startsWith("/services");
    if ((item as PlainItem).href) return pathname.startsWith((item as PlainItem).href!);
    return isHome && item.label === "Home";
  }

  function handleMouseEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  }

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: hidden ? "-110%" : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >

      {/* ── Floating pill ── */}
      <nav
        className={`mx-auto flex h-[64px] max-w-6xl items-center justify-between rounded-2xl px-4 sm:px-6 backdrop-blur-xl transition-all duration-300 ${scrolled
            ? "bg-white shadow-[0_8px_32px_rgba(31,160,177,0.12),0_2px_8px_rgba(66,49,49,0.06)] border border-[#E7F1F2]"
            : "bg-white/95 shadow-[0_4px_24px_rgba(31,160,177,0.08),0_1px_4px_rgba(66,49,49,0.04)] border border-[#E7F1F2]/80"
          }`}
      >

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <Image
            src="/logo/navlogo.png"
            alt="NF Nexa Tech"
            width={36}
            height={36}
            className="rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="flex flex-col leading-none">
            <span className="text-[16px] font-bold tracking-tight text-[#423131]">NF Nexa Tech</span>
            <span className="text-[8.5px] font-semibold uppercase tracking-[0.2em] text-[#1FA0B1]">Innovating The Future</span>
          </div>
        </Link>

        {/* ── Desktop nav links ── */}
        <ul className="hidden items-center gap-0.5 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item);
            const hasDropdown = "dropdown" in item;
            const isDropOpen = openDropdown === item.label;

            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => hasDropdown && handleMouseEnter(item.label)}
                onMouseLeave={() => hasDropdown && handleMouseLeave()}
              >
                {hasDropdown ? (
                  /* Services button — opens dropdown */
                  <button
                    className={`relative flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${active ? "text-[#E8763A]" : "text-[#423131] hover:text-[#1FA0B1] hover:bg-[#E7F1F2]/50"
                      }`}
                  >
                    {item.label}
                    <motion.svg
                      className="w-3 h-3 opacity-60"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                      animate={{ rotate: isDropOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                    </motion.svg>
                    {active && (
                      <span className="absolute bottom-[3px] left-1/2 -translate-x-1/2 h-[3px] w-[18px] rounded-full bg-[#E8763A]" />
                    )}
                  </button>
                ) : (
                  /* Plain link */
                  <Link
                    href={getHref(item as PlainItem)}
                    className={`relative flex items-center px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${active ? "text-[#E8763A]" : "text-[#423131] hover:text-[#1FA0B1] hover:bg-[#E7F1F2]/50"
                      }`}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute bottom-[3px] left-1/2 -translate-x-1/2 h-[3px] w-[18px] rounded-full bg-[#E8763A]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                )}

                {/* ── Dropdown panel ── */}
                <AnimatePresence>
                  {hasDropdown && isDropOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-[480px] rounded-2xl border border-[#E7F1F2] bg-white/98 p-3 shadow-[0_16px_48px_rgba(31,160,177,0.12),0_4px_16px_rgba(66,49,49,0.08)] backdrop-blur-xl"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Grid of 2 columns */}
                      <div className="grid grid-cols-2 gap-1.5">
                        {(item as DropdownItem).dropdown.map((link, i) => (
                          <motion.div
                            key={link.href}
                            custom={i}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            <Link
                              href={link.href}
                              className="group flex items-start gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-[#E7F1F2]/60"
                            >
                              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#B5E5EB]/40 text-[#1FA0B1] transition-colors group-hover:bg-[#1FA0B1] group-hover:text-white">
                                {link.icon}
                              </span>
                              <div>
                                <p className="text-sm font-semibold text-[#423131] group-hover:text-[#1FA0B1] transition-colors">
                                  {link.label}
                                </p>
                                <p className="text-[11px] leading-tight text-[#6B5A5A] mt-0.5">{link.desc}</p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                      {/* Footer CTA */}
                      <div className="mt-2 border-t border-[#E7F1F2] pt-2">
                        <Link
                          href="/services"
                          className="flex items-center justify-between rounded-xl bg-[#E7F1F2]/50 px-4 py-2.5 text-sm font-semibold text-[#1FA0B1] transition hover:bg-[#B5E5EB]/40"
                        >
                          <span>View all services</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/start-project"
          id="nav-cta-btn"
          className="hidden md:flex items-center gap-2 rounded-full bg-[#F9E1CD] px-5 py-2.5 text-sm font-bold text-[#423131] shadow-sm transition-all duration-200 hover:bg-[#f5d4b8] hover:shadow-md hover:scale-[1.02] active:scale-[0.98] shrink-0"
        >
          Get a Free Quote
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-[5px] rounded-lg border border-[#C6D1D7] bg-[#FAF7F5] p-2.5 md:hidden transition-colors hover:border-[#1FA0B1]/50"
          onClick={() => setIsOpen((p) => !p)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className={`block h-[2px] w-5 rounded-full bg-[#423131] transition-all duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-5 rounded-full bg-[#423131] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-5 rounded-full bg-[#423131] transition-all duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
            exit={{ opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.15, ease: "easeIn" } }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-[#E7F1F2] bg-white shadow-[0_8px_32px_rgba(31,160,177,0.10)] backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-0.5 px-3 py-3">
              {NAV_ITEMS.map((item) => {
                const active = isItemActive(item);
                const hasDropdown = "dropdown" in item;
                const mobileOpen = mobileExpanded === item.label;

                return (
                  <li key={item.label}>
                    {hasDropdown ? (
                      <>
                        <button
                          className={`flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${active ? "bg-[#E7F1F2] text-[#E8763A]" : "text-[#423131] hover:bg-[#E7F1F2]/70"
                            }`}
                          onClick={() => setMobileExpanded(mobileOpen ? null : item.label)}
                        >
                          {item.label}
                          <motion.svg
                            className="w-4 h-4 opacity-50"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                            animate={{ rotate: mobileOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                          </motion.svg>
                        </button>

                        <AnimatePresence>
                          {mobileOpen && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto", transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
                              exit={{ opacity: 0, height: 0, transition: { duration: 0.18 } }}
                              className="overflow-hidden pl-3 mt-0.5 space-y-0.5"
                            >
                              {(item as DropdownItem).dropdown.map((link, i) => (
                                <motion.li
                                  key={link.href}
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0, transition: { delay: i * 0.04 } }}
                                >
                                  <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-[#6B5A5A] transition hover:bg-[#E7F1F2]/60 hover:text-[#1FA0B1]"
                                  >
                                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#B5E5EB]/40 text-[#1FA0B1]">
                                      {link.icon}
                                    </span>
                                    {link.label}
                                  </Link>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={getHref(item as PlainItem)}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${active ? "bg-[#E7F1F2] text-[#E8763A]" : "text-[#423131] hover:bg-[#E7F1F2]/70 hover:text-[#1FA0B1]"
                          }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}

              <li className="pt-1 pb-1">
                <Link
                  href="/start-project"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#F9E1CD] px-4 py-3 text-sm font-bold text-[#423131] transition hover:bg-[#f5d4b8]"
                >
                  Get a Free Quote →
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
