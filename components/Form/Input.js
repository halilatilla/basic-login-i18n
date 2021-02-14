import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import { withTranslation } from '../../i18n'

const Input = ({
  t,
  label,
  autoFocus,
  onChange,
  value,
  name,
  className,
  isRequiredError,
  requiredText,
  type,
  min,
  max,
}) => {
  return (
    <label className={cx('form-container', { [`${className}`]: className })}>
      {label && <span className="form-label">{label}</span>}

      <input
        className={cx('form-element', {
          'form-element--required': isRequiredError,
        })}
        autoFocus={autoFocus}
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        min={min}
        max={max}
      />
      {isRequiredError && (
        <span className="form-element__required-text">
          {requiredText || t('required')}
        </span>
      )}
    </label>
  )
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]),
  className: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
  isRequiredError: PropTypes.bool,
}

Input.getInitialProps = async () => ({
  namespacesRequired: ['form'],
})

export default withTranslation('form')(Input)
