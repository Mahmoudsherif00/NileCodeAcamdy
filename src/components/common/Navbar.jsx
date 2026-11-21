import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { NAV_LINKS } from '../../data/navigationData'
import { useLanguage } from '../../context/LanguageContext'
import Logo from './Logo'
import './Navbar.css'

/**
 * Sticky glass navigation bar shared by every page.
 * - Active route indicator (animated underline)
 * - Theme + language toggles
 * - Mobile: hamburger → slide-down panel
 */
export default function Navbar() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__inner container-wide">
        <Link to="/" className="navbar__brand" onClick={close} aria-label="Nile Code Academy">
          <Logo size={36} />
          <span className="navbar__brand-text">
            Nile Code
            <em>Academy</em>
          </span>
        </Link>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          {NAV_LINKS.map(({ to, key }) => (
            <NavLink
              key={key}
              to={to}
              end={to === '/'}
              onClick={close}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'is-active' : ''}`
              }
            >
              {t.nav[key]}
            </NavLink>
          ))}
          <div className="navbar__mobile-actions">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </nav>

        <div className="navbar__actions">
          <ThemeToggle />
          <LanguageToggle />
          <button
            type="button"
            className="navbar__burger icon-btn"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t.nav.close : t.nav.menu}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}
