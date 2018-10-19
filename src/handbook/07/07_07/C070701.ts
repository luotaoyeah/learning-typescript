/*
 * Enums
 *     Reverse mappings
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * number 类型的 enum member 编译之后会生成 reverse mapping，
   * 即可以通过枚举成员的值获取枚举成员名称；
   */
  enum enum01 {
    A,
    B = "b"
  }

  console.log(enum01.A, enum01[enum01.A]); // 0 'A'

  /*
   * string 类型的 enum member 编译之后不会生成 reverse mapping；
   */
  console.log(enum01.B, enum01[enum01.B]); // b undefined

  /* 编译后的 JS 代码 */
  /*
    var enum01 = void 0;
    (function (enum01) {
      enum01[enum01["A"] = 0] = "A";
      enum01["B"] = "b";
    })(enum01 || (enum01 = {}));
  */
}
