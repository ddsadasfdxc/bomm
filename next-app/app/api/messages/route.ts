import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

const KEY = "messages";
const MAX_MESSAGES = 100;

export async function GET() {
  try {
    const items = await redis.lrange<string>(KEY, 0, MAX_MESSAGES - 1);
    const messages = items
      .map((raw) => {
        try {
          return JSON.parse(raw);
        } catch {
          return null;
        }
      })
      .filter(Boolean);
    return NextResponse.json({ messages });
  } catch (e) {
    return NextResponse.json({ error: "Failed to load messages" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !message) {
      return NextResponse.json({ error: "Name and message are required" }, { status: 400 });
    }
    if (name.length > 30 || message.length > 500) {
      return NextResponse.json({ error: "Content too long" }, { status: 400 });
    }

    const entry = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      name: name.slice(0, 30),
      message: message.slice(0, 500),
      time: new Date().toISOString(),
    };

    await redis.lpush(KEY, JSON.stringify(entry));
    await redis.ltrim(KEY, 0, MAX_MESSAGES - 1);
    return NextResponse.json({ success: true, entry });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
