// One Durable Object per hashed IP: storage transactions serialize all deductions.
export class SpiritLedger {
  constructor(state) { this.storage = state.storage; }
  async fetch(request) {
    const body = await request.json();
    const day = new Date(Date.now() + 8 * 3600000).toISOString().slice(0,10);
    const result = await this.storage.transaction(async tx => {
      let ledger = await tx.get('ledger');
      if (!ledger || ledger.day !== day) ledger = {day, balance:1000, receipts:{}};
      if (body.action === 'spend' && !body.unlimited) {
        const old = ledger.receipts[body.requestId];
        if (old) {
          if (old.count !== body.count) return {error:'请求编号已被使用', status:409};
          return {balance:ledger.balance, day, duplicate:true};
        }
        const cost = body.count * 10;
        if (ledger.balance < cost) return {error:'今日灵石不足，请北京时间零点后再来', status:429};
        ledger.balance -= cost;
        ledger.receipts[body.requestId] = {count:body.count};
      }
      await tx.put('ledger', ledger);
      return {balance:ledger.balance, day, unlimited:body.unlimited};
    });
    return Response.json(result, {status:result.status || 200});
  }
}
export async function alchemyRoute(request, env) {
  const headers = {'Access-Control-Allow-Origin':'*','Content-Type':'application/json'};
  const fail = (error, status) => new Response(JSON.stringify({error}),{status,headers});
  if (request.method !== 'POST') return fail('Method not allowed',405);
  if (!env.SPIRIT_LEDGER) return fail('灵石账本尚未部署',503);
  let body;
  try { const raw = await request.text(); if(raw.length > 1024) return fail('请求过大',413); body=JSON.parse(raw); }
  catch { return fail('无效请求',400); }
  if (!body || !['balance','spend'].includes(body.action)) return fail('无效操作',400);
  if (body.action === 'spend' && (![1,10].includes(body.count) || !/^[a-f0-9-]{36}$/.test(body.requestId || ''))) return fail('无效抽取参数',400);
  const ip = request.headers.get('CF-Connecting-IP');
  if (!ip) return fail('无法识别客户端 IP',400);
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip));
  const id = env.SPIRIT_LEDGER.idFromName(Array.from(new Uint8Array(digest), x=>x.toString(16).padStart(2,'0')).join(''));
  const stub = env.SPIRIT_LEDGER.get(id);
  const result = await stub.fetch('https://ledger/internal', {method:'POST', body:JSON.stringify({action:body.action,count:body.count,requestId:body.requestId,unlimited:body.code === 'lss'})});
  return new Response(result.body,{status:result.status,headers});
}
