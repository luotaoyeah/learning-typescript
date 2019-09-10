/**
 * Improved behavior for calling union types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 对于 union 类型，在类型没有细化之前，我们只能访问各个成员类型的共有属性
   */

  type U = { a: 0; x: 0 } | { b: 0; x: 0 };

  /**
   *
   * @param u
   */

  function fn01(u: U) {
    /*
     * 只能访问共有属性 x
     */

    // TS2339: Property 'a' does not exist on type 'U'.
    //   Property 'a' does not exist on type '{ b: 0; x: 0; }'.
    // @ts-ignore
    console.log(u.a);
    // TS2339: Property 'b' does not exist on type 'U'.
    //   Property 'b' does not exist on type '{ a: 0; x: 0; }'.
    // @ts-ignore
    console.log(u.b);

    console.log(u.x);
  }
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 如果一个 union 类型的成员都是函数，在类型没有细化之前，
   * 在 ts@3.3 之前，只有当所有函数的参数列表都一样时，才能调用这个 union 类型
   * 在 ts@3.3 之后，会将所有函数的参数通过 intersection 创建一个新的函数签名，
   * 如下：
   *     F
   *     ((x: A) => number) | ((x: B) => string)
   *     (x: A & B) => number | string
   *     (x: ("a" | "x") & ("b" | "x")) => number | string
   *     (x: ("a" & "b") | ("a" & "x") | ("x" & "b") | ("x" & "x")) => number | string
   *     (x: ("x" & "x")) => number | string
   *     (x: "x") => number | string
   *
   * 因此 f 的最终类型为 (x: "x") => number | string
   */

  type A = "a" | "x";
  type B = "b" | "x";

  type F = ((x: A) => number) | ((x: B) => string);

  function fn01(f: F) {
    // @ts-ignore
    f("a"); // TS2345: Argument of type '"a"' is not assignable to parameter of type '"x"'.
    // @ts-ignore
    f("b"); // TS2345: Argument of type '"a"' is not assignable to parameter of type '"x"'.

    // ts@3.3 之前，下面的代码会报如下错误：
    //     TS2349: Cannot invoke an expression whose type lacks a call signature. Type 'F' has no compatible call signatures.
    f("x");

    // ts@3.3 之后，下面的代码不会报错
    f("x");
  }
}

export {};
