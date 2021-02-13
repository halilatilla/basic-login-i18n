import React from 'react'

import { withTranslation } from '../i18n'

const Home = ({ t }) => {
  return <div className="home container">{t('homePageTitle')}</div>
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['home'],
})

export default withTranslation('home')(Home)
