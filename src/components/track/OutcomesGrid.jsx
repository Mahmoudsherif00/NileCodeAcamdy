import Reveal from '../common/Reveal'
import Section from '../layout/Section'

/**
 * "Learning Outcomes" grid (shared).
 */
export default function OutcomesGrid({ eyebrow, title, subtitle, items, icons }) {
  return (
    <Section eyebrow={eyebrow} title={title} subtitle={subtitle}>
      <div className="outcomes__grid">
        {items.map((item, i) => {
          const Icon = icons[i]
          return (
            <Reveal key={item.title} className="outcome-card glass-card glass-card--hover"
                    style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="icon-bubble">
                <Icon size={22} />
              </span>
              <h3 className="outcome-card__title">{item.title}</h3>
              <p className="outcome-card__desc">{item.desc}</p>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
