/*
 * Enums
 *     const enums
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * enum 关键字前面加上 const 关键字，将 enum 定义为一个 const enum，
   * const enum 在编译之后，不会在 JS 中生成真正的对象，所有用到该 enum 的地方都会被替换为真正的值，
   * 因此，const enum 的成员的值，只能是 constant enum expression，不能是 computed value；
   */

  const enum enum01 {
    A,
    B = enum01.A + 3,
    C = 9
  }

  console.log(enum01.A, enum01.B);
}

/* 编译之后的 JS 代码 */
/*
  {
    console.log(0 /!* A *!/, 3 /!* B *!/);
  }
*/
