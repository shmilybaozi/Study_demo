import wepy from 'wepy'

const baseUrl = wepy.$appConfig.baseUrl

export default async (url, data, method = 'POST') => {
  let res = await wepy.request({
    url: baseUrl + url,
    // 有需要的话 所有参数都转成 JSON 形式
    // data: JSON.stringify(data),
    data,
    method,
    // formDate 的方式 传参 给后台, 小程序不能直接使用 new FormData()
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  })
  return res
}

export { baseUrl }
