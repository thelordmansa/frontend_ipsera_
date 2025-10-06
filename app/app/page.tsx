export default function AppHub() {
  const items = [
    { href: "/app/titles", label: "Titles", note: "requires auth" },
    { href: "/app/descriptions", label: "Descriptions", note: "requires auth" },
    { href: "/app/scripts", label: "Scripts", note: "requires auth" },
    { href: "/app/thumbnails", label: "Thumbnails", note: "public" },
  ];
  return (
    <main className="mx-auto max-w-xl p-8 space-y-6">
      <h1 className="text-xl font-semibold">Modules</h1>
      <ul className="grid grid-cols-1 gap-3">
        {items.map((it) => (
          <li key={it.href}>
            <a href={it.href} className="block rounded border p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <span>{it.label}</span>
                <span className="text-xs text-gray-500">{it.note}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-500">
        Tip: si 401 sur Titles/Descriptions/Scripts, connecter via /auth quand prêt.
      </p>
    </main>
  );
}
