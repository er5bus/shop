import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { Link, Redirect } from 'react-router-dom'

import { login, clearStore } from './../../store/actions'

import PageBanner from '../../components/common/PageBanner'
import LoginForm from './components/LoginForm'
import {AlertError} from '../../components/flash-messages'
import {/*forgetPasswordRoute, */signupRoute, checkoutRoute, productsRoute} from '../../routes/child-routes'


class Login extends React.Component {

  onSubmit = (values) => {
    this.props.login(values)
  }

  onCloseAlert = () => {
    this.props.clearStore()
  }

  componentWillUnmount() {
    this.onCloseAlert()
  }

  render() {

    const { error, isAuthenticated, hasItemsInShoppingCart } = this.props
    if (isAuthenticated){
      return <Redirect to={hasItemsInShoppingCart ? checkoutRoute.path : productsRoute.path} />
    }

    return (
      <>
        <PageBanner
          pageTitle={<FormattedMessage id="MENU.LOGIN" />}
          activePageText={<FormattedMessage id="MENU.LOGIN" />}
        />

        <section className="login-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="login-content">
                  <h2><FormattedMessage id="LOGIN.TITLE" /></h2>

                  <AlertError error={error} onClose={this.onCloseAlert} />
                  <LoginForm  onSubmit={this.onSubmit}/>
                  {/*<div className="text-center pt-2">
                    <Link to={forgetPasswordRoute.path} className="forgot-password">
                      <FormattedMessage id="FORGET_PASSWORD.TITLE" />
                    </Link>
                  </div>*/}
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="new-customer-content">
                  <h2><FormattedMessage id="SIGNUP.TITLE" /></h2>

                  <span><FormattedMessage id="SIGNUP.SUB_TITLE" /></span>
                  <p><FormattedMessage id="SIGNUP.DESC" /></p>

                  <Link to={signupRoute.path} className="optional-btn">
                    <FormattedMessage id="SIGNUP.TITLE" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}


const mapStateToProps = state => ({ ...state.authentication, hasItemsInShoppingCart: Boolean(state.cart.total) })

export default connect(mapStateToProps, { login, clearStore })(Login)
