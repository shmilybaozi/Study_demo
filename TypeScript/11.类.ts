// public  修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是public的
// private  修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected  修饰的属性或方法是受保护的，它和private类似，区别是它在子类中也是允许被访问的
class Animal {
   protected name
   public constructor(name) {
     this.name = name
   }
 }
 let a = new Animal('jack')

//  console.log(a.name) public&private 都不允许构造函数外部访问

// protected 在子类中也是允许被访问的
class Cat extends Animal {
  constructor(name) {
    super(name)
    console.log(this.name)
  }
}

