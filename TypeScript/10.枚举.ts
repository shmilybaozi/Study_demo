// 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
enum WEEK {Sun, Mon, Tue, Wed, Thu, Fri, Sat} // 一般名称大写
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
// Sun === 0，Mon === 1，Tue === 2...

// 我们也可以给枚举项手动赋值：
enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};
// 未手动赋值的枚举项会接着上一个枚举项递增。 Tue === 2，Wed === 3...

// 如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的
// 所以使用的时候需要注意，最好不要出现这种覆盖的情况。

// 手动赋值的枚举项可以不是数字，此时需要使用类型断言来让tsc无视类型检查 (编译出的js仍然是可用的)
enum DAYS {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S"};

// 手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为1 

// 枚举项有两种类型：常数项（constant member）和计算所得项（computed member）。

// 常数枚举是使用  const enum  定义的枚举类型
const enum Directions {
  Up,
  Down,
  Left,
  Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// 编译结果
// var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];

// 外部枚举（Ambient Enums）是使用  declare enum  定义的枚举类型
declare enum Directions2 {
  Up,
  Down,
  Left,
  Right
  }
  let directions2 = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

  // 之前提到过， declare  定义的类型只会用于编译时的检查，编译结果中会被删除。
  // 上例的编译结果是：
  var directions3 = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
  // 外部枚举与声明语句一样，常出现在声明文件中。


