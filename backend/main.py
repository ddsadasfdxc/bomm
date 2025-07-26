from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse, HTMLResponse
from pydantic import BaseModel
import httpx

app = FastAPI(title="LLM Proxy Geek Edition")

# --- Model List ---
MODELS = [
    {"id": "openai-gpt-3.5-turbo", "provider": "OpenAI"},
    {"id": "llama-2-7b", "provider": "Llama"},
    {"id": "gemini-pro", "provider": "Gemini"},
    {"id": "mistral-7b", "provider": "Mistral"},
]

# --- Home Page ---
@app.get("/", response_class=HTMLResponse)
def home():
    html = """
    <html style='background:#111;color:#eee;font-family:monospace;'>
    <head><title>LLM Proxy Geek Edition</title></head>
    <body>
    <h1>🤖 LLM Proxy Geek Edition</h1>
    <p>API Endpoint: <code>/v1/chat/completions</code></p>
    <h2>Available Models</h2>
    <ul>
    """
    for m in MODELS:
        html += f"<li><b>{m['id']}</b> <i>({m['provider']})</i></li>"
    html += """
    </ul>
    <hr><small>Non-commercial. For geeks only.</small>
    </body></html>
    """
    return HTMLResponse(content=html)

# --- Model List Endpoint ---
@app.get("/v1/models")
def list_models():
    return {"object": "list", "data": MODELS}

# --- Chat Completion Proxy ---
class ChatRequest(BaseModel):
    model: str
    messages: list
    # ... add more fields as needed

@app.post("/v1/chat/completions")
async def chat_completions(req: ChatRequest, request: Request):
    # Geeky: Just echo back for now, or implement proxy logic here
    # In real use, forward to actual LLM provider
    return {"id": "chatcmpl-geek", "object": "chat.completion", "model": req.model, "choices": [{"message": {"role": "assistant", "content": "[LLM Proxy Geek Edition: This is a stub reply. Implement real proxy logic here.]"}}]}