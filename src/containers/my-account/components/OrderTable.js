import React from 'react';
import { padStart } from 'lodash'
import { FormattedMessage } from 'react-intl'

import QuickOrderViewModal from './QuickOrderViewModal'


const OrderTable = ({ orders }) => {

  const [state, setState] = React.useState({ quickViewModal: false, order: null })

  const toggleModal = (order) => {
    setState({
      quickViewModal: !state.quickViewModal,
      order
    })
  }

  return (
    <section className="cart-area ptb-100">
      <div className="container">
          <div className="cart-table table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col"><FormattedMessage id="ORDER.ID" /></th>
                  <th scope="col"><FormattedMessage id="ORDER.STATUS" /></th>
                  <th scope="col"><FormattedMessage id="ORDER.PRICE" /></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                { orders.map((order, idx) => (
                  <tr key={idx}>
                    <td className="product-name">
                      { padStart(order.id,10,'0')}
                    </td>

                    <td className="product-price">
                      <span className="unit-amount">
                        {order.status === 1 && <FormattedMessage id="ORDER.STATUS.PENDING" /> } 
                        {order.status === 2 && <FormattedMessage id="ORDER.STATUS.IN_PROGRESS" /> }
                        {order.status === 3 && <FormattedMessage id="ORDER.STATUS.AVAILABLE" /> }
                        {order.status === 4 && <FormattedMessage id="ORDER.STATUS.EXPIRED" /> }
                        {order.status === 5 && <FormattedMessage id="ORDER.STATUS.PAID" /> }
                        {order.status === 6 && <FormattedMessage id="ORDER.STATUS.CANCELLED" /> }
                        {order.status === 7 && <FormattedMessage id="ORDER.STATUS.REFUNDED" /> }
                      </span>
                    </td>

                    <td className="product-price">
                      <span className="unit-amount">{order.totalCost} <FormattedMessage id="CURRENCY" /></span>
                    </td>

                    <td className="product-details">
                      <button onClick={() => toggleModal(order)} className="btn btn-main btn-sm"><FormattedMessage id="ORDER.MORE_DETAILS" /></button>
                    </td>
                  </tr>
                )) }
                {
                  !orders.length && (<tr>
                    <td className="product-thumbnail" colSpan="6">
                      <p><FormattedMessage id="ORDER.EMPTY" /></p>
                    </td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        {

          (state.quickViewModal && state.order) && <QuickOrderViewModal order={state.order} onClose={toggleModal}  />
        }
      </div>
    </section>
  );
}

export default OrderTable
