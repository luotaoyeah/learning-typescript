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
   * 可以使用 never 类型来实现
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

  function assertNever(x: never): never {
    throw new Error("类型错误");
  }

  function doSome(x: Foo | Bar | Baz) {
    switch (x.kind) {
      case "foo":
        return x.name.toUpperCase();
      case "bar":
        return x.age.toFixed(2);
      default:
        /*
         * 如果代码执行到这里，那么 x 的类型一定是 Baz，
         * 即这里的 x 永远不可能为 never，因此编译报错
         */
        assertNever(x); // TS2345: Argument of type 'Baz' is not assignable to parameter of type 'never'.
    }
  }

  console.log(doSome({ kind: "baz", adult: true }));
}

export {};
