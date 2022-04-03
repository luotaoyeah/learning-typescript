/*
 * Type Inference
 *     Best common type
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 当需要从多个表达式推断类型时，TS 会根据所有表达式的类型，计算出一个最佳共同类型（best common type）；
   */

  /*
   * 如下，arr 的推断类型为：Array<number | null>
   */
  const arr = [0, 1, null];
  for (const i of arr) {
    if (i !== null) {
      console.log(i.toFixed(2));
    }
  }
  const arr02: Array<number | null> = arr;
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 当多个元素拥有共同的父类时，理想情况下，是将该父类作为推断出来的 best common type，
   * 但是因为 best common type 只能从元素的类型中得来，
   * 因此，这时候可以显式地标注类型；
   */

  class A {}

  class B extends A {}

  class C extends A {}

  /*
   * 此时，arr01 的推断类型为：Array<B | C>，而不是 A；
   */
  const arr01 = [new B(), new C()];
  const arr02: Array<B | C> = arr01;

  /*
   * 显式地声明类型为共同的父类 A；
   */
  const arr03: Array<A> = [new B(), new C()];
}
