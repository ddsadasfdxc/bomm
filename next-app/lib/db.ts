import Dexie, { type Table } from "dexie";

export interface ChatMessage {
  id?: number;
  role: "user" | "assistant" | "system";
  content: string;
  createdAt: Date;
}

export interface ChatSession {
  id?: number;
  model: string;
  temperature: number;
  maxTokens: number;
  ocMode: boolean;
  updatedAt: Date;
}

class WenruoDB extends Dexie {
  messages!: Table<ChatMessage>;
  sessions!: Table<ChatSession>;

  constructor() {
    super("wenruo-db");
    this.version(1).stores({
      messages: "++id, role, createdAt",
      sessions: "++id, updatedAt",
    });
  }
}

export const db = new WenruoDB();

export async function getMessages(limit = 100) {
  return db.messages.orderBy("createdAt").limit(limit).toArray();
}

export async function addMessage(role: ChatMessage["role"], content: string) {
  return db.messages.add({ role, content, createdAt: new Date() });
}

export async function clearMessages() {
  return db.messages.clear();
}

export async function exportMessagesTxt() {
  const msgs = await getMessages();
  return msgs
    .filter((m) => m.role !== "system")
    .map((m) => `${m.role === "user" ? "你" : "温若"}：${m.content}`)
    .join("\n\n");
}
