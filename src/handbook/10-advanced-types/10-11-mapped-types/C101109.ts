/*
 * Advanced Types
 *     Mapped types
 *         Recored<K, T>
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * Recored<K, T>
   * 根据一组属性名称（K）以及它们的类型（T），创建一个新的类型
   * 即，所有这些属性的类型都是一样的
   */

  type F = Record<"foo" | "bar", boolean>;

  const f: F = { foo: true, bar: false };
}

export {};
