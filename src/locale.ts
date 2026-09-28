export type Locale = 'en' | 'pt'

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
