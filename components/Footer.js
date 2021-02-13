import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Instagram, Facebook, Twitter, YouTube } from '@/icons/index'

const icons = [
  {
    icon: <Instagram aria-label="instagram link icon" />,
    path: '#',
    target: '_blank',
  },
  {
    icon: <Facebook aria-label="facebook link icon" />,
    path: '#',
    target: '_blank',
  },
  {
    icon: <Twitter aria-label="twitter link icon" />,
    path: '#',
    target: '_blank',
  },
  {
    icon: <YouTube aria-label="youTube link icon" />,
    path: '#',
  },
]

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__bottom">
        <div className="container footer__bottom-wrapper">
          <span className="footer__copyright order-1 order-md-0">
            Copyright © 2020 Basic Login. Her Hakkı Saklıdır.
          </span>
          <div className="footer__icons order-0 order-md-1">
            {icons.map((icon, idx) => (
              <Link href={icon.path} key={idx}>
                <a className="footer__icon" target={icon.target || '_self'}>
                  {icon.icon}{' '}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
