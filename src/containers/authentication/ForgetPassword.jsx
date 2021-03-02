import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import { forgotPassword, clearStore } from './../../store/actions'
import PageBanner from '../../components/common/PageBanner'
import ForgetPasswordForm from './components/ForgetPasswordForm'
import {AlertError, AlertSuccess} from '../../components/flash-messages'
import {Redirect} from 'react-router-dom'
import { myAccountRoute} from '../../routes/child-routes'


class ForgetPassword extends React.Component {

  onSubmit = (values) => {
    this.props.forgotPassword(values)
  }

  onCloseAlert = () => {
    this.props.clearStore()
  }

  componentWillUnmount() {
    this.onCloseAlert()
  }

  render() {

    const { success, error,  isAuthenticated } = this.props
    if (isAuthenticated){
      return <Redirect to={myAccountRoute.path} />
    }

    return (
      <>
        <PageBanner
          pageTitle={<FormattedMessage id="MENU.FORGET_PASSWORD" />}
          activePageText={<FormattedMessage id="MENU.FORGET_PASSWORD" />}
        />

        <section className="signup-area ptb-100">
          <div className="container">
            <div className="signup-content">
              <div className="text-center mb-4">
                <h2 className="mb-2"><FormattedMessage id="FORGET_PASSWORD.TITLE" /></h2>
              </div>
              <AlertError error={error} onClose={this.onCloseAlert} />
              <AlertSuccess show={success} onClose={this.onCloseAlert} messageId="FORGET_PASSWORD.FORM.SUBMIT_SUCCESS" />
              <ForgetPasswordForm onSubmit={this.onSubmit} />
            </div>
          </div>
        </section>
      </>
    )
  }
}


const mapStateToProps = state => state.authentication

export default connect(mapStateToProps, { forgotPassword, clearStore })(ForgetPassword)
