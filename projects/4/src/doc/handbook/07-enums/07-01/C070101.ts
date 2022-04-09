/* eslint-disable no-shadow */
/*
 * Enums
 *     Numeric enums
 */

/*
 * TS 提供了基于 number 的枚举和基于 string 的枚举，
 * 即枚举成员的类型可以是 number 或者 string；
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 如果没有设置初始值，则第一个成员的值为 0，依次递增；
   * 通常在不需要关注枚举成员的具体的值的时候，可以省略初始值；
   */
  enum Direction {
    LEFT,
    RIGHT
  }

  console.log(Direction.LEFT, Direction.RIGHT); // 0 1
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 如果某个成员设置了 number 类型的初始值，则从它开始，后面的成员的值依次递增；
   */
  enum Direction {
    LEFT,
    RIGHT = 3,
    TOP,
    BOTTOM
  }

  console.log(Direction.LEFT, Direction.RIGHT, Direction.TOP, Direction.BOTTOM); // 0 3 4 5
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * 未设置初始值的成员，必须：
   *     要么是第一个成员，
   *     要么位于‘使用数字常量初始化，或者使用数字常量成员初始化’的数字类型成员之后；
   */

  /* 1. （A）是第一个成员 */
  enum enum01 {
    A,
    B = 2,
    C = 4
  }

  console.log(enum01.A); // 0

  /* 2. （B）位于 A 后面，而 A 是使用数字常量 1 初始化的数字类型成员 */
  enum enum02 {
    A = 1,
    B,
    C = 4
  }

  console.log(enum02.B); // 2

  /* 3. （C）位于 B 后面，而 B 是使用其他数字常量成员 A 初始化的数字类型成员 */
  enum enum03 {
    A = 1,
    B = enum03.A + 2,
    C
  }

  console.log(enum03.C); // 4

  function fn01() {
    return 3;
  }

  /*
   * 如下：A 使用非常量进行初始化，则它后面的 B 也必须进行初始化；
   */
  enum enum04 {
    A = (function fn01() {
      return 3;
    })()
    /*
        B // TS1061: Enum member must have initializer.
    */
  }
}
