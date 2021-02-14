import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { withTranslation } from '../../i18n'

const CustomSelect = ({
  t,
  name,
  label,
  value,
  options,
  onChange,
  placeholder,
  defaultValue,
  className,
  isRequiredError,
  formatOptionLabel,
  isClearable = true,
}) => {
  return (
    <label className="form-container">
      {label && <span className="form-label">{label}</span>}
      <Select
        name={name}
        value={value}
        onChange={onChange}
        className={cx(
          'select',
          { [`${className}`]: className },
          { 'select--required': isRequiredError }
        )}
        classNamePrefix="select"
        options={options}
        defaultValue={defaultValue}
        isSearchable
        isClearable={isClearable}
        aria-label={name}
        instanceId={name}
        placeholder={placeholder}
        formatOptionLabel={formatOptionLabel}
        controlShouldRenderValue
      />
      {isRequiredError && (
        <span className="form-element__required-text"> {t('required')}</span>
      )}
    </label>
  )
}

CustomSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  isRequiredError: PropTypes.bool,
}

CustomSelect.getInitialProps = async () => ({
  namespacesRequired: ['form'],
})

export default withTranslation('form')(CustomSelect)
