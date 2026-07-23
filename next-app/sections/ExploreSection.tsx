"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

interface Note {
  id: string;
  title: string;
  content: string;
  icon: string;
}

const tools = [
  {
    id: "gmail-alias",
    icon: "📧",
    title: "Gmail 别名生成器",
    desc: "利用点号和加号生成无限邮箱别名",
  },
];

export default function ExploreSection() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [stats, setStats] = useState({ pv: 0, uv: 0, plays: 0 });
  const [statsError, setStatsError] = useState(false);

  useEffect(() => {
    fetch("/data/notes.json")
      .then((res) => res.json())
      .then((data) => setNotes(data.notes || []))
      .catch(() => setNotes([]));

    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => setStatsError(true));
  }, []);

  const openGmailAlias = () => {
    const base = "https://mail.google.com/mail/u/";
    const random = Math.random().toString(36).slice(2, 8);
    window.open(`${base}${random}@gmail.com`, "_blank");
  };

  return (
    <section className="min-h-screen px-6 py-20 md:py-24">
      <div className="max-w-[840px] mx-auto">
        <header className="text-center mb-12 md:mb-14">
          <h2
            className="text-[clamp(34px,5.5vw,52px)] font-semibold text-[var(--text-paper)] tracking-[0.15em] mb-3"
            style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
          >
            探索
          </h2>
          <p className="text-xs md:text-sm text-[var(--text-muted)] tracking-[0.25em] uppercase">
            笔墨之间，趣味无穷
          </p>
          <div className="w-10 h-px mx-auto mt-4 bg-gradient-to-r from-transparent via-[var(--accent-cinnabar)] to-transparent opacity-50" />
        </header>

        <div className="grid grid-cols-1 gap-4 md:gap-5 max-w-[520px] mx-auto">
          {tools.map((tool) => (
            <div
              key={tool.id}
              onClick={openGmailAlias}
              className="group relative p-6 md:p-7 rounded-[22px] bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-sm transition-all duration-450 hover:-translate-y-1 hover:border-[var(--glass-border-hover)] hover:shadow-[var(--shadow-medium)] cursor-pointer overflow-hidden min-h-[110px]"
              style={{ transitionTimingFunction: "var(--ease-silk)" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-450 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 80% at 50% 0%, rgba(196, 90, 74, 0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(91, 122, 118, 0.04) 0%, transparent 50%)`,
                }}
              />
              <div className="relative text-2xl md:text-3xl mb-3 transition-transform duration-450 group-hover:scale-110 group-hover:-rotate-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
                {tool.icon}
              </div>
              <h3 className="relative text-base font-semibold text-[var(--text-paper)] tracking-[0.08em] mb-1.5">
                {tool.title}
              </h3>
              <p className="relative text-sm text-[var(--text-muted)] leading-relaxed">
                {tool.desc}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent-cinnabar)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-550 origin-center opacity-60" />
            </div>
          ))}

          {notes.map((note) => (
            <div
              key={note.id}
              className="group relative p-6 md:p-7 rounded-[22px] bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-sm transition-all duration-450 hover:-translate-y-1 hover:border-[var(--glass-border-hover)] hover:shadow-[var(--shadow-medium)] cursor-pointer overflow-hidden min-h-[110px]"
              style={{ transitionTimingFunction: "var(--ease-silk)" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-450 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 80% at 50% 0%, rgba(196, 90, 74, 0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(91, 122, 118, 0.04) 0%, transparent 50%)`,
                }}
              />
              <div className="relative text-2xl md:text-3xl mb-3 transition-transform duration-450 group-hover:scale-110 group-hover:-rotate-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
                {note.icon}
              </div>
              <h3 className="relative text-base font-semibold text-[var(--text-paper)] tracking-[0.08em] mb-1.5">
                {note.title}
              </h3>
              <p className="relative text-sm text-[var(--text-muted)] leading-relaxed line-clamp-2">
                {note.content}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent-cinnabar)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-550 origin-center opacity-60" />
            </div>
          ))}
        </div>

        <header className="text-center mt-16 md:mt-20 mb-12 md:mb-14">
          <h2
            className="text-[clamp(34px,5.5vw,52px)] font-semibold text-[var(--text-paper)] tracking-[0.15em] mb-3"
            style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
          >
            我的笔记
          </h2>
          <p className="text-xs md:text-sm text-[var(--text-muted)] tracking-[0.25em] uppercase">
            OC 手记，随想随记
          </p>
        </header>

        {statsError ? (
          <div className="text-center text-[var(--text-muted)] text-sm py-10">
            统计加载失败
          </div>
        ) : (
          <div className="flex justify-center gap-10 md:gap-12 max-w-[420px] mx-auto p-7 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-[20px] backdrop-blur-sm">
            <div className="flex flex-col items-center gap-1.5 relative">
              <span
                className="text-2xl md:text-[26px] font-semibold text-[var(--accent-cinnabar)]"
                style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 12px rgba(196,90,74,0.25)" }}
              >
                {stats.pv}
              </span>
              <span className="text-[10px] text-[var(--text-muted)] tracking-[0.2em] uppercase">
                访问
              </span>
              <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-px h-6 bg-[var(--glass-border)]" />
            </div>
            <div className="flex flex-col items-center gap-1.5 relative">
              <span
                className="text-2xl md:text-[26px] font-semibold text-[var(--accent-cinnabar)]"
                style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 12px rgba(196,90,74,0.25)" }}
              >
                {stats.uv}
              </span>
              <span className="text-[10px] text-[var(--text-muted)] tracking-[0.2em] uppercase">
                访客
              </span>
              <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-px h-6 bg-[var(--glass-border)]" />
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <span
                className="text-2xl md:text-[26px] font-semibold text-[var(--accent-cinnabar)]"
                style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 12px rgba(196,90,74,0.25)" }}
              >
                {stats.plays}
              </span>
              <span className="text-[10px] text-[var(--text-muted)] tracking-[0.2em] uppercase">
                播放
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
