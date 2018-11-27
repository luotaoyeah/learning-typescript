/*
 * Advanced Types
 *     Union Types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * union type 也是由多个类型组合成的类型，使用 | 分隔多个类型，如：A | B | C
   * 表示实际类型可以是这几个类型中的某一个，要么是 A，要么是 B，要么是 C
   */

  let x: string | number | boolean = true;
  console.log(x.valueOf()); // true
  x = "foo";
  console.log(x.toUpperCase()); // FOO
  x = 9;
  console.log(x.toFixed(2)); // 9.00
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 当一个对象的类型是一个 union type 时，
   * 默认只能访问这几个类型公有的成员；
   */

  class Foo {
    x() {}

    y() {}
  }

  class Bar {
    x() {}

    z() {}
  }

  /*
   * 因为 obj 可能是 Foo 类型，也可能是 Bar 类型，
   * 因此在不确定类型的情况下，只能访问 Foo 和 Bar 共有的成员 x
   */
  const obj: Foo | Bar = {
    x() {},
    y() {},
    z() {}
  } as Foo | Bar;

  obj.x();
}
