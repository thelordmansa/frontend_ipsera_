// app/page.tsx
import Hero from "./(sections)/hero/Hero";
import ProofCards from "./(sections)/proof-cards/ProofCards";
import WhyIpsera from "./(sections)/why-ipsera/WhyIpsera";
import CoreFeatures from "./(sections)/core-features/CoreFeatures";
import HowItWorks from "./(sections)/how-it-works/HowItWorks";
import Comparison from "./(sections)/comparison/Comparison";
import Testimonials from "./(sections)/testimonials/Testimonials";
import CtaFinal from "./(sections)/cta-final/CtaFinal";

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
        { k: "Keywords identified", v: "47" },
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
      <Hero {...hero} />
      <ProofCards items={proofs} />
      <WhyIpsera {...why} />
      <CoreFeatures modules={features} />
      <HowItWorks steps={steps} />
      <Comparison data={beforeAfter} />
      <Testimonials items={testimonials} />
      <CtaFinal headline="Focus on creating. Ipsera handles the prep." cta="Join the waitlist" />
    </main>
  );
}
export default function Hero({
  headline, sub, ctaPrimary, ctaSecondary,
}: { headline:string; sub:string; ctaPrimary:string; ctaSecondary?:string }) {
  const words = headline.split(" ");
  const first = words.slice(0,3).join(" ");
  const rest = words.slice(3).join(" ");
  return (
    <section id="hero" className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
          {first} {rest ? <span className="grad-accent">{rest}</span> : null}
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted">{sub}</p>
        <div className="mt-9 flex items-center justify-center gap-4">
          <a href="#waitlist" className="rounded-2xl px-5 py-3 text-sm font-medium bg-white text-black">
            {ctaPrimary}
          </a>
          {ctaSecondary ? (
            <a href="#how" className="rounded-2xl px-5 py-3 text-sm font-medium border-base">
              {ctaSecondary}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
export default function Hero({
  headline, sub, ctaPrimary, ctaSecondary,
}: { headline:string; sub:string; ctaPrimary:string; ctaSecondary?:string }) {
  const words = headline.split(" ");
  const first = words.slice(0,3).join(" ");
  const rest = words.slice(3).join(" ");
  return (
    <section id="hero" className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
          {first} {rest ? <span className="grad-accent">{rest}</span> : null}
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted">{sub}</p>
        <div className="mt-9 flex items-center justify-center gap-4">
          <a href="#waitlist" className="rounded-2xl px-5 py-3 text-sm font-medium bg-white text-black">
            {ctaPrimary}
          </a>
          {ctaSecondary ? (
            <a href="#how" className="rounded-2xl px-5 py-3 text-sm font-medium border-base">
              {ctaSecondary}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
export default function Hero({
  headline, sub, ctaPrimary, ctaSecondary,
}: { headline:string; sub:string; ctaPrimary:string; ctaSecondary?:string }) {
  const words = headline.split(" ");
  const first = words.slice(0,3).join(" ");
  const rest = words.slice(3).join(" ");
  return (
    <section id="hero" className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
          {first} {rest ? <span className="grad-accent">{rest}</span> : null}
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted">{sub}</p>
        <div className="mt-9 flex items-center justify-center gap-4">
          <a href="#waitlist" className="rounded-2xl px-5 py-3 text-sm font-medium bg-white text-black">
            {ctaPrimary}
          </a>
          {ctaSecondary ? (
            <a href="#how" className="rounded-2xl px-5 py-3 text-sm font-medium border-base">
              {ctaSecondary}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
