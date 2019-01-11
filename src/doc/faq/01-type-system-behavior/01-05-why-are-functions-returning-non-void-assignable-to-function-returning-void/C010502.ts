/*
 * Type System Behavior
 *     Why are functions returning non-void assignable to function returning void?
 *         common js pattern
 */

console.log("\n-------------------------------------------------- 01");

/*
 * 这种模式在 JS 中的常见使用场景如下：
 *     forEach() 的回调参数的返回值为 void
 *     但是此处实际的返回类型为 number
 *     因为 push() 方法返回的是 number 类型
 */

const arr02: Array<number> = [];
[1, 2, 3].forEach(i => arr02.push(i));
console.log(arr02);

export {};
