import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { UIProvider } from '@yamada-ui/react' 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UIProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </UIProvider>
  </React.StrictMode>,
)
