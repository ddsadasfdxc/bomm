# LLM Proxy

A minimal, geeky, non-commercial proxy site for your favorite LLMs. Built for personal use, inspired by terminal/OSS culture.

## Features
- Terminal-inspired UI
- API endpoint for proxying LLM requests
- List of available models (customizable)
- No API key exposed, no commercial content

## Usage
1. Deploy this site to any static host (Vercel, Netlify, GitHub Pages, etc).
2. Set up your own backend `/api/proxy` endpoint to forward requests to your LLM providers (OpenAI, Anthropic, etc).
3. Edit the models list in `index.html` to match your available models.

## Customization
- **Models:** Edit the `<pre class="models-list">` block in `index.html`.
- **API Endpoint:** Change the endpoint string if your backend differs.
- **Style:** Tweak `style.css` for your own terminal/geek flavor.

## License
MIT. For personal, non-commercial use only.