// 用于测试的套路, 照抄即可
var ensure = function (condition, message) {
  if (!condition) {
    console.log(message)
  }
}

// 测试sum()
var textSum = function() {
  ensure(sum([1, 2, 3]) === 6, '[1, 2, 3] is not 6')
}

// 不要在程序最外层运行任何代码, 只应该有定义, 不应该有执行
// 主函数: 在统一的地方执行代码
var __main = function() {
  textSum()
}

// 调用, 整个程序只有一个入口, 即: 只有一个调用
__main()