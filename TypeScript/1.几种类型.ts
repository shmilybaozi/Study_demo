// hello
function sayHello(person: string) {
  return 'Hello,' + person
}

let user: string = 'Tom'
console.log(sayHello(user))

// 字符串模板
let myName: string = 'Tom'
let myAge: number = 18
myAge = 19

let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`


// 空值
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function alertName(): void {
alert('My name is Tom');
}
// 声明一个  void  类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null ：
let unusable: void = undefined;


// undefined & null
// undefined 类型的变量只能被赋值为 undefined ，null 类型的变量只能被赋值为 null 。
let u: undefined = undefined;
let n: null = null;
// 与 void 的区别是， undefined  和  null  是所有类型的子类型。
// 也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
// 而 void 类型的变量不能赋值给 number 类型的变量。
let num1: number = undefined;

let u2: undefined;
let num2: number = u2;


// any
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
// 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
// 类型推论 -----> 根据定义时的初始化值来推测变量的类型
// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
let myFavoriteNumber1; // any
let myFavoriteNumber2 = 'seven'; //string
let myFavoriteNumber3 = 7; // number

// 联合类型
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法。

/* function getLength(something: string | number): number {
  return something.length; // 报错
} */

// 上例中， length不是 string 和 number 的共有属性，所以会报错。
// 访问 string 和 number 的共有属性是没问题的：
function getString(something: string | number): string {
return something.toString();
}
// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let myFavoriteNumber4: string | number;
myFavoriteNumber4 = 'seven';
console.log(myFavoriteNumber4.length); // 5
myFavoriteNumber4 = 7;
// console.log(myFavoriteNumber.length); // 编译时报错
