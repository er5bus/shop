import React from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { FormattedMessage } from 'react-intl'

import { updateUser, clearStore } from './../../store/actions'
import PageBanner from '../../components/common/PageBanner'
import MyAccountForm from './components/MyAccountForm'
import {Redirect} from 'react-router-dom'
import {loginRoute} from '../../routes/child-routes'
import {AUTO_CLOSE} from '../../ui-helpers'


class MyAccount extends React.Component {

  onSubmit = (values) => {
    const { currentUser } = this.props
    this.props.updateUser(currentUser.id, values)
  }

  componentDidUpdate(prevProps){
    if (this.props.success && this.props.success !== prevProps.success){
      toast(<FormattedMessage id="NOTIFICATION.USER_UPDATED" />, { autoClose: AUTO_CLOSE })
    }
    if (this.props.error && this.props.error !== prevProps.error){
      toast.error(<FormattedMessage id="NOTIFICATION.USER_FAILED_UPDATED" />, { autoClose: AUTO_CLOSE })
    }
  }

  onCloseAlert = () => {
    this.props.clearStore()
  }

  componentWillUnmount() {
    this.onCloseAlert()
  }

  render() {
    const { isAuthenticated } = this.props
    if (!isAuthenticated ){
      return <Redirect to={loginRoute.path} />
    }
    return (
      <>
        <PageBanner
          pageTitle={<FormattedMessage id="MENU.MY_ACCOUNT" />}
          activePageText={<FormattedMessage id="MENU.MY_ACCOUNT" />}
        />

        <section className="signup-area ptb-100">
          <div className="container">
            <div className="signup-content">
              <h2><FormattedMessage id="MY_ACCOUNT.TITLE" /></h2>
              <MyAccountForm  onSubmit={this.onSubmit}/>
            </div>
          </div>
        </section>
      </>
    )
  }
}


const mapStateToProps = state => ({ ...state.authentication, success: state.user.success, error: state.user.error })

export default connect(mapStateToProps, { updateUser, clearStore })(MyAccount)
