/*
 * Advanced Types
 *     Conditional Types
 *         Predefined conditional types
 *             ReturnType<T>
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * ReturnType<T>
   * 获取函数的返回类型
   */

  function fn01(): number {
    return 0;
  }

  type T01 = ReturnType<typeof fn01>;
  // @ts-ignore
  const t01: T01 = null; // TS2322: Type 'null' is not assignable to type 'number'.
}

console.log("\n-------------------------------------------------- 02");
{
  type MyReturnType<T extends (...args: Array<any>) => any> = T extends (
    ...args: Array<any>
  ) => infer U
    ? U
    : any;

  function fn01(): number {
    return 0;
  }

  type T01 = MyReturnType<typeof fn01>;
  // @ts-ignore
  const t01: T01 = null; // TS2322: Type 'null' is not assignable to type 'number'.
}

export {};
