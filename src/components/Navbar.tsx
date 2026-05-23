"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Nav items.
 * anchor items get `/#anchor` when NOT on the homepage.
 * href items are always absolute routes.
 */
const NAV_ITEMS = [
  { label: "Home", anchor: "home" },
  { label: "About", anchor: "about" },
  { label: "Services", anchor: "services" },
  { label: "Projects", anchor: "projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", anchor: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  /** Resolve href — anchor links get `/#anchor` when off the homepage */
  function getHref(item: (typeof NAV_ITEMS)[number]): string {
    if ("href" in item && item.href) return item.href;
    const anchor = (item as { anchor: string }).anchor;
    return isHome ? `#${anchor}` : `/#${anchor}`;
  }

  const isBlogPage = pathname.startsWith("/blog");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-[92%] max-w-6xl items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo1.png"
            alt="NF Nexa Tech"
            width={42}
            height={42}
            className="rounded-xl object-cover"
            priority
          />
          <span className="text-xl font-bold tracking-wide text-white">
            NF Nexa Tech
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg border border-white/20 px-3 py-2 text-sm text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          Menu
        </button>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => {
            const href = getHref(item);
            const isActive =
              "href" in item && item.href
                ? pathname.startsWith(item.href)
                : false;

            return (
              <li key={item.label}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition hover:text-cyan-300 ${
                    isActive ? "text-cyan-400" : "text-slate-200"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="space-y-1 border-t border-white/10 bg-slate-900 p-3 md:hidden">
          {NAV_ITEMS.map((item) => {
            const href = getHref(item);
            const isActive =
              "href" in item && item.href
                ? pathname.startsWith(item.href)
                : false;

            return (
              <li key={item.label}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm transition hover:bg-white/10 ${
                    isActive ? "text-cyan-400" : "text-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}

export default Navbar;