import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    let id = hash.slice(1)
    try {
      id = decodeURIComponent(id)
    } catch {
      // Malformed escape like "#%zz": keep the raw id instead of crashing the app
    }
    const target = id ? document.getElementById(id) : null
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
