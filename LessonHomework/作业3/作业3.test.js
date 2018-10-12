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

// 测试sum()
var textSum = function() {
  ensure(sum([1, 2, 3]) === 6, '[1, 2, 3] is not 6')
}

// 测试product()
var textProduct = function() {
  ensure(product([1, 2, 3, 4]) === 24, '[1, 2, 3, 4] is not 24')
}

// 测试abs()
var textAbs = function() {
  ensure(abs(3) === 3, '3 is not 3')
  ensure(abs(-3) === 3, '-3 is not 3')
  ensure(abs(-9) === 9, '-9 is not 9')
  ensure(abs(0) === 0, '0 is not 0')
}

// 测试average()
var textAverage = function() {
  ensure(average([1, 2, 3]) === 2, '[1, 2, 3] is not 2')
}

// 测试min()
var textMin = function() {
  ensure(min([1, 2, 3, 0]) === 0, '[1, 2, 3, 0] is not 0')
  ensure(min([1, 2, 3]) == 1, '[1, 2, 3] is not 1')
  ensure(min([5, 2, 3]) == 2, '[5, 2, 3] is not 2')
  // 推荐使用ensureEqual()
  ensureEqual(min([5, 2, 4]), 2, '[5, 2, 4] != 2')
}

// 测试sum1()
var textSum1 = function() {
  ensureEqual(sum1(10), -5, 'sum1(10) is not -5')
}

// 测试sum2()
var textSum2 = function() {
  ensureEqual(sum2(10), 7, 'sum2(10) is not 7')
}

// 测试fac()
var textFac = function() {
  ensureEqual(fac(3), 6, 'fac(3) is not 6')
}

// 测试fib()
var textFib= function() {
  ensureEqual(fib(6), 8, 'fib(6) is not 8')
}

// 测试facFor()
var textFacFor = function() {
  ensureEqual(facFor(3), 6, 'facFor(3) is not 6')
}

// 测试apply()
var textApply = function() {
  ensureEqual(apply('+', 1, 2), 3, '1 + 2 != 3')
  ensureEqual(apply('-', 1, 2), -1, '1 - 2 != -1')
  ensureEqual(apply('*', 1, 2), 2, '1 * 2 != 2')
  ensureEqual(apply('/', 4, 2), 2, '4 / 2 != 2')
}

// 测试applyList()
var textApplyList = function() {
  ensureEqual(applyList('-', [3, 4, 2, 1]), -4, '3 - 4 - 2 - 1 ！= -4')
}

// 测试applyCompare()
var textApplyCompare = function() {
  ensure(applyCompare(['==', 3, 3], '3 != 3'))
}

// 测试applyOps()
var textApplyOps = function() {
  ensure(applyOps(['==', 3, 3], '3 != 3'))
  ensureEqual(applyOps(['-', 3, 4, 2, 1]), -4, '3 - 4 - 2 - 1 ！= -4')
}

// 不要在程序最外层运行任何代码, 只应该有定义, 不应该有执行
// 主函数: 在统一的地方执行代码
var __main = function() {
  console.log('主函数执行开始')
  textSum()
  textProduct()
  textAbs()
  textAverage()
  textSum1()
  textSum2()
  textFac()
  textFib()
  textFacFor()
  textApply()
  textApplyList()
  textApplyCompare()
  textApplyOps()
  console.log('主函数执行结束')
}

// 调用, 整个程序只有一个入口, 即: 只有一个调用
__main()