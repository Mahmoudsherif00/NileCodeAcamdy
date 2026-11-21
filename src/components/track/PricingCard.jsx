import { Check } from 'lucide-react'
import WhatsAppIcon from '../common/WhatsAppIcon'
import Reveal from '../common/Reveal'
import Section from '../layout/Section'
import { useLanguage } from '../../context/LanguageContext'
import { whatsappLink } from '../../data/siteConfig'

/**
 * Premium pricing card (shared by both tracks).
 * Prices are shared on request: "Get Started" opens WhatsApp with a
 * track-specific enrollment message — no dead buttons.
 */
export default function PricingCard({
  eyebrow, title, planName, note, perks = [],
  illustration, illustrationAlt, highlight, enrollMessage,
}) {
  const { t } = useLanguage()

  return (
    <Section eyebrow={eyebrow} title={title} className="pricing-section">
      <div className="pricing__wrap">
        <Reveal className="pricing-card glass-card">
          <div className="pricing-card__glow bg-glow bg-glow--blue" aria-hidden="true" />

          {highlight && (
            <span className="pricing-card__flag chip chip--accent">{highlight}</span>
          )}

          <div className="pricing-card__illustration" aria-hidden="true">
            <img src={illustration} alt={illustrationAlt || ''} className="anim-float" draggable="false" />
          </div>

          <div className="pricing-card__body">
            <h3 className="pricing-card__plan">{planName}</h3>

            <p className="pricing-card__hint">
              <WhatsAppIcon size={18} />
              {t.common.pricingHint}
            </p>

            <ul className="pricing-card__perks">
              <li><Check size={16} />{note}</li>
            </ul>

            <a
              className="btn btn--primary btn--lg pricing-card__cta"
              href={whatsappLink(enrollMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={19} />
              {t.common.getStarted}
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
