/*
 * Advanced Types
 *     Discriminated Unions
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * discriminated union 中的 discriminant 属性的类型，
   * 必须是 string literal 或者 numeric literal
   * 其他类型无法实现 type guard
   */

  interface Foo {
    kind: string;
    name: string;
  }

  interface Bar {
    kind: number;
    age: number;
  }

  /*
    function doSome(x: Foo | Bar) {
      switch (typeof x.kind) {
        case "string":
          return x.name.toUpperCase(); // TS2339: Property 'name' does not exist on type 'Foo | Bar'.
        case "number":
          return x.age.toFixed(2); // TS2339: Property 'age' does not exist on type 'Foo | Bar'.
      }
    }

    console.log(doSome({ kind: 10, age: 9 }));
  */
}

export {};
