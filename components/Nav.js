import React from 'react'

import { withTranslation } from '../i18n'
import { ActiveLink } from '@/components/index'
const navItems = [
  {
    title: 'Anasayfa',
    path: '/',
    as: 'anasayfa',
  },
  {
    title: 'İletişim',
    path: '/contact',
    as: 'iletisim',
  },
]

const Nav = ({ t }) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <ActiveLink href="/" activeClassName="active">
            <a className="nav__list__item">{t('home')}</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/contact" activeClassName="active">
            <a className="nav__list__item">{t('contact')}</a>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  )
}

Nav.getInitialProps = async () => ({
  namespacesRequired: ['nav'],
})

export default withTranslation('nav')(Nav)
