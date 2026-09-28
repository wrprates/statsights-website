import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { type PageMeta, canonicalUrl, getPageMeta, hreflangLinks, ogImageAlt, ogLocale } from '@/seo'

function setMeta(selector: string, value: string) {
  document.head.querySelector(selector)?.setAttribute('content', value)
}

// canonical + hreflang for indexable pages, robots noindex for 404s (mirrors scripts/prerender.js).
function indexingTags(meta: PageMeta): HTMLElement[] {
  if (meta.noindex) return [Object.assign(document.createElement('meta'), { name: 'robots', content: 'noindex' })]
  const link = (attrs: Partial<HTMLLinkElement>) => Object.assign(document.createElement('link'), attrs)
  return [
    link({ rel: 'canonical', href: canonicalUrl(meta.path) }),
    ...hreflangLinks(meta.path).map(({ hreflang, href }) => link({ rel: 'alternate', hreflang, href })),
  ]
}

// Keeps <head> in sync on client-side navigation; the prerender script writes the same tags into each HTML file.
export function RouteMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getPageMeta(pathname)
    document.title = meta.title
    document.documentElement.lang = meta.lang
    setMeta('meta[name="description"]', meta.description)
    setMeta('meta[property="og:title"]', meta.title)
    setMeta('meta[property="og:description"]', meta.description)
    setMeta('meta[property="og:url"]', canonicalUrl(meta.path))
    setMeta('meta[property="og:locale"]', ogLocale(meta.lang))
    setMeta('meta[property="og:image:alt"]', ogImageAlt(meta.lang))

    document.head
      .querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang], meta[name="robots"]')
      .forEach(tag => tag.remove())
    document.head.append(...indexingTags(meta))
  }, [pathname])

  return null
}
