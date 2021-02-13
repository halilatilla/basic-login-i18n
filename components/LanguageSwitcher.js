import React, { useContext } from 'react'
import { I18nContext } from 'next-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useContext(I18nContext)

  const changeLanguage = e => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div className="language-switcher">
      <select onChange={changeLanguage} defaultValue={i18n.language}>
        <option value="en">EN</option>
        <option value="tr">TR</option>
      </select>
    </div>
  )
}
