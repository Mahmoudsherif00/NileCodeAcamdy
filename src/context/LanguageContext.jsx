import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '../i18n/translations'

const STORAGE_KEY = 'nile-code-lang'

const LanguageContext = createContext({
  language: 'en',
  dir: 'ltr',
  t: translations.en,
  toggleLanguage: () => {},
})

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'ar') return saved
  } catch {
    /* localStorage unavailable */
  }
  return 'en'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('lang', language)
    document.documentElement.setAttribute('dir', dir)
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      /* ignore */
    }
  }, [language])

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'))

  const value = {
    language,
    dir: language === 'ar' ? 'rtl' : 'ltr',
    t: translations[language],
    toggleLanguage,
    isArabic: language === 'ar',
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
