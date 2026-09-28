import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function NotFound() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-32 text-center">
      <p className="text-sm font-semibold tracking-widest text-[#0369a1] uppercase mb-3">404</p>
      <h1 className="text-3xl md:text-4xl font-bold text-[#003459] mb-4">Page not found</h1>
      <p className="text-muted-foreground text-lg mb-10">The page you are looking for does not exist or has moved.</p>
      <Button asChild size="lg" className="font-semibold px-8 bg-[#003459] hover:bg-[#003459]/90">
        <Link to="/">Back to home</Link>
      </Button>
    </main>
  )
}
