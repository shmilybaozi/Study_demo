// 在网页地址中获取 token 等信息
const getTokenFromUrlParams = () => {
  const getParameter = (name: string) => {
    const reg: RegExp = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    const r: RegExpMatchArray | null = window.location.search
      .substr(1)
      .match(reg)
    if (r != null) {
      return r[2]
    }
    return null
  }

  // 将 token 等信息存到 localStorage 中
  const token = getParameter('token')
  if (token) {
    localStorage.setItem('token', token as string)
  }
  const id = getParameter('id')
  if (id) {
    localStorage.setItem('id', id as string)
  }
}

// 获取 token 等信息组成的对象
const getAuthInfo = (): object => {
  return {
    token: localStorage.getItem('token'),
    id: localStorage.getItem('id')
  }
}

// 拼接参数
const parsePostParams = (data: any) => {
  let paramsstr = 'params={'
  for (const name in data) {
    if (data.hasOwnProperty(name)) {
      paramsstr += `"${name}":${JSON.stringify(data[name])},`
    }
  }
  return paramsstr + '}'
}

// 拼接 fromData 参数
const parseFormDataParams = (data: any) => {
  const formData = new FormData()
  for (const name in data) {
    if (data.hasOwnProperty(name)) {
      if (data[name]) {
        formData.append(name, data[name])
      }
    }
  }
  return formData
}

// 将毫秒数时间返回成 'YYYY'-'mm'-'dd' 'hh':'mm':'ss' 时间
const translateTime = (time: any) => {
  const date = new Date(time)
  function addZero(num: number) {
    if (num < 10) {
      return '0' + num
    }
    return num
  }
  return (
    date.getFullYear() +
    '/' +
    addZero(date.getMonth() + 1) +
    '/' +
    addZero(date.getDate()) +
    ' ' +
    +addZero(date.getHours()) +
    ':' +
    addZero(date.getMinutes()) +
    ':' +
    addZero(date.getSeconds())
  )
}

// 把时间转成 YYYY-mm-dd 形式
const translateDate = (dateObj?: Date) => {
  function addZero(num: number) {
    if (num < 10) {
      return '0' + num
    }
    return num
  }
  let date: Date = new Date()
  if (dateObj) {
    date = dateObj
  }
  const year = date.getFullYear()
  const month = addZero(date.getMonth() + 1)
  const day = addZero(date.getDate())
  return `${year}-${month}-${day}`
}

export {
  getTokenFromUrlParams,
  getAuthInfo,
  parsePostParams,
  parseFormDataParams,
  translateTime,
  translateDate
}
