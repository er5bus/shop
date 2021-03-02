import React from 'react'
import { FormattedMessage } from 'react-intl'


const AlertSuccess = ({ show, messageId, onClose=f=>f }) => {

  return show && (
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <button type="button" onClick={onClose} className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="alert-text font-weight-bold">
        <i className="fa fa-exclamation-triangle text-white" /> { " " }
        <FormattedMessage id={ messageId } />
      </div>
    </div>)
}


export default AlertSuccess
