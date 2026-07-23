import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

const KEY = "contacts";
const MAX_CONTACTS = 200;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email and message are required" }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (name.length > 30 || email.length > 100 || subject.length > 100 || message.length > 1000) {
      return NextResponse.json({ error: "Content too long" }, { status: 400 });
    }

    const entry = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      name: name.slice(0, 30),
      email: email.slice(0, 100),
      subject: subject.slice(0, 100),
      message: message.slice(0, 1000),
      time: new Date().toISOString(),
    };

    await redis.lpush(KEY, JSON.stringify(entry));
    await redis.ltrim(KEY, 0, MAX_CONTACTS - 1);
    return NextResponse.json({ success: true, entry });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
