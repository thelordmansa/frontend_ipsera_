export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { supabaseRoute } from "../../../../lib/supabase/server";

export async function POST() {
  const sb = supabaseRoute();
  await sb.auth.signOut();
  return NextResponse.json({ ok: true });
}
