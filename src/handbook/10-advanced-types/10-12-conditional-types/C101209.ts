/*
 * Advanced Types
 *     Conditional Types
 *         Type inference in conditional types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 考虑这样一种场景：
   * 对于条件类型（T extends U ? X : Y），如何实现：
   *     当 T 是一个函数时，结果类型为该函数的返回类型？
   * 这时，需要使用 infer 声明
   * 在条件子句中使用 infer 引入新的类型变量，该类型变量可以用在 true 分支中
   */

  type ReturnType<T> = T extends () => infer R ? R : any;

  function fn01(): number {
    return 9;
  }

  type T01 = ReturnType<typeof fn01>;
  // @ts-ignore
  const t01: T01 = "0"; // TS2322: Type '"0"' is not assignable to type 'number'.
}

export {};
