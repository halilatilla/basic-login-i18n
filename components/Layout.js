import React from 'react'
import PropTypes from 'prop-types'

import { Header, Footer } from '@/components/index'

export default function Layout({ children, isHome }) {
  return (
    <div className="layout">
      <Header isHome={isHome} />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  isHome: PropTypes.bool,
}
