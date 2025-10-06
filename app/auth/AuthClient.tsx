"use client";
import { useEffect, useState } from "react";
import { supabaseBrowser } from "../../lib/supabase/client";

export default function AuthClient() {
  const sb = supabaseBrowser();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [err, setErr] = useState<string|null>(null);

  useEffect(() => {
    const { data: { subscription } } = sb.auth.onAuthStateChange((ev) => {
      if (ev === "SIGNED_IN") window.location.href = "/app";
    });
    return () => subscription.unsubscribe();
  }, [sb]);

  async function sendMagicLink(e: React.FormEvent) {
    e.preventDefault();
    setErr(null); setStatus("sending");
    const { error } = await sb.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin + "/auth/callback" }
    });
    if (error) { setErr(error.message || "failed"); setStatus("error"); }
    else setStatus("sent");
  }

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

  return (
    <main className="mx-auto max-w-sm p-6 space-y-6">
      <h1 className="text-xl font-semibold">Sign in</h1>

      <button
        type="button"
        onClick={signInWithGoogle}
        className="w-full rounded border px-4 py-2"
      >
        Continue with Google
      </button>

      <div className="text-center text-xs text-neutral-400">or</div>

      <form onSubmit={sendMagicLink} className="space-y-3">
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full rounded border p-2"
        />
        <button
          type="submit"
          disabled={!email || status==="sending"}
          className="w-full rounded border px-4 py-2 disabled:opacity-50"
        >
          {status==="sending" ? "Signing in..." : "Sign in with email link"}
        </button>
      </form>

      {status==="sent" && <div className="text-sm">Check your email.</div>}
      {err && <div className="rounded border border-red-400 bg-red-50 p-2 text-sm">{err}</div>}
    </main>
  );
}
