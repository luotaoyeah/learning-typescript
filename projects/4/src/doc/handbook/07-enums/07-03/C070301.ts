/*
 * Enums
 *     Heterogeneous enums
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 可以某些成员是 number 类型，某些成员是 string 类型；
   */
  enum HeterogeneousEnum {
    A = 18,
    B = "foo"
  }

  console.log(HeterogeneousEnum.A, HeterogeneousEnum.B); // 18 'foo'
}
