/*
 * Tuple
 */

/*
 * tuple（元组）类似一个 array：
 *     元素的数量固定；
 *     元素的类型可以不同；
 */

console.log("\n-------------------------------------------------- 01");

const tuple01: [string, number] = ["foo", 9];

/*
  // TS2322: Type '[string, string]' is not assignable to type '[string, number]'
  tuple01 = ["foo", "bar"];
*/

export {};
