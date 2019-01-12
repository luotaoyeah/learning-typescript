/*
 * Type System Behavior
 *     Why are function parameters bivariant?
 */

console.log("\n-------------------------------------------------- 01");

class A {
  x: number;
}

class C extends A {
  y: number;
}

class D extends A {
  z: number;
}

function clone(a: A, callback: (a: A) => void): void {}

/*
 * 问题描述：
 *     期望的是：clone() 方法的第一个参数和第二个回调函数的参数的类型一致，
 *     但是此处第一个参数类型是 C，第二个回调函数的参数类型是 D，为什么不报错？
 * 分析：
 *     TS 的类型系统，没有办法显示标注 covariant 和 contravariant，
 *     因此在这种情况下，TS 采取了宽松策略
 */
clone(new C(), (d: D) => {});

console.log("\n-------------------------------------------------- 02");
/*
 * 如下，fn01 和 fn02 可以相互赋值，
 * 即允许协变（covariant），也允许逆变（contravariant），即所谓的双变（bivariant）
 */
let fn01 = (d: D) => void {};
let fn02 = (a: A) => void {};
fn01 = fn02;
fn02 = fn01;

export { A, C, D };
