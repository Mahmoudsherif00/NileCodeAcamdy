import TrackHero from '../components/track/TrackHero'
import OutcomesGrid from '../components/track/OutcomesGrid'
import Roadmap from '../components/track/Roadmap'
import Curriculum from '../components/track/Curriculum'
import PricingCard from '../components/track/PricingCard'
import TrackCTA from '../components/track/TrackCTA'
import { useLanguage } from '../context/LanguageContext'
import { TEENS_OUTCOME_ICONS, TEENS_ROADMAP_ICONS } from '../data/teensData'
import teensHero from '../assets/images/teens-hero.svg'
import robotIllustration from '../assets/images/robot-3d.svg'
import starIllustration from '../assets/images/star-3d.svg'
import '../components/track/Track.css'

const WHATSAPP_ENROLL_EN =
  "Hello Nile Code Academy! I'd like to enroll in the Teens Track. Could you share the pricing and full details?"
const WHATSAPP_ENROLL_AR =
  'مرحبًا أكاديمية النيل كود! أريد التسجيل في مسار المراهقين. هل يمكنكم مشاركة السعر والتفاصيل الكاملة؟'

export default function TeensPage() {
  const { t, isArabic } = useLanguage()
  const s = t.teens

  return (
    <>
      <TrackHero
        image={teensHero}
        titleA={s.heroTitleA}
        titleB={s.heroTitleB}
        desc={s.heroDesc}
      />

      <OutcomesGrid
        eyebrow={s.outcomesEyebrow}
        title={s.outcomesTitle}
        items={s.outcomes}
        icons={TEENS_OUTCOME_ICONS}
      />

      <Roadmap
        eyebrow={s.roadmapEyebrow}
        title={s.roadmapTitle}
        milestones={s.roadmap}
        icons={TEENS_ROADMAP_ICONS}
        currentLabel={s.roadmapCurrent}
      />

      <Curriculum
        eyebrow={s.curriculumEyebrow}
        title={s.curriculumTitle}
        items={s.curriculum}
        note={s.curriculumNote}
        illustration={robotIllustration}
      />

      <PricingCard
        eyebrow={s.pricingEyebrow}
        title={s.pricingTitle}
        planName={s.planName}
        note={s.planNote}
        illustration={starIllustration}
        highlight={t.common.forTeens}
        enrollMessage={isArabic ? WHATSAPP_ENROLL_AR : WHATSAPP_ENROLL_EN}
      />

      <TrackCTA
        title={s.ctaTitle}
        desc={s.ctaDesc}
        illustration={teensHero}
      />
    </>
  )
}
