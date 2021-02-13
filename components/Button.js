import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export default function Button({
  isPrimary,
  isSecondary,
  isPassive,
  isOutline,
  children,
  onClick,
  type,
  ariaLabel,
  className,
}) {
  return (
    <button
      aria-label={ariaLabel}
      type={type || 'button'}
      onClick={onClick}
      disabled={isPassive}
      className={cx(
        'button',
        { [`${className}`]: className },
        { 'button--passive': isPassive },
        { 'button--outline': isOutline },
        { 'button--primary': isPrimary },
        { 'button--secondary': isSecondary }
      )}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  isPrimary: PropTypes.bool,
  isSecondary: PropTypes.bool,
  isPassive: PropTypes.bool,
  isOutline: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
}
