import { ACTIONS } from "./../constants"


const initialState = { 
  products: [],
  total: 0,
  totalAmount: 0
}


export default (state = initialState, action) => {
  
  const { payload, type } = action
  
  switch (type) {

    case ACTIONS.CLEAR_THE_CART : {
      return { ...state, ...initialState }
    }

    case ACTIONS.CHECKOUT_ORDER_SUCCEDED : {
      return { ...state, ...initialState }
    }
    case ACTIONS.ADD_TO_CART : {
      const { quantity = 1, product } = payload
      const oldProduct = state.products.find((item) => item.product.id === product.id)
      const newProduct = oldProduct ? ({ ...oldProduct, quantity: quantity + oldProduct.quantity }) : ({ product, quantity })
      const products = state.products.filter((item) => item.product.id !== product.id )
      const allProducts = [ ...products , newProduct]
      const totalAmount = allProducts.reduce((accumulator, data) => accumulator += data.product.price * data.quantity , 0)
      return { ...state, products: allProducts, total: state.total + quantity, totalAmount }
    }
    case ACTIONS.REMOVE_FROM_CART : {
      const products = state.products.filter((item) => item.product.id !== payload )
      const total = products.reduce((accumulator, item) => accumulator + item.quantity, 0)
      const totalAmount = products.reduce((accumulator, data) => accumulator += data.product.price * data.quantity , 0)
      return { ...state, products , total, totalAmount }
    }

    case ACTIONS.SUBTRACT_QUANTITY : {
      const { quantity = 1, id } = payload
      const products = state.products.reduce((accumulator, item) => {
        const newItem = item
        if (item.product.id === id && item.quantity > quantity ){
          newItem.quantity = newItem.quantity - quantity
        }
        accumulator.push(newItem)
        return accumulator
      }, [])
      const totalAmount = products.reduce((accumulator, data) => accumulator += data.product.price * data.quantity , 0)

      return { ...state, products, total: state.total > quantity ? state.total - quantity : state.total, totalAmount }
    }

    case ACTIONS.ADD_QUANTITY : {
      const { quantity = 1, id } = payload
      const products = state.products.reduce((accumulator, item) => {
        const newItem = item
        if (item.product.id === id){
          newItem.quantity += quantity
        }
        accumulator.push(newItem)
        return accumulator
      }, [])
      const totalAmount = products.reduce((accumulator, data) => accumulator += data.product.price * data.quantity , 0)

      return { ...state, products, total: state.total + quantity, totalAmount }
    }
   
    default: {
      return state
    }
  }
}
