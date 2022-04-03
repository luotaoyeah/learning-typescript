/*
 * Advanced Types
 *     Mapped types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 类型经过映射之后，属性原来的修饰符（如：readonly）会被保留
   */

  type Readonly<T> = { readonly [K in keyof T]: T[K] };

  interface Person {
    name?: string;
  }

  type ReadonlyPerson = Readonly<Person>;

  /* name 属性依然是 optional 的 */
  const person01: ReadonlyPerson = { name: undefined };
  /* 同时，name 属性变成了 readonly 的 */
  /*
    person01.name = "FOO"; // TS2540: Cannot assign to 'name' because it is a read-only property.
  */
}

export {};
