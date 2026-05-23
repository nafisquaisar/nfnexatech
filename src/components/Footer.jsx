"use client";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex w-[92%] max-w-6xl flex-col items-center justify-between gap-4 py-8 text-sm text-slate-400 md:flex-row">
        <p className="font-medium text-slate-200">NF Nexa Tech</p>
        <div className="flex gap-5">
          <a href="#" className="transition hover:text-cyan-300">
            LinkedIn
          </a>
          <a href="#" className="transition hover:text-cyan-300">
            GitHub
          </a>
          <a href="#" className="transition hover:text-cyan-300">
            Facebook
          </a>
        </div>
        <p>© {new Date().getFullYear()} NF Nexa Tech. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
