import { ACTIONS } from "./../constants"


export const addToCart = (payload) =>
  ({
    type: ACTIONS.ADD_TO_CART,
    payload,
  })


export const removeFromCart = (payload) =>
  ({
    type: ACTIONS.REMOVE_FROM_CART,
    payload,
  })


export const addQuantity = (payload) => 
  ({
    type: ACTIONS.ADD_QUANTITY,
    payload,
  })


export const subtractQuantity = (payload) =>
  ({
    type: ACTIONS.SUBTRACT_QUANTITY,
    payload,
  })


export const clearCart = () =>
  ({
    type: ACTIONS.CLEAR_THE_CART
  })
