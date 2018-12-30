/*
 * Modules
 *     export = and import = require()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * CommonJS 和 AMD 支持一种特殊的模块输出方式：module.exports = sth
 * 如果将 compilerOptions.module 设置为 "commonjs" 或者 "amd"
 * 此时，在 TS 中需要通过 export = sth 的方式来支持这种输出方式，
 * 此时，需要使用 import sth = require('somemodule') 的方式来引入
 */

/*
 * 实际上，ES2015 以及 TS 中的 export default 就是用来替代这种方式的，
 * export default "X" 编译为 commonjs 之后为：
 *     exports["default"] = "X"
 * export = "X" 编译为 commonjs 之后为：
 *     exports = "X"
 */

// @ts-ignore
export = function() {
  console.log("HAHA");
};
