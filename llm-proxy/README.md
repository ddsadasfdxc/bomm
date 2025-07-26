# LLM Geek Proxy 🚀

A personal LLM proxy showcase with a geek/hacker aesthetic. **Frontend only** - no backend required!

## Features

- 🔥 **Geek Style**: Dark theme with terminal aesthetics
- 🛡️ **Secure**: Only endpoints shown, no API keys exposed
- 🚀 **Multi-Model Support**: OpenAI, Anthropic, Google, Mistral, Cohere, Perplexity
- 📱 **Responsive**: Works on desktop and mobile
- ⚡ **Fast**: Pure frontend - no server needed

## Quick Start

### Frontend Only

```bash
cd llm-proxy/frontend

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:5173` to see the geeky interface!

## What's Included

### Model Endpoints Displayed
- **OpenAI GPT-4**: `https://api.openai.com/v1/chat/completions`
- **Anthropic Claude-3**: `https://api.anthropic.com/v1/messages`
- **Google Gemini Pro**: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent`
- **Mistral Large**: `https://api.mistral.ai/v1/chat/completions`
- **Cohere Command**: `https://api.cohere.ai/v1/chat`
- **Perplexity Mixtral**: `https://api.perplexity.ai/chat/completions`

### Features
- ✅ Copy endpoint URLs with one click
- ✅ Model descriptions and capabilities
- ✅ Usage examples with curl commands
- ✅ Responsive design for all devices
- ✅ Geek/hacker aesthetic styling

## Project Structure

```
llm-proxy/
├── frontend/
│   ├── src/
│   │   ├── App.jsx      # Main React component
│   │   └── App.css      # Geek styling
│   ├── vite.config.js   # Vite configuration
│   └── package.json     # Node dependencies
└── README.md           # This file
```

## Development

### Frontend Development  
- React 18 with hooks
- Vite for fast development
- CSS Grid/Flexbox for layout
- Geek/hacker theme styling
- Static data (no API calls)

## Deployment

This is a **frontend-only** project that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## License

This project is for personal use only. Not for commercial purposes.

---

Built with ❤️ and ☕ by a fellow geek

*"If you know, you know." #root*

**Note**: This is just a frontend showcase. No backend required!