import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { isEmpty } from 'lodash'

import OrderTable from './components/OrderTable'

import { fetchMyOrders } from './../../store/actions'
import {Redirect} from 'react-router-dom'
import {loginRoute} from '../../routes/child-routes'
import PageBanner from '../../components/common/PageBanner'


class MyOrders extends React.Component {

  componentDidMount(){
    const { currentUser } = this.props
    if (!isEmpty(currentUser)){
      this.props.fetchMyOrders(currentUser.id)
      this.timer = setInterval(() => {
        this.props.fetchMyOrders(currentUser.id)
      }, 5000)
    }
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render() {
    const { orders=[], isAuthenticated } = this.props

    if (!isAuthenticated){
      return <Redirect to={loginRoute.path} />
    }
    return (
      <>
        <PageBanner
          pageTitle={<FormattedMessage id="MENU.MY_ORDERS" />}
          activePageText={<FormattedMessage id="MENU.MY_ORDERS" />}
        />

        <OrderTable orders={orders} />
      </>
    )
  }
}


const mapStateToProps = state => ({ ...state.user, ...state.authentication })

export default connect(mapStateToProps, { fetchMyOrders })(MyOrders)
