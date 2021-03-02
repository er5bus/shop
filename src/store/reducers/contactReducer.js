import { ACTIONS } from "./../constants"


const initialState = { 
  isLoading: false, 
  success: false, 
  error: null 
}


export default (state = initialState, action) => {
  
  const { payload, type } = action
  
  switch (type) {

    case ACTIONS.CLEAR_ERROR : {
      return { ...state, ...initialState }
    }
    
    case ACTIONS.CONTACT_US_INIT : {
      return { ...state, isLoading: true, success: false, error: null }
    }
    case ACTIONS.CONTACT_US_SUCCEDED : {
      return { ...state, isLoading: false, success: true, error: null }
    }
    case ACTIONS.CONTACT_US_FAILED : {
      return { ...state, isLoading: false, success: false, error: payload }
    }
   
    default: {
      return state
    }
  }
}
