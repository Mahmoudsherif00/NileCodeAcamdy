import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import WhatsAppButton from '../common/WhatsAppButton'

/**
 * Global page shell: navbar, routed content, floating WhatsApp CTA,
 * footer. Scrolls to top on every route change.
 */
export default function PageLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <WhatsAppButton variant="float" />
      <Footer />
    </>
  )
}
