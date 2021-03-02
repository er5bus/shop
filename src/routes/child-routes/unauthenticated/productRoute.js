import { lazy } from 'react'

const Product = lazy(() =>  import('./../../../containers/product/Product'))
const Products = lazy(() =>  import('./../../../containers/product/Products'))


export const productRoute = {
  path: '/our-product/:param',
  component: Product
}

export const productsRoute = {
  path: '/our-products',
  component: Products
}
