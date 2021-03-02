import { ACTIONS } from "./../constants"


const initialState = { 
  user: null,
  orders: [],
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
    
    case ACTIONS.FETCH_USER_INFORMATION_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_USER_INFORMATION_SUCCEDED : {
      return { ...state, isFetching: false, user: payload }
    }
    case ACTIONS.FETCH_USER_INFORMATION_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.FETCH_USER_ORDERS_INIT : {
      return { ...state, isFetching: true, error: null }
    }
    case ACTIONS.FETCH_USER_ORDERS_SUCCEDED : {
      return { ...state, isFetching: false, orders: payload.results}
    }
    case ACTIONS.FETCH_USER_ORDERS_FAILED : {
      return { ...state, isFetching: false, error: payload }
    }

    case ACTIONS.UPDATE_USER_INFORMATION_INIT : {
      return { ...state, isFetching: true, success: false, error: null }
    }
    case ACTIONS.UPDATE_USER_INFORMATION_SUCCEDED : {
      return { ...state, isFetching: false, success: true, user: payload }
    }
    case ACTIONS.UPDATE_USER_INFORMATION_FAILED : {
      return { ...state, isFetching: false, success: false, error: payload }
    }
   
    default: {
      return state
    }
  }
}
