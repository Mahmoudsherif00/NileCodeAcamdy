import WhatsAppIcon from './WhatsAppIcon'
import { whatsappLink, SITE_CONFIG } from '../../data/siteConfig'
import { useLanguage } from '../../context/LanguageContext'

/**
 * WhatsApp contact entry points.
 * variant "float": fixed bottom-corner bubble (site-wide).
 * variant "inline": text CTA used inside sections and cards.
 */
export default function WhatsAppButton({ variant = 'inline', className = '' }) {
  const { t } = useLanguage()
  const href = whatsappLink()

  if (variant === 'float') {
    return (
      <a
        className={`whatsapp-float ${className}`.trim()}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.common.contactWhatsApp}
        title={t.common.contactWhatsApp}
      >
        <WhatsAppIcon />
      </a>
    )
  }

  return (
    <a
      className={`btn btn--whatsapp ${className}`.trim()}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-number={SITE_CONFIG.whatsappNumber}
    >
      <WhatsAppIcon size={20} />
      {t.common.contactWhatsApp}
    </a>
  )
}
