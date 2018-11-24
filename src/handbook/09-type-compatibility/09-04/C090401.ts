/*
 * Type Compatibility
 *     Enums
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 对于使用默认值的的 enum 成员，其类型是 number，
   * 因此 enum 跟 number 是互相兼容的；
   */

  enum E {
    A,
    B
  }

  /* enum 可以赋值给 number 类型 */
  let n: number = E.B;
  console.log(n); // 1

  /* number 可以赋值给 enum 类型 */
  let m: E = 2;
  console.log(m); // 2
}

console.log("\n-------------------------------------------------- 02");
{
  enum E {
    A = "a",
    B = 9
  }

  let n: string = E.A;
  let m: number = E.B;
  console.log(n, m); // a 9
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * 不同的 enum 之间互不兼容
   */

  enum E01 {
    A,
    B
  }

  enum E02 {
    A,
    B
  }

  /*
    let n: E01 = E02.A; // TS2322: Type 'E02.A' is not assignable to type 'E01'.
  */
}
