import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import { addToCart, removeFromCart, clearCart } from './../../store/actions'

import PageBanner from '../../components/common/PageBanner'
import CartTable from './components/CartTable'


class MyCart extends React.Component {

  
  render() {

    return (
      <>
        <PageBanner
          pageTitle={<FormattedMessage id="CART.TITLE" />}
          activePageText={<FormattedMessage id="CART.TITLE" />}
        />
        <CartTable />
      </>
    )
  }
}


const mapStateToProps = state => state.cart

export default connect(mapStateToProps, { addToCart, removeFromCart, clearCart })(MyCart)
