import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const supabase = createRouteHandlerClient({ cookies });
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const upstream = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL!}/api/titles/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const text = await upstream.text();
    return new NextResponse(text, {
      status: upstream.status,
      headers: { "Content-Type": upstream.headers.get("content-type") || "application/json" },
    });
  } catch {
    return NextResponse.json({ error: "Proxy error" }, { status: 502 });
  }
}
