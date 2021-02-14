import React from 'react'

import { withTranslation } from '../i18n'

const Home = ({ t }) => {
  return (
    <main className="home container">
      <h1 className="home__title">{t('title')}</h1>
      <p className="home__description"> {t('description')} </p>
    </main>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['home'],
})

export default withTranslation('home')(Home)
