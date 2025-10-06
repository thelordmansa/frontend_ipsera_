"use client";
import { useEffect, useState } from "react";
import { supabaseBrowser } from "../../lib/supabase/client";

export default function AuthClient() {
  const sb = supabaseBrowser();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState<false | "signin" | "signup" | "google">(false);

  useEffect(() => {
    const { data: { subscription } } = sb.auth.onAuthStateChange((ev) => {
      if (ev === "SIGNED_IN") window.location.href = "/app";
    });
    return () => subscription.unsubscribe();
  }, [sb]);

  async function signInWithGoogle() {
    try {
      setErr(null); setBusy("google");
      const { error } = await sb.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.origin + "/auth/callback",
          scopes: "openid email profile",
          queryParams: { access_type: "offline", prompt: "consent" },
        },
      });
      if (error) throw error;
    } catch (e: any) {
      setErr(e?.message || "google_oauth_failed");
    } finally {
      setBusy(false);
    }
  }

  async function signInWithPassword(e: React.FormEvent) {
    e.preventDefault();
    try {
      setErr(null); setBusy("signin");
      const { error } = await sb.auth.signInWithPassword({ email, password: pwd });
      if (error) throw error;
      // redirection déclenchée par onAuthStateChange
    } catch (e: any) {
      setErr(e?.message || "signin_failed");
    } finally {
      setBusy(false);
    }
  }

  async function signUpWithPassword(e: React.FormEvent) {
    e.preventDefault();
    try {
      setErr(null); setBusy("signup");
      const { error } = await sb.auth.signUp({
        email,
        password: pwd,
        options: { emailRedirectTo: window.location.origin + "/auth/callback" },
      });
      if (error) throw error;
      // L’utilisateur confirme par email si “email_confirm” est requis
    } catch (e: any) {
      setErr(e?.message || "signup_failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto max-w-md px-4 pt-24 pb-10">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-xl space-y-6">
        <h1 className="text-xl font-semibold">Sign in</h1>

        <button
          type="button"
          onClick={signInWithGoogle}
          disabled={!!busy}
          className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-2 hover:bg-white/15 transition disabled:opacity-50"
        >
          {busy === "google" ? "Opening Google…" : "Continue with Google"}
        </button>

        <div className="flex items-center gap-3 text-xs text-neutral-400">
          <div className="h-px flex-1 bg-white/10" />
          or
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <form onSubmit={signInWithPassword} className="space-y-3">
          <label className="block text-sm">Email</label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-white/15 bg-white text-black placeholder-neutral-500 p-2"
            autoComplete="email"
          />
          <label className="block text-sm">Password</label>
          <input
            type="password"
            required
            placeholder="Your password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            className="w-full rounded-lg border border-white/15 bg-white text-black placeholder-neutral-500 p-2"
            autoComplete="current-password"
          />
          <div className="flex gap-2 pt-1">
            <button
              type="submit"
              disabled={!!busy}
              className="flex-1 rounded-lg border border-white/15 px-4 py-2 hover:bg-white/10 transition disabled:opacity-50"
            >
              {busy === "signin" ? "Signing in…" : "Sign in"}
            </button>
            <button
              type="button"
              onClick={signUpWithPassword}
              disabled={!!busy}
              className="flex-1 rounded-lg border border-white/15 px-4 py-2 hover:bg-white/10 transition disabled:opacity-50"
            >
              {busy === "signup" ? "Creating…" : "Sign up"}
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
