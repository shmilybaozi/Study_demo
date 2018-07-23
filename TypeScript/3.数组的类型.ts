// 「类型 + 方括号」表示法
let fibonacci1: number[] = [1, 1, 2, 3, 5];

// 数组泛型
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];

// 用接口表示数组
interface NumberArray {
  [index: number]: number;
}
let fibonacci3: NumberArray = [1, 1, 2, 3, 5];

// any 在数组中的应用
// 一个比较常见的做法是，用 any 表示数组中允许出现任意类型：
let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];

// 类数组
// 事实上常见的类数组都有自己的接口定义，如 IArguments , NodeList , HTMLCollection 等
// 详见内置对象