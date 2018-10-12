// 2016/11/29
// 作业 3 答案
//
// 注意, 自行去定义 log 函数(抄)


// 资料 1
// 求数组的和

var sum = function (array) {
  // 先设置一个变量用来存 和
  var s = 0
  // 遍历数组
  for (var i = 0; i < array.length; i++) {
    // 用变量 n 保存元素值
    var n = array[i]
    // 累加到变量 s
    s += n
  }
  // 循环结束, 现在 s 里面存的是数组中所有元素的和了
  return s
}


// 作业 1
// 参数是一个只包含数字的 array
// 求 array 的乘积
// 函数定义是
var product = function (array) {
  // 先设置一个变量用来存 乘积
  var s = 1
  // 遍历数组
  for (var i = 0; i < array.length; i++) {
    // 用变量 n 保存元素值
    var n = array[i]
    // 累加到变量 s
    s *= n
  }
  // 循环结束, 现在 s 里面存的是数组中所有元素的乘积了
  return s
}

// 作业 2
// 返回一个数的绝对值
// 函数定义是
var abs = function (n) {
  if (n < 0) {
    return -n
  }
  return n
}


// 作业 3
// 参数是一个只包含数字的 array
// 求 array 中所有数字的平均数
// 函数定义是
var average = function (array) {
  var average = sum(array) / array.length
  return average
}


// 作业 4
// 参数是一个只包含数字的 array
// 求 array 中最小的数字
// 函数定义是
var min = function (array) {
  // 先设置一个变量用来存 第一个数
  var min = array[0]
  // 遍历数组
  for (var i = 0; i < array.length; i++) {
    // 用变量 n 保存元素值
    var n = array[i]
    // 比较
    if (n < min) {
      min = n
    }
  }
  // 循环结束, 现在 s 里面存的是数组中所有元素的和了
  return min
}

// 作业 5
/*
参数是一个数字 n
返回以下序列的结果
1 - 2 + 3 - 4 + 5 ... n
*/
var sum1 = function (n) {
  // 先设置一个变量用来存 和
  var s = 0
  // 遍历数组
  for (var i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      s -= i
    } else {
      s += i
    }
  }
  // 循环结束, 现在 s 里面存的是数组中所有元素的和了
  return s
}


// 作业 6
/*
参数是一个数字 n
返回以下序列的结果
1 + 2 - 3 + 4 - ... n
*/
var sum2 = function (n) {
  // 先设置一个变量用来存 和
  var s = 1
  // 遍历数组
  for (var i = 2; i <= n; i++) {
    if (i % 2 !== 0) {
      s -= i
    } else {
      s += i
    }
  }
  // 循环结束, 现在 s 里面存的是数组中所有元素的和了
  return s
}


// 作业 7
/*
实现 fac 函数
接受一个参数 n
返回 n 的阶乘, 1 * 2 * 3 * ... * n
*/

// 递归
var fac = function (n) {
  // 如果 n 是 0 返回 1
  // 这是递归的终止条件, 必须要有, 否则就无限递归了
  if (n === 0) {
    return 1
  } else {
    return n * fac(n - 1)
  }
}

// 斐波那契数列 递归
// 1 1 2 3 5 8 ...
var fib = function (n) {
  // 如果 n 是 1 或 2 返回 1
  // 这是递归的终止条件, 必须要有, 否则就无限递归了
  if (n === 1 || n === 2) {
    return 1
  } else {
    return fib(n - 2) + fib(n - 1)
  }
}

// for 循环实现
var facFor = function (n) {
  var s = 1
  for (let i = 1; i <= n; i++) {
    s *= i
  }
  return s
}


/*
注意 下面几题中的参数 op 是 operator(操作符) 的缩写

作业 8
实现 apply 函数
参数如下
op 是 string 类型, 值是 '+' '-' '*' '/' 其中之一
a b 分别是 2 个数字
根据 op 对 a b 运算并返回结果(加减乘除)
*/
var apply = function (op, a, b) {
  switch (op) {
    case '+':
      return a + b
      break;
    case '-':
      return a - b
      break;
    case '*':
      return a * b
      break;
    case '/':
      return a / b
      break;
  }
}


/*
作业 9
实现 applyList 函数
op 是 '+' '-' '*' '/' 其中之一
operands 是一个只包含数字的 array
根据 op 对 operands 中的元素进行运算并返回结果
例如, 下面的调用返回 -4
var n = applyList('-', [3, 4, 2, 1])
log(n)
// 结果是 -4, 用第一个数字减去所有的数字
*/
var applyList = function (op, operands) {
  var f = operands[0]
  for (let i = 1; i < operands.length; i++) {
    var s = operands[i]
    f = apply(op, f, s)
  }
  return f
}


/*
作业 10
实现 applyCompare 函数
参数如下
expression 是一个 array(数组), 包含了 3 个元素
第一个元素是 op, 值是 '>' '<' '==' 其中之一
剩下两个元素分别是 2 个数字
根据 op 对数字运算并返回结果(结果是 true 或者 false)
*/
var applyCompare = function (expression) {
  var op = expression[0]
  var a = expression[1]
  var b = expression[2]
  switch (op) {
    case '>':
      return a > b
      break;
    case '<':
      return a < b
      break;
    case '==':
      return a == b
      break;
  }
}


/*
注意
下面这题做不出来没关系

作业 11
实现 applyOps 函数
参数如下
expression 是一个 array
expression 中第一个元素是上面几题的 op, 剩下的元素是和 op 对应的值
根据 expression 运算并返回结果
*/
var applyOps = function (expression) {
  var op = expression[0]
  if (op == '+' || op == '-' || op == '*' || op == '/') {
    var operands = expression.slice(1)
    return applyList(op, operands)
  } else if (op == '<' || op == '>' || op == '==') {
    return applyCompare(expression)
  }
}

// 注意
// 下次作业起, 会用更标准简练的方式来表示参数类型和说明
// 另外, 下次开始会引入测试这个概念