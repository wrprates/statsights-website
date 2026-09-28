import { Link, useLocation } from 'react-router-dom'
import { type Locale, useLocale } from '@/i18n'
import { alternatePath } from '@/seo'
import { cn } from '@/lib/utils'

const languages: { locale: Locale; label: string; name: string; lang: string }[] = [
  { locale: 'en', label: 'EN', name: 'English', lang: 'en' },
  { locale: 'pt', label: 'PT', name: 'Português', lang: 'pt-BR' },
]

export function LanguageSwitcher({ className }: { className?: string }) {
  const { pathname } = useLocation()
  const current = useLocale()
  const links = languages.flatMap(language => {
    const to = alternatePath(pathname, language.locale)
    return to ? [{ ...language, to }] : []
  })

  // Pages that exist in only one language (DealPath, 404) have nothing to switch to.
  if (links.length < languages.length) return null

  return (
    <div
      role="group"
      aria-label={current === 'pt' ? 'Idioma' : 'Language'}
      className={cn('flex items-center rounded-full border border-white/15 p-0.5 text-xs font-semibold', className)}
    >
      {links.map(link => {
        const active = link.locale === current
        return (
          <Link
            key={link.locale}
            to={link.to}
            lang={link.lang}
            hrefLang={link.lang}
            title={link.name}
            aria-current={active ? 'true' : undefined}
            className={cn(
              'rounded-full px-2.5 py-1 transition-colors',
              active ? 'bg-white text-[#003459]' : 'text-white/60 hover:text-white',
            )}
          >
            {link.label}
          </Link>
        )
      })}
    </div>
  )
}
