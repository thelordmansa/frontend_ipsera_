import { NextResponse, type NextRequest } from "next/server";
export const config = { matcher: ["/app/:path*"] };
export async function middleware(_req: NextRequest) { return NextResponse.next(); }
