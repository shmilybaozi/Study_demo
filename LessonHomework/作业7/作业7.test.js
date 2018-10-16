// 判断条件符合
var ensure = function (condition, message) {
  if (!condition) {
    console.log(message)
  }
}

// 判断数字相等
var ensureEqual = function (a, b, message) {
  if (a != b) {
    console.log(message,'| a:', a, 'b:', b)
  }
}

var __main = function() {
  console.log('主函数执行开始')

  console.log('主函数执行结束')
}

__main()