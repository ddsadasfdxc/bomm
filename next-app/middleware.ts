import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const origin = req.headers.get("origin");
  const res = NextResponse.next();

  if (origin) {
    res.headers.set("Access-Control-Allow-Origin", origin);
  } else {
    res.headers.set("Access-Control-Allow-Origin", "*");
  }
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.headers.set("Access-Control-Max-Age", "86400");

  if (req.method === "OPTIONS") {
    return new NextResponse(null, { status: 204, headers: res.headers });
  }

  return res;
}

export const config = {
  matcher: "/api/:path*",
};
