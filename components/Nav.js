import React from 'react'

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

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navItems.map((item, index) => {
          return (
            <li key={index}>
              <ActiveLink href={item.path} activeClassName="active">
                <a className="nav__list__item">{item.title}</a>
              </ActiveLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
