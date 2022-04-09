/*
 * Modules
 *     Working with Other JavaScript Libraries
 *         Ambient Modules
 *             UMD modules
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 对于 UMD 格式的代码库，
 * 它既可以作为模块引入，也可以直接使用全局变量，
 * 此时，需要使用 export as namespace XXX 的形式声明全局变量
 */

/*
 * 在脚本文件（非模块文件）中，可以直接使用全局变量
 */
/*
  C1307010301.f();
*/

/*
 * 在模块文件中，可以通过 import 引入数据
 */
/*
  import { f } from "./C1307010301";
  f();
*/
