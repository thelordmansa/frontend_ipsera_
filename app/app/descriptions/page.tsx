"use client";
import { useState } from "react";

type ApiOut = {
  keywords: { keyword: string; score: number }[];
  description: string;
  hashtags: string[];
};

export default function DescriptionsPage() {
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("en");
  const [country, setCountry] = useState("US");

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [data, setData] = useState<ApiOut | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null); setData(null);
    if (!subject.trim()) { setErr("Subject required"); return; }
    setLoading(true);
    try {
      const payload = {
        subject,
        ...(category ? { category } : {}),
        language: language || "en",
        country: country || "US",
      };
      const res = await fetch("/api/ipsera/descriptions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
      <h1 className="text-xl font-semibold">YouTube Descriptions</h1>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Subject *</label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded border p-2"
            placeholder="Top 3 cryptos to watch in 2025"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium">Category (optional)</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded border p-2"
              placeholder="finance, tech, gaming..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Language</label>
            <input
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full rounded border p-2"
              placeholder="en"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Country</label>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full rounded border p-2"
            placeholder="US"
          />
        </div>

        <button
          type="submit"
          disabled={loading || !subject.trim()}
          className="rounded border px-4 py-2 disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>

      {err && <div className="rounded border border-red-400 bg-red-50 p-3 text-sm">{err}</div>}

      {data && (
        <div className="space-y-4">
          <section className="rounded border p-3">
            <h2 className="mb-2 font-medium">Description</h2>
            <div className="whitespace-pre-wrap text-sm">{data.description}</div>
          </section>

          <section className="rounded border p-3">
            <h2 className="mb-2 font-medium">Hashtags</h2>
            <div className="flex flex-wrap gap-2 text-sm">
              {data.hashtags?.map((h, i) => (
                <span key={i} className="rounded border px-2 py-1">#{h.replace(/^#/, "")}</span>
              ))}
            </div>
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
