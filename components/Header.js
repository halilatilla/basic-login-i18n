import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'
import { motion } from 'framer-motion'
import Popover from '@tippyjs/react'
import { useMediaQuery } from 'react-responsive'

import { withTranslation } from '../i18n'
import { useUserContext } from '@/stores/index'
import {
  Nav,
  Button,
  MenuToggle,
  LanguageSwitcher,
  ModalLogin,
} from '@/components/index'

const Header = ({ t }) => {
  const router = useRouter()
  const [isShowMobile, setIsShowMobile] = useState(false)
  const [isShowModal, setIsShowModal] = useState(false)
  const { user, setUser } = useUserContext()
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 991px)' })

  const variants = {
    open: {
      transition: { staggerChildren: 0.07 },
    },
    closed: {
      transition: { staggerChildren: 0.05 },
    },
  }

  const logout = () => {
    setUser({ ...user, name: '', email: '' })
  }

  const PopOverContent = () => {
    return (
      <div className="header__popover-content">
        <p className="header__popover-email">{user.email}</p>
        <Button onClick={logout} isPrimary>
          {t('header:logout')}
        </Button>
      </div>
    )
  }

  useEffect(() => {
    setIsShowMobile(false)
  }, [router.pathname])

  return (
    <>
      <ModalLogin
        isOpen={isShowModal}
        closeModal={() => setIsShowModal(false)}
      />

      <header className="header">
        <div className="container header__content">
          <Link href="/">
            <a className="header__logo">
              <Image
                src="/logo.svg"
                width={62}
                height={54}
                priority
                alt="site logo"
                quality="100"
              />
              <span className="header__logo__text">Basic Login</span>
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
            <div className="header__language-switcher">
              <LanguageSwitcher />
            </div>
            <div className="header__login-button">
              {user.name ? (
                <>
                  <Popover
                    content={<PopOverContent />}
                    theme="light-border"
                    interactive
                    disabled={isTabletOrMobile}
                  >
                    <span>
                      <Button isOutline>{user.name}</Button>
                    </span>
                  </Popover>
                  {isTabletOrMobile && (
                    <div>
                      <p className="header__popover-email">{user.email}</p>
                      <Button onClick={logout} isPrimary>
                        {t('header:logout')}
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <Button onClick={() => setIsShowModal(true)} isPrimary>
                  {t('login')}
                </Button>
              )}
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
    </>
  )
}

Header.getInitialProps = async () => ({
  namespacesRequired: ['header', 'nav', 'contact'],
})

export default withTranslation('header', 'contact')(Header)
