import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/global.css'
import { SanctuaryProvider } from './context/SanctuaryContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SanctuaryProvider>
      <App />
    </SanctuaryProvider>
  </React.StrictMode>,
)
