// 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型
interface Person {
  readonly id: number; // 只读属性
  name: string; 
  age?: number; // 可选属性
  [propName: string]: any; // 任意属性
}

let tom: Person = {
  id: 89757, 
  name: 'Tom',
  gender: 'male'
};

// 使用 [propName: string] 定义了任意属性取 string 类型的值。
// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性
// 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候

