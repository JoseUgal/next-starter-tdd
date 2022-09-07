// React Utils
import { createContext, useCallback, useContext } from 'react'

// Next Utils
import { useRouter } from 'next/router'

// Languages
import en from '@/config/languages/en.json'
import es from '@/config/languages/es.json'

const languages = { en, es }

const I18NContext = createContext()

// Component that should wrap all the components that need to be translated.
export const I18NProvider = ({ children }) => {
  const { locale, locales } = useRouter()

  const translate = useCallback((key, ...args) => {
    if (languages[locale][key]) {
      let translation = languages[locale][key]

      args.length > 0 && args.forEach((arg, idx) => {
        translation = translation.replace(`$${idx}`, arg)
      })

      return translation
    }

    return key
  }, [locale])

  return (
        <I18NContext.Provider value={{
          t: translate,
          lang: locale,
          availableLangs: locales
        }}>
            {children}
        </I18NContext.Provider>
  )
}

// Function intended to handle the translations of our application
export function useI18N () {
  const context = useContext(I18NContext)

  if (context === undefined) { throw new Error('useI18N must be used within a I18NProvider.') }

  return context
}
