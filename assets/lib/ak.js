import axios from 'axios'
import moment from 'moment'
// import router from '@/router/index'
const qs = require('qs')
const urlPrefix = '/api/aklab/'

let ak = {}

const interceptors = () => {
  axios.interceptors.request.use((config) => {
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  axios.interceptors.response.use((response) => {
    if (response.data.code === 2) {
    //   router.replace('/login')
    }
    return response
  }, function (error) {
    if (error.response.status > 500) {
    //   router.replace('/err500')
    }
    return Promise.reject(error)
  })
}

const notifyWarning = (self, res) => {
  self.$notify.warning({
    title: res.status,
    message: res.data.error ? res.data.error : '连接失败',
    duration: 6000
  })
}

ak.getUrlDataParams = (getfix, paramsStr, isShowError, self, callback) => {
  const url = paramsStr === '' ? (urlPrefix + getfix) : (urlPrefix + getfix + '?' + paramsStr)
  interceptors()
  axios.get(url)
    .then(res => {
      callback(res)
    }).catch(error => {
      if (error.response) {
        if (isShowError) {
          notifyWarning(self, error.response)
        }
        callback(error.response)
      } else {
        callback(error, true)
      }
    })
}

ak.postUrlData = (postfix, data, self, callback) => {
  interceptors()
  axios.post(urlPrefix + postfix, qs.stringify(data))
    .then(res => {
      callback(res)
    })
    .catch(error => {
      if (error.response) {
        notifyWarning(self, error.response)
        callback(error.response)
      } else {
        self.$notify.error({
          title: 'Error',
          message: error
        })
        callback(error, true)
      }
    })
}

ak.formatDate = (date) => {
  return moment(date).format('YYYY/MM/DD h:mm:ss')
}

export default ak
