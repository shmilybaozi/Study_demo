// 函数声明（Function Declaration）
function sum(x: number, y: number): number {
  return x + y;
}
// 函数表达式（Function Expression）
let mySum1 = function (x: number, y: number): number {
  return x + y;
};
// 这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，
// 而等号左边的 mySum ，是通过赋值操作进行类型推论而推断出来的。如
// 果需要我们手动给 mySum 添加类型，则应该是这样：
let mySum2: (x: number, y: number) => number = function (x: number
, y: number): number {
return x + y;
};

// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
// 参数会进行签名检查 -----> 个数和类型都要一致才能编译成功

// 可选参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

// 注意，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了
// 参数带有默认值就不受「可选参数必须接在必需参数后面」的限制

// 剩余参数
function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
    array.push(item);
  });
}
let a = [];
push(a, 1, 2, 3);

// 注意，rest 参数只能是最后一个参数

// 重载
// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}
// 上例中，我们重复定义了多次函数  reverse  ，前几次都是函数定义，最后一次是函数实现。
// 注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。