// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0B0B0C] text-white">
        <BackgroundFX />

        <header className="sticky top-0 z-40 border-b border-neutral-900/70 backdrop-blur supports-[backdrop-filter]:bg-black/40">
          <nav className="container flex h-14 items-center justify-between">
            {/* Left: Logo / Brand */}
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                {/* simple seahorse-like glyph */}
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

        <main className="relative">{children}</main>

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

/* --- Background FX: soft orbs + subtle particles (Saasfly-like, discret) --- */
function BackgroundFX() {
  return (
    <>
      {/* radial orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,_rgba(52,120,246,0.15),_transparent_70%)] blur-2xl" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,_rgba(111,71,255,0.12),_transparent_70%)] blur-2xl" />
      </div>

      {/* tiny particles / confetti lines */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className="absolute block h-px w-10 rotate-[20deg] bg-white/5"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              opacity: 0.35,
              transform: `rotate(${(i * 17) % 60}deg)`,
            }}
          />
        ))}
      </div>
    </>
  );
}
