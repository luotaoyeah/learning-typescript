/*
 * Declaration Merging
 *     Merging Namespaces with Class
 */

console.log("\n-------------------------------------------------- 01");
/*
 * namespace 和 class 可以合并
 * 此时，需要将 namespace 的声明放到 class 的声明后面
 *
 * 这种方式的合并，相当于通过 namespace 给 class 添加了静态属性，
 * 即直接在构造函数上添加属性
 */

class Person {
  fn01() {
    console.log(Person.PI);
  }

  /*
   * 可以直接在 class 中定义静态方法
   */
  static fn03() {
    console.log("STATIC FN 03");
  }
}

namespace Person {
  /*
   * 添加静态属性
   */
  export const PI = 3.14;

  /*
   * 实现内部类（inner class）
   */
  export class Boy {
    run() {
      console.log("RUNNING");
    }
  }

  /*
   * 可以通过跟 namespace 合并的方式，添加静态方法
   */
  export function fn02() {
    console.log("STATIC FN 02");
  }
}

new Person().fn01(); // 3.14
new Person.Boy().run(); // RUNNING
Person.fn02(); // STATIC FN 02

Person.fn03(); // STATIC FN 03

export {};
