import { type Locale, localeFromPath, localizePath } from './i18n'

export const SITE_URL = 'https://statsights.com'
export const SITE_NAME = 'Statsights'

export interface PageMeta {
  path: string
  title: string
  description: string
  lang: 'en' | 'pt-BR'
}

export const PAGES: PageMeta[] = [
  {
    path: '/',
    title: 'Statsights - Data insights, visualized.',
    description:
      'Data science, machine learning, and automation consulting. We turn your company data into custom applications that go beyond static dashboards.',
    lang: 'en',
  },
  {
    path: '/services',
    title: 'Statsights: Services',
    description:
      'End-to-end data science, machine learning, dashboards, workflow automation, and team training. See how Statsights helps companies put their data to work.',
    lang: 'en',
  },
  {
    path: '/contact',
    title: 'Statsights: Contact',
    description:
      'Book a free consultation with Statsights. Tell us about your data project and get a reply within 24 hours.',
    lang: 'en',
  },
  {
    path: '/pt',
    title: 'Statsights - Insights de dados, visualizados.',
    description:
      'Consultoria em ciência de dados, machine learning e automação. Transformamos os dados da sua empresa em aplicações personalizadas que vão além de dashboards estáticos.',
    lang: 'pt-BR',
  },
  {
    path: '/pt/services',
    title: 'Statsights: Serviços',
    description:
      'Ciência de dados de ponta a ponta, machine learning, dashboards, automação de processos e treinamento de equipes. Veja como a Statsights ajuda empresas a colocar seus dados para trabalhar.',
    lang: 'pt-BR',
  },
  {
    path: '/pt/contact',
    title: 'Statsights: Contato',
    description:
      'Agende uma consultoria gratuita com a Statsights. Conte sobre o seu projeto de dados e receba uma resposta em até 24 horas.',
    lang: 'pt-BR',
  },
  {
    path: '/dealpath-consorcios',
    title: 'DealPath Consórcios - CRM para vendas de consórcio',
    description:
      'CRM para operações de consórcio: controle cada etapa da jornada do cliente, acompanhe a performance da equipe e aumente a conversão com dados em tempo real.',
    lang: 'pt-BR',
  },
]

export const NOT_FOUND: Record<Locale, PageMeta> = {
  en: {
    path: '/404',
    title: 'Statsights: Page not found',
    description: 'The page you are looking for does not exist.',
    lang: 'en',
  },
  pt: {
    path: '/pt/404',
    title: 'Statsights: Página não encontrada',
    description: 'A página que você procura não existe.',
    lang: 'pt-BR',
  },
}

function normalizePath(pathname: string) {
  return pathname.replace(/\/+$/, '') || '/'
}

export function getPageMeta(pathname: string): PageMeta {
  const normalized = normalizePath(pathname)
  return PAGES.find(p => p.path === normalized) ?? NOT_FOUND[localeFromPath(normalized)]
}

// The same page in the given locale, if it exists (DealPath is Portuguese-only, so it has no English version).
export function alternatePath(pathname: string, locale: Locale): string | undefined {
  const target = localizePath(normalizePath(pathname), locale)
  return PAGES.some(p => p.path === target) ? target : undefined
}

// hreflang alternates for pages that exist in both languages; English is the default.
export function hreflangLinks(pathname: string) {
  const en = alternatePath(pathname, 'en')
  const pt = alternatePath(pathname, 'pt')
  if (!en || !pt) return []
  return [
    { hreflang: 'en', href: canonicalUrl(en) },
    { hreflang: 'pt-BR', href: canonicalUrl(pt) },
    { hreflang: 'x-default', href: canonicalUrl(en) },
  ]
}

export function ogLocale(lang: PageMeta['lang']) {
  return lang === 'pt-BR' ? 'pt_BR' : 'en_US'
}

export function canonicalUrl(path: string) {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}
