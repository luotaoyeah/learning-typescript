/*
 * Modules
 *     Introduction
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 如果在一个 TS 文件的最顶层使用了 import 或者 export 关键字，
   * 则该文件是一个模块文件（module），
   *     文件中的数据（变量，函数）只对当前模块可见，
   *     除非使用 export 关键字显式输出某个数据
   * 否则，是一个脚本文件（script），
   *     文件中的数据属于全局作用域，对所有地方可见
   */
  /*
   * 在运行时，需要使用模块加载器（module loader）对模块之间的依赖进行解析，
   * 常用的模块加载器：
   *     CommonJS
   *     require.js
   *     AMD（Asynchronous Module Definition）
   *     ESM
   */
}

export {};
