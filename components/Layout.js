import React from 'react'
import PropTypes from 'prop-types'

import { Header, Footer } from '@/components/index'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}
