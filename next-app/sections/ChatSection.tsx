"use client";

import { useEffect, useRef, useState } from "react";
import {
  Settings,
  Download,
  Trash2,
  ChevronDown,
  Send,
  X,
  Sparkles,
} from "lucide-react";
import {
  fetchModels,
  detectProvider,
  formatModelName,
  sendChatMessage,
  streamChatResponse,
  OC_SYSTEM_PROMPT,
} from "@/lib/chat";
import {
  getMessages,
  addMessage,
  clearMessages,
  exportMessagesTxt,
} from "@/lib/db";
import type { Model } from "@/lib/chat";

const DEFAULT_SETTINGS = {
  model: "",
  temperature: 0.7,
  maxTokens: 2048,
  ocMode: true,
};

export default function ChatSection() {
  const [models, setModels] = useState<Model[]>([]);
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showModels, setShowModels] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [streamingId, setStreamingId] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("wenruo_chat_settings");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings((s) => ({ ...s, ...parsed }));
      } catch {
        // ignore
      }
    }
    const welcomeSeen = localStorage.getItem("wenruo_chat_welcome");
    setShowWelcome(welcomeSeen !== "1");

    getMessages().then((msgs) =>
      setMessages(msgs.map((m) => ({ role: m.role, content: m.content })))
    );

    fetchModels()
      .then((list) => {
        setModels(list);
        setSettings((s) => ({ ...s, model: s.model || list[0]?.id || "" }));
      })
      .catch(() => setModels([]));
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingId]);

  useEffect(() => {
    localStorage.setItem("wenruo_chat_settings", JSON.stringify(settings));
  }, [settings]);

  const closeWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem("wenruo_chat_welcome", "1");
  };

  const handleSend = async () => {
    const text = input.trim();
    if (!text || loading) return;
    if (!settings.model) {
      alert("请先选择模型");
      return;
    }

    const userMsg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    await addMessage("user", text);
    setInput("");
    setLoading(true);
    const assistantId = `msg-${Date.now()}`;
    setStreamingId(assistantId);
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    const recent = messages.slice(-20).map((m) => ({ role: m.role, content: m.content }));
    const context = settings.ocMode
      ? [{ role: "system", content: OC_SYSTEM_PROMPT }, ...recent, userMsg]
      : [...recent, userMsg];

    try {
      const res = await sendChatMessage({
        model: settings.model,
        messages: context,
        temperature: settings.temperature,
        max_tokens: settings.maxTokens,
        stream: true,
      });

      if (!res.ok) throw new Error(`API ${res.status}`);

      let content = "";
      for await (const delta of streamChatResponse(res)) {
        content += delta;
        setMessages((prev) => {
          const next = [...prev];
          next[next.length - 1] = { role: "assistant", content };
          return next;
        });
      }

      await addMessage("assistant", content);
    } catch (err) {
      const errorText = err instanceof Error ? err.message : "请求失败";
      setMessages((prev) => {
        const next = [...prev];
        next[next.length - 1] = { role: "assistant", content: `请求失败：${errorText}` };
        return next;
      });
      await addMessage("assistant", `请求失败：${errorText}`);
    } finally {
      setLoading(false);
      setStreamingId(null);
    }
  };

  const handleExport = async () => {
    const msgs = await getMessages();
    if (msgs.length === 0) {
      alert("当前没有对话记录可导出");
      return;
    }
    const text = await exportMessagesTxt();
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `灵犀对话-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClear = async () => {
    if (!confirm("确定要清空当前对话吗？")) return;
    await clearMessages();
    setMessages([]);
  };

  const providerIcon = (id: string) => {
    const p = detectProvider(id);
    const colors: Record<string, string> = {
      deepseek: "#4D6BFA",
      anthropic: "#D97757",
      chatgpt: "#10A37F",
      gemini: "#4285F4",
    };
    if (!p) return null;
    return (
      <span
        className="inline-block w-4 h-4 rounded-full mr-2"
        style={{ backgroundColor: colors[p] }}
      />
    );
  };

  return (
    <section className="fixed inset-x-0 top-14 bottom-0 z-10 md:top-[58px]">
      <div className="flex flex-col h-full max-w-[920px] mx-auto p-3 md:p-3.5 box-border">
        <header className="flex-shrink-0 flex items-center justify-between gap-3 p-3 md:p-4 mb-3 rounded-[18px] bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] shadow-[var(--shadow-soft)]">
          <h1
            className="flex-shrink-0 text-base md:text-lg font-semibold text-[var(--text-paper)] tracking-[0.2em]"
            style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 8px rgba(0,0,0,0.25)" }}
          >
            灵犀
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowModels(true)}
              className="flex items-center gap-1 max-w-[150px] px-3 py-2 text-xs md:text-sm text-[var(--text-paper)] bg-[rgba(12,15,10,0.45)] border border-[var(--glass-border)] rounded-full transition-all hover:bg-[rgba(245,240,230,0.08)] hover:border-[var(--glass-border-hover)] hover:-translate-y-0.5"
            >
              {settings.model ? formatModelName(settings.model) : "选择模型"}
              <ChevronDown size={12} />
            </button>
            <button
              onClick={handleExport}
              title="导出对话"
              className="flex items-center justify-center w-9 h-9 text-[var(--text-paper)] bg-[rgba(12,15,10,0.4)] border border-[var(--glass-border)] rounded-[11px] transition-all hover:bg-[rgba(245,240,230,0.1)] hover:border-[var(--glass-border-hover)] hover:-translate-y-0.5"
            >
              <Download size={18} />
            </button>
            <button
              onClick={handleClear}
              title="清空对话"
              className="flex items-center justify-center w-9 h-9 text-[var(--text-paper)] bg-[rgba(12,15,10,0.4)] border border-[var(--glass-border)] rounded-[11px] transition-all hover:bg-[rgba(245,240,230,0.1)] hover:border-[var(--glass-border-hover)] hover:-translate-y-0.5"
            >
              <Trash2 size={18} />
            </button>
            <button
              onClick={() => setShowSettings(true)}
              title="设置"
              className="flex items-center justify-center w-9 h-9 text-[var(--text-paper)] bg-[rgba(12,15,10,0.4)] border border-[var(--glass-border)] rounded-[11px] transition-all hover:bg-[rgba(245,240,230,0.1)] hover:border-[var(--glass-border-hover)] hover:-translate-y-0.5"
            >
              <Settings size={18} />
            </button>
          </div>
        </header>

        <div className="flex-1 min-h-0 overflow-y-auto p-3 md:p-4 rounded-[20px] bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] shadow-[inset_0_0_48px_rgba(0,0,0,0.12),var(--shadow-soft)] mb-3">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-[var(--text-muted)] text-center">
              <div className="text-2xl md:text-3xl mb-3" style={{ fontFamily: "var(--font-display)" }}>
                ✦ 灵犀初启
              </div>
              <div className="text-sm tracking-[0.1em]">温若在此，想问什么？</div>
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 md:gap-4 mb-5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full text-xs font-semibold text-white shadow-md ${
                    msg.role === "user"
                      ? "bg-gradient-to-br from-[var(--accent-indigo)] to-[var(--accent-indigo-light)]"
                      : "bg-gradient-to-br from-[var(--accent-cinnabar)] to-[var(--accent-cinnabar-light)]"
                  }`}
                >
                  {msg.role === "user" ? "客" : "若"}
                </div>
                <div
                  className={`max-w-[78%] md:max-w-[680px] px-4 py-3 rounded-[20px] text-sm md:text-[0.95rem] leading-relaxed break-words ${
                    msg.role === "user"
                      ? "bg-[rgba(91,122,118,0.18)] border border-[rgba(91,122,118,0.22)]"
                      : "bg-[rgba(245,240,230,0.09)] border border-[rgba(245,240,230,0.1)]"
                  }`}
                  style={{ boxShadow: "0 4px 18px rgba(0,0,0,0.12)" }}
                >
                  {msg.content || (loading && idx === messages.length - 1 ? (
                    <span className="inline-flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] animate-bounce [animation-delay:0.1s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] animate-bounce [animation-delay:0.2s]" />
                    </span>
                  ) : null)}
                </div>
              </div>
            ))
          )}
          <div ref={bottomRef} />
        </div>

        <div className="flex-shrink-0 relative z-20">
          <div className="flex items-end gap-2 p-2.5 rounded-[20px] bg-[rgba(245,240,230,0.06)] backdrop-blur-md border border-[var(--glass-border)] shadow-[var(--shadow-soft)] focus-within:border-[rgba(196,90,74,0.35)] focus-within:shadow-[0_8px_32px_rgba(0,0,0,0.25),0_0_0_3px_rgba(196,90,74,0.06)] transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="向温若提问…"
              autoComplete="off"
              inputMode="text"
              className="flex-1 min-w-0 px-2 py-2 text-sm md:text-base text-[var(--text-paper)] bg-transparent border-none outline-none placeholder:text-[var(--text-muted)]"
              style={{ caretColor: "var(--accent-cinnabar)" }}
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="flex-shrink-0 flex items-center justify-center w-10 h-10 text-white bg-gradient-to-br from-[var(--accent-cinnabar)] to-[var(--accent-cinnabar-light)] rounded-[13px] shadow-[0_4px_16px_rgba(196,90,74,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(196,90,74,0.45)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <Send size={20} />
            </button>
          </div>
          <p className="text-center mt-2 text-[11px] text-[var(--text-muted)] opacity-70 tracking-[0.05em]">
            AI 生成内容仅供参考
          </p>
        </div>
      </div>

      {/* Welcome Modal */}
      {showWelcome && (
        <>
          <div
            className="fixed inset-0 z-[100001] bg-black/55 backdrop-blur-sm"
            onClick={closeWelcome}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100002] w-[min(380px,90vw)] rounded-[26px] bg-[rgba(18,22,16,0.98)] backdrop-blur-3xl border border-[var(--glass-border)] shadow-[var(--shadow-medium)] p-8 text-center">
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center text-2xl text-[var(--accent-cinnabar)] bg-[rgba(196,90,74,0.1)] border border-[rgba(196,90,74,0.2)] rounded-full shadow-[0_8px_32px_rgba(196,90,74,0.15)]">
              ✦
            </div>
            <h3
              className="text-2xl font-semibold text-[var(--text-paper)] tracking-[0.15em] mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              灵犀初启
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-7 mb-6">
              欢迎体验业界最前沿的 LLM 模型，你可以对话、调试和导出聊天记录。
            </p>
            <button
              onClick={closeWelcome}
              className="w-full py-3.5 rounded-[14px] text-sm text-white tracking-[0.15em] bg-gradient-to-br from-[var(--accent-cinnabar)] to-[var(--accent-cinnabar-light)] shadow-[0_8px_24px_rgba(196,90,74,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(196,90,74,0.4)]"
            >
              开始体验
            </button>
          </div>
        </>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <>
          <div
            className="fixed inset-0 z-[99999] bg-black/55 backdrop-blur-sm"
            onClick={() => setShowSettings(false)}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100000] w-[min(360px,92vw)] rounded-[24px] bg-[rgba(18,22,16,0.98)] backdrop-blur-3xl border border-[var(--glass-border)] shadow-[var(--shadow-medium)] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--glass-border)]">
              <h3
                className="text-base font-semibold text-[var(--text-paper)] tracking-[0.12em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                聊天设置
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-[var(--text-muted)] hover:text-[var(--text-paper)]"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-5">
              <div className="mb-5">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-[var(--text-paper)]">以 OC 人格对话</span>
                  <span className="relative inline-block w-11 h-6">
                    <input
                      type="checkbox"
                      checked={settings.ocMode}
                      onChange={(e) =>
                        setSettings((s) => ({ ...s, ocMode: e.target.checked }))
                      }
                      className="sr-only peer"
                    />
                    <span className="absolute inset-0 bg-[rgba(245,240,230,0.15)] rounded-full transition-colors peer-checked:bg-[var(--accent-cinnabar)]" />
                    <span className="absolute bottom-1 left-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                  </span>
                </label>
                <p className="mt-2 text-xs text-[var(--text-muted)] leading-5">
                  开启后温若会以清冷淡雅剑修的身份回答，关闭后使用默认助手模式。
                </p>
              </div>

              <div className="mb-5">
                <label className="block mb-2 text-sm text-[var(--text-muted)]">
                  温度：温度越高，回答越有创意（{settings.temperature.toFixed(1)}）
                </label>
                <input
                  type="range"
                  min={0}
                  max={20}
                  value={Math.round(settings.temperature * 10)}
                  onChange={(e) =>
                    setSettings((s) => ({
                      ...s,
                      temperature: parseInt(e.target.value, 10) / 10,
                    }))
                  }
                  className="w-full accent-[var(--accent-cinnabar)]"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 text-sm text-[var(--text-muted)]">最大长度</label>
                <input
                  type="number"
                  min={1}
                  max={8192}
                  value={settings.maxTokens}
                  onChange={(e) =>
                    setSettings((s) => ({
                      ...s,
                      maxTokens: parseInt(e.target.value, 10) || 2048,
                    }))
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[rgba(245,240,230,0.05)] border border-[var(--glass-border)] text-[var(--text-paper)] text-sm outline-none focus:border-[rgba(196,90,74,0.4)] focus:bg-[rgba(245,240,230,0.07)]"
                />
              </div>

              <button
                onClick={() => {
                  handleClear();
                  setShowSettings(false);
                }}
                className="w-full py-3 rounded-[13px] text-sm text-[var(--text-paper)] tracking-[0.05em] bg-[rgba(245,240,230,0.06)] border border-[var(--glass-border)] transition-all hover:bg-[rgba(196,90,74,0.12)] hover:border-[rgba(196,90,74,0.35)] hover:-translate-y-0.5"
              >
                清空对话
              </button>
            </div>
          </div>
        </>
      )}

      {/* Models Modal */}
      {showModels && (
        <>
          <div
            className="fixed inset-0 z-[99999] bg-black/55 backdrop-blur-sm"
            onClick={() => setShowModels(false)}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100000] flex flex-col w-[min(380px,92vw)] max-h-[min(560px,72vh)] rounded-[24px] bg-[rgba(18,22,16,0.98)] backdrop-blur-3xl border border-[var(--glass-border)] shadow-[var(--shadow-medium)] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--glass-border)]">
              <h3
                className="text-base font-semibold text-[var(--text-paper)] tracking-[0.12em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                选择模型
              </h3>
              <button
                onClick={() => setShowModels(false)}
                className="text-[var(--text-muted)] hover:text-[var(--text-paper)]"
              >
                <X size={20} />
              </button>
            </div>
            <div className="overflow-y-auto p-3">
              {models.length === 0 ? (
                <div className="py-10 text-center text-sm text-[var(--text-muted)]">
                  无可用模型
                </div>
              ) : (
                models.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setSettings((s) => ({ ...s, model: m.id }));
                      setShowModels(false);
                    }}
                    className={`flex flex-col items-start w-full px-4 py-3 mb-2 text-left text-sm rounded-2xl transition-all hover:bg-[rgba(245,240,230,0.06)] hover:translate-x-[3px] ${
                      settings.model === m.id
                        ? "bg-[rgba(91,122,118,0.18)] border border-[rgba(91,122,118,0.35)]"
                        : "border border-transparent"
                    }`}
                    style={{ transitionTimingFunction: "var(--ease-silk)" }}
                  >
                    <span className="flex items-center text-[var(--text-paper)]">
                      {providerIcon(m.id)}
                      {formatModelName(m.name)}
                    </span>
                    <span className="mt-1 text-xs text-[var(--text-muted)]">{m.id}</span>
                  </button>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
