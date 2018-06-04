import Api from '../constants/Api'
import Fetch from '../service/Fetch'

export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
export const REQUEST_FAIL = 'REQUEST_FAIL'

// 请求成功
const requestSuccess = function(params, json, msg) {
  return {
    type: REQUEST_SUCCESS,
    params,
    json,
    message: msg && msg.success,
    time: Date.now()
  }
}

// 请求失败
const requestFail = function(params, json, msg) {
  return {
    type: REQUEST_FAIL,
    params,
    code: json.code,
    error: json.status || 200,
    message: json.message || json.msg || (msg && msg.error),
    time: Date.now()
  }
}

// 请求模板
const requestTemp = function(method, url, params, msg) {
  return (dispatch) => {
    return Fetch[method](url, params)
      .then(json => {
        if (json.status) {
          dispatch(requestFail(params, json))
        } else {
          if (!json.code || (json.code && json.code === '0')) {
            dispatch(requestSuccess(params, json, msg))
          } else {
            dispatch(requestFail(params, json, msg))
          }
        }
      })
  }
}

// 获取用户名
export const getUserInfo = (params, msg) => requestTemp('get', Api.USER_INFO, params, msg)