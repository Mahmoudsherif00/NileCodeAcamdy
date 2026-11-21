import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '../components/home/HeroSection'
import LearningPaths from '../components/home/LearningPaths'
import WhatYouLearn from '../components/home/WhatYouLearn'
import PromptComparison from '../components/home/PromptComparison'
import CourseRoadmapPreview from '../components/home/CourseRoadmapPreview'
import HowItWorks from '../components/home/HowItWorks'
import FinalCta from '../components/home/FinalCta'
import '../components/home/LearningPaths.css'
import '../components/home/HomeSections.css'

export default function HomePage() {
  const { hash } = useLocation()

  // Smooth-scroll to #paths when arriving via the hero CTA.
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash])

  return (
    <>
      <HeroSection />
      <LearningPaths />
      <WhatYouLearn />
      <PromptComparison />
      <CourseRoadmapPreview />
      <HowItWorks />
      <FinalCta />
    </>
  )
}
