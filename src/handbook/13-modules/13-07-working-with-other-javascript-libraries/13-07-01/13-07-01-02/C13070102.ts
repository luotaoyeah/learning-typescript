/*
 * Modules
 *     Working with Other JavaScript Libraries
 *         Ambient Modules
 *             Shorthand ambient modules
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 可以只声明 module，而不声明 module 中具体的 API，
 * 这种称之为 shorthand ambient module
 * 此时，从该 module 中引入的数据都是 any 类型
 */

import x, { y } from "C1307010201";

/*
 * x 和 y 都是 any 类型
 */
console.log(x + y);
