/**
 * 灵犀 - OpenAI 反代聊天
 */

const CHAT_API_BASE = import.meta.env?.VITE_CHAT_API_BASE || 'https://hanbaoyu.ggff.net/v1';
const CHAT_API_KEY = import.meta.env?.VITE_CHAT_API_KEY || 'cat-15e82e21a1292280105c3020f5dd0468884261de7144dedd';

const STORAGE_KEY = 'wenruo_chat';

const DEFAULT_TEMPERATURE = 0.7;
const DEFAULT_MAX_TOKENS = 2048;
const DEFAULT_MODEL = '';

export function initChat() {
  const page = document.getElementById('page-chat');
  if (!page) return;

  const modelBtn = document.getElementById('chatModelBtn');
  const modelText = document.getElementById('chatModelText');
  const modelMenu = document.getElementById('chatModelMenu');
  const settingsBtn = document.getElementById('chatSettings');
  const settingsPanel = document.getElementById('chatSettingsPanel');
  const messagesEl = document.getElementById('chatMessages');
  const inputEl = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSend');
  const tempInput = document.getElementById('chatTemp');
  const tempVal = document.getElementById('chatTempVal');
  const maxTokensInput = document.getElementById('chatMaxTokens');
  const clearBtn = document.getElementById('chatClear');

  if (!modelBtn || !modelMenu || !messagesEl || !inputEl) return;

  const state = loadState();
  let models = [];
  let abortController = null;
  let currentAssistantId = null;

  renderMessages(messagesEl, state.messages);
  updateTempLabel(state.temperature);
  tempInput.value = Math.round(state.temperature * 10);
  maxTokensInput.value = state.maxTokens;

  fetchModels().then((list) => {
    models = list;
    populateModels(modelMenu, modelText, models, state.model, (id) => {
      state.model = id;
      saveState(state);
    });
  }).catch(() => {
    modelText.textContent = '模型加载失败';
  });

  modelBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    modelMenu.classList.toggle('open');
    settingsPanel.classList.remove('open');
  });

  document.addEventListener('click', (e) => {
    if (!modelBtn.contains(e.target) && !modelMenu.contains(e.target)) {
      modelMenu.classList.remove('open');
    }
    if (!settingsBtn.contains(e.target) && !settingsPanel.contains(e.target)) {
      settingsPanel.classList.remove('open');
    }
  });

  settingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    settingsPanel.classList.toggle('open');
    modelMenu.classList.remove('open');
  });

  tempInput.addEventListener('input', () => {
    const t = parseInt(tempInput.value, 10) / 10;
    state.temperature = t;
    updateTempLabel(t);
    saveState(state);
  });

  maxTokensInput.addEventListener('change', () => {
    state.maxTokens = parseInt(maxTokensInput.value, 10) || DEFAULT_MAX_TOKENS;
    saveState(state);
  });



  clearBtn.addEventListener('click', () => {
    state.messages = [];
    saveState(state);
    renderMessages(messagesEl, state.messages);
    settingsPanel.classList.remove('open');
  });

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  sendBtn.addEventListener('click', sendMessage);

  autoResize(inputEl);

  async function sendMessage() {
    const text = inputEl.value.trim();
    if (!text) return;

    const model = state.model;
    if (!model) {
      appendSystemMessage(messagesEl, '请先选择模型');
      return;
    }

    if (abortController) return;

    const userMsg = { role: 'user', content: text };
    state.messages.push(userMsg);
    appendMessage(messagesEl, userMsg);
    inputEl.value = '';
    inputEl.style.height = 'auto';
    saveState(state);

    abortController = new AbortController();
    currentAssistantId = 'msg-' + Date.now();
    appendStreamingMessage(messagesEl, currentAssistantId);

    try {
      const res = await fetch(`${CHAT_API_BASE}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${CHAT_API_KEY}`,
        },
        body: JSON.stringify({
          model,
          messages: buildContext(state.messages),
          temperature: state.temperature,
          max_tokens: state.maxTokens,
          stream: true,
        }),
        signal: abortController.signal,
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`API ${res.status}: ${errText}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let content = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || trimmed === 'data: [DONE]') continue;
          if (!trimmed.startsWith('data:')) continue;
          try {
            const json = JSON.parse(trimmed.slice(5));
            const delta = json.choices?.[0]?.delta?.content || '';
            if (delta) {
              content += delta;
              updateStreamingMessage(currentAssistantId, content);
            }
          } catch (e) {
            // ignore malformed lines
          }
        }
      }

      state.messages.push({ role: 'assistant', content });
      saveState(state);
      finalizeStreamingMessage(currentAssistantId, content);
    } catch (err) {
      if (err.name === 'AbortError') {
        finalizeStreamingMessage(currentAssistantId, '已取消');
      } else {
        updateStreamingMessage(currentAssistantId, `请求失败：${err.message}`);
        finalizeStreamingMessage(currentAssistantId, `请求失败：${err.message}`);
      }
    } finally {
      abortController = null;
      currentAssistantId = null;
    }
  }

  function updateTempLabel(t) {
    tempVal.textContent = t.toFixed(1);
  }
}

async function fetchModels() {
  const res = await fetch(`${CHAT_API_BASE}/models`, {
    headers: { 'Authorization': `Bearer ${CHAT_API_KEY}` },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const list = (data.data || []).map((m) => ({
    id: m.id,
    name: m.id,
  }));
  list.sort((a, b) => a.name.localeCompare(b.name));
  return list;
}

function populateModels(menu, textEl, models, selectedId, onSelect) {
  menu.innerHTML = '';
  if (models.length === 0) {
    textEl.textContent = '无可用模型';
    return;
  }

  const finalId = selectedId || models[0].id;
  const selectedModel = models.find((m) => m.id === finalId) || models[0];
  textEl.textContent = formatModelName(selectedModel.name);

  models.forEach((m) => {
    const item = document.createElement('button');
    item.className = 'chat-model-item';
    item.type = 'button';
    if (m.id === finalId) item.classList.add('active');
    item.innerHTML = `
      <span class="chat-model-name">${escapeHtml(formatModelName(m.name))}</span>
      <span class="chat-model-id">${escapeHtml(m.id)}</span>`;
    item.addEventListener('click', () => {
      menu.querySelectorAll('.chat-model-item').forEach((el) => el.classList.remove('active'));
      item.classList.add('active');
      textEl.textContent = formatModelName(m.name);
      onSelect(m.id);
      menu.classList.remove('open');
    });
    menu.appendChild(item);
  });
}

function formatModelName(name) {
  if (!name) return '';
  const max = 18;
  return name.length > max ? name.slice(0, max) + '…' : name;
}

function buildContext(messages) {
  const system = { role: 'system', content: '你是温若，一位清冷淡雅的剑修。请用简短、优美、古风的方式回答。' };
  const recent = messages.slice(-20);
  return [system, ...recent.map((m) => ({ role: m.role, content: m.content }))];
}

function renderMessages(container, messages) {
  container.innerHTML = '';
  if (messages.length === 0) {
    container.innerHTML = `
      <div class="chat-empty">
        <div class="chat-empty-title">✦ 灵犀初启</div>
        <div class="chat-empty-sub">温若在此，想问什么？</div>
      </div>`;
    return;
  }
  messages.forEach((m) => appendMessage(container, m));
  scrollToBottom(container);
}

function appendMessage(container, msg) {
  const existing = container.querySelector('.chat-empty');
  if (existing) existing.remove();

  const div = document.createElement('div');
  div.className = `chat-message chat-message-${msg.role}`;
  div.innerHTML = `
    <div class="chat-avatar">${msg.role === 'user' ? '客' : '若'}</div>
    <div class="chat-bubble"><div class="chat-text">${escapeHtml(msg.content)}</div></div>`;
  container.appendChild(div);
  scrollToBottom(container);
}

function appendSystemMessage(container, text) {
  const div = document.createElement('div');
  div.className = 'chat-system';
  div.textContent = text;
  container.appendChild(div);
  scrollToBottom(container);
}

function appendStreamingMessage(container, id) {
  const existing = container.querySelector('.chat-empty');
  if (existing) existing.remove();

  const div = document.createElement('div');
  div.className = 'chat-message chat-message-assistant streaming';
  div.id = id;
  div.innerHTML = `
    <div class="chat-avatar">若</div>
    <div class="chat-bubble"><div class="chat-text"></div><span class="chat-cursor"></span></div>`;
  container.appendChild(div);
  scrollToBottom(container);
}

function updateStreamingMessage(id, content) {
  const el = document.getElementById(id);
  if (!el) return;
  const textEl = el.querySelector('.chat-text');
  if (textEl) textEl.textContent = content;
  const container = document.getElementById('chatMessages');
  scrollToBottom(container);
}

function finalizeStreamingMessage(id, content) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('streaming');
  const cursor = el.querySelector('.chat-cursor');
  if (cursor) cursor.remove();
  const textEl = el.querySelector('.chat-text');
  if (textEl) textEl.textContent = content;
}

function scrollToBottom(container) {
  if (!container) return;
  container.scrollTop = container.scrollHeight;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return {
      messages: Array.isArray(parsed.messages) ? parsed.messages : [],
      model: parsed.model || DEFAULT_MODEL,
      temperature: typeof parsed.temperature === 'number' ? parsed.temperature : DEFAULT_TEMPERATURE,
      maxTokens: parsed.maxTokens || DEFAULT_MAX_TOKENS,
    };
  } catch (e) {
    return { messages: [], model: DEFAULT_MODEL, temperature: DEFAULT_TEMPERATURE, maxTokens: DEFAULT_MAX_TOKENS };
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    // ignore
  }
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function autoResize(el) {
  if (!el) return;
  el.addEventListener('input', () => {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 160) + 'px';
  });
}
