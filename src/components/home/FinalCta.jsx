import WhatsAppButton from '../common/WhatsAppButton'
import Reveal from '../common/Reveal'
import { useLanguage } from '../../context/LanguageContext'

/**
 * Final call-to-action band before the footer.
 */
export default function FinalCta() {
  const { t } = useLanguage()

  return (
    <section className="section">
      <div className="container">
        <Reveal className="final-cta glass-card">
          <div className="final-cta__glow bg-glow bg-glow--blue" aria-hidden="true" />
          <div className="final-cta__glow final-cta__glow--b bg-glow bg-glow--cyan" aria-hidden="true" />
          <h2 className="final-cta__title">{t.home.ctaTitle}</h2>
          <p className="final-cta__desc">{t.home.ctaDesc}</p>
          <WhatsAppButton className="btn--lg" />
        </Reveal>
      </div>
    </section>
  )
}
