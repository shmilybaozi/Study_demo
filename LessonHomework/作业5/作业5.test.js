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

var test_zfill = function() {
  ensure(zfill(1, 4) === '0001', 'zfill 测试 1')
  ensure(zfill(23, 4) === '0023', 'zfill 测试 2')
  ensure(zfill(12345, 4) === '12345', 'zfill 测试 3')
  ensure(zfill(169, 5) === '00169', 'zfill 测试 4')
}

var test_ljust = function() {
  ensure(ljust('gua', 5) === 'gua  ', 'ljust 测试 1')
  ensure(ljust('guagua', 5) === 'guagua', 'ljust 测试 2')
  ensure(ljust('gua', 5, '*') === 'gua**', 'ljust 测试 3')
}

var test_rjust = function() {
  ensure(rjust('gua', 5) === '  gua', 'rjust 测试 1')
  ensure(rjust('guagua', 5) === 'guagua', 'rjust 测试 2')
  ensure(rjust('gua', 5, '*') === '**gua', 'rjust 测试 3')
}

var test_center = function() {
  ensure(center('gua', 5) === ' gua ', 'center 测试 1')
  ensure(center('gua', 5, '*') === '*gua*', 'center 测试 2')
  ensure(center('gw', 5) === ' gw  ', 'center 测试 3')
  ensure(center('gua', 6) === ' gua  ', 'center 测试 4')
}

var test_is_space = function() {
  ensure(is_space(' '), 'center 测试 1')
  ensure(is_space('   '), 'center 测试 2')
  ensure(!is_space(''), 'center 测试 3')
  ensure(!is_space('gua '), 'center 测试 4')
}


var test_is_digit = function () {
  ensure(is_digit('123'), 'is_digit 测试 1')
  ensure(is_digit('0'), 'is_digit 测试 2')
  ensure(!is_digit('  '), 'is_digit 测试 3')
  ensure(!is_digit('1.1'), 'is_digit 测试 4')
  ensure(!is_digit('gua'), 'is_digit 测试 5')
}

var test_strip_left = function () {
  ensure(strip_left('  gua') === 'gua', 'strip_left 测试 1')
  ensure(strip_left(' gua  ') === 'gua  ', 'strip_left 测试 2')
  ensure(strip_left('') === '', 'strip_left 测试 3')
  ensure(strip_left('    ') === '', 'strip_left 测试 4')
  ensure(strip_left('apple') === 'apple', 'strip_left 测试 5')
}

var test_strip_right = function () {
  ensure(strip_right('  gua') === '  gua', 'strip_right 测试 1')
  ensure(strip_right(' gua  ') === ' gua', 'strip_right 测试 2')
  ensure(strip_right('') === '', 'strip_right 测试 3')
  ensure(strip_right('    ') === '', 'strip_right 测试 4')
}

var test_strip = function () {
  ensure(strip('  gua') === 'gua', 'strip 测试 1')
  ensure(strip(' gua  ') === 'gua', 'strip 测试 2')
  ensure(strip('') === '', 'strip 测试 3')
  ensure(strip('    ') === '', 'strip 测试 4')
}

var __main = function() {
  console.log('主函数执行开始')
  test_zfill()
  test_ljust()
  test_rjust()
  test_center()
  test_is_space()
  test_is_digit()
  test_strip_left()
  test_strip_right()
  test_strip()
  console.log('主函数执行结束')
}

__main()