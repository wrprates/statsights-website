import { useLocation } from 'react-router-dom'

export type Locale = 'en' | 'pt'
export type Localized<T = string> = Record<Locale, T>

// Portuguese pages live under /pt and mirror the English paths: /services <-> /pt/services.
const PT_PREFIX = '/pt'

export function localeFromPath(pathname: string): Locale {
  return pathname === PT_PREFIX || pathname.startsWith(`${PT_PREFIX}/`) ? 'pt' : 'en'
}

export function localizePath(path: string, locale: Locale): string {
  const basePath = localeFromPath(path) === 'pt' ? path.slice(PT_PREFIX.length) || '/' : path
  if (locale === 'en') return basePath
  return basePath === '/' ? PT_PREFIX : `${PT_PREFIX}${basePath}`
}

export function useLocale(): Locale {
  return localeFromPath(useLocation().pathname)
}

// Returns a function that maps an English path ('/contact') to the current locale's path.
export function useLocalizedPath() {
  const locale = useLocale()
  return (path: string) => localizePath(path, locale)
}
