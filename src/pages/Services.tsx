import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, FlaskConical, BarChart3, Workflow, Eye, GraduationCap, Bot } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: FlaskConical,
    color: '#003459',
    bg: '#e8f1f8',
    title: 'End-to-End Data Science',
    summary: 'From raw data to production-ready models.',
    description:
      'We handle the full data science lifecycle: data cleaning, exploratory analysis, feature engineering, model development, and deployment. Whether you need a one-time analysis or an ongoing ML pipeline, we build it to last.',
    bullets: [
      'Exploratory data analysis & reporting',
      'Predictive and classification models',
      'Automated machine learning pipelines',
      'Model validation, monitoring & retraining',
    ],
  },
  {
    icon: BarChart3,
    color: '#1e4d8c',
    bg: '#e8eef8',
    title: 'Custom Dashboards & Reports',
    summary: 'Interactive tools designed for decision-makers.',
    description:
      'We replace static spreadsheets and generic BI dashboards with custom-built, interactive applications that put the right data in front of the right people, in a format they will actually use.',
    bullets: [
      'Shiny apps for real-time data exploration',
      'Automated PDF and HTML reports',
      'Executive dashboards tailored to your KPIs',
      'Scheduled reporting delivered to your inbox',
    ],
  },
  {
    icon: Workflow,
    color: '#0369a1',
    bg: '#e8f4fb',
    title: 'Workflow Integration',
    summary: 'Solutions that fit into how your team already works.',
    description:
      "We don't deliver isolated tools. We integrate solutions directly into your existing workflows, connecting to your databases, APIs, cloud storage, and business systems.",
    bullets: [
      'Integration with existing databases and APIs',
      'Cloud deployment (AWS, GCP, Azure)',
      'Shiny apps embedded in your internal tools',
      'Automated data pipelines and ETL processes',
    ],
  },
  {
    icon: Eye,
    color: '#1e3a8a',
    bg: '#eaeefc',
    title: 'Full Transparency & Code Ownership',
    summary: 'You own everything we build.',
    description:
      'Every line of code we write belongs to you. We share the full codebase, document our work thoroughly, and make sure your team understands what was built and why, so you are never dependent on us to keep things running.',
    bullets: [
      '100% of source code delivered to your team',
      'Thorough documentation and inline comments',
      'Code review and quality standards',
      'No vendor lock-in, full portability',
    ],
  },
  {
    icon: GraduationCap,
    color: '#005c8e',
    bg: '#e8f3fb',
    title: 'Training & Team Enablement',
    summary: 'We teach your team to own the solution.',
    description:
      'Delivery is not the end of our work. We train your internal team to maintain, extend, and build on top of what we create, so your organization becomes more capable over time, not more dependent.',
    bullets: [
      'Hands-on workshops tailored to your stack',
      'R and Python training for data teams',
      'Documentation and knowledge-transfer sessions',
      'Ongoing support and Q&A after delivery',
    ],
  },
  {
    icon: Bot,
    color: '#1d4ed8',
    bg: '#eaf0fd',
    title: 'Machine Learning & Automation',
    summary: 'Predictive power built into your operations.',
    description:
      'We build ML models that go beyond experimentation and actually drive decisions: from churn prediction to demand forecasting to automated classification. Everything is production-ready and maintainable.',
    bullets: [
      'Supervised and unsupervised learning models',
      'Time series forecasting',
      'NLP and text classification',
      'Automated scoring and decision pipelines',
    ],
  },
]

export function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 text-center" style={{ backgroundColor: '#003459' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We Do
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/70 text-lg leading-relaxed"
          >
            We build custom data science solutions that go far beyond dashboards,
            from machine learning pipelines to interactive applications, always
            delivered with full code transparency.
          </motion.p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start rounded-2xl p-10 ${i % 2 !== 0 ? 'lg:flex lg:flex-row-reverse' : ''}`}
              style={{ backgroundColor: service.bg }}
            >
              {/* Text */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/70">
                    <service.icon size={22} style={{ color: service.color }} />
                  </span>
                  <h2 className="text-2xl font-bold" style={{ color: service.color }}>
                    {service.title}
                  </h2>
                </div>
                <p className="text-base font-bold italic text-[#003459] mb-4 mt-1">
                  {service.summary}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Bullets */}
              <div className="bg-white/60 rounded-2xl p-8 space-y-3">
                {service.bullets.map((bullet, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: j * 0.18 }}
                    className="flex gap-3 items-start"
                  >
                    <span
                      className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: service.color }}
                    >
                      ✓
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{bullet}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: '#003459' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-white/70 mb-8">
            Schedule a free consultation and let's talk about what we can build for your team.
          </p>
          <Button asChild size="lg" className="bg-white text-[#003459] hover:bg-white/90 font-semibold px-8">
            <Link to="/contact">
              Schedule a Free Consultation
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
