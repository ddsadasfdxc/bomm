import { redis } from './lib/redis.js';
import { json, methodNotAllowed, parseBody } from './_utils.js';

const KEY = 'messages';
const MAX_MESSAGES = 100;

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method === 'GET') {
    const items = await redis.lrange(KEY, 0, MAX_MESSAGES - 1);
    const messages = items.map(raw => {
      try { return JSON.parse(raw); } catch { return null; }
    }).filter(Boolean);
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

      await redis.lpush(KEY, JSON.stringify(entry));
      await redis.ltrim(KEY, 0, MAX_MESSAGES - 1);
      json(res, 200, { success: true, entry });
    } catch (e) {
      json(res, 500, { error: 'Server error' });
    }
    return;
  }

  methodNotAllowed(res);
}
