/*
 * Type System Behavior
 *     Why are functions with fewer parameters assignable to functions that take more parameters?
 *         common js pattern
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 这也是 JS 中常见的一种模式，
 * 比如 Array.prototype.forEach() 方法的回调函数，
 * 我们在调用时，它始终都会给我们提供三个参数：value，index，array，
 * 但是我们通常只会关心第一个参数，也因此只需要声明第一个参数
 */

[1, 2, 3].forEach(value => {
  console.log(value);
});

export {};
