"use client";
import { useState } from "react";

type ApiOut = {
  keywords: { keyword: string; score: number }[];
  titleA: string;
  titleB: string;
};

export default function TitlesPage() {
  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [data, setData] = useState<ApiOut | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null); setData(null);
    if (!topic.trim()) { setErr("Topic required"); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/ipsera/titles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, ...(style ? { style } : {}) }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const json = (await res.json()) as ApiOut;
      setData(json);
    } catch (e: any) {
      setErr(e.message || "Request failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl p-6 space-y-6">
      <h1 className="text-xl font-semibold">YouTube Titles</h1>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Topic *</label>
          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full rounded border p-2"
            placeholder="How to invest in crypto?"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Category (optional)</label>
          <input
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="w-full rounded border p-2"
            placeholder="finance, tech, gaming..."
          />
        </div>
        <button
          type="submit"
          disabled={loading || !topic.trim()}
          className="rounded border px-4 py-2 disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>

      {err && <div className="rounded border border-red-400 bg-red-50 p-3 text-sm">{err}</div>}

      {data && (
        <div className="space-y-4">
          <section className="rounded border p-3">
            <h2 className="mb-2 font-medium">Titles</h2>
            <CopyRow label="Title A" value={data.titleA} />
            <CopyRow label="Title B" value={data.titleB} />
          </section>

          <section className="rounded border p-3">
            <h2 className="mb-2 font-medium">Keywords</h2>
            <ul className="list-disc pl-5 text-sm">
              {data.keywords?.map((k, i) => (
                <li key={i}>{k.keyword} — {k.score}</li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center gap-3">
      <div className="min-w-24 text-sm font-medium">{label}</div>
      <div className="flex-1 truncate">{value}</div>
      <button
        onClick={() => navigator.clipboard.writeText(value).then(() => setCopied(true))}
        className="rounded border px-2 py-1 text-sm"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
