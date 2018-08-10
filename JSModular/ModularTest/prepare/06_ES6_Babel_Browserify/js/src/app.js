// 常规暴露必须用解构赋值的方式引出{}
// 默认暴露可以不用{}
import {foo, bar} from './module1'
import {DATA_ARR} from './module1'
import {fun1, fun2} from './module2'
import person from './module3'

import $ from 'jquery'

$('body').css('background', 'red')

foo()
bar()
console.log(DATA_ARR);
fun1()
fun2()

person.setName('JACK')
console.log(person.name);