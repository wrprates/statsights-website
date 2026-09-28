import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { canonicalUrl, getPageMeta, hreflangLinks, ogLocale } from '@/seo'

function setMeta(selector: string, value: string) {
  document.head.querySelector(selector)?.setAttribute(selector.startsWith('link') ? 'href' : 'content', value)
}

// Keeps <head> in sync on client-side navigation; the prerender script writes the same tags into each HTML file.
export function RouteMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getPageMeta(pathname)
    const url = canonicalUrl(meta.path)
    document.title = meta.title
    document.documentElement.lang = meta.lang
    setMeta('meta[name="description"]', meta.description)
    setMeta('meta[property="og:title"]', meta.title)
    setMeta('meta[property="og:description"]', meta.description)
    setMeta('meta[property="og:url"]', url)
    setMeta('meta[property="og:locale"]', ogLocale(meta.lang))
    setMeta('link[rel="canonical"]', url)

    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach(link => link.remove())
    const canonical = document.head.querySelector('link[rel="canonical"]')
    for (const { hreflang, href } of hreflangLinks(meta.path).reverse()) {
      const link = Object.assign(document.createElement('link'), { rel: 'alternate', hreflang, href })
      canonical?.after(link)
    }
  }, [pathname])

  return null
}
