import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import App from './App' // ここで App.tsx または App.jsx を読み込んでいます
=======
import { BrowserRouter } from 'react-router-dom' // これが必要です
import App from './App.jsx'
>>>>>>> 13cc7f9 (feat: React Routerを導入し、Aboutページを追加)
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> 13cc7f9 (feat: React Routerを導入し、Aboutページを追加)
  </React.StrictMode>,
)