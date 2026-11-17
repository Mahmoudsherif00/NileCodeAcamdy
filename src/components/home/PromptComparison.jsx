import { CircleX, CircleCheck, ArrowRight } from 'lucide-react'
import Reveal from '../common/Reveal'
import Section from '../layout/Section'
import { useLanguage } from '../../context/LanguageContext'

/**
 * Weak vs improved prompt — a before/after comparison that
 * demonstrates the value of prompt engineering.
 */
export default function PromptComparison() {
  const { t } = useLanguage()

  return (
    <Section eyebrow={t.home.promptEyebrow} title={t.home.promptTitle}>
      <div className="prompt">
        <Reveal className="prompt__card glass-card prompt__card--weak">
          <header className="prompt__head">
            <span className="prompt__badge prompt__badge--weak">
              <CircleX size={15} />
              {t.home.weakLabel}
            </span>
          </header>
          <p className="prompt__example">“{t.home.weakExample}”</p>
          <div className="prompt__preview prompt__preview--weak" aria-hidden="true">
            <div className="prompt__mini-chart">
              <span style={{ height: '30%' }} />
              <span style={{ height: '30%' }} />
              <span style={{ height: '30%' }} />
            </div>
          </div>
          <p className="prompt__result">{t.home.weakResult}</p>
        </Reveal>

        <div className="prompt__arrow" aria-hidden="true">
          <span className="prompt__arrow-line" />
          <span className="prompt__arrow-bubble icon-bubble">
            <ArrowRight size={22} />
          </span>
          <span className="prompt__arrow-line" />
        </div>

        <Reveal className="prompt__card glass-card prompt__card--good"
                style={{ transitionDelay: '0.15s' }}>
          <header className="prompt__head">
            <span className="prompt__badge prompt__badge--good">
              <CircleCheck size={15} />
              {t.home.improvedLabel}
            </span>
          </header>
          <p className="prompt__example">“{t.home.improvedExample}”</p>
          <div className="prompt__preview prompt__preview--good" aria-hidden="true">
            <div className="prompt__mini-chart">
              <span style={{ height: '38%' }} />
              <span style={{ height: '62%' }} />
              <span style={{ height: '48%' }} />
              <span style={{ height: '86%' }} />
            </div>
            <div className="prompt__mini-caption">
              <span className="prompt__dot" />
              <span className="prompt__caption-line" />
            </div>
          </div>
          <p className="prompt__result">{t.home.improvedResult}</p>
        </Reveal>
      </div>
    </Section>
  )
}
