import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cx from 'classnames'
import { motion } from 'framer-motion'

import { withTranslation } from '../i18n'
import { Nav, Button, MenuToggle } from '@/components/index'

const Header = ({ t }) => {
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
            <Image
              src="/logo.svg"
              width={272}
              height={54}
              priority
              quality="100"
            />
            <span>{t('siteName')}</span>
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
            <Button isPrimary>{t('login')} </Button>
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

Header.getInitialProps = async () => ({
  namespacesRequired: ['header', 'nav'],
})

export default withTranslation('header')(Header)
