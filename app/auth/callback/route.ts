export const runtime = "nodejs";
export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { supabaseRoute } from "../../../lib/supabase/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  if (code) {
    const sb = supabaseRoute();
    const { error } = await sb.auth.exchangeCodeForSession(code);
    if (error) return NextResponse.redirect(new URL("/auth?err=callback", url.origin));
  }
  const next = url.searchParams.get("next") || "/app";
  return NextResponse.redirect(new URL(next, url.origin));
}
