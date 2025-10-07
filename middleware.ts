// middleware.ts
import { NextResponse, type NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export const config = {
  // Ne couvre QUE le dashboard. /auth reste public.
  matcher: ["/app/:path*"],
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  try {
    const supabase = createMiddlewareClient({ req, res });
    const {
      data: { session },
    } = await supabase.auth.getSession();

    // Routes du dashboard à protéger
    const p = req.nextUrl.pathname;
    const protectedPaths = [
      "/app",              // page racine du dashboard
      "/app/titles",
      "/app/descriptions",
      "/app/scripts",
      "/app/thumbnails",
    ];
    const needsAuth = protectedPaths.some(
      (x) => p === x || p.startsWith(`${x}/`)
    );

    if (needsAuth && !session) {
      const to = new URL("/auth", req.url);
      to.searchParams.set("next", p);
      return NextResponse.redirect(to);
    }

    return res;
  } catch (e) {
    // En cas d’erreur, on laisse passer (fail-open) pour éviter un 500 global.
    return res;
  }
}
