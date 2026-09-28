import { motion } from 'framer-motion'
import { FadeIn } from '@/components/FadeIn'
import { useLocale } from '@/i18n'

// Paragraphs are [before, emphasized, after] so the emphasis survives translation.
const copy = {
  heading: { en: 'Your Data Deserves More Than Just Spreadsheets', pt: 'Seus Dados Merecem Mais do Que Planilhas' },
  problem: {
    en: [
      'Most data teams struggle with the same problem: delivering analyses that ',
      "don't get the attention they deserve",
      '. Static reports are overlooked, and traditional BI tools have limitations.',
    ],
    pt: [
      'A maioria das equipes de dados enfrenta o mesmo problema: entregar análises que ',
      'não recebem a atenção que merecem',
      '. Relatórios estáticos são ignorados, e as ferramentas tradicionais de BI têm limitações.',
    ],
  },
  gap: {
    en: [
      'Many data teams know what they need but ',
      'lack the technical expertise',
      " to build, optimize, and deploy professional-grade data science solutions. That's where we come in.",
    ],
    pt: [
      'Muitas equipes sabem do que precisam, mas ',
      'não têm a expertise técnica',
      ' para construir, otimizar e colocar em produção soluções profissionais de ciência de dados. É aí que nós entramos.',
    ],
  },
  bulletsLabel: { en: 'At Statsights, we specialize in:', pt: 'Na Statsights, somos especialistas em:' },
  bullets: {
    en: [
      'Developing visually stunning, high-performance Shiny apps tailored to your business needs.',
      'Building automated machine learning pipelines to unlock predictive power in your data.',
      'Delivering scalable data visualization & reporting tools that fit seamlessly into your business.',
      'Providing full-code transparency & custom training to empower your internal teams for long-term success.',
    ],
    pt: [
      'Desenvolver apps Shiny visualmente impressionantes e de alto desempenho, sob medida para o seu negócio.',
      'Construir pipelines automatizados de machine learning para liberar o poder preditivo dos seus dados.',
      'Entregar ferramentas escaláveis de visualização de dados e relatórios que se integram perfeitamente ao seu negócio.',
      'Oferecer transparência total do código e treinamento personalizado para capacitar suas equipes internas no longo prazo.',
    ],
  },
}

export function WhyUs() {
  const locale = useLocale()
  const [problemBefore, problemEmphasis, problemAfter] = copy.problem[locale]
  const [gapBefore, gapEmphasis, gapAfter] = copy.gap[locale]

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] opacity-10" style={{ background: 'radial-gradient(circle, #bfdbfe, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <FadeIn direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003459] mb-6">
              {copy.heading[locale]}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {problemBefore}
              <strong className="text-foreground">{problemEmphasis}</strong>
              {problemAfter}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {gapBefore}
              <strong className="text-foreground">{gapEmphasis}</strong>
              {gapAfter}
            </p>
          </FadeIn>

          {/* Glass card with bullets */}
          <FadeIn direction="right">
          <div
            className="rounded-2xl p-8 border"
            style={{
              background: 'linear-gradient(135deg, rgba(0,52,89,0.04), rgba(0,77,122,0.08))',
              backdropFilter: 'blur(8px)',
              borderColor: 'rgba(0,52,89,0.1)',
            }}
          >
            <p className="text-xs font-semibold text-[#003459] uppercase tracking-widest mb-6">
              {copy.bulletsLabel[locale]}
            </p>
            <div className="space-y-5">
              {copy.bullets[locale].map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.18 }}
                  className="flex gap-3"
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, #003459, #0369a1)' }}>
                    ✓
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{bullet}</p>
                </motion.div>
              ))}
            </div>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
