import { Link } from 'react-router-dom'
import { useLocale, useLocalizedPath } from '@/i18n'

const copy = {
  rights: { en: '© 2026 Statsights. All rights reserved.', pt: '© 2026 Statsights. Todos os direitos reservados.' },
  home: { en: 'Home', pt: 'Início' },
  services: { en: 'Services', pt: 'Serviços' },
  contact: { en: 'Contact Us', pt: 'Fale Conosco' },
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
        </nav>
      </div>
    </footer>
  )
}
