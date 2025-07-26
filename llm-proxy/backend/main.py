import os
from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse, HTMLResponse
from pydantic import BaseModel
import httpx

# --- Geeky ASCII Banner ---
BANNER = r"""
 _     _ _     _                 _           
| |   (_) |__ | | ___  ___ _ __ (_)_ __  ___ 
| |   | | '_ \| |/ _ \/ __| '_ \| | '_ \/ __|
| |___| | |_) | |  __/ (__| | | | | |_) \__ \
|_____|_|_.__/|_|\___|\___|_| |_|_| .__/|___/
                                  |_|        
"""

# --- Model Config ---
MODELS = [
    {
        "name": "OpenAI GPT-3.5",
        "id": "openai-gpt35",
        "endpoint": "/proxy/openai/gpt35"
    },
    {
        "name": "Anthropic Claude-3",
        "id": "anthropic-claude3",
        "endpoint": "/proxy/anthropic/claude3"
    },
    {
        "name": "Google Gemini",
        "id": "google-gemini",
        "endpoint": "/proxy/google/gemini"
    }
]

# --- API Keys (from env, not exposed) ---
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "sk-xxx")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY", "sk-xxx")
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY", "sk-xxx")

# --- FastAPI App ---
app = FastAPI(title="LLM Geek Proxy", docs_url=None, redoc_url=None)

# --- Home Page ---
@app.get("/", response_class=HTMLResponse)
def home():
    geek_html = f"""
    <html>
    <head>
        <title>LLM Geek Proxy</title>
        <style>
            body {{ background: #18181a; color: #39ff14; font-family: 'Fira Mono', monospace; }}
            .banner {{ white-space: pre; font-size: 1.1em; margin-bottom: 2em; }}
            .model-list {{ margin-top: 2em; }}
            a {{ color: #00bfff; text-decoration: none; }}
            a:hover {{ text-decoration: underline; }}
            .footer {{ margin-top: 3em; color: #666; font-size: 0.9em; }}
        </style>
    </head>
    <body>
        <div class="banner">{BANNER}</div>
        <h2>Welcome, fellow hacker.</h2>
        <div class="model-list">
            <h3>Available LLM Proxies:</h3>
            <ul>
                {''.join([f'<li><b>{m['name']}</b> <code>{m['endpoint']}</code></li>' for m in MODELS])}
            </ul>
            <p style="margin-top:1em;">No API keys here. If you know, you know. <span style="color:#ff0055">//</span></p>
        </div>
        <div class="footer">&copy; 2024 Geek Proxy. Not for commercial use. <span style="color:#ff0055">#root</span></div>
    </body>
    </html>
    """
    return HTMLResponse(content=geek_html)

# --- Model List API ---
@app.get("/models")
def get_models():
    return {"models": MODELS}

# --- Proxy Schemas ---
class ProxyRequest(BaseModel):
    messages: list
    model: str = None
    temperature: float = 1.0
    max_tokens: int = 1024
    # ... add more as needed

# --- Proxy Endpoints ---
@app.post("/proxy/openai/gpt35")
async def proxy_openai(req: ProxyRequest):
    url = "https://api.openai.com/v1/chat/completions"
    headers = {"Authorization": f"Bearer {OPENAI_API_KEY}"}
    payload = {
        "model": "gpt-3.5-turbo",
        "messages": req.messages,
        "temperature": req.temperature,
        "max_tokens": req.max_tokens
    }
    async with httpx.AsyncClient() as client:
        r = await client.post(url, headers=headers, json=payload)
    if r.status_code != 200:
        raise HTTPException(status_code=r.status_code, detail=r.text)
    return r.json()

@app.post("/proxy/anthropic/claude3")
async def proxy_anthropic(req: ProxyRequest):
    url = "https://api.anthropic.com/v1/messages"
    headers = {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
    }
    payload = {
        "model": "claude-3-opus-20240229",
        "messages": req.messages,
        "max_tokens": req.max_tokens,
        "temperature": req.temperature
    }
    async with httpx.AsyncClient() as client:
        r = await client.post(url, headers=headers, json=payload)
    if r.status_code != 200:
        raise HTTPException(status_code=r.status_code, detail=r.text)
    return r.json()

@app.post("/proxy/google/gemini")
async def proxy_gemini(req: ProxyRequest):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key={GOOGLE_API_KEY}"
    payload = {
        "contents": req.messages,
        "generationConfig": {
            "temperature": req.temperature,
            "maxOutputTokens": req.max_tokens
        }
    }
    async with httpx.AsyncClient() as client:
        r = await client.post(url, json=payload)
    if r.status_code != 200:
        raise HTTPException(status_code=r.status_code, detail=r.text)
    return r.json()

# --- Easter Egg: 404 ---
@app.exception_handler(404)
async def not_found(request: Request, exc):
    return HTMLResponse(f"<pre style='color:#ff0055;background:#18181a;padding:2em;font-size:1.2em;'>404 Not Found\n\n> You seem lost in the matrix.\n> Try / or /models.\n</pre>", status_code=404)