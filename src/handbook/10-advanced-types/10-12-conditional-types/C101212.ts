/*
 * Advanced Types
 *     Conditional Types
 *         Type inference in conditional types
 *             call signatures
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 使用 infer 声明，可以提取函数的返回类型，
   * 当函数有多个重载时，提取出来的结果类型为最后一个函数重载（不是函数实现）的返回类型，
   * 通常最后一个函数重载的类型是最宽松的类型
   */

  function fn01(x: number): number;
  function fn01(x: string): string;
  function fn01(x: any): any {
    return "0";
  }

  type ReturnType<T> = T extends (...args: Array<any>) => infer R ? R : any;
  type T01 = ReturnType<typeof fn01>;
  const t01: T01 = true; // TS2322: Type 'true' is not assignable to type 'string'.
}

export {};
