import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #001f33 0%, #003459 60%, #004d7a 100%)' }}>
      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-20 left-1/4 w-[400px] h-[400px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #0ea5e9, transparent 70%)' }} />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 w-[400px] h-[400px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #38bdf8, transparent 70%)' }} />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Glass card */}
        <div className="rounded-3xl p-10 md:p-14 border" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.1)' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Something That Gets You Noticed
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            If you want to elevate your company's data strategy, don't settle for
            dashboards that go unnoticed. Let's work together to create custom
            solutions that truly stand out.
          </p>
          <Button asChild size="lg" className="font-semibold px-8 text-[#003459] bg-white hover:bg-white/80">
            <Link to="/contact">
              Schedule Your Free Consultation
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
