/*
 * Enums
 *     Enums at runtime
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * enum 在编译为 JS 之后，会生成真正的对象，其属性为各个枚举成员；
   */
  enum E {
    X,
    Y,
    Z
  }

  function fn(obj: { X: number }) {
    return obj.X;
  }

  /*
   * 枚举 E 具有属性 X，且其类型为 number；
   */
  fn(E);
}

/* 编译之后的 JS 代码 */
/*
  {
    var E = void 0;
    (function (E) {
      E[E["X"] = 0] = "X";
      E[E["Y"] = 1] = "Y";
      E[E["Z"] = 2] = "Z";
    })(E || (E = {}));
    function fn(obj) {
      return obj.X;
    }

    fn(E);
  }
*/
