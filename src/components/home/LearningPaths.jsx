import { LEARNING_PATHS } from '../../data/learningPathsData'
import { useLanguage } from '../../context/LanguageContext'
import LearningPathCard from './LearningPathCard'
import Reveal from '../common/Reveal'
import Section from '../layout/Section'

/**
 * "Learning Paths" — the two big track cards.
 */
export default function LearningPaths() {
  const { t } = useLanguage()

  return (
    <Section
      id="paths"
      eyebrow={t.home.pathsEyebrow}
      title={t.home.pathsTitle}
      className="paths-section"
    >
      <div className="paths__grid">
        {LEARNING_PATHS.map((path, i) => (
          <Reveal key={path.id} style={{ transitionDelay: `${i * 0.12}s` }}>
            <LearningPathCard path={path} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
