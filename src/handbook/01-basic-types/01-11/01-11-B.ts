/*
 * 如果一个变量的值为：一个返回类型为 never 的函数的返回值，
 * 则该变量的类型为 never；
 */
console.log("\n-------------------------------------------------- 01");

const foo: never = (function fn01(): never {
  throw new Error("error");
})();

export {};
