import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'
import Button from '../components/common/Button'
import { useLanguage } from '../context/LanguageContext'

export default function NotFoundPage() {
  const { t } = useLanguage()
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <div className="container" style={{ paddingBlock: 'var(--space-10)' }}>
        <span className="icon-bubble" style={{ width: 72, height: 72, margin: '0 auto var(--space-6)' }}>
          <Compass size={30} />
        </span>
        <h1 style={{ marginBottom: 'var(--space-3)' }}>404</h1>
        <p className="section-subtitle" style={{ margin: '0 auto var(--space-6)' }}>
          {t.common.notFoundDesc}
        </p>
        <Button to="/" variant="primary" size="lg">
          {t.common.backHome}
        </Button>
      </div>
    </section>
  )
}
