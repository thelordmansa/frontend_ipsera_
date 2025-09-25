// app/page.tsx
export default function Page() {
  const hero = {
    headline: "Create better YouTube videos, faster.",
    sub: "Automate titles, descriptions, scripts, and thumbnails — publish more, stress less.",
    ctaPrimary: "Join the waitlist",
    ctaSecondary: "See how it works",
  };

  const proofs = [
    { label: "Publish 2× faster", sub: "Measurable results" },
    { label: "+35% average CTR", sub: "Users see impact from the first video." },
    { label: "Save 4 hours per video", sub: "No more prep time lost." },
  ];

  const why = {
    problems: [
      "Hours lost on keyword research and titles",
      "Inconsistent descriptions and metadata",
      "Weak thumbnails that don’t convert",
      "Hard to keep a consistent cadence",
    ],
    benefits: [
      "Save hours each week",
      "Higher CTR with optimized hooks & thumbnails",
      "Stay consistent — AI drafts, you refine",
    ],
    cta: "Join the waitlist",
  };

  const features = [
    {
      name: "SEO-Optimized YouTube Titles",
      bullets: ["Real keywords & volumes", "Competition insight", "Score preview"],
      metrics: [
        { k: "SEO score", v: "96/100" },
        { k: "Keywords", v: "47" },
        { k: "Monthly volume", v: "125,000" },
        { k: "Competition", v: "Medium" },
      ],
    },
    {
      name: "Viral Video Descriptions",
      bullets: ["Hashtags & timestamps", "Strong CTAs", "Readable & SEO-friendly"],
      metrics: [
        { k: "Expected engagement", v: "+45%" },
        { k: "Optimal hashtags", v: "15" },
        { k: "Ideal length", v: "125 words" },
      ],
    },
    {
      name: "Engaging Video Scripts",
      bullets: ["Hook → Problem → Solution", "Tone & duration control", "Retention-focused"],
      metrics: [
        { k: "Expected retention", v: "78%" },
        { k: "Optimal length", v: "8m 30s" },
        { k: "Hook points", v: "5" },
      ],
    },
    {
      name: "AI Thumbnails",
      bullets: ["Viral design system", "Consistent, on-brand", "Adaptive to niche/style"],
      metrics: [
        { k: "CTR lift (example)", v: "+325%" },
        { k: "Before CTR", v: "2.1%" },
        { k: "After CTR", v: "8.9%" },
      ],
    },
  ];

  const steps = [
    { title: "Type your idea", desc: "Tell Ipsera what your video is about." },
    { title: "AI generates", desc: "Titles, descriptions, scripts & thumbnails." },
    { title: "Pick & tweak", desc: "Choose the best options, edit in seconds." },
    { title: "Publish-ready", desc: "Optimized and ready to go live." },
  ];

  const beforeAfter = {
    before: { img: "/before.jpg", ctr: "2.1%", note: "Basic thumbnail" },
    after: { img: "/after.jpg", ctr: "8.9%", lift: "+325%" },
  };

  const testimonials = [
    { text: "Content is king, but engagement is queen—and ruler.", author: "Mari Smith — Digital Marketing Expert" },
    { text: "The more omnipresent you are in your prospect’s mind, the closer a relationship you build.", author: "Sébastien Night — Entrepreneurs Libres" },
    { text: "Your brand isn’t what you say it is—it’s what Google says it is.", author: "Chris Anderson — TED" },
    { text: "Google’s algorithms don’t judge your content’s quality. Don’t worry—your customers will.", author: "Sylvain Montmory — Marketing & AI" },
  ];

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section id="hero" className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
            {hero.headline.split(" ").slice(0,3).join(" ")}{" "}
            <span className="grad-accent">{hero.headline.split(" ").slice(3).join(" ")}</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-muted">{hero.sub}</p>
          <div className="mt-9 flex items-center justify-center gap-4">
            <a href="#waitlist" className="rounded-2xl px-5 py-3 text-sm font-medium bg-white text-black">
              {hero.ctaPrimary}
            </a>
            <a href="#how" className="rounded-2xl px-5 py-3 text-sm font-medium border-base">
              {hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* PROOF CARDS */}
      <section id="proof" className="px-6 pb-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
          {proofs.map((it,i)=>(
            <div key={i} className="card p-6">
              <div className="text-xl font-semibold">{it.label}</div>
              {it.sub && <div className="mt-1 text-sm text-muted">{it.sub}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* WHY IPSERA */}
      <section id="why" className="px-6 py-16">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Current problems</h2>
            <ul className="mt-4 space-y-2 text-muted">{why.problems.map((p,i)=><li key={i}>✗ {p}</li>)}</ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">The solution</h2>
            <ul className="mt-4 space-y-2 text-muted">{why.benefits.map((b,i)=><li key={i}>✓ {b}</li>)}</ul>
            <a href="#waitlist" className="mt-6 inline-block rounded-2xl border-base px-4 py-2 text-sm">{why.cta}</a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {features.map((m,idx)=>(
            <div key={idx} className="card p-6">
              <h3 className="text-lg font-semibold">{m.name}</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted">
                {m.bullets.map((b,i)=>(<li key={i}>• {b}</li>))}
              </ul>
              {!!m.metrics?.length && (
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {m.metrics.map((mm,k)=>(
                    <div key={k} className="rounded-xl border-base p-3">
                      <div className="text-xs text-muted">{mm.k}</div>
                      <div className="text-sm font-medium">{mm.v}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-4">
          {steps.map((s,i)=>(
            <div key={i} className="card p-6">
              <div className="text-[11px] text-muted uppercase tracking-wide">Step {i+1}</div>
              <div className="mt-1 font-semibold">{s.title}</div>
              <div className="mt-2 text-sm text-muted">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON BEFORE/AFTER */}
      <section id="comparison" className="px-6 py-16">
        <h2 className="mx-auto max-w-6xl text-2xl font-semibold">4. AI Thumbnails</h2>
        <div className="mx-auto mt-6 grid max-w-6xl gap-6 md:grid-cols-2">
          {/* BEFORE */}
          <div className="card p-5">
            <div className="mb-3 text-[11px] font-semibold tracking-wide text-red-400">BEFORE</div>
            <div className="overflow-hidden rounded-xl border-base">
              {beforeAfter.before.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={beforeAfter.before.img} alt="Before" className="h-auto w-full object-cover" />
              ) : (
                <div className="aspect-[16/9] bg-[#0C0D10]" />
              )}
            </div>
            <div className="mt-3 text-sm">
              <span className="font-semibold text-red-400">CTR: {beforeAfter.before.ctr}</span>
              {beforeAfter.before.note && <span className="text-muted block">{beforeAfter.before.note}</span>}
            </div>
          </div>
          {/* AFTER */}
          <div className="card p-5">
            <div className="mb-3 text-[11px] font-semibold tracking-wide text-emerald-400">AFTER</div>
            <div className="overflow-hidden rounded-xl border-base">
              {beforeAfter.after.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={beforeAfter.after.img} alt="After" className="h-auto w-full object-cover" />
              ) : (
                <div className="aspect-[16/9] bg-[#0C0D10]" />
              )}
            </div>
            <div className="mt-3 text-sm">
              <span className="font-semibold text-emerald-400">CTR: {beforeAfter.after.ctr}</span>
              <div className="text-emerald-400 text-xs">{beforeAfter.after.lift} improvement</div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { t:"Viral design", d:"Colors, typography, and composition optimized for clicks." },
            { t:"Advanced AI", d:"Fast, consistent, on-brand visuals." },
            { t:"Adaptive", d:"Adapts to your niche and style to maximize impact." },
          ].map((b,i)=>(
            <div key={i} className="card p-5">
              <div className="font-medium">{b.t}</div>
              <div className="text-sm text-muted mt-1">{b.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="px-6 py-16">
        <h2 className="mx-auto max-w-6xl text-3xl font-semibold">What People Are Saying</h2>
        <p className="mx-auto max-w-6xl text-sm text-muted mt-2">
          Don’t just take our word for it. Here’s what real people are saying about Ipsera.
        </p>
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t,i)=>(
            <figure key={i} className="card p-5">
              <div className="text-sm text-neutral-300">“{t.text}”</div>
              <figcaption className="mt-3 text-xs text-muted">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="waitlist" className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-semibold">Focus on creating. Ipsera handles the prep.</h3>
          <a href="/#" className="mt-6 inline-block rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black">
            Join the waitlist
          </a>
          <div className="mt-3 text-xs text-muted">No spam. Unsubscribe anytime.</div>
        </div>
      </section>
    </main>
  );
}
