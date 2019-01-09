/*
 * Symbols
 *     Well-known Symbols
 *         Symbol.toPrimitive
 *
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * [Symbol.toPrimitive] 方法，
   * 当需要将对象隐式转换为：string，number，default 时，会调用该方法，
   * 用来代替旧的 valueOf() 方法（TODO 待验证）
   */

  const obj = {
    [Symbol.toPrimitive](hint: "string" | "number" | "default") {
      if (hint === "string") {
        return "STRING";
      }

      if (hint === "number") {
        return 99;
      }

      return "DEFAULT";
    }
  };

  console.log(`${obj}`); // STRING
  console.log(+obj); // 99
  console.log(obj + ""); // DEFAULT
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 在 ES2015 之前，如果需要进行隐式类型转换，
   * 如果需要转换为 string，则首先调用 toString() 方法，如果没有则调用 valueOf() 方法，
   * 如果需要转换为 number，则首先调用 valueOf() 方法，如果没有则调用 toString() 方法
   */

  const obj = {
    valueOf() {
      return 99;
    },
    toString() {
      return "STRING";
    }
  };

  console.log(`${obj}`); // STRING
  console.log(+obj); // 99
  console.log(obj + ""); // 99
}

export {};
