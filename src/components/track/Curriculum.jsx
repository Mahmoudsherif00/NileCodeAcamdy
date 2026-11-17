import Reveal from '../common/Reveal'
import Section from '../layout/Section'
import CurriculumItem from './CurriculumItem'

/**
 * Numbered curriculum list + side illustration (shared).
 */
export default function Curriculum({ eyebrow, title, items, note, illustration, illustrationAlt }) {
  return (
    <Section eyebrow={eyebrow} title={title}>
      <div className="curriculum">
        <div className="curriculum__list">
          {items.map((topic, i) => (
            <Reveal key={topic} style={{ transitionDelay: `${Math.min(i, 6) * 0.06}s` }}>
              <CurriculumItem index={i + 1} topic={topic} />
            </Reveal>
          ))}
          <p className="curriculum__note">{note}</p>
        </div>

        <div className="curriculum__side" aria-hidden="true">
          <img src={illustration} alt={illustrationAlt || ''} className="anim-float-soft" draggable="false" />
        </div>
      </div>
    </Section>
  )
}
