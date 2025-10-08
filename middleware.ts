// middleware.ts
import { NextResponse, type NextRequest } from "next/server";

// Ne protège que /app/* (le reste reste inchangé)
export const config = { matcher: ["/app/:path*"] };

// BYPASS TOTAL QA: aucune auth sur /app/*
export async function middleware(_req: NextRequest) {
  return NextResponse.next();
}
