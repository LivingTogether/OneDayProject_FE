import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'; // 👈 1. import 하기

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* 👈 2. App을 BrowserRouter로 감싸기 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)