/**
 * const assertions
 *     what problem is const assertion trying to solve ?
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 如果我们使用 const 声明一个 immutable string literal，并且没有显式地标注类型，
   * 则 TS 会将 x 的类型推断为 "foo"
   *
   * 如下，使用 const 声明变量，但是没有显式地标注类型，
   * x 的推断类型式 "foo"
   */
  const x = "foo";

  /*
   * 而如果我们使用 let 声明了一个 mutable string literal，并且没有显式地标注类型，
   * 则 TS 会将 y 的类型推断为 string，这种现象称之为 type widening
   *
   * 如下，使用 let 声明变量，但是没有显式地标注类型，
   * 因此 y 的推断类型是 string
   */
  let y = "foo";
  y = "bar";

  /*
   * 如下，使用 let 声明变量，且显式地标注了类型，
   * 因此 z 的类型是 "foo"
   */
  // tslint:disable-next-line:prefer-const
  let z: "foo" = "foo";
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 这种自动的 type widening 有时候会成为一个问题
   */

  type T01 = { kind: "foo"; foo: number } | { kind: "bar"; bar: number };

  function fn01(): Array<T01> {
    /*
     * 如下，虽然使用了 const 来声明变量，但是对象的属性依然是 mutable 的，
     * 因此，其中的 kind 属性的类型被自动扩展为 string，从而导致编译报错
     */
    const result = [
      { kind: "foo", foo: 0 },
      { kind: "bar", bar: 0 }
    ];

    // @ts-ignore: TS2322
    return result;
  }

  /*
   * 解决方法之一：显式地标注类型
   */
  function fn02(): ReadonlyArray<T01> {
    const result: ReadonlyArray<T01> = [
      { kind: "foo", foo: 0 },
      { kind: "bar", bar: 0 }
    ];
    return result;
  }
}
