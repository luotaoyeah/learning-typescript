/*
 * Advanced Types
 *     Conditional Types
 *         Type inference in conditional types
 *             regular type parameter
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 在普通的类型参数（泛型约束）中，不能使用 infer 声明
   */

  // @ts-ignore
  type ReturnType<T extends () => infer R> = R; // TS1338: 'infer' declarations are only permitted in the 'extends' clause of a conditional type.
}

export {};
