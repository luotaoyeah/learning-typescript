/*
 * Decorators
 *     Decorators
 */

console.log("\n-------------------------------------------------- 01");
/*
 * decorator 是一种特殊的声明（declaration），语法形式为：@exp
 * 其中 exp 是一个 function，会在运行时期执行
 * decorator 可以用来装饰：
 *     class
 *     method
 *     accessor
 *     property
 *     parameter
 */

/*
 * decorator 的定义就是一个 function
 */
function Dec01(Ctor: Function) {
  console.log(Ctor.name); // C
}

/*
 * decorator 可以用来装饰 class
 */
@Dec01
class C {}

export {};
