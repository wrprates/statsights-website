import { motion } from 'framer-motion'
import { FadeIn } from '@/components/FadeIn'

const bullets = [
  'Developing visually stunning, high-performance Shiny apps tailored to your business needs.',
  'Building automated machine learning pipelines to unlock predictive power in your data.',
  'Delivering scalable data visualization & reporting tools that fit seamlessly into your business.',
  'Providing full-code transparency & custom training to empower your internal teams for long-term success.',
]

export function WhyUs() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] opacity-10" style={{ background: 'radial-gradient(circle, #bfdbfe, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <FadeIn direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003459] mb-6">
              Your Data Deserves More Than Just Spreadsheets
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Most data teams struggle with the same problem: delivering analyses that{' '}
              <strong className="text-foreground">don't get the attention they deserve</strong>. Static reports are
              overlooked, and traditional BI tools have limitations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Many data teams know what they need but{' '}
              <strong className="text-foreground">lack the technical expertise</strong> to build, optimize, and
              deploy professional-grade data science solutions. That's where we come in.
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
              At Statsights, we specialize in:
            </p>
            <div className="space-y-5">
              {bullets.map((bullet, i) => (
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
