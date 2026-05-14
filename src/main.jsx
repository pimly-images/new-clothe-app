import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
<<<<<<< HEAD
import App from './App' // ここで App.tsx または App.jsx を読み込んでいます
=======
import { BrowserRouter } from 'react-router-dom' // これが必要です
import App from './App.jsx'
>>>>>>> 13cc7f9 (feat: React Routerを導入し、Aboutページを追加)
=======
import App from './App' // ここで App.tsx または App.jsx を読み込んでいます
>>>>>>> 9d403b62e4b21fd59057021da30572dccfa19e4e
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
<<<<<<< HEAD
    <App />
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> 13cc7f9 (feat: React Routerを導入し、Aboutページを追加)
=======
    <App />
>>>>>>> 9d403b62e4b21fd59057021da30572dccfa19e4e
  </React.StrictMode>,
)