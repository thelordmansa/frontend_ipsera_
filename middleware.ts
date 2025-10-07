// middleware.ts
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/app/:path*"], // NE TOUCHE PAS /auth
};

export function middleware() {
  return NextResponse.next(); // pas d’import Supabase ici
}
