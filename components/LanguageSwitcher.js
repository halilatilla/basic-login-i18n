import React, { useContext } from 'react'
import { I18nContext } from 'next-i18next'

import { useLangContext } from '@/stores/index'

export default function LanguageSwitcher() {
  const { i18n } = useContext(I18nContext)
  const { lang, setLang } = useLangContext()

  const changeLanguage = e => {
    i18n.changeLanguage(e.target.value)
    setLang(e.target.value)
  }

  return (
    <div className="language-switcher">
      <select onChange={changeLanguage} value={lang || i18n.language}>
        <option value="en">EN</option>
        <option value="tr">TR</option>
      </select>
    </div>
  )
}
