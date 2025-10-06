"use client";
import { useEffect, useState } from "react";
import { supabaseBrowser } from "../../lib/supabase/client";

export default function AuthClient() {
  const sb = supabaseBrowser();

  // states
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [err, setErr] = useState<string|null>(null);

  useEffect(() => {
    const { data: { subscription } } = sb.auth.onAuthStateChange((ev) => {
      if (ev === "SIGNED_IN") window.location.href = "/app";
    });
    return () => subscription.unsubscribe();
  }, [sb]);


  // Email + Password (sign in)
  async function signInWithPassword(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    const { error } = await sb.auth.signInWithPassword({ email, password: pwd });
    if (error) setErr(error.message || "signin_failed");
  }

  // Email + Password (sign up)
  async function signUpWithPassword(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    const { error } = await sb.auth.signUp({
      email, password: pwd,
      options: { emailRedirectTo: window.location.origin + "/auth/callback" }
    });
    if (error) setErr(error.message || "signup_failed");
    // selon ta policy, un email de confirmation peut être requis avant SIGNED_IN
  }

  // Google OAuth
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

      {/* Google */}
      <button
        type="button"
        onClick={signInWithGoogle}
        className="w-full rounded border px-4 py-2"
      >
        Continue with Google
      </button>

      <div className="text-center text-xs text-neutral-400">or</div>

      {/* Email + Password */}
      <form onSubmit={signInWithPassword} className="space-y-3">
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full rounded border p-2 bg-white text-black"
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Password"
          value={pwd}
          onChange={(e)=>setPwd(e.target.value)}
          className="w-full rounded border p-2 bg-white text-black"
          autoComplete="current-password"
        />
        <div className="flex gap-2">
          <button type="submit" className="flex-1 rounded border px-4 py-2">
            Sign in
          </button>
          <button type="button" onClick={signUpWithPassword} className="flex-1 rounded border px-4 py-2">
            Sign up
          </button>
        </div>
      </form>

      <div className="text-center text-xs text-neutral-400">or</div>

   
