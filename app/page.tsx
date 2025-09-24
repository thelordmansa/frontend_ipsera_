import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full text-center py-16">
        <h1 className="text-3xl md:text-5xl font-bold">
          Create better YouTube videos, faster.
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto">
          Automate titles, descriptions, scripts, and thumbnails — publish more, stress less.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 rounded-full bg-gray-800 text-sm">
            Publish 2× faster
          </span>
          <span className="px-4 py-2 rounded-full bg-gray-800 text-sm">
            +35% average CTR
          </span>
        </div>
        <div className="mt-8">
          <Link href="/app" className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-md">
            Open the app
          </Link>
        </div>
      </section>

      {/* Measurable Results */}
      <section className="w-full bg-black/90 border-t border-gray-700 py-12">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold">Save 4 hours per video</h3>
            <p className="mt-2 text-sm">No more time lost on titles, keywords, and descriptions.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold">Boost CTR by +35%</h3>
            <p className="mt-2 text-sm">Strong hooks and optimized thumbnails increase clicks.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold">Reach 1,000 subscribers 2× faster</h3>
            <p className="mt-2 text-sm">Consistency and SEO lead to faster audience growth.</p>
          </div>
        </div>
      </section>

      {/* Real Case Study */}
      <section className="w-full py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Real case study</h2>
        <p className="mb-2">
          Case Study: YouTube Gaming Creator
        </p>
        <p className="mb-2">
          Problem: 8–10 hours/week on prep (keywords, titles, scripts), hard to keep a consistent posting cadence with SEO quality.
        </p>
        <p className="mb-2">
          Ipsera solution: Automated keyword research and SEO titles, AI-generated scripts structured for retention, AI thumbnails with click‑optimized hooks.
        </p>
        <p className="mb-2">
          Results: Production time ↓ to 1h/video; Click‑through rate +30% CTR; Channel growth with faster subscribers & engagement.
        </p>
        <blockquote className="mt-4 italic border-l-4 pl-4 border-gray-700">
          “Optimize your creation time and grow your audience with Ipsera.”
        </blockquote>
      </section>

      {/* What experts say */}
      <section className="w-full py-12 bg-black/90 border-t border-gray-700">
        <h2 className="text-center text-2xl font-bold mb-8">What experts say</h2>
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Slide 1 */}
          <div className="p-4 border rounded-lg">
            <p className="italic">“Content is king, but engagement is queen—and ruler.”</p>
            <p className="mt-2 font-semibold">Mari Smith — Digital Marketing Expert</p>
          </div>
          {/* Slide 2 */}
          <div className="p-4 border rounded-lg">
            <p className="italic">“The more omnipresent you are in your prospect’s mind, the closer a relationship you build.”</p>
            <p className="mt-2 font-semibold">Sébastien Night — Founder, Entrepreneurs Libres</p>
          </div>
          {/* Slide 3 */}
          <div className="p-4 border rounded-lg">
            <p className="italic">“Your brand isn’t what you say it is—it’s what Google says it is.”</p>
            <p className="mt-2 font-semibold">Chris Anderson — TED Conference Curator</p>
          </div>
          {/* Slide 4 */}
          <div className="p-4 border rounded-lg">
            <p className="italic">“Google’s algorithms don’t judge your content’s quality. Don’t worry—your customers will.”</p>
            <p className="mt-2 font-semibold">Sylvain Montmory — Marketing & AI Expert</p>
          </div>
          {/* Slide 5 */}
          <div className="p-4 border rounded-lg">
            <p className="italic">“Create content, then optimize consistently. That’s the winning formula.”</p>
            <p className="mt-2 font-semibold">Expert Placeholder</p>
          </div>
        </div>
      </section>

      {/* Why Ipsera */}
      <section className="w-full py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Why Ipsera</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Current problems</h3>
            <ul className="space-y-2 list-disc list-inside text-sm">
              <li>Hours lost on keyword research and titles.</li>
              <li>Inconsistent descriptions and metadata.</li>
              <li>Weak thumbnails that don’t convert.</li>
              <li>Hard to keep a consistent publishing cadence.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">The solution</h3>
            <ul className="space-y-2 list-disc list-inside text-sm">
              <li>Ipsera automates your prep work—titles, descriptions, scripts, and thumbnails.</li>
              <li>Save hours each week.</li>
              <li>Higher CTR with optimized hooks and thumbnails.</li>
              <li>Stay consistent—AI drafts, you refine.</li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <Link href="/app" className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-md">
            Open the app
          </Link>
        </div>
      </section>

      {/* Core features */}
      <section className="w-full bg-black/90 border-t border-gray-700 py-12">
        <h2 className="text-center text-2xl font-bold mb-8">Core features</h2>
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold">1. SEO-Optimized YouTube Titles</h3>
            <p className="mt-2 text-sm italic">Example title: “10 MISTAKES Killing Your YouTube Views (+ Solutions)”</p>
            <p className="mt-2 text-sm">Keywords identified: 47</p>
            <p className="text-sm">Monthly search volume: 125,000</p>
            <p className="text-sm">Competition: Medium</p>
          </div>
          {/* Feature 2 */}
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold">2. Viral Video Descriptions</h3>
            <p className="mt-2 text-sm italic">Example snippet: 🔥 In this video, I reveal the 10 fatal mistakes...</p>
            <p className="mt-2 text-sm">Includes 15 optimized hashtags, timestamps, and a strong CTA.</p>
            <p className="text-sm">Expected engagement: +45%</p>
            <p className="text-sm">Optimal hashtags: 15</p>
            <p className="text-sm">Ideal length: 125 words</p>
          </div>
          {/* Feature 3 */}
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold">3. Engaging Video Scripts</h3>
            <p className="mt-2 text-sm">Hook (0–3s): “If you do this, you lose 80% of your viewers…”</p>
            <p className="text-sm">Problem (3–30s): Explanation of the issue</p>
            <p className="text-sm">Solution (30s–end): Step-by-step actions</p>
            <p className="mt-2 text-sm">Expected retention: 78%</p>
            <p className="text-sm">Optimal length: 8m 30s</p>
            <p className="text-sm">Hook points: 5</p>
          </div>
          {/* Feature 4 */}
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold">4. AI Thumbnails</h3>
            <p className="mt-2 text-sm">Before: Thumbnail before optimization — CTR: 2.1%</p>
            <p className="text-sm">After: Thumbnail after optimization — CTR: 8.9% (+325% improvement)</p>
            <p className="mt-2 text-sm">Viral design: Colors, typography, and composition optimized for clicks.</p>
            <p className="text-sm">Advanced AI: Fast, consistent, on-brand visuals.</p>
            <p className="text-sm">Adaptive: Adapts to your niche and style to maximize impact.</p>
          </div>
        </div>
      </section>

      {/* Limited seats */}
      <section className="w-full py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Limited seats for the first 500 sign-ups</h2>
        <p className="text-sm">From idea to video in under 60 seconds. Sign up early and be part of the first wave.</p>
      </section>

      {/* From idea to video */}
      <section className="w-full bg-black/90 border-t border-gray-700 py-12">
        <h2 className="text-center text-2xl font-bold mb-6">From idea to video in under 60 seconds</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Step 1</h3>
            <p className="text-sm">Type your idea. Tell Ipsera what your video is about.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Step 2</h3>
            <p className="text-sm">AI generates titles, descriptions, scripts & thumbnails.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Step 3</h3>
            <p className="text-sm">Pick & tweak. Choose the best options, edit in seconds.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Step 4</h3>
            <p className="text-sm">Publish-ready. Optimized and ready to go live.</p>
          </div>
        </div>
      </section>

      {/* Proven impact */}
      <section className="w-full py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Proven impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold text-lg">Adoption</h3>
            <p className="text-sm">1,247+ Creators on the waitlist</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold text-lg">Efficiency</h3>
            <p className="text-sm">60+ min Saved per video on prep work</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold text-lg">Performance</h3>
            <p className="text-sm">+325% CTR lift with AI thumbnails</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold text-lg">Retention</h3>
            <p className="text-sm">78% Target viewer retention with scripts</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full bg-black/90 border-t border-gray-700 py-12">
        <h2 className="text-center text-2xl font-bold mb-6">Benefits</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Time saved</h3>
            <p className="text-sm">Cut research, drafting and polishing from hours to minutes.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Higher CTR</h3>
            <p className="text-sm">SEO-driven hooks and AI thumbnails that attract clicks.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Subscriber growth</h3>
            <p className="text-sm">Stay consistent with quality outputs and grow faster.</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link href="/app" className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-md">
            Open the app
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-semibold">What is Ipsera?</summary>
            <p className="mt-2 text-sm">
              Ipsera is a tool that automates the creation of YouTube titles, descriptions, scripts, and thumbnails using AI.
            </p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-semibold">Do I need to provide my YouTube credentials?</summary>
            <p className="mt-2 text-sm">
              No. Ipsera generates content offline; you can copy and paste it into your channel manually.
            </p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-semibold">How does the AI generate thumbnails?</summary>
            <p className="mt-2 text-sm">
              Our AI analyses your idea and channel style to create engaging, on-brand thumbnails. You can tweak the results as needed.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}