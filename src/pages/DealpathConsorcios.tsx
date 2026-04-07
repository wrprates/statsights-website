import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, ArrowRight, Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HOTMART_URL = 'https://pay.hotmart.com/Q103816584I'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

const features = [
  {
    icon: '🎯',
    title: 'Funil Visual de Oportunidades',
    desc: 'Acompanhe cada negociação desde o primeiro contato (Lead) até o fechamento, movendo cards entre etapas da jornada. Nunca mais perca oportunidades no meio do caminho.',
  },
  {
    icon: '👥',
    title: 'CRM Completo de Clientes',
    desc: 'Cadastro detalhado com CPF, contatos, histórico de propostas e timeline de todas as interações. Tenha todas as informações do cliente em um só lugar.',
  },
  {
    icon: '📋',
    title: 'Gestão de Propostas de Consórcio',
    desc: 'Controle créditos contemplados e em andamento com valores, status e datas de contemplação. Organize todas as propostas de forma profissional.',
  },
  {
    icon: '📊',
    title: 'Dashboard Analítico em Tempo Real',
    desc: 'Métricas de conversão, performance por vendedor, oportunidades por etapa, valor total do pipeline. Tome decisões baseadas em dados reais.',
  },
  {
    icon: '👨‍💼',
    title: 'Gestão de Equipe de Vendas',
    desc: 'Cadastro de vendedores, controle de metas individuais, relatórios de performance. Gerencie sua equipe com eficiência e transparência.',
  },
  {
    icon: '🔐',
    title: 'Controle Multi-usuário',
    desc: 'Cada vendedor acessa suas oportunidades, gestores veem visão consolidada com permissões personalizadas. Segurança e autonomia para sua equipe.',
  },
  {
    icon: '📝',
    title: 'Histórico Completo de Interações',
    desc: 'Registre ligações, reuniões, propostas enviadas. Nunca perca informação importante sobre o relacionamento com seus clientes.',
  },
  {
    icon: '🔍',
    title: 'Filtros e Buscas Avançadas',
    desc: 'Encontre rapidamente qualquer cliente, oportunidade ou proposta por múltiplos critérios. Agilidade no dia a dia de vendas.',
  },
]

const pains = [
  'Oportunidades perdidas no meio do funil — Clientes somem entre o contato inicial e o fechamento por falta de follow-up organizado',
  'Planilhas desorganizadas e descentralizadas — Cada vendedor tem seu controle, impossível ter visão consolidada da operação',
  'Falta de visibilidade sobre performance — Não sabe taxa de conversão real, tempo médio por etapa, vendedores com melhor desempenho',
  'Dificuldade em gerenciar equipe de vendas — Sem controle de metas, comissionamento e atividades dos vendedores',
  'Perda de histórico com clientes — Não consegue resgatar interações passadas quando cliente volta a fazer contato',
]

const included = [
  'Usuários ilimitados — Toda sua equipe pode usar',
  'Oportunidades ilimitadas — Sem limite de negociações',
  'Clientes ilimitados — Cresça sem preocupações',
  'Dashboard analítico completo — Todos os gráficos e métricas',
  'Gestão de equipe de vendas — Controle total da operação',
]

const extras = [
  'Suporte técnico via email — Resposta em até 24h úteis',
  'Atualizações automáticas — Sempre com novos recursos',
  'Acesso de qualquer dispositivo — Desktop, tablet ou celular',
  'Dados seguros — Backup automático e criptografia',
  'Sem fidelidade — Cancele quando quiser',
]

const faqs = [
  { q: 'Preciso instalar algo?', a: 'Não, é 100% online. Acesse direto do navegador de qualquer dispositivo.' },
  { q: 'Quantos usuários posso ter?', a: 'Ilimitados no plano. Cadastre toda sua equipe sem custo adicional.' },
  { q: 'Funciona no celular?', a: 'Sim, totalmente responsivo. Funciona em qualquer dispositivo.' },
  { q: 'Preciso de conhecimento técnico?', a: 'Não, interface intuitiva e simples. Qualquer pessoa consegue usar.' },
  { q: 'Meus dados estão seguros?', a: 'Sim, com backup automático, criptografia e segurança de dados.' },
  { q: 'Como funciona o suporte?', a: 'Via email com resposta em até 24h úteis, de segunda a sexta, 9h às 18h.' },
  { q: 'Posso cancelar quando quiser?', a: 'Sim, sem multa ou fidelidade. Cancele a qualquer momento.' },
  { q: 'Tem garantia?', a: 'Sim, garantia incondicional de 7 dias. Se não gostar, devolvemos seu dinheiro.' },
]

