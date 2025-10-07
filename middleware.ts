// middleware.ts
import { NextResponse, type NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

// Ne protège que /app/*
export const config = { matcher: ["/app/:path*"] };

export async function middleware(req: NextRequest) {
  // >>> BYPASS AUTH TEMPORAIRE <<<
  if (process.env.NEXT_PUBLIC_DISABLE_AUTH === "1") {
    return NextResponse.next();
  }

  const res = NextResponse.next();
  try {
    const supabase = createMiddlewareClient({ req, res });
    const { data: { session } } = await supabase.auth.getSession();

    // Protection standard quand le flag n'est PAS activé
    if (!session) {
      const to = new URL("/auth", req.url);
      to.searchParams.set("next", req.nextUrl.pathname);
      return NextResponse.redirect(to);
    }
    return res;
  } catch {
    return res;
  }
}
