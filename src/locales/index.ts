import EN from './en.json'
import KO from './ko.json'

type LocaleMapType = {
  [key in keyof typeof EN | keyof typeof KO]: string | undefined
}

export type LocaleType = 'en' | 'ko'

type DictionaryListType = {
  [lang in LocaleType]: LocaleMapType
}

type LocaleOptionType = {
  [lang in LocaleType]: string
}

export const dictionaryList: DictionaryListType = {
  en: EN,
  ko: KO,
}

export const localeOptions: LocaleOptionType = {
  en: 'English',
  ko: '한국어',
}

const getKeyValue = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key]

export const getLocaleDict = (key: string) =>
  getKeyValue<DictionaryListType, keyof DictionaryListType>(
    dictionaryList,
    key as keyof DictionaryListType
  )

export const getLocaleKey = (localeKey: string, key: string) =>
  getKeyValue<LocaleMapType, keyof LocaleMapType>(
    getLocaleDict(localeKey),
    key as keyof LocaleMapType
  )

export const getLocaleOptions = (key: string) =>
  getKeyValue<LocaleOptionType, keyof LocaleOptionType>(
    localeOptions,
    key as LocaleType
  )
