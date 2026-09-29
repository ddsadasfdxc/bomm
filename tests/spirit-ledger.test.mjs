import assert from 'node:assert/strict';
import {SpiritLedger} from '../wenruo-cf-worker/src/alchemy.js';
let value;
const tx = {get:async()=>structuredClone(value),put:async(k,v)=>{value=structuredClone(v)}};
const obj = new SpiritLedger({storage:{transaction:async fn=>fn(tx)}});
async function call(body){const r=await obj.fetch(new Request('https://test',{method:'POST',body:JSON.stringify(body)}));return {status:r.status,...await r.json()}}
assert.equal((await call({action:'balance'})).balance,1000);
assert.equal((await call({action:'spend',count:10,requestId:'a'})).balance,900);
assert.equal((await call({action:'spend',count:10,requestId:'a'})).balance,900);
for(let i=0;i<9;i++) await call({action:'spend',count:10,requestId:String(i)});
assert.equal((await call({action:'spend',count:1,requestId:'empty'})).status,429);
assert.equal((await call({action:'spend',count:10,unlimited:true})).balance,0);
value.day='2000-01-01';
assert.equal((await call({action:'balance'})).balance,1000);
console.log('PASS balance, deduction, idempotency, exhaustion, unlimited, next-day reset (mock storage)');
