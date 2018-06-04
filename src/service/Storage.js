const Storage = {
  setLocal(key, value) {
      let val = value
      if (!val) {
          val = ''
      }
      if (typeof value === 'object') {
          val = JSON.stringify(value)
      }
      localStorage.setItem(key, val)
  },
  getLocal(key) {
      const stringVal = localStorage.getItem(key)
      let lastVal = stringVal
      if (stringVal) {
          if ((stringVal.startsWith('{') && stringVal.endsWith('}')) || (stringVal.startsWith('[') && stringVal.endsWith(']'))) {
              try {
                  lastVal = JSON.parse(stringVal)
              } catch (error) {
                  console.log(error)
              }
          }
      }
      return lastVal
  },
  removeLocal(key) {
      localStorage.removeItem(key)
  },
  clearLocal(except) {
      if (except) {
          Object.keys(localStorage).forEach(key => {
              if (!except.includes(key)) {
                  localStorage.removeItem(key)
              }
          })
      } else {
          localStorage.clear()
      }
  },
  setSession(key, value) {
      let val = value
      if (!val) {
          val = ''
      }
      if (typeof value === 'object') {
          val = JSON.stringify(value)
      }
      sessionStorage.setItem(key, val)
  },
  getSession(key) {
      const stringVal = sessionStorage.getItem(key)
      let lastVal = stringVal
      if (stringVal) {
          if ((stringVal.startsWith('{') && stringVal.endsWith('}')) || (stringVal.startsWith('[') && stringVal.endsWith(']'))) {
              try {
                  lastVal = JSON.parse(stringVal)
              } catch (error) {
                  console.log(error)
              }
          }
      }
      return lastVal
  },
  removeSession(key) {
      sessionStorage.removeItem(key)
  },
  clearSession(except) {
      if (except) {
          Object.keys(sessionStorage).forEach(key => {
              if (!except.includes(key)) {
                  sessionStorage.removeItem(key)
              }
          })
      } else {
          sessionStorage.clear()
      }
  }
}

export default Storage
