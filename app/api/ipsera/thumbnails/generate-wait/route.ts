import { NextResponse } from "next/server";

export const runtime = "nodejs";

function isMultipart(req: Request) {
  const ct = req.headers.get("content-type") || "";
  return ct.toLowerCase().includes("multipart/form-data");
}

export async function POST(req: Request) {
  try {
    const upstreamUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL!}/api/thumbnails/generate-wait`;

    let init: RequestInit;
    if (isMultipart(req)) {
      // Reçoit form-data du client, le relaie en multipart (ne pas fixer Content-Type)
      const inForm = await req.formData();
      const outForm = new FormData();
      for (const [k, v] of inForm.entries()) outForm.append(k, v as any);
      init = {
        method: "POST",
        headers: {
          ...(process.env.BACKEND_API_KEY ? { "x-api-key": process.env.BACKEND_API_KEY } : {}),
        },
        body: outForm,
      };
    } else {
      // JSON → JSON
      const body = await req.json();
      init = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.BACKEND_API_KEY ? { "x-api-key": process.env.BACKEND_API_KEY } : {}),
        },
        body: JSON.stringify(body),
      };
    }

    const r = await fetch(upstreamUrl, init);

    // Si l'amont renvoie une image/binaire, proxy tel quel
    const ct = r.headers.get("content-type") || "";
    if (ct.startsWith("image/") || ct === "application/octet-stream") {
      const buf = await r.arrayBuffer();
      return new NextResponse(buf, { status: r.status, headers: { "Content-Type": ct } });
    }

    const text = await r.text();
    return new NextResponse(text, {
      status: r.status,
      headers: { "Content-Type": r.headers.get("content-type") || "application/json" },
    });
  } catch {
    return NextResponse.json({ success: false, error: "Proxy error" }, { status: 502 });
  }
}
