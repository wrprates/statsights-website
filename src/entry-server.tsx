/* eslint-disable react-refresh/only-export-components -- build-time server entry, never hot-reloaded */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.tsx'

export { PAGES, NOT_FOUND, SITE_URL, canonicalUrl, ogLocale } from './seo'

export function render(path: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
