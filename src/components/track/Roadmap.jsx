import Reveal from '../common/Reveal'
import Section from '../layout/Section'

/**
 * Horizontal 5-milestone course roadmap (shared).
 * A continuous glowing track line connects icon nodes; the first
 * milestone is marked as the current stage with a pulsing ring.
 * Becomes a vertical timeline on mobile.
 */
export default function Roadmap({ eyebrow, title, milestones, icons = [], currentLabel }) {
  return (
    <Section eyebrow={eyebrow} title={title}>
      <div className="track-roadmap" role="list">
        <span className="track-roadmap__track" aria-hidden="true" />
        {milestones.map((label, i) => {
          const Icon = icons[i]
          const isCurrent = i === 0
          return (
            <Reveal
              key={label}
              className={`track-roadmap__item ${isCurrent ? 'is-current' : ''}`}
              role="listitem"
              style={{ transitionDelay: `${i * 0.09}s` }}
            >
              <div className="track-roadmap__node">
                <span className="track-roadmap__num">
                  {Icon ? <Icon size={22} /> : String(i + 1).padStart(2, '0')}
                  <i className="track-roadmap__step">{String(i + 1).padStart(2, '0')}</i>
                </span>
                {isCurrent && <i className="track-roadmap__pulse" aria-hidden="true" />}
              </div>
              <div className="track-roadmap__text">
                <h3 className="track-roadmap__label">{label}</h3>
                <span className="track-roadmap__chip">{isCurrent ? currentLabel : ''}</span>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
