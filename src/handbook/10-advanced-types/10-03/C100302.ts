/*
 * Advanced Types
 *     Type Guards and Differentiating Types
 *         User-Defined Type Guards
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 可以定义一种特殊的 function，称之为类型守护（type guard），
   * 这种 function 的返回类型是一个类型谓语（type predicate），
   * 形式为：param is T
   * 其中 param 是一个参数的名字，T 是某个类型
   */

  interface Fish {
    swim(): void;
  }

  interface Bird {
    fly(): void;
  }

  /**
   *
   * @param pet
   */
  function isFish(pet: Fish | Bird): pet is Fish {
    return !!(pet as Fish).swim;
  }

  function fn01(pet: Fish | Bird) {
    if (isFish(pet)) {
      /*
       * 在 if 分支中，可以确定 pet 的类型一定就是 Fish，
       * 不再需要使用类型断言
       */
      pet.swim();
    } else {
      /*
       * 在 else 分支中，可以确定 pet 的类型一定就是 Bird，
       * 不再需要使用类型断言
       */
      pet.fly();
    }
  }
}
