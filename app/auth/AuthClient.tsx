"use client";
import { useEffect, useState } from "react";
import { supabaseBrowser } from "../../lib/supabase/client";

export default function AuthClient() {
  const sb = supabaseBrowser();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState<string|null>(null);

  useEffect(() => {
    const { data: { subscription } } = sb.auth.onAuthStateChange((ev) => {
      if (ev === "SIGNED_IN") window.location.href = "/app";
    });
    return () => subscription.unsubscribe();
  }, [sb]);

  async function signInWithGoogle() {
    setErr(null);
    const { error } = await sb.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin + "/auth/callback",
        scopes: "openid email profile",
        queryParams: { access_type: "offline", prompt: "consent" }
      }
    });
    if (error) setErr(error.message || "google_oauth_failed");
  }

  async function signInWithPassword(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    const { error } = await sb.auth.signInWithPassword({ email, password: pwd });
    if (error) setErr(error.message || "signin_failed");
  }

  async function signUpWithPassword(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    const { error } = await sb.auth.signUp({
      email, password: pwd,
      options: { emailRedirectTo: window.location.origin + "/auth/callback" }
    });
    if (error) setErr(error.message || "signup_failed");
  }

  return (
    <main className="mx-auto max-w-md px-4 pt-24 pb-10">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-xl space-y-6">
        <h1 className="text-xl font-semibold">Sign in</h1>

        {/* Google */}
        <button
          type="button"
          onClick={signInWithGoogle}
          className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-2 hover:bg-white/15 transition"
        >
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 text-xs text-neutral-400">
          <div className="h-px flex-1 bg-white/10" />
          or
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Email + Password */}
        <form onSubmit={signInWithPassword} className="space-y-3">
          <label className="block text-sm">Email</label>
          <input
            type="email" required placeholder="you@example.com"
            value={email} onChange={(e)=>setEmail(e.target.value)}
            className="w-full rounded-lg border border-white/15 bg-white text-black placeholder-neutral-500 p-2"
            autoComplete="email"
          />
          <label className="block text-sm">Password</label>
          <input
            type="password" placeholder="Your password"
            value={pwd} onChange={(e)=>setPwd(e.target.value)}
            className="w-full rounded-lg border border-white/15 bg-white text-black placeholder-neutral-500 p-2"
            autoComplete="current-password"
          />
          <div className="flex gap-2 pt-1">
            <button type="submit" className="flex-1 rounded-lg border border-white/15 px-4 py-2 hover:bg-white/10 transition">
              Sign in
            </button>
            <button type="button" onClick={signUpWithPassword} className="flex-1 rounded-lg border border-white/15 px-4 py-2 hover:bg-white/10 transition">
              Sign up
            </button>
          </div>
        </form>

        {err && (
          <div className="text-sm rounded-lg border border-red-400/40 bg-red-400/10 p-2">
            {err}
          </div>
        )}
      </div>
    </main>
  );
}
