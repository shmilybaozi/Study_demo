// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
function createArray<T = string>(length: number, value: T):Array<T> {
  let res:T[] = []
  for (let i = 0; i < length; i++) {
    res[i] = value
  }
  return res
}

createArray<string>(3, 'x') // ['x', 'x', 'x']
createArray<number>(2, 8) // [8,8]
// 也可以不手动指定，而让类型推论自动推算出来
createArray(3, true)

// 定义泛型的时候，可以一次定义多个类型参数：
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
swap([7, 'seven']); // ['seven', 7]

// 泛型约束
// 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法
// 这时，我们可以对泛型进行约束，只允许这个函数传入那些包含 要使用的 属性的变量
interface Lengthwise {
  length: number
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}
// 使用了 extends 约束了泛型 T 必须符合接口 Lengthwise 的形状，也就是必须包含 length 属性。

// 多个类型参数之间也可以互相约束：
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let i in source) {
    target[i] = (<T>source)[i]
  }
  return target
}
let x = { a: 1, b: 2, c: 3, d: 4 }
copyFields(x, { b: 10, d: 20 })
// 上例中，我们使用了两个类型参数，其中要求 T 继承 U ，这样就保证了 U 上不会出现 T 中不存在的字段。

// 泛型参数的默认类型
// 当使用泛型时没有在代码中直接指定类型参数<T = string>，从实际值参数中也无法推测出时，这个默认类型就会起作用
// function createArray<T = string>(length: number, value: T):Array<T>