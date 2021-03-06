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
  isRequiredSign,
  requiredText,
  type,
  min,
  max,
}) => {
  return (
    <label className={cx('form-container', { [`${className}`]: className })}>
      {label && (
        <span
          className={cx('form-label', {
            'form-label--required': isRequiredSign,
          })}
        >
          {label}
        </span>
      )}

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
  isRequiredSign: PropTypes.bool,
  isRequiredText: PropTypes.string,
  type: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
}

Input.getInitialProps = async () => ({
  namespacesRequired: ['form'],
})

export default withTranslation('form')(Input)
