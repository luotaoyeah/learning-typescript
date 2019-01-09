/*
 * Type Compatibility
 *     Generics
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 当泛型参数没有被指定实际类型的时候，
   * 在比较类型的时候，这些泛型参数会被指定为 any 类型，然后进行类型比较；
   */

  let x = function<T>(x: T): T {
    return x;
  };

  let y = function<U>(y: U): U {
    return y;
  };

  /*
   * 此时，类型参数 T 和 U 都会被指定为 any 类型，
   * 然后比较它们是否类型兼容；
   */
  x = y;
  y = x;
}

export {};
