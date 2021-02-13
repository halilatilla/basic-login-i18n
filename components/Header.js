import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cx from 'classnames'
import { motion } from 'framer-motion'

import { Nav, Button, MenuToggle } from '@/components/index'

export default function Header() {
  const [isShowMobile, setIsShowMobile] = useState(false)

  const variants = {
    open: {
      transition: { staggerChildren: 0.07 },
    },
    closed: {
      transition: { staggerChildren: 0.05 },
    },
  }

  return (
    <header className="header">
      <div className="container header__content">
        <Link href="/">
          <a className="header__logo">
            {/*   <Image
              src=''
              width={272}
              height={54}
              priority
              quality="100"
            /> */}
          </a>
        </Link>
        <div
          className={cx('header__right', {
            'header__right--show': isShowMobile,
          })}
        >
          <div className="header__nav">
            <Nav />
          </div>
          <div className="header__login-button">
            <Button isPrimary>Giriş Yap</Button>
          </div>
        </div>
        <motion.div
          initial={false}
          animate={isShowMobile ? 'open' : 'closed'}
          className="header__hamburger-menu"
          variants={variants}
        >
          <MenuToggle toggle={() => setIsShowMobile(!isShowMobile)} />
        </motion.div>
      </div>
    </header>
  )
}
