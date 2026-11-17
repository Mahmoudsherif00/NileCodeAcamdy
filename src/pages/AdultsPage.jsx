import TrackHero from '../components/track/TrackHero'
import OutcomesGrid from '../components/track/OutcomesGrid'
import Roadmap from '../components/track/Roadmap'
import Curriculum from '../components/track/Curriculum'
import PricingCard from '../components/track/PricingCard'
import TrackCTA from '../components/track/TrackCTA'
import { useLanguage } from '../context/LanguageContext'
import { ADULTS_OUTCOME_ICONS, ADULTS_ROADMAP_ICONS } from '../data/adultsData'
import adultsHero from '../assets/images/adults-hero.svg'
import analyticsIllustration from '../assets/images/analytics-3d.svg'
import briefcaseIllustration from '../assets/images/briefcase-3d.svg'
import '../components/track/Track.css'

const WHATSAPP_ENROLL_EN =
  "Hello Nile Code Academy! I'd like to enroll in the Adults Track (4,500 EGP)."
const WHATSAPP_ENROLL_AR =
  'مرحبًا أكاديمية النيل كود! أريد التسجيل في مسار البالغين (4500 جنيه).'

export default function AdultsPage() {
  const { t, isArabic } = useLanguage()
  const s = t.adults

  return (
    <>
      <TrackHero
        image={adultsHero}
        titleA={s.heroTitleA}
        titleB={s.heroTitleB}
        desc={s.heroDesc}
      />

      <OutcomesGrid
        eyebrow={s.outcomesEyebrow}
        title={s.outcomesTitle}
        items={s.outcomes}
        icons={ADULTS_OUTCOME_ICONS}
      />

      <Roadmap
        eyebrow={s.roadmapEyebrow}
        title={s.roadmapTitle}
        milestones={s.roadmap}
        icons={ADULTS_ROADMAP_ICONS}
        currentLabel={s.roadmapCurrent}
      />

      <Curriculum
        eyebrow={s.curriculumEyebrow}
        title={s.curriculumTitle}
        items={s.curriculum}
        note={s.curriculumNote}
        illustration={analyticsIllustration}
      />

      <PricingCard
        eyebrow={s.pricingEyebrow}
        title={s.pricingTitle}
        planName={s.planName}
        price={s.planPrice}
        note={s.planNote}
        illustration={briefcaseIllustration}
        highlight={t.common.forAdults}
        enrollMessage={isArabic ? WHATSAPP_ENROLL_AR : WHATSAPP_ENROLL_EN}
      />

      <TrackCTA
        title={s.ctaTitle}
        desc={s.ctaDesc}
        illustration={adultsHero}
        flip
      />
    </>
  )
}
