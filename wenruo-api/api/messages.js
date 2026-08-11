import { redis } from './lib/redis.js';
import { setCors, json, methodNotAllowed, parseBody } from './_utils.js';

const KEY = 'messages';
const MAX_MESSAGES = 100;

let memoryMessages = [];

async function getMessages() {
  try {
    const items = await redis.lrange(KEY, 0, MAX_MESSAGES - 1);
    return items.map(raw => {
      try { return JSON.parse(raw); } catch { return null; }
    }).filter(Boolean);
  } catch (e) {
    console.error('Redis getMessages failed:', e.message);
    return memoryMessages;
  }
}

async function addMessage(entry) {
  try {
    await redis.lpush(KEY, JSON.stringify(entry));
    await redis.ltrim(KEY, 0, MAX_MESSAGES - 1);
  } catch (e) {
    console.error('Redis addMessage failed:', e.message);
    memoryMessages.unshift(entry);
    if (memoryMessages.length > MAX_MESSAGES) memoryMessages.length = MAX_MESSAGES;
  }
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    setCors(res);
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method === 'GET') {
    const messages = await getMessages();
    json(res, 200, { messages });
    return;
  }

  if (req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const name = String(body.name || '').trim();
      const message = String(body.message || '').trim();

      if (!name || !message) {
        json(res, 400, { error: 'Name and message are required' });
        return;
      }
      if (name.length > 30 || message.length > 500) {
        json(res, 400, { error: 'Content too long' });
        return;
      }

      const entry = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        name: name.slice(0, 30),
        message: message.slice(0, 500),
        time: new Date().toISOString(),
      };

      await addMessage(entry);
      json(res, 200, { success: true, entry });
    } catch (e) {
      console.error('Messages handler error:', e.message);
      json(res, 500, { error: 'Server error' });
    }
    return;
  }

  methodNotAllowed(res);
}
