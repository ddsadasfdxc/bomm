"use client";

import { useEffect, useRef, useState } from "react";
import { Music, X, Play, Pause } from "lucide-react";

export default function MusicPlayer() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [pos, setPos] = useState({ left: "auto", top: "auto", right: 24, bottom: 90 });
  const widgetRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<{ dragging: boolean; moved: boolean; startX: number; startY: number; startLeft: number; startTop: number } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("wenruo_music_pos");
    if (saved) {
      try {
        const p = JSON.parse(saved);
        setPos({ left: p.left, top: p.top, right: "auto", bottom: "auto" });
      } catch {
        // ignore
      }
    }
  }, []);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const rect = widgetRef.current?.getBoundingClientRect();
    if (!rect) return;
    dragState.current = {
      dragging: true,
      moved: false,
      startX: clientX,
      startY: clientY,
      startLeft: rect.left,
      startTop: rect.top,
    };
    document.body.style.userSelect = "none";
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!dragState.current?.dragging || !widgetRef.current) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      const dx = clientX - dragState.current.startX;
      const dy = clientY - dragState.current.startY;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) dragState.current.moved = true;

      const rect = widgetRef.current.getBoundingClientRect();
      let left = dragState.current.startLeft + dx;
      let top = dragState.current.startTop + dy;
      left = Math.max(0, Math.min(left, window.innerWidth - rect.width));
      top = Math.max(0, Math.min(top, window.innerHeight - rect.height));
      setPos({ left, top, right: "auto", bottom: "auto" });
    };

    const handleEnd = () => {
      if (!dragState.current) return;
      dragState.current.dragging = false;
      document.body.style.userSelect = "";
      const rect = widgetRef.current?.getBoundingClientRect();
      if (rect) {
        localStorage.setItem(
          "wenruo_music_pos",
          JSON.stringify({ left: rect.left, top: rect.top })
        );
      }
      setTimeout(() => {
        if (dragState.current) dragState.current.moved = false;
      }, 60);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchend", handleEnd);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchend", handleEnd);
    };
  }, []);

  const handleClick = () => {
    if (dragState.current?.moved) return;
    setOpen(!open);
  };

  return (
    <div
      ref={widgetRef}
      className="fixed z-40"
      style={{
        left: typeof pos.left === "number" ? pos.left : pos.left,
        top: typeof pos.top === "number" ? pos.top : pos.top,
        right: typeof pos.right === "number" ? pos.right : pos.right,
        bottom: typeof pos.bottom === "number" ? pos.bottom : pos.bottom,
      }}
    >
      {open && (
        <div className="absolute bottom-[calc(100%+12px)] right-0 w-52 rounded-[20px] bg-[rgba(18,22,16,0.98)] backdrop-blur-3xl border border-[var(--glass-border)] shadow-[var(--shadow-medium)] p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-[var(--text-paper)]">云间清音</span>
            <button onClick={() => setOpen(false)} className="text-[var(--text-muted)] hover:text-[var(--text-paper)]">
              <X size={16} />
            </button>
          </div>
          <button
            onClick={() => setPlaying(!playing)}
            className="flex items-center justify-center w-full py-2.5 rounded-xl text-sm text-white bg-gradient-to-br from-[var(--accent-indigo)] to-[var(--accent-indigo-light)]"
          >
            {playing ? <Pause size={16} className="mr-2" /> : <Play size={16} className="mr-2" />}
            {playing ? "暂停" : "播放"}
          </button>
        </div>
      )}
      <button
        onMouseDown={handleStart}
        onTouchStart={handleStart}
        onClick={handleClick}
        className="w-11 h-11 flex items-center justify-center rounded-full text-white bg-gradient-to-br from-[var(--accent-indigo)] to-[var(--accent-indigo-light)] shadow-[0_6px_20px_rgba(91,122,118,0.35)] cursor-grab active:cursor-grabbing transition-transform hover:scale-105"
      >
        <Music size={20} />
      </button>
    </div>
  );
}
