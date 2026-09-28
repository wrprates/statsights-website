import { Link } from 'react-router-dom'
import { useLocale, useLocalizedPath } from '@/i18n'

// Also listed as "sameAs" in the JSON-LD in index.html
const LINKEDIN_URL = 'https://www.linkedin.com/company/statsights/'

const copy = {
  rights: { en: '© 2026 Statsights. All rights reserved.', pt: '© 2026 Statsights. Todos os direitos reservados.' },
  home: { en: 'Home', pt: 'Início' },
  services: { en: 'Services', pt: 'Serviços' },
  contact: { en: 'Contact Us', pt: 'Fale Conosco' },
  linkedinTooltip: { en: 'Follow us on LinkedIn', pt: 'Siga a Statsights no LinkedIn' },
  linkedinLabel: {
    en: 'Follow Statsights on LinkedIn (opens in a new tab)',
    pt: 'Siga a Statsights no LinkedIn (abre em uma nova aba)',
  },
}

export function Footer() {
  const locale = useLocale()
  const to = useLocalizedPath()

  return (
    <footer className="border-t border-border/40 bg-[#f2f2f2]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={`${import.meta.env.BASE_URL}logo-light.png`} alt="Statsights" className="h-7 w-auto" />
        <p className="text-sm text-muted-foreground text-center">
          {copy.rights[locale]}
        </p>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link to={to('/')} className="hover:text-foreground transition-colors">{copy.home[locale]}</Link>
          <Link to={to('/services')} className="hover:text-foreground transition-colors">{copy.services[locale]}</Link>
          <Link to={to('/contact')} className="hover:text-foreground transition-colors">{copy.contact[locale]}</Link>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={copy.linkedinLabel[locale]}
            className="group relative -m-2 p-2 text-[#0A66C2]"
          >
            {/* Visual tooltip on hover and keyboard focus; screen readers get aria-label instead */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-full left-1/2 mb-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-[#003459] px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-md transition-all group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none"
            >
              {copy.linkedinTooltip[locale]}
            </span>
            {/* Official LinkedIn "in" logo (Simple Icons, CC0) */}
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true" className="transition-opacity group-hover:opacity-80">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  )
}
