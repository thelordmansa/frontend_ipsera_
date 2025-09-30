// app/page.tsx
export default function Page() {
  // COPY SOURCE (validé)
  const heroCopy = {
    headline: "The next-level AI YouTube studio.",
    sub: "Automate titles, scripts, descriptions, and thumbnails — double your channel growth and save hours every week.",
    ctaPrimary: "Start Free Trial",
    ctaSecondary: "Watch the Demo",
  };

  const heroCards = [
    { title: "Generate Titles", desc: "Get click-worthy, SEO-optimized titles in seconds." },
    { title: "Write Descriptions", desc: "Algorithm-friendly copy that audiences actually read." },
    { title: "Design Thumbnails", desc: "CTR-focused visuals tailored to your channel look." },
    { title: "Draft Scripts", desc: "Retention-oriented outlines and full scripts, ready to record." },
  ];

  const videoCopy = {
    title: "Watch the demo, then create your next video in 60 seconds.",
    sub: "From a single idea, Ipsera generates titles, descriptions, scripts, and thumbnails — ready to publish.",
    src: "/demo.mp4", // TODO: remplacer par l’asset réel (mp4/webm)
    poster: "/demo-poster.jpg", // TODO: remplacer si nécessaire
  };

  const testimonials = [
    { text: "Prep went from hours to minutes. Exactly what I needed to post weekly.", author: "Maya — creator" },
    { text: "Our CTR jumped 30% after switching thumbnails with Ipsera.", author: "Alex — gaming" },
    { text: "Titles finally match what viewers search. Views up, stress down.", author: "Chris — finance" },
    { text: "Scripts keep people watching. Retention lifted without extra editing.", author: "Dana — vlog" },
    { text: "Descriptions that actually rank. We see it in Studio.", author: "Liam — tutorials" },
    { text: "From scattered tasks to one clean workflow. Feels pro.", author: "Zoe — tech" },
    { text: "Fast, consistent, on-brand thumbnails. Huge time saver.", author: "Ben — podcast" },
    { text: "Best mix of SEO data and creative control I’ve tried.", author: "Aisha — education" },
  ];

  // CONTENU EXISTANT (conservé/après les 3 premières sections)
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

  return (
    <main className="min-h-screen">
      {/* ===== 1) HERO (Layout Saasfly: left copy / right feature cards) ===== */}
      <section id="hero" className="relative overflow-hidden px-6 pt-24 pb-16 md:pt-32">
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left copy */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
              {heroCopy.headline}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-muted">{heroCopy.sub}</p>
            <div className="mt-9 flex items-center gap-4">
              <a href="/signup" className="rounded-2xl px-5 py-3 text-sm font-medium bg-white text-black">
                {heroCopy.ctaPrimary}
              </a>
              <a href="#demo" className="rounded-2xl px-5 py-3 text-sm font-medium border-base">
                {heroCopy.ctaSecondary}
              </a>
            </div>

            {/* micro-row optionnelle */}
            <div className="mt-6 text-xs text-muted">
              SEO Titles • AI Scripts • Smart Descriptions • AI Thumbnails
            </div>
          </div>

          {/* Right cards (masonry-like) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
            {heroCards.map((c, i) => (
              <div key={i} className="card p-5 h-full">
                <div className="text-base font-semibold">{c.title}</div>
                <div className="mt-1 text-sm text-muted">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2) VIDEO BANNER (full width, like Saasfly) ===== */}
      <section id="demo" className="px-0 pb-8">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl md:text-4xl font-semibold">
            {videoCopy.title}
          </h2>
          <p className="mt-2 text-center text-sm text-muted">{videoCopy.sub}</p>
        </div>

        <div className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-2xl border-base">
          {/* Remplacer par <Video/> interne si nécessaire */}
          <video
            className="w-full h-auto"
            autoPlay
            muted
            loop
            playsInline
            poster={videoCopy.poster}
            controls={false}
          >
            <source src={videoCopy.src} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ===== 3) TESTIMONIALS (What People Are Saying) ===== */}
      <section id="testimonials-top" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-center">What creators are saying</h2>
          <p className="text-sm text-muted text-center mt-2">Real outcomes from real channels.</p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} className="card p-5">
                <div className="text-sm text-neutral-300">“{t.text}”</div>
                <figcaption className="mt-3 text-xs text-muted">— {t.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== sections existantes (conservées) ===== */}

      {/* PROOF CARDS */}
      <section id="proof" className="px-6 pb-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
          {proofs.map((it, i) => (
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
            <ul className="mt-4 space-y-2 text-muted">
              {why.problems.map((p, i) => (
                <li key={i}>✗ {p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">The solution</h2>
            <ul className="mt-4 space-y-2 text-muted">
              {why.benefits.map((b, i) => (
                <li key={i}>✓ {b}</li>
              ))}
            </ul>
            <a href="#waitlist" className="mt-6 inline-block rounded-2xl border-base px-4 py-2 text-sm">
              {why.cta}
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {features.map((m, idx) => (
            <div key={idx} className="card p-6">
              <h3 className="text-lg font-semibold">{m.name}</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted">
                {m.bullets.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
              {!!m.metrics?.length && (
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {m.metrics.map((mm, k) => (
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
          {steps.map((s, i) => (
            <div key={i} className="card p-6">
              <div className="text-[11px] text-muted uppercase tracking-wide">Step {i + 1}</div>
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={beforeAfter.before.img} alt="Before" className="h-auto w-full object-cover" />
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={beforeAfter.after.img} alt="After" className="h-auto w-full object-cover" />
            </div>
            <div className="mt-3 text-sm">
              <span className="font-semibold text-emerald-400">CTR: {beforeAfter.after.ctr}</span>
              <div className="text-emerald-400 text-xs">{beforeAfter.after.lift} improvement</div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { t: "Viral design", d: "Colors, typography, and composition optimized for clicks." },
            { t: "Advanced AI", d: "Fast, consistent, on-brand visuals." },
            { t: "Adaptive", d: "Adapts to your niche and style to maximize impact." },
          ].map((b, i) => (
            <div key={i} className="card p-5">
              <div className="font-medium">{b.t}</div>
              <div className="text-sm text-muted mt-1">{b.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS (section originale en bas – peut être conservée ou supprimée) */}
      <section id="testimonials" className="px-6 py-16">
        <h2 className="mx-auto max-w-6xl text-3xl font-semibold">What People Are Saying</h2>
        <p className="mx-auto max-w-6xl text-sm text-muted mt-2">
          Don’t just take our word for it. Here’s what real people are saying about Ipsera.
        </p>
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((t, i) => (
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
          <a href="/signup" className="mt-6 inline-block rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black">
            Start Free Trial
          </a>
          <div className="mt-3 text-xs text-muted">No spam. Cancel anytime.</div>
        </div>
      </section>
    </main>
  );
}
