import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'


const InputTextareaField = ({input, label, placeholder, disabled, className="form-control", row=4, meta: { touched, error, warning }}) => {

  return (
    <div className="col-lg-12 col-md-6">
      <div className="form-group">
        { label && <label className="control-label">{label}</label>}
        <textarea {...input} disabled={disabled} rows={row} className={`${className} ${touched && error && "has-danger"}`} placeholder={placeholder} />
        <div className="text-danger">
          { (touched && error) && <FormattedMessage {...JSON.parse(error)} /> }
          { (touched && warning) && <FormattedMessage {...JSON.parse(warning)} /> }
        </div>
      </div>
    </div>
  )
}

InputTextareaField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string
  })
}


export default InputTextareaField
