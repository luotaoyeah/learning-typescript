/*
 * Generics
 *     Generic Constraints
 *         Using Type Parameters in Generic Constraints
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 在定义多个 generic parameters 的时候，
   * 可以使用某个 generic parameter 作为另外一个 generic parameter 的 generic constraint；
   * 如下：泛型约束（K extends keyof T）表示 K 必须是 T 的某个属性；
   */

  function keyOf<T, K extends keyof T>(obj: T, key: K): any {
    return obj[key];
  }

  console.log(keyOf({ name: "tom", age: 18 }, "name"));
  console.log(keyOf({ name: "tom", age: 18 }, "age"));
}

export {};
