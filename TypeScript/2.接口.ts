// 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型
interface Person {
  readonly id: number // 只读属性
  name: string 
  age?: number // 可选属性
  [propName: string]: any // 任意属性
}

let tom: Person = {
  id: 89757, 
  name: 'Tom',
  gender: 'male'
}

// 使用 [propName: string] 定义了任意属性取 string 类型的值。
// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性
// 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候

// 对类的一部分行为进行抽象
// 不同类之间可以有一些共有的特性，可以把特性(一般是方法？)提取成接口（interfaces），用 implements 关键字来实现

// 报警器 ---> 防盗门 ---> 门
// 报警器 ---> 车
// 把报警器提取成接口
interface Alarm {
  alert()
}
class Door {

}
class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('SecurityDoor alert')
  }
}

// 一个类可以实现多个接口
interface Light {
  lightOn();
  lightOff();
}
class Car implements Alarm, Light {
  alert() {
    console.log('Car alert')
  }
  lightOn() {
    console.log('Car light on')
  }
  lightOff() {
    console.log('Car light off')
  }
}

// 接口与接口之间可以是继承关系
interface LightableAlarm extends Alarm {
  lightOn()
  lightOff()
}
class Bus implements LightableAlarm {
  alert() {
    console.log('Car alert')
  }
  lightOn() {
    console.log('Car light on')
  }
  lightOff() {
    console.log('Car light off')
  }
}

// 接口也可以继承类
class Point {
  x: number;
  y: number;
}
interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3}