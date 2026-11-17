import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

/**
 * One big interactive track card (teens / adults).
 * Layout: large 3D illustration filling the top, compact bottom row
 * with the track title, a short tagline, and a circular arrow button.
 */
export default function LearningPathCard({ path }) {
  const { t } = useLanguage()
  const isTeens = path.textKey === 'teens'
  const title = isTeens ? t.nav.teens : t.nav.adults
  const tagline = isTeens ? t.home.teensTagline : t.home.adultsTagline

  return (
    <Link
      to={path.to}
      className={`path-card glass-card glass-card--hover path-card--${path.id}`}
      aria-label={`${title} — ${tagline}`}
    >
      <div className="path-card__illustration" aria-hidden="true">
        <img src={path.illustration} alt="" draggable="false" />
      </div>

      <div className="path-card__body">
        <div className="path-card__text">
          <h3 className="path-card__title">{title}</h3>
          <p className="path-card__tagline">{tagline}</p>
        </div>
        <span className="path-card__go" aria-hidden="true">
          <ArrowRight size={20} className="path-card__arrow" />
        </span>
      </div>
    </Link>
  )
}
