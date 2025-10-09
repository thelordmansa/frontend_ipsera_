// middleware.ts
import { NextResponse, type NextRequest } from "next/server";

export const config = {
  matcher: ["/app/:path*", "/auth/:path*", "/auth", "/signup", "/login"],
};

export async function middleware(req: NextRequest) {
  const { pathname } = new URL(req.url);

  // Redirige tout ce qui est auth vers /app (bypass QA)
  if (
    pathname === "/auth" ||
    pathname.startsWith("/auth/") ||
    pathname === "/signup" ||
    pathname === "/login"
  ) {
    return NextResponse.redirect(new URL("/app", req.url));
  }

  // Bypass total pour /app/*
  return NextResponse.next();
}
