import { combineReducers } from 'redux'
import counter from './counter'

// 首先将 counter 等模块分别引入进来
// 通过 redux 定义的 combineReducers 函数
// 将所有的 reducers 合并成一个整体，方便我们后面对其进行管理

export default combineReducers({
  counter
})
