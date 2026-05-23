"use client";

import { useState } from 'react'

const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact']

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-[92%] max-w-6xl items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-wide text-white">
          NF Nexa Tech
        </a>

        <button
          className="rounded-lg border border-white/20 px-3 py-2 text-sm text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Menu
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-200 transition hover:text-cyan-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <ul className="space-y-3 border-t border-white/10 bg-slate-900 p-4 md:hidden">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-slate-100 transition hover:bg-white/10"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
