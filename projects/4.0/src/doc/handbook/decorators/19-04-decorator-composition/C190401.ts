/*
 * Decorators
 *     Decorator Composition
 */

console.log("\n-------------------------------------------------- 01");

/*
 * 同一个对象上可以使用多个 decorator，如：@f @g x
 * 此时，多个 decorator 的执行顺序是：
 *      从上往下进行解析
 *      从下往上进行执行
 */

function DecFactory01() {
  console.log("DEC01 解析");
  return function(Ctor: Function) {
    console.log("DEC01 执行");
  };
}

function DecFactory02() {
  console.log("DEC02 解析");
  return function(Ctor: Function) {
    console.log("DEC02 执行");
  };
}

// DEC01 解析
// DEC02 解析
// DEC02 执行
// DEC01 执行
@DecFactory01()
@DecFactory02()
class C {}

export {};
