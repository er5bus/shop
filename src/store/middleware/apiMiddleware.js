import { CALL_API, API_BASE_URL } from './../constants'
import { APIRequest } from './../../utils'
import { PURGE } from "redux-persist"


const client = new APIRequest(API_BASE_URL)


const api = store => next => async action => {
  if (!action || action.type !== CALL_API ){
    return next(action)
  }

  const { actions, endpoint, method, auth, params = {}, extraData={} } = action.meta

  const { token } = store.getState().authentication || {}

  console.log(token)

  const dispatch = dispatchActions(next)

  if (actions.init){
    dispatch(actions.init, params)
  }

  let headers = {}
  if (token && token.access) {
    headers = { Authorization: `Bearer ${token.access}`}
  }

  client.sendRequest(method, endpoint, action.payload, headers, params)
    .then(resp => dispatch(actions.success, resp.data, extraData))
    .catch(err => {
      if (err.response && err.response.status === 401 && auth){
        next({
          type: PURGE,
          result: () => null
        })
      }else {
        dispatch(actions.fail, err.response || {})
      }
    })
}


const dispatchActions = next => (action, payload = {}) => {
  if (!Array.isArray(action)) return next({type: action, payload})
  return action.map(a =>  next({type: a, payload}));
}

export default api
