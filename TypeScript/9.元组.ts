// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
let tuple1: [string, number];
tuple1[0] = 'Xcat Liu';
tuple1[1] = 25;

tuple1[0].slice(1);
tuple1[1].toFixed(2);

// 对应位置的类型必须一一对应
// 当直接对元组类型的变量进行初始化或者赋值的时候，需要提供 所有 元组类型中指定的项。

// 越界的元素
// 当赋值给越界的元素时，它类型会被限制为元组中每个类型的联合类型：

let tuple2: [string, number];
// tuple2 = ['Xcat Liu', 25, 'http://xcatliu.com/'];
// 上面的例子中，数组的第三项满足联合类型 string | number。
// 'http://xcatliu.com/'的类型是联合类型 string | number，只能访问此联合类型的所有类型里共有的属性或方法。

tuple1.push('http://xcatliu.com/');
// tuple1.push(true); 
// 只能传 string | number到元组中