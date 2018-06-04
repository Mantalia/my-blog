import Api from '../constants/Api'
import Storage from './Storage'
// import Validate from './Validate'

const Fetch = {
  http(url, data = {}) {
    if (!data.headers) {
      data.headers = {}
    }
    const result = fetch(url, data).then(res => {
      switch (res.status) {
        case 200:
          return res.json()
        case 401:
          return res.json()
        case 404:
          console.log('404')
          break
        case 500:
          console.log('500')
          break
        default:
          console.log(res.status)
      }
      return res
    })
    return result
  },
  get(url, httpData) {
    const vm = this
    if (httpData) {
      if (url.includes('{0}')) {
        url = url.replace('{0}', httpData)
      } else {
        url += '?'
        Object.keys(httpData).forEach((key, index) => {
          url += `${key}=${httpData[key]}&`
        })
        url = url.substring(0, url.length - 1)
      }
    }
    return vm.http(url)
  },
  post(url, httpData) {
    const vm = this
    const postData = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: ''
    }
    if (httpData) {
      postData.body = JSON.stringify(httpData)
    }
    return vm.http(url, postData)
  },
  put(url, httpData) {
    const vm = this
    const putData = {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: ''
    }
    if (httpData) {
      putData.body = JSON.stringify(httpData)
    }
    return vm.http(url, putData)
  },
  delete(url, httpData) {
    const vm = this
    const delData = {
      method: "DELETE"
    }
    if (url.includes('{0}')) {
      url = url.replace('{0}', httpData)
    } else {
      delData.headers = {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
      delData.body = JSON.stringify(httpData)
    }
    return vm.http(url, delData)
  }
}

export default Fetch