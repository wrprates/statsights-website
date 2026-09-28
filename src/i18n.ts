import { useLocation } from 'react-router-dom'
import { type Locale, localeFromPath, localizePath } from './locale'

export type { Locale }

export function useLocale(): Locale {
  return localeFromPath(useLocation().pathname)
}

// Returns a function that maps an English path ('/contact') to the current locale's path.
export function useLocalizedPath() {
  const locale = useLocale()
  return (path: string) => localizePath(path, locale)
}
