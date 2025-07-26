# LLM Geek Proxy 🚀

A personal LLM proxy gateway with a geek/hacker aesthetic. No API keys exposed, just pure geekery.

## Features

- 🔥 **Geek Style**: Dark theme with terminal aesthetics
- 🛡️ **Secure**: API keys hidden, only endpoints exposed
- 🚀 **Multi-Model Support**: OpenAI, Anthropic, Google Gemini
- 📱 **Responsive**: Works on desktop and mobile
- ⚡ **Fast**: Built with FastAPI + React + Vite

## Quick Start

### Backend Setup

```bash
cd llm-proxy/backend

# Install dependencies
pip install -r requirements.txt

# Set your API keys (optional, for testing)
export OPENAI_API_KEY="your-openai-key"
export ANTHROPIC_API_KEY="your-anthropic-key" 
export GOOGLE_API_KEY="your-google-key"

# Run the server
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend Setup

```bash
cd llm-proxy/frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:5173` to see the geeky interface!

## API Endpoints

### Get Available Models
```
GET /models
```

### Proxy Endpoints
```
POST /proxy/openai/gpt35
POST /proxy/anthropic/claude3  
POST /proxy/google/gemini
```

### Example Usage

```bash
curl -X POST "http://localhost:8000/proxy/openai/gpt35" \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [{"role": "user", "content": "Hello, world!"}],
    "temperature": 0.7,
    "max_tokens": 100
  }'
```

## Configuration

### Environment Variables

Create a `.env` file in the backend directory:

```env
OPENAI_API_KEY=sk-your-openai-key
ANTHROPIC_API_KEY=sk-your-anthropic-key
GOOGLE_API_KEY=your-google-key
```

### Adding New Models

Edit `backend/main.py` and add new models to the `MODELS` list:

```python
MODELS = [
    # ... existing models
    {
        "name": "Your New Model",
        "id": "your-model-id",
        "endpoint": "/proxy/your-provider/model"
    }
]
```

Then add the corresponding proxy endpoint function.

## Project Structure

```
llm-proxy/
├── backend/
│   ├── main.py          # FastAPI server
│   └── requirements.txt # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── App.jsx      # Main React component
│   │   └── App.css      # Geek styling
│   ├── vite.config.js   # Vite configuration
│   └── package.json     # Node dependencies
└── README.md           # This file
```

## Development

### Backend Development
- FastAPI for API server
- Pydantic for data validation
- httpx for HTTP client
- Environment-based configuration

### Frontend Development  
- React 18 with hooks
- Vite for fast development
- CSS Grid/Flexbox for layout
- Geek/hacker theme styling

## License

This project is for personal use only. Not for commercial purposes.

---

Built with ❤️ and ☕ by a fellow geek

*"If you know, you know." #root*