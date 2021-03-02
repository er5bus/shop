import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import { fetchProduct } from './../../store/actions'

import PageBanner from '../../components/common/PageBanner'
import ProductDetails from './components/ProductDetails'

class Product extends React.Component {

  componentDidMount(){
    this.props.fetchProduct(this.props.match.params)
  }

  render() {
    const { product } = this.props
    return (
      <>
        <PageBanner
          pageTitle={<FormattedMessage id="PRODUCT.DETAILS" />}
          activePageText={<FormattedMessage id="PRODUCT.DETAILS" />}
        />
        { product && <ProductDetails product={product} /> }
      </>
    )
  }
}


const mapStateToProps = state => state.product

export default connect(mapStateToProps, { fetchProduct })(Product)
