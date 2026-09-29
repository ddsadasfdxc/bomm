const BALANCE_KEY = 'wenruo_spirit_wallet_v1';
const balance = document.getElementById('spiritBalance');
const status = document.getElementById('spiritStatus');
const DAILY_LIMIT = 1000;
let unlimited = false;
let ledger = loadLedger();
function todayKey() {
  const now = new Date(Date.now() + 8 * 60 * 60 * 1000);
  return now.toISOString().slice(0, 10);
}
function loadLedger() {
  try {
    const raw = JSON.parse(localStorage.getItem(BALANCE_KEY) || 'null');
    if (raw && raw.day === todayKey() && Number.isFinite(raw.balance)) return raw;
  } catch {}
  return { day: todayKey(), balance: DAILY_LIMIT };
}
function saveLedger() { try { localStorage.setItem(BALANCE_KEY, JSON.stringify(ledger)); } catch {} }
function message(text) { if (status) status.textContent = text; }
function render() {
  if (balance) balance.textContent = unlimited ? '∞' : String(ledger.balance);
  message(unlimited ? '站长无限模式 · 不消耗灵石' : '本设备今日额度 · 每日 1000 灵石 · 北京时间零点重置');
}
function refreshDay() {
  if (ledger.day !== todayKey()) { ledger = { day: todayKey(), balance: DAILY_LIMIT }; saveLedger(); }
  render();
}
export const spiritWallet = {
  async spend(count) {
    refreshDay();
    if (unlimited) return { balance: Infinity, unlimited: true };
    const cost = count * 10;
    if (ledger.balance < cost) {
      message(`今日灵石不足，还需 ${cost - ledger.balance} 灵石；明日零点恢复 1000。`);
      throw new Error('今日灵石不足');
    }
    ledger.balance -= cost; saveLedger(); render();
    return { balance: ledger.balance, unlimited: false };
  }
};
document.getElementById('spiritForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const input = document.getElementById('spiritCode');
  const candidate = input?.value.trim().toLowerCase();
  if (candidate === 'lss') {
    unlimited = true; if (input) input.value = '';
    message('站长无限模式已解锁 · 不消耗灵石'); render();
  } else message('通行令不正确');
});
document.getElementById('spiritExit')?.addEventListener('click', () => { unlimited = false; refreshDay(); });
window.addEventListener('focus', refreshDay);
render();