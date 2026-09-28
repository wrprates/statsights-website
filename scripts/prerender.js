// Renders every route to static HTML after `vite build`, so crawlers and link previews
// see real content and per-page meta tags. Run via `npm run build`.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(import.meta.dirname, '..')
const dist = path.join(root, 'dist')
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const { render, PAGES, NOT_FOUND, SITE_URL, canonicalUrl, hreflangLinks, ogImageAlt, ogLocale } = await import(pathToFileURL(serverEntry).href)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')

const escapeAttr = value =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function setTag(html, pattern, attr, value) {
  if (!pattern.test(html)) throw new Error(`prerender: tag not found in index.html: ${pattern}`)
  return html.replace(pattern, match => match.replace(new RegExp(`${attr}="[^"]*"`), () => `${attr}="${escapeAttr(value)}"`))
}

// Every replacement below passes a function, so "$&" or "$'" in page content (e.g. "R$") is inserted literally.
function renderPage(page) {
  const url = canonicalUrl(page.path)
  let html = template
  html = html.replace(/<html lang="[^"]*"/, `<html lang="${page.lang}"`)
  html = html.replace(/<title>[^<]*<\/title>/, () => `<title>${escapeAttr(page.title)}</title>`)
  html = setTag(html, /<meta name="description"[^>]*>/, 'content', page.description)
  html = setTag(html, /<link rel="canonical"[^>]*>/, 'href', url)
  const alternates = hreflangLinks(page.path)
    .map(({ hreflang, href }) => `<link rel="alternate" hreflang="${hreflang}" href="${escapeAttr(href)}" />`)
    .join('\n    ')
  if (alternates) html = html.replace(/<link rel="canonical"[^>]*>/, canonical => `${canonical}\n    ${alternates}`)
  html = setTag(html, /<meta property="og:title"[^>]*>/, 'content', page.title)
  html = setTag(html, /<meta property="og:description"[^>]*>/, 'content', page.description)
  html = setTag(html, /<meta property="og:url"[^>]*>/, 'content', url)
  html = setTag(html, /<meta property="og:locale"[^>]*>/, 'content', ogLocale(page.lang))
  html = setTag(html, /<meta property="og:image:alt"[^>]*>/, 'content', ogImageAlt(page.lang))
  // A 404 has no canonical URL of its own; it only tells crawlers not to index it.
  if (page.noindex) {
    html = html.replace(/\s*<link rel="canonical"[^>]*>/, '')
    html = html.replace('</title>', '</title>\n    <meta name="robots" content="noindex" />')
  }
  return html.replace('<!--app-html-->', () => render(page.path))
}

function writePage(file, html) {
  fs.mkdirSync(path.dirname(path.join(dist, file)), { recursive: true })
  fs.writeFileSync(path.join(dist, file), html)
  console.log(`prerendered -> dist/${file}`)
}

// Apache (public/.htaccess) serves /services from services.html and /pt/services from pt/services.html.
for (const page of PAGES) {
  writePage(page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`, renderPage(page))
}

// One 404 page per language; .htaccess picks pt/404.html for URLs under /pt.
for (const page of Object.values(NOT_FOUND)) {
  writePage(`${page.path.slice(1)}.html`, renderPage(page))
}

// No <lastmod>: the build date would claim every page changed on every deploy.
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(p => `  <url>\n    <loc>${canonicalUrl(p.path)}</loc>\n  </url>`).join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
console.log(`wrote sitemap.xml (${PAGES.length} URLs, ${SITE_URL})`)

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
