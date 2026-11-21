import { MessageSquare, Puzzle, Workflow, Rocket } from 'lucide-react'
import Reveal from '../common/Reveal'
import Section from '../layout/Section'
import { useLanguage } from '../../context/LanguageContext'

const STEP_ICONS = [MessageSquare, Puzzle, Workflow, Rocket]

/**
 * "What You Will Learn" — horizontal 4-step learning roadmap.
 */
export default function WhatYouLearn() {
  const { t } = useLanguage()

  return (
    <Section eyebrow={t.home.learnEyebrow} title={t.home.learnTitle}>
      <div className="roadmap roadmap--h" role="list">
        {t.home.learnSteps.map((step, i) => {
          const Icon = STEP_ICONS[i]
          return (
            <Reveal key={step.title} className="roadmap__item-wrap" role="listitem"
                    style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="roadmap__node">
                <span className="roadmap__line roadmap__line--left" aria-hidden="true" />
                <span className="icon-bubble roadmap__icon">
                  <Icon size={22} />
                </span>
                <span className="roadmap__line roadmap__line--right" aria-hidden="true" />
              </div>
              <h3 className="roadmap__title">{step.title}</h3>
              <p className="roadmap__desc">{step.desc}</p>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
