import React from 'react'
import { FormattedMessage } from 'react-intl'
import {PHONE, EMAIL} from '../../../ui-helpers';


const ContactInfo = () => (
  <div className="contact-info">
    <h3><FormattedMessage id="CONTACT_US.INFO.TITLE" /></h3>
    <p><FormattedMessage id="CONTACT_US.INFO.DESC" /></p>

    <ul className="contact-list">
      <li>
        <i className='bx bx-map'></i>
        <FormattedMessage id="ADDRESS" />
      </li>
      <li>
        <i className='bx bx-phone-call'></i>
        { PHONE }
      </li>
      <li>
        <i className='bx bx-envelope'></i>
        { EMAIL }
      </li>
    </ul>
  </div>
)

export default ContactInfo;
