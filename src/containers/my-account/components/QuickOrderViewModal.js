import React from 'react';
import { FormattedMessage } from 'react-intl'


const QuickOrderViewModal = ({ order, onClose=f=>f }) => {
  return (
    <div className={`modal fade productsQuickView active`}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <button type="button" className="close" onClick={onClose}>
            <span aria-hidden="true">
              <i className='bx bx-x'></i>
            </span>
          </button>

          <div className="row align-items-center">
            <h3 className="pb-5"> <FormattedMessage id="ORDER.PRODUCT_LIST" /> </h3>
            <div className="cart-table table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col"><FormattedMessage id="CART.PRODUCT" /></th>
                    {/*<th scope="col"><FormattedMessage id="CART.PRODUCT_NAME" /></th>*/}
                    <th scope="col"><FormattedMessage id="CART.PRODUCT_PRICE" /></th>
                    <th scope="col"><FormattedMessage id="CART.PRODUCT_QUANTITY" /></th>
                    <th scope="col"><FormattedMessage id="CART.TOTAL_PRICE" /></th>
                  </tr>
                </thead>

                <tbody>
                  { order.items.map((data, idx) => (
                    <tr key={idx}>
                      {/*<td className="product-thumbnail">
                        <img width="60" src={data.product.productImage} alt="item" />
                      </td>*/}

                      <td className="product-name">
                        {data.product.productName}
                      </td>

                      <td className="product-price">
                        <span className="unit-amount">{data.price} <FormattedMessage id="CURRENCY" /></span>
                      </td>

                      <td className="product-quantity">
                        {data.quantity}
                      </td>

                      <td className="product-subtotal">
                        <span className="subtotal-amount">{data.cost} <FormattedMessage id="CURRENCY" /></span>

                      </td>
                    </tr>
                  )) }
                  {
                    !order.items.length && (<tr>
                      <td className="product-thumbnail" colSpan="6">
                        <p><FormattedMessage id="CART.EMPTY" /></p>
                      </td>
                    </tr>)
                  }
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default QuickOrderViewModal
