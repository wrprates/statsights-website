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
    path: '/dealpath-consorcios',
    title: 'DealPath Consórcios - CRM para vendas de consórcio',
    description:
      'CRM para operações de consórcio: controle cada etapa da jornada do cliente, acompanhe a performance da equipe e aumente a conversão com dados em tempo real.',
    lang: 'pt-BR',
  },
]

export const NOT_FOUND: PageMeta = {
  path: '/404',
  title: 'Statsights: Page not found',
  description: 'The page you are looking for does not exist.',
  lang: 'en',
}

export function getPageMeta(pathname: string): PageMeta {
  const normalized = pathname.replace(/\/+$/, '') || '/'
  return PAGES.find(p => p.path === normalized) ?? NOT_FOUND
}

export function ogLocale(lang: PageMeta['lang']) {
  return lang === 'pt-BR' ? 'pt_BR' : 'en_US'
}

export function canonicalUrl(path: string) {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}
