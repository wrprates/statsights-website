import { Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'
import { RouteMeta } from '@/components/RouteMeta'
import { Home } from '@/pages/Home'
import { Contact } from '@/pages/Contact'
import { Services } from '@/pages/Services'
import { DealpathConsorcios } from '@/pages/DealpathConsorcios'
import { NotFound } from '@/pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pt" element={<Home />} />
      <Route path="/pt/services" element={<Services />} />
      <Route path="/pt/contact" element={<Contact />} />
      <Route path="/dealpath-consorcios" element={<DealpathConsorcios />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

// Rendered inside BrowserRouter (main.tsx) in the browser and StaticRouter (entry-server.tsx) at build time.
function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col">
        <ScrollToTop />
        <RouteMeta />
        <Header />
        <div className="flex-1">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
