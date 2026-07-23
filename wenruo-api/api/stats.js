import { redis } from './lib/redis.js';
import { json, methodNotAllowed, parseBody, getClientIp, hash } from './_utils.js';

const STAT_KEY = 'stats';
const UV_KEY = 'uv_set';

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method === 'GET') {
    try {
      const stats = await redis.hgetall(STAT_KEY);
      const uv = await redis.scard(UV_KEY);
      json(res, 200, {
        pv: Number(stats?.pv || 0),
        uv: uv || 0,
        plays: Number(stats?.plays || 0),
      });
    } catch (e) {
      json(res, 500, { error: 'Server error' });
    }
    return;
  }

  if (req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const type = body.type === 'play' ? 'play' : 'visit';

      if (type === 'visit') {
        const ip = getClientIp(req);
        const ua = req.headers['user-agent'] || '';
        const visitorId = hash(`${ip}:${ua}`);
        await redis.sadd(UV_KEY, visitorId);
        await redis.hincrby(STAT_KEY, 'pv', 1);
      } else {
        await redis.hincrby(STAT_KEY, 'plays', 1);
      }

      const stats = await redis.hgetall(STAT_KEY);
      const uv = await redis.scard(UV_KEY);
      json(res, 200, {
        pv: Number(stats?.pv || 0),
        uv: uv || 0,
        plays: Number(stats?.plays || 0),
      });
    } catch (e) {
      json(res, 500, { error: 'Server error' });
    }
    return;
  }

  methodNotAllowed(res);
}
