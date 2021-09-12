import React, { createContext, useState } from 'react'
import { getLocaleDict, dictionaryList, localeOptions } from '../locales/index'

export const LocaleContext = createContext({
  userLanguage: 'en',
  dictionary: dictionaryList.en,
  // eslint-disable-next-line
  userLanguageChange: (selected: string) => {},
})

export const LocaleProvider: React.FC = ({ children }) => {
  const defaultLanguage = window.localStorage.getItem('rcml-lang')
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en')

  const userLanguageChange = (selected: string) => {
    const newLanguage = selected in localeOptions ? selected : 'en'
    setUserLanguage(newLanguage)
    window.localStorage.setItem('rcml-lang', newLanguage)
  }

  const dictionary = getLocaleDict(userLanguage)

  return (
    <LocaleContext.Provider
      value={{ userLanguage, dictionary, userLanguageChange }}
    >
      {children}
    </LocaleContext.Provider>
  )
}
