import { ACTIONS } from "./../constants"
import { uniqBy } from 'lodash'

const initialState = { 
  products: [],
  categories: [],
  searchTerm: "",
  hasMore: true,
  product: null,
  totalItems: 0,
  totalPages: 0,
  currentPage: 0,
  isFetching: false, 
  isLoading: false,
  success: false, 
  error: null 
}


export default (state = initialState, action) => {
  
  const { payload, type } = action
  
  switch (type) {

    case ACTIONS.CLEAR_ERROR : {
      return { ...state, success: false, error: null }
    }
    
    case ACTIONS.FETCH_PRODUCTS_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_PRODUCTS_SUCCEDED : {
      const { results = [], count: totalItems = 0, totalPages = 1 } = payload
      return { 
        ...state, 
        isFetching: false, 
        hasMore: results.length === 10, 
        products: uniqBy([ ...state.products, ...results], 'id'), 
        totalItems, 
        currentPage: results.length === 10 ? state.currentPage + 1 : state.currentPage, 
        totalPages 
      }
    }
    case ACTIONS.FETCH_PRODUCTS_FAILED : {
      return { ...state, isFetching: false, hasMore: false, error: payload }
    }

    case ACTIONS.FETCH_PRODUCT_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_PRODUCT_SUCCEDED : {
      return { ...state, isFetching: false, product: payload }
    }
    case ACTIONS.FETCH_PRODUCT_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.FETCH_CATEGORIES_INIT : {
      return { ...state, error: null }
    }
    case ACTIONS.FETCH_CATEGORIES_SUCCEDED : {
      return { ...state, categories: payload }
    }
    case ACTIONS.FETCH_CATEGORIES_FAILED : {
      return { ...state, error: payload }
    }

    case ACTIONS.FILTER_PRODUCTS : {
      return { ...state, searchTerm: payload, hasMore: true }
    }
  
    case ACTIONS.CHECKOUT_ORDER_INIT : {
      return { ...state, isFetching: true, success: false, error: null }
    }
    case ACTIONS.CHECKOUT_ORDER_SUCCEDED : {
      return { ...state, isFetching: false, success: true }
    }
    case ACTIONS.CHECKOUT_ORDER_FAILED : {
      return { ...state, isFetching: false, success: false, error: payload }
    }
   
    default: {
      return state
    }
  }
}
