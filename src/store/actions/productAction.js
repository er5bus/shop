import { ACTIONS, ENDPOINTS, CALL_API, HTTP_METHODS } from "./../constants"


export const fetchProducts = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_PRODUCTS_INIT,
        success: ACTIONS.FETCH_PRODUCTS_SUCCEDED,
        fail: ACTIONS.FETCH_PRODUCTS_FAILED
      }, 
      endpoint: ENDPOINTS.FETCH_PRODUCTS,
      params,
      method: HTTP_METHODS.GET
    }
  })


export const fetchCategories = () =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_CATEGORIES_INIT,
        success: ACTIONS.FETCH_CATEGORIES_SUCCEDED,
        fail: ACTIONS.FETCH_CATEGORIES_FAILED
      },
      endpoint: ENDPOINTS.FETCH_CATEGORIES,
      method: HTTP_METHODS.GET
    }
  })


export const filterProducts = (keyword) => 
  ({
    type: ACTIONS.FILTER_PRODUCTS,
    payload: keyword
  })



export const fetchProduct = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_PRODUCT_INIT,
        success: ACTIONS.FETCH_PRODUCT_SUCCEDED,
        fail: ACTIONS.FETCH_PRODUCT_FAILED
      },
      endpoint: ENDPOINTS.FETCH_PRODUCT.replace(":param", param),
      method: HTTP_METHODS.GET
    }
  })


export const checkout = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CHECKOUT_ORDER_INIT,
        success: ACTIONS.CHECKOUT_ORDER_SUCCEDED,
        fail: ACTIONS.CHECKOUT_ORDER_FAILED
      },
      auth: true,
      endpoint: ENDPOINTS.CHECKOUT_ORDER,
      method: HTTP_METHODS.POST
    }
  })
