import { NextResponse } from "next/server";
export const runtime = "nodejs";

export async function GET(req: Request) {
  try {
    const u = new URL(req.url);
    const url = u.searchParams.get("url");
    if (!url) return NextResponse.json({ success: false, error: 'Missing "url"' }, { status: 400 });

    const r = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL!}/api/thumbnails/download?url=${encodeURIComponent(url)}`,
      { headers: { ...(process.env.BACKEND_API_KEY ? { "x-api-key": process.env.BACKEND_API_KEY } : {}) } }
    );

    const ct = r.headers.get("content-type") || "application/octet-stream";
    const body = r.body ?? await r.arrayBuffer();
    return new NextResponse(body as any, { status: r.status, headers: { "Content-Type": ct } });
  } catch {
    return NextResponse.json({ success: false, error: "Proxy error" }, { status: 502 });
  }
}
