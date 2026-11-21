import { UserPlus, Video, Code2, TrendingUp } from 'lucide-react'
import Reveal from '../common/Reveal'
import Section from '../layout/Section'
import { useLanguage } from '../../context/LanguageContext'

const HOW_ICONS = [UserPlus, Video, Code2, TrendingUp]

/**
 * "How It Works" — four steps with circular icons.
 */
export default function HowItWorks() {
  const { t } = useLanguage()

  return (
    <Section eyebrow={t.home.howEyebrow} title={t.home.howTitle}>
      <div className="how__grid">
        {t.home.howSteps.map((step, i) => {
          const Icon = HOW_ICONS[i]
          return (
            <Reveal key={step.title} className="how__card glass-card glass-card--hover"
                    style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="how__step-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </div>
              <span className="icon-bubble">
                <Icon size={22} />
              </span>
              <h3 className="how__title">{step.title}</h3>
              <p className="how__desc">{step.desc}</p>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
