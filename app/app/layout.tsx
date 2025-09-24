import type { ReactNode } from 'react';
import Link from 'next/link';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-black border-r border-gray-700 p-4 flex flex-col">
        <div className="mb-8 flex items-center gap-2">
          <img src="/ipsera-logo.svg" alt="Ipsera Logo" className="h-8 w-8" />
          <span className="text-xl font-semibold">Ipsera</span>
        </div>
        <nav className="flex-1 flex flex-col gap-2">
          <Link href="/app/titles" className="hover:bg-gray-800 rounded-md p-2">Titles</Link>
          <Link href="/app/descriptions" className="hover:bg-gray-800 rounded-md p-2">Descriptions</Link>
          <Link href="/app/scripts" className="hover:bg-gray-800 rounded-md p-2">Scripts</Link>
          <Link href="/app/thumbnails" className="hover:bg-gray-800 rounded-md p-2">Thumbnails</Link>
        </nav>
      </aside>
      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Topbar */}
        <header className="bg-black border-b border-gray-700 p-4">
          <h1 className="text-lg font-semibold">Ipsera Dashboard</h1>
        </header>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}