import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
//import { getProductURL } from '../../../utils';
import { addToCart } from './../../../store/actions'
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'
//import {productRoute} from '../../../routes/child-routes';
import { AUTO_CLOSE } from './../../../ui-helpers'


class SingleProduct extends Component {
  state = {
    QuickViewModal: false
  }

  handleAddToCart = (product) => {
    toast(<FormattedMessage id="NOTIFICATION.CART_UPDATED" />, {autoClose: AUTO_CLOSE})
    this.props.addToCart({ product, quantity: 1 });
  }

  toggleModal = () => {
    this.setState({
      QuickViewModal: !this.state.QuickViewModal
    });
    this.props.ontoggleModal(this.state.QuickViewModal);
  }

  handleModalProduct = (product) => {
    this.props.onhandleModalProduct(product);
  }
  render(){
    const {product} = this.props;
    return(
      <div className="col-lg-4 col-md-6 col-sm-6 products-col-item">
        <div className={"single-products-box"}>
          <div className="products-image">
            {/*<Link to={productRoute.path.replace(":param", product.id || product._id)}>*/}
            <a href="/#" onClick={ e => {e.preventDefault();this.toggleModal();this.handleModalProduct(product);}}>
              <img height="500" width="500" src={product.productImage} className="main-image" alt="..." />
              <img height="500" width="500" src={product.productImage} className="hover-image" alt="..." />
            </a>
            {/*</Link>*/}

            <div className="products-button">
              <ul>
                <li>
                  <div className="quick-view-btn">
                    <a
                      href="/#"
                      onClick={ e => {
                        e.preventDefault();
                        this.toggleModal();
                        this.handleModalProduct(product);
                      }}
                    >
                      <i className='bx bx-search-alt'></i>
                      <span className="tooltip-label"><FormattedMessage id="PRODUCT.QUICK_VIEW" /></span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="products-content">
            <h3>{product.title}</h3>
            <div className="price">
              <span className="new-price">{product.price} <FormattedMessage id="CURRENCY" /></span>
            </div>
            <div className="star-rating">
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
            </div>
            <a
              href="/#"
              className="add-to-cart"
              onClick={(e) => {
                e.preventDefault(); this.handleAddToCart(product)
              }}
            >
              <FormattedMessage id="PRODUCT.ADD_TO_CART" />
            </a>
          </div>
          <span className="products-discount"><span>{ product.category.categoryName }</span></span>
        </div>
      </div>
    )
  }
}

export default connect(null, { addToCart })(SingleProduct)
