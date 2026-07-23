"use client";

import { useEffect } from "react";
import { Home, Compass, Heart, MessageCircle } from "lucide-react";
import { useAppStore, type Page } from "@/lib/store";

const navItems: { id: Page; label: string; icon: typeof Home }[] = [
  { id: "home", label: "首页", icon: Home },
  { id: "explore", label: "探索", icon: Compass },
  { id: "social", label: "互动", icon: Heart },
  { id: "chat", label: "聊天", icon: MessageCircle },
];

export default function Navigation() {
  const { currentPage, setPage, navScrolled, setNavScrolled } = useAppStore();

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [setNavScrolled]);

  return (
    <nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-full border transition-all duration-350"
        style={{
          background: navScrolled
            ? "rgba(21, 25, 19, 0.78)"
            : "rgba(21, 25, 19, 0.45)",
          borderColor: navScrolled
            ? "rgba(245, 240, 230, 0.12)"
            : "rgba(245, 240, 230, 0.08)",
          backdropFilter: "blur(24px) saturate(1.3)",
          WebkitBackdropFilter: "blur(24px) saturate(1.3)",
          boxShadow: navScrolled
            ? "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(245, 240, 230, 0.06)"
            : "0 6px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(245, 240, 230, 0.04)",
          transitionTimingFunction: "var(--ease-silk)",
        }}
      >
        {navItems.map(({ id, label, icon: Icon }) => {
          const active = currentPage === id;
          return (
            <button
              key={id}
              onClick={() => setPage(id)}
              aria-label={label}
              title={label}
              className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-400 ${
                active
                  ? "text-white"
                  : "text-[rgba(245,240,230,0.5)] hover:text-[rgba(245,240,230,0.95)] hover:bg-[rgba(245,240,230,0.07)]"
              }`}
              style={{
                background: active
                  ? "linear-gradient(135deg, var(--accent-cinnabar), var(--accent-cinnabar-light))"
                  : "transparent",
                boxShadow: active
                  ? "0 4px 16px rgba(196, 90, 74, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
                  : "none",
                transitionTimingFunction: "var(--ease-silk)",
              }}
            >
              <Icon size={18} />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
