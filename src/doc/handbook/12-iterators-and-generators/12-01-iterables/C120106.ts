/*
 * Iterators and Generators
 *     Iterables
 *         for...in
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * for...in 会遍历继承的属性
   */

  const foo = { x: "x" };
  const bar = { y: "y" };
  Object.setPrototypeOf(bar, foo);

  console.log(Object.getOwnPropertyNames(bar)); // [ 'y' ]
  // eslint-disable-next-line guard-for-in
  for (const i in bar) {
    // y
    // x
    console.log(i);
  }
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 通常需要在 for...in 循环中，通过 Object.prototype.hasOwnProperty() 方法，
   * 排除继承的属性，只遍历自有属性
   */

  const foo = { x: "x" };
  const bar = { y: "y" };
  Object.setPrototypeOf(bar, foo);

  for (const i in bar) {
    if (bar.hasOwnProperty(i)) {
      console.log(i); // y
    }
  }
}

export {};
