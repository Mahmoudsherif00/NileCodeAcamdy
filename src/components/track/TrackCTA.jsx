import WhatsAppButton from '../common/WhatsAppButton'
import Reveal from '../common/Reveal'
import { useLanguage } from '../../context/LanguageContext'

/**
 * Track final CTA band with side illustration (shared).
 */
export default function TrackCTA({ title, desc, illustration, illustrationAlt, flip = false }) {
  const { t } = useLanguage()

  return (
    <section className="section">
      <div className="container">
        <Reveal className={`track-cta glass-card ${flip ? 'track-cta--flip' : ''}`}>
          <div className="track-cta__glow bg-glow bg-glow--blue" aria-hidden="true" />
          <div className="track-cta__visual" aria-hidden="true">
            <img src={illustration} alt={illustrationAlt || ''} className="anim-float" draggable="false" />
          </div>
          <div className="track-cta__copy">
            <h2 className="track-cta__title">{title}</h2>
            <p className="track-cta__desc">{desc}</p>
            <WhatsAppButton className="btn--lg" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
