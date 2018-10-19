import { ASYNC_INCREMENT } from '../types/counter'
import { createAction } from 'redux-actions'

// 放置需要异步处理数据的方法
// 通过 createAction 创建一个 action
// 该方法主要有两个参数，第一个参数 type 表示 action 的类型
// 第二个参数 payloadCreator 是一个 function，处理并返回需要的 payload
// 如果空缺，会使用默认方法。

export const asyncInc = createAction(ASYNC_INCREMENT, () => {
  return new Promise(resolve => { 
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
})
