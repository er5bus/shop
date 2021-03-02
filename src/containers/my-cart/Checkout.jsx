import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

//import { toast } from 'react-toastify'

import {toAbsoluteUrl} from '../../utils'
import { checkout, clearStore, clearCart } from './../../store/actions'

import PageBanner from '../../components/common/PageBanner'
import {AlertError} from '../../components/flash-messages'

import CheckoutContent from './components/CheckoutContent'
import {Link, Redirect} from 'react-router-dom'
import {loginRoute, myOrderRoute} from '../../routes/child-routes'
//import {AUTO_CLOSE} from '../../ui-helpers'


class Checkout extends React.Component {

  onSubmit = (values) => {
    const { products, currentUser } = this.props
    console.log(currentUser)
    this.props.checkout({ ...values, items: products.map((val) => ({ quantity: val.quantity, product: val.product.id })), user: currentUser.user.id })
  }

  onCloseAlert = () => {
    this.props.clearStore()
  }

  componentDidUpdate(prevProps){
    if (this.props.success !== prevProps.success){
      window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth'
      })
      //toast(<FormattedMessage id="NOTIFICATION.ORDER_CREATED" />, { autoClose: AUTO_CLOSE })
    }
  }

  componentWillUnmount() {
    this.onCloseAlert()
  }

  render() {
    const { error, total, success, totalAmount, products, isAuthenticated } = this.props
    if (!isAuthenticated){ return <Redirect to={loginRoute.path} />}

    if (success){ return <> <div className="text-center">
      <img height="500" width="500" src={toAbsoluteUrl("/media/images/success.svg")} alt="..." />
      <p className="pt-5"><FormattedMessage id="NOTIFICATION.ORDER_CREATED" /></p>
      <Link to={myOrderRoute.path}
        className="default-btn mt-3"
      >
        <FormattedMessage id="MENU.MY_ORDERS" />
      </Link>
    </div> </>}

    return (
      <>
        <PageBanner
          pageTitle={<FormattedMessage id="CHECKOUT.TITLE" />}
          activePageText={<FormattedMessage id="CHECKOUT.TITLE" />}
        />
        <AlertError error={error} onClose={this.onCloseAlert} />
        <section className="checkout-area pt-70 pb-100">
          <div className="container">
            { !isAuthenticated && <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="user-actions">
                  <i className="icofont-ui-file"></i>
                  <Link to={loginRoute.path}><FormattedMessage id="LOGIN.REQUIRED" /></Link>
                </div>
              </div>
            </div>
            }

            <CheckoutContent
              onSubmit={this.onSubmit}
              total={total}
              totalAmount={totalAmount}
              disabled={!isAuthenticated || products.length === 0}
              products={products}
            />
          </div>
        </section>
      </>
    )
  }
}


const mapStateToProps = state => ({ error: state.product.error, ...state.cart, ...state.authentication, success: state.product.success })

export default connect(mapStateToProps, { checkout, clearStore, clearCart })(Checkout)
