/**
 * 灵犀 - OpenAI 反代聊天
 */

const CHAT_API_BASE = import.meta.env?.VITE_CHAT_API_BASE || 'https://hanbaoyu.ggff.net/v1';
const CHAT_API_KEY = import.meta.env?.VITE_CHAT_API_KEY || 'cat-15e82e21a1292280105c3020f5dd0468884261de7144dedd';

const STORAGE_KEY = 'wenruo_chat';

const DEFAULT_TEMPERATURE = 0.7;
const DEFAULT_MAX_TOKENS = 2048;
const DEFAULT_MODEL = '';
const DEFAULT_OC_MODE = true;
const OC_SYSTEM_PROMPT = '你是温若，一位清冷淡雅的剑修。请用简短、优美、古风的方式回答。';

export function initChat() {
  const page = document.getElementById('page-chat');
  if (!page) return;

  const modelBtn = document.getElementById('chatModelBtn');
  const modelText = document.getElementById('chatModelText');
  const modelMenu = document.getElementById('chatModelMenu');
  const modelOverlay = document.getElementById('chatModelOverlay');
  const modelList = document.getElementById('chatModelList');
  const modelClose = document.getElementById('chatModelClose');
  const settingsBtn = document.getElementById('chatSettings');
  const settingsPanel = document.getElementById('chatSettingsPanel');
  const settingsOverlay = document.getElementById('chatSettingsOverlay');
  const settingsClose = document.getElementById('chatSettingsClose');
  const messagesEl = document.getElementById('chatMessages');
  const inputEl = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSend');
  const tempInput = document.getElementById('chatTemp');
  const tempVal = document.getElementById('chatTempVal');
  const maxTokensInput = document.getElementById('chatMaxTokens');
  const ocModeInput = document.getElementById('chatOcMode');
  const clearBtn = document.getElementById('chatClear');
  const clearHeaderBtn = document.getElementById('chatClearHeader');
  const exportBtn = document.getElementById('chatExport');
  const welcomePanel = document.getElementById('chatWelcomePanel');
  const welcomeOverlay = document.getElementById('chatWelcomeOverlay');
  const welcomeClose = document.getElementById('chatWelcomeClose');

  if (!modelBtn || !modelMenu || !modelList || !messagesEl || !inputEl) return;

  const state = loadState();
  let models = [];
  let abortController = null;
  let currentAssistantId = null;

  renderMessages(messagesEl, state.messages);
  updateTempLabel(state.temperature);
  tempInput.value = Math.round(state.temperature * 10);
  maxTokensInput.value = state.maxTokens;
  if (ocModeInput) ocModeInput.checked = state.ocMode;

  fetchModels().then((list) => {
    models = list;
    populateModels(modelList, modelText, models, state.model, (id) => {
      state.model = id;
      saveState(state);
      closeModelMenu();
    });
  }).catch(() => {
    modelText.textContent = '模型加载失败';
  });

  function openModelMenu() {
    if (modelMenu && modelOverlay) {
      modelMenu.classList.add('open');
      modelOverlay.classList.add('open');
    }
  }

  function closeModelMenu() {
    if (modelMenu && modelOverlay) {
      modelMenu.classList.remove('open');
      modelOverlay.classList.remove('open');
    }
  }

  modelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (modelMenu.classList.contains('open')) {
      closeModelMenu();
    } else {
      closeSettings();
      openModelMenu();
    }
  });

  if (modelOverlay) {
    modelOverlay.addEventListener('click', closeModelMenu);
    modelOverlay.addEventListener('touchstart', closeModelMenu, { passive: true });
  }

  if (modelClose) {
    modelClose.addEventListener('click', closeModelMenu);
  }

  function openSettings() {
    if (settingsPanel && settingsOverlay) {
      settingsPanel.classList.add('open');
      settingsOverlay.classList.add('open');
    }
  }

  function closeSettings() {
    if (settingsPanel && settingsOverlay) {
      settingsPanel.classList.remove('open');
      settingsOverlay.classList.remove('open');
    }
  }

  settingsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (settingsPanel.classList.contains('open')) {
      closeSettings();
    } else {
      closeModelMenu();
      openSettings();
    }
  });

  if (settingsOverlay) {
    settingsOverlay.addEventListener('click', closeSettings);
    settingsOverlay.addEventListener('touchstart', closeSettings, { passive: true });
  }

  if (settingsClose) {
    settingsClose.addEventListener('click', closeSettings);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModelMenu();
      closeSettings();
    }
  });

  const pageObserver = new MutationObserver(() => {
    if (!page.classList.contains('active')) {
      closeModelMenu();
      closeSettings();
    }
  });
  pageObserver.observe(page, { attributes: true, attributeFilter: ['class'] });

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



  if (ocModeInput) {
    ocModeInput.addEventListener('change', () => {
      state.ocMode = ocModeInput.checked;
      saveState(state);
    });
  }

  function clearMessages() {
    if (!confirm('确定要清空当前对话吗？')) return;
    state.messages = [];
    saveState(state);
    renderMessages(messagesEl, state.messages);
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      clearMessages();
      closeSettings();
    });
  }

  if (clearHeaderBtn) {
    clearHeaderBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      clearMessages();
    });
  }

  if (exportBtn) {
    exportBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      exportChat(state.messages);
    });
  }

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  });

  inputEl.addEventListener('focus', () => {
    setTimeout(() => inputEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
  });

  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    sendMessage();
  });

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
          messages: buildContext(state.messages, state.ocMode),
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

  function openWelcome() {
    if (localStorage.getItem('wenruo_chat_welcome') === '1') return;
    if (welcomePanel && welcomeOverlay) {
      welcomePanel.classList.add('open');
      welcomeOverlay.classList.add('open');
    }
  }

  function closeWelcome() {
    if (welcomePanel && welcomeOverlay) {
      welcomePanel.classList.remove('open');
      welcomeOverlay.classList.remove('open');
    }
    try {
      localStorage.setItem('wenruo_chat_welcome', '1');
    } catch (e) {}
  }

  if (welcomeClose) {
    welcomeClose.addEventListener('click', closeWelcome);
  }

  if (welcomeOverlay) {
    welcomeOverlay.addEventListener('click', closeWelcome);
  }

  const welcomeObserver = new MutationObserver(() => {
    if (page.classList.contains('active')) {
      openWelcome();
    } else {
      closeWelcome();
    }
  });
  welcomeObserver.observe(page, { attributes: true, attributeFilter: ['class'] });

  if (page.classList.contains('active')) {
    openWelcome();
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

function populateModels(list, textEl, models, selectedId, onSelect) {
  if (!list) return;
  list.innerHTML = '';
  if (models.length === 0) {
    textEl.textContent = '无可用模型';
    return;
  }

  const finalId = selectedId || models[0].id;
  const selectedModel = models.find((m) => m.id === finalId) || models[0];
  textEl.textContent = formatModelName(selectedModel.name);

  models.forEach((m) => {
    const provider = detectProvider(m.id);
    const icon = provider ? getProviderIcon(provider) : '';
    const item = document.createElement('button');
    item.className = 'chat-model-item';
    item.type = 'button';
    if (m.id === finalId) item.classList.add('active');
    item.innerHTML = `
      <div class="chat-model-item-main">
        ${icon}
        <span class="chat-model-name">${escapeHtml(formatModelName(m.name))}</span>
      </div>
      <span class="chat-model-id">${escapeHtml(m.id)}</span>`;
    item.addEventListener('click', () => {
      list.querySelectorAll('.chat-model-item').forEach((el) => el.classList.remove('active'));
      item.classList.add('active');
      textEl.textContent = formatModelName(m.name);
      onSelect(m.id);
    });
    list.appendChild(item);
  });
}

function detectProvider(id) {
  const lower = id.toLowerCase();
  if (lower.includes('deepseek')) return 'deepseek';
  if (lower.includes('claude') || lower.includes('anthropic')) return 'anthropic';
  if (lower.includes('gpt') || lower.includes('openai') || lower.includes('o1-') || lower.includes('o3-')) return 'chatgpt';
  if (lower.includes('gemini') || lower.includes('google')) return 'gemini';
  return null;
}

function getProviderIcon(provider) {
  const icons = {
    deepseek: `<svg class="chat-model-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4D6BFA" d="M21.2 11c-.5-1.8-2.2-3.2-4.2-3.4-.4 0-.8-.3-1-.7-.2-.4-.1-.9.3-1.2.3-.3.9-.4 1.3-.2.3.2.6.5.7.8 0 .1.1.1.2.1.1 0 .2-.1.2-.2 0-.1-.1-.2-.2-.3-.5-.4-1.2-.4-1.8-.2-.8.3-1.4 1-1.5 1.8-.1.5 0 1.1.4 1.5.3.3.8.5 1.2.6.5.2 1.1.3 1.7.5.7.3 1.3.8 1.6 1.5.3.7.2 1.5-.2 2.1-.4.7-1.1 1.2-1.9 1.3-.7.1-1.5 0-2.1-.4-.6-.4-1.1-1-1.2-1.7-.1-.5 0-1 .3-1.3.3-.4.8-.5 1.2-.5.2 0 .5 0 .7.1.1 0 .2 0 .2-.1 0-.1 0-.2-.1-.2-.1-.1-.3-.2-.4-.2-.7-.2-1.5 0-2 .6-.5.6-.7 1.4-.5 2.1.2.9.8 1.7 1.6 2.1.8.4 1.8.5 2.7.2.9-.3 1.7-1.1 2-2 .3-.8.1-1.7-.4-2.4zM12 2.5c-4.4 0-8 3.4-8 7.8 0 4 2.9 7.3 6.8 8 .5.1 1.1 0 1.6-.3.4-.3.8-.7.9-1.2.1-.5 0-1-.4-1.3-.3-.3-.9-.5-1.3-.3-.4.1-.8.5-.9.8-.1.4-.1.8.2 1 .2.2.5.3.7.3.1 0 .3.2.2.4 0 .1-.1.3-.3.3-.3.2-.7.2-1.1.1-3-1-5.2-3.7-5.2-7 0-3.6 2.9-6.5 6.5-6.5 3.1 0 5.7 2.1 6.4 5 .1.4.5.7.9.8.4.1.9 0 1.2-.3.3-.3.4-.8.2-1.2C19.2 4.8 15.9 2.5 12 2.5z"/></svg>`,
    anthropic: `<svg class="chat-model-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#D97757" d="M12 2L4 20h2.5l2-5h7l2 5H20L12 2zm1.5 11h-3l1.5-3.8 1.5 3.8z"/></svg>`,
    chatgpt: `<svg class="chat-model-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#10A37F" d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.2L17.5 7 12 9.8 6.5 7 12 4.2zM6 8.5l5 2.8v5.4l-5-2.5V8.5zm7 8.2v-5.4l5-2.8v5.7l-5 2.5z"/></svg>`,
    gemini: `<svg class="chat-model-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M12 1l2.5 7.5L12 12l-2.5-3.5L12 1z"/><path fill="#EA4335" d="M23 12l-7.5 2.5L12 12l3.5-2.5L23 12z"/><path fill="#FBBC05" d="M12 23l-2.5-7.5L12 12l2.5 3.5L12 23z"/><path fill="#34A853" d="M1 12l7.5-2.5L12 12l-3.5 2.5L1 12z"/></svg>`,
  };
  return icons[provider] || '';
}

function formatModelName(name) {
  if (!name) return '';
  const max = 18;
  return name.length > max ? name.slice(0, max) + '…' : name;
}

function buildContext(messages, ocMode) {
  const recent = messages.slice(-20);
  const context = recent.map((m) => ({ role: m.role, content: m.content }));
  if (ocMode) {
    return [{ role: 'system', content: OC_SYSTEM_PROMPT }, ...context];
  }
  return context;
}

function exportChat(messages) {
  if (!messages || messages.length === 0) {
    alert('当前没有对话记录可导出');
    return;
  }
  const text = messages
    .map((msg) => `${msg.role === 'user' ? '你' : '温若'}：${msg.content}`)
    .join('\n\n');
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `灵犀对话-${new Date().toISOString().slice(0, 10)}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
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
      ocMode: typeof parsed.ocMode === 'boolean' ? parsed.ocMode : DEFAULT_OC_MODE,
    };
  } catch (e) {
    return { messages: [], model: DEFAULT_MODEL, temperature: DEFAULT_TEMPERATURE, maxTokens: DEFAULT_MAX_TOKENS, ocMode: DEFAULT_OC_MODE };
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
  if (!el || el.tagName !== 'TEXTAREA') return;
  el.addEventListener('input', () => {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 160) + 'px';
  });
}
