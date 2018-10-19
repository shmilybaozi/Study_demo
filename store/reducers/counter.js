import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from '../types/counter'

// 引入了 handleActions 方法用来创建 actions
// handleActions 将多个相关的 reducer 写在一起，方面后期维护
// 也方便后期通过 dispatch 来调用他们更改 state 里面的状态
// 它主要接收两个参数，第一个参数时候个大对象，里面存放多个 reducer
// 第二个参数是初始化的时候 state 的状态值
// 因此，我们一开始就定义了 defaultState

export default handleActions({
  [INCREMENT] (state) {
    return {
      ...state,
      num: state.num + 1
    }
  },
  [DECREMENT] (state) {
    return {
      ...state,
      num: state.num - 1
    }
  },
  [ASYNC_INCREMENT] (state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  }
}, {
  num: 0,
  asyncNum: 0
})
