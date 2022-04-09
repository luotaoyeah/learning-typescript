/*
 * Classes
 *     Why does this get orphaned in my instance methods?
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 问题描述：
   *    为什么下面的 fn01() 方法中的 this 不是该类的实例对象 ？
   */

  class A {
    x: number = 9;

    fn01() {
      console.log(this.x);
    }
  }

  const a = new A();
  setTimeout(a.fn01, 0); // undefined
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 问题分析：
   *     这个问题是由 JS 中的 this 问题导致的
   */

  class A {
    x: number = 9;

    fn01() {
      console.log(this.x);
    }
  }

  const a = new A();
  setTimeout(a.fn01.bind(a), 0); // 9
}
export {};
