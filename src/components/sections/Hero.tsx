import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative overflow-hidden py-28 md:py-40" style={{ background: 'linear-gradient(135deg, #001f33 0%, #003459 50%, #004d7a 100%)' }}>
      {/* Animated glow orbs */}
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
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #7dd3fc, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <motion.div style={{ y, opacity }} className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Glass pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center rounded-full px-4 py-1.5 text-sm text-white/80 mb-8 border border-white/10"
          style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}
        >
          Data Science · Machine Learning · Automation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
        >
          Turn Your Data into<br className="hidden md:block" />
          <span style={{ background: 'linear-gradient(90deg, #14CDFE, #1d4ed8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Impactful Applications.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Your company has data — but are you truly maximizing its potential?
          Go beyond static dashboards with custom Data Science, Machine Learning,
          and automation solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="font-semibold px-8 text-[#003459] bg-white hover:bg-white/80">
            <Link to="/contact">
              Get Started — Free Consultation
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="text-white/70 hover:text-white border border-white/10 hover:bg-white/10">
            <Link to="/services">See How We Help</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
