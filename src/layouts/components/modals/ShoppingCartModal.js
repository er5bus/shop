import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'
import { removeFromCart } from '../../../store/actions';
import {checkoutRoute, myCartRoute} from '../../../routes/child-routes';
import {getProductURL} from '../../../utils';

class ShoppingCartModal extends Component {

  state = {
    modal: false
  };

  closeModal = () => {
    this.props.onClick(this.state.modal);
  }

  handleRemove = (id) => {
    this.props.removeFromCart(id)
  }

  renderCartItems = () => {
    if (!this.props.products.length){
      return <div className="products-cart-content">
        <p><FormattedMessage id="CART.EMPTY" /></p>
      </div>
    }
    return this.props.products.map((item, idx) => (
      <div className="products-cart-content" key={idx}>
        <div className="products-cart">
          <div className="products-image">
            <img className="product-img" height="50" width="50" src={item.product.productImage} alt="..." />
          </div>

          <div className="products-content">
            <h3>
              {item.product.title}
            </h3>

            <div className="products-price">
              <span>{item.quantity}</span>
              <span>x</span>
              <span className="price">{item.product.price * item.quantity} <FormattedMessage id="CURRENCY" /></span>
            </div>

            <button
              className="remove-btn"
              onClick={ () => this.handleRemove(item.product.id)}
            >
              <i className='bx bx-trash'></i>
            </button>
          </div>
        </div>
      </div>
    ))
  }


  render() {
    return (
      <React.Fragment>
        <div className={`shoppingCartModal right ${this.props.active}`}>
          <div className="modal-innter-content">
            <button type="button" className="close" onClick={this.closeModal}>
              <span aria-hidden="true">
                <i className='bx bx-x'></i>
              </span>
            </button>

            <div className="modal-body">
              <h3><FormattedMessage id="CART.TITLE" /> ({this.props.products.length})</h3>

              {this.renderCartItems()}

              <div className="products-cart-subtotal">
                <span><FormattedMessage id="CART.TOTAL_ITEMS" /></span>
                <span className="subtotal">{this.props.total}</span>
              </div>

              <div className="products-cart-btn">
                <Link to={checkoutRoute.path} onClick={this.closeModal} className="default-btn">
                  <FormattedMessage id="CART.GO_TO_CHECKOUT" />
                </Link>

                <Link to={myCartRoute.path} onClick={this.closeModal} className="optional-btn">
                  <FormattedMessage id="CART.GO_TO_CART" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => state.cart


export default connect(
  mapStateToProps,
  { removeFromCart }
)(ShoppingCartModal)
