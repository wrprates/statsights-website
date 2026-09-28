import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const onContact = pathname.replace(/\/+$/, '') === '/contact'

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
        <nav className="hidden md:flex items-center gap-8 self-stretch">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                cn(
                  'relative flex h-full items-center text-sm font-medium transition-colors',
                  isActive ? 'text-white font-semibold' : 'text-white/60 hover:text-white',
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-[#14CDFE]"
                      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="sm"
              className={cn(
                'bg-white text-[#003459] hover:bg-white/90 font-semibold',
                onContact && 'ring-2 ring-[#14CDFE] ring-offset-2 ring-offset-[#002a47]',
              )}
            >
              <NavLink to="/contact">Contact Us</NavLink>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-2 backdrop-blur-md" style={{ backgroundColor: 'rgba(0, 42, 71, 0.85)' }}>
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  'border-l-2 py-1.5 pl-3 text-sm font-medium transition-colors',
                  isActive ? 'border-[#14CDFE] text-white font-semibold' : 'border-transparent text-white/70 hover:text-white',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button asChild size="sm" className="mt-2 bg-white text-[#003459] hover:bg-white/90 font-semibold">
            <NavLink to="/contact" onClick={() => setOpen(false)}>Contact Us</NavLink>
          </Button>
        </div>
      )}
    </header>
  )
}
