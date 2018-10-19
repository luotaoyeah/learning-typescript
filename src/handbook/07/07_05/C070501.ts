/*
 * Enums
 *     Union enums and enum member types
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * literal enum member 是一种特殊的 constant enum member，
   * 它没有初始值，或者初始值为 literal string 或 literal number；
   */

  // 如下，A，B，C，D 都是 literal enum member
  enum enum01 {
    A, // 没有初始值
    B = "foo", // 初始值为 literal string
    C = 9, // 初始值为 literal number
    D = -9 // 初始值为 - literal number
  }
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 如果一个 enum 的所有 member 都是 literal enum member，
   * 则该 enum 有一些特殊的特性：
   *     1. 枚举成员可以作为类型；
   */

  enum enum01 {
    A = (function() {
      return 9;
    })(),
    B = 18
  }

  // 由于 enum01.A 不是 literal enum member，因此枚举成员不能作为类型；
  /*
    let a: enum01.B = enum01.B; // TS2535: Enum type 'enum01' has members with initializers that are not literals.
  */

  enum enum02 {
    A = 9,
    B = 18
  }

  // FIXME 为什么可以将 0 赋值给 b ?
  let b: enum02.B = 0;
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * 2. 该枚举类型成为一个 union type；
   */
  enum enum01 {
    A,
    B
  }

  function f(e: enum01) {
    // TS2367: This condition will always return 'true' since the types 'enum01.A' and 'enum01.B' have no overlap.
    /*
        if (e !== enum01.A || e !== enum01.B) {
        }
    */
  }

  enum enum02 {
    A,
    B = enum02.A + 1
  }

  function f1(e: enum02) {
    /*
     * enum02.B 不是一个 literal enum member，
     * 因此 enum02 不是一个 union type；
     */
    if (e !== enum02.A || e !== enum02.B) {
    }
  }
}
