import { useState } from 'react'
import './App.css'

// ASCII Banner
const BANNER = `
 _     _ _     _                 _           
| |   (_) |__ | | ___  ___ _ __ (_)_ __  ___ 
| |   | | '_ \\| |/ _ \\/ __| '_ \\| | '_ \\/ __|
| |___| | |_) | |  __/ (__| | | | | |_) \\__ \\
|_____|_|_.__/|_|\\___|\\___|_| |_|_| .__/|___/
                                  |_|        
`

// Static model data
const MODELS = [
  {
    name: "OpenAI GPT-4",
    id: "openai-gpt4",
    endpoint: "https://api.openai.com/v1/chat/completions",
    description: "Latest GPT-4 model with enhanced reasoning"
  },
  {
    name: "Anthropic Claude-3",
    id: "anthropic-claude3", 
    endpoint: "https://api.anthropic.com/v1/messages",
    description: "Claude 3 Opus - most capable model"
  },
  {
    name: "Google Gemini Pro",
    id: "google-gemini",
    endpoint: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
    description: "Google's most advanced AI model"
  },
  {
    name: "Mistral Large",
    id: "mistral-large",
    endpoint: "https://api.mistral.ai/v1/chat/completions", 
    description: "Mistral's flagship reasoning model"
  },
  {
    name: "Cohere Command",
    id: "cohere-command",
    endpoint: "https://api.cohere.ai/v1/chat",
    description: "Cohere's conversational AI model"
  },
  {
    name: "Perplexity Mixtral",
    id: "perplexity-mixtral",
    endpoint: "https://api.perplexity.ai/chat/completions",
    description: "Fast and efficient open model"
  }
]

function App() {
  const [copiedEndpoint, setCopiedEndpoint] = useState(null)

  const copyToClipboard = (text, modelId) => {
    navigator.clipboard.writeText(text)
    setCopiedEndpoint(modelId)
    setTimeout(() => setCopiedEndpoint(null), 2000)
  }

  return (
    <div className="app">
      <pre className="banner">{BANNER}</pre>
      
      <div className="content">
        <h1 className="title">Welcome, fellow hacker.</h1>
        
        <div className="description">
          <p>Your personal LLM proxy gateway. No API keys exposed, just pure geekery.</p>
          <p className="geek-note">// If you know, you know. #root</p>
        </div>

        <div className="models-section">
          <h2>Available Models</h2>
          <div className="models-grid">
            {MODELS.map((model) => (
              <div key={model.id} className="model-card">
                <div className="model-header">
                  <h3>{model.name}</h3>
                  <span className="model-id">{model.id}</span>
                </div>
                <div className="model-description">
                  <p>{model.description}</p>
                </div>
                <div className="endpoint-section">
                  <label>API Endpoint:</label>
                  <div className="endpoint-display">
                    <code>{model.endpoint}</code>
                    <button 
                      className={`copy-btn ${copiedEndpoint === model.id ? 'copied' : ''}`}
                      onClick={() => copyToClipboard(model.endpoint, model.id)}
                      title="Copy endpoint"
                    >
                      {copiedEndpoint === model.id ? '✓' : '📋'}
                    </button>
                  </div>
                </div>
                <div className="model-actions">
                  <button className="test-btn">View Documentation</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="usage-section">
          <h2>Usage Example</h2>
          <div className="code-block">
            <pre><code>{`curl -X POST "https://api.openai.com/v1/chat/completions" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "model": "gpt-4",
    "messages": [{"role": "user", "content": "Hello, world!"}],
    "temperature": 0.7,
    "max_tokens": 100
  }'`}</code></pre>
          </div>
        </div>

        <div className="info-section">
          <h2>About This Proxy</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>🔒 Security</h3>
              <p>API keys are never exposed. Only endpoints are shown for reference.</p>
            </div>
            <div className="info-card">
              <h3>🚀 Performance</h3>
              <p>Direct API calls to providers for maximum speed and reliability.</p>
            </div>
            <div className="info-card">
              <h3>🛠️ Customizable</h3>
              <p>Easy to add new models and customize endpoints as needed.</p>
            </div>
            <div className="info-card">
              <h3>📱 Responsive</h3>
              <p>Works perfectly on desktop, tablet, and mobile devices.</p>
            </div>
          </div>
        </div>

        <footer className="footer">
          <p>&copy; 2024 Geek Proxy. Not for commercial use.</p>
          <p className="geek-footer">Built with ❤️ and ☕ by a fellow geek</p>
          <p className="geek-footer">// This is just a frontend showcase. No backend required.</p>
        </footer>
      </div>
    </div>
  )
}

export default App