/*
 * Namespaces and Modules
 *     Pitfalls of Namespaces and Modules
 *     Trade-offs of Modules
 */

console.log("\n-------------------------------------------------- 01");
/*
 * TS 如何定位引入的模块的类型信息？
 *     1. 根据 import 语句中的模块路径，查找 .ts，.tsx，.d.ts 文件，
 *        如果找到，则使用该文件中的类型信息
 *     2. 查找对应的 ambient module declaration
 *        如果找到，则使用该文件中的类型信息
 */

/*
 * 当使用了 module 之后，
 * 只有当 --target 为 amd 或者 system 时，
 * 才能使用 --outFile 将多个模块文件编译到一个 JS 文件中去
 */

export {};
