import { useContext } from 'react'
import { LocaleContext } from '../context/localeContext'
import { getLocaleKey, localeOptions as languages } from '../locales/index'

const useTranslation = () => {
  const { userLanguage, userLanguageChange } = useContext(LocaleContext)

  const translate = (key: string) => {
    const localeKey = getLocaleKey(userLanguage, key)
    return localeKey ? localeKey : key
  }

  const setLanguage = (language: string) => userLanguageChange(language)

  return { translate, setLanguage, userLanguage, languages }
}

export default useTranslation
