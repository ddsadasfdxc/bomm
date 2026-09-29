const API = 'https://wenruo-api.carglekasemeier602.workers.dev/api/alchemy';
const balance = document.getElementById('spiritBalance');
const status = document.getElementById('spiritStatus');
let code = '';
let pending = null;
try { code = sessionStorage.getItem('wenruo_spirit_code') || ''; } catch {}
function message(text) { if (status) status.textContent = text; }
async function request(body) {
  const res = await fetch(API, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(body), signal: AbortSignal.timeout(12000) });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || '灵石账本暂不可用');
  balance.textContent = data.unlimited ? '∞' : String(data.balance);
  message(data.unlimited ? '站长无限模式 · 不消耗每日额度' : '同一 IP 共享每日额度 · 每日重置，不累计');
  return data;
}
async function refresh() {
  try { await request({action:'balance', code}); }
  catch { balance.textContent = '—'; message('灵石账本尚未连接，请稍后重试；不会使用本地额度替代 IP 限额。'); }
}
export const spiritWallet = {
  async spend(count) {
    if (!pending || pending.count !== count) pending = {count, requestId:crypto.randomUUID()};
    try {
      const data = await request({action:'spend', code, ...pending});
      pending = null;
      return data;
    } catch (err) { message(err.message === 'Failed to fetch' ? '连接失败，请重试；相同请求不会重复扣费。' : err.message); throw err; }
  }
};
document.getElementById('spiritForm')?.addEventListener('submit', async e => {
  e.preventDefault();
  const input = document.getElementById('spiritCode');
  try {
    const candidate = input.value.trim();
    const data = await request({action:'balance', code:candidate});
    if (!data.unlimited) { message('通行令不正确'); return; }
    code = candidate;
    try { sessionStorage.setItem('wenruo_spirit_code', code); } catch {}
    input.value = '';
  } catch { message('账本服务未连接，暂不能验证通行令。'); }
});
document.getElementById('spiritExit')?.addEventListener('click', () => {
  code = ''; pending = null;
  try { sessionStorage.removeItem('wenruo_spirit_code'); } catch {}
  refresh();
});
document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
refresh();
