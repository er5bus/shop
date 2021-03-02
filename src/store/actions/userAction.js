import { ACTIONS, ENDPOINTS, CALL_API, HTTP_METHODS } from "./../constants"


export const fetchMyOrders = (param) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_USER_ORDERS_INIT,
        success: ACTIONS.FETCH_USER_ORDERS_SUCCEDED,
        fail: ACTIONS.FETCH_USER_ORDERS_FAILED
      }, 
      endpoint: ENDPOINTS.MY_ORDERS.replace(":param", param),
      method: HTTP_METHODS.GET
    },
    auth: true
  })


export const updateUser = (param, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.UPDATE_USER_INFORMATION_INIT,
        success: ACTIONS.UPDATE_USER_INFORMATION_SUCCEDED,
        fail: ACTIONS.UPDATE_USER_INFORMATION_FAILED
      },
      endpoint: ENDPOINTS.UPDATE_USER.replace(":param", param),
      method: HTTP_METHODS.PATCH
    },
    auth: true
  })
