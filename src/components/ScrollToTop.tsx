import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
