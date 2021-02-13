import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

export default function Textarea({
  label,
  autoFocus,
  onChange,
  value,
  name,
  placeholder,
  className,
  isRequiredError,
}) {
  return (
    <label className={cx('form-container', { [`${className}`]: className })}>
      {label && <span className="form-label">{label}</span>}
      <textarea
        className={cx('form-element', {
          'form-element--required': isRequiredError,
        })}
        autoFocus={autoFocus}
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </label>
  )
}

Textarea.propTypes = {
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
  placeholder: PropTypes.string,
}
