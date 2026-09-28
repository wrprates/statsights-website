import { useEffect } from 'react'
import { useLocale } from '@/i18n'

const copy = {
  eyebrow: { en: "Let's talk", pt: 'Vamos conversar' },
  heading: { en: 'Start the conversation', pt: 'Comece a conversa' },
  intro: {
    en: 'Tell us about your project and we will get back to you within 24 hours. No commitment, just a friendly chat.',
    pt: 'Conte sobre o seu projeto e retornaremos em até 24 horas. Sem compromisso, só uma conversa amigável.',
  },
  trust: {
    en: ['Free consultation', 'Reply within 24h', 'No strings attached'],
    pt: ['Consultoria gratuita', 'Resposta em até 24h', 'Sem compromisso'],
  },
  formStep: { en: 'Tell us about your project', pt: 'Conte sobre o seu projeto' },
  formTitle: { en: 'Contact form', pt: 'Formulário de contato' },
  loading: { en: 'Loading…', pt: 'Carregando…' },
  scheduleStep: { en: 'Pick a time that works for you', pt: 'Escolha o melhor horário para você' },
}

export function Contact() {
  const locale = useLocale()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold tracking-widest text-[#0369a1] uppercase mb-3">{copy.eyebrow[locale]}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#003459] mb-4">
          {copy.heading[locale]}
        </h1>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed">
          {copy.intro[locale]}
        </p>

        {/* Trust signals */}
        <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
          {copy.trust[locale].map(signal => (
            <span key={signal} className="flex items-center gap-1.5">✓ {signal}</span>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-7 h-7 rounded-full text-white text-xs font-bold" style={{ backgroundColor: '#003459' }}>1</span>
            <h2 className="text-lg font-semibold text-[#003459]">{copy.formStep[locale]}</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border/60">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdYUq5V3rG2lofbfpIRXYGad-_0gCAB3m__G9h7MCuJG1EG5A/viewform?embedded=true"
              width="100%"
              height="820"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title={copy.formTitle[locale]}
            >
              {copy.loading[locale]}
            </iframe>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-7 h-7 rounded-full text-white text-xs font-bold" style={{ backgroundColor: '#003459' }}>2</span>
            <h2 className="text-lg font-semibold text-[#003459]">{copy.scheduleStep[locale]}</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border/60">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/tiago-statsights/30min"
              style={{ minWidth: '320px', height: '840px' }}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
