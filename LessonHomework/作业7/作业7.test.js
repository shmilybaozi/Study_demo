// 定义我们的 log 函数
var log = function () {
  console.log.apply(console, arguments)
}

// 判断条件符合
var ensure = function (condition, message) {
  if (!condition) {
    log('测试失败: ', message)
  }
}

// 判断数字相等
var ensureEqual = function (a, b, message) {
  if (a != b) {
    log(`测试失败, ${a} 不等于 ${b}, ${message}`)
  }
}

var test_join = function () {
  ensure(join('#', ['hello', 'gua']) == 'hello#gua', 'join 测试 1')
  ensure(join(' ', ['hello', 'gua']) == 'hello gua', 'join 测试 2')
  ensure(join('\n', ['multi', 'line', 'string']) == 'multi\nline\nstring', 'join 测试 3')
}

var test_split = function () {
  ensure(split('1 2 3') == ['1', '2', '3'], 'split 测试 1')
  ensure(split('a=b&c=d', '&') == ['a=b', 'c=d'], 'split 测试 2')
}

var __main = function () {
  console.log('主函数执行开始')
  test_join()
  test_split()
  console.log('主函数执行结束')
}

__main()