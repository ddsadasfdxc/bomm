import { redis } from './lib/redis.js';
import { setCors, json, methodNotAllowed, parseBody, getClientIp, hash } from './_utils.js';

const STAT_KEY = 'stats';
const UV_KEY = 'uv_set';

let memoryStats = { pv: 0, uv: new Set(), plays: 0 };

async function getStats() {
  try {
    const stats = await redis.hgetall(STAT_KEY);
    const uv = await redis.scard(UV_KEY);
    return {
      pv: Number(stats?.pv || 0),
      uv: uv || 0,
      plays: Number(stats?.plays || 0),
    };
  } catch (e) {
    console.error('Redis getStats failed:', e.message);
    return {
      pv: memoryStats.pv,
      uv: memoryStats.uv.size,
      plays: memoryStats.plays,
    };
  }
}

async function recordVisit(req) {
  try {
    const ip = getClientIp(req);
    const ua = req.headers['user-agent'] || '';
    const visitorId = hash(`${ip}:${ua}`);
    await redis.sadd(UV_KEY, visitorId);
    await redis.hincrby(STAT_KEY, 'pv', 1);
  } catch (e) {
    console.error('Redis recordVisit failed:', e.message);
    memoryStats.pv += 1;
  }
}

async function recordPlay() {
  try {
    await redis.hincrby(STAT_KEY, 'plays', 1);
  } catch (e) {
    console.error('Redis recordPlay failed:', e.message);
    memoryStats.plays += 1;
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
    const stats = await getStats();
    json(res, 200, stats);
    return;
  }

  if (req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const type = body.type === 'play' ? 'play' : 'visit';

      if (type === 'visit') {
        await recordVisit(req);
      } else {
        await recordPlay();
      }

      const stats = await getStats();
      json(res, 200, stats);
    } catch (e) {
      console.error('Stats handler error:', e.message);
      json(res, 200, {
        pv: memoryStats.pv,
        uv: memoryStats.uv.size,
        plays: memoryStats.plays,
      });
    }
    return;
  }

  methodNotAllowed(res);
}
