/*
 * Type System Behavior
 *     How do I check at run-time if an object implements some interface?
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 问题描述：
   *     如何在 runtime 判断某个对象是否实现了某个接口？
   */

  interface A {
    x: number;
  }

  interface B {
    y: string;
  }

  function fn01(obj: A | B) {
    /*
     * 不能对接口使用 instanceof 操作符
     */
    // TS2693: 'A' only refers to a type, but is being used as a value here.
    // @ts-ignore
    // eslint-disable-next-line no-empty
    if (obj instanceof A) {
    }
  }
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 问题分析：
   *     因为 TS 在编译为 JS 之后，所有的类型信息都会被删除，
   *     因此在 runtime 时期，接口已经不存在了，
   *     解决方法是：使用 user-defined type guard 类型守护，
   *     通常可以使用一个类型谓语（type predicate），
   *     判断对象是否拥有某个特定的属性
   */

  interface A {
    x: number;
  }

  interface B {
    y: string;
  }

  function isA(obj: A | B): obj is A {
    return typeof (obj as A).x === "number";
  }

  function fn01(obj: A | B) {
    if (isA(obj)) {
      console.log(obj.x.toFixed());
    } else {
      console.log(obj.y.toUpperCase());
    }
  }

  fn01({ x: 9 }); // 9
  fn01({ y: "foo" }); // FOO
}

export {};
