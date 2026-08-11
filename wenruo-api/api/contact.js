import { redis } from './lib/redis.js';
import { setCors, json, methodNotAllowed, parseBody } from './_utils.js';

const KEY = 'contacts';
const MAX_CONTACTS = 100;

let memoryContacts = [];

async function addContact(entry) {
  try {
    await redis.lpush(KEY, JSON.stringify(entry));
    await redis.ltrim(KEY, 0, MAX_CONTACTS - 1);
  } catch (e) {
    console.error('Redis addContact failed:', e.message);
    memoryContacts.unshift(entry);
    if (memoryContacts.length > MAX_CONTACTS) memoryContacts.length = MAX_CONTACTS;
  }
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    setCors(res);
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const name = String(body.name || '').trim();
      const email = String(body.email || '').trim();
      const subject = String(body.subject || '').trim();
      const message = String(body.message || '').trim();

      if (!name || !email || !message) {
        json(res, 400, { error: 'Name, email and message are required' });
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        json(res, 400, { error: 'Invalid email' });
        return;
      }

      const entry = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        name: name.slice(0, 30),
        email: email.slice(0, 100),
        subject: subject.slice(0, 100),
        message: message.slice(0, 2000),
        time: new Date().toISOString(),
      };

      await addContact(entry);
      json(res, 200, { success: true });
    } catch (e) {
      console.error('Contact handler error:', e.message);
      json(res, 500, { error: 'Server error' });
    }
    return;
  }

  methodNotAllowed(res);
}
