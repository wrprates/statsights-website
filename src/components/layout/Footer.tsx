import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-[#f2f2f2]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={`${import.meta.env.BASE_URL}logo-light.png`} alt="Statsights" className="h-7 w-auto" />
        <p className="text-sm text-muted-foreground text-center">
          © 2026 Statsights. All rights reserved.
        </p>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link>
        </nav>
      </div>
    </footer>
  )
}
