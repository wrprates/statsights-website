import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { WhyUs } from '@/components/sections/WhyUs'
import { CTA } from '@/components/sections/CTA'

export function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <CTA />
    </main>
  )
}
