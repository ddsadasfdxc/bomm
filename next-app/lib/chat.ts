import { z } from "zod";

export const CHAT_API_BASE =
  process.env.NEXT_PUBLIC_CHAT_API_BASE || "https://hanbaoyu.ggff.net/v1";
export const CHAT_API_KEY =
  process.env.NEXT_PUBLIC_CHAT_API_KEY ||
  "cat-15e82e21a1292280105c3020f5dd0468884261de7144dedd";

export const OC_SYSTEM_PROMPT =
  "你是温若，一位清冷淡雅的剑修。请用简短、优美、古风的方式回答。";

export interface Model {
  id: string;
  name: string;
}

export async function fetchModels(): Promise<Model[]> {
  const res = await fetch(`${CHAT_API_BASE}/models`, {
    headers: { Authorization: `Bearer ${CHAT_API_KEY}` },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const list = (data.data || []).map((m: { id: string }) => ({
    id: m.id,
    name: m.id,
  }));
  list.sort((a: Model, b: Model) => a.name.localeCompare(b.name));
  return list;
}

export function detectProvider(id: string) {
  const lower = id.toLowerCase();
  if (lower.includes("deepseek")) return "deepseek";
  if (lower.includes("claude") || lower.includes("anthropic")) return "anthropic";
  if (
    lower.includes("gpt") ||
    lower.includes("openai") ||
    lower.includes("o1-") ||
    lower.includes("o3-")
  )
    return "chatgpt";
  if (lower.includes("gemini") || lower.includes("google")) return "gemini";
  return null;
}

export function formatModelName(name: string) {
  if (!name) return "";
  return name.length > 18 ? name.slice(0, 18) + "…" : name;
}

export interface ChatPayload {
  model: string;
  messages: { role: string; content: string }[];
  temperature: number;
  max_tokens: number;
  stream: boolean;
}

export async function sendChatMessage(payload: ChatPayload) {
  return fetch(`${CHAT_API_BASE}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CHAT_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });
}

export async function* streamChatResponse(res: Response) {
  const reader = res.body?.getReader();
  if (!reader) throw new Error("No response body");
  const decoder = new TextDecoder("utf-8");
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() || "";

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed === "data: [DONE]") continue;
      if (!trimmed.startsWith("data:")) continue;
      try {
        const json = JSON.parse(trimmed.slice(5));
        const delta = json.choices?.[0]?.delta?.content || "";
        if (delta) yield delta;
      } catch {
        // ignore malformed lines
      }
    }
  }
}

export const chatSettingsSchema = z.object({
  model: z.string(),
  temperature: z.number().min(0).max(2),
  maxTokens: z.number().min(1).max(8192),
  ocMode: z.boolean(),
});

export type ChatSettings = z.infer<typeof chatSettingsSchema>;
