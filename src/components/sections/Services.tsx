import { FlaskConical, BarChart3, Workflow, Eye, GraduationCap, Bot } from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeIn } from '@/components/FadeIn'

const services = [
  {
    icon: FlaskConical,
    color: '#003459',
    bg: '#e8f1f8',
    title: 'End-to-end Data Science',
    description: 'From data analysis to machine learning models, we build solutions tailored to your needs.',
  },
  {
    icon: BarChart3,
    color: '#1e4d8c',
    bg: '#e8eef8',
    title: 'Custom Dashboards & Reports',
    description: 'Automated, interactive, and designed for action.',
  },
  {
    icon: Workflow,
    color: '#0369a1',
    bg: '#e8f4fb',
    title: 'Seamless Workflow Integration',
    description: 'Our solutions connect to your databases, APIs, and business systems with no disruption.',
  },
  {
    icon: Eye,
    color: '#1e3a8a',
    bg: '#eaeefc',
    title: 'Full Transparency & Code Ownership',
    description: 'The entire codebase is 100% shared with your team, ensuring maintainability and flexibility.',
  },
  {
    icon: GraduationCap,
    color: '#005c8e',
    bg: '#e8f3fb',
    title: 'Training & Team Enablement',
    description: "We don't just deliver. We train your team to maintain and extend the solution independently.",
  },
  {
    icon: Bot,
    color: '#1d4ed8',
    bg: '#eaf0fd',
    title: 'Machine Learning & Automation',
    description: 'From churn prediction to demand forecasting: production-ready ML built into your operations.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-28 bg-[#f5f8fc]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003459] mb-4">
            How We Can Help Your Company
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            We build solutions that go far beyond spreadsheets and static reports.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(0,52,89,0.12)' }}
              className="group flex flex-col gap-4 rounded-2xl bg-white border border-border/50 p-6 shadow-sm"
            >
              {/* Icon badge */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
                style={{ backgroundColor: service.bg }}
              >
                <service.icon size={32} style={{ color: service.color }} />
              </div>

              {/* Text */}
              <div className="text-center">
                <h3 className="text-sm font-bold mb-1.5" style={{ color: service.color }}>{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
