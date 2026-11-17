import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../../data/navigationData'
import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../context/ThemeContext'
import Logo from './Logo'
import WhatsAppIcon from './WhatsAppIcon'
import { whatsappLink } from '../../data/siteConfig'
import './Footer.css'

export default function Footer() {
  const { t, language, toggleLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="Nile Code Academy">
            <Logo size={40} />
            <span>Nile Code<span className="footer__accent"> Academy</span></span>
          </Link>
          <p className="footer__tagline">{t.footer.tagline}</p>
          <a
            className="footer__whatsapp"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={18} />
            {t.common.contactUs}
          </a>
        </div>

        <div className="footer__col">
          <h4>{t.footer.pages}</h4>
          <ul>
            {NAV_LINKS.map(({ to, key }) => (
              <li key={key}>
                <Link to={to}>{t.nav[key]}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>{t.footer.theme}</h4>
          <ul>
            <li>
              <button type="button" className={theme === 'dark' ? 'is-on' : ''} onClick={theme !== 'dark' ? toggleTheme : undefined}>
                {t.footer.dark}
              </button>
            </li>
            <li>
              <button type="button" className={theme === 'light' ? 'is-on' : ''} onClick={theme !== 'light' ? toggleTheme : undefined}>
                {t.footer.light}
              </button>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>{t.footer.language}</h4>
          <ul>
            <li>
              <button type="button" className={language === 'en' ? 'is-on' : ''} onClick={language !== 'en' ? toggleLanguage : undefined}>
                {t.footer.english}
              </button>
            </li>
            <li>
              <button type="button" className={language === 'ar' ? 'is-on' : ''} onClick={language !== 'ar' ? toggleLanguage : undefined}>
                {t.footer.arabic}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>{t.footer.rights}</span>
      </div>
    </footer>
  )
}