function FAQSection() {
  const allIndexes = faqs.map((_, i) => i)
  const [openItems, setOpenItems] = useState<Set<number>>(new Set(allIndexes))

  const allOpen = openItems.size === faqs.length

  function toggleItem(i: number) {
    setOpenItems(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  function toggleAll() {
    setOpenItems(allOpen ? new Set() : new Set(allIndexes))
  }

  return (
    <section className="py-20 px-6" style={{ background: '#001f33' }}>
      <div className="max-w-2xl mx-auto">
        <motion.h2 {...fadeUp()} className="text-2xl md:text-3xl font-bold text-center mb-4">
          Perguntas Frequentes
        </motion.h2>
        <motion.div {...fadeUp(0.05)} className="flex justify-center mb-8">
          <button
            onClick={toggleAll}
            className="text-sm text-white/50 hover:text-white/80 transition-colors flex items-center gap-1.5"
          >
            {allOpen ? <Minus size={13} /> : <Plus size={13} />}
            {allOpen ? 'Recolher todos' : 'Expandir todos'}
          </button>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} {...fadeUp(i * 0.05)}>
              <button
                onClick={() => toggleItem(i)}
                className="w-full flex items-center justify-between gap-4 rounded-xl px-5 py-4 text-left border border-white/10 hover:border-white/20 transition-colors"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <span className="font-semibold text-white text-sm">{faq.q}</span>
                {openItems.has(i) ? (
                  <Minus size={16} className="text-white/50 shrink-0" />
                ) : (
                  <Plus size={16} className="text-white/50 shrink-0" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {openItems.has(i) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pt-3 pb-4 text-sm text-white/60 leading-relaxed border-x border-b border-white/10 rounded-b-xl -mt-1" style={{ background: 'rgba(255,255,255,0.02)' }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTAButton({ label = '🚀 Ativar Meu DealPath Agora' }: { label?: string }) {
  return (
    <Button
      asChild
      size="lg"
      className="font-semibold px-8 text-[#003459] bg-white hover:bg-white/80 text-base"
    >
      <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer">
        {label}
        <ArrowRight size={16} className="ml-2" />
      </a>
    </Button>
  )
}

export function DealpathConsorcios() {
  return (
    <main className="text-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-28 md:py-40 text-center"
        style={{ background: 'linear-gradient(135deg, #001f33 0%, #003459 50%, #004d7a 100%)' }}
      >
        {/* Glow orbs */}
        <motion.div
          className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #0ea5e9, transparent 70%)' }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #38bdf8, transparent 70%)' }}
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center rounded-full px-4 py-1.5 text-sm text-white/80 mb-8 border border-white/10"
            style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}
          >
            CRM · Consórcios · Gestão de Vendas
          </motion.div>

          <motion.h1
            {...fadeUp(0.15)}
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
          >
            Transforme Oportunidades<br className="hidden md:block" />
            <span style={{ background: 'linear-gradient(90deg, #14CDFE, #1d4ed8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> em Vendas</span>
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Profissionalize sua operação de vendas mapeando cada etapa da jornada do cliente,
            eliminando perdas de oportunidades e aumentando conversão com dados em tempo real.
          </motion.p>

          <motion.div {...fadeUp(0.45)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton />
            <p className="text-white/40 text-sm">✅ Garantia incondicional de 7 dias</p>
          </motion.div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 px-6" style={{ background: '#0a1628' }}>
        <div className="max-w-3xl mx-auto">
          <motion.h2 {...fadeUp()} className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Pare de Perder Vendas Por Falta de Organização
          </motion.h2>
          <p className="text-white/60 text-center mb-10 -mt-6">
            Se você é corretor ou tem um escritório de vendas de consórcios, provavelmente já enfrentou estes desafios:
          </p>
          <div className="space-y-4">
            {pains.map((pain, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className="flex items-start gap-3 rounded-xl p-4 border border-white/5"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <XCircle size={20} className="text-red-400 mt-0.5 shrink-0" />
                <p className="text-white/70 text-sm leading-relaxed">{pain}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution intro */}
      <section className="py-16 px-6 text-center" style={{ background: '#001f33' }}>
        <div className="max-w-2xl mx-auto">
          <motion.h2 {...fadeUp()} className="text-2xl md:text-3xl font-bold mb-4">
            A Solução: <span style={{ background: 'linear-gradient(90deg, #14CDFE, #1d4ed8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>DealPath</span>
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-white/60 leading-relaxed">
            O <strong className="text-white">DealPath</strong> é a plataforma completa para corretores e escritórios de vendas de consórcios
            profissionalizarem sua operação. Um CRM desenvolvido especificamente para o mercado de consórcios,
            onde você controla cada etapa da jornada do cliente — do primeiro contato até o fechamento.
          </motion.p>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 px-6" style={{ background: '#0d1f35' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...fadeUp()} className="text-2xl md:text-3xl font-bold text-center mb-12">
            Tudo Que Você Precisa Para Profissionalizar Suas Vendas
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.06)}
                className="rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-16 px-6" style={{ background: '#001f33' }}>
        <div className="max-w-3xl mx-auto">
          <motion.h2 {...fadeUp()} className="text-2xl font-bold text-center mb-8">
            Sistema Em Produção e Confiável
          </motion.h2>
          <div className="space-y-3">
            {[
              'Sistema em produção desde 2025 — Testado e validado no mercado com centenas de milhões em cartas de consórcios sendo geridos.',
              'Desenvolvido por especialistas em gestão comercial e vendas',
              'Baseado em práticas reais de escritórios de alto desempenho',
              'Tecnologia robusta utilizada por empresas de dados e analytics',
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-green-400 mt-0.5 shrink-0" />
                <p className="text-white/70 text-sm">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6" style={{ background: '#0a1628' }}>
        <div className="max-w-4xl mx-auto">
          <motion.h2 {...fadeUp()} className="text-2xl md:text-3xl font-bold text-center mb-4">
            Plano Profissional
          </motion.h2>
          <motion.div {...fadeUp(0.1)} className="text-center mb-10">
            <span className="text-5xl font-bold" style={{ color: '#14CDFE' }}>R$ 247</span>
            <span className="text-xl text-white/60">/mês</span>
            <p className="text-green-400 font-semibold mt-2">✅ Garantia incondicional de 7 dias</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <motion.div
              {...fadeUp(0.15)}
              className="rounded-2xl p-6 border border-white/10"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              <h3 className="font-bold text-lg mb-4">✨ O que está incluso:</h3>
              <ul className="space-y-2">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                    <CheckCircle size={16} className="text-green-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              {...fadeUp(0.2)}
              className="rounded-2xl p-6 border border-white/10"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              <h3 className="font-bold text-lg mb-4">🎁 Benefícios extras:</h3>
              <ul className="space-y-2">
                {extras.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                    <CheckCircle size={16} className="text-green-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.25)} className="text-center">
            <CTAButton />
            <p className="mt-3 text-white/40 text-sm">💳 Pagamento seguro via Hotmart &nbsp;|&nbsp; ⚡ Acesso imediato após pagamento</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA */}
      <section
        className="relative py-28 overflow-hidden text-center px-6"
        style={{ background: 'linear-gradient(135deg, #001f33 0%, #003459 60%, #004d7a 100%)' }}
      >
        <div className="pointer-events-none absolute -top-20 left-1/4 w-[400px] h-[400px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #0ea5e9, transparent 70%)' }} />
        <div className="pointer-events-none absolute -bottom-20 right-1/4 w-[400px] h-[400px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #38bdf8, transparent 70%)' }} />
        <div className="relative max-w-2xl mx-auto">
          <div
            className="rounded-3xl p-10 md:p-14 border"
            style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <motion.h2 {...fadeUp()} className="text-3xl md:text-4xl font-bold mb-4">
              🎯 Pare de Perder Oportunidades
            </motion.h2>
            <motion.p {...fadeUp(0.1)} className="text-white/60 text-lg mb-10 leading-relaxed">
              Profissionalize sua operação de vendas hoje mesmo e veja seus resultados decolarem.
            </motion.p>
            <motion.div {...fadeUp(0.2)}>
              <CTAButton label="✨ Começar Agora" />
            </motion.div>
            <motion.p {...fadeUp(0.25)} className="mt-5 text-white/40 text-sm leading-relaxed">
              ⚡ Preço inicial exclusivo para primeiros clientes — Esta condição não se repetirá<br />
              💰 Garantia incondicional de 7 dias — Satisfação garantida ou seu dinheiro de volta
            </motion.p>
          </div>
        </div>
      </section>
    </main>
  )
}
