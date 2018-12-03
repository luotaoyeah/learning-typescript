/*
 * Enums
 *     String enums
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 枚举成员的值可以设置为一个 string 类型的值，
   * 相比于 number 类型的值，string 类型的值可以传递给多的信息；
   * string 类型的值不能自增；
   */
  enum Direction {
    LEFT = "left",
    RIGHT = "right",
    TOP = "top",
    BOTTOM = "bottom"
  }

  console.log(Direction.LEFT, Direction.RIGHT); // left right
}
