/*
 * Advanced Types
 *     Nullable types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * null 和 undefined 是两个特殊的类型，分别对应 null 和 undefined
   * 默认情况下，null 和 undefined 可以赋值给任意类型，如下：
   */
  const x: number = null;
  const y: string = undefined;
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 当开启 --strictNullChecks 时，
   * null 只能赋值给 null 类型，
   * undefined 只能赋值给 undefined 类型
   */

  const x: number | null = null;
  const y: string | undefined = undefined;
}
