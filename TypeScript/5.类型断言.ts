// 语法
// <类型>值 或 值 as 类型

function getLength1(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}

function getLength2(something: string | number): number {
  if ((something as string).length) {
    return (something as string).length;
  } else {
    return something.toString().length;
  }
}
// 在 tsx 语法（React 的 jsx 语法的 ts 版）中必须用后一种
// 类型断言的用法如上，在需要断言的变量前加上 <Type> 即可。
// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的