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

// 测试find()
var textFind = function() {
  ensure(find('hello', 'o') != -1, 'hello 没有 o')
  ensure(find('hello', 'a') === -1, 'hello 有 a')
}

// 测试lowercase() & uppercase()
var textLower_Uppercase = function() {
  ensure(lowercase('HELLO') === 'hello', '大写转小写失败')
  ensure(uppercase('hello') === 'HELLO', '小写转大写失败')
}

// 测试lowercase1() & uppercase1()
var textLower_Uppercase1 = function() {
  ensure(lowercase1('HEllo') === 'hello', '大写加小写转小写失败')
  ensure(uppercase1('heLLO') === 'HELLO', '小写加大写转大写失败')
}

// 测试encode1()
var textEncode1 = function() {
  ensure(encode1('afz') === 'bga', '加密失败')
}

// 测试decode1()
var textDecode1 = function() {
  ensure(decode1(encode1('afz'))=== 'afz', '解密失败')
}

var __main = function() {
  console.log('主函数执行开始')
  textFind()
  textLower_Uppercase()
  textLower_Uppercase1()
  textEncode1()
  textDecode1()
  console.log(decode4(code, 3))
  console.log('主函数执行结束')
}

__main()