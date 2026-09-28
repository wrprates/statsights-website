import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, FlaskConical, BarChart3, Workflow, Eye, GraduationCap, Bot } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLocale, useLocalizedPath } from '@/i18n'

const copy = {
  heading: { en: 'What We Do', pt: 'O Que Fazemos' },
  intro: {
    en: 'We build custom data science solutions that go far beyond dashboards, from machine learning pipelines to interactive applications, always delivered with full code transparency.',
    pt: 'Criamos soluções personalizadas de ciência de dados que vão muito além de dashboards, de pipelines de machine learning a aplicações interativas, sempre com total transparência do código.',
  },
  ctaHeading: { en: 'Ready to get started?', pt: 'Pronto para começar?' },
  ctaBody: {
    en: "Schedule a free consultation and let's talk about what we can build for your team.",
    pt: 'Agende uma consultoria gratuita e vamos conversar sobre o que podemos construir para a sua equipe.',
  },
  cta: { en: 'Schedule a Free Consultation', pt: 'Agende uma Consultoria Gratuita' },
}

const services = [
  {
    icon: FlaskConical,
    color: '#003459',
    bg: '#e8f1f8',
    title: { en: 'End-to-End Data Science', pt: 'Ciência de Dados de Ponta a Ponta' },
    summary: { en: 'From raw data to production-ready models.', pt: 'Dos dados brutos a modelos prontos para produção.' },
    description: {
      en: 'We handle the full data science lifecycle: data cleaning, exploratory analysis, feature engineering, model development, and deployment. Whether you need a one-time analysis or an ongoing ML pipeline, we build it to last.',
      pt: 'Cuidamos de todo o ciclo de ciência de dados: limpeza, análise exploratória, engenharia de features, desenvolvimento de modelos e deploy. Seja uma análise pontual ou um pipeline de ML contínuo, construímos para durar.',
    },
    bullets: {
      en: [
        'Exploratory data analysis & reporting',
        'Predictive and classification models',
        'Automated machine learning pipelines',
        'Model validation, monitoring & retraining',
      ],
      pt: [
        'Análise exploratória de dados e relatórios',
        'Modelos preditivos e de classificação',
        'Pipelines automatizados de machine learning',
        'Validação, monitoramento e retreinamento de modelos',
      ],
    },
  },
  {
    icon: BarChart3,
    color: '#1e4d8c',
    bg: '#e8eef8',
    title: { en: 'Custom Dashboards & Reports', pt: 'Dashboards e Relatórios Personalizados' },
    summary: { en: 'Interactive tools designed for decision-makers.', pt: 'Ferramentas interativas pensadas para quem toma decisões.' },
    description: {
      en: 'We replace static spreadsheets and generic BI dashboards with custom-built, interactive applications that put the right data in front of the right people, in a format they will actually use.',
      pt: 'Substituímos planilhas estáticas e dashboards genéricos de BI por aplicações interativas feitas sob medida, que colocam os dados certos na frente das pessoas certas, em um formato que elas realmente vão usar.',
    },
    bullets: {
      en: [
        'Shiny apps for real-time data exploration',
        'Automated PDF and HTML reports',
        'Executive dashboards tailored to your KPIs',
        'Scheduled reporting delivered to your inbox',
      ],
      pt: [
        'Apps Shiny para exploração de dados em tempo real',
        'Relatórios automatizados em PDF e HTML',
        'Dashboards executivos alinhados aos seus KPIs',
        'Relatórios agendados entregues no seu e-mail',
      ],
    },
  },
  {
    icon: Workflow,
    color: '#0369a1',
    bg: '#e8f4fb',
    title: { en: 'Workflow Integration', pt: 'Integração aos Processos' },
    summary: { en: 'Solutions that fit into how your team already works.', pt: 'Soluções que se encaixam na forma como a sua equipe já trabalha.' },
    description: {
      en: "We don't deliver isolated tools. We integrate solutions directly into your existing workflows, connecting to your databases, APIs, cloud storage, and business systems.",
      pt: 'Não entregamos ferramentas isoladas. Integramos as soluções diretamente aos seus fluxos de trabalho, conectando-as aos seus bancos de dados, APIs, armazenamento em nuvem e sistemas de negócio.',
    },
    bullets: {
      en: [
        'Integration with existing databases and APIs',
        'Cloud deployment (AWS, GCP, Azure)',
        'Shiny apps embedded in your internal tools',
        'Automated data pipelines and ETL processes',
      ],
      pt: [
        'Integração com bancos de dados e APIs existentes',
        'Deploy em nuvem (AWS, GCP, Azure)',
        'Apps Shiny incorporados às suas ferramentas internas',
        'Pipelines de dados automatizados e processos de ETL',
      ],
    },
  },
  {
    icon: Eye,
    color: '#1e3a8a',
    bg: '#eaeefc',
    title: { en: 'Full Transparency & Code Ownership', pt: 'Transparência Total e Propriedade do Código' },
    summary: { en: 'You own everything we build.', pt: 'Tudo o que construímos é seu.' },
    description: {
      en: 'Every line of code we write belongs to you. We share the full codebase, document our work thoroughly, and make sure your team understands what was built and why, so you are never dependent on us to keep things running.',
      pt: 'Cada linha de código que escrevemos pertence a você. Compartilhamos todo o código, documentamos nosso trabalho com cuidado e garantimos que a sua equipe entenda o que foi construído e por quê, para que você nunca dependa de nós para manter tudo funcionando.',
    },
    bullets: {
      en: [
        '100% of source code delivered to your team',
        'Thorough documentation and inline comments',
        'Code review and quality standards',
        'No vendor lock-in, full portability',
      ],
      pt: [
        '100% do código-fonte entregue à sua equipe',
        'Documentação completa e comentários no código',
        'Revisão de código e padrões de qualidade',
        'Sem dependência de fornecedor, portabilidade total',
      ],
    },
  },
  {
    icon: GraduationCap,
    color: '#005c8e',
    bg: '#e8f3fb',
    title: { en: 'Training & Team Enablement', pt: 'Treinamento e Capacitação da Equipe' },
    summary: { en: 'We teach your team to own the solution.', pt: 'Ensinamos a sua equipe a dominar a solução.' },
    description: {
      en: 'Delivery is not the end of our work. We train your internal team to maintain, extend, and build on top of what we create, so your organization becomes more capable over time, not more dependent.',
      pt: 'A entrega não é o fim do nosso trabalho. Treinamos a sua equipe interna para manter, expandir e evoluir o que criamos, para que a sua organização se torne mais capaz com o tempo, e não mais dependente.',
    },
    bullets: {
      en: [
        'Hands-on workshops tailored to your stack',
        'R and Python training for data teams',
        'Documentation and knowledge-transfer sessions',
        'Ongoing support and Q&A after delivery',
      ],
      pt: [
        'Workshops práticos adaptados à sua stack',
        'Treinamento em R e Python para equipes de dados',
        'Documentação e sessões de transferência de conhecimento',
        'Suporte contínuo e tira-dúvidas após a entrega',
      ],
    },
  },
  {
    icon: Bot,
    color: '#1d4ed8',
    bg: '#eaf0fd',
    title: { en: 'Machine Learning & Automation', pt: 'Machine Learning e Automação' },
    summary: { en: 'Predictive power built into your operations.', pt: 'Poder preditivo integrado às suas operações.' },
    description: {
      en: 'We build ML models that go beyond experimentation and actually drive decisions: from churn prediction to demand forecasting to automated classification. Everything is production-ready and maintainable.',
      pt: 'Construímos modelos de ML que vão além da experimentação e realmente orientam decisões: da previsão de churn à previsão de demanda e à classificação automatizada. Tudo pronto para produção e fácil de manter.',
    },
    bullets: {
      en: [
        'Supervised and unsupervised learning models',
        'Time series forecasting',
        'NLP and text classification',
        'Automated scoring and decision pipelines',
      ],
      pt: [
        'Modelos de aprendizado supervisionado e não supervisionado',
        'Previsão de séries temporais',
        'NLP e classificação de textos',
        'Pipelines automatizados de scoring e decisão',
      ],
    },
  },
]

export function Services() {
  const locale = useLocale()
  const to = useLocalizedPath()

  return (
    <main>
      {/* Hero */}
      <section className="py-20 text-center" style={{ backgroundColor: '#003459' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {copy.heading[locale]}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/70 text-lg leading-relaxed"
          >
            {copy.intro[locale]}
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
                    {service.title[locale]}
                  </h2>
                </div>
                <p className="text-base font-bold italic text-[#003459] mb-4 mt-1">
                  {service.summary[locale]}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description[locale]}
                </p>
              </div>

              {/* Bullets */}
              <div className="bg-white/60 rounded-2xl p-8 space-y-3">
                {service.bullets[locale].map((bullet, j) => (
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
            {copy.ctaHeading[locale]}
          </h2>
          <p className="text-white/70 mb-8">
            {copy.ctaBody[locale]}
          </p>
          <Button asChild size="lg" className="bg-white text-[#003459] hover:bg-white/90 font-semibold px-8">
            <Link to={to('/contact')}>
              {copy.cta[locale]}
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
