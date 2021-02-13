import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export default function Badge({
  isPrimary,
  isSecondary,
  children,
  className,
  isTinny,
}) {
  return (
    <div
      className={cx(
        'badge-custom',
        { [`${className}`]: className },
        { 'badge-custom--primary': isPrimary },
        { 'badge-custom--secondary': isSecondary },
        { 'badge-custom--tinny': isTinny }
      )}
    >
      {children}
    </div>
  )
}

Badge.propTypes = {
  isPrimary: PropTypes.bool,
  isTinny: PropTypes.bool,
  isSecondary: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
}
