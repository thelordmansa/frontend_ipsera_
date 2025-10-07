"use client";
import { useEffect, useMemo, useState } from "react";
import { supabaseBrowser } from "../../lib/supabase/client";

type Mode = "login" | "signup";

export default function AuthClient() {
  const sb = supabaseBrowser();

  // URL site fiable (sans slash final). Priorité à l'env prod.
  const siteUrl = useMemo(() => {
    const raw =
      (process.env.NEXT_PUBLIC_SITE_URL as string) ||
      (typeof window !== "undefined" ? window.location.origin : "");
    return raw.replace(/\/+$/, "");
  }, []);
  const redirectTo = `${siteUrl}/auth/callback`;

  const [mode, setMode] = useState<Mode>("login");

  // Commun
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  // SignUp only
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]   = useState("");

  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState<false | "login" | "signup" | "google">(false);

  useEffect(() => {
    const { data: { subscription } } = sb.auth.onAuthStateChange((ev) => {
      if (ev === "SIGNED_IN") window.location.href = "/app";
    });
    return () => subscription.unsubscribe();
  }, [sb]);

  async function continueWithGoogle() {
    try {
      setErr(null); setBusy("google");
      const { error } = await sb.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo,
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

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      setErr(null); setBusy("login");
      const { error } = await sb.auth.signInWithPassword({ email, password: pwd });
      if (error) throw error;
    } catch (e: any) {
      setErr(e?.message || "signin_failed");
    } finally {
      setBusy(false);
    }
  }

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    try {
      setErr(null); setBusy("signup");
      const { error } = await sb.auth.signUp({
        email,
        password: pwd,
        options: {
          emailRedirectTo: redirectTo,
          data: { first_name: firstName, last_name: lastName },
        },
      });
      if (error) throw error;
      // Si confirmation email activée côté Supabase, l’utilisateur valide le lien reçu.
    } catch (e: any) {
      setErr(e?.message || "signup_failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto max-w-md px-4 pt-24 pb-10">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-xl space-y-6">
        {/* Header + switch */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">
            {mode === "login" ? "Log in" : "Sign up"}
          </h1>
          <button
            onClick={() => { setMode(mode === "login" ? "signup" : "login"); setErr(null); }}
            className="text-sm text-neutral-300 hover:text-white underline-offset-4 hover:underline"
          >
            {mode === "login" ? "Create an account" : "I already have an account"}
          </button>
        </div>

        {/* Google OAuth */}
        <button
          type="button"
          onClick={continueWithGoogle}
          disabled={!!busy}
          className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-2 hover:bg-white/15 transition disabled:opacity-50"
        >
          {busy === "google"
            ? "Opening Google…"
            : mode === "login" ? "Continue with Google" : "Sign up with Google"}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 text-xs text-neutral-400">
          <div className="h-px flex-1 bg-white/10" />
          or
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* FORMS */}
        {mode === "login" ? (
          <form onSubmit={handleLogin} className="space-y-3">
            <label className="block text-sm">Email</label>
            <input
              type="email" required placeholder="you@example.com"
              value={email} onChange={(e)=>setEmail(e.target.value)}
              className="w-full rounded-lg border border-white/15 bg-white text-black placeholder-neutral-500 p-2"
              autoComplete="email"
            />

            <label className="block text-sm">Password</label>
            <input
              type="password" required placeholder="Your password"
              value={pwd} onChange={(e)=>setPwd(e.target.value)}
              className="w-full rounded-lg border border-white/15 bg-white text-black placeholder-neutral-500 p-2"
              autoComplete="current-password"
            />

            <button
              type="submit" disabled={!!busy}
              className="w-full rounded-lg border border-white/15 px-4 py-2 hover:bg-white/10 transition disabled:opacity-50"
            >
              {busy === "login" ? "Signing in…" : "Sign in"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm">First name</label>
                <input
                  type="text" required placeholder="John"
                  value={firstName} onChange={(e)=>setFirstName(e.target.value)}
                  className="w-full rounded-lg border border-white/15 bg-white text-black placeholder-neutral-500 p-2"
                  autoComplete="given-name"
                />
              </div>
              <div>
                <label className="block text-sm">Last name</label>
                <input
                  type="text" required placeholder="Doe"
                  value={lastName} onChange={(e)=>setLastName(e.target.value)}
                  className="w-full rounded-lg border border-white/15 bg-white text-black placeholder-neutral-500 p-2"
                  autoComplete="family-name"
                />
              </div>
            </div>

            <label className="block text-sm">Email</label>
            <input
              type="email" required placeholder="you@example.com"
              value={email} onChange={(e)=>setEmail(e.target.value)}
              className="w-full rounded-lg border border-white/15 bg-white text-black placeholder-neutral-500 p-2"
              autoComplete="email"
            />

            <label className="block text-sm">Password</label>
            <input
              type="password" required placeholder="Choose a password"
              value={pwd} onChange={(e)=>setPwd(e.target.value)}
              className="w-full rounded-lg border border-white/15 bg-white text-black placeholder-neutral-500 p-2"
              autoComplete="new-password"
            />

            <button
              type="submit" disabled={!!busy}
              className="w-full rounded-lg border border-white/15 px-4 py-2 hover:bg-white/10 transition disabled:opacity-50"
            >
              {busy === "signup" ? "Creating…" : "Create account"}
            </button>
          </form>
        )}

        {err && (
          <div className="text-sm rounded-lg border border-red-400/40 bg-red-400/10 p-2">
            {err}
          </div>
        )}
      </div>
    </main>
  );
}
