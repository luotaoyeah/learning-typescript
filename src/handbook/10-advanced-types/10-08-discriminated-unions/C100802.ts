/*
 * Advanced Types
 *     Discriminated Unions
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * discriminated union 中的 discriminant 属性的类型，
   * 可以是 string literal，也可以是 numeric literal
   */
  interface Foo {
    kind: 9;
    name: string;
  }

  interface Bar {
    kind: 99;
    age: number;
  }

  function doSome(x: Foo | Bar) {
    switch (x.kind) {
      case 9:
        return x.name.toUpperCase();
      case 99:
        return x.age.toFixed(2);
    }
  }

  console.log(doSome({ kind: 99, age: 9 })); // 9.00
}

export {};
