/*
 * Module Resolution
 *     Module Resolution Strategies
 *         Node
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 当使用的模块解析策略为 node 时，即 --moduleResolution=node 时
 * TS 在解析模块时，跟 nodejs 类似，区别在于：
 *     1. TS 的解析是在编译时进行的，而 nodejs 的解析是在运行时进行的
 *     2. TS 在解析时会依次解析 .ts .tsx .d.ts 三种文件，nodejs 只会解析 .js 文件
 *     3. 对于 package.json 文件，TS 解析的是 types 属性，nodejs 解析的是 main 属性
 *     4. 对于 non-relative 地址，在 package.json 的 types 属性解析失败之后，会多出一步，
 *        会首先解析 node_modules/@types/mod01.d.ts 以及 node_modules/@types/mod01/index.d.ts
 *        然后再解析 node_modules/mod01/index.ts
 */

export {};
