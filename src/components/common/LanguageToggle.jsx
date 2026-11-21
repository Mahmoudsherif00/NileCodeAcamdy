import { Languages } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

/** EN / AR switch. Drives the dir=rtl layout via LanguageContext. */
export default function LanguageToggle({ className = '' }) {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      type="button"
      className={`icon-btn lang-btn ${className}`.trim()}
      onClick={toggleLanguage}
      aria-label={language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
      title={language === 'en' ? 'العربية' : 'English'}
    >
      <Languages size={18} />
      <span>{language === 'en' ? 'ع' : 'EN'}</span>
    </button>
  )
}
