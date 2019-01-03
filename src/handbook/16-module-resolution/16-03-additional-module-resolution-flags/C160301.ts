/*
 * Module Resolution
 *     Additional module resolution flags
 *         baseUrl
 */

console.log("\n-------------------------------------------------- 01");
/*
 * baseUrl 用来指定 non-relative 地址的解析策略，
 *     如果指定了 baseUrl，则 non-relative 地址会相对于 baseUrl 表示的目录进行解析
 *
 * baseUrl 对于 relative 地址没有影响，relative 地址始终是相对于其当前目录进行解析的
 *
 * baseUrl 可以通过命令行参数指定，也可以通过 tsconfig.json 指定，
 * 当 baseUrl 的值是一个相对路径时，它的最终值是这样计算的：
 *     1. 如果是通过命令行参数指定，则是相对于当前目录的相对路径
 *     2. 如果是通过 tsconfig.json 指定的，则是相对于 tsconfig.json 所在目录的相对路径
 */

export {};
