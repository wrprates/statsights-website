import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Production pages are prerendered at build time (scripts/prerender.js); the dev server serves an empty root.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
