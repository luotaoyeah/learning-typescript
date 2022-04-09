/*
 * Module Resolution
 *     Relative vs. Non-relative module imports
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 模块解析（module resolution）：
 *     TS 编译器根据模块引入语句，解析对应的模块的定义的过程
 * 最终的解析结果，
 *     可能会定位到某个具体的文件，
 *     也可能会定位到某个 ambient 定义
 */

/*
 * 相对地址（relative）是指：
 *     以 / 或者 ./ 或者 ../ 开头的地址
 * 相对地址只能解析到某个具体的文件（.ts，.tsx，.d.ts），不能解析为 ambient 定义
 * 相对地址通常用于本地代码文件
 */

/* 非相对地址（non-relative）是指：
 *     除了相对地址以外，其他都是非相对地址
 * 非相对地址的解析策略为：
 *     1. 相对于 baseUrl 地址
 *     2. 根据地址映射进行解析
 *     3. 解析为 ambient 定义
 * 非相对地址通常用于外部代码库
 */

export {};
