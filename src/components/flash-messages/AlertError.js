import React from 'react'
import { FormattedMessage } from 'react-intl'

import {ERROR_CODES} from '../../ui-helpers'


const AlertError = ({ error, onClose=f=>f }) => {

  const { code, status } = error || {}

  return error && (
    <div className="alert alert-danger alert-dismissible fade show" role="alert">
      <button type="button" onClick={onClose} className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="alert-text font-weight-bold">
        <i className="fa fa-exclamation-triangle text-white" /> { " " }
        <FormattedMessage id={ ERROR_CODES[(code | status)] || "ERROR.CODE.INTERNAL_ERROR"} />
      </div>
    </div>)
}


export default AlertError
