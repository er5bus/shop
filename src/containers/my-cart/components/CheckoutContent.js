import React from 'react';
import OrderForm from './OrderForm';
import { FormattedMessage } from 'react-intl'


const CheckoutContent = ({ onSubmit=f=>f, products = [], total, totalAmount, disabled }) => {

  return (
    <div className="row">
      <div className="col-lg-6 col-md-12">
        <div className="billing-details order-details">
          <h3 className="title"><FormattedMessage id="ORDER.PERSONAL_DETAILS" /></h3>
          <OrderForm onSubmit={onSubmit} disabled={disabled} />
        </div>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="order-details">
          <h3 className="title"><FormattedMessage id="ORDER.DETAILS" /></h3>

          <div className="order-table table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col"><FormattedMessage id="CART.PRODUCT_NAME" /></th>
                  <th scope="col"><FormattedMessage id="CART.PRODUCT_PRICE" /></th>
                </tr>
              </thead>

              <tbody>
                {products.map((data, idx) => (
                  <tr key={idx}>
                    <td className="product-name">
                      <a href="/#">{data.product.productName}</a>
                    </td>

                    <td className="product-total">
                      <span className="subtotal-amount">{data.product.price * data.quantity} <FormattedMessage id="CURRENCY" /></span>
                    </td>
                  </tr>
                ))}

                { !products.length && <tr>
                  <td colSpan="2" className="product-name">
                    <FormattedMessage id="CART.EMPTY" />
                  </td>
                </tr>
                }
              </tbody>
            </table>
            <table className="table table-bordered mt-5">
              <tbody>
                <tr>
                  <td className="order-subtotal">
                    <span> <FormattedMessage id="CART.TOTAL" /> </span>
                  </td>

                  <td className="order-subtotal-price">
                    <span className="order-subtotal-amount">{total | 0}</span>
                  </td>
                </tr>
                <tr>
                  <td className="total-price">
                    <span><FormattedMessage id="CART.TOTAL_PRICE" /></span>
                  </td>

                  <td className="product-subtotal">
                    <span className="subtotal-amount">{totalAmount | 0} <FormattedMessage id="CURRENCY" /></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutContent;
