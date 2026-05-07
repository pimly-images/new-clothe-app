import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // ここで App.tsx または App.jsx を読み込んでいます
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)