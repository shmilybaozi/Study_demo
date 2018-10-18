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

// 判断 array 是否相等
var ensureArrEqual = function (arr1, arr2, message) {
  for (let i = 0; i < arr1.length; i++) {
    const a1 = arr1[i]
    const a2 = arr2[i]
    if (a1 !== a2) {
      return log(`测试失败, ${arr1} 不等于 ${arr2}, ${message}`)
    }
  }
}

var test_join = function () {
  ensure(join('#', ['hello', 'gua']) == 'hello#gua', 'join 测试 1')
  ensure(join(' ', ['hello', 'gua']) == 'hello gua', 'join 测试 2')
  ensure(join('\n', ['multi', 'line', 'string']) == 'multi\nline\nstring', 'join 测试 3')
}

// NOTE:测试 array 是否相等得自己写一个函数用循环来跑
var test_split = function () {
  /* ensureEqual(split('1 2 3'), ['1', '2', '3'], 'split 测试 1')
  ensureEqual(split('a=b&c=d', '&'), ['a=b', 'c=d'], 'split 测试 2') */
  ensureArrEqual(split('1 2 3'), ['1', '2', '3'], 'split 测试 1')
  ensureArrEqual(split('a=b&c=d', '&'), ['a=b', 'c=d'], 'split 测试 2')
}

var test_replaceAll = function () {
  ensureEqual(replaceAll('helHU', 'HU', 'lo'), 'hello', 'replaceAll 测试1')
}

var __main = function () {
  console.log('主函数执行开始')
  test_join()
  test_split()
  test_replaceAll()
  console.log('主函数执行结束')
}

__main()