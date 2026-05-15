import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// ↓ BrowserRouter を HashRouter に書き換えます
import { HashRouter } from 'react-router-dom' 
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)