import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const KEY = "contacts";
const MAX_CONTACTS = 100;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const entry = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      name: name.slice(0, 30),
      email: email.slice(0, 100),
      subject: subject.slice(0, 100),
      message: message.slice(0, 2000),
      time: new Date().toISOString(),
    };

    await redis.lpush(KEY, JSON.stringify(entry));
    await redis.ltrim(KEY, 0, MAX_CONTACTS - 1);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
