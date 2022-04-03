/*
 * Type System Behavior
 *     What is structural typing?
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 跟 structural typing 相对应的是 nominal typing
 * structural typing 的中心思想是：
 *     两个类型只要它们的成员相互兼容，
 *     那么这两个类型就是兼容的
 */

interface A {
  x: number;
  y: number;
}

interface B {
  x: number;
  y: number;
}

let a: A = { x: 9, y: 9 };
let b: B = { x: 9, y: 9 };

/*
 * A 和 B 除了名字不一样之外，它们的成员是相同的，
 * 即它们是相互兼容的
 */
a = b;
b = a;

export {};
