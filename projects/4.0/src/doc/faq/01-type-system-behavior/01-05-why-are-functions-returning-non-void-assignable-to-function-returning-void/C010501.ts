/*
 * Type System Behavior
 *     Why are functions returning non-void assignable to function returning void?
 */

console.log("\n-------------------------------------------------- 01");

/*
 * 问题描述：
 *     fn02 的类型是一个函数，其返回类型为 void
 *     fn01 的类型是一个函数，其返回类型为 number
 *     为什么 fn01 可以赋值给 fn02 ？
 * 分析：
 *     fn02 的返回类型为 void
 *     表示在调用 fn02() 时，我不关心它的返回类型，
 *     这时候，即使赋值给它的是一个有返回值的函数，
 *     但是因为我不关心它的返回类型，所以你即使提供了返回类型，
 *     我也不在乎，我也不会使用；
 */

function fn01(): number {
  return 9;
}

const fn02: () => void = fn01;

/*
 * 注意此处，从类型语义上来说，我不关心 fn02() 的返回类型，
 * 所以对我来说，它的返回类型就是 void
 * 而不管它的实际值的返回类型是什么
 */
const x: void = fn02();
console.log(x); // 9

export {};
