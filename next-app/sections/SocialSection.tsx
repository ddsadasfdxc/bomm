"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

interface Message {
  id: string;
  name: string;
  message: string;
  time: string;
}

function formatTime(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

export default function SocialSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [cName, setCName] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cSubject, setCSubject] = useState("");
  const [cMessage, setCMessage] = useState("");
  const [cSubmitting, setCSubmitting] = useState(false);

  const loadMessages = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/messages");
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setMessages(data.messages || []);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const submitMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const n = name.trim();
    const m = text.trim();
    if (!n || !m) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: n, message: m }),
      });
      if (!res.ok) throw new Error("Failed");
      setName("");
      setText("");
      await loadMessages();
    } catch {
      alert("留言提交失败");
    } finally {
      setSubmitting(false);
    }
  };

  const submitContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setCSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cName,
          email: cEmail,
          subject: cSubject,
          message: cMessage,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setCName("");
      setCEmail("");
      setCSubject("");
      setCMessage("");
      alert("信件已寄出");
    } catch {
      alert("发送失败");
    } finally {
      setCSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen px-6 py-20 md:py-24">
      <div className="max-w-[840px] mx-auto">
        <header className="text-center mb-12 md:mb-14">
          <h2
            className="text-[clamp(34px,5.5vw,52px)] font-semibold text-[var(--text-paper)] tracking-[0.15em] mb-3"
            style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
          >
            互动
          </h2>
          <p className="text-xs md:text-sm text-[var(--text-muted)] tracking-[0.25em] uppercase">
            留言 · 联系 · 皆可在此
          </p>
          <div className="w-10 h-px mx-auto mt-4 bg-gradient-to-r from-transparent via-[var(--accent-cinnabar)] to-transparent opacity-50" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          <div className="p-6 md:p-7 rounded-[22px] bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-sm">
            <form onSubmit={submitMessage} className="mb-6">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="你的名字"
                maxLength={30}
                required
                className="w-full mb-3.5 px-4 py-3.5 rounded-[14px] bg-[rgba(245,240,230,0.03)] border border-[var(--glass-border)] text-[var(--text-paper)] text-sm outline-none transition-all placeholder:text-[var(--text-muted)] focus:border-[rgba(196,90,74,0.4)] focus:bg-[rgba(245,240,230,0.05)] focus:shadow-[0_0_0_3px_rgba(196,90,74,0.08)]"
              />
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="想说点什么…"
                maxLength={500}
                rows={3}
                required
                className="w-full mb-3.5 px-4 py-3.5 rounded-[14px] bg-[rgba(245,240,230,0.03)] border border-[var(--glass-border)] text-[var(--text-paper)] text-sm outline-none transition-all placeholder:text-[var(--text-muted)] focus:border-[rgba(196,90,74,0.4)] focus:bg-[rgba(245,240,230,0.05)] focus:shadow-[0_0_0_3px_rgba(196,90,74,0.08)] resize-y"
              />
              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-3 rounded-full text-sm text-white tracking-[0.12em] bg-gradient-to-br from-[var(--accent-cinnabar)] to-[var(--accent-cinnabar-light)] shadow-[0_6px_20px_rgba(196,90,74,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(196,90,74,0.35)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {submitting ? "发送中…" : "留言"}
              </button>
            </form>

            <div className="max-h-[360px] overflow-y-auto pr-2 scrollbar-thin">
              {loading ? (
                <div className="flex items-center justify-center gap-2 py-10 text-[var(--text-muted)] text-sm">
                  <Loader2 className="animate-spin" size={16} />
                  加载中…
                </div>
              ) : error ? (
                <div
                  onClick={loadMessages}
                  className="text-center py-10 text-[var(--text-muted)] text-sm cursor-pointer rounded-[14px] transition-all hover:bg-[rgba(196,90,74,0.08)] hover:text-[var(--text-paper)]"
                >
                  加载失败，点击重试
                </div>
              ) : messages.length === 0 ? (
                <div className="text-center py-10 text-[var(--text-muted)] text-sm">
                  还没有留言，说点什么吧。
                </div>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="py-4 border-b border-[var(--glass-border)] last:border-b-0 transition-all hover:bg-[rgba(245,240,230,0.02)] hover:rounded-lg hover:-mx-3 hover:px-3"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-[var(--text-paper)] tracking-[0.05em]">
                        {msg.name}
                      </span>
                      <span className="text-[11px] text-[var(--text-muted)] tracking-[0.05em]">
                        {formatTime(msg.time)}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed whitespace-pre-wrap">
                      {msg.message}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          <form
            onSubmit={submitContact}
            className="p-6 md:p-8 rounded-[22px] bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-sm"
          >
            <h3
              className="text-center text-lg font-semibold text-[var(--text-paper)] tracking-[0.1em] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              写信给我
            </h3>
            <input
              type="text"
              value={cName}
              onChange={(e) => setCName(e.target.value)}
              placeholder="你的名字"
              required
              className="w-full mb-3.5 px-4 py-3.5 rounded-[14px] bg-[rgba(245,240,230,0.03)] border border-[var(--glass-border)] text-[var(--text-paper)] text-sm outline-none transition-all placeholder:text-[var(--text-muted)] focus:border-[rgba(196,90,74,0.4)] focus:bg-[rgba(245,240,230,0.05)] focus:shadow-[0_0_0_3px_rgba(196,90,74,0.08)]"
            />
            <input
              type="email"
              value={cEmail}
              onChange={(e) => setCEmail(e.target.value)}
              placeholder="你的邮箱"
              required
              className="w-full mb-3.5 px-4 py-3.5 rounded-[14px] bg-[rgba(245,240,230,0.03)] border border-[var(--glass-border)] text-[var(--text-paper)] text-sm outline-none transition-all placeholder:text-[var(--text-muted)] focus:border-[rgba(196,90,74,0.4)] focus:bg-[rgba(245,240,230,0.05)] focus:shadow-[0_0_0_3px_rgba(196,90,74,0.08)]"
            />
            <input
              type="text"
              value={cSubject}
              onChange={(e) => setCSubject(e.target.value)}
              placeholder="主题"
              className="w-full mb-3.5 px-4 py-3.5 rounded-[14px] bg-[rgba(245,240,230,0.03)] border border-[var(--glass-border)] text-[var(--text-paper)] text-sm outline-none transition-all placeholder:text-[var(--text-muted)] focus:border-[rgba(196,90,74,0.4)] focus:bg-[rgba(245,240,230,0.05)] focus:shadow-[0_0_0_3px_rgba(196,90,74,0.08)]"
            />
            <textarea
              value={cMessage}
              onChange={(e) => setCMessage(e.target.value)}
              placeholder="想说的话…"
              rows={5}
              required
              className="w-full mb-5 px-4 py-3.5 rounded-[14px] bg-[rgba(245,240,230,0.03)] border border-[var(--glass-border)] text-[var(--text-paper)] text-sm outline-none transition-all placeholder:text-[var(--text-muted)] focus:border-[rgba(196,90,74,0.4)] focus:bg-[rgba(245,240,230,0.05)] focus:shadow-[0_0_0_3px_rgba(196,90,74,0.08)] resize-y"
            />
            <button
              type="submit"
              disabled={cSubmitting}
              className="w-full py-4 rounded-full text-[15px] text-white tracking-[0.15em] bg-gradient-to-br from-[var(--accent-cinnabar)] to-[var(--accent-cinnabar-light)] shadow-[0_8px_24px_rgba(196,90,74,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(196,90,74,0.35)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {cSubmitting ? "发送中…" : "发送"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
