// Renders every route to static HTML after `vite build`, so crawlers and link previews
// see real content and per-page meta tags. Run via `npm run build`.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(import.meta.dirname, '..')
const dist = path.join(root, 'dist')
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const { render, PAGES, NOT_FOUND, SITE_URL, canonicalUrl, ogLocale } = await import(pathToFileURL(serverEntry).href)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')

const escapeAttr = value =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function setTag(html, pattern, attr, value) {
  if (!pattern.test(html)) throw new Error(`prerender: tag not found in index.html: ${pattern}`)
  return html.replace(pattern, match => match.replace(new RegExp(`${attr}="[^"]*"`), `${attr}="${escapeAttr(value)}"`))
}

function renderPage(page, { noindex = false } = {}) {
  const url = canonicalUrl(page.path)
  let html = template
  html = html.replace(/<html lang="[^"]*"/, `<html lang="${page.lang}"`)
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(page.title)}</title>`)
  html = setTag(html, /<meta name="description"[^>]*>/, 'content', page.description)
  html = setTag(html, /<link rel="canonical"[^>]*>/, 'href', url)
  html = setTag(html, /<meta property="og:title"[^>]*>/, 'content', page.title)
  html = setTag(html, /<meta property="og:description"[^>]*>/, 'content', page.description)
  html = setTag(html, /<meta property="og:url"[^>]*>/, 'content', url)
  html = setTag(html, /<meta property="og:locale"[^>]*>/, 'content', ogLocale(page.lang))
  if (noindex) html = html.replace('</title>', '</title>\n    <meta name="robots" content="noindex" />')
  return html.replace('<!--app-html-->', render(page.path))
}

// GitHub Pages serves /services from services.html, so no trailing-slash redirects.
for (const page of PAGES) {
  const file = page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`
  fs.writeFileSync(path.join(dist, file), renderPage(page))
  console.log(`prerendered ${page.path} -> dist/${file}`)
}

fs.writeFileSync(path.join(dist, '404.html'), renderPage(NOT_FOUND, { noindex: true }))
console.log('prerendered 404 -> dist/404.html')

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(p => `  <url>\n    <loc>${canonicalUrl(p.path)}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
console.log(`wrote sitemap.xml (${PAGES.length} URLs, ${SITE_URL})`)

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
