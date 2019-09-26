import axios from 'axios'
import qs from 'qs'
import VueGlobal from '../assets/js/vueGlobal'

/**
 * get请求
 * @param url
 * @param params
 */
export const get = (url, params) => { return axios.get(url + qs.stringify(params)).then(res => res.data) }

const postConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
/**
 * post请求
 * @param url
 * @param params
 */
export const post = (url, params) => { return axios.post(url, params, postConfig).then(res => res.data) }

/**
 * 下载请求
 * @param url
 * @param params
 */
export const download = (url, params) => { window.location.href = axios.defaults.baseURL + url + '?' + qs.stringify(params) }

// 1.设置请求头的默认配置
// 前后端联调的时候,后端服务地址
axios.defaults.baseURL = ''
if (process.env.NODE_ENV === 'development') {
  // axios.defaults.baseURL = 'http://10.253.7.232:8888'
}

axios.defaults.withCredentials = true

// 拦截request请求
axios.interceptors.request.use(function (config) {
  // 添加登录token或者其他公共参数
  if (config.data && config.headers['Content-Type'].includes('application/x-www-form-urlencoded')) {
    config.data = qs.stringify(config.data)
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 拦截请求response,在此可做统一的错误提示
axios.interceptors.response.use(function (response) {
  if (response.data && response.status === 200) {
    if (response.data.code === 0) {
      return response
    } else {
      if (response.data.code === 401) { // 登录token失效
        // 跳转登录页
        return Promise.reject(response.data)
      } else {
        VueGlobal.notifyWarn(response.data.msg)
        return Promise.reject(response.data)
      }
    }
  } else {
    VueGlobal.notifyWarn(response.statusText)
    return Promise.reject(new Error(response))
  }
}, function (error) {
  VueGlobal.notifyWarn(error.message)
  return Promise.reject(error)
})

export default axios
