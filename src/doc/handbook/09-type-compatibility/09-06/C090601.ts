/*
 * Type Compatibility
 *     Generics
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 对于 generic interface 或者 generic class 来说，
   * 只有当它们的属性的类型中使用了该 generic parameter 时，
   * 该 generic parameter 才会影响类型兼容；
   */

  /*
   * 泛型参数 T 没有被它的属性用在它们的类型当中，
   * 因此泛型参数 T 不影响类型兼容；
   */
  interface Empty<T> {
    name: string;
  }

  let x: Empty<number> = { name: "foo" };
  let y: Empty<string> = { name: "bar" };

  x = y;
  y = x;
}

console.log("\n-------------------------------------------------- 02");
{
  interface NotEmpty<T> {
    /*
     * 泛型参数 T 被用在了属性 data 的类型中，
     * 因此泛型参数 T 会影响类型兼容；
     */
    data: T;
  }

  /*
   * 这时候在比较类型的时候，泛型参数会被替换为实际的类型，
   * 相当于比较没有泛型参数的类型；
   */
  let x: NotEmpty<number> = { data: 9 };
  let y: NotEmpty<string> = { data: "foo" };

  /*
   * TS2322: Type 'NotEmpty<string>' is not assignable to type 'NotEmpty<number>'.
   *     Type 'string' is not assignable to type 'number'.
   */
  /*
    x = y;
  */
}

export {};
