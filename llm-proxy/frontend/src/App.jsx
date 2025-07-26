import { useState, useEffect } from 'react'
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

function App() {
  const [models, setModels] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchModels()
  }, [])

  const fetchModels = async () => {
    try {
      const response = await fetch('/api/models')
      if (!response.ok) {
        throw new Error('Failed to fetch models')
      }
      const data = await response.json()
      setModels(data.models)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here
  }

  if (loading) {
    return (
      <div className="app">
        <div className="loading">
          <pre className="banner">{BANNER}</pre>
          <div className="loading-text">Loading models...</div>
          <div className="loading-dots">...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="app">
        <pre className="banner">{BANNER}</pre>
        <div className="error">
          <h2>Error: {error}</h2>
          <p>Check your connection and try again.</p>
        </div>
      </div>
    )
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
            {models.map((model, index) => (
              <div key={model.id} className="model-card">
                <div className="model-header">
                  <h3>{model.name}</h3>
                  <span className="model-id">{model.id}</span>
                </div>
                <div className="endpoint-section">
                  <label>Endpoint:</label>
                  <div className="endpoint-display">
                    <code>{model.endpoint}</code>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(model.endpoint)}
                      title="Copy endpoint"
                    >
                      📋
                    </button>
                  </div>
                </div>
                <div className="model-actions">
                  <button className="test-btn">Test Connection</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="usage-section">
          <h2>Usage Example</h2>
          <div className="code-block">
            <pre><code>{`curl -X POST "http://localhost:8000/proxy/openai/gpt35" \\
  -H "Content-Type: application/json" \\
  -d '{
    "messages": [{"role": "user", "content": "Hello, world!"}],
    "temperature": 0.7,
    "max_tokens": 100
  }'`}</code></pre>
          </div>
        </div>

        <footer className="footer">
          <p>&copy; 2024 Geek Proxy. Not for commercial use.</p>
          <p className="geek-footer">Built with ❤️ and ☕ by a fellow geek</p>
        </footer>
      </div>
    </div>
  )
}

export default App