// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import GalaxyBackground from "./components/GalaxyBackground";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0B0B0C] text-white">
        {/* Galaxy animated background (fixed, non interactif) */}
        <GalaxyBackground />

        {/* NAVBAR */}
        <header className="sticky top-0 z-40 border-b border-neutral-900/70 backdrop-blur supports-[backdrop-filter]:bg-black/40">
          <nav className="container flex h-14 items-center justify-between">
            {/* Left: Logo / Brand */}
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                <span className="text-xs">S</span>
              </span>
              <span className="font-semibold tracking-tight">Ipsera</span>
            </div>

            {/* Center: Nav (desktop) */}
            <ul className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
              <li><a className="hover:text-white transition" href="#features">Features</a></li>
              <li><a className="hover:text-white transition" href="#pricing">Pricing</a></li>
              <li><a className="hover:text-white transition" href="#blog">Blog</a></li>
              <li><a className="hover:text-white transition" href="#docs">Documentation</a></li>
            </ul>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              <a href="/login" className="btn btn-ghost hidden md:inline-flex">Login</a>
              <a href="/signup" className="btn btn-primary">Sign up</a>
            </div>
          </nav>
        </header>

        {/* PAGE CONTENT */}
        <main className="relative">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="border-t border-neutral-900/70 mt-24">
          <div className="container py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>© 2025 Ipsera. All rights reserved.</div>
            <ul className="flex items-center gap-6">
              <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
