import {combineReducers} from 'redux'

// thrid party lib reducers
import { reducer as formReducer } from 'redux-form'

// app reducers
import authenticationReducer from './authenticationReducer'
import contactReducer from './contactReducer'
import cartReducer from './cartReducer'
import productReducer from './productReducer'
import userReducer from './userReduer'

// combine app reducers
export default combineReducers({
  form: formReducer,

  authentication: authenticationReducer,
  contact: contactReducer,
  user: userReducer,
  cart: cartReducer,
  product: productReducer
})
