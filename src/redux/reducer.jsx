import { message } from 'antd'
import { REQUEST_SUCCESS, REQUEST_FAIL } from './action'
import i18n from '../i18n'

// 请求数据
export const resData = (state = {}, action = {}) => {
  switch (action.type) {
      case REQUEST_SUCCESS:
          if (action.message) {
              message.success(i18n.translate(action.message))
          }
          return Object.assign({}, state, action)
      case REQUEST_FAIL:
          if (action.message) {
              message.error(i18n.translate(action.message))
          }
          return Object.assign({}, state, action)
      default:
          return state
  }
}