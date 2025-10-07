export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import AuthClient from "./AuthClient";
export default function Page() { return <AuthClient />; }

// app/auth/page.tsx
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
import AuthClient from "./AuthClient";
export default function Page(){ return <AuthClient />; }

// app/auth/callback/route.ts
export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  if (code) {
    const sb = createRouteHandlerClient({ cookies });
    await sb.auth.exchangeCodeForSession(code); // string attendu
  }
  const next = url.searchParams.get("next") || "/app";
  return NextResponse.redirect(new URL(next, url.origin));
}
