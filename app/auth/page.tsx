export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import AuthClient from "./AuthClient";
export default function Page() { return <AuthClient />; }

// app/auth/page.tsx
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
import AuthClient from "./AuthClient";
export default function Page(){ return <AuthClient />; }
