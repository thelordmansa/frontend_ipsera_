import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data: { session } } = await supabase.auth.getSession();

  const p = req.nextUrl.pathname;
  const protectedPaths = ["/app/titles", "/app/descriptions", "/app/scripts"];
  const needsAuth = protectedPaths.some((x) => p.startsWith(x));

  if (needsAuth && !session) {
    const to = req.nextUrl.clone();
    to.pathname = "/auth";
    to.searchParams.set("next", p);
    return NextResponse.redirect(to);
  }
  return res;
}

export const config = { matcher: ["/app/:path*"] };
