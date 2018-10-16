/*
 * Generics
 *     Working with Generic Type Variables
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 当使用泛型标注某个变量的类型时，该变量在编译时期可以是任意类型；
   */

  function identity<T>(arg: T): T {
    /*
     * 此时，arg 可以是任意类型，比如 number，
     * 而 number 是没有 length 属性的，所以这里访问 arg.length 会报错；
     */
    /*
        console.log(arg.length); // Property 'length' does not exist on type 'T'.
    */

    return arg;
  }
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 我们可以使用泛型参数，组合出其他的复杂类型，
   * 比如：由类型 T 得到类型 Array<T>，即元素类型为 T 的数组；
   */

  function identity<T>(arg: Array<T>): Array<T> {
    /*
     * 此时，参数 arg 的类型为 Array<T>，
     * 即 arg 肯定是一个数组，所以 arg.length 属性肯定存在；
     */
    console.log(arg.length);
    return arg;
  }

  console.log(identity([1, 2, 3]));
}

export {};
