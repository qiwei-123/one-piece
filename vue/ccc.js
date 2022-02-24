// 1.导入一
import { a, b, flag } from './aaa.js';
if (flag) {
  console.log('小红乘法运算');
  console.log((20, 30));
}

// 2.导入二
import { num1, item } from './aaa.js';
console.log('导入成功');
console.log(num1, item);

// 3.导入三
import { fun1 } from './aaa.js'
console.log(fun1(1, 2, 3, 4, 5));

import { Person } from './aaa.js';

// 4.导入四 此时导入无需带{}
import xixi from './aaa.js';
console.log(xixi('嘿嘿'));

// 5.统一全部导入  可将模块中所有变量一一写入{}  寻找变量费时
import { name, age, flag, num1, item } from "module";
// 使用通配符
import * as obj from "./aaa.js";
console.log(obj.flag);
console.log(obj.item);