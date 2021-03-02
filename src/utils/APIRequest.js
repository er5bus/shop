import axios from 'axios'


export class APIRequest {

  constructor(baseURL){
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  sendRequest = (method, url, data = {}, headers = {}, params = {}) =>  this.client.request({
    method,
    data,
    url,
    headers,
    params
  })

}
