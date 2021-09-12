import React from 'react'
import useTranslation from '../hooks/useTranslation'

const LocaleSelect = () => {
  const { translate, setLanguage, userLanguage, languages } = useTranslation()

  const handleLanguageChange = (e: { target: { value: string } }) =>
    setLanguage(e.target.value)

  return (
    <select
      className="appearance-none underline bg-transparent border-0 px-4 py-2 pr-8 focus:outline-none text-darkgray text-sm font-semibold dark:text-white cursor-pointer hover:bg-black hover:bg-opacity-5 dark:hover:bg-opacity-10 rounded-large"
      defaultValue={userLanguage}
      onChange={handleLanguageChange}
    >
      <option disabled>{translate('select_language')}</option>
      {Object.entries(languages).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  )
}

export default LocaleSelect
