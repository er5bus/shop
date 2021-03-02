import { lazy } from 'react'

const MyAccount = lazy(() =>  import('./../../../containers/my-account/MyAccount'))
const MyOrder = lazy(() =>  import('./../../../containers/my-account/MyOrders'))


export const myAccountRoute = {
  path: '/my-account',
  component: MyAccount
}

export const myOrderRoute = {
  path: '/my-order',
  component: MyOrder
}
