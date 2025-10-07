export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { supabaseRoute } from "../../..//lib/supabase/server"; // app/auth/callback/route.ts -> ../../lib/..., double slash toléré

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  if (code) {
    const sb = supabaseRoute();
    // IMPORTANT: passer la string, pas un objet
    await sb.auth.exchangeCodeForSession(code);
  }
  const next = url.searchParams.get("next") || "/app";
  return NextResponse.redirect(new URL(next, url.origin));
}
