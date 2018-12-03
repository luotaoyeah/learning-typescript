/*
 * Generics
 *     Generic Constraints
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 默认情况下，使用 generic parameter 标注的变量的类型为任意类型；
   * 如果要对 generic parameter 所能表示的类型进行限制和约束，需要使用泛型约束（generic constraint）；
   */

  interface ILength {
    length: number;
  }

  /*
   * 在没有使用 generic constraint 的情况下，arg 可以是任意类型，
   * 此时，不能保证 arg.length 属性肯定存在，因此报错；
   */
  function identity01<T>(arg: T): T {
    /*
        console.log(arg.length); // TS2339: Property 'length' does not exist on type 'T'.
    */
    return arg;
  }

  /*
   * 在使用了 generic constraint 的情况下，arg 不再是任意类型，
   * 而是被限制为'任意具有 length 属性的类型'，
   * 此时，arg.length 属性肯定存在；
   */
  function identity02<T extends ILength>(arg: T): T {
    console.log(arg.length);
    return arg;
  }

  /*
   * 调用泛型方法时，泛型参数的值必须满足泛型约束；
   */
  /*
    identity02(8); // TS2345: Argument of type '8' is not assignable to parameter of type 'ILength'.
  */

  identity02([1, 2, 3]);
}

export {};
