import axios from 'axios'
import Vue from 'vue'
// 需研究一下 vuex 进行完善
import store from '@/store'
import * as types from '@/store/types'
import router from '@/router'
const baseUrl: string = process.env.HOST ? process.env.HOST : '/'

export default () => {
  const service = axios.create({
    // 默认请求地址
    baseURL: baseUrl,
    // 默认请求超过时间
    timeout: 10000
  })

  // 默认 post 请求头
  service.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded;charset=UTF-8'

  // http request 请求拦截
  service.interceptors.request.use(
    (config: any) => {
      // 每次发送请求之前判断 vuex 中是否存在 token
      // 如果存在，则统一在 http 请求的 header 都加上 token，这样后台根据 token 判断你的登录情况
      // 即使本地存在 token，也有可能 token 是过期的，所以在响应拦截器中要对返回状态进行判断
      if (store.state.token) {
        config.headers.Authorization = `token ${store.state.token}`
      }
      return config
    },
    (error: any) => {
      // 对请求错误做些什么
      return Promise.reject(error)
    }
  )

  // http response 响应拦截器
  service.interceptors.response.use(
    (response: any) => {
      const data = response.data
      const status = response.status
      if (status !== 200) {
        return null
      } else {
        if (data.error) {
          if (data.error.errorCode) {
            return null
          }
          return null
        }
        return response
      }
    },
    (error: any) => {
      // 错误的请求结果处理，这里的代码根据后台的状态码来决定错误的输出信息
      if (error && error.response) {
        switch (error.response.status) {
          case 400:
            error.message = '400错误请求'
            break
          case 401:
            error.message = '401未授权，请重新登录'
            // 401 清除token信息并跳转到登录页面
            store.commit(types.LOGOUT)
            // 只有在当前路由不是登录页面才跳转
            if (router.currentRoute.path !== 'login') {
              router.replace({
                path: 'login',
                query: { redirect: router.currentRoute.path }
              })
            }
            break
          case 403:
            error.message = '403拒绝访问'
            break
          case 404:
            error.message = '404请求错误,未找到该资源'
            break
          case 405:
            error.message = '405请求方法未允许'
            break
          case 408:
            error.message = '408请求超时'
            break
          case 500:
            error.message = '500服务器端出错'
            break
          case 501:
            error.message = '501网络未实现'
            break
          case 502:
            error.message = '502网络错误'
            break
          case 503:
            error.message = '503服务不可用'
            break
          case 504:
            error.message = '504网络超时'
            break
          case 505:
            error.message = '505http版本不支持该请求'
            break
          default:
            error.message = `连接错误${error.response.status}`
        }
      } else {
        error.message = '连接到服务器失败'
      }
      return Promise.reject(error)
    }
  )
  return service
}

export { baseUrl }
