import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import { Link, Redirect } from 'react-router-dom'

import { signup, clearStore } from './../../store/actions'

import PageBanner from '../../components/common/PageBanner'
import SignUpForm from './components/SignUpForm'
import {AlertError} from '../../components/flash-messages'
import {loginRoute, checkoutRoute, productsRoute} from '../../routes/child-routes'


class SignUp extends React.Component {

  onSubmit = (values) => {
    this.props.signup(values)
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
          pageTitle={<FormattedMessage id="MENU.SIGNUP" />}
          activePageText={<FormattedMessage id="MENU.SIGNUP" />}
        />

        <section className="signup-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="new-customer-content">
                  
                  <h2><FormattedMessage id="LOGIN.TITLE" /></h2>

                  <span><FormattedMessage id="LOGIN.SUB_TITLE" /></span>
                  <p><FormattedMessage id="LOGIN.DESC" /></p>
                  <Link to={loginRoute.path} className="optional-btn">
                    <FormattedMessage id="LOGIN.TITLE" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="login-content">
                  <h2><FormattedMessage id="SIGNUP.TITLE" /></h2>
                  <AlertError error={error} onClose={this.onCloseAlert} />
                  <SignUpForm onSubmit={this.onSubmit} />
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

export default connect(mapStateToProps, { signup, clearStore })(SignUp)
