/**
 * New unknown top type
 *     sumary
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * unknown 和 any 的区别是什么？什么时候使用 unknown？
   * unknown 的一个主要特性是：
   *     如果一个对象的类型是 unknown 类型，那么当我们想进一步使用它的属性和方法时，
   *     必须首先对它进行类型断言（type assertion）或者缩小类型范围（narrow），
   *     因此 unknown 类型的一个主要作用就是：告诉使用者，在使用这个对象时，需要先对它的类型进行细化
   */

  let x: unknown = 9;

  console.log((x as number).toFixed(2)); // 9.00
}

export {};
