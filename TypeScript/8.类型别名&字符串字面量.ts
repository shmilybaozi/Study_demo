// 类型别名用来给一个类型起个新名字。
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}
// 类型别名常用于联合类型

type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}
// event只能是 'click' | 'scroll' | 'mousemove'

// 注意，类型别名与字符串字面量类型都是使用 type 进行定义