import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

function getClientIp(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "unknown";
}

function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return String(h);
}

export async function GET() {
  try {
    const [pv, uv, plays] = await Promise.all([
      redis.get<number>("stats:pv"),
      redis.scard("stats:uv"),
      redis.get<number>("stats:plays"),
    ]);
    return NextResponse.json({
      pv: pv || 0,
      uv: uv || 0,
      plays: plays || 0,
    });
  } catch (e) {
    return NextResponse.json({ pv: 0, uv: 0, plays: 0 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const type = body.type || "pv";

    if (type === "pv") {
      await redis.incr("stats:pv");
      const ip = getClientIp(req);
      const ua = req.headers.get("user-agent") || "";
      await redis.sadd("stats:uv", hash(ip + ua));
    } else if (type === "play") {
      await redis.incr("stats:plays");
    }

    const [pv, uv, plays] = await Promise.all([
      redis.get<number>("stats:pv"),
      redis.scard("stats:uv"),
      redis.get<number>("stats:plays"),
    ]);

    return NextResponse.json({ pv: pv || 0, uv: uv || 0, plays: plays || 0 });
  } catch (e) {
    return NextResponse.json({ pv: 0, uv: 0, plays: 0 });
  }
}
