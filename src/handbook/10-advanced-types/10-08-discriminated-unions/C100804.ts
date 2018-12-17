/*
 * Advanced Types
 *     Discriminated Unions
 *         Exhaustiveness checking
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 在使用 discriminated union 时，通常需要确保所有的类型都考虑到了
   */

  /*
   * 可以通过 --strictNullChecks=true + 显示申明返回类型 来实现
   */

  interface Foo {
    kind: "foo";
    name: string;
  }

  interface Bar {
    kind: "bar";
    age: number;
  }

  interface Baz {
    kind: "baz";
    adult: boolean;
  }

  /*
    // TS2366: Function lacks ending return statement and return type does not include 'undefined'.
    function doSome(x: Foo | Bar | Baz): string | number {
      switch (x.kind) {
        case "foo":
          return x.name.toUpperCase();
        case "bar":
          return x.age.toFixed(2);
      }
    }

    console.log(doSome({ kind: "baz", adult: true }));
  */
}

export {};
