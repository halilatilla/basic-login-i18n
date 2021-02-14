import React, { useContext } from 'react'
import { I18nContext } from 'next-i18next'
import Image from 'next/image'

import { useLangContext } from '@/stores/index'
import { Select } from '@/components/index'

const languages = [
  {
    value: 'tr',
    label: 'TR',
    flag: 'turkey',
  },
  {
    value: 'en',
    label: 'EN',
    flag: 'united-kingdom',
  },
]

export default function LanguageSwitcher() {
  const { i18n } = useContext(I18nContext)
  const { lang, setLang } = useLangContext()

  const onChangeHandler = e => {
    if (e) {
      i18n.changeLanguage(e.value)
      setLang(e.value)
    }
  }

  const formatOptionLabel = ({ label, flag }) => (
    <div className="language-switcher__label">
      <Image
        src={`/flags/${flag}.svg`}
        quality="100"
        priority
        width={20}
        height={20}
        alt={flag}
      />
      <span>{label}</span>
    </div>
  )

  return (
    <div className="language-switcher">
      <Select
        name="language-switcher"
        isClearable={false}
        formatOptionLabel={formatOptionLabel}
        options={languages}
        value={
          lang
            ? lang === 'tr'
              ? { value: 'tr', label: 'TR', flag: 'turkey' }
              : { value: 'en', label: 'EN', flag: 'united-kingdom' }
            : i18n.language === 'tr'
            ? { value: 'tr', label: 'TR', flag: 'turkey' }
            : { value: 'en', label: 'EN', flag: 'united-kingdom' }
        }
        onChange={onChangeHandler}
      />
    </div>
  )
}
