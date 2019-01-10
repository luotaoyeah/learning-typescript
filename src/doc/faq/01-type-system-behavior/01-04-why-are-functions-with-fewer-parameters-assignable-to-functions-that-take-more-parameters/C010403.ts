/*
 * Type System Behavior
 *     Why are functions with fewer parameters assignable to functions that take more parameters?
 */

console.log("\n-------------------------------------------------- 01");

/*
 * 直接定义函数的时候也是一样的，
 * 函数的实际参数，可以少于类型中定义的参数
 */
const fn: (x: number, y: number) => void = (x: number) => {
  console.log(x);
};

/*
 * 但是在执行函数的时候，实参必须跟声明类型的参数一致
 */
fn(9, 99); // 9

export {};
