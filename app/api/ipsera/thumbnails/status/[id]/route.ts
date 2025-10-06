import { NextResponse } from "next/server";
export const runtime = "nodejs";

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  try {
    const id = params?.id;
    if (!id) return NextResponse.json({ success: false, error: "Missing id" }, { status: 400 });

    const r = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL!}/api/thumbnails/status/${encodeURIComponent(id)}`,
      { headers: { ...(process.env.BACKEND_API_KEY ? { "x-api-key": process.env.BACKEND_API_KEY } : {}) } }
    );

    const text = await r.text();
    return new NextResponse(text, {
      status: r.status,
      headers: { "Content-Type": r.headers.get("content-type") || "application/json" },
    });
  } catch {
    return NextResponse.json({ success: false, error: "Proxy error" }, { status: 502 });
  }
}
