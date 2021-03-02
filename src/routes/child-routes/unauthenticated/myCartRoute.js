import { lazy } from 'react'

const MyCart = lazy(() =>  import('./../../../containers/my-cart/MyCart'))
const Checkout = lazy(() =>  import('./../../../containers/my-cart/Checkout'))


export const myCartRoute = {
  path: '/my-cart',
  component: MyCart
}

export const checkoutRoute = {
  path: '/checkout',
  component: Checkout
}
