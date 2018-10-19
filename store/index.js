import { createStore, applyMiddleware } from 'redux'
// promiseMiddleware 是一个中间件，方便后面 action 做异步处理
import promiseMiddleware from 'redux-promise'
// rootReducer 是一个纯函数，用于接受 Action 和当前 State 作为参数，返回一个新的 State
import rootReducer from './reducers'

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))
  return store
}
