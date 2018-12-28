/*
 * Modules
 *     Default exports
 *        default export a variable
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 只有类，函数，接口的声明，可以直接指定为默认输出，
 * 对于变量和类型别名，需要先声明变量，再指定为默认输出
 */

const name: string = "BAR";
export default name;

/*
  type T = "T";
  export default T;
*/
