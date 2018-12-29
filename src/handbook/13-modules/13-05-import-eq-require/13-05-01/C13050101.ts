/*
 * Modules
 *     export = and import = require()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * CommonJS 和 AMD 支持一种特殊的模块输出方式：module.exports = sth
 * TS 可以通过 export = sth 的方式来支持这种方式，
 * 此时，需要使用 import sth = require('somemodule') 的方式来引入
 */

/*
 * 实际上，ES2015 以及 TS 中的 export default 就是用来替代这种方式的
 */

/*
 * 使用这种方式时，compilerOptions.module 需要设置为 "commonjs" 或者 "amd"
 */

/*
  export = function() {
    console.log("HAHA");
  };
*/
