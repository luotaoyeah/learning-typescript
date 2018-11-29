/*
 * Advanced Types
 *     Type Guards and Differentiating Types
 *         typeof type guards
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 在 type guard function 中，除了可以通过'判断对象是否拥有某个属性'来判断它的类型之外，
   * 还可以通过 typeof 的结果来判断对象的类型，如下：
   */

  function isNumber(x: any): x is number {
    return typeof x === "number";
  }

  function isString(x: any): x is string {
    return typeof x === "string";
  }

  function fn01(x: string | number) {
    if (isNumber(x)) {
      console.log(x.toFixed(2));
    }

    if (isString(x)) {
      console.log(x.toUpperCase());
    }
  }
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 当通过 typeof 的方式来判断某个对象的类型时，
   * 如果该对象是 primitive type（number，string，boolean，symbol）
   * 则 TS 会直接将 typeof 语句识别为 type guard，而不再需要定义 type guard function
   *
   * 注意，只有当 typeof 语句中的类型为 number，string，boolean，symbol 中的某一个时，
   * 才会被直接当成 type guard，其他的类型不会被当成 type gurad
   */

  function fn01(x: number | string) {
    if (typeof x === "number") {
      console.log(x.toFixed(2));
    } else {
      console.log(x.toUpperCase());
    }
  }
}
