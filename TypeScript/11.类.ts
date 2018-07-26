// public  修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是public的
// private  修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected  修饰的属性或方法是受保护的，它和private类似，区别是它在子类中也是允许被访问的
class Animal {
   protected name: string
   public constructor(name: string) {
     this.name = name
   }
   public sayHi(): string{
    return `My name is ${this.name}`
  }
 }
 let a = new Animal('jack')

//  console.log(a.name) public&private 都不允许构造函数外部访问

// protected 在子类中也是允许被访问的
class Cat extends Animal {
  constructor(name: string) {
    super(name)
    console.log(this.name)
  }
}

// abstract  用于定义抽象类和其中的抽象方法。
// 什么是抽象类？

// 抽象类是不允许被实例化的
abstract class Person {
  public name: string
  public constructor(name: string) {
    this.name = name
  }
  public abstract sayHi()
}

// 抽象类中的抽象方法 必须 被子类实现
class Student extends Person {
  public name: string
  public constructor(name: string) {
    super(name)
  }
  public sayHi(): string {
    return `My name is ${this.name}`;
  }
}