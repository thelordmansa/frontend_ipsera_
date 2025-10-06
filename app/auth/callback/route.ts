export const runtime = "nodejs";
import { NextRequest, NextResponse } from "next/server";
import { supabaseRoute } from "../../../lib/supabase/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  if (code) {
    const sb = supabaseRoute();
    await sb.auth.exchangeCodeForSession(code); // <-- string, pas { code }
  }
  const next = url.searchParams.get("next") || "/app";
  return NextResponse.redirect(new URL(next, url.origin));
}
