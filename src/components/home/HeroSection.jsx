import { ArrowRight, GraduationCap, Users } from 'lucide-react'
import Button from '../common/Button'
import { useLanguage } from '../../context/LanguageContext'
import heroSphere from '../../assets/images/hero-sphere.svg'
import './Hero.css'

/**
 * Home hero: headline + CTA on the left, glowing AI network sphere
 * on the right, orbit rings and drifting particles behind it.
 */
export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="hero">
      <div className="hero__glow hero__glow--a bg-glow bg-glow--blue" aria-hidden="true" />
      <div className="hero__glow hero__glow--b bg-glow bg-glow--cyan" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__copy">
          <div className="hero__chips hero-enter">
            <span className="chip chip--accent">
              <GraduationCap size={15} />
              {t.common.forTeens}
            </span>
            <span className="chip chip--accent">
              <Users size={15} />
              {t.common.forAdults}
            </span>
          </div>

          <h1 className="hero__title hero-enter-1">
            {t.home.heroTitleA}
            <br />
            <span className="text-gradient">{t.home.heroTitleB}</span>
          </h1>

          <p className="hero__desc hero-enter-2">{t.home.heroDesc}</p>

          <div className="hero__cta hero-enter-3">
            <Button to="/#paths" variant="primary" size="lg">
              {t.common.explorePaths}
              <ArrowRight size={18} className="btn-arrow" />
            </Button>
          </div>
        </div>

        <div className="hero__visual hero-enter-2" aria-hidden="true">
          <img src={heroSphere} alt="" className="hero__sphere anim-float" draggable="false" />
          <span className="hero__particle hero__particle--1 anim-drift" />
          <span className="hero__particle hero__particle--2 anim-drift anim-delay-2" />
          <span className="hero__particle hero__particle--3 anim-drift anim-delay-3" />
          <span className="hero__particle hero__particle--4 anim-drift anim-delay-1" />
        </div>
      </div>

      <div className="hero__grid-lines" aria-hidden="true" />
    </section>
  )
}
