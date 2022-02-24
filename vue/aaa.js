var name = '小红乘法运算';
var age = 18;
var flag = true;
function de(a, b) {
  return a * b;
}
// 1.导出方式一
export { flag, a, b }
// 2.导出方式二
export var num1 = 20;
export var item = 'xixi';

// 3.导出方式三 函数/类
export function fun1(a, b, ...args) {
  return a + b + c + d;
}

export class Person {
  run() {
    console.log('类');
  }
}
// 4. export default
// 开发中此功能由使用者命名时 使用default 
// 但开发中同一模块只能有一个default 此时导出函数也无需命名
export default function (...args) {
  console.log('default function');
}
