import Reveal from '../common/Reveal'
import Section from '../layout/Section'
import { useLanguage } from '../../context/LanguageContext'

/**
 * Compact visual course roadmap: 4 numbered milestones.
 */
export default function CourseRoadmapPreview() {
  const { t } = useLanguage()

  return (
    <Section eyebrow={t.home.roadmapEyebrow} title={t.home.roadmapTitle}>
      <div className="mini-roadmap" role="list">
        {t.home.roadmapSteps.map((step, i) => (
          <Reveal key={step.title} className="mini-roadmap__item" role="listitem"
                  style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="mini-roadmap__node">
              <span className="mini-roadmap__line mini-roadmap__line--left" aria-hidden="true" />
              <span className="mini-roadmap__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="mini-roadmap__line mini-roadmap__line--right" aria-hidden="true" />
            </div>
            <h3 className="mini-roadmap__title">{step.title}</h3>
            <p className="mini-roadmap__desc">{step.desc}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
