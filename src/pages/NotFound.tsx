import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useLocale, useLocalizedPath } from '@/i18n'

const copy = {
  heading: { en: 'Page not found', pt: 'Página não encontrada' },
  body: { en: 'The page you are looking for does not exist or has moved.', pt: 'A página que você procura não existe ou foi movida.' },
  back: { en: 'Back to home', pt: 'Voltar para o início' },
}

export function NotFound() {
  const locale = useLocale()
  const to = useLocalizedPath()

  return (
    <main className="max-w-2xl mx-auto px-6 py-32 text-center">
      <p className="text-sm font-semibold tracking-widest text-[#0369a1] uppercase mb-3">404</p>
      <h1 className="text-3xl md:text-4xl font-bold text-[#003459] mb-4">{copy.heading[locale]}</h1>
      <p className="text-muted-foreground text-lg mb-10">{copy.body[locale]}</p>
      <Button asChild size="lg" className="font-semibold px-8 bg-[#003459] hover:bg-[#003459]/90">
        <Link to={to('/')}>{copy.back[locale]}</Link>
      </Button>
    </main>
  )
}
