import React, { useContext } from 'react'
import { I18nContext } from 'next-i18next'

import { withTranslation } from '../i18n'

const Home = ({ t }) => {
  const { i18n } = useContext(I18nContext)

  console.log(i18n.language)

  const changeLanguage = e => {
    console.log(e.target.value)
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div className="home container">
      {t('homePageTitle')}
      <select onChange={changeLanguage} defaultValue={i18n.language}>
        <option value="en">EN</option>
        <option value="tr">TR</option>
      </select>
    </div>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['home'],
})

export default withTranslation('home')(Home)
