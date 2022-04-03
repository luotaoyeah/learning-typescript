/*
 * Advanced Types
 *     Type Aliases
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 类似于 interface 中可以使用 generic parameter
   * type alias 中也可以使用 generic parameter
   */

  type Container<T> = { value: T };

  const container01: Container<string> = { value: "foo" };
  const container02: Container<number> = { value: 9 };

  type ContainerBoolean = Container<boolean>;
  const container03: ContainerBoolean = { value: false };
}
