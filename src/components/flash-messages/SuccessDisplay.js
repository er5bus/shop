import React from 'react'
import { FormattedMessage } from 'react-intl'

import {toAbsoluteUrl} from '../../utils'
import ReactWOW from 'react-wow'


const SuccessDisplay = ({ messageId }) => {

  return  (
    <ReactWOW animation='fadeIn'>
      <img class="img-fluid" src={toAbsoluteUrl("/media/images/success.svg")} alt="..." />
      <div className="text-center font-weight-bold font-weight-bold pt-2">
        <FormattedMessage id={ messageId } />
      </div>
    </ReactWOW>)
}


export default SuccessDisplay
