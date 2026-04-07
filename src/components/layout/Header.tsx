import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-md" style={{ backgroundColor: 'rgba(0, 42, 71, 0.75)' }}>
      <div className="max-w-6xl mx-auto px-6 flex h-16 items-center justify-between">
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link to="/" className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}logo-dark.png`} alt="Statsights" className="h-8 w-auto" />
            <span className="hidden sm:block text-sm text-white/60">Data insights, visualized.</span>
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${pathname === '/' ? 'text-white' : 'text-white/60 hover:text-white'}`}
            >
              Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors ${pathname === '/services' ? 'text-white' : 'text-white/60 hover:text-white'}`}
            >
              Services
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="sm" className="bg-white text-[#003459] hover:bg-white/90 font-semibold">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4 backdrop-blur-md" style={{ backgroundColor: 'rgba(0, 42, 71, 0.85)' }}>
          <Link to="/" className="text-sm font-medium text-white/80" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/services" className="text-sm font-medium text-white/80" onClick={() => setOpen(false)}>Services</Link>
          <Button asChild size="sm" className="bg-white text-[#003459] hover:bg-white/90 font-semibold">
            <Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
          </Button>
        </div>
      )}
    </header>
  )
}
