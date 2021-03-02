import { ACTIONS, ENDPOINTS, CALL_API, HTTP_METHODS } from "./../constants"


export const contactUs = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CONTACT_US_INIT,
        success: ACTIONS.CONTACT_US_SUCCEDED,
        fail: ACTIONS.CONTACT_US_FAILED
      }, 
      endpoint: ENDPOINTS.CONTACT_US,
      method: HTTP_METHODS.GET //POST
    }
  })
