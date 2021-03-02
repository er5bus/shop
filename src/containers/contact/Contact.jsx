import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import PageBanner from '../../components/common/PageBanner'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'

import { RECIVER_MAIL } from './../../ui-helpers'
import { clearStore, contactUs } from './../../store/actions'

import { AlertError, AlertSuccess } from './../../components/flash-messages'
import ReactWOW from 'react-wow'

class Contact extends React.Component {

  onSubmit = (values) => {
    const payload = { mail: { ...values, recieverEmail: RECIVER_MAIL } }
    this.props.contactUs(payload)
  }

  onCloseAlert = () => {
    this.props.clearStore()
  }

  componentWillUnmount() {
    this.onCloseAlert()
  }

  render() {

    const { success, error } = this.props

    return (
      <>
        <PageBanner
          pageTitle={<FormattedMessage id="MENU.CONTACT_US" />}
          activePageText={<FormattedMessage id="MENU.CONTACT_US" />}
        />
        <section className="contact-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <ContactInfo />
              </div>

              <div className="col-lg-7 col-md-12">
                 <ReactWOW animation='fadeOut fadeIn'>
                  <div className="contact-form">
                  <h3><FormattedMessage id="CONTACT_US.FORM.TITLE" /></h3>
                  <p><FormattedMessage id="CONTACT_US.FORM.DESC" /></p>

                  <AlertError error={error} onClose={this.onCloseAlert} />
                  <AlertSuccess show={success} onClose={this.onCloseAlert} messageId="CONTACT_US.FORM.SUBMIT_SUCCESS" />

                  <ContactForm onSubmit={this.onSubmit} />
                </div>
                  </ReactWOW>
                
              </div>
            </div>
          </div>
        </section>

      </>
    )
  }
}


const mapStateToProps = state => state.contact

export default connect(mapStateToProps, { contactUs, clearStore })(Contact)
