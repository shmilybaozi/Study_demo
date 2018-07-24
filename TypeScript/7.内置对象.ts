// ECMAScript 标准提供的内置对象有：
// Boolean  、 Error  、 Date  、 RegExp  等。
// 在 TypeScript 中将变量定义为这些类型：

let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;

// 基本对象: 包括一般对象、函数对象和错误对象。
// Object
// Function
// Boolean
// Symbol
// Error
// EvalError
// InternalError
// RangeError
// ReferenceError
// SyntaxError
// TypeError
// URIError

// 数字和日期对象
// Number
// Math
// Date

// 字符串
// String
// RegExp

// 其他
// arguments

// DOM 和 BOM 的内置对象
// Document、HTMLElement、Event 、NodeList等。
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
// Do something
});