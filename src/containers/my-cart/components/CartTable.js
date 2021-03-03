import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify'
import { FormattedMessage } from 'react-intl'
import { removeFromCart, addQuantity, subtractQuantity } from '../../../store/actions';
import {checkoutRoute, productRoute} from '../../../routes/child-routes';
import { AUTO_CLOSE } from './../../../ui-helpers'

class CartTable extends Component {

  handleRemove = (id) => {
    toast(<FormattedMessage id="NOTIFICATION.CART_UPDATED" />, {autoClose: AUTO_CLOSE })
    this.props.removeFromCart(id);
  }
  //to add the quantity
  handleAddQuantity = (id)=>{
    toast(<FormattedMessage id="NOTIFICATION.CART_UPDATED" />, {autoClose: AUTO_CLOSE})
    this.props.addQuantity({ id });
  }
  //to substruct from the quantity
  handleSubtractQuantity = (id)=>{
    toast(<FormattedMessage id="NOTIFICATION.CART_UPDATED" />, {autoClose: AUTO_CLOSE})
    this.props.subtractQuantity({ id });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <section className="cart-area ptb-100">
        <div className="container">
          <form>
            <div className="cart-table table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col"><FormattedMessage id="CART.PRODUCT" /></th>
                    <th scope="col"><FormattedMessage id="CART.PRODUCT_NAME" /></th>
                    <th scope="col"><FormattedMessage id="CART.PRODUCT_PRICE" /></th>
                    <th scope="col"><FormattedMessage id="CART.PRODUCT_QUANTITY" /></th>
                    <th scope="col"><FormattedMessage id="CART.TOTAL_PRICE" /></th>
                  </tr>
                </thead>

                <tbody>
                  { this.props.products.map((data, idx) => (
                    <tr key={idx}>
                      <td className="product-thumbnail">
                        <Link to={productRoute.path.replace(":param", data.product.id)}>
                          <img src={data.product.productImage} alt="item" />
                        </Link>
                      </td>

                      <td className="product-name">
                        <Link to={productRoute.path.replace(":param", data.product.id)}>
                          {data.product.productName}
                        </Link>
                      </td>

                      <td className="product-price">
                        <span className="unit-amount">{data.product.price} <FormattedMessage id="CURRENCY" /></span>
                      </td>

                      <td className="product-quantity">
                        <div className="input-counter">
                          <span
                            className="minus-btn"
                            onClick={()=>{this.handleSubtractQuantity(data.product.id)}}
                          >
                            <i className='bx bx-minus'></i>
                          </span>
                          <input
                            type="text"
                            value={data.quantity}
                            min={1}
                            max={10}
                            readOnly={true}
                            onChange={e => (e)}
                          />
                          <span
                            className="plus-btn"
                            onClick={()=>{this.handleAddQuantity(data.product.id)}}
                          >
                            <i className='bx bx-plus'></i>
                          </span>
                        </div>
                      </td>

                      <td className="product-subtotal">
                        <span className="subtotal-amount">{data.product.price * data.quantity} <FormattedMessage id="CURRENCY" /></span>

                        <a href="/#" className="remove btn" onClick={(e)=>{e.preventDefault();this.handleRemove(data.product.id)}}>
                          <i className='bx bx-trash'></i>
                        </a>
                      </td>
                    </tr>
                  )) }
                  {
                    !this.props.products.length && (<tr>
                      <td className="product-thumbnail" colSpan="6">
                        <p><FormattedMessage id="CART.EMPTY" /></p>
                      </td>
                    </tr>)
                  }
                </tbody>
              </table>
            </div>

            <div className="cart-buttons">
              <div className="row justify-content-end">
                <div className="col-lg-6 col-md-6 align-self-end">
                  <div className="cart-totals">
                    <h3><FormattedMessage id="CART.TOTAL" /></h3>

                    <ul>
                      <li><FormattedMessage id="CART.TOTAL_ITEMS" /> <span>{this.props.total}</span></li>
                      <li><FormattedMessage id="CART.TOTAL_PRICE" /> <span>{this.props.totalAmount} <FormattedMessage id="CURRENCY" /></span></li>
                    </ul>

                    <Link to={checkoutRoute.path} className="default-btn">
                      <FormattedMessage id="CART.GO_TO_CHECKOUT" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => state.cart

export default connect(
  mapStateToProps,
  { removeFromCart, addQuantity, subtractQuantity }
)(CartTable)
