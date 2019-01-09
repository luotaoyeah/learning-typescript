/*
 * Type System Behavior
 *     What is type erasure?
 */

console.log("\n-------------------------------------------------- 01");
/*
 * TS 在编译为 JS 之后，所有的类型相关信息都会被删除，
 * 包括：interface，type alias，type annotation 等等，
 * 即 TS 的静态类型检查只存在于编译时期，不存在于运行时期
 */
export {};
